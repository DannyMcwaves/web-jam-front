import {inject, bindable} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {AppRouterConfig} from './app.router.config';
import {FetchConfig} from 'aurelia-auth';
import {AuthService} from 'aurelia-auth';
import {HttpClient} from 'aurelia-fetch-client';
import {AppState} from './classes/AppState.js';
System.import('isomorphic-fetch');

@inject(Router, FetchConfig, AuthService, AppRouterConfig, HttpClient, AppState)
export class App {
  constructor(router, fetchConfig, auth, appRouterConfig, httpClient, appState){
    this.router = router;
    this.appRouterConfig = appRouterConfig;
    this.fetchConfig = fetchConfig;
    this.auth = auth;
    this.httpClient = httpClient;
    this.appState = appState;
  }
  email='';
  password='';
  authenticated = false;
  token='';
  
  @bindable
  drawerWidth = '175px';
  
  @bindable
  fullmenu = true;
  
  get widescreen(){
    let iswidescreen = false;
    let currentscreenwidth = document.documentElement.clientWidth;
    /* istanbul ignore else */
    if (currentscreenwidth > 766){
      iswidescreen = true;
    }
    return iswidescreen;
  }
  
  togglemenu(){
    if (this.fullmenu) {
      this.fullmenu = false;
      this.drawerWidth = '50px';
    } else {
      this.fullmenu = true;
      this.drawerWidth = '175px';
    }
  }
  
  logout(){
    this.auth.setToken('');
    this.authenticated = false;
    this.auth.logout('/');
  }
  
  // getTokens(){
  //   return this.auth.getTokenPayload();
  // }
  //
  
  activate() {
    this.appRouterConfig.configure();
    this.configHttpClient();
    if (this.auth.isAuthenticated()){
      this.authenticated = true;
      this.appState.setAuth(true);
      this.appState.setRoles(['dashboard']);
    } else {
      this.authenticated = false;
    }
  }
  
  configHttpClient(){
    this.httpClient.configure(httpConfig => {
      httpConfig
      .withDefaults({
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json'
        }
      })
      .withInterceptor(this.auth.tokenInterceptor);
    });
  }
}
