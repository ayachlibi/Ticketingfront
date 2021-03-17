import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {AjoutComponent} from './ajout/ajout.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TableauClientComponent } from './tableau-client/tableau-client.component';
import { ConversationComponent } from './conversation/conversation.component';
import { InterfaceAComponent } from './interface-a/interface-a.component';
import { InterfaceSAComponent } from './interface-sa/interface-sa.component';
import { DashboardAComponent } from './dashboard-a/dashboard-a.component';
import { DashboardSAComponent } from './dashboard-sa/dashboard-sa.component';
import { AjoutCComponent } from './ajout-c/ajout-c.component';
import { AccountsComponent } from './accounts/accounts.component';








const routes: Routes = [
  {path:'', component:ConnexionComponent},
  {path:'ajout', component:AjoutComponent},
  {path:'footer', component:FooterComponent},
  {path:'contact', component:ContactsComponent},
  {path: 'interfaceC', component:TableauClientComponent },
  {path: 'interfaceA', component:InterfaceAComponent },
  {path: 'interfaceSA', component:InterfaceSAComponent },
  {path: 'dashboardA', component:DashboardAComponent },
  {path: 'dashboardSA', component:DashboardSAComponent },
  {path: 'conversation', component:ConversationComponent },
  {path: 'ajoutC', component:AjoutCComponent  },
  {path: 'accounts', component:AccountsComponent  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
