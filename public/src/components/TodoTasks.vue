<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <p class="error" v-if="error">{{ error }}</p>
    <div class="tasks-container">
      <div class="task"
      v-for="post in posts" 
      v-bind:key="post._id"
      >
      <p class="text">{{post.name}} {{post.description}}  {{post.createdAT}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import tasks from '../tasks';

export default {
  name: 'ToDoTasks',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.posts = await tasks.getPosts();
    } catch (err) {
      this.err = err.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
