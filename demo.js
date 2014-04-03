var myApp = angular.module('myApp', ['ngMarkdown'])
    .controller('example', function($scope){
        $scope.text = '### 标题1\n\n- list1\n- list2';
    });