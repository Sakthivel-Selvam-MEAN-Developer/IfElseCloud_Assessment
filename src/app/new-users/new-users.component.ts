import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent implements OnInit{
  data: any;
  newUsers: any;
  
  constructor(private service: ServiceService){}

  ngOnInit(){
    setTimeout(() => {
      this.service.getData().subscribe((response) => {
        this.data = response;
        this.newUsers = this.data.new_users;
      });
    }, 100);
  }
}
