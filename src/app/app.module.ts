import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DxButtonModule, DxTabPanelModule, DxPopupModule, DxTemplateModule, DxMenuModule, DxSelectBoxModule, DxCheckBoxModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TileComponent } from './components/tiles/tiles.component';
import { TabsComponent } from './components/tabs/tabs.component';
//import { Product, Service } from './shared/header/header.service';

import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from "./router.component";
import { HealthinsuranceComponent } from "./routes/healthinsurance/healthinsurance.component";
import { LifeeventsComponent } from "./routes/lifeevents/lifeevents.component";
import { OtherbenefitsComponent } from "./routes/otherbenefits/otherbenefits.component";
import { PagenotfoundComponent } from "./routes/pagenotfound/pagenotfound.component";
import { HomeComponent } from './routes/home/home.component';
import { PrimarynavComponent } from "./shared/primarynav/primarynav.component";
import { FooterComponent } from "./shared/footer/footer.component";

const appRoutes: Routes = [
  { path: "", component: RootComponent,
     children: [
      { 
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: "healthInsurace",
        component: HealthinsuranceComponent,
        data: {
          breadcrumb: "Health & Insurance"
        }
      },
      {
        path: "lifeEvents",
        component: LifeeventsComponent,
        data: {
          breadcrumb: "Life Events"
        }
      },
      {
        path: "otherBenefits",
        component: OtherbenefitsComponent,
        data: {
          breadcrumb: "Other Benefits"
        }
      },
      {
        path: "home",
        component: HomeComponent
        
      },
      {
        path: "**",
        component: PagenotfoundComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    RootComponent,
    AppComponent,
    HomeComponent, HealthinsuranceComponent, LifeeventsComponent, OtherbenefitsComponent, PagenotfoundComponent,
    HeaderComponent, PrimarynavComponent, TileComponent, TabsComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DxPopupModule, DxButtonModule, DxTemplateModule,
    DxMenuModule, DxSelectBoxModule, DxCheckBoxModule,
    DxTabPanelModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
