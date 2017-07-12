(function () {

    angular.module('myApp').controller('aboutAuthorController',aboutAuthorController);
    aboutAuthorController.inject = ['$scope','$location'];

    function aboutAuthorController($scope,$location) {
        $scope.init = function () {
            $location.path('/about/aboutMe');
        };
        $scope.init();
    }


}());