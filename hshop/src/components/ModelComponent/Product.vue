<template>
  <div id="product">
    <div id="containerImg">
      <img id="imgProduct" :src="imgs" alt="Product" />
      <div id="saleOff">
        <p>{{ promotion * 100 }}%</p>
      </div>
    </div>
    <br />
    <h5>Bạn gái giá rẻ</h5>

    <p id="priceOld">
      Price:
      <del>
        {{ priceVND(price) }}
      </del>
    </p>
    <p id="priceNew">
      New price:
      {{ priceVND(price - promotion * price) }}
    </p>
  </div>
</template>
<script>
export default {
  name: "product",
  Props: {
    imgs: String,
    price: Number,
    promotion: Number,
  },
  data() {
    return {
      imgs: "https://www.fashiongonerogue.com/wp-content/uploads/2020/12/Model-Shadow-Light-Fashion-Show-White-Shirt.jpg",
      price: 500000,
      promotion: 0.5,
    };
  },
  methods: {
    priceVND: (price) =>
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(price),
  },
};
</script>

<style scoped>
* {
  margin: 0px;
}
#product {
  /* background-color: blue; */
  width: 100%;
  max-width: 300px;
  height: auto;
  background-color: whitesmoke;
  padding-bottom: 20px;
}
#imgProduct {
  width: 100%;
  max-width: 300px;
  height: 400px;
  object-fit: cover;
}
#priceOld {
  color: #000;
  font-size: 15px;
}
#priceNew {
  color: red;
  /* font-weight: bold; */
  text-shadow: 2px 2px 5px #cc0000;
}
#containerImg {
  position: relative;
}
#saleOff {
  background-color: red;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 8px;
  right: 16px;
}
#saleOff p {
  color: white;
  height: 20px;
  background-color: tomato;
}
</style>