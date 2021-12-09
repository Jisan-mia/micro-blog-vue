<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{search}}</p>
    <div v-for="name in matchingNames" :key="name">
      {{name}}
    </div>

    <button @click="handleClick">Stop watching</button>
 
  </div>
</template>

<script>
import {  computed, ref } from '@vue/reactivity'
import { watch, watchEffect } from '@vue/runtime-core'

export default {
  name: 'Home',
  setup() {
    const search = ref('')
    const names = ref(['jisan', 'sakil', 'shawon', 'asad', 'mursaline', 'porag'])

    const stopWatch = watch(search, () => {
      console.log('watch function run')
    })

    const stopEffect = watchEffect(() => {
      console.log('watcheffect func run', search.value)
    })
    
    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch();
      stopEffect()
    }
    return {
      names,
      search,
      matchingNames,
      handleClick
    }
  },
  
}
</script>
