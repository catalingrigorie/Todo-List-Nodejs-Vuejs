<template>
  <div class="todo">
    <div class="todo-check">
      <label class="checkbox">
        <input type="checkbox" v-model="isChecked" />
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="wrapp">
      <div class="todo-name" :class="{ completed: isChecked }">
        <slot name="editName"></slot>
        <slot name="todoName"></slot>
      </div>
      <div class="todo-desc" :class="{ completed: isChecked }">
        <slot name="editDesc"></slot>
        <slot name="todoDesc"></slot>
      </div>
    </div>
    <slot name="deleteTodo"></slot>
    <slot name="saveTodo"></slot>

    <slot name="todoCancel"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false
    }
  }
}
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px rgba(145, 145, 145, 0.75);
  padding: 10px;
  margin: 5px;
  min-height: 70px;

  &.high {
    background-color: #de6a6a;
  }

  &.medium {
    background-color: #c6f142;
  }

  &.low {
    background-color: #64cea5;
  }

  &-name {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 5px 0;
    font-size: 22px;

    &.completed {
      text-decoration: line-through;
    }
  }

  &-desc {
    // opacity: 0.7;
    color: #35495e;
    padding: 5px 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    &.completed {
      text-decoration: line-through;
    }
  }

  &-check {
    width: 40px;
  }

  .checkbox {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .checkmark {
      position: absolute;
      top: 22px;
      left: 1px;
      height: 27px;
      width: 27px;
      background-color: #eee;
      border-radius: 50%;

      &:after {
        content: '';
        position: absolute;
        display: none;
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }

    input {
      display: none;

      &:checked {
        ~ .checkmark {
          background-color: #64cea5;

          &:after {
            display: block;
          }
        }
      }
    }
  }

  .wrapp {
    width: 100%;
  }
}
</style>
