import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import User from "../../models/user";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-form-selector',
  templateUrl: './form-selector.component.html',
  styleUrls: ['./form-selector.component.css']
})
export class FormSelectorComponent implements OnInit {

  @Input() users: User[];
  myFormSelector: FormGroup = new FormGroup({
    id: new FormControl('1')
  });

  constructor(private dataTransfer: DataTransferService) { }

  ngOnInit(): void {

  }

  changeUser(id: string) {
    this.dataTransfer.store.next(id);
  }

}
