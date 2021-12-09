import {ref} from 'vue'

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await fetch('http://localhost:5000/posts');
      if(!res.ok) {
        throw Error('No data available')
      }
      posts.value = await res.json();
    }
    catch (err) {
      
      error.value = err.message;
      console.log(error.value)
    }
  }

  return {posts, error, load}
}

export default getPosts;