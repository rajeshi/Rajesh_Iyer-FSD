$scope.create = function() {
            var article = new Articles({
                title: this.title,
                content: this.content,
                ///
                lon: this.lon,
                lat: this.lat
                ///
            });
            article.$save(function(response) {
                $location.path('articles/' + response._id);
                $scope.title = '';
                $scope.content = '';
                ///
                $scope.lon = 0;
                $scope.lat = 0;
                ///
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };