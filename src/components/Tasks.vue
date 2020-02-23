<template>
    <v-row justify="center">
        <task-item
                label="Pomodoro"
                name="pomodoro"/>
        <task-item
                label="Short Break"
                name="shortBreak"/>
        <task-item
                label="Long Break"
                name="longBreak"/>
    </v-row>
</template>

<script>
    export default {
        name: "Tasks"
    }
</script>

<style scoped>

</style>