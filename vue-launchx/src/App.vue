<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome Monika to V"/>
  <AnotherOne welcome="Why hello there! Leave the guns at the door please"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AnotherOne from './components/AnotherOne.vue'

export default {
  name: 'App',
  components: {
    AnotherOne,
    HelloWorld
  }
}
</script>

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
