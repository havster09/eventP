"use strict";


angular.module("eventsApp").filter("durations",function(){
    return function(duration){
        switch(duration){
            case 1:
                return "Half hour";
            case 2:
                return "Half Day";
            case 3:
                return "Half Year";
            case 4:
                return "Half Decade";
        }
    }
});