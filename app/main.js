(function () {

  var myApp = angular.module('myApp',[
      'ngResource',
      'angular-ladda',
      'ngRoute',
      'mgcrea.ngStrap',
      'toaster'

  ]);


    myApp.config(function ($routeProvider,$locationProvider,laddaProvider,$datepickerProvider) {
        $locationProvider.hashPrefix('');
        laddaProvider.setOption({
            style:'expand-right'
        });
        angular.extend($datepickerProvider.defaults,{
            dateFormat:'mm/dd/yyyy',
            autoclose: true
        });

        $routeProvider
            .when('/',{
                templateUrl:'html/homePage/home.html'
            })

            .when('/users',{
                templateUrl:'html/usersPage/listOfUsers.html',
                controller:'userListController'
            })

            .when('/createNewUser',{
                templateUrl:'html/createPage/createUser.html',
                controller:'userCreateController'

            })

            .when('/userInfo',{
                templateUrl:'html/profilePage/userProfile.html',
                controller:'userProfileController'

            })

            .when('/about',{
                templateUrl:'html/about/about.html'
            })
            .otherwise( { redirectTo: '/' } );
    });



}());