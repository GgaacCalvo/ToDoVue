<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ hulk }}</h1>
    <h1>{{ ironman }}</h1>

    <button @click="changeIronman">ironmanchange</button>
    <button @click="changeHulk">changeHulk</button>
    
    <h1>ironmanIsAlive: {{ ironmanIsAlive }}</h1>
    <h1>hulkIsAlive: {{ hulkIsAlive }}</h1>
    <button @click="changeStatus">changeStatus</button>

  </div>
</template>

<script>
// @ is an alias to /src
import {ref, reactive} from 'vue'
export default {
  name: 'HomeView',
  setup(){
    const ironman = ref({name: 'Tony', age: 50})
    const hulk = reactive({name: 'Bruce', age: 50})
    const ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
      //ironmanIsAlive = !ironmanIsAlive
    }

    return{
      ironman,
      hulk,
      ironmanIsAlive,
      hulkIsAlive,
      changeStatus,
      changeIronman: ()=>{
        ironman.value.name= 'Jorge'
        ironman.value.age= 55
      },
      changeHulk: ()=>{
        hulk.name= 'Banner'
        hulk.age= 11
      }
    }
  }
}
</script>
