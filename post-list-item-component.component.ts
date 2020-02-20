import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.sass']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  addLoveIts(){
    this.loveIts++;
  }

  subLoveIts(){
    this.loveIts--;
  }

  isLoveItsPos(){
    if(this.loveIts > 0)
      return true;
  }

  isLoveItsNeg(){
    if(this.loveIts < 0)
      return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
