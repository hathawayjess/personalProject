angular.module('starter.services', [])

.service('SettingsSvc', function($http, $q) {

  // this.postCycleData = function(data) {
  //   return $http({
  //     method: 'POST',
  //     url: 'http://localhost:3000/data/',
  //     data: data
  //   }).then(function(response) {
  //     return response.data;
  //   })
  // }

  this.postCycleData = function() {
    var deferred = $q.defer();
    $http.post('http://localhost:3000/data/')
    .then(function(response) {
      console.log(response);
      deferred.resolve(response);
    })
    return deferred.promise;
  }

})

.service('CalendarSvc', function($http) {

  this.getCycleData = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/data/'
    }).then(function(response) {
      return response.data;
    })
  }

})






// .factory('Chats', function() {
//   // Might use a resource here that returns a JSON array
//
//   // Some fake testing data
//   var chats = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     lastText: 'You on your way?',
//     face: 'img/ben.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     lastText: 'Hey, it\'s me',
//     face: 'img/max.png'
//   }, {
//     id: 2,
//     name: 'Adam Bradleyson',
//     lastText: 'I should buy a boat',
//     face: 'img/adam.jpg'
//   }, {
//     id: 3,
//     name: 'Perry Governor',
//     lastText: 'Look at my mukluks!',
//     face: 'img/perry.png'
//   }, {
//     id: 4,
//     name: 'Mike Harrington',
//     lastText: 'This is wicked good ice cream.',
//     face: 'img/mike.png'
//   }];
//
//   return {
//     all: function() {
//       return chats;
//     },
//     remove: function(chat) {
//       chats.splice(chats.indexOf(chat), 1);
//     },
//     get: function(chatId) {
//       for (var i = 0; i < chats.length; i++) {
//         if (chats[i].id === parseInt(chatId)) {
//           return chats[i];
//         }
//       }
//       return null;
//     }
//   };
// });
