angular.module('meMarkdown', [])
    .directive('markdown', function(){
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                md: '='
            },
            template: '<div class="angular_markdown" ng-transclude></div>',
            link: function(scope, element){
                var mdHTML;
                if(scope.md){
                    scope.$watch('md', function(newValue, oldValue){
                        console.log('md changed')
                        mdHTML = marked(newValue || '');
                        element.html(mdHTML);
                    });
                }else{
                    mdHTML = marked(element.text());
                    element.html(mdHTML);
                }
            }
        };
    });