// https://www.digitalocean.com/community/tutorials/vuejs-vue-autocomplete-component nguồn hướng dẫn 
<template>
  <div class="autocomplete">
    <input
      class="inputS"
      type="search"
      placeholder="Search ..."
      @input="onChange"
      v-model="search"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
    />
    <div class="dropdown-content">
      <div
        id="autocomplete-results"
        v-show="isOpen"
        class="autocomplete-results"
      >
        <p class="loading" v-if="isLoading">Loading results...</p>

        <p
          v-else
          v-for="(result, i) in results"
          :key="i"
          @click="setResult(result)"
          class="autocomplete-result"
          :class="{ 'is-active': i === arrowCounter }"
        >
          {{ result }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchAutocomplete",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    isAsync: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      results: [],
      search: "",
      isLoading: false,
      arrowCounter: -1,
    };
  },
  computed: {
    searchValue: {
      get() {
        return this.search;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  watch: {
    items: function (value, oldValue) {
      if (value.length !== oldValue.length) {
        this.results = value;
        this.isLoading = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    setResult(result) {
      this.search = result;
      this.isOpen = false;
    },
    filterResults() {
      this.results = this.items.filter((item) => {
        return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
    onChange() {
      this.$emit("input", this.search);

      if (this.isAsync) {
        this.isLoading = true;
      } else {
        this.filterResults();
        this.isOpen = true;
      }
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length - 1) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.search = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
  },
};
</script>

<style>
.autocomplete {
  position: relative;
}
.inputS {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}
.autocomplete-results {
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow: auto;
}
.dropdown-content {
  margin-top: 5px;
  position: absolute;
  background-color: whitesmoke;
  min-width: 100%;
  z-index: 3;
}
.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 2px;
  margin: 0px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>