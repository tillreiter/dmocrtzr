'use strict';

angular.module('dmocrtzrApp')
  .controller('ResultsCtrl', function ($scope, $routeParams) {
    $scope.chartObject = {};

    $scope.onions = [
      {v: "Onions"},
      {v: 3},
    ];

    $scope.chartObject.data = {"cols": [
      {id: "v", label: "Voting", type: "string"},
      {id: "c", label: "count", type: "number"}
    ], "rows": [
      {c: [
        {v: "Yes"},
        {v: 3},
      ]},
      {c: [
        {v: "No"},
        {v: 15}
      ]},
      {c: [
        {v: "Maybe"},
        {v: 1},
      ]}
    ]};


    // $routeParams.chartType == BarChart or PieChart or ColumnChart...
    $scope.chartObject.type = "PieChart";
    $scope.chartObject.options = {
      'title': '"I would hire this applicant":'
    }
  });

