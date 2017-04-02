import {AuthorizeStep} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router, AuthorizeStep)
export class AppRouterConfig{
  constructor(router){
    this.router = router;
  }
  configure(config1, router){
    let theAppRouterConfig = function(config){
      config.title = 'Web Jam LLC';
      config.options.pushState = true;
      config.options.root = '/';
      config.addPipelineStep('authorize', AuthorizeStep);//Is the actually Authorization. Prevents users from certain sites when not authorized.
      config.map([
        { route: 'dashboard', name: 'dashboard-router', moduleId: './dashboard-router', nav: false, title: 'Dashboard', auth: true, settings: 'fa fa-tachometer'},
        { route: 'login', name: 'login', moduleId: './login', nav: false, title: 'Login', settings: 'fa fa-sign-in'},
        { route: 'news', name: 'news', moduleId: './news', nav: true, title: 'News', settings: 'fa fa-file-text-o' },
        { route: 'ohaf', name: 'ohaf', moduleId: './ohaf-home', nav: true, title: 'OHAF', settings: 'fa fa-handshake-o' },
          { route: 'sc2rs', name: 'sc2rs', moduleId: './sc2rs-home', nav: true, title: 'SC2RS', settings: 'fa fa-star-o' },
            { route: 'library', name: 'library', moduleId: './library-home', nav: true, title: 'Library', settings: 'fa fa-book' },
        { route: 'music', name: 'music-router', moduleId: './music-router', nav: true, title: 'Music', settings: 'fa fa-music' },
      { route: 'textadventure', name: 'textadventure', moduleId: './textadventure-home', nav: true, title: 'Text Adventure', settings: 'fa fa-shield' },
{ route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: 'Web Jam LLC', settings: 'fa fa-home' }
      ]);
    };

    this.router.configure(theAppRouterConfig);
  }
}
