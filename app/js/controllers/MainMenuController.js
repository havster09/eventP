"use strict";

eventsApp.controller("MainMenuController",function($scope,$location){
    console.log('absUrl',$location.absUrl());
    console.log('protocol',$location.protocol());
    console.log('port',$location.port());
    console.log('path',$location.path());
    console.log('hash',$location.hash());
    console.log('search',$location.search());
    console.log('url',$location.url());

    $scope.createEvent = function(){
        $location.url('/newevent');
    }
});
