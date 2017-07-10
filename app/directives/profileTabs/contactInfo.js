(function () {
    angular.module('myApp').directive('contactInfo',contactInfo);
    function contactInfo() {
        return{
            restrict:'AE',
            templateUrl:'..\html\profilePage\profileTabs\contactInfo.html',
            scope:{
               /* user:'=',
                moreInfo:'&'*/
               message:'@'
            }
        }
    }

}());