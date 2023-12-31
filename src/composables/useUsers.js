import { ref } from "vue";
import axios from "axios";
const useUsers =  () => {
        const isLoading = ref(true)
        const currentPage = ref(1)
        const errorMessage = ref()
        const users = ref([])
        console.log('intro', currentPage.value)
        const getUsers = async ( page = 1 ) =>{
            console.log('getUsers', currentPage.value)
            if (page <= 0 ) page = 1
            isLoading.value = true
            const {data} = await axios.get(`https://reqres.in/api/users`, {
                params: {
                    page
                }
            })
            if (data.data.length > 0) {
                users.value = data.data
                currentPage.value = page
                errorMessage.value = null
                console.log('page', page)
            } else if ( currentPage.value > 0 ){
                console.log('2')
                errorMessage.value = 'No hay mas usuarios'
            }
            isLoading.value = false
             
        }
        getUsers()
        return{
            isLoading ,
            currentPage ,
            errorMessage ,
            users ,
            nextPage: () => getUsers( currentPage.value + 1 ),
            prevPage: () => getUsers( currentPage.value - 1 )

        }

}

export default useUsers