import { Component, Input, OnInit } from '@angular/core';
import Item from '../Item';
import { ITEMS } from './itemsStore';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {


  items = ITEMS;
  selectedItem : Item | null = null;

  constructor() { }
  ngOnInit(): void {
  }
 
  onSelect(item: Item){
    this.selectedItem= item
    //  console.log(item);
  }

}
