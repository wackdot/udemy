
// Importing from Angular to Typescript
import { Component } from '@angular/core';

// Using the Component in Typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // The array is used for multiple style sheets
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]

})
export class AppComponent {
  name = '';
}
