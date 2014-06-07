## angular-markdown
a markdown directive for angular, use very fast `marked` to parse markdown.

### Usage
*html*
```html
<!doctype html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="UTF-8">
    <title>angular-markdown demo</title>
</head>
<body ng-controller="example">
    <markdown md="text"></markdown>

    <div markdown>
### h1标题
属性用法

1. list1
2. list2
3. list3
    </div>

    <markdown>
### h2标题
直接markdown文本用法

1. list1
2. list2
3. list3
    </markdown>
    <script src="bower_components/angular/angular.min.js"></script>
    <script src="bower_components/marked/lib/marked.js"></script>
    <script src="angular.markdown.js"></script>
    <script src="demo.js"></script>
</body>
</html>
```

*js*
```js
var myApp = angular.module('myApp', ['meMarkdown'])
    .controller('example', function($scope){
        $scope.text = '### 标题1\n标签用法\n\n- list1\n- list2';
    });
```

### License
MIT