import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent implements OnInit{
  recentProducts: any;
  data : any;

  recentOrderData : any;
  
  constructor(private service: ServiceService) {}

  ngOnInit(){
    setTimeout(() => {
      this.service.getData().subscribe((response) => {
        this.data = response;
        this.recentProducts = this.data.recent_orders;
      });
    }, 100);
  }

  setRecentOrder(index : any){
    this.recentOrderData = this.recentProducts[index];
  }
}
