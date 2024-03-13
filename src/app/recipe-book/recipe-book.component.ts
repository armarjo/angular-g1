import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent {
  dataToShow: {name:string, surname:string} = {name: '', surname: ''};
  onAddNewClicked(data: {name:string, surname:string}) {
    this.dataToShow = data;
  }
}
