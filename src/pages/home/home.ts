import { Component, OnInit } from '@angular/core';
import {NavController, App} from 'ionic-angular';
import {SalesPage} from "../sales/sales";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastController } from 'ionic-angular';
import jsSHA from 'jssha';
import {GlobalService} from "../../services/GlobalService";


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

  constructor(public navCtrl: NavController,
              private app: App, private http: HttpClient,
              public toastCtrl: ToastController,
              public global: GlobalService)
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
        this.http.post(this.global.url_createUser, {}, {
          headers: new HttpHeaders({
            email: this.email,
            password: hashedPwd
          })
        }).subscribe(data => {
          if (JSON.stringify(data).includes("erreur"))
            this.presentToast(JSON.stringify(data));
          else {
            this.presentToast("Compte crée");
          }
        });
      }
      /* Connect */
      else {
        this.http.post(this.global.url_connectUser, {}, {
          headers: new HttpHeaders({
            email: this.email,
            password: hashedPwd
          })
        }).subscribe(data => {
          if (JSON.stringify(data).includes("erreur"))
            this.presentToast(JSON.stringify(data));
          else {
            this.global.token = JSON.stringify(data);
            this.global.isLogged = true;
            this.navCtrl.setRoot(SalesPage);
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
