import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReimbursementComponent } from './pages/reimbursement/reimbursement.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotificationsComponent } from './menu/notifications/notifications.component';
import { ProfileMenuComponent } from './menu/profile-menu/profile-menu.component';
import { QuickAddComponent } from './menu/quick-add/quick-add.component';
import { SvgComponent } from './shared/svg/svg.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { UserNameComponent } from './shared/user-name/user-name.component';
import { RowMoreOptionComponent } from './menu/row-more-option/row-more-option.component';
import { InfoCardComponent } from './pages/dashboard/info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    ReimbursementComponent,
    NotificationsComponent,
    ProfileMenuComponent,
    QuickAddComponent,
    SvgComponent,
    TitleCasePipe,
    UserNameComponent,
    RowMoreOptionComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
