<template>
  <div>
    <h1>{{ user }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const users = ref([]);
const promise = new Promise((resolve) => {
  setTimeout(function () {
    resolve(route.params.slug[0]);
  }, 10000);
});
const user = await promise;
console.log(user);
</script>
