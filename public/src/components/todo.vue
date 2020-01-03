<template>
    <div>
        <div class="todo">
            <div class="todo-name">
                <slot name="todoName" ></slot>
            </div>
            <div class="todo-desc">
                <slot name="todoDesc" ></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="stylus" scoped></style>
