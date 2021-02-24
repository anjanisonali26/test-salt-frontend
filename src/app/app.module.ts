import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './material/header/header.component';
import { FooterComponent } from './material/footer/footer.component';
import { BreadcrumbComponent } from './material/breadcrumb/breadcrumb.component';
import { ActivitiesComponent } from './material/activities/activities.component';
import { VideosComponent } from './material/videos/videos.component';
import { PeopleComponent } from './material/people/people.component';
import { DocumentsComponent } from './material/documents/documents.component';
import { ChannelsComponent } from './material/channels/channels.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    ActivitiesComponent,
    VideosComponent,
    PeopleComponent,
    DocumentsComponent,
    ChannelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
