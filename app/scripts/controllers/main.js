'use strict';

angular.module('clastatApp')
  .controller('MainCtrl', function ($scope, angularFire) {
    $scope.cohortObj ={ 

      cohortArr: [{name: "Ron", smart: false}, {name: "Kevin", smart: false}, {name: "Evan", smart: false}, {name: "Jarrett", smart: false}, {name: "Jason", smart: false},
      {name: "Adam", smart: false}, {name: "Houston", smart: false}, {name: "Edwin", smart: false}, {name: "Gustavo", smart: false}, {name: "Chris T", smart: false}, {name: 
       "Chris S", smart: false}, {name: "Shane", smart: false}, {name: "Anastasiya", smart: false}, {name: "Julie", smart: false}, {name: "Randy", smart: false}, {name: 
      "Sylvia", smart: false}, {name: "Daniel", smart: false}, {name: "Meredith", smart: false}, {name: "Anne", smart: false}, {name: "Conor", smart: false}, {name: "Marc", smart: false}, {name: 
       "Nick", smart: false}, {name: "Patrick", smart: false}, {name: "Will", smart: false}]
     }
    var cohort = new Firebase("https://clastat.firebaseio.com");
    angularFire(cohort, $scope, "cohortObj");

    $scope.switchGrn = function(x) {
        $scope.cohortObj.cohortArr[x].smart=true
    }

    $scope.switchRed = function(x) {
      $scope.cohortObj.cohortArr[x].smart=false
    }









  });
