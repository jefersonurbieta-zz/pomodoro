<template>
    <div class="timer">
        <v-row justify="center">
            <v-card class="timer-display ma-3 pa-6 elevation-0" dark>
                {{prettyTime}}
            </v-card>
        </v-row>
        <v-row
                class="timer-actions"
                justify="center">
            <v-tooltip v-if="!$store.state.running && !$store.state.initiated" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn
                            text
                            dark
                            v-on="on"
                            @click="start">Start</v-btn>
                </template>
                <span>Space</span>
            </v-tooltip>

            <v-tooltip v-if="$store.state.initiated" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn
                            text
                            dark
                            v-on="on"
                            @click="reset">Reset</v-btn>
                </template>
                <span>R</span>
            </v-tooltip>

            <v-tooltip v-if="$store.state.running && $store.state.initiated" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn
                            text
                            dark
                            v-on="on"
                            @click="stop">Pause</v-btn>
                </template>
                <span>Space</span>
            </v-tooltip>

            <v-tooltip v-if="!$store.state.running && $store.state.initiated" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn
                            text
                            dark
                            v-on="on"
                            @click="start">Resume</v-btn>
                </template>
                <span>Space</span>
            </v-tooltip>
        </v-row>
    </div>
</template>

<script>
    import actionTypes from '../store/action-types'

    export default {
        name: "Timer",
        data: () => ({
            timer:null,
            sound:new Audio("http://s1download-universal-soundbank.com/wav/nudge.wav")
        }),
        watch: {
            '$store.state.task'() {
                this.reset()
            }
        },
        computed: {
            prettyTime () {
                let prettyTime = new Date(this.$store.state.time * 1000).toISOString().substr(11, 8)

                if(prettyTime.substr(0, 2) === '00') {
                    return prettyTime.substr(3, prettyTime.length)
                }

                return prettyTime
            }
        },
        created() {
            window.addEventListener('keypress', this.doCommand);
        },
        destroyed() {
            window.removeEventListener('keypress', this.doCommand);
        },
        methods: {
            doCommand(e) {
                let cmd = String.fromCharCode(e.keyCode).toLowerCase();
                console.log(cmd)
                if(cmd === ' ' && !this.$store.state.running) {
                    this.start()
                } else if(cmd === ' ' && this.$store.state.running) {
                    this.stop()
                } else if(cmd === 'r' && this.$store.state.initiated) {
                    this.reset()
                }
            },
            async start () {
                await this.$store.dispatch(actionTypes.START_TIME)
                this.timer = setInterval( async () => {
                    const finished = await this.$store.dispatch(actionTypes.DECREMENT_TIME)

                    let prettyTime = new Date(this.$store.state.time * 1000).toISOString().substr(11, 8)
                    if(prettyTime.substr(0, 2) === '00') {
                        prettyTime = prettyTime.substr(3, prettyTime.length)
                    }
                    document.title = prettyTime

                    if (finished) {
                        clearInterval(this.timer)
                        await this.sound.play()
                        this.reset()
                    }
                }, 1000 )
            },
            async stop () {
                clearInterval(this.timer)
                this.timer = null
                await this.$store.dispatch(actionTypes.STOP_TIME)
            },
            async reset () {
                document.title = 'pomodoro'
                clearInterval(this.timer)
                this.timer = null
                await this.$store.dispatch(actionTypes.RESET_TIME)
            }
        }
    }
</script>

<style scoped>
.timer-display {
    font-size: 5em;
    background: transparent;
}
</style>