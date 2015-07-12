'use strict';

eventsApp.controller('EventsController',
    function EventController($scope){
        $scope.snippet = '<span style="color:red">tester sdfdsfsf</span>';
        $scope.boolValue = false;
        $scope.myStyle = {color:"red"};
        $scope.myClass = "blue";
        $scope.buttonDisabled = true;
        $scope.event = {
            name:"doloribus eius error eveniet bah",
            date:new Date(),
            time:'10pm',
            location:{
                address:'8 madang ave',
                city:'whalan',
                state:'nsw'
            },
            imgUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Milwaukee_Bucks.svg/749px-Milwaukee_Bucks.svg.png',
            sessions:[
                {
                    name:'doloribus eius error eveniet 101',
                    creatorName:'wil martinez',
                    duration:'1 hour',
                    level:'advanced',
                    upVoteCount:0,
                    abstract:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, cumque, iusto. Cumque dolorem doloribus eius error eveniet, exercitationem libero maiores, molestiae mollitia natus nihil placeat recusandae tenetur ullam unde veniam.',
                },
                {
                    name:'doloribus eius error eveniet clean',
                    creatorName:'wil martinez',
                    duration:'1 hour',
                    level:'advanced',
                    upVoteCount:0,
                    abstract:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, cumque, iusto. Cumque dolorem doloribus eius error eveniet, exercitationem libero maiores, molestiae mollitia natus nihil placeat recusandae tenetur ullam unde veniam.'
                },
                {
                    name:'doloribus eius error eveniet alternatives',
                    creatorName:'wil martinez',
                    duration:'1 hour',
                    level:'advanced',
                    upVoteCount:0,
                    abstract:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, cumque, iusto. Cumque dolorem doloribus eius error eveniet, exercitationem libero maiores, molestiae mollitia natus nihil placeat recusandae tenetur ullam unde veniam.'
                },
                {
                    name:'holding it in',
                    creatorName:'wil martinez',
                    duration:'1 hour',
                    level:'advanced',
                    upVoteCount:0,
                    abstract:'doloribus eius error eveniet doloribus eius error eveniet'
                }
            ]
        }
        $scope.voteUpSession = function(session){
            session.upVoteCount++;
        }
        $scope.voteDownSession = function(index){
            if($scope.event.sessions[index].upVoteCount > 0)
                $scope.event.sessions[index].upVoteCount--;
        }
    });



