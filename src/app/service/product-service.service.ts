import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  serverUrl: string = "http://localhost:3000"



  constructor(
    private http: HttpClient
  ) { }

  getAllMovie(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.serverUrl + '/movies');
  }

  async homeFeaturedFive() {

    const list = await this.getAllMovie().toPromise();

    const FeaturedFive = list.filter(item => item.featured == true)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
    return FeaturedFive;
  };

  async homeRandomFive() {
    const list = await this.getAllMovie().toPromise();
    const discountFive = list.sort(() => Math.random() - 0.5)
    .slice(0, 5);
    return discountFive;
  };

  async comedyRandomFive() {
    const list = await this.getAllMovie().toPromise();
    const comedyFive = list.filter(item => item.catId == 35 && item.featured == true)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
    return comedyFive;
  };

  async comedyList() {
    const list = await this.getAllMovie().toPromise();
    const comedyList = list.filter(item => item.catId == 35);
    return comedyList;
  }

  async actionRandomFive() {
    const list = await this.getAllMovie().toPromise();
    const actionFive = list.filter(item => item.catId == 28 && item.featured)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
    return actionFive;
  };

  async actionList() {
    const list = await this.getAllMovie().toPromise();
    const actionList = list.filter(item => item.catId == 28);
    return actionList;
  }

  async animationRandomFive() {
    const list = await this.getAllMovie().toPromise();
    const animationFive = list.filter(item => item.catId == 16 && item.featured)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
    return animationFive;
  };

  async animationList() {
    const list = await this.getAllMovie().toPromise();
    const animationList = list.filter(item => item.catId == 16);
    return animationList;
  }

  async adventureRandomFive() {
    const list = await this.getAllMovie().toPromise();
    const adventureFive = list.filter(item => item.catId == 12 && item.featured)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
    return adventureFive;
  }

  async adventureList() {
    const list = await this.getAllMovie().toPromise();
    const adventureList = list.filter(item => item.catId == 12)
    return adventureList;
  }

  async allFilms() {
    const list = await this.getAllMovie().toPromise();
    const allFilm = list.sort((a, b) => a.name.localeCompare(b.name));
    return allFilm;
  }

}

