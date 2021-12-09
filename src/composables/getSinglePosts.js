import { ref } from 'vue'

const getSinglePost = (id) => {
  const post = ref({});
  const error = ref(null)

  const load = async () => {
   
    try{
      const res = await fetch(`http://localhost:5000/posts/${id}`);
      if(!res.ok) {
        throw Error('Detail failed')
      }
      post.value = await res.json();
    } catch (err) {
      error.value = err.message;
      console.log(err.message)
    }
  }
  return { post, error, load}
}

export default getSinglePost;