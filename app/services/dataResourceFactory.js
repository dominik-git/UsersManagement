(function () {

    angular.module('myApp').factory('resourceFactory', resourceFactory);
    resourceFactory.inject = ['$http'];

    function resourceFactory($http) {
        var factory = {};

        //SLIDER PHOTO
        factory.getPhotos= function () {
            return $http.get('/resource/getAll');
        };

        factory.updatePhoto= function (photo) {
            return $http.post('/user/update',photo);
        };

        return factory;
    }

}());