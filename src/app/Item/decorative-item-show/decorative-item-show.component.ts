import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DecorativeItem } from 'src/app/model/decorative-item';
import { DecorativeItemService } from 'src/app/Shared/decorative-item.service';

@Component({
  selector: 'app-decorative-item-show',
  templateUrl: './decorative-item-show.component.html',
  styleUrls: ['./decorative-item-show.component.css']
})
export class DecorativeItemShowComponent implements OnInit {

  decoItemsForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  decorativeItems: DecorativeItem[] = []
  constructor(
    private fb: FormBuilder,
    private decoItemService: DecorativeItemService
  ) { }

  ngOnInit(): void {
  
    this.decoItemsForm = this.fb.group({
      names: this.fb.array([])
    })
    this.loadItems()
  }

  get names(): FormArray {
    return this.decoItemsForm.get('names') as FormArray
  }

  removeCategory(i: number) {
    this.names.removeAt(i);
  }

  addName() {
    this.names.push(this.newName("",-1));
  };

  newName(name: string, id:number): FormGroup {
    return this.fb.group({
      id: [id, [Validators.required]],
      name: [name, [Validators.required]]
    })
  }

  loadItems() {
    this.decoItemService.findAll().subscribe(decoItems => {
      this.decorativeItems = decoItems,
      this.loadFormNames();
    })
  }

  loadFormNames(){
    this.names.clear()
    this.decorativeItems.forEach(item=>{
      this.names.push(this.newName(item.name,item.id))
    })
  }
  
  delete(index: number) {
    this.decoItemService.delete(this.names.at(index).value.id).subscribe(a => this.loadItems())
  }

  save(index: number) {
    const decoItem = new DecorativeItem(this.names.at(index).value.id,this.names.at(index).value.name)
    this.decoItemService.save(decoItem).subscribe(a=> this.loadItems())
  }

}
