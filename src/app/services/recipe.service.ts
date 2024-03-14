import {RecipeListModel} from "../recipe-book/models/recipe-list.model";
import {LogingService} from "./loging.service";
import {Injectable} from "@angular/core";

@Injectable()
export class RecipeService {

  constructor(private logingService:LogingService) {
  }
  recipes: RecipeListModel[] = [
    {name: 'Recipe1', description: 'Some text for description', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg'},
    {name: 'Recipe2', description: 'Some text for Recipe 2', imageUrl: 'something'},
  ];

  getRecipes() {
    return this.recipes
  }

  addRecipe(rName: string) {
    this.recipes.push({name: rName, description: 'Demo desc', imageUrl: 'nothing'})
    this.logingService.logToConsole(JSON.stringify({name: rName, description: 'Demo desc', imageUrl: 'nothing'}))
  }
}
