<template>
  <div id="home">
    <Header :item="ProductData.item" />
    <br />
    <div class="container">
      <h2 class="title">New products</h2>
      <br />
      <div class="containerRow rowProduct">
        <div
          class="containerColumn columnProduct"
          v-for="(item, index) in ProductData.product.slice(0, count)"
          :key="index"
        >
          <Product
            :promotion="item.promotion"
            :imgs="item.imgs"
            :price="item.price"
            :nameProduct="item.nameProduct"
            :numberStars="item.numberStars"
            :textContent="item.textContent"
            @eventClick="clickItem(index)"
          />
        </div>
      </div>

      <span @click="count < ProductData.product.length ? (count += 4) : null">
        {{ seen }}
      </span>
      <br />
      <span @click="count > 5 ? (count -= 4) : null">{{ hide }}</span>

      <br />
      <br />
      <h2 class="title">Main product list</h2>
      <br />
      <div class="containerRow">
        <div
          class="containerColumn columnCategory"
          v-for="(item, index) in ProductData.productList"
          :key="index"
        >
          <Category :src="item.img" :nameCategory="item.title" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../Header.vue";
import Product from "../ModelComponent/Product.vue";
import Category from "../ModelComponent/CategoryProduct.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Header,
    Product,
    Category,
  },
  data() {
    return {
      count: 4,
      seen: "See More",
      hide: "Hide",
      ProductData: [],
    };
  },
  created() {
    axios
      .get(`https://www.mockachino.com/54ff756f-010c-43/home`)
      .then((response) => {
        this.ProductData = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    clickItem(index) {
      this.$router.push({
        path: `/productdetails`,
        query: { index },
      });

      alert("hiep" + index);
    },
  },
};
</script>

<style scoped>
* {
  margin: auto;
}
.container {
  margin: auto;
  border-radius: 10px;
  border: 1px solid gray;
  padding: 15px 5px 15px 5px;
}
.containerRow:after {
  content: "";
  display: table;
  clear: both;
}
.rowProduct {
  max-width: 1200px;
}
.containerColumn {
  float: left;
  padding: 10px;
}
.columnProduct {
  width: 25%;
}
.columnCategory {
  width: 33.33%;
  height: 400px;
  font-size: 28px;
}
.title {
  font-weight: bolder;
  color: grey;
  text-shadow: 1px 1px 3px grey;
}
@media only screen and (max-width: 1000px) {
  .columnProduct {
    width: 33.33%;
  }
  .columnCategory {
    height: 300px;
    font-size: 2vw;
  }
}
@media only screen and (max-width: 800px) {
  .columnProduct {
    width: 50%;
  }
  .columnCategory {
    height: 200px;
    font-size: 10px;
  }
}
@media only screen and (max-width: 450px) {
  .columnProduct {
    width: 100%;
  }
  .columnCategory {
    height: 100px;
  }
}
</style>