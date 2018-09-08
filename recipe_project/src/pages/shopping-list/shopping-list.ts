import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "../../services/shopping-list";

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public shoppingListService: ShoppingListService) {
  }

  onAddItem(form: NgForm) {
    this.shoppingListService.addItem(form.value.ingredientName, form.value.amount);
    form.reset();
  }

}
