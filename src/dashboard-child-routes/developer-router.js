
export class OhafRouter {
  heading = 'OHAF Router';
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'developer', moduleId: './developer', nav: true, title: 'Developer', auth: true},
      { route: 'library', name: 'library', moduleId: './developer-child-routes/library', nav: true, title: 'Library', auth: true},
      { route: 'create-news', name: 'create-news', moduleId: './developer-child-routes/create-news', nav: true, title: 'Create News', auth: true},
      { route: 'node-against-humanity', name: 'node-against-humanity', moduleId: './developer-child-routes/node-against-humanity', nav: true, title: 'Card Game', auth: true}
    ]);
    this.router = router;
  }
}
