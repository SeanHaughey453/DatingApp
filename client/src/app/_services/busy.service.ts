import { Injectable } from '@angular/core';
import { NgxSpinner } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;

  constructor(private spinnerService: NgxSpinner) { }

  busy(){
    this.busyRequestCount++;
   // this.spinnerService.show(undefined, )
  }
}
