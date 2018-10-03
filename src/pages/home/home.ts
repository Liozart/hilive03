import { Component, OnInit } from '@angular/core';
import {NavController, App} from 'ionic-angular';
import {PromotionsPage} from "../promotions/promotions";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastController } from 'ionic-angular';
import jsSHA from 'jssha';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  newUserToggled : boolean;
  email : string = 'a@b.c';
  password : string = 'root';
  errorMessage : string;
  vardump: any;
  token: string;

  url_createUsr: string = 'http://localhost:3000/createUser';
  url_connectUsr: string = 'http://localhost:3000/connectUser';

  constructor(public navCtrl: NavController, private app: App, private http: HttpClient, public toastCtrl: ToastController)
  {
    //app._setDisableScroll(true);
  }

  ngOnInit() {
    this.newUserToggled = false;
  }

  onSubmitForm() {
    /* Check email validity */
    let trig = this.email,
      regex = new RegExp('[0-9a-zA-Z]*@[0-9a-zA-Z]*.[a-z]*'),
      test = regex.test(trig);
    if (test) {
      /* Hash password */
      let shaObj = new jsSHA("SHA-256", "TEXT");
      shaObj.update(this.password);
      let hashedPwd = shaObj.getHash("HEX");
      /* Connect or create user */
      /* Create */
      if (this.newUserToggled) {
        this.http.post(this.url_createUsr, {}, {
          headers: new HttpHeaders({
            email: this.email,
            password: hashedPwd
          })
        }).subscribe(data => {
          if (JSON.stringify(data).includes("erreur"))
            this.presentToast(JSON.stringify(data));
          else {
            this.token = JSON.stringify(data);
            this.presentToast("Compte crée");
          }
        });
      }
      /* Connect */
      else {
        this.http.post(this.url_connectUsr, {}, {
          headers: new HttpHeaders({
            email: this.email,
            password: hashedPwd
          })
        }).subscribe(data => {
          if (JSON.stringify(data).includes("erreur"))
            this.presentToast(JSON.stringify(data));
          else {
            this.token = JSON.stringify(data);
            this.navCtrl.setRoot(PromotionsPage);
          }
        });
      }
    } else {
      this.presentToast("Email invalide");
    }
  }

  presentToast(msg: string){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
