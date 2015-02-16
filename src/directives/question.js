(function() {
    'use strict';

    angular
        .module('app')
        .directive('questionBlock', questionBlock);

    function questionBlock() {
        return {
            replace: true,
            restrict: 'EA',
            templateUrl: '/src/views/partials/player/question-block.html',
        };
    };

})();