<template>
  <div>
    <div class="containerCart">
      <div class="containerProduct">
        <div class="cartContainer">
          <div class="productColumn columnContent column1">
            <img class="imgProduct" :src="ProductData.imgs" alt="product" />
          </div>
          <div class="productColumn columnContent column2">
            <h6 class="productName">{{ ProductData.nameProduct }}</h6>
            <div class="divriceNew rowItem">
              {{
                priceVND(
                  ProductData.price - ProductData.promotion * ProductData.price
                )
              }}
            </div>
          </div>
          <div class="productColumn columnContent column3">
            <div>Color: {{ ProductData.color }}</div>
            <div>Size: {{ ProductData.size }}</div>
          </div>

          <div class="productColumn columnContent column4">
            <div class="Ncount">
              <div
                class="columnItem boxIcon"
                @click="count > 1 ? (count -= 1) : null"
              >
                <i class="fa fa-minus"></i>
              </div>
              <div class="columnItem boxIcon">
                {{ count }}
              </div>
              <div class="columnItem boxIcon" @click="count += 1">
                <i class="fa fa-plus"></i>
              </div>
            </div>
            <div class="btnDelete" @click.stop="eClick">
              <i class="fa fa-trash-o iconBtn"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartModelProducts",
  props: {
    ProductData: Object,
  },
  data() {
    return {
      count: this.ProductData.quantily, // so luong
    };
  },
  methods: {
    priceVND: (price) =>
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(price),
    eClick() {
      this.$emit("Click");
    },
  },
};
</script>
<style scoped>
.cartContainer {
  content: "";
  display: table;
  clear: both;
  margin: auto;
}
.containerProduct {
  border: 1px solid gray;
  border-radius: 5px;
  max-width: 500px;
  margin: auto;
}
.productColumn {
  float: left;
  height: 90px;
}
.column1 {
  width: 20%;
}
.column2 {
  width: 27%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.column3 {
  width: 23%;
}
.column4 {
  width: 30%;
}
.imgProduct {
  object-fit: cover;
  object-position: 50% 15%;
  width: 100%;
  min-width: 50px;
  min-height: 100%;
  padding: 5px;
  border-radius: 10px;
}
.columnContent {
  display: flex;
  justify-content: space-evenly;
  text-align: left;
  flex-direction: column;
  padding: 5px;
}
.columnItem {
  float: left;
  text-align: center;
  min-width: 20px;
}
.boxItem {
  font-size: 11px;
  font-weight: bold;
  margin: 0.5px;
  border: 0.1px solid grey;
  padding: 0 3px 0 3px;
}
.boxItem:hover {
  color: white;
  background-color: red;
}
.boxIcon {
  border: 0.1px solid grey;
  margin-bottom: 2px;
  font-size: 11px;
}
.action {
  color: white;
  background-color: red;
}
.divriceNew {
  /* color: red; */
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
.Ncount {
  margin: auto;
}
.btnDelete {
  color: orangered;
  text-align: center;
}
.iconBtn {
  font-size: 25px;
}
</style>
