import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { CustomerService } from '../service/customer.service';
import { MessageService } from "primeng/api";
import { Customer} from '../service/customer';

@Component({
  selector: 'app-interface-sa',
  templateUrl: './interface-sa.component.html',
  styleUrls: ['./interface-sa.component.scss'],
  providers: [MessageService]
})
export class InterfaceSAComponent implements OnInit {
    customers!: Customer[];
    customer!:Customer;

    priority!: any[];
  
    statuses!: any[];
    types!: any[];
  
    loading: boolean = true;
  
    activityValues: number[] = [0, 100];

    displayBasic!: boolean;
    

  items!: MenuItem[];
  filter!: MenuItem[];
  admin!: MenuItem[];
  exportColumns!: any[];


  constructor(private CustomerService: CustomerService,private messageService: MessageService, private confirmationService: ConfirmationService) { }


  ngOnInit(): void {
    this.CustomerService.getCustomersLarge().then(customers => {
        this.customers = customers;
        this.loading = false;
  
        this.customers.forEach(
          customer => (customer.date = new Date(customer.date!))
        );
      });
  
      this.types = [
        {name: 'Support', code: 'T1'},
        {name: 'Fault', code: 'T2'},
        {name: 'Enhancement', code: 'T3'},
        {name: 'Development', code: 'T4'},
    ];
      this.priority = [
        { label: "Urgent", value: "urgent" },
        { label: "High", value: "high" },
        { label: "Meduim", value: "meduim" },
        { label: "Low", value: "low" },
      ];
  
      this.statuses = [
        { label: "New", value: "new" },
        { label: "Open", value: "open" },
        { label: "In progress", value: "progress" },
        { label: "Solved", value: "solved" },
        { label: "Closed", value: "closed" },
      ];
      

    
    this.items = [
      {
          label:'Home',
          icon:'pi pi-fw pi-home',
          routerLink:'/interfaceSA'
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
  exportExcel() {
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
    
  }
  showBasicDialog() {
    this.displayBasic = true;
}
  



}

