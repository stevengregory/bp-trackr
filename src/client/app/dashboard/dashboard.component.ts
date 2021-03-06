namespace app.dashboard {
  'use strict';

  const dashboard = {
    templateUrl: 'app/dashboard/dashboard.html',
    controllerAs: 'vm',
    controller: 'DashboardController'
  };

  angular
    .module('app.dashboard')
    .component('dashboard', dashboard);
}