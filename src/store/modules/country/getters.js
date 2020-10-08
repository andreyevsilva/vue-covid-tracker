const getters = {
    getSelectedCountry(state) {
        return state.selected
    },
    getSelectedHistory(state) {
        return state.countryHistory
    },
    getCountries(state) {
        return state.countries
    },
    getLastUpdate(state) {
        return state.lastUpdate
    },
    getCountryFlag(state) {
        return state.countryFlag
    }
}

export default getters

