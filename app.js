'use strict';

var myApp = angular.module('formApp', [
   'schemaForm',
   'pascalprecht.translate',
   'prodigi.fileupload'
])
.controller('formController', ['$scope', '$q', function ($scope) {

  $scope.schema = {
    "type": "object",
    "title": "Album",
    "properties": {
      "image": {
        "title": "Image",
        "type": "array",
        "format": "singlefile",
        "x-schema-form": {
          "type": "array"
        }
      },
      "images": {
        "title": "Images",
        "type": "array",
        "format": "multifile",
        "x-schema-form": {
          "type": "array"
        }
      }
    },
    "required": [
      "images"
    ]
  };

  $scope.form = [{
    key: "image",
    type: "prdgFileUpload",
    endpoint: "https://angular-file-upload-cors-srv.appspot.com/upload"
  }, {
    key: "images",
    type: "prdgFileUpload",
    endpoint: "https://angular-file-upload-cors-srv.appspot.com/upload"
  }];

  $scope.model = {};

  $scope.submit = function () {
    $scope.$broadcast('schemaFormValidate');
    if ($scope.myForm.$valid) {
      console.log('form valid');
    }
  };

}])
.config(['$translateProvider', function($translateProvider) {
  // Simply register translation table as object hash
  $translateProvider.translations('en', {
    'modules.upload.dndNotSupported': 'Drag n drop not supported by your browser',
    'modules.upload.descriptionMultifile': 'Drag and drop your file(s) here or click to select file(s)',
    'modules.upload.descriptionSinglefile': 'Drag and drop your file here or click to select a file'
  });
  $translateProvider.preferredLanguage('en');

}]);


