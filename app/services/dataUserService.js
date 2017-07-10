(function () {

    angular.module('myApp').service('dataService',dataService);
    dataService.inject = ['dataFactory','$q','toaster','$location'];

    function dataService(dataFactory,toaster,$location) {

        var loadUsers = function () {
            self.users=[];
            dataFactory.getUsers()
                .then(function (response) {
                    console.log(response +" loadUsers");
                    angular.forEach(response.data, function (person) {
                        console.log(person);
                        self.users.push(person);

                    });
                })
        };
        
        var loadUser = function (person) {
            dataFactory.getUserById(person.id)
                .then(function (response) {
                    console.log(response+" loadUser");
                })
        };
        
        var updateUser = function (person) {
            return dataFactory.updateUser(person)
                .then(function () {
                    console.log("user has been updated");
                    toaster.pop('info', 'User has been updated '+person.name+' '+person.lastName);
                })
        };
        
        var deleteUser = function (person) {
            console.log('delete services called');
            self.isDelete = true;
           return dataFactory.deleteUser(person.id).then(function () {
               self.isDelete = false;
               var index = self.users.indexOf(person);
               self.users.splice(index,1);
               self.selectedPerson = null;
               toaster.pop('info', 'User '+person.name+' '+person.lastName+' has been deleted ');
               $location.path('/users');
                });
        };

        var createUser = function (person) {
            self.isSaving=true;
            return dataFactory.createUser(person).then(function () {
                self.isSaving= false;
                toaster.pop('success', "", 'The User '+person.name+' '+person.lastName+' has been created');
                self.loadUsers();
                $location.path('/users');
            });
        };
        var setSelectedUser = function (person) {
             self.selectedUser = person;
        };
        var getSelectedUser = function () {
           return self.selectedUser;
        };
        


        var self = {
            'loadUsers': loadUsers,
            'loadUser': loadUser,
            'updateUser': updateUser,
            'deleteUser': deleteUser,
            'createUser': createUser,
            'users':[],
            'isSaving':false,
            'selectedUser':null,
            'isDelete':false,
            'setSelectedUser':setSelectedUser,
            'getSelectedUser':getSelectedUser

        };
        self.loadUsers();
        return self;
    }

}());