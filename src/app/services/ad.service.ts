import {Injectable} from '@angular/core';
import { Ad} from './ad.interface';

@Injectable()
export class AdService{
  ad: Ad[] = [
    {from: 'a231sd', to: 's343ad',  label: 'AD 1'},
    {from: 'a332sd', to: 'sa23d', label: 'Ad 2'},
    {from: 'asder', to: 'sa234d', label: 'Ad 3'},
    {from: 'a123sd', to: 'sad', label: 'Ad 4'},
    {from: '3wasd', to: '343esad',  label: 'Ad 5'},
    {from: 'as23d', to: 'edf', label: 'Ad 6'},
    {from: '23asd', to: '343sad', label: 'Ad 7'},
    {from: '43asd', to: 'rfefsad', label: 'Ad 8'}
  ];
  deleteAd(ad: string):void {
  }
  addAd(ad: string): void {

  }
}
