import { Component } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import{ SpinnerComponent } from './SpinnerComponent';
import { SpinnerService} from './../services/SpinnerService';

@Component({
    selector: 'app',
    templateUrl: 'app/views/app.component.html',
    directives: [SpinnerComponent]
})

export class AppComponent implements OnInit { 

    constructor(private _router: Router, spinner: SpinnerService){
        spinner.status.subscribe((status: boolean) => {
            this.active = status;
        });
  
    }

    ngOnInit(){
        this._router.navigate(['home']);
    }
}