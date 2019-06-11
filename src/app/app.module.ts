import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdService } from './ad.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroProfileComponent,
    HeroJobAdComponent,
    AdDirective,
    AdBannerComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AdService],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
