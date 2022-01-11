<template>
  <div id="home">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
            class="d-block w-100 imgHeader"
            alt="hiep"
          />
          <div class="carousel-caption d-none d-md-block bg-header">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img
            src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
            class="d-block w-100 imgHeader"
            alt="hoa"
          />
          <div class="carousel-caption d-none d-md-block bg-header">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img
            src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
            class="d-block w-100 imgHeader"
            alt="hung"
          />

          <div class="carousel-caption d-none d-md-block bg-header">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
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
    <h2>hiep</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      text: "hiep",
    };
  },
};
</script>

<style scoped>
.imgHeader {
  /* width: 200px;
  max-height: 600px; */
}
.bg-header {
  background-image: linear-gradient(gray, rgba(128, 128, 128, 0.185));
}
#home {
}
</style>