import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name1: string;
  name2: string;
  name3: string;
  constructor() { }

  ngOnInit() {
  }

AddTask(name1,name2) {
console.log(name1,name2);
this.name3 = name1 + name2;
}

}
