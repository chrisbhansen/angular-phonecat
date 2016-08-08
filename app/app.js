'use strict';

// Define the 'phonecatApp' module
var phonecatApp = angular.module('phonecatApp', []);

//Define the 'PhoneListContoller' controller on the 'phonecatApp' module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
    $scope.phones = [
        {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola Xoom with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name: 'Motorola Xoom',
            snippet: 'The Next, Next Generation tablet.'
        }
    ];

});