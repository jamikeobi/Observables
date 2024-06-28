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

  // How to Create an Observable
  // next, complete, error
  myObservable = new Observable((array) => {
   setTimeout(() => {array.next(1)}, 1000);
   setTimeout(() => {array.next(2)}, 2000);
   setTimeout(() => {array.error()}, 3000);
   setTimeout(() => {array.next(4)}, 4000);
   setTimeout(() => {array.next(5)}, 5000);
  })


  GetAsyncData(){

    //Observer
  //   this.myObservable.subscribe((arr) => {
  //     this.data.push(arr);
  //   }
  // )

  this.myObservable.subscribe({
        next: (val: any) => {
          this.data.push(val);
        },
        error: () => {
          alert('Error seen');
        },
        complete: () => {
          alert('Data fetching completed');
          }
      })
      }
  
}




















  // How to create an Observable
  // myObservable = new Observable((observer) => {
  //   observer.next('Hello from Observable!');
  //   observer.next('Good morning');
  //   observer.next('Good afternoon');
  //   observer.next('Good evening');
  // }); 

  // GetAsyncData(){

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

//   this.myObservable.subscribe({
//     next: (val: any) => {
//       this.data.push(val);
//     },
//     error: (err) => {
//       alert(err.message);
//     },
//     complete: () => {
//       alert('Data fetching completed');
//       }
//   })
//   }
// }
