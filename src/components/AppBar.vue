<template>
    <v-app-bar
            app
            absolute
            color="transparent"
            dark
            flat>
        <div class="d-flex align-center">
            <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="40"
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