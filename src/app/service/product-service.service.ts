import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  serverUrl: string = "http://localhost:3000";
  list$: Subject<Product[]> = new Subject();

  constructor(
    private http: HttpClient
  ) { }

  getAllMovie(): void {
    this.http.get<Product[]>(this.serverUrl + '/movies').subscribe(
      product => this.list$.next(product)
    );
  }

  get(product: Product):Observable<Product> {
    return this.http.get<Product>(`${this.serverUrl}/movies/${product.id}`)
  }

  update(product: Product): void {
    this.http.patch<Product>(`${this.serverUrl}/movies/${product.id}`, product).subscribe(
      () => this.getAllMovie()
    )
  }

  delete(product: Product): void {
    this.http.delete<Product>(`${this.serverUrl}/movies/${product.id}`).subscribe(
      () => this.getAllMovie()
    )
  }

  create(product: Product): void {
    this.http.post<Product>(this.serverUrl, product).subscribe(
      ()=> this.getAllMovie()
    );
  }

}

