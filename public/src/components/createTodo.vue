<template>
    <div class="row">
        <div>
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
                description: ''
            }
        }
    },
    methods: {
        createNew() {
            this.$emit('todoAdded', this.todo);
            this.todo.name = '';
            this.todo.description = '';
        }
    },
};
</script>

<style lang="scss" scoped>

</style>
