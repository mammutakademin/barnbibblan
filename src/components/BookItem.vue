<template>
  <article class="book">
    <router-link :to="{ name: 'SingleBookView', params: { book: book }}">
    
      <div :style="{ 'background-color': book.color }">
        <div class="titlebox">
            <h3>{{book.title}}</h3>
            <p>{{book.author}}</p>
        </div>
      </div>
    </router-link>
  </article>
</template>

<script>

export default {
    props: ['book'],
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
    color: white;
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