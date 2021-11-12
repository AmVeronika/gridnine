import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    airlinesList: [],
  },
  getters: {
    getAirlinesList: (state) => state.airlinesList,
  },
  mutations: {
    setAirlinesList(state, payload) {
      state.authorization.push(...payload);
    }
  },
  actions: {
    async fetchDataAirlinesList({ commit }) {
        const response = await fetch(
          "https://raw.githubusercontent.com/AmVeronika/JSON-EBT/master/gridnine.json");
      console.log(response);
        const res = await response.json();

      commit("setAirlinesList", res);
    },
  },
  modules: {},
});
