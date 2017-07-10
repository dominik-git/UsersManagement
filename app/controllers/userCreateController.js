(function () {

    angular.module('myApp').controller('userCreateController',userCreateController);
    userCreateController.inject = ['$scope','dataService','toaster','$location'];

    function userCreateController($scope,dataService) {
        $scope.newUser  = {
            name : $scope.name,
            lastName : $scope.lastName,
            email: $scope.email,
            phone: $scope.phone,
            address: $scope.address,
            city: $scope.city,
            date:$scope.date,
            gender: $scope.gender,
            description: $scope.description
        };
        $scope.isSaving = false;

        $scope.save = function () {
            $scope.isSaving= true;
            console.log('createPage new Contact');
            dataService.createUser($scope.newUser).then(function () {
                console.log('succes');

            },function () {
                console.log('error');
            });
        }

    }


}());