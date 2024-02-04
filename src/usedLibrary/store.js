import { createStore } from 'vuex';

export default createStore({
  state: {
    getData: [],
    userId: 0,
    editViewData: {},
  },

  getters: {
    getData(state) {
      return state.getData;
    },

    getDataLength(state) {
      return state.getData.length;
    },

    getEditViewData(state) {
      return state.editViewData;
    },

    getUserId(state) {
      let id = state.getData[state.getData.length - 1].userId + 1;
      return id;
    },
  },

  actions: {
    //Call GET API
    getAllData({ commit }, userId) {
      fetch('https://run.mocky.io/v3/f591732f-f673-4c57-89c0-f9f27c3857d0')
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          commit('GET_ALL_DATA', json);
        });
    },

    //Call POST API
    addNewData({ commit }, postData) {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          commit('ADD_DATA', json);
          console.log(json);
        });
    },

    //Call DELETE API
    deleteData({ commit }, id) {
      fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'DELETE',
      }).then((json) => {
        console.log(json);
        commit('Delete_Data', id);
      });
    },

    //Call PUT API
    updateData({ commit }, data) {
      console.log('update vi', data);
      fetch('https://jsonplaceholder.typicode.com/posts/' + data.id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          commit('UPDATE_DATA', data);
          console.log('json', json);
        });
    },
  },

  mutations: {
    GET_ALL_DATA(state, data) {
      state.getData = data;
    },

    Delete_Data(state, data) {
      state.getData.map((obj, index) => {
        if (obj.id == data) state.getData.splice(index, 1);
      });
    },

    UPDATE_DATA(state, data) {
      console.log(data);
      state.getData.map((obj) => {
        if (obj.id == data.id) {
          obj.title = data.title;
          obj.body = data.body;
        }
      });
    },

    ADD_DATA(state, data) {
      state.getData.unshift(data);
    },

    GET_EDIT_VIEW_DATA(state, data) {
      state.editViewData = state.getData.find(
        (obj) => obj.id == data.id && obj.userId == data.userId
      );
      // console.log(state.editViewData, data);
    },
  },
});
