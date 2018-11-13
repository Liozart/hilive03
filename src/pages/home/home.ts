import { Component, OnInit } from '@angular/core';
import {NavController, App, MenuController, AlertController, Platform} from 'ionic-angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import jsSHA from 'jssha';
import {GlobalService} from "../../services/GlobalService";
import {DatePicker} from "@ionic-native/date-picker";
import {ShopsPage} from "../shops/shops";
import {FilePath} from "@ionic-native/file-path";
import { File } from '@ionic-native/file';
import {Camera} from "@ionic-native/camera";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  newUserToggled : boolean;
  email : string = 'e@b.c';
  password : string = 'cacacaca';
  errorMessage : string;

  constructor(public navCtrl: NavController,
              private app: App, private http: HttpClient,
              public alertCtrl: AlertController,
              public global: GlobalService,
              public menuCtrl: MenuController,
              private datePicker: DatePicker,
              private file: File, private filePath: FilePath,
              private camera: Camera, public platform: Platform) {
    this.menuCtrl.enable(false, 'mainMenu')
  }

  ngOnInit() {
    this.newUserToggled = false;
  }

  onSubmitForm() {
    /* Check email and password validity */
    let trig = this.email,
      regex = new RegExp('[0-9a-zA-Z]*@[0-9a-zA-Z]*.[a-z]*'),
      testemail = regex.test(trig);
    if (testemail) {
      if (this.password.length > 5) {
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
            if (JSON.stringify(data).includes("1"))
              this.showAlert("Bienvenue !", "Votre compte a bien été crée.", "OK");
            else {
              this.showAlert("Erreur", JSON.stringify(data), "OK");
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
              this.showAlert("Erreur", JSON.stringify(data), "OK");
            else {
              //Get at least the name and the age of the new user
              this.getFirstProfileInfosProcedure();
            }
          });
        }
      } else {
        this.showAlert("Erreur", "Mot de passe trop court", "OK");
      }
    } else {
      this.showAlert("Erreur", "Email invalide", "OK");
    }
  }

  getFirstProfileInfosProcedure() {
    this.showNamePrompt();
  }

  showNamePrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Première connexion',
      message: "Entrez votre nom.",
      inputs: [ {
          name: 'name',
          placeholder: 'Nom'
        }
      ],
      buttons: [ {
          text: 'Suivant',
          handler: data => {
            this.global.profile_name = data.name;
            this.showAgePrompt();
          }
        }
      ]
    });
    prompt.present();
  }

  showAgePrompt() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        this.global.profile_ageDate = date;
        this.showImagePrompt();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  showImagePrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Première connexion',
      message: "Voulez-vous ajouter une image maintenant ?",
      buttons: [
        {
          text: 'Oui',
          handler: data => {
            /* get image */
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Plus tard',
          handler: data => {
            this.navCtrl.setRoot(ShopsPage);
          }
        }
      ]
    });
    prompt.present();
  }

  takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.showAlert('Erreur', "Erreur lors de la sélection de l'image", "OK");
    });
  }

  private createFileName() {
    var newFileName =  "profile_" + this.email + ".jpg";
    return newFileName;
  }

// Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      //  this.lastImage = newFileName;
    }, error => {
      this.showAlert("Erreur", "Erreur lors du stockage de l'image", "OK");
    });
  }

  showAlert(title: string, msg: string, btn: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: [btn]
    });
    alert.present();
  }
}
