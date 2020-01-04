<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <createTodo @todoAdded="newTodo"></createTodo>
        <Grid :todos="todos" @deletedTodo="deleteTodo($event)"></Grid>
    </div>
</template>

<script>
import Grid from "./components/Grid.vue";
import createTodo from "./components/createTodo";
import todosService from "./todosService";

export default {
    data() {
        return {
            todos: [],
            error: ""
        };
    },
    methods: {
        async newTodo(todo) {
            this.todos = await todosService.insertPost(todo);
            this.todos = await todosService.getTodos();
        },
        async deleteTodo(id) {
            this.todos = await todosService.deletePost(id);
            this.todos = await todosService.getTodos();
        }
    },
    components: {
        Grid,
        createTodo,
    },
    async created() {
        try {
            this.todos = await todosService.getTodos();
        } catch (error) {
            this.error = error.message;
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>
