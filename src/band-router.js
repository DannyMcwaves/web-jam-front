export class BandRouter {
  heading = 'Band Router';
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'band', moduleId: './band', nav: true, title: 'Band'},
      { route: 'buymusic', name: 'buymusic', moduleId: './band-child-routes/buymusic', nav: true, title: 'Buy Music'},
      { route: 'missionmusic', name: 'missionmusic', moduleId: './band-child-routes/missionmusic', nav: true, title: 'Mission Music'},
      { route: 'originalsongs', name: 'originalsongs', moduleId: './band-child-routes/originalsongs', nav: true, title: 'Original Songs'},
      { route: 'pubsongs', name: 'pubsongs', moduleId: './band-child-routes/pubsongs', nav: true, title: 'Pub Songs'}
    ]);
    this.router = router;
  }
}
