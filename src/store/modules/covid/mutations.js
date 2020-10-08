const mutations = {
    SET_LAST_UPDATE(state, lastUpdate) {
        state.lastUpdate = lastUpdate[lastUpdate.length-1]
    },
    SET_CHART_DATA(state, data) {
        state.cases = data.cases
        state.deaths = data.deaths
        state.recovereds = data.recovereds
    },
    SET_GLOBAL_DATA(state,data){
        state.globalData = data
    },
}

export default mutations
