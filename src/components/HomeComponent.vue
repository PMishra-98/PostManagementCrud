<template>
  <div class="marginTop p-4">
<!-- Start Home heading -->
   <div class="text-center text-light  shadow-lg m-3 p-2">
    <h4 class="text-decoration-underline fs-3" >Post Management System</h4>
    <p class="fs-5"> In this system we can get, add, delete and update data by fetching APIs.
    </p>
   </div> 
<!-- End Home headinf -->

    <div
      class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mx-2"
      v-if="getData.length > 0">
      <div class="col" v-for="item in getData">
      <!-- Start card -->
        <div class="card h-100 shadow-lg ">
          <div class="card-header text-center">
           <button class="btn btn-light dot text-uppercase shadow"><span class="fw-bold fs-4">{{ item.title.substring(0, 2) }}</span></button>
          </div>
          <div class="card-body">
            <h5 class="card-title text-uppercase">  
           <!-- <div class="text-muted"> User Id: {{ item.userId }}, Id: {{ item.id }}</div> -->
           {{ item.title.substring(0, 15) }}<span v-if="item.title.length>15">...</span>
            </h5>
            <p class="card-text">
              {{ item.body.substring(0, 100) }}<span v-if="item.body.length>100">...</span>
            </p>
          </div>
          <div class="card-footer">
            <router-link :to=`/viewDetail/${item.id}/${item.userId}`>
            <button class="btn btn-success btn-sm mx-2">
              <CIcon icon="cilWatch" class="text-white iconSize2" />
            </button>
            </router-link>
             <router-link :to=`/editDetail/${item.id}/${item.userId}`>
            <button class="btn btn-primary btn-sm mx-2">
              <CIcon icon="cilColorBorder" class="text-white iconSize2" />
            </button>
              </router-link>
           <div class="float-end">
            <button
              class="btn btn-danger btn-sm mx-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              @click="wantToDelete(item.id)"
            >
              <CIcon icon="cilTrash" class="text-white iconSize2" />
            </button>
           </div>
          </div>
        </div>
        <!-- End Card -->
      </div>
    </div>
    <div v-else>
    <!-- Strat Loading -->
    <div class="d-flex text-center">
      <strong>Loading...</strong>
       <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
    </div>
     <!-- End Loading -->
   </div>
</div>

  <!-- Start Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Delete</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Do you want to delete?</div>
        <div class="modal-footer">
         <button type="button" class="btn btn-light btn-sm" @click="deleteData" data-bs-dismiss="modal">Yes</button>
          <button type="button" class="btn btn-primary btn-sm" data-bs-dismiss="modal">
            No
          </button>
         
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->
</template>

<script>
import { onBeforeMount, reactive, computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'HomeComponent',
  components: {},
  setup() {
    let show = ref(false);
    const store = useStore();
    let id=ref(0);
    let getData= computed(() => store.getters.getData);
   
   //Call fuction to find id for delete
    function wantToDelete(getId){
      id.value=getId;
       }

    //Call fuction to delete data
     function deleteData(){
        store.dispatch('deleteData',id.value);
       }

    return {
      show,
      id,
      wantToDelete,
      deleteData,
      getData
    };
  },
};
</script>

<style scoped>
.iconSize2 {
  width: 18px;
}
.bgColor {
  background-color: #0072a8;
  border: 2px;
}
.marginTop {
  margin-top: 60px;
}
.card-header{
background-color:
}
/* .scrollDiv{
  overflow: auto;
  height:600px;
} */
.dot {
  height: 100px;
  width: 100px;
   background-color: lightblue;
  /* background-color: #f0f0f0; */
  border-radius:50%;
  display: inline-block;
}
</style>
