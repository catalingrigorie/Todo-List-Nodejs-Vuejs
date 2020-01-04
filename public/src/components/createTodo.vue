<template>
    <div class="container">
        <div>
            <div class="errors">{{todo.errors}}</div>
            <form>
                <input v-model="todo.name" type="text" id="name" placeholder="Enter todo Name" >
                <input v-model="todo.description" type="text" id="description" placeholder="Enter todo description" >
                <button @click.prevent="createNew" >Add new Todo</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: {
                name: '',
                description: '',
                errors: ''
            }
        }
    },
    methods: {
        createNew() {
            if (!this.todo.name || !this.todo.name) {
                this.todo.errors = 'Please enter all fields';
                return
            }

            this.$emit('todoAdded', this.todo);
            this.todo.errors = '';
            this.todo.name = '';
            this.todo.description = '';
        }
    },
};
</script>

<style lang="scss" scoped>

</style>
