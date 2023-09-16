import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { UserService } from './user.service';

function add(a: number | string, b: number | string) {
  return ((a as any) + b) as any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  obj = {
    prop1: 'Hello World',
  };

  sentence = 'Hello from the other side';
  add = add;

  // create a clock

  $time = interval(1000).pipe(map(() => new Date()));

  getObj(obj: any, propName: string) {
    return obj[propName];
  }

  scoresObj = {
    scores: [1, 2, 3, 4, 5, 6, 9, 10],
  };

  private scores: number[] = [];
  private result = 0;

  myPromise = new Promise((res) => {
    setTimeout(() => {
      res('Hello!');
    }, 5000);
  });

  constructor(private userService: UserService) {}

  calcScores(obj: { scores: number[] }) {
    if (this.scores != this.scoresObj.scores) {
      this.result = obj.scores.reduce((acc, curr) => acc + curr);
      this.scores = obj.scores;
      return this.result;
    }
    return this.result;
  }

  addProp() {
    (this.scoresObj as any)['test'] = 500;
    this.scoresObj.scores = this.scoresObj.scores.concat(100);
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (users) => console.log(users),
      error: (err) => console.error(err),
    });
  }
}
