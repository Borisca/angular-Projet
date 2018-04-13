import { Component,Input, OnInit } from '@angular/core';
import {AppareilService} from '../Services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input()appareilStatus: string;
  @Input()indexOfAppareil: number;
  @Input()id: number;
  constructor(private appareilService:AppareilService) { }

  ngOnInit() {
  }
  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus=='allume')
      return 'green';
    else
      return 'red';
  }
  switchOff(){
    this.appareilService.switchOff(this.indexOfAppareil);
  }
  switchOn(){
    this.appareilService.switchOn(this.indexOfAppareil);
  }

}
