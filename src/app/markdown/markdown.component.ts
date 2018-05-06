import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as md from '../../assets/editormd/editormd.js';
@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {
  public myEditor: any;
  public obj: any;
  @Input() markdown: string;

  constructor() { }
  ngOnInit() {
    let data = this.markdown;
    this.myEditor = editormd("editormd", {
      markdown: data,
      width: "100%",
      height: 640,
      syncScrolling: "single",
      path: "../../assets/editormd/lib/",
      imageUpload: true,
      imageFormats: ["jpg", "jpeg", "gif", "png", "bmp"],
      imageUploadURL: "api/upload/mdupload?test=dfdf",
      emoji: true,
      taskList: true,
      tex: true,  // 默认不解析
      flowChart: true,  // 默认不解析
      sequenceDiagram: true,  // 默认不解析SS
    });
  }

  /**
   * 将子组件获取的内容传输到父组件
   */
  @Output() onChange = new EventEmitter<any>();
  getData() {
    this.onChange.emit(this.myEditor.getMarkdown());
    console.log(this.myEditor.getHTML());
  }


}
