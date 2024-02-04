<template>
  <div class="marginTop">
    <div class="row m-4">
      <div class="col-md-6 offset-md-3">
        <!-- Start Card -->
        <div class="card">
          <h5 class="card-header fs-4 text-center p-2">
            <span v-if="viewAdd">Add New Post</span>
            <span v-else>Update the detail </span>
          </h5>
          <div class="card-body my-4">
            <!--Start Form using bootstrap5-->
            <form
              @submit="handelDataForm"
              id="empForm"
              @reset.prevent="wantToReset"
            >
              <div class="mb-4">
                <label for="title" class="mb-1 fw-bold">Title</label>
                <input
                  type="text"
                  v-model="formData.title"
                  class="form-control"
                  id="title"
                  placeholder="Write title"
                  required
                />
                <!-- <div v-if="error.length>0" class="text-danger">
                {{error[0]}}
                </div> -->
              </div>
              <div class="mb-4">
                <label for="description" class="mb-1 fw-bolder"
                  >Description</label
                >
                <textarea
                  v-model="formData.body"
                  class="form-control"
                  id="description"
                  placeholder="Write description"
                  required
                  row="3"
                />
              </div>

              <div class="p-2 float-end">
                <button
                  type="submit"
                  class="btn btn-primary btnColor text-white"
                >
                  <span v-if="viewAdd"> Add</span>
                  <span v-else> Update</span>
                </button>
                <button
                  type="reset"
                  class="btn btn-danger mx-4 text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Reset
                </button>
                <!-- <router-link to="/">
                  <button class="btn btn-primary">
                    <CIcon
                      icon="cilArrowThickLeft"
                      class="text-white iconSize4"
                    />
                    back
                  </button>
                </router-link> -->
              </div>
            </form>
            <!--End Form using bootstrap5-->
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
        <div class="modal-body">Do you want to reset?</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-light"
            @click="resetData"
            data-bs-dismiss="modal"
          >
            Yes
          </button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            No
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
  onUpdated,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  name: 'FormAddUpdate',
  components: {},

  setup(props, context) {
    let store = useStore();
    const route = useRoute();
    const router = useRouter();
    let isReset = ref(false);
    let formData = reactive({
      title: '',
      body: '',
    });
    let viewAdd = ref(true);
    let updateForAdd = ref(false);
    let valid = ref(true);
    onMounted(() => {
      console.log('mountedFirst', route.params);
      if (route.params.id) {
        viewAdd.value = false;
        store.commit('GET_EDIT_VIEW_DATA', route.params);
        let data = readonly(store.getters.getEditViewData);
        formData.title = data.title;
        formData.body = data.body;
      }
    });

    onUpdated(() => {
      if (!route.params.id) {
        if (!updateForAdd.value) {
          viewAdd.value = true;
          updateForAdd.value = true;
          formData.title = '';
          formData.body = '';
        }
      }
    });

    //Handel update and Add Employee details
    function handelDataForm() {
      if (viewAdd.value) {
        let userId = readonly(store.getters.getUserId);
        let data = {
          userId: userId,
          title: formData.title,
          body: formData.body,
        };
        store.dispatch('addNewData', data);
      } else {
        let data = {
          id: route.params.id,
          userId: route.params.userId,
          title: formData.title,
          body: formData.body,
        };
        store.dispatch('updateData', data);
      }
      router.push('/');
    }

    function wantToReset() {
      isReset.value = true;
      console.log(formData);
    }
    //Reset Form Data
    function resetData() {
      if (isReset) {
        formData.title = '';
        formData.body = '';
      }
    }

    return {
      formData,
      handelDataForm,
      resetData,
      updateForAdd,
      wantToReset,
      isReset,
      viewAdd,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconSize4 {
  width: 18px;
}
.bgColor {
  background-color: #a1caff;
}
.bgColorTable {
  background-color: #e8daef;
}
.btnColor {
  background-color: #3a4d8f;
  border: none;
}
.marginTop {
  margin-top: 120px;
}
</style>
