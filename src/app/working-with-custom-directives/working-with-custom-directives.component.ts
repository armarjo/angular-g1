import { Component } from '@angular/core';

@Component({
  selector: 'app-working-with-custom-directives',
  templateUrl: './working-with-custom-directives.component.html',
  styleUrls: ['./working-with-custom-directives.component.css']
})
export class WorkingWithCustomDirectivesComponent {
  numbers = [1,2,3,4,5,6,7];
  oddNumbers = [1,3,5,7];
  evenNumbers = [2,4,6];

  onlyOdd = false;
}
