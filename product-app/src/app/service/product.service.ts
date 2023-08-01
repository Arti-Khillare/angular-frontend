import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createProduct } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  addProduct(data : createProduct) {
    let headers = new HttpHeaders({
      'x-access-token': `${localStorage.getItem('token')}`,
      "role" : `${localStorage.getItem('role')}`,
      '_id' : `${localStorage.getItem('_id')}`
    });

    let requestOptions = { headers: headers };
    return this.http.post('http://localhost:3000/api/products/', data, requestOptions).subscribe((result : any) => {
      console.log(result)
    }) 
  }

  getProducts(){
    let headers = new HttpHeaders({
      'x-access-token': `${localStorage.getItem('token')}`,
      "role" : `${localStorage.getItem('role')}`,
      '_id' : `${localStorage.getItem('_id')}`
    });

    let requestOptions = { headers: headers };
    return this.http.get<createProduct[]>('http://localhost:3000/api/products/',  requestOptions)
  }

  getProduct(_id: string) {
    let headers = new HttpHeaders({
      'x-access-token': `${localStorage.getItem('token')}`,
      "role" : `${localStorage.getItem('role')}`,
      '_id' : `${localStorage.getItem('_id')}`
    });
    let requestOptions = { headers: headers };
    return this.http.get<createProduct>(`http://localhost:3000/api/products/${_id}`, requestOptions)
  }

  updateProduct(data: createProduct) {
    let headers = new HttpHeaders({
      'x-access-token': `${localStorage.getItem('token')}`,
      "role" : `${localStorage.getItem('role')}`,
      '_id' : `${localStorage.getItem('_id')}`
    });
  
    let requestOptions = { headers: headers };
    return this.http.put(`http://localhost:3000/api/products/${data._id}`, data, requestOptions)
  }

  deleteProduct(_id: string) {
  let headers = new HttpHeaders({
    'x-access-token': `${localStorage.getItem('token')}`,
    'role' : `${localStorage.getItem('role')}`,
    '_id' : `${localStorage.getItem('_id')}`
  });

  console.warn(`${localStorage.getItem('_id')}`);
  let requestOptions = { headers: headers };
  return this.http.delete(`http://localhost:3000/api/products/${_id}`, requestOptions)
  }
}
