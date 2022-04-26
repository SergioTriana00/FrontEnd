import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/Shared/item.service';

@Component({
  selector: 'app-item-show',
  templateUrl: './item-show.component.html',
  styleUrls: ['./item-show.component.css']
})
export class ItemShowComponent implements OnInit {

  item: Item = new Item(0, "", "", 0, 0, "", "");
  itemToSave: Item = new Item(0, "", "", 0, 0, "", "");

  itemCreateForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(
    private fb: FormBuilder,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loadItem();
    this.itemCreateForm = this.fb.group({

      name: ['', [Validators.required]],
      last_updated: ['', [Validators.required]],
      cost: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      examine: ['', [Validators.required]]

    })

  }

  loadItem() {

    this.route.paramMap.subscribe((params) => {

      let id = +params.get("id")!;
      this.itemService.findById(id).subscribe((received) => {

        this.item = received;
        this.loadFormData()

      });

    });

  }

  loadFormData() {

    this.itemCreateForm.patchValue({

      name: this.item.name,
      last_updated: this.item.last_updated,
      cost: this.item.cost,
      weight: this.item.weight,
      examine: this.item.examine

    })

  }

  save(){
    
    this.itemToSave.id = this.item.id;
    this.itemToSave.cost = this.itemCreateForm.value.cost;
    this.itemToSave.last_updated = this.itemCreateForm.value.last_updated;
    this.itemToSave.name = this.itemCreateForm.value.name;
    this.itemToSave.weight =  this.itemCreateForm.value.weight;
    this.itemToSave.examine = this.itemCreateForm.value.examine;
    
    this.itemService.save(this.itemToSave).subscribe();
  }

}
