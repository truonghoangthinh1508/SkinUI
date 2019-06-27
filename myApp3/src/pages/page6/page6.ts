import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Page1Page } from '../page1/page1';
import { Page4Page } from '../page4/page4';
import { Page5Page } from '../page5/page5';

import { Page7Page } from '../page7/page7';
import { Page8Page } from '../page8/page8';
import { Page9Page } from '../page9/page9';

@Component({
  selector: 'page-page6',
  templateUrl: 'page6.html'
})
export class Page6Page {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToPage1(params){
    if (!params) params = {};
    this.navCtrl.push(Page1Page);
  }goToPage4(params){
    if (!params) params = {};
    this.navCtrl.push(Page4Page);
  }goToPage5(params){
    if (!params) params = {};
    this.navCtrl.push(Page5Page);
  }goToPage6(params){
    if (!params) params = {};
    this.navCtrl.push(Page6Page);
  }goToPage7(params){
    if (!params) params = {};
    this.navCtrl.push(Page7Page);
  }goToPage8(params){
    if (!params) params = {};
    this.navCtrl.push(Page8Page);
  }goToPage9(params){
    if (!params) params = {};
    this.navCtrl.push(Page9Page);
  }
}
