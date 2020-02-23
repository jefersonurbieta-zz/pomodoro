import actionTypes from './action-types'
import mutationTypes from './mutation-types'

export default {

    [actionTypes.ADD_ACTIVITY]({commit, state}, kind) {
        let sessionName = 'work'
        if(state.task === 'shortBreak') {
            sessionName = 'short break'
        } else if(state.task === 'longBreak') {
            sessionName = 'long break'
        }

        let message = ''
        switch(kind) {
            case 'RESUMED':
                message = `resumed the current ${sessionName} session`
                break
            case 'RESET':
                message = `restarted the current ${sessionName}`
                break
            case 'START':
                message = `started a ${state.time / 60} minute ${sessionName} session`
                break
            case 'STOP':
                message = `paused the current ${sessionName} session`
                break
        }
        commit(mutationTypes.ADD_ACTIVITY, {
            message,
            time: new Date()
        })
    },

    [actionTypes.ALTER_TASK]({commit, dispatch}, task) {
        commit(mutationTypes.SET_TASK, task)
        dispatch(actionTypes.RESET_TIME)
    },

    [actionTypes.DECREMENT_TIME]({commit, state}) {
        let time = state.time

        if(time > 0) {
            time--
            commit(mutationTypes.SET_TIME, time)
            commit(mutationTypes.SET_PERCENTAGE_OF_PROGRESS, time*100/state.settings[state.task].time)
            return false
        }
        return true
    },

    [actionTypes.RESET_TIME]({commit, dispatch, state}) {
        commit(mutationTypes.SET_INITIATED, false)
        commit(mutationTypes.SET_PERCENTAGE_OF_PROGRESS, 0)
        commit(mutationTypes.SET_RUNNING, false)
        commit(mutationTypes.SET_TIME, state.settings[state.task].time)
        dispatch(actionTypes.ADD_ACTIVITY, 'RESET')
    },

    [actionTypes.START_TIME]({commit, dispatch, state}) {
        if(!state.initiated) {
            dispatch(actionTypes.ADD_ACTIVITY, 'START')
        } else {
            dispatch(actionTypes.ADD_ACTIVITY, 'RESUMED')
        }
        commit(mutationTypes.SET_INITIATED, true)
        commit(mutationTypes.SET_RUNNING, true)
    },

    [actionTypes.STOP_TIME]({commit, dispatch}) {
        dispatch(actionTypes.ADD_ACTIVITY, 'STOP')
        commit(mutationTypes.SET_RUNNING, false)
    },
}
