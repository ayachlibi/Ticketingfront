import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {MenuItem} from 'primeng/api';




@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  value1!:string ;  
  value2!:string ;
  items!: MenuItem[];
  
  

  constructor(private primengconfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengconfig.ripple= true ;
    this.items = [
      {
          label:'Accueil',
          icon:'pi pi-fw pi-home',
          routerLink:'/'
          
      },
      {
          label:'Contact',
          icon:'pi pi-fw pi-phone',
          routerLink:'/contact'
          
      },
      
  ];
    
    

  }



}
