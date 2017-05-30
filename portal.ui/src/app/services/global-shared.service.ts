import { EventEmitter, Injectable } from "@angular/core";
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobalSharedService {
    contextUrl: string = "http://localhost:8888/api";
    contentType: string = "Content-Type";
    applicationJson: string = "application/json"; 
    isSpinnerActive:boolean = false;
    
    constructor() {
    }
    
    getJWTHeader() {
        return new Headers({ 'Content-Type': 'application/json', "Authorization": "" });
    }
    
    getIsSpinnerActive(){
        return this.isSpinnerActive;
    }
    
    setIsSpinnerActive(active){
        this.isSpinnerActive = active;
    }
    
}