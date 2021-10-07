import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private http: HttpClient) {}
  async getRndJoke(): Promise<any> {
    return await this.http
    .get('https://api.chucknorris.io/jokes/random')
    .toPromise();
  }
  async getCategories(): Promise<any> {
    return await this.http
    .get('https://api.chucknorris.io/jokes/categories')
    .toPromise();
  }
  async getCatJoke(category: string): Promise<any> {
    return await this.http
    .get('https://api.chucknorris.io/jokes/random?category=')
    .toPromise();
  }

}


