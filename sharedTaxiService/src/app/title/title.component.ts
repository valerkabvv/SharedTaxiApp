import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  ChangeFlag = false;
  ShowFlag = false;
    constructor() { }

  ngOnInit() {
  }

  onChange() {
      this.ChangeFlag = !this.ChangeFlag;
  }
  onClick() {
      this.ShowFlag = !this.ShowFlag;
      this.ChangeFlag = false;
  }
}
