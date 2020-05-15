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
      path: '/mencoes/',
      url: 'mencoes.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');