<template>
  <div>
    <!-- <div>{{ ProductData }}</div> -->
    <div class="container">
      <br />
      <h2>Product Details</h2>

      <div class="detailsContainer">
        <img
          class="productcolumn imgProduct"
          :src="ProductData.imgs"
          alt="product"
        />
        <div class="productcolumn columnContent">
          <h2 class="productName">{{ ProductData.nameProduct }}</h2>
          <p class="contentProduct">{{ ProductData.textContent }}</p>
          <div class="divriceOld">
            <del>{{ priceVND(ProductData.price) }}</del>
          </div>

          <div class="divriceNew rowItem">
            <div class="columnItem">
              {{
                priceVND(
                  ProductData.price - ProductData.promotion * ProductData.price
                )
              }}
            </div>
            <div class="columnItem">
              <span class="discount"
                >{{ ProductData.promotion * 100 }}% Sale Off</span
              >
            </div>
          </div>

          <StarRating :numberStars="ProductData.numberStars" />

          <div>Color:</div>
          <div class="rowItem">
            <!-- action -->
            <div
              class="boxItem columnItem"
              v-for="(color, index) in colors"
              :key="index"
              @click="indexColor = index"
              :class="index === indexColor ? 'action' : null"
            >
              {{ color.name }}
            </div>
          </div>

          <div>Size:</div>
          <div class="rowItem">
            <div
              class="boxItem columnItem"
              v-for="(size, index) in colors[indexColor].size"
              :key="index"
              @click="(indexSize = index), (pty = size.quantily)"
              :class="index === indexSize ? 'action' : null"
            >
              {{ size.name }}
            </div>
          </div>
          <div>Quantily:</div>
          <div class="rowItem Ncount">
            <div
              class="columnItem boxIcon"
              @click="count > 1 ? (count -= 1) : null"
            >
              <i class="fa fa-minus"></i>
            </div>
            <div class="columnItem boxIcon">{{ count }}</div>
            <div
              class="columnItem boxIcon"
              @click="count < pty ? (count += 1) : null"
            >
              <i class="fa fa-plus"></i>
            </div>
            <div class="columnItem columnText">
              {{ pty }} products are available
            </div>
          </div>

          <div class="buttonContainer">
            <button class="btnCart btnSize">
              <i class="fa fa-shopping-cart btnSize"></i>
              Add To Cart
            </button>
            <button class="btnCartRed btnSize" @click="buyNow()">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "../ModelComponent/icon/StarRating.vue";
import axios from "axios";
export default {
  name: "detailsProduct",
  components: {
    StarRating,
  },
  data() {
    return {
      ProductData: [],
      colors: [],
      pty: 0,

      index: this.$route.query.index, //sau se thay thanh id san pham
      indexColor: 0, // mau
      indexSize: null, // Size
      count: 1, // so luong
    };
  },
  created() {
    axios
      .get(`https://www.mockachino.com/54ff756f-010c-43/home`)
      .then((response) => {
        this.ProductData = response.data.product[this.index];
        this.colors = this.ProductData.color;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    priceVND: (price) =>
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(price),
    buyNow() {
      if (this.indexSize == null) {
        alert("ban phai chon Size");
      } else
        alert(
          "Thong tin san pham \nMasp:" +
            this.index +
            "\nMmau: " +
            this.indexColor +
            "\nMsize :" +
            this.indexSize +
            "\nSluong" +
            this.count
        );
    },
  },
};
</script>
<style scoped>
.detailsContainer {
  content: "";
  display: table;
  clear: both;
  margin: auto;
  padding: 10px;
  background-color: rgba(135, 207, 235, 0.473);
}
.imgProduct {
  object-fit: cover;
}
.productcolumn {
  float: left;
  width: 50%;
  height: 450px;
  /* chinh lai cai nay */
}
.columnContent {
  background-color: rgba(255, 255, 255, 0.534);
  display: flex;
  justify-content: flex-end;
  text-align: left;
  flex-direction: column;
  padding: 30px;
}
.buttonContainer {
  max-width: 300px;
  height: 60px;
}
.btnCartRed {
  background-color: red;
  border: 2px solid red;
  color: white;
}
.btnCart {
  border: 2px solid red;
  cursor: pointer;
}
.btnSize {
  font-size: 25px;
}
.btnCart:hover {
  background-color: gray;
  color: white;
}
.btnCartRed:hover {
  background-color: gray;
  color: white;
  border-color: gray;
}
.btnCart i {
  color: red;
}
.productName {
  margin: 0;
  font-weight: bold;
}
.rowItem {
  content: "";
  display: table;
  clear: both;
}
.columnItem {
  float: left;
  text-align: center;
  min-width: 30px;
}
.boxItem {
  font-size: 14px;
  font-weight: bold;
  margin: 0 0.5px 0.5px 0;
  border: 0.1px solid grey;
  padding: 0 3px 0 3px;
}
.boxItem:hover {
  color: white;
  background-color: rgba(128, 128, 128, 0.548);
}
.boxIcon {
  border: 0.1px solid grey;
  margin-bottom: 2px;
}
.columnText {
  font-size: 13px;
  padding: 3px;
}
.action {
  color: white;
  background-color: rgba(128, 128, 128, 0.548);
}
.divriceNew {
  font-size: 30px;
  color: red;
  font-weight: 900;
}
.discount {
  background-color: red;
  color: white;
  font-size: 12px;
  padding: 3px;
  font-weight: normal;
  border-radius: 5px;
}
@media only screen and (max-width: 770px) {
  .productcolumn {
    width: 100%;
    height: auto;
  }
  .btnSize {
    font-size: 20px;
  }
}
</style>
