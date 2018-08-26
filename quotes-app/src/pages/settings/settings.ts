import { Component } from '@angular/core';
import {NavController, NavParams, Toggle} from 'ionic-angular';
import {SettingsService} from "../../services/settings";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public settingService: SettingsService) {}

  onToggle(toggle: Toggle){
    this.settingService.setBackground(toggle.checked);
  }

  checkAltBackground(){
    return this.settingService.isAltBackGround();
  }

}
