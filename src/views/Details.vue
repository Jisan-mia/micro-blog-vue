<template>
  <h1>Details</h1>
  <div v-if="error">{{error}}</div>
  <div class="post">
    <h3> {{post.title}} </h3>
    <p>{{ post.body }}</p>
    <span class="pre" v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span>
  </div>
</template>

<script>
import getSinglePost from '../composables/getSinglePosts'
export default {
  props: ['id'],
  setup(props) {
    console.log(props.id)
    const { post, error, load } = getSinglePost(props.id)

    load();

    return { post, error, }
  }
}
</script>

<style>
.post {
  max-width: 500px;
  margin: 0 auto;
  background: rgb(230, 227, 227);
  padding: 20px
}
.post p{
  color: #444;
  line-height: 1.5em;
  margin-top: 20px;
}
.pre{
  white-space: pre-wrap;
}
</style>