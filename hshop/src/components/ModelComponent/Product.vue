<template>
  <div class="containerP" @click="eventClick">
    <div class="product" v-if="promotion == 0">
      <div class="containerImg">
        <img class="imgProduct" :src="imgs" alt="Product" />
      </div>
      <h5>{{ nameProduct }}</h5>
      <p class="priceOld">Price</p>
      <p>
        {{ priceVND(price) }}
      </p>
    </div>
    <div class="product" v-else>
      <div class="containerImg">
        <img class="imgProduct" :src="imgs" alt="Product" />
        <div class="saleOff">
          <p>{{ promotion * 100 }}%</p>
        </div>
      </div>
      <h5>{{ nameProduct }}</h5>

      <p class="priceOld">
        Price:
        <del>
          {{ priceVND(price) }}
        </del>
      </p>
      <p class="priceNew">
        New price:
        {{ priceVND(price - promotion * price) }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "product",
  props: {
    imgs: String,
    price: Number,
    promotion: Number,
    nameProduct: String,
  },
  methods: {
    priceVND: (price) =>
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(price),
    eventClick() {
      this.$emit("eventClick");
    },
  },
};
</script>
<style scoped>
.containerP {
  background-color: blueviolet;
  width: 100%;
  max-width: 300px;
}
.product {
  height: auto;
  background-color: whitesmoke;
  padding-bottom: 20px;
}
.imgProduct {
  width: 100%;
  max-width: 300px;
  height: 400px;
  object-fit: cover;
}
.priceOld {
  color: #000;
  font-size: 15px;
}
.priceNew {
  color: red;
  text-shadow: 2px 2px 5px #cc0000;
}
.containerImg {
  position: relative;
}
.saleOff {
  background-color: red;
  width: 35px;
  height: 35px;
  position: absolute;
  top: 0px;
  right: 10px;
}
.saleOff p {
  color: white;
  height: 25px;
  background-color: tomato;
}
@media only screen and (max-width: 1000px) {
  .imgProduct {
    height: 350px;
  }
}
@media only screen and (max-width: 600px) {
  .imgProduct {
    height: 300px;
  }
}
@media only screen and (max-width: 300px) {
  .imgProduct {
    height: 300px;
    width: 100%;
  }
}
</style>