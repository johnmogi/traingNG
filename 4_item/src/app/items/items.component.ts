import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items = ITEMS;

  selectedItem? : Item;

  onSelect(item: Item){
    this.selectedItem = item;
    console.log(item);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
