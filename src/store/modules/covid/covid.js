import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

export default {
    namespaced:true,
    state: {
        cases: {},
        deaths: {},
        recovereds: {},
        lastUpdate:{},
        globalData:{},
    },
    actions,
    getters,
    mutations
}