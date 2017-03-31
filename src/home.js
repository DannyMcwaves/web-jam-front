//import {computedFrom} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class Home {
  
  constructor(router) {
    this.router = router;
  }
  
  // attached() {
  //     document.title = this.router.currentInstruction.config.title;
  // }
}
