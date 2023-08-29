import { computed, ref } from "vue";
import { useStore } from "vuex";
const useTodos = () => {
  const store = useStore();
  const currentTab = ref("all");

  return {
    currentTab,
    pending: computed(() => store.getters["pendingTodos"]), //forma de hacer que este pendiente al cambio de este Getter en particular utilizando una propiedad computada.
    completed: computed(() => store.getters["completedTodos"]),
    all: computed(() => store.getters["allTodos"]),
    getTodosByTab: computed(() =>
      store.getters["getTodosByTab"](currentTab.value)
    ),
    toggleTodo: (id) => store.commit("toggleTodo", id),
  };
};
export default useTodos;




