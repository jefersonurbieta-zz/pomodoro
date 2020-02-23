<template>
    <v-btn
            class="task-item"
            :text="$store.state.task !== name"
            :depressed="$store.state.task === name"
            dark
            :color="$store.state.task === name ? 'rgba(0, 0, 0, 0.15)' : ''"
            @click="clickEvent">
        {{label}}
    </v-btn>
</template>

<script>
    import actionTypes from '../store/action-types'

    export default {
        name: "TasksItem",
        props: {
            label: {
                type: String
            },
            name: {
                type: String
            }
        },
        methods: {
            clickEvent() {
                this.$store.dispatch(actionTypes.ALTER_TASK, this.name)
                this.$emit('click', this.name)
            }
        }
    }
</script>

<style scoped>
</style>