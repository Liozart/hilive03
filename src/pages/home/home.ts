import { Component, OnInit } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AuthService } from '../../services/AuthService';
import { NavParams } from 'ionic-angular';
import {PromotionsPage} from "../promotions/promotions";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  newUserToggled : boolean;
  email : string;
  password : string;
  errorMessage : string;

  constructor(public navCtrl: NavController,  private authService: AuthService, private app: App)
  {
    //app._setDisableScroll(true);
  }

  ngOnInit() {
    this.newUserToggled = false;
    /*this.authForm = new FormGroup({
      email: new FormControl(['', [Validators.required, Validators.email]]),
      password: new FormControl(['', Validators.required])
    });*/
  }

  onSubmitForm() {
    /*const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;*/
    if (this.newUserToggled) {
      this.authService.signUpUser(this.email, this.password).then(
        () => {
          this.navCtrl.setRoot(PromotionsPage);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    } else {
      this.authService.createUser(this.email, this.password).then(
        () => {
          this.navCtrl.setRoot(PromotionsPage);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }

  changeForPromotions(){
    this.navCtrl.setRoot(PromotionsPage);
  }
}
