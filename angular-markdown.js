angular.module('ngMarkdown', [])
    .directive('markdown', function(){
        return {
            restrict: 'AE',
            replace: true,
            transclude: true,
            require: '?ngModel',
            template: '<div class="angular_markdown" ng-transclude></div>',
            link: function(scope, element, attrs, ngModel){
                if(!ngModel){
                    var html = marked(element.text());
                    element.html(html);
                    return;
                }
                ngModel.$render = function(){
                    var html = marked(ngModel.$viewValue || '');
                    element.html(html);
                    return;
                };
            }
        };
    });