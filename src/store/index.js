import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    storeTodos(state, payLoad) {
      state.todos = payLoad
    }
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
