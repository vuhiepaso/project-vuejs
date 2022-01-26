<template>
  <div id="app">
    <div class="navbarMenu">
      <Navbar />
    </div>
    <router-view />
    <div class="open">
      <router-link to="/cart">
        <button class="button">
          <div class="tick">{{ tick }}</div>
          <i class="fa fa-shopping-cart"></i>
        </button>
      </router-link>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      tick: 0,
    };
  },
  created() {
    axios
      .delete(`https://www.mockachino.com/93194792-de76-47/cart`)
      .then((response) => {
        this.tick = response.data.product.length;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style>
* {
  margin: 0px;
}
#app {
  font-family: "Big Shoulders Display", "Trebuchet MS", "Lucida Sans Unicode",
    "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.open {
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: fixed;
  bottom: 100px;
  right: 10px;
}
.button {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  font-size: 30px;
  background-color: red;
  color: white;
  border: none;
  position: relative;
  text-align: center;
}
.tick {
  background-color: red;
  color: white;
  font-weight: bold;
  width: 20px;
  height: 20px;
  font-size: 10px;
  border: 1px solid white;
  border-radius: 50%;

  position: absolute;
  top: 0px;
  right: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
