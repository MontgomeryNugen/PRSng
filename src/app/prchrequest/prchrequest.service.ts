import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Prchrequest } from './prchrequest.class';
import { JsonResponse } from '../util/json-response.class';

const url = 'http://localhost:8080/PurchaseRequests/'

@Injectable({
  providedIn: 'root'
})
export class PrchrequestService {
  list(): Observable<JsonResponse> {
    return this.http.get(url + 'List') as Observable<JsonResponse>;
  }

  get(id): Observable<JsonResponse> {
    return this.http.get(url + 'Get/' + id) as Observable<JsonResponse>;
  }

  add(prchrequest: Prchrequest): Observable<JsonResponse> {
    return this.http.post(url + 'Add', prchrequest) as Observable<JsonResponse>;
  }

  change(prchrequest: Prchrequest): Observable<JsonResponse> {
    return this.http.post(url + 'Change', prchrequest) as Observable<JsonResponse>;
  }

  remove(prchrequest: Prchrequest): Observable<JsonResponse> {
    return this.http.post(url + 'Remove', prchrequest) as Observable<JsonResponse>; 
  }

  constructor(private http: HttpClient) { }
}
