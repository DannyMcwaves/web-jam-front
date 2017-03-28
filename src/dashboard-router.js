//import {inject} from 'aurelia-framework';
//import {UserAccess} from './classes/UserAccess.js';

//@inject(UserAccess)
export class DashboardRouter {
  heading = 'Dashboard Router';
  configureRouter(config, router) {
    //config.addPipelineStep('authorize', UserAccess);
    //'authorize' is the name of a pipeline slot-name. 'authorize'  happens before a routing is complete
    config.map([
      { route: '', name: 'dashboard', moduleId: './dashboard', nav: false, title: 'Dashboard', auth: true}
      //{ route: 'volunteer', name: 'volunteer', moduleId: './dashboard-routes/volunteer-dashboard', nav: false, title: 'Volunteer', auth: true},
      //{ route: 'charity', name: 'charity', moduleId: './dashboard-routes/charity-dashboard', nav: false, title: 'Charity', auth: true},
      //{ route: 'developer', name: 'developer', moduleId: './dashboard-routes/developer-dashboard-router', nav: false, title: 'Developer', auth: true}
    ]);
    this.router = router;
  }
}
