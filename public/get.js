var app = angular.module('app', []);

app.controller('ctrl', function($scope, $http, $timeout) {
    
    function getImage() {
        $http.get("./getImage")
        .then(function(response) {
            console.log(response);
            $scope.imageUrl = response.data;
        });

        $timeout(getImage, 1000);
    }

    //$timeout(getImage, 1000);
    getImage();
});