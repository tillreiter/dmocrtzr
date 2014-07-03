'use strict';

angular.module('dmocrtzrApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.router',
  'ui.bootstrap',
  'googlechart'
])
  .config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /
    $urlRouterProvider.otherwise('/app/newSurvey');

    $stateProvider
      .state('app', {
        url: '/app',
        templateUrl: '/views/app_layout.html',
        abstract: true
      })

      .state('app.newSurvey', {
        url: '/newSurvey',
        templateUrl: '/views/newsurvey.html',
        controller: 'NewSurveyCtrl'
      })

      .state('app.preSurvey', {
        url: '/preSurvey',
        templateUrl: '/views/preSurvey.html',
        controller: 'PreSurveyCtrl'
      })

      .state('app.results', {
        url: '/results',
        templateUrl: '/views/results.html',
        controller: 'ResultsCtrl'
      })
  })

  .run(function ($rootScope) {

    $rootScope
      .$on('$stateChangeStart',
      function (event, toState, toParams, fromState, fromParams) {
        console.log("State Change: transition begins!");
      });

    $rootScope
      .$on('$stateChangeSuccess',
      function (event, toState, toParams, fromState, fromParams) {
        console.log("State Change: State change success!");
      });

    $rootScope
      .$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams) {
        console.log("State Change: Error!");
      });

    $rootScope
      .$on('$stateNotFound',
      function (event, toState, toParams, fromState, fromParams) {
        console.log("State Change: State not found!");
      });

    $rootScope
      .$on('$viewContentLoading',
      function (event, viewConfig) {
        console.log("View Load: the view is loaded, and DOM rendered!");
      });
//
//    $rootScope
//      .$on('$viewContentLoaded',
//      function (event, viewConfig) {
//        console.log("View Load: the view is loaded, and DOM rendered!");
//      });

  })

