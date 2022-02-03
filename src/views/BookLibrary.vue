<template>
  <div>
    <!-- <router-link to="/readinglist">
      <button>Reading List</button>
    </router-link> -->
    <main>
    <router-view></router-view>
    <!-- <router-link to="/"> -->
    <!-- </router-link> -->
      <h1>8 Classic Children's books</h1>
      <section class="gridlayout" >
        <button v-for="book in karlolof" :key="book.title" @click="addToReadingList(book)">{{book.author}}</button>
      <!-- <p>{{singlebook}}</p> -->
      </section>
    </main>
  </div>
</template>

<script>
// import SingleBookViewVue from './SingleBookView.vue'
// import books from '../assets/books.json'
// import BookItem from '../components/BookItem.vue'
export default {
  methods: {
    addToReadingList(item){
      // this.$store.commit('addToReadingList', item)
      // this.$store.commit('singleBook', item)
      this.$store.dispatch('bookRender', item)
      this.$router.push('/singlebookview')
    }
  },
  computed: {
    karlolof(){
      return this.$store.state.greger
      },
      singlebook(){
      return this.$store.state.singlebook
      }
    },
        // props: ['library'],
        // components: {BookItem},
        //   data(){return{
        //   listOfBooks: books
        // }},
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