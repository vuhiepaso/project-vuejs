<template>
  <div id="navbarContainer">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand textSize">
          Hshop
          <img class="logo" src="../assets/logo.png" alt="logo" />
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/product" class="nav-link">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart" class="nav-link">Cart</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">products</router-link>
            </li>
          </ul>

          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search ..."
              aria-label="Search"
            />
            <!-- Create an Autocomplete Form sau dùng cái này để tìm kiếm-->
            <button
              class="btn btn-outline-secondary buttonSearch"
              type="submit"
            >
              <i class="fa fa-search">Search</i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>
<style scoped>
.navbar-dark {
  padding: 10px 5px 10px 5px;
}
.logo {
  width: 30px;
}
.textSize {
  font-size: 28px;
  font-weight: bold;
  text-shadow: 2px 2px 5px grey;
}
</style>
