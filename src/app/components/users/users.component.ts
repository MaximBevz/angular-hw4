import { Component, OnInit } from '@angular/core';
import User from "../../models/user";
import {UserService} from "../../services/user.service";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService, private dataTransfer: DataTransferService) {
    this.dataTransfer.store.subscribe(value => this.singleUser = this.users?.filter(user =>  user.id === +value)[0]);
  }

  singleUser: User;
  users: User[];
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
