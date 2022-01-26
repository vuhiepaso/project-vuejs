<template>
  <div>
    <h1>product</h1>
    <li v-for="item in items" :key="item.numberA">
      <!-- {{ parentMessage }} - {{ index }} - {{ item.name }} -->
      {{ item.numberA }}
    </li>
    <span> {{ total }} </span>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      items: [{ numberA: 1 }, { numberA: 2 }, { numberA: 3 }],
    };
  },
  computed: {
    total() {
      let total = this.items;
      var a = 0;
      for (const element of total) {
        a += element.numberA;
      }
      return a;
    },
  },
};
</script>

<style>
</style>