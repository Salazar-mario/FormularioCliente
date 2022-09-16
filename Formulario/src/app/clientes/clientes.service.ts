import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'

@Injectable()

export class ClientesServices
{
    private API_SERVER= "http//localhost:7255/api/clientes";

    constructor(public http:HttpClient){}

    public getClientes():Observable<any>{
        return this.http.get(this.API_SERVER);
    }
}