(function () {

    angular.module('myApp').controller('userProfileController',userProfileController);
    userProfileController.inject = ['$scope','dataService','$modal'];

    function userProfileController($scope,dataService,$modal) {

        $scope.selectedUser = dataService.getSelectedUser();
        $scope.tabs = [
            {
                name: 'Contact Info',
                id:1,
                url: './html/profilePage/profileTabs/contactInfo.html',
                active: true,
                editTemplate:{
                    name: 'edit contact',
                    url: './html/profilePage/profileTabs/editProfile/editContact.html',
                    active:false
                }
            },
            {
                name: 'Personal Info',
                id:2,
                url: './html/profilePage/profileTabs/personalInfo.html',
                active: false,
                editTemplate:{
                    name: 'edit contact',
                    url: './html/profilePage/profileTabs/editProfile/editPersonal.html',
                    active:false
                }
            },
            {
                name: 'Job Info',
                id:3,
                url: './html/profilePage/profileTabs/jobInfo.html',
                active: false,
                editTemplate:{
                    name: 'edit contact',
                    url: './html/profilePage/profileTabs/editProfile/editJob.html',
                    active:false
                }
            }
        ];
        
       // $scope.active = false;
        $scope.selectedTab = $scope.tabs[0];
        $scope.currentTab = $scope.selectedTab.url; /*default tab*/
        $scope.current = $scope.selectedTab.name; /*default active tab*/
        $scope.currentEditForm = $scope.selectedTab.editTemplate.url;/*current edit form*/

        $scope.toggleTab = function(tab){
            $scope.currentTab = tab.url;  /*tab changed*/
            $scope.current = tab.name; /* changing value of current*/
            $scope.currentEditForm = tab.editTemplate.url;
            $scope.selectedTab = tab;
        };

        $scope.deleteUser = function () {
            console.log($scope.selectedUser.id);
          dataService.deleteUser( $scope.selectedUser).then(function () {
              console.log('succes');
              $scope.createModal.hide();
          },function () {
              console.log('error');
              });
        };

        $scope.closeModal = function () {
           $scope.createModal.hide();
        };

        $scope.update = function () {
            console.log($scope.selectedUser);
            dataService.updateUser($scope.selectedUser).then(function () {
                $scope.createModal.hide();
                $scope.toggleEdit();
                //$scope.editForm.$setPristine()
            });

        };
        $scope.toggleEdit = function () {
            $scope.selectedTab.editTemplate.active = !$scope.selectedTab.editTemplate.active;
        };

      $scope.showModal = function () {
          $scope.createModal = $modal({
              scope:$scope,
              template: './html/others/confirmDialog.html',
              show: true
          });
          console.log("popup");

      };

        $scope.showEditModal = function () {
            $scope.createModal = $modal({
                scope:$scope,
                template: './html/others/confirmDialogEdit.html',
                show: true
            });
            console.log("popup");

        };



    }
}());