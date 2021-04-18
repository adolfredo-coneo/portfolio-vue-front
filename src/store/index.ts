import { createStore } from "vuex";

export default createStore({
  state: { menuShow: false },
  mutations: {
    showMenu(state) {
      state.menuShow = true;
    },
    hideMenu(state) {
      state.menuShow = false;
    },
  },
  actions: {},
  modules: {},
});
