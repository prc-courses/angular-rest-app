import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/items/';
const HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

export interface Item {
  id: number;
  name: string;
  description: string;
};

@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) {}

  loadItems() {
    return this.http.get<Item[]>(BASE_URL).toPromise();
  }

  saveItem(item: Item) {
    return (item.id) ? this.updateItem(item) : this.createItem(item);
  }

  createItem(item: Item) {
    return this.http.post<Item>(`${BASE_URL}`, JSON.stringify(item), HEADER).toPromise();
  }

  updateItem(item: Item) {
    return this.http.put<Item>(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER).toPromise();
  }

  deleteItem(item: Item) {
    return this.http.delete<Item>(`${BASE_URL}${item.id}`).toPromise();
  }
}
