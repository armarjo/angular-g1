import {Component, ElementRef, ViewChild} from '@angular/core';
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  // providers: [RecipeService]
})
export class RecipeBookComponent {
  @ViewChild('inputField', {static: true}) inputValue: ElementRef | undefined;

  constructor(private recipeService:RecipeService) {
  }

  addRecipe() {
    console.log('This is from Component:', this.inputValue?.nativeElement.value)
    // this.addNew.emit({name: 'Ikub', surname: 'Info'});
    // this.logingService.logToConsole(this.inputValue?.nativeElement.value)
    this.recipeService.addRecipe(this.inputValue?.nativeElement.value)
  }
}
