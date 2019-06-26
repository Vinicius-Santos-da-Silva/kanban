var firebaseConfig = {
  apiKey: "AIzaSyCJIBcDggeg5pAy7ummuGklL3sollJOycs",
  authDomain: "dashboard-kanban.firebaseapp.com",
  databaseURL: "https://dashboard-kanban.firebaseio.com",
  projectId: "dashboard-kanban",
  storageBucket: "dashboard-kanban.appspot.com",
  messagingSenderId: "429316283039",
  appId: "1:429316283039:web:e22e263dceddfb84"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();