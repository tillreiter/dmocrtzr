'use strict';

angular.module('dmocrtzrApp')
  .controller('NewSurveyCtrl', ['$scope', '$state', function ($scope, $state) {

    $scope.submitNewSurvey = function () {
      $state.go('app.preSurvey');
    };

    $scope.lastName = "";
    $scope.sex = "";
    $scope.votingStyle = "";
    $scope.votingPrivacy = "";
    $scope.votingPreSurveyIncluded = "";
    $scope.votingPreSurveyDuration = "";
    $scope.votingSurveyDuration = "";
    $scope.includeExtraQestions = "";

    $scope.questionsTotal = 8;
    $scope.currentQuestion = 1;

    $scope.progress = 0;
    $scope.setProgress = function (questionNumber) {
      if (questionNumber === $scope.currentQuestion) {
        $scope.progress = Math.floor((questionNumber / $scope.questionsTotal) * 100);
        $scope.currentQuestion += 1;
        return $scope.progress;
      }
    }
  }]);
