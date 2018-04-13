import {forEach} from '@angular/router/src/utils/collection';
import {Subject} from 'rxjs/Subject';

export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private  appareils = [
    {
      id: 1,
      name: 'Machine a laver',
      status: 'allume'
    },
    {
      id: 2,
      name: 'Television',
      status: 'Eteint'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'allume'
    }
  ];

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }
  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  switchOnAll() {
    this.appareils.forEach(function(value) {
      value.status = 'allume';
    });

    this.emitAppareilSubject();

    }
  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'Eteint';
    }
    this.emitAppareilSubject();
  }
  switchOn(index: number) {
    this.appareils[index].status = 'allume';
    this.emitAppareilSubject();
  }
  switchOff(index: number) {
    this.appareils[index].status = 'Eteint';
    this.emitAppareilSubject();
  }
  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();

  }
}

