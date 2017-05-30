import {Component} from '@angular/core';
import { SpinnerService} from './../services/SpinnerService';
@Component({
 selector : 'spinner-component',
  templateUrl: 'app/views/spinner.html',
})
export class SpinnerComponent {
  public active: boolean;

  public constructor(spinner: SpinnerService) {
      console.log("Spinner Component Loaded");
    
  }
    
    ngOnInit(){
        spinner.status.subscribe((status: boolean) => {
          this.active = status;
        });
    }
}