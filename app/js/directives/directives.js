"use strict";

angular.module("eventsApp").directive("mySample",function($compile){
   return{
       restrict:"E",
       scope:{

       },
       template:'<input type="text" ng-model="sampleData"/> {{sampleData}}',
       link:function(scope,el,attrs,controller){
           console.log(scope);
       }
   }
});

angular.module("eventsApp").directive("sessionThumbnail",function(){
    return{
        scope:{
            session:"=data"
        },
        restrict:"E",
        templateUrl:"templates/directives/sessionDetails.html",
        replace:true
    }

});

angular.module("eventsApp").directive("vote",function(){
    return{
        restrict:"E",
        templateUrl:"templates/directives/vote.html",
        scope:{
            vcount:"@",
            mupvote:"&",
            mdownvote:"&"
            //isolate the scope | pass controller methods and vars in as the ATTRIBUTES specified on local scope object
            //set mapped key in directive template and set controller method/var in the directive attrs
        },
        link:function(scope,el,attrs,controller){
            console.log(scope);
        }
    }

});
