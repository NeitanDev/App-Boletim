var $$ = Dom7;
var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      name: 'mencoes',
      path: '/pages/mencoes/',
      url: 'pages/mencoes.html',
      on: {
        pageInit: function (about) {
          CarregaMencoes();
        },
      },
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');