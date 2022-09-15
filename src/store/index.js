import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    storeTodos(state, payLoad) {
      state.todos = payLoad
    },
    storeTodo(state, payLoad) {
      state.todos.push(payLoad)
    }
  },
  actions: {
    getTodos({ commit }) {
      return axios.get("http://localhost:3000/todos")
        .then((response) => commit("storeTodos", response.data));
    },

    addTodo({ commit }, data) {
      return axios.post("http://localhost:3000/todos", data).then((response) =>
        commit('storeTodo', response.data))
    },

    updateTodo(context, { id, data }) {
      return axios.put(`http://localhost:3000/todos/${id}`, data)
    },
  },
  getters: {
  },
  modules: {
  }
})
