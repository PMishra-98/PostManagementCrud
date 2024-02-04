<template>
  <div class="marginTop">
    <div class="row m-4">
      <div class="col-md-6 offset-md-3">
      <!-- Start Card -->
        <div class="card shadow-lg">
          <div class="card-header fs-4 text-center p-2">Details of Id- {{showData.id}}</div>
          <div class="card-body my-4">
           <p class="card-text">
            <div class="row">
            <div class="col-md-3 col-sm-12 fw-bold ">User Id : </div>
            <div class="col-md-9 col-sm-12"> {{showData.userId}}</div>
            </div>
            <div class="row mt-4">
            <div class="col-md-3 col-sm-12 fw-bold">Title : </div>
            <div class="col-md-9 col-sm-12"> {{ showData.title }}</div>
            </div>
           
           
             <div class="row mt-4">
            <div class="col-md-3 col-sm-12 fw-bold">  Description : </div>
            <div class="col-md-9 col-sm-12"> {{ showData.body }}</div>
            </div>
            </p>
          </div>
          <div class="card-footer text-center">
          <div class="float-end">
            <router-link :to=`/editDetail/${showData.id}/${showData.userId}`>
            <button class="btn btn-primary btn-sm mx-2">
              <CIcon icon="cilColorBorder" class="text-white iconSize2" />
            </button>
              </router-link>
            <button
              class="btn btn-danger btn-sm mx-4"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <CIcon icon="cilTrash" class="text-white iconSize3" />
            </button>
            <router-link to="/">
              <button class="btn btn-primary btn-sm mx-4  float-right">
                <CIcon icon="cilArrowThickLeft" class="text-white iconSize3" />
                back
              </button>
            </router-link>
          </div>
          </div>
        </div>
        <!-- End Card -->
      </div>
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
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            No
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteData"
            data-bs-dismiss="modal"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->
</template>

<script>
import {
  reactive,
  isReactive,
  ref,
  onMounted,
  computed,
  onBeforeMount,
  readonly,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  name: 'ViewComponent',
  components: {},
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    let showData = reactive({});

    //Call mounted lifcycle to show data
    onMounted(() => {
      store.commit('GET_EDIT_VIEW_DATA', route.params);
      let data = readonly(store.getters.getEditViewData);
      showData.id = data.id;
      showData.userId = data.userId;
      showData.title = data.title;
      showData.body = data.body;
    });
    
  //Call function to delete data
    function deleteData() {
      store.dispatch('deleteData', route.params.id);
      router.push('/');
    }

    return {
      deleteData,
      showData,
    };
  },
};
</script>

<style scoped>
.iconSize3 {
  width: 18px;
}
.bgColor {
  background-color: #0072a8;
  border: 2px;
}
.marginTop {
  margin-top: 120px;
}
</style>
