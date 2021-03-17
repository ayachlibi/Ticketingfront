import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard-a',
  templateUrl: './dashboard-a.component.html',
  styleUrls: ['./dashboard-a.component.scss']
})
export class DashboardAComponent implements OnInit {
  items!: MenuItem[];
  admin!:MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label:'Accueil',
          icon:'pi pi-fw pi-home',
          routerLink:'/interfaceA'
      },
      {
          label:'Contact',
          icon:'pi pi-fw pi-phone',
          routerLink:'/contact'
          
      },
      
  ]
  this.admin = [
  
    {
       separator:true
    },
    {
       label:'Déconnexion',
       icon:'pi pi-fw pi-sign-out'
    }
  ];
  }

}
