
<script setup>
import { RouterLink } from "vue-router";

</script>

<template>
    <div>
          <header>
              <nav class="container">
                  <div class="branding">
                    <img src="../assets/images/Vue_Logo_Black.png" alt="image logo">
                    <h1>Vue Todos</h1>
                    </div> 
                    <ul class="nav-routes">
                       <RouterLink to="/">Home</RouterLink>
                           <RouterLink to="/about">About</RouterLink>
                    </ul>
                </nav>
          </header>
    </div>
</template>

