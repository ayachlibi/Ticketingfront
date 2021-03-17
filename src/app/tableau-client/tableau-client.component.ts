import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { CustomerService } from '../service/customer.service';
import { MessageService } from "primeng/api";
import { Customer, Representative } from '../service/customer';

@Component({
  selector: 'app-tableau-client',
  templateUrl: './tableau-client.component.html',
  styleUrls: ['./tableau-client.component.scss'],
  providers: [MessageService]
})
export class TableauClientComponent implements OnInit {
  items!: MenuItem[];
  filter!: MenuItem[];
  customers!: Customer[];
    customer!:Customer;

    representatives!: Representative[];
  
    statuses!: any[];
  
    loading: boolean = true;
  
    activityValues: number[] = [0, 100];

    displayBasic!: boolean;
    
  exportColumns!: any[];


  constructor(private CustomerService: CustomerService,private messageService: MessageService, private confirmationService: ConfirmationService) { }

    

  

  ngOnInit(): void {
    this.items = [
        {
            label:'Home',
            icon:'pi pi-fw pi-home',
            routerLink:'/interfaceC'
            
        },
        {
            label:'Contact',
            icon:'pi pi-fw pi-phone',
            routerLink:'/contact'
        },
        
    ]

  this.filter = [
    {
    label: 'Par Priorité',
    icon:'pi pi-fw pi-ticket',
    items: [
        {
            label: 'Priorité 1',
            icon:'pi pi-fw pi-ticket',
            
        },
        {
            label: 'Priorité 2',
            icon:'pi pi-fw pi-ticket'
        },
        {
            label: 'Priorité 3',
            icon:'pi pi-fw pi-ticket'
        }
    ]
    },
    {
    label: 'Par Etat',
    icon:'pi pi-fw pi-ticket',
    items: [
        {
            label: 'Etat 1',
            icon:'pi pi-fw pi-ticket'
        },
        {
            label: 'Etat 2',
            icon:'pi pi-fw pi-ticket'
        },
        {
            label: 'Etat 3',
            icon:'pi pi-fw pi-ticket'
        },
        {
            label: 'Etat 4',
            icon:'pi pi-fw pi-ticket'
        }
    ]
    },
    {
    label: 'Par Catégorie',
    icon:'pi pi-fw pi-ticket',
    items: [
        {
            label: 'Catégorie 1',
            icon:'pi pi-fw pi-ticket',

        },
        {
            label: 'Catégorie 2',
            icon:'pi pi-fw pi-ticket',
        },
        {
            label: 'Catégorie 3',
            icon:'pi pi-fw pi-ticket',
            
        }
    ]
    },
    
]
this.CustomerService.getCustomersLarge().then(customers => {
    this.customers = customers;
    this.loading = false;

    this.customers.forEach(
      customer => (customer.date = new Date(customer.date!))
    );
  });

  this.representatives = [
    { name: "Amy Elsner", image: "amyelsner.png" },
    { name: "Anna Fali", image: "annafali.png" },
    { name: "Asiya Javayant", image: "asiyajavayant.png" },
    { name: "Bernardo Dominic", image: "bernardodominic.png" },
    { name: "Elwin Sharvill", image: "elwinsharvill.png" },
    { name: "Ioni Bowcher", image: "ionibowcher.png" },
    { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
    { name: "Onyama Limba", image: "onyamalimba.png" },
    { name: "Stephen Shaw", image: "stephenshaw.png" },
    { name: "XuXue Feng", image: "xuxuefeng.png" }
  ];

  this.statuses = [
    { label: "Unqualified", value: "unqualified" },
    { label: "Qualified", value: "qualified" },
    { label: "New", value: "new" },
    { label: "Negotiation", value: "negotiation" },
    { label: "Renewal", value: "renewal" },
    { label: "Proposal", value: "proposal" }
  ];



  }
  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.customers);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "products");
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
    
  }
  showBasicDialog() {
    this.displayBasic = true;
}

}
