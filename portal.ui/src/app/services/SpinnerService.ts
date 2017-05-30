import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/share';
import {GlobalSharedService} from './../services/global-shared.service';

@Injectable()
export class SpinnerService {
  constructor(private globalSharedService : GlobalSharedService) { }
    
  public status: Subject<boolean> = new Subject();
  private _active: boolean = false;

  public get active(): boolean {
    return this._active;
  }

  public set active(v: boolean) {
    this._active = v;
    this.status.next(v);
  }

  public start(): void {
    this.active = true;
    this.globalSharedService.setIsSpinnerActive(true);  
  }

  public stop(): void {
    this.active = false;
    this.globalSharedService.setIsSpinnerActive(false);
  }
}