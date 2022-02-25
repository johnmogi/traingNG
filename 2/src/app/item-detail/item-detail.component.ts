import { Component, Input, OnInit } from '@angular/core';
import Item from '../Item';
import { ITEMS } from '../items/itemsStore';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input() item?: Item;
 
  constructor() { }

  ngOnInit(): void {
  }



}
