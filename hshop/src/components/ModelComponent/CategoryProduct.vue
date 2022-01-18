<template>
  <div class="containerCategory">
    <img class="imgCategory" :src="src" alt="abc" />
    <div class="content">
      <span>{{ nameCategory }}</span>
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
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 100%;
}
.imgCategory {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5%;
  box-shadow: 2px 2px 5px black;
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100%;
  background-color: rgba(128, 128, 128, 0.863);
  padding: 10px 30px 10px 30px;
  font-weight: bolder;
  color: white;
  opacity: 0;
  display: inline;
}
.containerCategory:hover .content {
  opacity: 1;
}
@media only screen and (max-width: 500px) {
  .containerCategory:hover .content {
    opacity: 0;
  }
}
</style>