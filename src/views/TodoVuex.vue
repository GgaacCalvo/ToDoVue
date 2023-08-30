<template>
  <h1>Lista de tareas de Thanos</h1>
  <h4>Tareas: {{ pending.length }}</h4>

  <hr />

  <button
    :class="{ active: currentTab === 'pending' }"
    @click="currentTab = 'pending'"
  >
    pendientes
  </button>
  <button :class="{ active: currentTab === 'all' }" @click="currentTab = 'all'">
    todos
  </button>
  <button
    :class="{ active: currentTab === 'completed' }"
    @click="currentTab = 'completed'"
  >
    completados
  </button>
  <div>
    <ul>
      <li
        v-for="todo in getTodosByTab"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @dblclick="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="openModal">CREAR TODO</button>
  <Modal v-if="isOpen" @on:close="isOpen = false">
    <template v-slot:header>
      <h2>Nuevo To Do</h2>
    </template>
    <template v-slot:body>
      <form action="submit" @submit.prevent="onSubmit">
        <div>
          <input type="text" v-model="texto" />
        </div>
      </form>
    </template>
    <template v-slot:footer>
      <h6>Luego aparecera en su lista de to do's</h6>
    </template>
  </Modal>
</template>

<script>
import useTodos from "@/composables/useTodos";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const { currentTab, pending, getTodosByTab, toggleTodo, createTodo } =
      useTodos();
    const isOpen = ref(false);
    const texto = ref("");
    return {
      currentTab,
      pending,
      isOpen,
      openModal: () => (isOpen.value = true),
      getTodosByTab,
      toggleTodo,
      texto,
      onSubmit: () => {
        createTodo(texto.value);
        isOpen.value = false;
        texto.value = '';
      },
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
