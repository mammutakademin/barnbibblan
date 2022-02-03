<template>
  <div>
    <h1>readinglistview</h1>
    <p v-for="books in booksListed" :key="books.title">{{books.title}}</p>
    <button></button>
  </div>
</template>

<script>

export default {
    computed: {
    booksListed(){
      return this.$store.state.readinglist
      }
    },
  // props: ['book'],
  // data(){return{
  //   readingList: []
  // }},
  // beforeMount(){
  //   if(this.book != "undefined"){
  //      this.readingList.push(this.book)
  //   }
  // }
  // watch: {
  //   book: function(){
  //   if(this.book != "undefined"){
  //      this.readingList.push(this.book)
  //   }
  // }
  // }
}
</script>

<style>

</style>