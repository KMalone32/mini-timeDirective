angular.module("app").directive("showTime", function () {
    return {
        restrict: 'E',
        template: '<div>The Current Time Is {{time}}</div>',
        link: function (scope, element, attrs) {
            var currentTime = new Date();
            scope.time = currentTime.toString();
        }
    }
});