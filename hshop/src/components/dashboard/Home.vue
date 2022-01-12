<template>
  <div id="home">
    <Header></Header>
    <br />
    <h2>Bộ sản phẩm mới</h2>
    <div id="containerHome">
      <Product />
    </div>
  </div>
</template>

<script>
import Header from "../Header.vue";
import Product from "../ModelComponent/Product.vue";
export default {
  name: "Home",
  components: {
    Header,
    Product,
  },
  data() {
    return {
      text: "hiep",
    };
  },
};
</script>

<style scoped>
#home {
  /* height: 100px; */
}
</style>