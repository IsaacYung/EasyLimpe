//= require angular
//= require angular-material
//= require angular-aria.min
//= require angular-messages.min
//= require angular-route.min
//= require svg-assets-cache

angular.module('EasyLimpeApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('FooterCtrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;

  $scope.googleUrl = 'http://google.com';
});
