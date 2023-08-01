import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { signUp, urlParam, users } from '../app.interface';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false)

  constructor( private http : HttpClient, private router :  Router) { }

  signUpUser(data : signUp) {
    let headers = new HttpHeaders({
      'x-access-token': `${localStorage.getItem('token')}`,
      "role" : `${localStorage.getItem('role')}`
    });

    let requestOptions = { headers: headers };
    return this.http.post('http://localhost:3000/api/users/', data, requestOptions).subscribe((result : any) => {
      console.log(result)
    }) 
  }

  getUsers(){
    let headers = new HttpHeaders({
      'x-access-token': `${localStorage.getItem('token')}`,
      "role" : `${localStorage.getItem('role')}`
    });

    let requestOptions = { headers: headers };
    return this.http.get<users[]>('http://localhost:3000/api/users/',  requestOptions)
  }

  deleteUser(_id: string) {
  let headers = new HttpHeaders({
    'x-access-token': `${localStorage.getItem('token')}`,
    'role' : `${localStorage.getItem('role')}`,
    '_id' : `${localStorage.getItem('_id')}`
  });

  console.warn(`${localStorage.getItem('_id')}`);
  let requestOptions = { headers: headers };
  return this.http.delete(`http://localhost:3000/api/users/${_id}`, requestOptions)
  }

  getUser(_id: string) {
  let headers = new HttpHeaders({
    'x-access-token': `${localStorage.getItem('token')}`,
    "role" : `${localStorage.getItem('role')}`,
    '_id' : `${localStorage.getItem('_id')}`
  });
  let requestOptions = { headers: headers };
  return this.http.get<users>(`http://localhost:3000/api/users/${_id}`, requestOptions)
  }
  
  // updateUser(data: users, _id : string) {
  //   let headers = new HttpHeaders({
  //     'x-access-token': `${localStorage.getItem('token')}`,
  //     "role" : `${localStorage.getItem('role')}`,
  //     '_id' : `${localStorage.getItem('_id')}`
  //   });
  
  //   let requestOptions = { headers: headers };
  //   return this.http.put(`http://localhost:3000/api/users/${_id}`, data, requestOptions)
  // }

  updateUser(users: users) {
    console.warn(users)
    let headers = new HttpHeaders({
      'x-access-token': `${localStorage.getItem('token')}`,
      "role" : `${localStorage.getItem('role')}`,
      '_id' : `${localStorage.getItem('_id')}`
    });
  
    let requestOptions = { headers: headers };
    return this.http.put<users>(`http://localhost:3000/api/users/${users._id}`, users, requestOptions)
  }
  
}


// deleteUser(_id: string) {
  //   let headers = new HttpHeaders({
  //     'x-access-token': `${localStorage.getItem('token')}`,
  //     'role' : `${localStorage.getItem('role')}`,
  //     '_id' : `${localStorage.getItem('_id')}`
  //   })
  //   console.warn(`${localStorage.getItem('_id')}`);
    
  
  //   let requestOptions = {headers : headers}
  //   if(localStorage.getItem("user") ){
  //   let id = `${localStorage.getItem('_id')}`
  //   console.warn(_id)
  //   if(_id == id){
  //    this.http.delete(`http://localhost:3000/api/users/${_id}`, requestOptions)
  //    console.warn("deleted")
  //   }
  //   else {
  //     console.warn('check userid correct or not')
  //   }
  // }
    
  // }