import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EditPage} from "../edit/edit";

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  constructor(public navCtrl: NavController,
               public navParams: NavParams) {
  }

  onNewRecipe() {
    this.navCtrl.push(EditPage, {mode: 'New'});
  }

}
