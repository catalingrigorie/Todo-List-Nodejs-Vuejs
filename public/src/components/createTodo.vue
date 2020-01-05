<template>
    <div class="container">
        <form>
            <div class="wrapp">
                <div class="input">
                    <input
                        autocomplete="off"
                        v-model="todo.name"
                        type="text"
                        id="name"
                        :class="{ error: todo.error }"
                        placeholder="Name"
                    />
                </div>
                <div class="input">
                    <input
                        autocomplete="off"
                        v-model="todo.description"
                        type="text"
                        id="description"
                        placeholder="Description"
                    />
                </div>
                <div class="select-parent" :class="{error : todo.error}">
                    <select class="styled-select" name="" id="" v-model="todo.priority">
                        <option class="default" value="" disabled selected>Select a priority</option>
                        <option class="item" value="1">High</option>
                        <option class="item" value="2">Medium</option>
                        <option class="item" value="3">Low</option>
                    </select>
                </div>
            </div>
            <button @click.prevent="createNew">Save</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: {
                name: "",
                description: "",
                priority: "",
                error: false
            }
        };
    },
    methods: {
        createNew() {
            if (this.todo.name == '' || this.todo.priority == "") {
                this.todo.error = true;
                return;
            }
            this.todo.error = false;
            this.$emit("todoAdded", this.todo);
            this.todo.name = "";
            this.todo.description = "";
            this.todo.priority = "";
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    min-height: 90px;
    background-color: #fff;
    box-shadow: 0px 0px 5px 1px rgba(145, 145, 145, 0.75);
    border-radius: 10px;
    padding: 0 5px;
    margin: 5px;

    form {
        padding: 5px;

        input {
            width: calc(100% - 80px);
            margin: 20px 0 10px 40px;
            border: 0;
            border-bottom: 1px solid slategray;
            outline: none;
            height: 25px;

            &::placeholder {
                font-family: "Roboto";
                font-size: 20px;
                transition: 0.1s ease;
            }

            &:focus {
                &::placeholder {
                    color: transparent;
                }
            }

            &.error {
                color: red;
                border-bottom: 1px solid red;

                &::placeholder {
                    color: red;
                }

                &:focus {
                    &::placeholder {
                        color: transparent;
                    }
                }
            }
        }

        button {
            margin: 5px 0 5px 40px;
            padding: 5px;
            background-color: #64cea5;
            border: 0;
            color: #35495e;
            cursor: pointer;
            outline: none;
        }
    }

    .select-parent {
        width: calc(100% - 80px);
        height: 32px;
        padding: 0;
        margin: 5px 0 5px 40px;
        border: 1px solid transparent;

        &.error {
            border: 1px solid red;

            select {
                color: red;
            }
        }

        select:focus {
            color: black;
        }
    }

    .styled-select {
        background: #e4e4e4;
        border: 0;
        outline: none;
        color: black;
        height: 32px;
        width: 100%;

        &:before {
            content: "\25BC";
            position: absolute;
            font-size: 8px;
            transform: scaleY(0.7);
            right: 0;
            top: 50%;
            margin-top: -4px;
            background: transparent;
            width: 30px;
            text-align: center;
            z-index: 2;
        }
    }
}
</style>
