
const Counter = require('assertions-counter');
import {App} from '../../src/app';
import {AppState} from '../../src/classes/AppState.js';

class AuthStub {
  setToken(token) {
    this.token = token;
  }
  logout(data) {
    const response = 'user logged out';
    return new Promise((resolve)=>{
      resolve({json: ()=>response});
    });
  }
  getMe() {
    const response = 'This is user data';
    return new Promise((resolve)=>{
      resolve({json: ()=>response});
    });
  }
  getTokenPayload() {
    const response = this.token;
    return new Promise((resolve)=>{
      resolve({json: ()=>response});
    });
  }
  isAuthenticated() {
    this.authenticated = true;
    return this.authenticated;
  }
}

// class AuthStub2 {
//   setToken(token) {
//     this.token = token;
//   }
//   logout(data) {
//     //Logout
//     const response = 'user logged out';
//     return new Promise((resolve)=>{
//       resolve({json: ()=>response});
//     });
//   }
//   getMe() {
//     const response = 'This is user data';
//     return new Promise((resolve)=>{
//       resolve({json: ()=>response});
//     });
//   }
//   getTokenPayload() {
//     const response = this.token;
//     return new Promise((resolve)=>{
//       resolve({json: ()=>response});
//     });
//   }
//   isAuthenticated() {
//     this.authenticated = false;
//     return this.authenticated;
//   }
// }

class RouterStub {
  configure() {
  }
}

class HttpStub {
  configure(fn) {
    this.__configureCallback = fn;
    return this.__configureReturns;
  }
  fetch(fn) {
    this.__fetchCallback = fn;
    return Promise.resolve(this.__fetchResolves);
  }
}

describe('the App module', () => {
  let app1;
  //let app2;
  beforeEach(() => {
    app1 = new App(null, null, new AuthStub, new RouterStub, new HttpStub, new AppState);
    app1.auth.setToken('No token');
    //app2 = new App(null, null, new AuthStub2(), new RouterStub(), new HttpStub());
  });
  // it('should set user id as undefined from getUser function when not authenticated', ()=> {
  //   app2.getUser();
  //   expect(app2.uid).toBe(undefined);
  // });

  it('tests configHttpClient', (done) => {
    const { add: ok } = new Counter(2, done);
    app1.auth.tokenInterceptor = 'tokenInterceptor';
    app1.configHttpClient();
    app1.httpClient.__configureCallback(new(class {
      withDefaults(opts) {
        expect(opts.mode).toBe('cors');
        ok();
        return this;
      }
      withInterceptor(token) {
        expect(token).toBe(app1.auth.tokenInterceptor);
        ok();
        return this;
      }
    })());
  });

  it('tests logout', () => {
    //console.log(app1);
    app1.activate();
    app1.logout();
    expect(app1.authenticated).toBe(false);
  });
});
