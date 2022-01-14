<template>
  <div id="home">
    <Header></Header>
    <br />
    <h2 class="title">New products</h2>
    <div class="containerNewProducts">
      <div class="containerHome">
        <div
          class="containerProduct"
          v-for="(item, index) in ProductData"
          :key="index"
        >
          <router-link to="/productdetails" class="nav-link">
            <Product
              v-if="index < count"
              :promotion="item.promotion"
              :imgs="item.imgs"
              :price="item.price"
              :nameProduct="item.nameProduct"
              @eventClick="clickItem(index)"
            />
          </router-link>
        </div>
      </div>
      <h5 @click="count < ProductData.length ? (count += 4) : (seen = null)">
        {{ seen }}
      </h5>
    </div>
  </div>
</template>

<script>
import Header from "../Header.vue";
import Product from "../ModelComponent/Product.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Header,
    Product,
  },
  data() {
    return {
      count: 4,
      seen: "<<See More>>",
      ProductData: [],
    };
  },
  created() {
    axios
      .get(`https://www.mockachino.com/fa690fa8-8b78-46/product`)
      .then((response) => {
        this.ProductData = response.data.product;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    clickItem(index) {
      alert("hiep" + index);
    },
  },
};
</script>

<style scoped>
* {
  margin: auto;
}
.containerNewProducts {
  max-width: 1485px;
  /* background-color: darkcyan; */
  margin: auto;
}
.containerHome:after {
  content: "";
  display: table;
  clear: both;
}
.containerProduct {
  float: left;
  width: 25%;
  padding: 10px;
}
.title {
  font-weight: bolder;
}
@media only screen and (max-width: 1000px) {
  .containerProduct {
    width: 33.33%;
  }
}
@media only screen and (max-width: 800px) {
  .containerProduct {
    width: 50%;
  }
}
@media only screen and (max-width: 450px) {
  .containerProduct {
    width: 100%;
  }
}
</style>