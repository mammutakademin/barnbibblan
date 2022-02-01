<template>
  <div>
    <h1>readinglistview</h1>
    <p>VAFAN SNACKAR DU OM OSKKKAR?</p>
    <button></button>
  </div>
</template>

<script>

export default {
  props: ['book'],
  data(){return{
    readingList: []
  }},
  beforeMount(){
    if(this.book != "undefined"){
       this.readingList.push(this.book)
    }
  }
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