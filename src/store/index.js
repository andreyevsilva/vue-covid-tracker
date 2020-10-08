import Vue from 'vue'
import Vuex from 'vuex'

//Modules
import covid from '@/store/modules/covid/covid.js'
import country from '@/store/modules/country/country.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLoading: true,
  },
  modules: {
    covid,
    country
  },
  mutations:{
    IS_LOADING(state,status){
      state.showLoading = status
    }
  },
  actions:{
    setShowLoading({commit},status){
      commit('IS_LOADING',status)
    }
  },
  getters:{
    isLoading(state){
      return state.showLoading
    } 
  }
})