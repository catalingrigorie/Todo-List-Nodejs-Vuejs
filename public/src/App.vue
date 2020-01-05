<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
        <heading title="TO-DO List"></heading>
        <createTodo @todoAdded="newTodo"></createTodo>
        <Grid :todos="todos" @deletedTodo="deleteTodo($event)"></Grid>
    </div>
</template>

<script>
import heading from "./components/heading";
import Grid from "./components/Grid.vue";
import createTodo from "./components/createTodo";
import todosService from "./todosService";

export default {
    data() {
        return {
            todos: [],
            error: "",
        };
    },
    components: {
        Grid,
        createTodo,
        heading
    },
    methods: {
        async getTodos() {
            let todos = await todosService.getTodos();
            this.todos = this.sortTodos(todos);
        },
        async newTodo(todo) {
            this.todos = await todosService.insertPost(todo);
            this.getTodos();
        },
        async deleteTodo(id) {
            this.todos = await todosService.deletePost(id);
            this.getTodos();
        },
        sortTodos: (todos) => {
            let sortedTodos = [];
            sortedTodos = todos.sort((a, b) =>
                a.priority > b.priority
                    ? 1
                    : a.priority == b.priority
                    ? a.createdAT > b.createdAT
                        ? -1
                        : 1
                    : -1
            );
            return sortedTodos;
        }
    },
    async created () {
        try {
            this.todos = this.getTodos();
        } catch (error) {
            this.error = error.message;
        }
    }
};
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
