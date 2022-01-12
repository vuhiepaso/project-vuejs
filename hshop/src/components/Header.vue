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
          <img :src="item.img" class="d-block w-100 imgHeader" alt="img" />
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
export default {
  name: "headers",
  data() {
    return {
      items: [
        {
          img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80",
          title: "Fashion women",
          content:
            "Some representative placeholder content for the first slide.",
        },
        {
          img: "https://assets.vogue.com/photos/60dcaf57f672b4dae269bd96/16:9/w_1280,c_limit/00_social.jpg",
          title: "Women's and men's fashion",
          content:
            "Some representative placeholder content for the second slide.",
          class: "active",
        },
        {
          img: "https://media.vogue.co.uk/photos/5e31584f71852d00086ffd48/16:9/w_2991,h_1682,c_limit/001-Street-Style-Menswear-Jan-2020-Vogue-credit-Jonathan-Daniel-Pryce.jpg",
          title: "Fashion men",
          content:
            "Some representative placeholder content for the third slide.",
        },
      ],
    };
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