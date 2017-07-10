(function () {
  angular.module('myApp').directive('userCard',userCard);
  function userCard() {
      return{
          restrict:'AE',
          templateUrl:'./html/usersPage/userCard.html',
          scope:{
              user:'=',
              moreInfo:'&'
          }
      }
  }

}());