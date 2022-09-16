import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Tag} from "./tag";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TagService {

    constructor(private http: HttpClient) {
    }

    postTag(data?: Tag): Observable<any> {
        {
            return this.http.post<any>("https://backend.somename.in/tag/", data).pipe(map((res: any) => {
                return res;
            }))
        }
    }
    getTag() {
        return this.http.get<any>("https://backend.somename.in/tag/").pipe(map((res: any) => {
            return res;
        }))
    }
    deleteTag(data:number){
        return this.http.delete<any>("https://backend.somename.in/tag/"+data).pipe(map((res:any)=>{
            return res;
        }))
    }


}
