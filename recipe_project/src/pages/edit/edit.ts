import { Component } from '@angular/core';
import {
    ActionSheetController,
    AlertController,
    IonicPage,
    NavController,
    NavParams,
    ToastController
} from 'ionic-angular';
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
               public alertCtrl: AlertController,
               public toastCtrl: ToastController) {

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
                        const toast = this.toastCtrl.create({
                            message: 'Please enter a valid value !',
                            duration: 1500,
                            position: 'top'
                        });
                        toast.present();
                        return;
                    }
                    (<FormArray>this.recipeForm.get('ingredients'))
                        .push(new FormControl(data.name, Validators.required))
                    const toast = this.toastCtrl.create({
                        message: 'Ingredient Added !',
                        duration: 1500,
                        position: 'top'
                    });
                    toast.present();
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
                         const toast = this.toastCtrl.create({
                             message: 'All Ingredients removed',
                             duration: 1500,
                             position: 'top'
                         });
                         toast.present();
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
