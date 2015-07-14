'use strict';

eventsApp.controller('EventController',
    function EventController($scope,eventData,eventDataR,$anchorScroll){
        $scope.sortorder = 'name';
        $scope.snippet = '<span style="color:red">tester sdfdsfsf</span>';
        $scope.boolValue = false;
        $scope.myStyle = {color:"red"};
        $scope.myClass = "blue";
        $scope.buttonDisabled = true;

        /*eventData.getEvent()
            .then(function(data){
                $scope.event = data;
                return data;
            },
            function(status){
                console.log(status);
            }
        );*/

        eventDataR.getEvent()
        .then(function(event){
                console.log(event);
                $scope.event = event;
            },
            function(response){
                console.log(response);
            }
        );

        $scope.voteUpSession = function(session){
            session.upVoteCount++;
        }
        $scope.voteDownSession = function(index){
            if($scope.event.sessions[index].upVoteCount > 0)
                $scope.event.sessions[index].upVoteCount--;
        }
        $scope.scrollToSession = function(){
            $anchorScroll()
        }

    });



