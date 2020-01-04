<template>
    <div>
        <div class="todo">
            <div class="todo-check">
                <label class="checkbox">
                    <input type="checkbox" v-model="isChecked" />
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="wrapp">
                <div class="todo-name" :class="{ 'completed': isChecked }">
                    <slot name="todoName"></slot>
                </div>
                <div class="todo-desc" :class="{ 'completed': isChecked }">
                    <slot name="todoDesc"></slot>
                </div>
                <div class="todo-diff">
                    <slot name="todoDiff"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isChecked: false
        };
    },
};
</script>

<style lang="scss" scoped>
.todo {
    display: flex;
    background-color: aquamarine;
    padding: 10px;
    margin: 5px;

    &-name {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 5px 0;
        font-size: 22px;

        &.completed {
            text-decoration: line-through;
        }
    }

    &-desc {
        opacity: 0.7;
        color: gray;

        &.completed {
            text-decoration: line-through;
        }
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
            top: 17px;
            left: -1px;
            height: 25px;
            width: 25px;
            background-color: #eee;
            border-radius: 50%;

            &:after {
                content: "";
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
                    background-color: #2196f3;

                    &:after {
                        display: block;
                    }
                }
            }
        }
    }
}
</style>
