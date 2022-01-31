<template>
  <main>
      <router-view></router-view>
    <h1>8 Classic Childrens books</h1>
    <article class="gridlayout" >
       <BookItem v-for="book in library" :key="book" :book="book"/>
    </article>
  </main>
</template>

<script>
import BookItem from '../components/BookItem.vue'
export default {
  props: ['library'],
  components: {BookItem}
}
</script>



<style>
main{
  margin: auto;
}
.gridlayout{
  width: 70%;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 8px; 
}

</style>