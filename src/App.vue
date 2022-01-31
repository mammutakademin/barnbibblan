<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/library">BIBLIOTEK</router-link>
    </div>
    <!-- <router-view/> -->
    <BookLibrary :library="listOfBooks"/>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import books from './assets/books.json'
import BookLibrary from './views/BookLibrary.vue'
export default {
  components: {BookLibrary},
  data(){return{
    listOfBooks: books
  }}
}
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
