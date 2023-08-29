import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:[
      {id: '1', text: 'REcolectar las piedras del infitin', completed: false},
      {id: '2', text: 'piedras del alma', completed: false},
      {id: '3', text: 'piedras del poder', completed: false},
      {id: '4', text: 'piedras del realidad', completed: false},
      {id: '5', text: 'nuevos secuases', completed: false},
    ]
  },
  getters: {
    pendingTodos(state, getters, rootState){
      return state.todos.filter(todo => !todo.completed)
    },
    allTodos(state, getters, rootState){
      console.log({state, getters, rootState})
      return [...state.todos]
    },
    completedTodos(state, getters, rootState){
      return state.todos.filter(todo => todo.completed)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
