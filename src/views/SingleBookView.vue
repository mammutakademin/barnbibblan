<template>
    <div class="singelBook">
      <router-view></router-view>
      <h1>SingleBookView</h1>
      <article class="wrappersingelbook">
        <section :style="{ 'background-color': book.color }">
          <div class="titel">
            <h2>{{book.title}}</h2>
            <p>{{book.author}}</p>
          </div>
        </section>
        <article class="bookinfo">
            <h2>{{book.title}}</h2>
            <p>By {{book.author}}</p>
            <p>Written year {{book.year}}</p>
            <p>{{book.pages}} pages</p>
            <p class="plot">{{book.plot}}</p>
            <p>Ages {{book.audience}}</p>
          <router-link :to="{ name: 'ReadingList', params: { book: book }}">
             <button class="btnList">Oh, I want to read it!</button>
          </router-link>
        </article>
      </article>
      
    </div>
</template>

<script>

export default {
props:['book'],
// methods: {
//   addToList (){
    
//   }
// }
}
</script>

<style lang="scss" scoped>
.singelBook{
  display: flex;
  justify-content: center;
  background-color: rgb(29, 29, 29);
  height:100vh;
  width: 100%;
  
  
}
.wrappersingelbook{
  display: flex;
}
.bookinfo{
  color: white;
  padding: 20px;
  width: 300px;
  height: 400px;
}
section{
  width: 300px;
  height: 400px;
  color: rgb(36, 36, 36);
  display: flex;

}
.titel {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0.5rem;
    margin-left: 0.5rem;
    border-left: 2px solid rgba(0, 0, 0, 0.4);
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
// section {
//   width: 480px;
//   height: 610px;
// }
.plot {
  font-size: 10px;
}
p {
  width: 250px;
  font-weight: bold;
  font-size: 18px;
}
.btnList{
  background-color: white;
  color: grey;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>