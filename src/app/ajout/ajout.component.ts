import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import {MenuItem} from 'primeng/api';



interface categorie {
  
  name: string,
  code: string
}
interface priorite {
  name: string,
  code: string
}
interface type{
  name: string,
  code: string
}
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss'],
  providers: [ConfirmationService]
})


export class AjoutComponent implements OnInit {
  items!: MenuItem[];
  msgs: Message[] = [];
  valueTitre: any ;
  valuemail: any ;
  valueent: any ;
  valuedesc:any;
  
  categories:categorie[];
  priorites:priorite[];
  types!:type[];

    selectedCat!: categorie;
    selectedPrio!: priorite;

    constructor(private primengConfig: PrimeNGConfig,private confirmationService: ConfirmationService) {
        this.categories = [
            {name: 'Category 1', code: 'C1'},
            {name: 'Category 2', code: 'C2'},
            {name: 'Category 3', code: 'C3'},
            {name: 'Category 4', code: 'C4'},
            {name: 'Category 5', code: 'C4'}
        ];
        this.priorites = [
          {name: 'Priority 1', code: 'P1'},
          {name: 'Priority 2', code: 'P2'},
          {name: 'Priority 3', code: 'P3'},
          {name: 'Priority 4', code: 'P4'},
          {name: 'Priority 5', code: 'P4'}
      ];
      this.types = [
        {name: 'Support', code: 'T1'},
        {name: 'Fault', code: 'T2'},
        {name: 'Enhancement', code: 'T3'},
        {name: 'Development', code: 'T4'},
    ];
    }

    
  

  ngOnInit(): void {
    this.primengConfig.ripple= true ;
    this.items = [
      {
          label:'Accueil',
          icon:'pi pi-fw pi-home',  
          routerLink:'/interfaceC'
          
      },
      {
          label:'Contacts',
          icon:'pi pi-fw pi-phone',
          routerLink:'/contact'
          
          
      }]   
    
  }
  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
}
confirm2() {
  this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
      },
      reject: () => {
          this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
  });
}



}
