<template>
  <div class="marginTop">
    <div class="row m-4">
      <div class="col-md-6 offset-md-3 text-center">
        <!-- Start Card -->
        <div class="card">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body">
            <CIcon icon="cilFrown" class="iconSize4" />
            <h5 class="card-title fs-2">404</h5>
            <p class="card-text">
           <h5 class="text-muted fs-3"> Page not found</h5>
            </p>
            <router-link to="/">
            <button class="btn btn-primary">Go to Home Page</button>
            </router-link>
            
          </div>
        </div>
        <!-- End Card -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormAddUpdate',
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.marginTop {
  margin-top: 120px;
}
.iconSize4 {
  width: 200px;
}
</style>
