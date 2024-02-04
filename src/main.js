const { createApp } = require('vue');
import App from './App.vue';
import router from './usedLibrary/router.js';
import store from './usedLibrary/store.js';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

import { CIcon } from '@coreui/icons-vue';
import {
  cilClipboard,
  cilPeople,
  cilBell,
  cilUser,
  cilColorBorder,
  cilTrash,
  cilMedicalCross,
  cilDelete,
  cilSmilePlus,
  cilLibraryAdd,
  cilPlus,
  cilArrowThickLeft,
  cilFrown,
  cilWatch,
} from '@coreui/icons';

const icons = {
  cilPeople,
  cilClipboard,
  cilBell,
  cilUser,
  cilColorBorder,
  cilTrash,
  cilMedicalCross,
  cilDelete,
  cilSmilePlus,
  cilLibraryAdd,
  cilPlus,
  cilArrowThickLeft,
  cilFrown,
  cilWatch,
};
const app = createApp(App);
app.use(bootstrap);
app.provide('icons', icons);
app.component('CIcon', CIcon);
app.use(router);
app.use(store);
app.mount('#app');
