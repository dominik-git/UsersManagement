(function () {
    angular.module('myApp').directive('personalInfo',personalInfo);
    function personalInfo() {
        return{
            restrict:'AE',
            templateUrl:'../html/usersPage/userCard.html',
            scope:{
                user:'=',
                moreInfo:'&'
            }
        }
    }

}());