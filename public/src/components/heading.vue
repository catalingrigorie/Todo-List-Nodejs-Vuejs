<template>
  <div>
    <header>
      <h1>{{ title }}</h1>
    </header>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Roboto', sans-serif;
  color: #fff;
  font-size: 65px;
  cursor: default;
  text-align: center;
}
</style>
