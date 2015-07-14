"use strict";

/*eventsApp.factory("$exceptionHandler",function(){
    return function(exception){
        console.log("exception handled: "+exception.message);
    }
});*/

eventsApp.factory('myCache',function($cacheFactory){
    return $cacheFactory('myCache',{capacity:3});
});

eventsApp.factory('eventDataR', function ($resource, $log, $q) {
    var resource = $resource("1r.json", {id: "@id"});
    return{
        getEvent: function () {
            var deferred = $q.defer();
            resource.get({id: 1},
                function (event) {
                    deferred.resolve(event);
                },
                function (response) {
                    deferred.reject(response);
                });
            return deferred.promise;
        },
        save:function(event){
            var deferred = $q.defer();

            event.id = 999;

            resource.save(event,
                function (response) {
                    deferred.resolve(response);
                },
                function (response) {
                    deferred.reject(response);
                }
            )

            return deferred.promise;
        }
    };
});


eventsApp.factory("eventData",function($http,$q,$log){
    return{
        getEvent:function(){
            var deferred = $q.defer();
            $http({method:"GET",url:"1.json"})
                .success(function(data,status,headers,config){
                    $log.info(data,status,headers,config);
                    deferred.resolve(data)
                })
                .error(function(status){
                    deferred.reject(status);
                });
            return deferred.promise;
        }
    }
});