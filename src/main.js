import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyDz7EXJfkPSHuAtTX7qVpozQdICqzJdc4c",
  authDomain: "mobile-app-1d0d4.firebaseapp.com",
  projectId: "mobile-app-1d0d4",
  storageBucket: "mobile-app-1d0d4.appspot.com",
  messagingSenderId: "535960773774",
  appId: "1:535960773774:web:d1f5acf28a1f48f00e95df",
  measurementId: "G-YKPDFR0Y72"
};


firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
