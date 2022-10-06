import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIurl="http://localhost:50214/api/formdetails";

  constructor(private http: HttpClient) { }

  
  getList(): Observable <any[]>{
    
    return this.http.get<any>(this.APIurl);
  }
   
  addlist(val:any){

    return this.http.post(this.APIurl,val);
    
  }

}
