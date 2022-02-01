<template>
<div>
  <router-link to="/readinglist">
    <button>Reading List</button>
  </router-link>
  <main>
    <router-view></router-view>
    
    <h1>8 Classic Children's books</h1>
    <section class="gridlayout" >
       <BookItem v-for="book in listOfBooks" :key="book.title" :book="book"/>
    </section>
  </main>
  </div>
</template>

<script>
import books from '../assets/books.json'
import BookItem from '../components/BookItem.vue'
export default {
  props: ['library'],
  components: {BookItem},
    data(){return{
    listOfBooks: books
  }}


}
</script>



<style>
div{
  width: 100%;
}
main{

 display: flex;
 align-items: center;
 flex-direction: column;
 
}
button{
  background-color: rgb(32, 32, 32);
  color:white;
}


.gridlayout{
  width: 35%;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  margin-top: 8px; 
}

</style>