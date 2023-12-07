import { ref, reactive } from "vue";

export const eventBus = reactive({
  callPageMethod: (arg) => {},
});
