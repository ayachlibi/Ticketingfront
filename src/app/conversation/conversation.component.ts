import { Component, OnInit, Output } from '@angular/core';
import {MenuItem,PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  items!: MenuItem[];
  str!:string;
  value10!:string ;


  constructor(private primengConfig: PrimeNGConfig) { }
  
  GetVal(value :string)
    {
       console.warn(value)
       this.str=value
    }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    
    this.items = [
      {
          label:'Accueil',
          icon:'pi pi-fw pi-home',  
          routerLink:'/interfaceA'
          
      },
      {
          label:'Contacts',
          icon:'pi pi-fw pi-phone',
          routerLink:'/contact'
          
          
      }]   

  }

}
