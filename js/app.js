var app = angular.module('app', ['firebase']);

app.service('contactService', function($firebaseArray){
    var ref = new Firebase("https://mwtravel.firebaseio.com/messages");
    return $firebaseArray(ref);
});

app.controller('contactCtrl', function($scope, contactService){
	$scope.messages = contactService;
	$scope.submitForm = function(msg){
		console.log('sending message ',  msg)
		$scope.messages.$add(msg);
		$scope.contactForm = '';
		// toaster.pop('success', "Thank You, " + msg.name + "!", "Your message has been sent");
		};
});
