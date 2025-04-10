import { Component } from '@angular/core';
import { 
  IonContent, 
  IonButton
} from '@ionic/angular/standalone';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton
  ]
})
export class InicioPage {
  imgLoaded: boolean = false;
  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {}

  onimgpirata() {
    this.imgLoaded = true;
  }
  cleanForm() {
    // Limpiar el formulario si es necesario
  } 
  onStart() {
    this.loadingCtrl.create({
      message: 'Ingresando...',
      duration: 1000,
      spinner: 'dots',
      cssClass: 'custom-loading'
    }).then(loading => {
      loading.present();
      setTimeout(() => {
        this.navCtrl.navigateForward('/juego1');
        
      }, 1000);
    });
  }

  onOpciones() {
    this.navCtrl.navigateForward('/opciones');
  }

  onLogout() {
    this.cleanForm();
    this.loadingCtrl.create({
      message: 'Saliendo...',
      duration: 1000,
      spinner: 'dots',
      cssClass: 'custom-loading'
    }).then(loading => {
      loading.present();
      setTimeout(() => {
        this.navCtrl.navigateRoot('/login');
        
      }, 1000);
    });
  }
}
