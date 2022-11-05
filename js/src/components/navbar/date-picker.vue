<template>
  <div class="navbar">
    <div class="search-by-date">
      <h3>Search by release time</h3>
      <Datepicker v-model="date" range utc />
      <button @click="$emit('searchBtn', date)">search</button>
    </div>
  </div>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "@vue/reactivity";
export default {
  components: { Datepicker },
  setup() {
    const date = ref();

    return { date };
  },
};
</script>

<style >
.search-by-date {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.search-by-date button {
  border: none;
  background: #549DF2;
  color: white;
  width: 74px;
  height: 33px;
  border-radius: 100px;
}

.search-by-date h3{
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}
</style>
