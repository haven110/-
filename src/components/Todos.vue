<template>
  <div>
    <h1>待办事项</h1>
    <div class="todos">
      <div class="todo" v-for="(todo,index) in allTodos" :key="index" @click="onDblClick(todo)" :class="{'is-complete':todo.completed}">
          {{todo.title}}
          <i class="fa fa-trash" aria-hidden="true" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  name: "Todos",
  props: {},
  data() {
    return {
     
    }
  },
  created() {
    this.fetchTodos()
  },
  computed: {
    ...mapGetters (["allTodos"])
    // allTodos(){
    //   return this.$store.getters.allTodos
    // }
  },
  methods: {
    ...mapActions(["fetchTodos","deleteTodo","updateTodo"]),
    // fetchTodos(){ 
    //   this.$store.dispatch("fetchTodos");
    // },
    // deleteTodo(){
    //   this.$store.dispatch("deleteTodo");
    // },
    // onDelete(id){
    //   console.log("delete")
    //   this.deleteTodo(id)
    // }
    onDblClick(todo){
      // console.log(todo)
      const updTodo = {
          title: todo.title,
          id: todo.id,
          completed: !todo.completed
      };
      this.updateTodo(updTodo)
    },
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
/* 
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35495e;
  color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  } */
</style>
