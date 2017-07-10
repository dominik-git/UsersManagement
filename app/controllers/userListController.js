(function () {

    angular.module('myApp').controller('userListController',userListController);
    userListController.inject = ['$scope', 'dataService','$location'];

    function userListController($scope,dataService,$location) {
        $scope.search = "";
        $scope.userService = dataService;
        $scope.userService.setSelectedUser(null);

        $scope.moreInfo = function (person,path) {
            console.log('set user');
            $scope.userService.setSelectedUser(person);
            console.log('go');
            $location.path( path );
        };

    }


}());