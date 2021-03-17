import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label:'Accueil',
          icon:'pi pi-fw pi-home',  
          routerLink:'/'
          
      },
      {
          label:'Contacts',
          icon:'pi pi-fw pi-phone',
          routerLink:'/contact'
          
          
      }]   

}
}
