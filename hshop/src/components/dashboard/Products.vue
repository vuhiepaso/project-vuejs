<template>
  <div>
    <h1>product</h1>
    <li v-for="item in items" :key="item.name">
      <!-- {{ parentMessage }} - {{ index }} - {{ item.name }} -->
      hiep
    </li>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      items: [{ name: "Cà phê" }, { name: "Trà đặc" }, { name: "Bò húc" }],
    };
  },
};
</script>

<style>
</style>