<template>
  <h2 v-if="isLoading">Espere por favor..</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <user-list :users="users" v-slot="{ user }">
      <h4>{{ user.first_name }} {{ user.last_name }}</h4>
      <span>{{ user.email }}</span>
    </user-list>
  </div>

  <button @click="prevPage">atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>PAgina: {{ currentPage }}</span>
</template>

<script>
import UserList from "@/components/UserList.vue";
import useUsers from "@/composables/useUsers";
export default {
  components: { UserList },
  setup() {
    const { isLoading, currentPage, errorMessage, users, nextPage, prevPage } =
      useUsers();
    return {
      isLoading,
      currentPage,
      errorMessage,
      users,
      nextPage,
      prevPage,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  width: 250px;
}
</style>
