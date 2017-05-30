import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { GlobalSharedService } from './../services/global-shared.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class HolyQuranService {
        
    private contextUrl : string = this.globalSharedService.contextUrl;
    private getHolyQuranUrlByTypeEn : string = this.contextUrl + '/quran/asad/en/';  

    constructor(private http: Http, private globalSharedService : GlobalSharedService) { }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    displayHolyQuranByTypeEn(type : string, index : String){                
            return this.http
                .get(this.getHolyQuranUrlByTypeEn+type+'/'+index,
                '',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
                .catch(err => this.handleError(err));
    }
}
