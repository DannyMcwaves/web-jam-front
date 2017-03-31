import {News} from '../../src/news';
import {Router} from 'aurelia-router';
import {AppRouterConfig} from '../../src/app.router.config';

class NewsStub extends News {
  attached() {
    this.title = this.router.currentInstruction.config.title;
  }
}


class RouterStub extends Router {
  
  configure(handler) {
    let currentInstruction;
    let title;
    //let config;
    currentInstruction [
      {config: [title, 'howdy']}
    ];
    currentInstruction.config.title = 'howdy';
    handler(this);
  }
  
  getRoute() {
    return this.router.currentInstruction.config.title; //name of the route
  }
  
  map(routes) {
    this.routes = routes;
  }
  
  addPipelineStep(param1, AuthorizeStep) {
    //do nothing
  }
  
  options() {
    //do nothing
  }
}


describe('the News module', () => {
  let news1;
  let mockedRouter;
  let sut;
  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new AppRouterConfig(mockedRouter);
    //sut.router = Router;
    //sut.appRouterConfig = AppRouterConfig;
    //console.log(sut);
    sut.configure();
    //sut.getRoute();
    
    news1 = new NewsStub(mockedRouter);
  });
  
  it('will attach', () => {
    //news1.router.getRoute();
    news1.attached();
    //TODO expect that the title to be 'howdy' from this.router
  });
});
