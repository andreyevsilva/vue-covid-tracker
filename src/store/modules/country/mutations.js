const mutations = {
    SET_COUNTRIES_NAMES(state, countries) {
        state.countryData = countries[state.selected]      
        state.countries = countries
    },
    SET_COUNTRY_DATA(state, data) {
        state.countryData = data
        state.countryInfo = data.countryInfo
        state.countryFlag = data.countryInfo.flag
        state.selectedISO3 = data.countryInfo.iso3
    },
    SET_COUNTRY_FLAG(state, data) {
        state.countryFlag = data.countryInfo.flag
    },
    SET_COUNTRY_HISTORY(state, data) {
        state.countryHistory = data
    },
    SET_LAST_UPDATE(state, data) {
        state.lastUpdate = data[data.length-1]
    },
    SET_SELECTED_COUNTRY(state,data){
        state.selected = data
    }

}

export default mutations
