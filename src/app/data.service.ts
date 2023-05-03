import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urls = 'http://localhost:5000/product/';
  constructor(private http : HttpClient) {  } 

  create(product: any){
    return this.http.post(this.urls + 'create' ,product);
  }

  all(){
    return this.http.get(this.urls + 'all');
  }

  delete(id: any){
    return this.http.delete(this.urls + 'delete/' + id);
  }

  update(id: any){
    return this.http.put(this.urls + 'update/' + id, null);
  }
  updateUser(data: any,id:any){
    return this.http.put("http://localhost:5000/api/updateuser/"+id,data);
  }
}




