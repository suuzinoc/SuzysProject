namespace SuzysProject {

    angular.module('SuzysProject', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('myHome', {
                url: '/',
                templateUrl: '/ngApp/views/myHome.html',
                controller: SuzysProject.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('blog', {
                url: '/blog',
                templateUrl: '/ngApp/views/blog.html',
                controller: SuzysProject.Controllers.JournalController,
                controllerAs: 'controller'
            })
            .state('secret', {
                url: '/secret',
                templateUrl: '/ngApp/views/secret.html',
                controller: SuzysProject.Controllers.SecretController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: SuzysProject.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: SuzysProject.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .state('externalRegister', {
                url: '/externalRegister',
                templateUrl: '/ngApp/views/externalRegister.html',
                controller: SuzysProject.Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            }) 
            .state('addJournal', {
                url: '/addJournal',
                templateUrl: '/ngApp/views/addJournal.html',
                controller: SuzysProject.Controllers.BlogController,
                controllerAs: 'controller'
            })
            .state('editEntry', {
                url: '/editEntry/:id',
                templateUrl: '/ngApp/views/editEntry.html',
                controller: SuzysProject.Controllers.EditRemoveJournalController,
                controllerAs: 'controller'
            })
            .state('deleteEntry', {
                url: '/deleteEntry/:id',
                templateUrl: '/ngApp/views/deleteEntry.html',
                controller: SuzysProject.Controllers.EditRemoveJournalController,
                controllerAs: 'controller'
            })
            .state('suzy', {
                url: '/suzy',
                templateUrl: '/ngApp/views/suzy.html',
                controller: SuzysProject.Controllers.JournalController,
                controllerAs: 'controller'
            })
            .state('search', {
                url: '/suzy',
                templateUrl: '/ngApp/views/searchEntry.html',
                controller: SuzysProject.Controllers.JournalController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    
    angular.module('SuzysProject').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );

    angular.module('SuzysProject').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

    

}
