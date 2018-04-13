import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../Services/appareil.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  appareils: any [];
  appareilsSubscription: Subscription;


  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }

  );

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteint() {
    this.appareilService.switchOffAll();
  }

  ngOnInit(): void {
    this.appareilsSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils ;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

}
