import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxImageCompressService } from 'ngx-image-compress';

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
    image: ""
  }
  products: any;
  constructor(private _data:DataService,private imageCompress:NgxImageCompressService){}
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
  
  // getFileUrl(file: File, quality: number): Promise<string> {
  //   return new Promise<string>((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       const base64Image = reader.result as string;
  //       this.imageCompress.compressFile(base64Image, -1, quality, quality).then(
  //         result => {
  //           resolve(result);
  //         },
  //         error => {
  //           reject(error);
  //         }
  //       );
  //     };
  //   });
  // }
  

  // // one file 
  // onFileSelectedd(data: any, quality: number) {
  //   const file: File = data.target.files[0];
  //   this.getFileUrl(file, quality).then(
  //     url => {
  //       this.imagePath=url
  //       console.log(url);
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }





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