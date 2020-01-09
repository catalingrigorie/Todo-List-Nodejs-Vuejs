<template>
  <div id="app">
    <heading title="TO-DO List"></heading>
    <createTodo @todoAdded="newTodo"></createTodo>
    <search @search="search($event)"></search>

    <Grid
      :todos="todos"
      @deletedTodo="deleteTodo($event)"
      @editTodo="editTodo($event)"
      @doneEdit="doneEdit($event)"
      @cancelEdit="cancelEdit($event)"
    ></Grid>
  </div>
</template>

<script>
import heading from './components/heading'
import Grid from './components/Grid.vue'
import createTodo from './components/createTodo'
import todosService from './todosService'
import search from './components/search'
import axios from 'axios'

export default {
  data() {
    return {
      todos: [],
      error: ''
    }
  },
  components: {
    Grid,
    createTodo,
    heading,
    search
  },
  methods: {
    async getTodos() {
      let todos = await todosService.getTodos()
      this.todos = this.sortTodos(todos)
    },
    async newTodo(todo) {
      this.todos = await todosService.insertPost(todo)
      this.getTodos()
    },
    async deleteTodo(id) {
      this.todos = await todosService.deletePost(id)
      this.getTodos()
    },
    editTodo(todo) {
      this.beforeEditName = todo.name
      this.beforeEditDesc = todo.description
      todo.editing = true
    },
    async doneEdit(todo) {
      if (todo.name == '') {
        todo.name = this.beforeEditName
      }
      let updatedTodo = {
        name: todo.name,
        description: todo.description
      }
      await todosService.updateTodo(todo._id, updatedTodo)
      todo.editing = false
    },
    cancelEdit(todo) {
      todo.name = this.beforeEditName
      todo.description = this.beforeEditDesc
      todo.editing = false
    },
    sortTodos(todos) {
      let sortedTodos = []
      sortedTodos = todos.sort((a, b) =>
        a.priority > b.priority
          ? 1
          : a.priority == b.priority
          ? a.createdAT > b.createdAT
            ? -1
            : 1
          : -1
      )
      return sortedTodos
    },
    search(query) {
      axios
        .get(`http://localhost:5000/v1/todos/search/?name=${query}`)
        .then(response => {
          this.todos = response.data.todos
        })
        .catch(error => {
          alert(error.message)
        })
    }
  },
  async created() {
    try {
      this.todos = this.getTodos()
    } catch (error) {
      this.error = error.message
    }
  }
}
</script>

<style>
body {
  background-color: #35495e;
}

#app {
  width: 960px;
  margin: 0 auto;
}
</style>
