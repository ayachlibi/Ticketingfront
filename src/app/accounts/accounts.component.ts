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

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  
  checked1: boolean = false;
  checked2: boolean = false;
  items!: MenuItem[];
  admin!: MenuItem[];
  msgs: Message[] = [];

  categories!:categorie[];
  priorites!:priorite[];
  selectedCat!: categorie;
    selectedPrio!: priorite;

  constructor(private primengConfig: PrimeNGConfig,private confirmationService: ConfirmationService) {
    this.categories = [
      {name: 'Categorie 1', code: 'C1'},
      {name: 'Categorie 2', code: 'C2'},
      {name: 'Categorie 3', code: 'C3'},
      {name: 'Categorie 4', code: 'C4'},
      {name: 'Categorie 5', code: 'C4'}
  ];
  this.priorites = [
    {name: 'Priorité 1', code: 'P1'},
    {name: 'Priorité 2', code: 'P2'},
    {name: 'Priorité 3', code: 'P3'},
    {name: 'Priorité 4', code: 'P4'},
    {name: 'Priorité 5', code: 'P4'}
];
}
  

  ngOnInit(): void {
    this.primengConfig.ripple= true ;
    this.items = [
      {
          label:'Accueil',
          icon:'pi pi-fw pi-home',  
          routerLink:'/interfaceSA'
          
      },
      {
          label:'Contacts',
          icon:'pi pi-fw pi-phone',
          routerLink:'/contact'
          
          
      }]
      this.admin = [
  
        {
           separator:true
        },
        {
          label:'Manage Accounts',
          icon:'pi pi-fw pi-sign-out',
          routerLink:'/accounts'
       },
        {
           label:'Logout',
           icon:'pi pi-fw pi-sign-out'
        },
        
      ];
      
    
  }
  /*exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.customers);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "customers");
    });
}

saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
    
  }*/
  
  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Please wait for validation'}];
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
confirm3() {
  this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.msgs = [{severity:'info', summary:'Confirmed', detail:'Please wait for validation'}];
      },
      reject: () => {
          this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
  });
}
confirm4() {
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

toggle(){
  if(this.checked1==true){
      this.checked2=false;
  } 
  
}

toggle2(){
  
  if (this.checked2){
    this.checked1=false;
  }

}


}
