export default {
    task: 'pomodoro',
    initiated: false,
    running: false,
    time: 1500,
    percentageOfProgress: 0,
    activity: [
        {
            message: 'entered this pomodoro',
            time: new Date()
        }
    ],
    settings: {
        pomodoro: {
            time: 1500,
            color: 'red'
        },
        shortBreak: {
            time: 300,
            color: 'blue'
        },
        longBreak: {
            time: 600,
            color: 'green'
        }
    }
}
