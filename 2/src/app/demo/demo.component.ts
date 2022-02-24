import { Component, OnInit } from '@angular/core';
import Item from '../Item';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  counter = 0
  now = +Date()
  item: Item = {name: 'john', price: 100000, date: this.now }
  constructor() { }

  inc(){
    this.counter = this.counter +1
  }
  dec(){
    this.counter = this.counter -1
    }
  ngOnInit(): void {
  }

}
