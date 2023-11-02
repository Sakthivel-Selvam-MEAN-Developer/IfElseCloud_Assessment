import { Injectable } from '@angular/core';
import { HttpClient, withJsonpSupport } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  data: any;
  getData = () => {
    return this.http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/');
  }
}
