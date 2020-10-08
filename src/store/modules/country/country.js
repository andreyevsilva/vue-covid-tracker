import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

export default {
    namespaced:true,
    state: {
        lastUpdate: null,
        countries: [],
        countryData: null,
        countryHistory: null,
        selected: "Brazil",
        selectedISO3: "",
        countryFlag: "",
        countryInfo: {},
    },
    actions,
    getters,
    mutations
}