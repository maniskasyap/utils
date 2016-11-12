angular.module('photo-upload', [])
    .controller('uploadCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.uploadPhoto = function() {
            $http.post('upload').then(function(response) {
            	$scope.uploadRes = response;
            });
        };
    }]);
