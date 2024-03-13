import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {RecipeListModel} from "../models/recipe-list.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
 @Output() addNew = new EventEmitter<{name: string, surname:string}>();
 @ViewChild('inputField', {static: true}) inputValue: ElementRef | undefined;

  recipes: RecipeListModel[] = [
    {name: 'Recipe1', description: 'Some text for description', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg'},
    {name: 'Recipe2', description: 'Some text for Recipe 2', imageUrl: 'something'},
  ];

  addRecipe() {
    console.log(this.inputValue?.nativeElement)
    this.addNew.emit({name: 'Ikub', surname: 'Info'});
  }
  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
