<template>
    <div class="container">
        <div class="todos-grid">
            <todo
                v-for="(todo) in todos"
                :key="todo.id"
                :id="todo._id"
                @dblclick.native="deleteTodo($event)"
            >
                <template v-slot:todoName>
                    {{ todo.name }}
                </template>
                <template v-slot:todoDesc>
                    {{ todo.description }}
                </template>
            </todo>
        </div>
    </div>
</template>

<script>
import todo from "../components/todo";
// import todosService from "../todosService";

export default {
    name: "Grid",
    props: ["todos"],
    methods: {
        deleteTodo(event) {
            this.$emit("deletedTodo", event.currentTarget.id);
        }
    },
    components: {
        todo
    }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.todos-grid {
    width: 50%;
    height: auto;
}
</style>
