var myApp= angular.module("myApplication",[])
                   .controller("filtercontroller",function($scope){
                     var listdata=[
                {name:"Prashant",gender:"male" ,salary:"20000",city:"Pune"},
                         {name:"Madhav",gender:"Male" ,salary:"20000",city:"Pune"},
                         {name:"Sampat",gender:"Male" ,salary:"12000",city:"Wifal"},
                         {name:"Rakesh",gender:"Male" ,salary:"15000",city:"Kolhapur"},
                         {name:"Kirti",gender:"Female" ,salary:"25000",city:"Nagpur"},
                         {name:"Kajal",gender:"Female" ,salary:"30000",city:"Mumbai"},
            ];
                      
                       $scope.employees=listdata;
                     
    });
                     