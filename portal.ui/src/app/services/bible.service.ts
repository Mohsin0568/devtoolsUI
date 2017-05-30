import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { GlobalSharedService } from './../services/global-shared.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class BibleService {
        
    private contextUrl : string = this.globalSharedService.contextUrl;    

    constructor(private http: Http, private globalSharedService : GlobalSharedService) { }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    getBooks(word : string) {
        console.log("Word is " + word);
        if(word == "Old Testment"){
            return this.http
            .get(this.contextUrl+'/oldtestment/books','',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
        }else{
            return this.http
                .get(this.contextUrl+'/newtestment/books','',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
                .catch(err => this.handleError(err));
        }
    }
    
    getBookChapter(book : string , chapter : string){
        return this.http
            .get(this.contextUrl+'/bible/book/'+book+'/chapter/'+chapter,
             '',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
}