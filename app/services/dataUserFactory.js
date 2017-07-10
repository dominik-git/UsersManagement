(function () {

    angular.module('myApp').factory('dataFactory',dataFactory);
    dataFactory.inject = ['$http'];

    function dataFactory($http) {
        var factory = {};

        //USERS
        factory.getUsers= function () {
            return $http.get('/user/getAll');
        };

        factory.getUserById= function (id) {
            return $http.get('/user/'+id);
        };

        factory.deleteUser= function (id) {
            return $http.post('/user/deleteUser/'+id);
        };
        factory.createUser= function (user) {
            return $http.post('/user/create',user);
        };
        factory.updateUser= function (user) {
            return $http.post('/user/update',user);
        };


        return factory;
    }

}());