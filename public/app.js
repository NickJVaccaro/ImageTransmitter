var app = angular.module('app', []);

app.controller('ctrl', function($scope, $http, $timeout) {
    
    function getImage() {
        $http.get("./getImage")
        .then(function(response) {
            $scope.imageUrl = response.data;
        });

        $timeout(getImage, 1000);
    }

    getImage();
});

app.controller('dmCtrl', function($scope, $http, $timeout){

    function resetHttpState() {
        $scope.httpState = "";
    }

    $scope.setImage = function() {
        $scope.httpState = "Sending...";

        var data = {
            imageUrl: $scope.imageUrl
        };
        
        $http.post("./setImage", data)
        .then(function(response) {
            $scope.httpState = "Success!";
            $timeout(resetHttpState, 3000);
        }, function(error) {
            $scope.httpState = "Failure";
            $timeout(resetHttpState, 3000);
        });
    }
});