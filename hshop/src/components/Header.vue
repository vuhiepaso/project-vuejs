<template>
  <div id="header">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          v-for="(item, index) in items"
          :key="index"
          :class="index == 0 ? 'active' : null"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          :data-bs-slide-to="index"
          aria-current="true"
          :aria-label="'Slide' + (index + 1)"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(item, index) in items"
          :key="index"
          :class="index == 0 ? 'active' : null"
        >
          <img :src="item.url" class="d-block w-100 imgHeader" alt="img" />
          <div class="carousel-caption d-none d-md-block bg-header">
            <h5>{{ item.title }}</h5>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "headers",
  data() {
    return {
      items: [],
    };
  },
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_limit=5`)
      .then((response) => {
        this.items = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style scoped>
.imgHeader {
  width: auto;
  object-fit: cover;
  height: 500px;
}
.bg-header {
  background-image: linear-gradient(gray, rgba(128, 128, 128, 0.185));
}
@media only screen and (max-width: 1000px) {
  .imgHeader {
    height: 400px;
  }
}
@media only screen and (max-width: 500px) {
  .imgHeader {
    height: 200px;
  }
}
</style>