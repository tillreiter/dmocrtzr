'use strict';

angular.module('dmocrtzrApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.router',
    'ui.bootstrap'
 ])
    .config(function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, send to /
        $urlRouterProvider.otherwise('/app/newSurvey')

        $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: '/views/app.html',
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
    })
