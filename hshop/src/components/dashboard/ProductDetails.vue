<template>
  <div class="details">
    <br />
    <h2>Product Details</h2>
    <div class="detailsContainer">
      <img
        src="https://www.fashiongonerogue.com/wp-content/uploads/2020/12/Model-Shadow-Light-Fashion-Show-White-Shirt.jpg"
        alt="product"
      />
      <div class="ProductContent">
        <h3 class="productName">hiep</h3>
        <p class="priceOld">1000</p>
        <p class="priceNew">1000</p>
      </div>
      <button class="btn">
        <i class="fa fa-shopping-cart" style="font-size: 35px; color: red"></i>
        App To Cart
      </button>
      <button class="btn btnRed">Buy Now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "details",
};
</script>

<style scoped>
.detailsContainer {
}
.btn {
  border: 2px solid red;
  background-color: white;
  color: black;
  padding: 7px 14px;
  font-size: 26px;
  cursor: pointer;
  margin: 5px;
}
.btnRed {
  background-color: red;
  color: white;
}
</style>