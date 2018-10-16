// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'SpelaTestAng';
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
       <pm-products></pm-products>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
