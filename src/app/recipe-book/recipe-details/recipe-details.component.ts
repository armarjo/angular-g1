import {AfterContentChecked, AfterContentInit, Component} from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements AfterContentInit, AfterContentChecked{
  ngAfterContentChecked(): void {
    // console.log('After Content Checked')
  }

  ngAfterContentInit(): void {
    // console.log('After Content Init')
  }

}
