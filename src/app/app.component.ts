import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Observables';

  data: any[] = [];

  // How to create an Observable
  myObservable = new Observable((observer) => {
    setTimeout(() => {observer.next(1)}, 1000);
    setTimeout(() => {observer.next(2)}, 2000);
    setTimeout(() => {observer.next(3)}, 3000);
    // setTimeout(() => {observer.error(new Error('Something went wrong. Try some other time'))}, 4000);
    setTimeout(() => {observer.next(4)}, 5000);
    setTimeout(() => {observer.complete()}, 6000);
  });

  GetAsyncData(){

    // Observer
    // next, error, complete
  //   this.myObservable.subscribe((val: any) => {
  //     this.data.push(val);
  //     // this.data.push(val * 2)
  //   },
  //   (err) => {
  //     alert(err.message);
  //   },
  //   () => {
  //     alert('Data fetching completed');
  //   }
  // );

  this.myObservable.subscribe({
    next: (val: any) => {
      this.data.push(val);
    },
    error: (err) => {
      alert(err.message);
    },
    complete: () => {
      alert('Data fetching completed');
      }
  })
  }
}
