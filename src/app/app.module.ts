import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component';
import { HeaderComponent } from './header/header.component';
import { WorkingWithCustomDirectivesComponent } from './working-with-custom-directives/working-with-custom-directives.component';
import {BasicHighlightDirective} from "./directives/basic-highlight.directive";
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import {FormsModule} from "@angular/forms";
import {WorkingWithCustomPipesComponent} from "./working-with-custom-pipes/working-with-custom-pipes.component";
import {ShortenPipe} from "./pipes/shorten.pipe";
import {FilterPipe} from "./pipes/filter.pipe";
import {LogingService} from "./services/loging.service";
import {RecipeService} from "./services/recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    RecipeBookComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    HeaderComponent,
    WorkingWithCustomDirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ShortenPipe,
    FilterPipe,
    WorkingWithCustomPipesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogingService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
