<template>
  <h1>Lista de tareas de Thanos</h1>
  <h4>Tareas: {{ pending.length }}</h4>

  <hr />

  <button class="active">todos</button>
  <button class="">pendientes</button>
  <button class="">completados</button>
  <div>
    <ul>
      <li v-for="todo in all" :key="todo.id"
      :class="{'completed': todo.completed}">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      pending: computed(() => store.getters["pendingTodos"]), //forma de hacer que este pendiente al cambio de este Getter en particular utilizando una propiedad computada.
      completed: computed(() => store.getters["completedTodos"]),
      all: computed(() => store.getters["allTodos"]), //forma de hacer que este pendiente al cambio de este Getter en particular utilizando una propiedad computada.
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}
.active {
  background-color: #2c3e50;
  color: white;
}
.completed {
  text-decoration: line-through;
}
</style>
