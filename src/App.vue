<script setup>
// import css
import TodoHeader from './components/TodoHeader.vue';
import '/src/assets/CSS/main.css'
import { RouterView } from 'vue-router'
</script>

<template>
  <TodoHeader/>

  <RouterView />
</template>


