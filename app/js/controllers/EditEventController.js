"use strict";

angular.module("eventsApp").controller('EditEventController',function EditEventController($scope,eventDataR,myCache,$compile,$parse,$locale,$timeout,$filter,$cookieStore,$location){
    $scope.cevent = {id:1,name:"juwon howard"};

    $scope.saveEventCookie = function(cevent){
        $cookieStore.put('cevent',cevent);
    }

    $scope.getEventCookie = function(cevent){
        $cookieStore.get('cevent');
    }

    $scope.getEventCookie = function(cevent){
        console.log($cookieStore.get('cevent'));
    }

    $scope.removeEventCookie = function(){
        $cookieStore.remove('cevent');
    }

    $scope.data = {};
    var durations = $filter('durations');
    $scope.data.duration1 = durations(1);
    $scope.data.duration2 = durations(2);
    $scope.data.duration3 = durations(3);
    $scope.data.duration4 = durations(4);


    var delayThree = $timeout(function(){
        $scope.sname = "Weaponizer"
    },3000);

    $scope.cancelT = function(){
        $timeout.cancel(delayThree);
    }

    $scope.test = 'ola';
    $scope.saveEvent = function(event,newEventForm){
        console.log(newEventForm);
        if(newEventForm.$valid){
            console.log('run save');
            eventDataR.save(event);
        }
    };
    $scope.cancelEdit = function(){
        window.location = "newevent.html";
    };
    $scope.addToCache = function(key,value){
        myCache.put(key,value);
    };
    $scope.readFromCache = function(key){
        return myCache.get(key);
    };
    $scope.getCacheStats = function(){
        return myCache.info();
    }
    $scope.markup = '';

    $scope.appendDivToElement = function(){
        return $compile($scope.markup)($scope).appendTo(angular.element("#appendHere"));
    }

    $scope.myDate = Date.now();
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
});

