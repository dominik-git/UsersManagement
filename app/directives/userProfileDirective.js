(function () {
    angular.module('myApp').directive('profileHeader',profileHeader);
    function profileHeader() {
        return{
            restrict:'AE',
            templateUrl:'./html/profilePage/profileHeaderDirective.html',
            scope:{
                user:'='
            }
        }
    }

}());