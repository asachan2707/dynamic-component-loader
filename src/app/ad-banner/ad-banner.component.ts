import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdDirective } from '../ad.directive';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[];

  currentAdIndex = -1;
  interval: any;

  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(private compFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const compFactory = this.compFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainterRef = this.adHost.viewContainerRef;
    viewContainterRef.clear();

    const compRef = viewContainterRef.createComponent(compFactory);
    (compRef.instance as AdComponent).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
