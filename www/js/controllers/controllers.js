angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {})

.controller('list1', function ($scope, $localstorage, serveMe) {

	$scope.tasklist = $localstorage.getObject('tasklist1');

	$scope.tasklist = [
		{
			name: "cook dinner",
			completed: false
		},
		{
			name: "buy socks",
			completed: false
		},
		{
			name: "get Todoo",
			completed: true
		}

	]; //this array holds the todoos



	$scope.addTaskBtn = function (taskName) {
		console.log($scope.tasklist);
		serveMe.addTaskBtn('tasklist1', $scope.tasklist, taskName);
		this.taskName = "";
		console.log(JSON.stringify(serveMe.getList('tasklist1')));
		this.tasklist = $localstorage.getObject('tasklist1');

	}

	$scope.deleteTask = function (index) {

		serveMe.deleteTask();
	}

				$scope.completeTask = function (index) {
				serveMe.updateTask('tasklist1', $scope.tasklist);
				//condition 1
				//check from $localstorage if settings1 is true
				//if true vibrate teh phone 
				var vibrate = $localstorage.get('settings1');
				var isComplete = $scope.tasklist[index].completed;

				if (vibrate == true && isComplete == true) {
					navigator.vibrate(3000);
				}
				var allItemsComplete = true;

				$scope.tasklist.forEach(printitem =>  {
					//check each state and keep track of it 
					if (printitem.completed == false) {
						allItemsComplete = false;
						return;
					}
				})

				if (allItemsComplete == true && $localstorage.settings2 == true) {
					cordova.plugins.notification.local.schedule({
						title: "You're Done!",
						message: "All items in your list are complete!",
					})
				};

				//condition 2
				//go through $scope.taskList if all the items are completed
				//and $localstorage.settings2 is checked
				//then local notify
				var printitem = function (item) {
					console.log(JSON.stringify(item));
				}

			}



})

.controller('list2', function ($scope, $localstorage, serveMe) {
	$scope.tasklist = $localstorage.getObject('tasklist2');

	$scope.tasklist = [
		{
			name: "cook dinner2",
			completed: false
		},
		{
			name: "buy socks2",
			completed: false
		},
		{
			name: "get Todoo2",
			completed: true
		}

	]; //this array holds the todoos



	$scope.addTaskBtn = function (taskName) {
		console.log($scope.tasklist);
		serveMe.addTaskBtn('tasklist2', $scope.tasklist, taskName);
		this.taskName = "";
		console.log(JSON.stringify(serveMe.getList('tasklist2')));
		this.tasklist = $localstorage.getObject('tasklist2');

	}

	$scope.deleteTask = function (index) {
		serveMe.deleteTask();
	}

				$scope.completeTask = function (index) {
				serveMe.updateTask('tasklist2', $scope.tasklist);
				//condition 1
				//check from $localstorage if settings1 is true
				//if true vibrate teh phone 
				var vibrate = $localstorage.get('settings1');
				var isComplete = $scope.tasklist[index].completed;

				if (vibrate == true && isComplete == true) {
					navigator.vibrate(3000);
				}
				var allItemsComplete = true;

				$scope.tasklist.forEach(printitem =>  {
					//check each state and keep track of it 
					if (printitem.completed == false) {
						allItemsComplete = false;
						return;
					}
				})

				if (allItemsComplete == true && $localstorage.settings2 == true) {
					cordova.plugins.notification.local.schedule({
						title: "You're Done!",
						message: "All items in your list are complete!",
					})
				};

				//condition 2
				//go through $scope.taskList if all the items are completed
				//and $localstorage.settings2 is checked
				//then local notify
				var printitem = function (item) {
					console.log(JSON.stringify(item));
				}

			}

})


.controller('list3', function ($scope, $localstorage, serveMe) {
			$scope.tasklist = $localstorage.getObject('tasklist3');

			$scope.tasklist = [
		{
			name: "cook dinner3",
			completed: false
		},
		{
			name: "buy socks3",
			completed: false
		},
		{
			name: "get Todoo3",
			completed: true
		}

	]; //this array holds the todoos


			$scope.addTaskBtn = function (taskName) {
				console.log($scope.tasklist);
				serveMe.addTaskBtn('tasklist3', $scope.tasklist, taskName);
				this.taskName = "";
				console.log(JSON.stringify(serveMe.getList('tasklist3')));
				this.tasklist = $localstorage.getObject('tasklist3');

			}

			$scope.deleteTask = function (index) {
				serveMe.deleteTask();
			}

			$scope.completeTask = function (index) {
				serveMe.updateTask('tasklist3', $scope.tasklist);
				//condition 1
				//check from $localstorage if settings1 is true
				//if true vibrate teh phone 
				var vibrate = $localstorage.get('settings1');
				var isComplete = $scope.tasklist[index].completed;

				if (vibrate == true && isComplete == true) {
					navigator.vibrate(3000);
				}
				var allItemsComplete = true;

				$scope.tasklist.forEach(printitem =>  {
					//check each state and keep track of it 
					if (printitem.completed == false) {
						allItemsComplete = false;
						return;
					}
				})

				if (allItemsComplete == true && $localstorage.settings2 == true) {
					cordova.plugins.notification.local.schedule({
						title: "You're Done!",
						message: "All items in your list are complete!",
					})
				};

				//condition 2
				//go through $scope.taskList if all the items are completed
				//and $localstorage.settings2 is checked
				//then local notify
				var printitem = function (item) {
					console.log(JSON.stringify(item));
				}

			}

})


		.controller('settings', function ($scope, $localstorage) {
			$scope.vibrate = true;
			$scope.notify = false;

			$scope.toggle2 = function (name, state) {
				if (name == 1) {
					$localstorage.set('settings1', state)
				}
				if (name == 2) {
					$localstorage.set('settings2', state)
				}
			}


		})