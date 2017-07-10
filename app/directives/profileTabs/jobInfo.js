(function () {
    angular.module('myApp').directive('jobInfo',jobInfo);
    function jobInfo() {
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