<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">cambiuar titulo</button>
  </div>
</template>


<script>
import { ref, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated } from 'vue'

export default{
  setup(){

    const title = ref('About')

    onBeforeMount(()=>{
      console.log('onBeforeMount')

    })
    onMounted(()=>{
      console.log('onMounted')

    })
    onBeforeUpdate(()=>{
      console.log('sasd')

    })
    onUpdated(()=>{
      console.log('onBeforeMount')

    })
    onBeforeUnmount(()=>{
      console.log('onBeforeUnmount')

    })
   
    onUnmounted(()=>{
      console.log('onUnmounted')

    })
    onErrorCaptured(()=>{
      console.log('onErrorCaptured')

    })
    onRenderTracked(()=>{
      console.log('onRenderTracked')

    })
    onRenderTriggered(()=>{
      console.log('onRenderTriggered')

    })
    onActivated(()=>{
      console.log('onActivated')

    })
    onDeactivated(()=>{
      console.log('onDeactivated')

    })

    return {
      title,
      changeTitle: () => title.value = 'NewAbout'
    }

  }
}


</script>