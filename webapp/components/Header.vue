<template>
  <div class='header-container'>
    <img src='https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg' alt='Back to the Future poster' />
    <div>
      <h1>Movie Review and Searching Tool</h1>
      <h2>Search Through Movies By Movie Name, see the results</h2>
    </div>
    <img src='https://image.tmdb.org/t/p/w500/lxM6kqilAdpdhqUl2biYp5frUxE.jpg' alt='Jaws poster' />
  </div>

</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header-container {
  width: 97%;
  background: beige;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  margin: 0;
}
.header-container h1 {
  font-size: 64px;
  font-family: 'Anton', sans-serif;
  text-align: center;
}
.header-container h2 {
  font-size: 28px;
  font-family: 'Anton', sans-serif;
  text-align: center;
}
.header-container img {
  width: 300px;
}

@media screen and (max-width: 767px) {
  .header-container {
    width: 93%;
    flex-direction: column;
  }
  .header-container h1 {
    font-size: 46px;
  }
  .header-container h2 {
    font-size: 16px;
  }
}

</style>
