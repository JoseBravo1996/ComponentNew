import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more2',
  templateUrl: './read-more2.component.html',
  styleUrls: ['./read-more2.component.css']
})
export class ReadMore2Component implements OnInit {

  @Input() content: string;
  @Input() limit: number;
  @Input() completeWords: boolean;

  isContentToggled: boolean;
  nonEditedContent: string;

  constructor() {

  }

  ngOnInit() {
    this.nonEditedContent = this.content;
    this.content = this.formatContent(this.content);
  }

  toggleContent() {
    this.isContentToggled = !this.isContentToggled;
    this.content = this.isContentToggled ? this.nonEditedContent : this.formatContent(this.content);
  }

  formatContent(content: string) {
      if (this.completeWords) {
        this.limit = content.substr(0, this.limit).lastIndexOf(' ');
      }
      if(content){
        return `${content.substr(0, this.limit)}...`;
      }
      
  }

}
