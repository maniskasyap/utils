angular.module('photo-upload', [])
    .controller('uploadCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.uploadPhoto = function() {
            $scope.uploading = true;
            $http.post('upload').then(function(response) {
                $scope.uploadRes = response.data;
                $scope.uploading = false;
            });
        };

        $scope.getFile = function(event) {
            $scope.file = event;
        };

        $scope.upload = function(url, formData) {
            var defer = $q.defer();

            $http.post(server + url, formData, {
                headers: { 'Content-Type': undefined }
            }).then(
                function(response) {
                    return defer.resolve(response.data);
                },
                function(err) {
                    return defer.reject(err);
                }
            );

            return defer.promise;
        }
    }]);
