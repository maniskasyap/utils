angular.module('photo-upload', [])
    .controller('uploadCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.uploadPhoto = function() {
        	$scope.uploading = true;
            $http.post('upload').then(function(response) {
                $scope.uploadRes = response;
                $scope.uploading = false;
            });
        };
    }]);
