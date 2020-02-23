<template>
    <v-dialog v-model="dialog" width="500" persistent>
        <template v-slot:activator="{ on }">
            <v-btn
                    color="white"
                    text
                    dark
                    v-on="on">
                Settings
            </v-btn>
        </template>

        <v-card>
            <v-card-title>
                Settings

                <v-spacer/>

                <v-btn icon @click="dialog = false">
                    <v-icon>fas fa-times</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider/>

            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        Time (minutes)
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field
                                v-model="pomodoro"
                                label="Pomodoro"
                                type="number"
                                required
                                :rules="[rules.required, rules.negative]"/>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field
                                v-model="shortBreak"
                                label="Short Break"
                                type="number"
                                required
                                :rules="[rules.required, rules.negative]"/>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field
                                v-model="longBreak"
                                label="Long Break"
                                type="number"
                                required
                                :rules="[rules.required, rules.negative]"/>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-divider/>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        color="primary"
                        text
                        @click="save">
                    OK
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import mutationTypes from '../store/mutation-types'

    export default {
        name: "Settings",
        data: () => ({
            dialog: false,
            pomodoro: undefined,
            shortBreak: undefined,
            longBreak: undefined,
            rules: {
                required: value => !!value || 'This field is required',
                negative: value => value > 0 || 'This field must be greater than zero'
            }
        }),
        mounted() {
            this.pomodoro = this.$store.state.settings.pomodoro.time / 60
            this.shortBreak = this.$store.state.settings.shortBreak.time / 60
            this.longBreak = this.$store.state.settings.longBreak.time / 60
        },
        methods: {
            save() {
                if(this.validateFields()) {
                    const settings = this.$store.state.settings
                    settings.pomodoro.time = this.pomodoro * 60
                    settings.shortBreak.time = this.shortBreak * 60
                    settings.longBreak.time = this.longBreak * 60

                    this.$store.commit(mutationTypes.SET_SETTINGS, settings)
                    this.dialog = false
                }
            },
            validateFields() {
                return this.pomodoro && this.pomodoro > 0
                    && this.shortBreak && this.shortBreak > 0
                    && this.longBreak && this.longBreak > 0
            }
        }
    }
</script>

<style scoped>
</style>