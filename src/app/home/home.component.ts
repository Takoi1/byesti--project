import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products: any;
  listproducts:any;
  constructor(private _data:DataService){}
ngOnInit(): void {
  this._data.all().subscribe(
    res =>{
      this.products = res;
    },
    err =>{
      console.log(err);
    }
  );
}

}
