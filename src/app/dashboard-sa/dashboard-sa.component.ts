import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard-sa',
  templateUrl: './dashboard-sa.component.html',
  styleUrls: ['./dashboard-sa.component.scss']
})
export class DashboardSAComponent implements OnInit {
  items!: MenuItem[];
  admin!:MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label:'Accueil',
          icon:'pi pi-fw pi-home',
          routerLink:'/interfaceSA'
          
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
