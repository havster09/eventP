'use strict';

var eventsApp = angular.module('eventsApp',['ngSanitize','ngResource','ngCookies','ngRoute'])
    .config(function($routeProvider,$locationProvider){
        $routeProvider
            .when("/",
            {
                templateUrl:"templates/eventdetails.html",
                controller:"EventController"
            })
            .when('/newevent',
            {
                templateUrl:"templates/newevent.html",
                controller:"EditEventController"
            })
            .when("/eventdetails",
            {
                templateUrl:"templates/eventdetails.html",
                controller:"EventController"
            })
            .when("/session/:sessionId/:sessionDuration",
            {
                foo:"bar",
                templateUrl:"templates/session.html",
                controller:"SessionController"
            })
            .otherwise({
                //redirectTo:"/"
                template:"<h1>u are lost!</h1>"
            });

        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/
    });