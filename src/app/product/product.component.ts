import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  product = {
    reference:'',
    marque:'',
    quantite:'',
    price:'',
    Marque_voiture: '',
    image: ''
  }
  products: any;
  constructor(private _data:DataService){}
  ngOnInit(): void{
    this._data.all().subscribe({
      next:(res)=>{
        this.products=res;
        console.log(res);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  save(){
      this._data.create(this.product).subscribe({
        next: (res)=>{
          this.ngOnInit();
          console.log(res)
        },
        error: (err)=>{
          console.log(err)

        }     
  })
}
delete(id: any){

  this._data.delete(id).subscribe({
    next: (res)=>{
      this.ngOnInit();
      console.log(res)
    },
    error: (err)=>{
      console.log(err)

    }     
})
}

done(id: any){

  this._data.update(id).subscribe({
    next: (res)=>{
      this.ngOnInit();
      console.log(res)
    },
    error: (err)=>{
      console.log(err)

    }     
})
}

}