import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/Shared/item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  item: Item = new Item(-1, "", "", 0, 0, "", "");

  itemCreateForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });
  
  constructor(
    private fb: FormBuilder,
    private itemService: ItemService,
  ) { }

  ngOnInit(): void {

    this.itemCreateForm = this.fb.group({

      name: ['', [Validators.required]],
      last_updated: ['', [Validators.required]],
      cost: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      examine: ['', [Validators.required]],
      wiki_url: ['', [Validators.required]]

    })

  }

  save(){
    
    this.item.id = this.item.id;
    this.item.cost = this.itemCreateForm.value.cost;
    this.item.last_updated = this.itemCreateForm.value.last_updated;
    this.item.name = this.itemCreateForm.value.name;
    this.item.weight =  this.itemCreateForm.value.weight;
    this.item.examine = this.itemCreateForm.value.examine;
    this.item.wiki_url = this.itemCreateForm.value.wiki_url;
    
    this.itemService.save(this.item).subscribe();
  }

}
