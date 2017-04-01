export class MusicRouter {
  heading = 'Music Router';
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'music', moduleId: './music', nav: true, title: 'Music'},
      { route: 'originals', name: 'originals', moduleId: './music-child-routes/originals', nav: true, title: 'Original Songs'},
      { route: 'mission', name: 'mission', moduleId: './music-child-routes/mission', nav: true, title: 'Mission Music'},
      { route: 'pub', name: 'pub', moduleId: './music-child-routes/pub', nav: true, title: 'Pub Songs'},
      { route: 'buymusic', name: 'buymusic', moduleId: './music-child-routes/buymusic', nav: true, title: 'Buy Music'}
    ]);
    this.router = router;
  }
}
