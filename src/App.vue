<template>
  <div id="app" class="container">
    <AddTodo />
    <FilterTodos/>
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import FilterTodos from "./components/FilterTodos";
export default {
  name: "app",
  components: {
    Todos,
    AddTodo,
    FilterTodos

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
