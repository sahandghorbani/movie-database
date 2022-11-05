<template>
  <div class="search-by-name">
    <h>Search movie name : </h>
    <div class="input-group">
      <input
        type="text"
        id="name"
        required
        class="input"
        ref="input"
        v-model="query"
        @keyup="$emit('searchHandler', query)"
      />
      <label for="name" class="input-label"> Movie name</label>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { defineComponent, onMounted } from "@vue/runtime-core";
export default defineComponent({
  setup() {
    const query = ref();
    const input = ref<any>();

    onMounted(() => {
      input.value.focus();
    });

    return { query, input };
  },
});
</script>

<style scoped >
@import "../../assets/css-styles/css/search-input.css";

body {
  background-color: transparent;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
