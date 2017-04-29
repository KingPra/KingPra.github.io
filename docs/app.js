(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
