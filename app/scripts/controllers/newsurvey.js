'use strict';

angular.module('dmocrtzrApp')
  .controller('NewSurveyCtrl', ['$scope', function ($scope) {
    $scope.sex = "";
    $scope.votingStyle = "";
    $scope.votingPrivacy = "";
    $scope.votingPreSurveyIncluded = "";
    $scope.votingPreSurveyDuration = "";
    $scope.votingSurveyDuration = "";
    $scope.includeExtraQestions = "";

    $scope.questionsTotal = 7;

    $scope.progress = 0;
    $scope.setProgress = function () {
      function calculateProgress (questionNumber){
        $scope.progress = Math.floor((questionNumber/ $scope.questionsTotal)*100);
        return $scope.progress;
      }

      if ($scope.sex !== "") {
        calculateProgress(1);
      }
      if ($scope.votingStyle !== "") {
        calculateProgress(2);
      }
      if ($scope.votingPrivacy !== "") {
        calculateProgress(3);
      }
      if ($scope.votingPreSurveyIncluded !== "") {
        calculateProgress(4);
      }
      if ($scope.votingPreSurveyDuration !== "") {
        calculateProgress(5);
      }
      if ($scope.votingSurveyDuration !== "") {
        calculateProgress(6);
      }
      if ($scope.includeExtraQestions !== "") {
        calculateProgress(7);
      }
    }
  }]);
