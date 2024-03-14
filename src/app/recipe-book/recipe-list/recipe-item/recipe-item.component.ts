import {AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnDestroy, OnInit} from '@angular/core';
import {RecipeListModel} from "../../models/recipe-list.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy{
 @Input('recipeData2') recipeData !: RecipeListModel;

  ngOnInit(): void {
    // console.log('OnInit executed');
  }

  ngDoCheck(): void {
    // console.log(this.recipeData)
    // console.log('MY DoCheck executed');
  }

  ngAfterViewChecked(): void {
    // console.log('AfterViewChecked executed');
  }

  ngAfterViewInit(): void {
  }
  ngOnDestroy(): void {
    // console.log('OnDestroy executed');
  }
}
