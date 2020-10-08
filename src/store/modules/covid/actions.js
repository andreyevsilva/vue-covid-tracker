import Vue from 'vue'

const actions = {
    fetchGlobalData ({ commit,dispatch }) {
        Vue.prototype.$http('https://covidapi.info/api/v1/global/count')
        .then(resp => resp.data)
        .then(data => {
            const lastUpdate = Object.entries(data.result)
            commit('SET_GLOBAL_DATA',data)
            commit('SET_LAST_UPDATE',lastUpdate)
            
            dispatch('setShowLoading', false, { root: true })
        })
        
    },
    setGlobalData({ commit },data){
        commit('SET_GLOBAL_DATA',data)
    },
    setLastUpdate({ commit },data){
        commit('SET_LAST_UPDATE',data)
    },
    setChartData({ commit },data) {
        commit('SET_CHART_DATA',data)
    }
}

export default actions