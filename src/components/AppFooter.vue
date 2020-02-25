<template>
    <v-footer
            absolute
            color="transparent">
        <v-col cols="4">
            <activity/>
        </v-col>
        <v-spacer/>
        <v-col class="text-center me"
               cols="4">
            <i class="fab fa-github"></i> View on GitHub
        </v-col>
        <v-spacer/>
        <v-col class="text-right me"
                cols="4">
            {{ new Date().getFullYear() }} - Made with <i class="fas fa-heart fa-beat mr-1 ml-1 heart"></i> by Jeferson Urbieta.
        </v-col>
    </v-footer>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style scoped>
    .me {
        color: rgba(255,255,255,.4);
        font-size: .8em;
    }

    .heart {
        color:red;
    }

    .fa-beat {
        animation:fa-beat 5s ease infinite;
    }
    @keyframes fa-beat {
        0% {
            transform:scale(1);
        }
        5% {
            transform:scale(1.25);
        }
        20% {
            transform:scale(1);
        }
        30% {
            transform:scale(1);
        }
        35% {
            transform:scale(1.25);
        }
        50% {
            transform:scale(1);
        }
        55% {
            transform:scale(1.25);
        }
        70% {
            transform:scale(1);
        }
    }
</style>