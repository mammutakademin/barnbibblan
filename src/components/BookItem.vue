<template>
<div>
        <!-- <h1>{{booksInStore}}</h1> -->

  <article class="book">
    <!-- <router-link :to="{ name: 'SingleBookView', params: { book: book }}"> -->
    <!-- :style="{ 'background-color': book.color }" -->
      <!-- <div @click="chooseBook" > -->
        <div class="titlebox">
            <!-- <h3>{{book.title}}</h3> -->
            <!-- <p>{{book.author}}</p> -->
        </div>
      <!-- </div> -->
    <!-- </router-link> -->
  </article>
</div>
</template>

<script>
export default {
    methods: {
      // chooseBook(){
      //   this.$store.commit('chooseBook', this.book)
      // }
    },
    // computed: {
    //   booksInStore(){
    //     return this.$store.state.books[6].title
    //   }
    // },
    // props: ['book'],
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.titlebox {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0.5rem;
    margin-left: 0.5rem;
    border-left: 1px solid rgba(0, 0, 0, 0.4);
}
div {
    display: flex;
	width: 10rem;
	height: 13rem;
    color: rgb(151, 24, 24);
    margin: 0;
}
div h3{
    font-size: 1rem;
    margin: 0;
}
div p{
    margin: 0;
    font-size: 0.8rem;
}

</style>