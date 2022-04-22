import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IShoe } from '../core/interfaces/shoe';
import { environment } from '../../environments/environment';
import { IUser } from '../core/interfaces/user';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  constructor(private http: HttpClient) { }

  addShoe(body: { brand: string, model: string, year: string, img: string, material: string, price: number, description: string, size: string, color: string }): Observable<IShoe> {
    return this.http.post<IShoe>(`${apiUrl}data/catalog/create`, body, { withCredentials: true });
  }

  loadShoeList(): Observable<IShoe[]> {
    return this.http.get<IShoe[]>(`${apiUrl}data/catalog/all`)
  }

  loadShoeById(id: string): Observable<IShoe> {
    return this.http.get<IShoe>(`${apiUrl}data/catalog/detail/${id}`)
  }

  editShoe(id: string, body: { brand: string, model: string, year: string, img: string, material: string, price: number, description: string, size: string, color: string }): Observable<IShoe> {
    return this.http.put<IShoe>(`${apiUrl}data/catalog/edit/${id}`, body, { withCredentials: true });
  }

  deleteShoe(id: string) {
    return this.http.delete(`${apiUrl}data/catalog/delete/${id}`);
  }

  toCart(userId: string, shoeId: string){
    return this.http.post(`${apiUrl}data/catalog/toCart/${shoeId}`, {}, {withCredentials: true});
  }

  removeCart(shoeId: string){
    return this.http.post(`${apiUrl}data/catalog/removeCart/${shoeId}`, {}, {withCredentials: true});
  }

  shoeSearch(searchTerm: string = ''): Observable<IShoe[]> {
    return this.http.get<IShoe[]>(`${apiUrl}data/catalog/search?brand=${searchTerm}`, {
      params: new HttpParams({
        fromObject: {
        }
      })
    })
  }

  getMyshoes(id: string): Observable<IUser>{
    return this.http.get<IUser>(`${apiUrl}data/catalog/profile/${id}`);
  }
}
