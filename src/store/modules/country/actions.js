import Vue from 'vue'

const actions = {
    fetchCountriesNames({ commit,dispatch }) {
        Vue.prototype.$http('https://corona.lmao.ninja/v2/countries?sort=country')
            .then(resp => resp.data)
            .then(data => {
                let countries = []

                data.forEach(country => {
                    countries.push(country.country)
                })

                commit('SET_COUNTRIES_NAMES', countries)
                dispatch('fetchCountryData')

                dispatch('setShowLoading', false, { root: true })

            }).catch(err => {
                throw err.response.data; // reject
            })
    },
    fetchCountryData({ commit, state,dispatch}) {
        Vue.prototype.$http(`https://corona.lmao.ninja/v2/countries/${state.selected}`)
            .then(resp => resp.data)
            .then(data => {
                commit('SET_COUNTRY_DATA', data)
                dispatch('fetchCountryHistory')
            })
    },
    fetchCountryHistory({ commit, state }) {
        Vue.prototype.$http(`https://covidapi.info/api/v1/country/${state.selectedISO3}`)
            .then(resp => resp.data)
            .then(data => {
                const lastUpdate = Object.entries(data.result)
                commit('SET_COUNTRY_HISTORY', data)
                commit('SET_LAST_UPDATE', lastUpdate)
            })
    },
    setCountryFlag({ commit }, data) {
        commit('SET_COUNTRY_FLAG', data)
    },
    setSelectedCountry({ commit }, data) {
        commit('SET_SELECTED_COUNTRY', data)
    },
    setLastUpdate({ commit }, data) {
        commit('SET_LAST_UPDATE', data)
    },
    setCountryData({ commit }, data){
        commit('SET_COUNTRY_DATA', data)
    },
    setCountryHistory({ commit }, data){
        commit('SET_COUNTRY_HISTORY', data)
    }
}

export default actions