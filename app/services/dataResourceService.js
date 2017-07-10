(function () {

    angular.module('myApp').service('resourceService',resourceService);
    resourceService.inject = ['resourceFactory'];

    function resourceService(resourceFactory) {

        function loadPhoto() {
            return resourceFactory.getPhotos();
        }

        function updatePhoto() {

            return resourceFactory.updatePhoto();
        }
    }

    var resourceObject = {
       'loadPhoto':loadPhoto,
        'updatePhoto':updatePhoto
    };

    return resourceObject;



}());