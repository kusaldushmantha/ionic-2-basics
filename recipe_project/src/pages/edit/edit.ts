import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  mode = 'New';
  selectOptions = ['Easy', 'Medium', 'Hard'];

  constructor(public navCtrl: NavController,
               public navParams: NavParams) {

    this.mode = this.navParams.get('mode');
  }



}
