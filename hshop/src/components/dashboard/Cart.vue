<template>
  <div>
    <div class="containerCart">
      <br />
      <h2>Cart</h2>
      <div
        class="cartProducts"
        v-for="(item, index) in ProductData"
        :key="index"
        @click="clickItem(index)"
      >
        <CartProducts
          :ProductData="ProductData[index]"
          @Click="deleteProduct(index)"
        />
      </div>

      <div class="payment">
        <div class="buyMoney">
          <div>Total money: {{ priceVND(TotalMoney) }}</div>
          <div>Product number: {{ ProductData.length }}</div>
          <button @click="buy()">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CartProducts from "../ModelComponent/CartProducts.vue";
export default {
  name: "cartProduct",
  components: {
    CartProducts,
  },
  data() {
    return {
      ProductData: [],

      pty: 0,
      indexColor: 0, // mau
      indexSize: null, // Size
      count: 1, // so luong
    };
  },
  created() {
    axios
      .delete(`https://www.mockachino.com/93194792-de76-47/cart`)
      .then((response) => {
        this.ProductData = response.data.product;
        // this.colors = this.ProductData.color;
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
    buy() {
      alert(this.ProductData);
    },
    clickItem(index) {
      this.$router.push({
        path: `/productdetails`,
        query: { index },
      });
    },
    deleteProduct(index) {
      if (index == 0) {
        this.ProductData.shift();
      } else this.ProductData.splice(index, index);
      // alert("delete" + index);
    },
  },
  computed: {
    TotalMoney() {
      let arrData = this.ProductData;
      var total = 0;
      for (const product of arrData) {
        const { price, promotion, quantily } = product;
        total += (price - promotion * price) * quantily;
      }
      return total;
    },
  },
};
</script>
<style scoped>
.cartProducts {
  padding-bottom: 2px;
}
.payment {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0px;
  margin-top: 10px;
  width: 100%;
  background-color: white;
  border-top: 0.1px solid rgba(128, 128, 128, 0.397);
}
.buyMoney {
  text-align: left;
  padding: 5px;
  max-width: 500px;
  margin: auto;
  font-size: 20px;
  color: rgb(58, 58, 58);
}
.buyMoney button {
  width: 100%;
  border: none;
  background-color: red;
  color: whitesmoke;
  font-weight: bold;
}
</style>
