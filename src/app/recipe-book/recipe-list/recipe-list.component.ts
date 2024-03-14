import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {RecipeListModel} from "../models/recipe-list.model";
import {LogingService} from "../../services/loging.service";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  // providers: [LogingService, RecipeService]
})
export class RecipeListComponent {

 recipes: RecipeListModel[] = []
 constructor(private logingService: LogingService,
             private recipeService: RecipeService) {
   this.recipes = this.recipeService.getRecipes()
 }


}
