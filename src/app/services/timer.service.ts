import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TimerService {

  constructor() { }

  getData(text): Observable<string> {
    const timer$ = timer(2000);
    
    const observable = new Observable<string>(observer => {

      timer$.pipe(
        map(() => {
          observer.next('http response ' + text);
          observer.complete();
        })
      ).subscribe();

    });
    return observable;
  }

}