import {Component, Inject, OnInit} from '@angular/core';
import {NavRoute} from '../services/routes.interface';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-func-tab',
  templateUrl: './func-tab.component.html',
  styleUrls: ['./func-tab.component.css']
})
export class FuncTabComponent implements OnInit {

  constructor(
    @Inject('NavLinks') private navLinks: NavRoute[],
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  isActive(i): boolean {
    return `${this.navLinks[i].path}` === this.location.path();
  }
  ngOnInit() {
  }

}
