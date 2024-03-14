import {RecipeListModel} from "../recipe-book/models/recipe-list.model";

export class LogingService {

  logToConsole(toLog:string){
    console.log('This is loged by LogingService:', toLog )
  }

}
