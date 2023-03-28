<template>
  <div class="movie-body-container">
    <div id="app-instasearch">
      <div class="input-container">
        <input type="text" placeholder="Search Movies" v-model="userText" />
        <button @click="getAxios">Search Movies</button>
      </div>
    </div>

    <div v-for="mo in Movies" :key="mo.movie_id">
      <div class='movie-card'>
        <img v-bind:src="mo.poster_image_url" class="image"  />
        <div class='movie-information'>
        <h4>Movie Id: {{ mo.movie_id }}</h4>
        <h2>Title: {{ mo.title }}</h2>

        <p>Popularity Summary: {{ mo.popularity_summary }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  props: {
    msg: String
  },
  methods: {
    getAxios: function() {
      return axios
        .get(`http://localhost:3001/api/getMovie/${this.userText}`)
        .then(response => {
          this.Movies = response.data;
        })
        .catch(error => console.log(error));
    }
  },
  data() {
    return {
      Movies: [],
      userText: ""
    };
  },
  computed: {
    search_text: function() {
      return this.userText;
    }
  }
};
</script>

<style scoped>
.movie-body-container { }


.input-container {
  background: beige;
  padding: 16px;
  width: 97%;
  display: flex;
  justify-content: center;
}
.input-container input {
  border: none;
  padding: 6px 15px;
  width: 80%;
  font-size: 18px;
  font-family: 'Indie Flower', cursive;
}
::placeholder {
  color: #a6b0ba;
  opacity: 1;
}
button {
  font-family: 'Indie Flower', cursive;
  cursor: pointer;
  background: navy;
  color: white;
  border: none;
  padding: 8px 16px;
}
button:hover {
  background: orangered;
}


.movie-card {
  width: 97%;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 5px 5px rgba(1,1,1,0.2);
  background: beige;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.movie-information {
  display: flex;
  flex-direction: column;
  font-family: 'Indie Flower', cursive;
}
.image {
  width: 200px;
  margin: 16px;
}

@media screen and (max-width: 767px) {
  .input-container {
    width: 93%;
  }
  .movie-card {
    width: 93%;
    flex-direction: column;
  }
  .movie-information {
    margin: 0 16px;
  }
}

</style>
