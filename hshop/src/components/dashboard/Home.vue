<template>
  <div id="home">
    <Header></Header>
    <br />
    <h2 class="title">New products</h2>
    <div class="containerNewProducts">
      <div class="containerHome">
        <Product
          id="containerProduct"
          v-for="(item, index) in ProductData"
          :key="index"
          :promotion="item.promotion"
          :imgs="item.imgs"
          :price="item.price"
          :nameProduct="item.nameProduct"
          @eventClick="clickItem(index)"
        />
      </div>
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
      count: 0,
      ProductData: [
        {
          imgs: "https://www.fashiongonerogue.com/wp-content/uploads/2020/12/Model-Shadow-Light-Fashion-Show-White-Shirt.jpg",
          price: 500000,
          promotion: 0.1,
          nameProduct: "Kaki",
        },
        {
          imgs: "https://cdn.gumac.vn/image/01/thoi-trang/dam/shop-thoi-trang-phong-cach-co-dien270520201045135082.jpg",
          price: 1000000,
          promotion: 0.4,
          nameProduct: "Masuza",
        },
        {
          imgs: "https://afamilycdn.com/150157425591193600/2020/11/13/photo-1-16052488555091401606667-1605249001242-16052490014921200165747.jpg",
          price: 1000000,
          promotion: 0,
          nameProduct: "Masuza",
        },
        {
          imgs: "https://afamilycdn.com/150157425591193600/2020/11/13/photo-1-16052488555091401606667-1605249001242-16052490014921200165747.jpg",
          price: 1000000,
          promotion: 0.6,
          nameProduct: "Masuza",
        },
      ],
    };
  },
  methods: {
    clickItem(index) {
      alert("hiep" + index);
    },
  },
};
</script>

<style scoped>
.containerNewProducts {
  max-width: 1485px;
  margin: auto;
}
.containerHome:after {
  content: "";
  display: table;
  clear: both;
}
#containerProduct {
  float: left;
  width: 25%;
  padding: 10px;
}
.title {
  font-weight: bolder;
}
@media only screen and (max-width: 1000px) {
  #containerProduct {
    width: 33.33%;
  }
}
@media only screen and (max-width: 600px) {
  #containerProduct {
    width: 50%;
  }
}
@media only screen and (max-width: 300px) {
  #containerProduct {
    width: 100%;
  }
}
</style>