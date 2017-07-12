(function () {

  var myApp = angular.module('myApp',[
      'ngResource',
      'angular-ladda',
      'mgcrea.ngStrap',
      'toaster',
      'ui.router'

  ]);
    myApp.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('homePage', {
                url: "/",
                views: {
                    'main': {
                        templateUrl:'html/homePage/home.html'
                    }
                }
            })
            .state('createNewUser', {
            url: "/createNewUser",
            views: {
                'main': {
                    templateUrl:'html/createPage/createUser.html',
                    controller:'userCreateController'
                }
            }
        })
            .state('listOfUsers', {
                url: "/listOfUsers",
                views: {
                    'main': {
                        templateUrl:'html/usersPage/listOfUsers.html',
                        controller:'userListController'
                    }
                }
            })
            .state('userInfo', {
                url: "/userInfo",
                views: {
                    'main': {
                        templateUrl:'html/profilePage/userProfile.html',
                        controller:'userProfileController'
                    }
                }
            })
            .state('about', {
                url: "/about",
                views: {
                    'main': {
                        templateUrl:'html/about/aboutContainer.html',
                        controller:'aboutAuthorController'
                    }
                }
            })
            .state('about.contactMe', {
                url: "/contactMe",
                views: {
                    'second': {
                        templateUrl:'html/about/contactMe.html'
                    }
                }
            })
            .state('about.aboutMe', {
                url: "/aboutMe",
                views: {
                    'second': {
                        templateUrl:'html/about/aboutMe.html'
                    }
                }
            });
    });


    myApp.config(function (laddaProvider,$datepickerProvider) {
        laddaProvider.setOption({
            style:'expand-right'
        });
        angular.extend($datepickerProvider.defaults,{
            dateFormat:'dd/mm/yyyy',
            autoclose: true
        });
    });

}());