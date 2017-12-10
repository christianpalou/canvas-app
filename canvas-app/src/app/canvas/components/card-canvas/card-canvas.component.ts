import {Component, OnInit, Input} from '@angular/core';
import {CardData} from "./cardData";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-card-canvas',
  templateUrl: './card-canvas.component.html',
  styleUrls: ['./card-canvas.component.scss']
})
export class CardCanvasComponent implements OnInit {

  @Input() data: CardData;

  myForm: FormGroup;

  editMode : boolean = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      text: [this.data.text],
    });
  }

  editText() {
    this.editMode=true;
  }

  onSave() {
    this.editMode=false;
    this.data.text = this.myForm.controls['text'].value
  }

}
