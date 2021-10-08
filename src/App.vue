<script setup lang="ts"></script>

<template>
  <router-link to="test-1">test 1</router-link>
  <br />
  <router-link to="test-2">test 2</router-link>
  <router-view v-slot="{ Component, route }">
    <suspense>
      <component :is="Component" :key="route.fullPath" />
      <template #fallback>
        <h1>fallback</h1>
      </template>
    </suspense>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
