<template>
    <v-menu offset-y top open-on-hover fixed content-class="elevation-0" nudge-top="0">
        <template v-slot:activator="{ on }">
            <v-btn color="transparent"
                   depressed
                   dark
                   v-on="on">
                <span class="event-message">{{$store.state.activity[0].message}}</span>
                <span class="event-time"> - {{$store.state.activity[0].time | dateHumanize}}</span>
            </v-btn>
        </template>
        <v-list class="elevation-0" color="transparent">
            <v-list-item
                    v-for="(item, index) in activityOld"
                    :key="index">
                <v-hover v-slot:default="{ hover }">
                    <v-list-item-title>
                        <span class="event-message">{{ item.message }}</span>
                        <span v-show="hover" class="event-time"> - {{item.time | dateHumanize}}</span>
                    </v-list-item-title>
                </v-hover>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    import moment from 'moment'

    export default {
        name: "Activity",
        computed: {
            activityOld() {
                if(this.$store.state.activity.length > 1) {
                    const activityOld = this.$store.state.activity.slice(1, this.$store.state.activity.length > 6 ? 6 : this.$store.state.activity.length).reverse()
                    return activityOld
                }
                return []
            }
        },
        filters: {
            dateHumanize (value) {
                const end = moment(value)
                const duration = moment.duration(end.diff(moment()))
                return duration.humanize(true)
            }
        }
    }
</script>

<style scoped>
    .event-message {
        color: rgba(255,255,255,.95);
        font-size: .8em;
    }

    .event-time {
        color: rgba(255,255,255,.4);
        font-size: .8em;
    }

    .v-list-item {
        min-height: 32px;
    }
</style>