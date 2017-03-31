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
        { route: 'login', name: 'login', moduleId: './login', nav: false, title: 'Login', settings: 'fa fa-sign-in'},
        { route: 'news', name: 'news', moduleId: './news', nav: true, title: 'News', settings: 'fa fa-file-text-o' },
        { route: 'dashboard', name: 'dashboard-router', moduleId: './dashboard-router', nav: false, title: 'Dashboard', auth: true, settings: 'fa fa-tachometer'},
        { route: 'band', name: 'band-router', moduleId: './band-router', nav: true, title: 'Music', settings: 'fa fa-music' },
        // { route: 'bookshelf', name: 'bookshelf', moduleId: './bookshelf', nav: true, title: 'Bookshelf'},
        // { route: 'login', name: 'login', moduleId: './login', nav: false, title: 'Login'},
        // { route: 'dashboard', name: 'dashboard-router', moduleId: './dashboard-router', nav: false, title: 'Dashboard', auth: true}
{ route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: 'Web Jam LLC', settings: 'fa fa-home' }
      ]);
    };

    this.router.configure(theAppRouterConfig);
  }
}
