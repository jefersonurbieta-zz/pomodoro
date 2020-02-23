<template>
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
            <v-btn
                    color="white"
                    text
                    dark
                    v-on="on">
                About pomodoro
            </v-btn>
        </template>

        <v-card>
            <v-card-title>
                About pomodoro

                <v-spacer/>

                <v-btn icon @click="dialog = false">
                    <v-icon>fas fa-times</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider/>

            <v-card-text>
                <p>The <b>Pomodoro Technique</b> is a time management method developed by <a href="https://en.m.wikipedia.org/wiki/Francesco_Cirillo" class="new" title="Francesco Cirillo (page does not exist)">Francesco Cirillo</a> in the late 1980s.
                    The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.
                    Each interval is known as a <i>pomodoro</i>, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.
                </p>

                <p>
                    The technique has been widely popularized by dozens of apps and websites providing timers and instructions.
                    Closely related to concepts such as timeboxing and iterative and incremental development used in software design, the method has been adopted in pair programming contexts.
                </p>

                <p>There are six steps in the original technique:
                </p>
                <ol>
                    <li>Decide on the task to be done.</li>
                    <li>Set the pomodoro timer (traditionally to 25 minutes).</li>
                    <li>Work on the task.</li>
                    <li>End work when the timer rings and put a checkmark on a piece of paper.</li>
                    <li>If you have fewer than four checkmarks, take a short break (3–5 minutes), then go to step 2.</li>
                    <li>After four pomodoros, take a longer break (15–30 minutes), reset your checkmark count to zero, then go to step 1.</li>
                </ol>
            </v-card-text>

            <v-divider/>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        color="primary"
                        text
                        @click="dialog = false">
                    OK
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "AboutPomodoro",
        data: () => ({
            dialog: false
        })
    }
</script>

<style scoped>
</style>