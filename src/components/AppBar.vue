<template>
    <v-app-bar
            app
            absolute
            color="transparent"
            dark
            flat>
        <div class="d-flex align-center">
            <v-img
                    alt="Logo"
                    src="../assets/logo.svg"
                    width="60"
            />
        </div>

        <v-spacer/>
        <v-spacer/>

        <about-pomodoro/>
        <settings/>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar"
    }
</script>

<style scoped>

</style>