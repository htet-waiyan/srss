import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';

import { SrssService} from './srss.service';
import { DatasharingService } from './datasharing.service';
import { RisesetComponent } from './riseset/riseset.component';
import { RisesetmainComponent } from './risesetmain/risesetmain.component';
import { LoadingComponent } from './loading/loading.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FooterComponent } from './footer/footer.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    RisesetComponent,
    RisesetmainComponent,
    LoadingComponent,
    ProgressBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    SrssService,
    DatasharingService,
    {provide:'SRSS_API_URL', useValue: 'https://api.sunrise-sunset.org/json'},
    {provide:'GOGL_API_URL', useValue: 'https://maps.googleapis.com/maps/api/place/textsearch/json'},
    {provide:'API_KEY_GOGL', useValue: 'AIzaSyBnt8Ex2BiJZsecUGocSdFV4ocS05052YQ'} //store API Key in front-end is not good idea, move it to back-end
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
