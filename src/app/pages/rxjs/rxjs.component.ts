import { Component, OnInit, OnChanges } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, catchError, delay, mergeMap, take } from 'rxjs/operators';
import { of, Observable, from, interval, asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnChanges {
  simpleArray: number[];
  ajax$: Observable<any>;
  interval$: Observable<number>;
  ofResult$ : Observable<Array<number>>;
  fromResult: number;

  constructor() {
    this.simpleArray = [1, 2, 3];
  }

  ngOnInit(): void {
    
  }

  ngOnChanges() {

  }
  
  launchAjax(url) {
    console.log(url);

    this.ajax$ = ajax(url).pipe(
      map((res) => {
        console.log(res);
        return res.response.body;
      }),
      catchError(error => {
        console.log('Error: ', error);
        return of(error);
      })
    );
  }

  launchOf(val = [1, 2, 3]) {
    this.ofResult$ = of(val).pipe(
      map((item) => {
        console.log(item);
        item.push(4);
        return item;/* item.map(el => el * 2); */ 
      })
    );
  }

  launchInterval(val = [1, 2, 3]) {
    this.interval$ = interval(1000).pipe(
      take(5),
      map((val) => {
        console.log(val);
        return val * 2;
      })
    )
  }
}
