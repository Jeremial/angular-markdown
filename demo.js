var myApp = angular.module('myApp', ['meMarkdown'])
    .controller('example', function($scope){
        $scope.text = '### 标题1\n标签用法\n\n- list1\n- list2';
    });