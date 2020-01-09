<template>
  <div class="container">
    <div class="todos-grid">
      <transition-group type="transition" name="flip">
        <todo
          v-for="todo in todos"
          :key="todo._id"
          :id="todo._id"
          :class="getPriority(todo)"
          @dblclick.native="editTodo(todo)"
          @blur="doneEdit(todo)"
        >
          <template v-if="todo.editing" v-slot:editName>
            <input
              class="editing-name"
              type="text"
              v-focus
              v-model="todo.name"
              @keyup.esc="cancelEdit(todo)"
              @keyup.enter="doneEdit(todo)"
            />
          </template>
          <template v-else v-slot:todoName>
            {{ todo.name }}
          </template>
          <template v-if="todo.editing" v-slot:editDesc>
            <input
              class="editing-desc"
              type="text"
              v-model="todo.description"
              @keyup.enter="doneEdit(todo)"
              @keyup.esc="cancelEdit(todo)"
              @blur="doneEdit(todo)"
            />
          </template>
          <template v-else v-slot:todoDesc>
            {{ todo.description }}
          </template>
          <template v-if="todo.editing" slot="saveTodo">
            <i class="fas fa-check" @click="doneEdit(todo)"></i>
          </template>
          <template v-if="todo.editing" slot="todoCancel">
            <i class="far fa-window-close" @click="cancelEdit(todo)"></i>
          </template>
          <template v-else slot="deleteTodo">
            <i class="far fa-trash-alt" @click="deleteTodo(todo)"></i>
          </template>
        </todo>
      </transition-group>
    </div>
  </div>
</template>

<script>
import todo from '../components/todo'

export default {
  name: 'Grid',
  props: ['todos'],
  methods: {
    deleteTodo(todo) {
      this.$emit('deletedTodo', todo._id)
    },
    editTodo(todo) {
      this.$emit('editTodo', todo)
    },
    doneEdit(todo) {
      this.$emit('doneEdit', todo)
    },
    cancelEdit(todo) {
      this.$emit('cancelEdit', todo)
    },
    getPriority(todo) {
      let priority = todo.priority

      switch (priority) {
        case 1:
          priority = 'high'
          break
        case 2:
          priority = 'medium'
          break
        case 3:
          priority = 'low'
          break
        default:
          priority = 'low'
          break
      }
      return priority
    }
  },
  components: {
    todo
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.flip-move {
  transition: transform 0.3s;
}

.editing-name,
.editing-desc {
  background-color: transparent;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  padding: 5px 0;
  width: calc(100% - 60px);
  border: 0;
  border-bottom: 1px solid #fff;
  outline: none;
  height: 25px;
}

i {
  font-size: 25px;
  width: 25px;
  height: 25px;
  align-self: center;
  cursor: pointer;
  padding: 10px;
}
</style>
