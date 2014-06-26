'use strict';

angular.module('dmocrtzrApp')
    .controller('NewSurveyCtrl', ['$scope', function ($scope) {
        $scope.sex = "";
        $scope.votingStyle = "";
        $scope.votingPrivacy = "";
        $scope.votingPreSurveyIncluded = "";
        $scope.votingPreSurveyDuration = "";
        $scope.votingSurveyDuration = "";
        $scope.votingQuestions = [];

        $scope.progress = 33;
//        $scope.addProgress = function () {
//            $scope.progress += (100/7)
//        }


        $scope.submitForm = function () {
//        push to server
            console.log('Hi I am here');
            console.log($state.is("app.newSurvey"));
            $state.go("^.preSurvey")
        }

    }]);
