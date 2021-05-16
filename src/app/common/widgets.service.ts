import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

export interface Widget {
  id: number,
  name: string,
  price: number
}

@Injectable()
export class WidgetsService {
  // widgets = [
  //   {id: 1, name: 'Widget 01', price: 100},
  //   {id: 2, name: 'Widget 02', price: 200},
  //   {id: 3, name: 'Widget 03', price: 300},
  //   {id: 4, name: 'Widget 04', price: 400}
  // ];

  constructor(private http: HttpClient) {}

  loadWidgets(): Observable<Widget[]> {
    return this.http.get<Widget[]>(BASE_URL);
  }

  saveWidget(widget: Widget) {
    return (widget.id) ? this.updateWidget(widget) : this.createWidget(widget);
  }

  createWidget(widget: Widget) {
    return this.http.post<Widget>(`${BASE_URL}`, JSON.stringify(widget), HEADER);
  }

  updateWidget(widget: Widget) {
    return this.http.put<Widget>(`${BASE_URL}${widget.id}`, widget, HEADER);
  }

  deleteWidget(widget: Widget) {
    return this.http.delete<Widget>(`${BASE_URL}${widget.id}`);
  }
}
