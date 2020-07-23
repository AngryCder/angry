import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any) {
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, JSON.stringify(data));
  }
  get(serviceName: string){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    const url = environment.apiUrl + serviceName;
    return this.http.get(url,{withCredentials: true });
  }
  async test(){
    let response = await this.http.GetAsync("http://www.yahoo.com/");
    response.EnsureSuccessStatusCode();
    let responseUri = response.RequestMessage.RequestUri.ToString();
    Console.Out.WriteLine(responseUri);
  }
}
