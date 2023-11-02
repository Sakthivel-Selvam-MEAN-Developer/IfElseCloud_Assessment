import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-top-data-cards',
  templateUrl: './top-data-cards.component.html',
  styleUrls: ['./top-data-cards.component.scss']
})
export class TopDataCardsComponent implements OnInit{
  topCards: any;
  data : any;
  
  constructor(private service: ServiceService) {}

  ngOnInit(){
    setTimeout(() => {
      this.service.getData().subscribe((response) => {
        this.data = response;
        this.topCards = this.data.top_cards;
      });
    }, 100);
  }
}
