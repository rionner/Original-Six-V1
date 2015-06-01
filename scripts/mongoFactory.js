// angular.module('generatorMeanstackApp')
//   .factory('mongoFactory', function ($q, $http) {
//     return {
//       getMongoStuff: function () {
//         var deferred = $q.defer(),
//           httpPromise = $http.get('/api/blackhawks');
//
//         httpPromise.success(function (components) {
//           deferred.resolve(components);
//         })
//           .error(function (error) {
//             console.error('Error: ' + error);
//           });
//
//         return deferred.promise;
//       }
//     };
//   });
