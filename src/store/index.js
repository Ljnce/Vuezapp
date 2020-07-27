import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timestamp: '',
  },
  mutations: {
    time: state => {
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date +' '+ time;
      return state.timestamp = dateTime;
    }
  },
  actions: {},
  modules: {}
});
