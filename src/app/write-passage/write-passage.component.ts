import {Component, OnInit} from '@angular/core';
import {TagService} from '../services/tag.service';

@Component({
  selector: 'app-write-passage',
  templateUrl: './write-passage.component.html',
  styleUrls: ['./write-passage.component.css'],
  providers: [TagService]
})
export class WritePassageComponent implements OnInit {
  dataText: any;
  isShow: boolean = false;
  tags = this.tagService.tag;
  constructor(private tagService: TagService) { }
  getData(value) {
    this.dataText = value;
    console.log(this.dataText);
  }
  ngOnInit() {
  }

}
