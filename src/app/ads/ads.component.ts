import { Component, OnInit } from '@angular/core';
import {AdService} from '../services/ad.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css'],
  providers: [AdService]
})
export class AdsComponent implements OnInit {
  ads= this.adService.ad;
  constructor(private adService: AdService) { }

  ngOnInit() {
  }

}
