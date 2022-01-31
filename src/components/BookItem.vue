<template>
  <main class="book">
      <section @click="$emit('displayBook', book)" :style="{ 'background-color': book.color }">
      <h3>{{book.title}}</h3>
      <p>{{book.author}}</p>
      </section>
  </main>
</template>

<script>

export default {
    props: ['book'],
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
	width: 10rem;
	height: 13rem;
	padding: 0.8rem;
    color: white;
    margin: 0;
}
section h3{
    font-size: 1rem;
    margin: 0;
    text-align: start;
}
section p{
    margin: 0;
    font-size: 0.8rem;
}

// section {
// 	width: 6rem;
// 	height: 8rem;
// 	padding: 0.5rem;
// }
</style>