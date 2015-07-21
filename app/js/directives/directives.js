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

angular.module("eventsApp").directive("mybday",function(){
   return{
       restrict:"A",
       link:function(scope,el,attrs,controller){
           el.on('keydown',function(event){
               console.log(event.keyCode);
               if(event.keyCode == 57){
                   return true;
               }
               else{
                   return false;
               }
           })
       }
   }
});

angular.module("eventsApp").controller("greetingCtrl",function($scope){
    $scope.greetings = ['hello'];
    $scope.sayHello = function(){
        alert($scope.greetings);
    };
    $scope.addGreeting = function(greeting){
        $scope.greetings.push(greeting);
    };
});

angular.module("eventsApp").directive("greeting",function(){
    return{
        restrict:"E",
        replace:true,
        priority:1,
        transclude:true,
        template:'<div><button class="btn btn-success" ng-click="sayHello()">Say Hello</button><div ng-transclude></div></div>',
        controller:function($scope){
            $scope.greetings = ['hello'];
            $scope.sayHello = function(){
                alert($scope.greetings);
            };
            this.addGreeting = function(greeting){ //"this" so function can be shared to other directives
                $scope.greetings.push(greeting);
            };
        }
    }
});

angular.module("eventsApp").directive("tagalog",function(){
    return{
        restrict:"A",
        priority:2,
        //terminal:true,
        require:"^greeting",
        link:function(scope,el,attrs,controller){
            controller.addGreeting('kamusta');
        }
    }
});

angular.module("eventsApp").directive("spanish",function(){
    return{
        restrict:"A",
        priority:1,
        require:"^greeting",
        link:function(scope,el,attrs,controller){
            controller.addGreeting('ola');
        }
    }
});

angular.module("eventsApp").directive("collaspsable",function(){
    return{
        restrict:"E",
        template:'<h1>{{title}}</h1><button class="btn btn-info" ng-click="collapse()">Collaspse</button><div ng-show="visible" ng-transclude></div>', // {{val}} will compile into the val property
        transclude:true,
        scope:{
            title:"@"
        },
        controller:function($scope){
            $scope.visible = true;
            $scope.collapse = function(){
                $scope.visible = !$scope.visible;
            }
        }
    }
});

angular.module("eventsApp").directive("repeatX",function(){
    return{
        restrict:"A",
        compile:function(el,attrs){//better alternative to $compile()(scope) returns a link function
            for(var i = 0; i < Number(attrs.repeatX)-1;i++){
                el.after(el.clone().attr('repeat-x',0));
            }
            return function(scope,el,attrs,controller){
                attrs.$observe('text',function(newValue){
                    if(newValue === "get hot"){
                        el.css('color','red');
                    }
                })
            }
        }
    }
});


/*angular.module("eventsApp").directive("repeatX",function($compile){
    return{
        restrict:"A",
        link:function(scope,el,attrs,controller){
            for(var i = 0; i < Number(attrs.repeatX)-1;i++){
                el.after($compile(el.clone().attr('repeat-x',0))(scope)); //$compile requires scope | $compile(magic)(scope)
            }
        }
    }
});*/

