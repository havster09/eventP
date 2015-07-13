"use strict";

eventsApp.controller('EditEventController',function EditEventController($scope){
    $scope.test = 'ola';
    $scope.saveEvent = function(event,newEventForm){
        console.log(newEventForm);
        if(newEventForm.$valid){
            console.log('save');
        }
    };
    $scope.cancelEdit = function(){
        window.location = "newevent.html";
    };
});
