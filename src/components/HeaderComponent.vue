<template>
  <!-- Start Navbar -->
  <nav class="navbar navbar-expand-lg navColor shadow-sm fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand text-white mx-4 p-2" to="/"
        >Post Management System</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <span class="position-relative">
              <CIcon
                icon="cilBell"
                class="position-relative text-white iconSize1"
              />
              <span
                class="
                  position-absolute
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                  text-white
                "
              >
                {{ count }}
                <span class="visually-hidden">unread messages</span>
              </span>
            </span>
          </li>
        </ul>
        <router-link class="navbar-text" to="/addNew">
          <button class="btn btn-success mx-4">
            <CIcon icon="cilLibraryAdd" class="iconSize1" />
            Add New Post
          </button>
        </router-link>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import { onBeforeMount, reactive, computed, ref } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'HeaderComponent',
  components: {},
  setup() {
    let store = useStore();
    let count = ref();

    return {
      count: computed(() => store.getters.getDataLength),
    };
  },
};
</script>

<style scoped>
.iconSize1 {
  width: 23px;
}
.navColor {
  background-color: #005075;
}
.router-link-active {
  /* background-color: gray; */
}
/* .btnColor{
  background-color:#05944f;
} */
</style>
