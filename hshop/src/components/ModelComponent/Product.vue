<template>
  <div class="containerP">
    <div class="product" v-if="promotion == 0">
      <div class="containerImg">
        <img class="imgProduct" :src="imgs" alt="Product" />
      </div>
      <br />
      <div class="contentProduct">
        <h4 class="nameProduct">{{ nameProduct }}</h4>
        <div>{{ textContent }}</div>
        <span>
          {{ priceVND(price) }}
        </span>
        <StarRating :numberStars="numberStars" />
        <button @click="eventClick" class="btnSee">See Details</button>
      </div>
    </div>

    <div class="product" v-else>
      <div class="containerImg">
        <img class="imgProduct" :src="imgs" alt="Product" />
        <div class="saleOff">
          <p>{{ promotion * 100 }}%</p>
        </div>
      </div>
      <br />
      <div class="contentProduct">
        <h4 class="nameProduct">{{ nameProduct }}</h4>
        <div>{{ textContent }}</div>
        <span class="priceOld">
          <del>
            {{ priceVND(price) }}
          </del>
        </span>
        <span class="priceNew">
          {{ priceVND(price - promotion * price) }}
        </span>
        <StarRating :numberStars="numberStars" />
        <button @click="eventClick" class="btnSee">See Details</button>
      </div>
    </div>
  </div>
</template>
<script>
import StarRating from "./icon/StarRating.vue";
export default {
  name: "product",
  components: {
    StarRating,
  },
  props: {
    imgs: String,
    price: Number,
    promotion: Number,
    nameProduct: String,
    numberStars: Number,
    textContent: String,
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
  width: 100%;
  max-width: 270px;
}
.product {
  height: auto;
  background-color: rgb(237, 237, 253);
  padding-bottom: 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #202020;
}
.contentProduct {
  text-align: left;
  padding: 0 10px 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.imgProduct {
  width: 100%;
  /* max-width: 300px; */
  height: 380px;
  object-fit: cover;
  object-position: 50% 10%;
  border-radius: 20px 20px 0 0;
}
.nameProduct {
  font-weight: bold;
  margin: 0px;
}
.priceOld {
  color: #000;
  margin-right: 15px;
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
  top: -5px;
  right: -5px;
  border-radius: 5px 0px 5px 5px;
  box-shadow: 5px 5px 8px #cc0000;
}
.saleOff p {
  color: white;
  height: 25px;
  font-size: 15px;
  margin-top: 7px;
}
.btnSee {
  border: 1px solid red;
  background: none;
  width: 100%;
  margin-top: 3px;
  border-radius: 5px;
}
.btnSee:hover {
  border: 1px solid gray;
  color: red;
}
@media only screen and (max-width: 1000px) {
  .imgProduct {
    height: 330px;
  }
}
@media only screen and (max-width: 600px) {
  .imgProduct {
    height: 280px;
  }
}
@media only screen and (max-width: 300px) {
  .imgProduct {
    height: 280px;
    width: 100%;
  }
}
</style>