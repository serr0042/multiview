angular.module('starter')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.list', {
      url: '/list1',
      views: {
        'menuContent': {
          templateUrl: 'templates/list1.html',
          controller: 'list1'
        }
      }
    })    
	  .state('app.list2', {
      url: '/list2',
      views: {
        'menuContent': {
          templateUrl: 'templates/list1.html',
          controller: 'list2'
        }
      }
    })
      .state('app.list3', {
      url: '/list3',
      views: {
        'menuContent': {
          templateUrl: 'templates/list1.html',
          controller: 'list3'
        }
      }
    })
  
  	.state('app.settings', {
	  url: '/settings',
	  views: {
		  'menuContent': {
			  templateUrl: 'templates/settings.html',
			  controller: 'settings'
		  }
	  }
  })
  
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/list1');
});