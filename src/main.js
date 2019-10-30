import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import "./assets/css/style.css";

import * as firebase from "firebase/app";
import "firebase/firestore";
import * as VueGoogleMaps from "vue2-google-maps";

require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBGgh3wf2Se2jdSXA8vjc-u39v7RiwpgVI",
  authDomain: "smart-tanod.firebaseapp.com",
  databaseURL: "https://smart-tanod.firebaseio.com",
  projectId: "smart-tanod",
  storageBucket: "smart-tanod.appspot.com",
  messagingSenderId: "297914828740",
  appId: "1:297914828740:web:6752bfcd03082ca88b8691",
  measurementId: "G-4T27MXYSGW"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB2y4s80KbQU868pCaNnHeQ7EPXaCvBxuw",
    libraries: "places" // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  }

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
});
Vue.use(ViewUI);

// The routing configuration
Vue.config.productionTip = false;

Vue.prototype.$eventBus = new Vue();
export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";
// import store from "./store";
// Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
