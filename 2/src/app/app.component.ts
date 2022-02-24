import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h4>literaly {{title}}</h4>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  // hide = 'display:none;'
  // onFunc(){
  //   if(this.hide == 'display:none;') return this.hide = 'display:block;'
  //   else return this.hide = 'display:none;'
  // }
  isShow = false;
  onFunc(){
    // this.isShow = !this.isShow;
    // if(this.isShow) this.title = 'Hello world';
    // else this.title = '';
    // if(this.title) this.title = '';
    // else this.title = 'Hello world';
    // this.title ? this.title = '' : this.title = 'Hello world';
    this.title = this.title ? '' : 'hello world';
  }
}
