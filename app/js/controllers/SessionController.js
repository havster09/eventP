eventsApp.controller("SessionController",function($scope,eventDataR,$routeParams,$route){

    $scope.params = $routeParams;

    $scope.reload = function(){
        $route.reload();
    }

    console.log($route.current.foo);
    console.log($route.current.params.fu);


    eventDataR.getEvent()
        .then(function(event){
            console.log(event);
            $scope.event = event;
            return event;
        },
        function(response){
            console.log(response);
        })
        .then(function(){
            $scope.sessionArr = $scope.event.sessions;

            for(var i = 0; i < $scope.sessionArr.length; i++){
                if($scope.sessionArr[i].id == $routeParams.sessionId){
                    $scope.sessionSelected = $scope.sessionArr[i];
                    break;
                }
            }
        });
});
