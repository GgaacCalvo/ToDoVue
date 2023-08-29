<template>
    <h1>Buscar pokemon: {{ pokemonId }}</h1>
    <form @submit.prevent="onSubmit">
        <input type="number"
        placeholder="Numero del pokemon"
        ref="txtSearchId"
        v-model="pokemonId"
        >

    </form>
    <br>
    <span>Presione enter para buscar    </span>
</template>

<script>

import {ref, onActivated} from 'vue'
import { useRouter } from 'vue-router'
useRouter
export default {
    setup() {
        const router = useRouter()
        const pokemonId = ref(1)
        const txtSearchId = ref()
        console.log(txtSearchId.value)
        
        onActivated(()=>{
            txtSearchId.value.select()
        })
        
        return {
            txtSearchId,
            pokemonId,
            onSubmit: () => {
                console.log('pokemon a buscar', pokemonId.value)
                router.push({name: 'pokemon-id', params:{id: pokemonId.value}})
            }
        }


    },
}
</script>
