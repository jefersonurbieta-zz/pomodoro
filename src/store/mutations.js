import Vue from 'vue'
import mutationTypes from './mutation-types'

export default {
    [mutationTypes.ADD_ACTIVITY](state, value) {
        let activity =  state.activity
        activity.unshift(value)

        Vue.set(state, 'activity', activity)
    },

    [mutationTypes.SET_INITIATED](state, initiated) {
        Vue.set(state, 'initiated', initiated)
    },

    [mutationTypes.SET_PERCENTAGE_OF_PROGRESS](state, percentageOfProgress) {
        Vue.set(state, 'percentageOfProgress', percentageOfProgress)
    },

    [mutationTypes.SET_RUNNING](state, running) {
        Vue.set(state, 'running', running)
    },

    [mutationTypes.SET_SETTINGS](state, settings) {
        Vue.set(state, 'settings', settings)
    },

    [mutationTypes.SET_TASK](state, task) {
        Vue.set(state, 'task', task)
    },

    [mutationTypes.SET_TIME](state, time) {
        Vue.set(state, 'time', time)
    },

}
