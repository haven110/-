<template>
  <div>
    <h3>添加内容</h3>
    <form action="" @submit.prevent="onSubmit">
      <input type="text" v-model="title" placeholder="...添加待办事项">
      <input type="submit" value="添加">
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name:"AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    // addTodo(){
    //   this.$store.dispatch("addTodo");
    // },
  //  onSubmit(title){
  //    console.log(111)
  //    this.addTodo(this.title);
  //  }
  ...mapActions(["addTodo"]),
    onSubmit() {
      // 分发actions
      this.addTodo(this.title);
      this.title = "";
    }
  },
  computed: {
    // allTodos(){
    //   return this.$store.getters.allTodos
    // }
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
