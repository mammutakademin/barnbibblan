import Vue from 'vue'
import Vuex from 'vuex'
import books from '../assets/books.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      greger: books,
      readinglist: [],
      singlebook: {},
    // name: 'Kalle Olofsson',
    // todos: [], // {id,content,done}
    // showDone: true
  },

  mutations: {
    addToRead(state, addedbook){
      state.readinglist.push(addedbook)
    },
    singleBook(state, bookfromlibrary){
      state.singlebook = bookfromlibrary
    }
  },

  actions: {
    bookRender( context, item ) {
      // console.log(context)
      context.commit('singleBook', item)
      
      
    }
  },
  // MUTATIONS
  // addTodo(state, content){
    //   const todo = {
      //     id: String(Math.floor(Math.random()*Math.pow(10,10)))+Date.now(),
      //     content,
      //     done: Math.random() > 0.5
      //   }
      //   state.todos.push(todo)
      // },
      
      // toggleDone(state){
        //   state.showDone = !state.showDone
        // getters: {
        // },
        // }
        // GETTER
    // activeTodos(state){
    //   if(state.showDone){
    //     return state.todos
    //   }else{
    //     return state.todos.filter(todo => !todo.done)
    //   }
    // }

})