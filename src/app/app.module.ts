import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { ConnexionComponent } from './connexion/connexion.component';
import {InputTextModule} from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import {MessageModule} from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { AjoutComponent } from './ajout/ajout.component';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ContactsComponent } from './contacts/contacts.component';
import { TableauClientComponent } from './tableau-client/tableau-client.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SlideMenuModule} from 'primeng/slidemenu';
import { ConversationComponent } from './conversation/conversation.component';
import { InterfaceAComponent } from './interface-a/interface-a.component';
import { InterfaceSAComponent } from './interface-sa/interface-sa.component';
import { DashboardAComponent } from './dashboard-a/dashboard-a.component';
import { DashboardSAComponent } from './dashboard-sa/dashboard-sa.component';
import { BadgeModule } from 'primeng/badge';
import { FieldsetModule} from 'primeng/fieldset';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import { CustomerService } from './service/customer.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import {InputNumberModule} from 'primeng/inputnumber';
import {RatingModule} from 'primeng/rating';
import { AjoutCComponent } from './ajout-c/ajout-c.component';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { AccountsComponent } from './accounts/accounts.component';









@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AjoutComponent,
    FooterComponent,
    ContactsComponent,
    TableauClientComponent,
    ConversationComponent,
    InterfaceAComponent,
    InterfaceSAComponent,
    DashboardAComponent,
    DashboardSAComponent,
    AjoutCComponent,
    AccountsComponent
  ],
  imports: [
    CalendarModule,
    HttpClientModule,
    FileUploadModule,
    RatingModule,
    BrowserModule,
    ToastModule,
    AppRoutingModule,
    InputNumberModule,
    ButtonModule,
    SliderModule,
    MessageModule,
    ToggleButtonModule,
    InputTextModule,
    DialogModule,
    FormsModule,
    ContextMenuModule,
    MenubarModule,
    BrowserAnimationsModule,
    RippleModule,
    DropdownModule,
    ConfirmDialogModule,
    MessagesModule,
    PanelMenuModule,
    SlideMenuModule,
    BadgeModule,
    MultiSelectModule,
    FieldsetModule,
    ScrollPanelModule,
    TableModule,
    RouterModule.forRoot([
      {path:'', component:ConnexionComponent}
    ])
  ],
  providers: [CustomerService,MessageService, ConfirmationService],
  bootstrap: [AppComponent, ConnexionComponent]
})
export class AppModule {
  
  
 }
