import { createStore } from 'vuex'

export default createStore({
  state: {
    counter : 0
  },
  getters: {
    square(state) {
      return state.counter * state.counter;
    }
  },
  mutations: {
    countUp(state, random) {
      state.counter+= random;
    },
    countDown(state, random) {
      state.counter-= random;
    }
  },
  actions: {
    async countUp({ commit }) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit('countUp', results)
    },
    async countDown({ commit }) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit('countDown', results)
    }
  },
  modules: {
  }
})
