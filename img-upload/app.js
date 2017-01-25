angular.module('photo-upload', [])
    .directive('ngFiles', ['$parse', function($parse) {

        function fn_link(scope, element, attrs) {
            var onChange = $parse(attrs.ngFiles);
            element.on('change', function(event) {
                onChange(scope, { $files: event.target.files });
            });
        };

        return {
            link: fn_link
        }
    }])
    .controller('uploadCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.uploadPhoto = function() {
            var request = {
                method: 'POST',
                url: 'upload',
                data: formdata,
                headers: {
                    'Content-Type': undefined
                }
            };
            $scope.uploading = true;
            $http(request).success(function(response) {
                    $scope.uploadRes = response;
                    $scope.uploading = false;
                })
                .error(function(err) {
                    alert(error);
                });
        };

        var formdata = new FormData();
        $scope.getTheFiles = function($files) {
            angular.forEach($files, function(value, key) {
                formdata.append(key, value);
            });
        };
    }]);
