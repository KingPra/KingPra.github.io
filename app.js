const app = angular.module('MyApp',['ui.router', 'ngMaterial', 'ngAnimate']);

app.config(($stateProvider) => {
  $stateProvider.state({
    name: 'home',
    url: '',
    component: 'home',
  });

  $stateProvider.state({
    name: 'projects',
    url:'/projects',
    component:'projects',
  });
});

app.controller('HomeCtrl', ($scope) => {
  console.log('hello from the other side');
});

app.component('home', {
  templateUrl: 'templates/home.html',
});

app.component('projects', {
  templateUrl: 'templates/projects.html',
});
