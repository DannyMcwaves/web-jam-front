
export class OhafRouter {
  heading = 'OHAF Router';
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'ohaf', moduleId: './ohaf', nav: false, title: 'OHAF', auth: true},
      { route: 'charity', name: 'charity', moduleId: './ohaf-child-routes/charity', nav: true, title: 'Charity', auth: true},
      { route: 'volunteer', name: 'volunteer', moduleId: './ohaf-child-routes/volunteer', nav: false, title: 'Volunteer', auth: true}
      //{ route: 'developer-router', name: 'developer-router', moduleId: './dashboard-child-routes/developer-router', nav: false, title: 'Developer Router', auth: true}
    ]);
    this.router = router;
  }
}
