<template>
  <div class="containerCategory">
    <!-- <img class="imgCategory" :src="src" alt="abc" /> -->
    <div
      class="imgCategory"
      :style="{ 'background-image': 'url(' + src + ')' }"
    >
      <div class="content">
        <span>{{ nameCategory }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    src: String,
    nameCategory: String,
  },
};
</script>


<style scoped>
.containerCategory {
  width: 100%;
  max-width: 400px;
  height: 100%;
}
.imgCategory {
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 5%;
  box-shadow: 2px 2px 5px black;

  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}
.content {
  background-color: rgba(128, 128, 128, 0.863);
  padding: 20px 0px 20px 0px;
  font-weight: bolder;
  color: white;
  font-size: 3vw;
  opacity: 0;
}
.containerCategory:hover .content {
  opacity: 1;
}
@media only screen and (max-width: 800px) {
  .content {
    opacity: 1;
    padding: 5px 0px 5px 0px;
    font-size: 2.5vw;
  }
}
</style>