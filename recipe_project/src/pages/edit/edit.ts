import { Component } from '@angular/core';
import {ActionSheetController, AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  mode = 'New';
  selectOptions = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public actionSheetCtrl: ActionSheetController,
               public alertCtrl: AlertController) {

    this.mode = this.navParams.get('mode');
    this.initializeForm();
  }

  private initializeForm() {
    this.recipeForm = new FormGroup({
        'title': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required),
        'difficulty': new FormControl(this.selectOptions[1], Validators.required),
        'ingredients': new FormArray([])
    });
  }

  onSubmit() {
      console.log(this.recipeForm);
  }

  private createNewIngredientAlert() {
      return this.alertCtrl.create({
        title: 'Add Ingredient',
        inputs: [
            {
                name: 'name',
                placeholder: 'Name'
            }
        ],
        buttons: [
            {
                text: 'Cancel',
                role: 'cancel'
            },
            {
                text: 'Add',
                handler: data => {
                    if(data.name.trim() == '' || data.name == null){
                        return;
                    }
                    (<FormArray>this.recipeForm.get('ingredients'))
                        .push(new FormControl(data.name, Validators.required))
                }
            }
        ]
      });
  }

  onManageIngredients() {
      const actionSheet = this.actionSheetCtrl.create({
         title: 'What do you want to do?',
         buttons: [
             {
                 text: 'Add Ingredients',
                 handler: () => {
                    this.createNewIngredientAlert().present();
                 }
             },
             {
                 text: 'Remove all Ingredients',
                 role: 'destructive',
                 handler: () => {
                     const formArray: FormArray = <FormArray>this.recipeForm.get('ingredients');
                     const len = formArray.length;
                     if(len > 0){
                         for(let i = len - 1; i >= 0; i--) {
                             formArray.removeAt(i);
                         }
                     }
                 }
             },
             {
                 text: 'Cancel',
                 role: 'cancel'
             }
         ]
      });
      actionSheet.present();
  }

}
