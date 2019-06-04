import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {

    getAds() {
      return [
        new AdItem(HeroJobAdComponent, {name: 'Goal', bio: 'Find your way towards your goal.'}),
        new AdItem(HeroProfileComponent, {headline: 'Dr. Draco', body: 'Visit for critical sevierty'}),
        new AdItem(HeroJobAdComponent, {name: 'Ajooba', bio: 'By the name you can predict.'}),
        new AdItem(HeroProfileComponent, {headline: 'Dr. Health', body: 'Play hard to keep fit your self'}),
        new AdItem(HeroJobAdComponent, {name: 'Mind', bio: 'Achieve anything.'}),
        new AdItem(HeroProfileComponent, {headline: 'Dr. Apple', body: 'An apple a day, keep your body fit'}),
        new AdItem(HeroJobAdComponent, {name: 'From heart', bio: 'Be your self.'}),
        new AdItem(HeroProfileComponent, {headline: 'Vijay', body: 'Dont waste the food'}),
        new AdItem(HeroJobAdComponent, {name: 'Failure', bio: 'Do not think about it.'}),
        new AdItem(HeroProfileComponent, {headline: 'Ajay', body: 'Keep people safe and happy'}),
      ];
    }
}
