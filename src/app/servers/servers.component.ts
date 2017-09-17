import { Component, OnInit } from '@angular/core';

@Component({
  
  // There are three possible types of selectors used
  // Note: There is a corresponding html tag for each selector
  
  // 1. Css selector
  // Using the Css selector to identify this component
  // selector: 'app-servers',
  
  // 2. Css attribute
  // Using the Css attribute to identify this component 
  // (Angular searches for the app-server attribute)
  // selector: '[app-servers]',

  // 3. Css class
  selector: '.app-servers',

  // Inline template for short html scripts
  template: 
  `  
    <app-server></app-server>
    <app-server></app-server>
  `,

  // Similarly using an inline template for short css scripts
  // is also feasible
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
