<template>
  <div>
    <div v-if="numberStars == 1">
      <span class="fa fa-star colorBg checked"></span>
      <span class="fa fa-star colorBg"></span>
      <span class="fa fa-star colorBg"></span>
      <span class="fa fa-star colorBg"></span>
      <span class="fa fa-star colorBg"></span>
    </div>
    <div v-else-if="numberStars == 2">
      <span class="fa fa-star colorBg checked"></span>
      <span class="fa fa-star colorBg checked"></span>
      <span class="fa fa-star colorBg"></span>
      <span class="fa fa-star colorBg"></span>
      <span class="fa fa-star colorBg"></span>
    </div>
    <div v-else-if="numberStars == 3">
      <span class="fa fa-star colorBg checked"></span>
      <span class="fa fa-star colorBg checked"></span>
      <span class="fa fa-star colorBg checked"></span>
      <span class="fa fa-star colorBg"></span>
      <span class="fa fa-star colorBg"></span>
    </div>
    <div v-else-if="numberStars == 4">
      <span class="fa fa-star colorBg checked"></span>
      <span class="fa fa-star colorBg checked"></span>
      <span class="fa fa-star colorBg checked"></span>
      <span class="fa fa-star colorBg checked"></span>
      <span class="fa fa-star colorBg"></span>
    </div>
    <div v-else-if="numberStars == 5">
      <span class="fa fa-star colorBg checked"></span>
      <span class="fa fa-star colorBg checked"></span>
      <span class="fa fa-star colorBg checked"></span>
      <span class="fa fa-star colorBg checked"></span>
      <span class="fa fa-star colorBg checked"></span>
    </div>
    <div v-else>
      <span class="fa fa-star colorBg"></span>
      <span class="fa fa-star colorBg"></span>
      <span class="fa fa-star colorBg"></span>
      <span class="fa fa-star colorBg"></span>
      <span class="fa fa-star colorBg"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "starRating",
  props: {
    numberStars: Number,
  },
};
</script>

<style>
.colorBg {
  color: #cccccc;
}
.checked {
  color: orange;
}
.fa-star:hover {
  color: rgb(80, 80, 80);
  font-size: 18px;
}
</style>