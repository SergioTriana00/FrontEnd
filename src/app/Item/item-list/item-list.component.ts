import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/Shared/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {


  items: Item[] = [];
  design: boolean = false;

  constructor(private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit(): void {

    if(this.router.url === '/design/item'){
      this.design = true;
    }

    console.log(this.router.url)
    this.loadItems()
  }

  delete(id:number){

    this.itemService.delete(id).subscribe(a=> this.loadItems())    
  }

  loadItems(){
    this.itemService.findAll().subscribe(items=>{this.items = items})
  }

  add(item:Item){

    this.itemService.sendItem(item)

  }
}
