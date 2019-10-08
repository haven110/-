// import Axios from "axios";

const state = {
    todos : []
}
const getters = {
    allTodos : state =>{
        return state.todos
    }
}
const mutations = {
    getAllTodos : (state,todos) => state.todos = todos,
    newTodo: (state,todo) => state.todos.unshift(todo),
    removeTodo: (state,id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
    setTodos: (state,Todos) => state.todos = Todos,
    updateTodo: (state,updTodo) => {
        const index =  state.todos.findIndex(todo => todo.id === updTodo.id)
        console.log(index)
        if(index !== -1){
            state.todos.splice(index,1,updTodo)
        }
    }
     
}
const actions = {
    async fetchTodos ({commit}) {
        await axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res =>{
            // console.log(res)
            commit("getAllTodos",res.data)
        })
    },
    async addTodo ({ commit },title) {
        await axios.post("https://jsonplaceholder.typicode.com/todos",{ title, completed:false })
        .then(res =>{
            // console.log(res.data)
            commit("newTodo",res.data)
        })
    },
    async deleteTodo ( {commit},id ) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit("removeTodo",id)
    },
    async filterTodos ( {commit},count ) {
         await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`)
         .then(res =>{
            // console.log(res)
            commit("setTodos",res.data)
         })
    },
    async updateTodo ({ commit },updTodo) {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo)
        .then(res =>{
            // console.log(res)
            commit("updateTodo", res.data)
        })
    }

}


export default {
    state,
    getters,
    mutations,
    actions
}