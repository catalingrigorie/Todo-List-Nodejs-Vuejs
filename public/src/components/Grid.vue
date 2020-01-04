<template>
    <div class="container">
        <div class="todos-grid">
            <draggable v-model="todos" ghost-class="ghost">
                <transition-group type="transition" name="flip">
                    <todo
                        v-for="todo in todos"
                        :key="todo._id"
                        :id="todo._id"
                        @dblclick.native="deleteTodo($event)"
                    >
                        <template v-slot:todoName>
                            {{ todo.name }}
                        </template>
                        <template v-slot:todoDesc>
                            {{ todo.description }}
                        </template>
                        <!-- <template v-slot:todoDiff>
                            {{ todo.priority }}
                        </template> -->
                    </todo>
                </transition-group>
            </draggable>
        </div>
    </div>
</template>

<script>
import todo from "../components/todo";
import draggable from 'vuedraggable'

export default {
    name: "Grid",
    props: ["todos"],
    methods: {
        deleteTodo(event) {
            this.$emit("deletedTodo", event.currentTarget.id);
        }
    },
    components: {
        todo,
        draggable
    }
};
</script>

<style lang="scss" scoped>
.container {
    width: 960px;
}

.sortable-drag {
    opacity: 0;
}

.flip-move {
    transition: transform 0.3s;
}

.ghost {
    border-left: 6px solid rgb(0, 223, 254);
    box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.14);
    opacity: .7;
}
</style>
