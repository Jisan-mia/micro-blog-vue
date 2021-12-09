<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">
      {{error}}
    </div>
    <PostList v-if="posts.length" :posts="posts" />
    <div v-else>Loading..</div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
  components: { PostList },
  name: 'Practice',
  setup() {
    const {posts, error, load} = getPosts()

    load()
    
    return {
      posts,
      error,
    }

    
  },
  
}
</script>
