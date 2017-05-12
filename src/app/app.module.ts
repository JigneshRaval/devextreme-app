import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DxButtonModule, DxTabPanelModule, DxPopupModule, DxTemplateModule, DxMenuModule, DxSelectBoxModule, DxCheckBoxModule, DxDataGridModule } from 'devextreme-angular';
import { DxChartModule, DxPieChartModule, DxAccordionModule, DxSchedulerModule, DxLoadPanelModule } from 'devextreme-angular';

// Shared Components
//===========================================
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PrimarynavComponent } from "./shared/primarynav/primarynav.component";
import { FooterComponent } from "./shared/footer/footer.component";

// DevExpress UI Components
//===========================================
import { TileComponent } from './components/tiles/tiles.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DataGridComponent } from './components/datagrid/datagrid.component';
import { ChartComponent } from "./components/chart/chart.component";
import { AhAccordionComponent } from "./components/accordion/accordion.component";
import { SchedulerComponent } from "./components/scheduler/scheduler.component";
import { LoadPanelComponent } from "./components/load-panel/load-panel.component";

// Routes or Pages
//===========================================
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from "./router.component";
import { HealthinsuranceComponent } from "./routes/healthinsurance/healthinsurance.component";
import { LifeeventsComponent } from "./routes/lifeevents/lifeevents.component";
import { OtherbenefitsComponent } from "./routes/otherbenefits/otherbenefits.component";
import { PagenotfoundComponent } from "./routes/pagenotfound/pagenotfound.component";
import { HomeComponent } from './routes/home/home.component';
import { ResourcesComponent } from './routes/resources/resources.component';
import { OthersComponent } from './routes/others/others.component';

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
        path: "resources",
        component: ResourcesComponent,
        data: {
          breadcrumb: "Resources"
        }
      },
      {
        path: "others",
        component: OthersComponent,
        data: {
          breadcrumb: "Others"
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
    HomeComponent, HealthinsuranceComponent, LifeeventsComponent, OtherbenefitsComponent, PagenotfoundComponent, ResourcesComponent, OthersComponent,
    HeaderComponent, PrimarynavComponent, TileComponent, TabsComponent, FooterComponent, DataGridComponent, ChartComponent, AhAccordionComponent,
    LoadPanelComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DxPopupModule, DxButtonModule, DxTemplateModule,
    DxMenuModule, DxSelectBoxModule, DxCheckBoxModule, DxDataGridModule,
    DxTabPanelModule, DxChartModule, DxPieChartModule, DxAccordionModule, DxSchedulerModule, DxLoadPanelModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
