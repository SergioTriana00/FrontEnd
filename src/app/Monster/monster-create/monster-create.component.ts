import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Monster } from 'src/app/model/monster';
import { MonsterService } from 'src/app/Shared/monster.service';

@Component({
  selector: 'app-monster-create',
  templateUrl: './monster-create.component.html',
  styleUrls: ['./monster-create.component.css']
})
export class MonsterCreateComponent implements OnInit {

  monster: Monster = new Monster(0, "", "", 0, 0, 0, 0, "", "");
  monsterCreateForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });
  
  constructor(
    private fb: FormBuilder,
    private monsterService: MonsterService,
  ) { }

  ngOnInit(): void {

    this.monsterCreateForm = this.fb.group({
      name: ['', [Validators.required]],
      last_updated: ['', [Validators.required]],
      attack_level: ['', [Validators.required]],
      defence_slash: ['', [Validators.required]],
      size: ['', [Validators.required]],
      hitpoints: ['', [Validators.required]],
      examine: ['', [Validators.required]],
      wiki_url: ['', [Validators.required]],
      categories: this.fb.array([]),
    });

  }

  // ----- Categories Management ----- //

  get categories(): FormArray {
    return this.monsterCreateForm.get('categories') as FormArray
  }

  removeCategory(i: number) {
    this.categories.removeAt(i);
  }

  addCategory() {
    this.categories.push(this.newCategory(""));
  };

  newCategory(category: string): FormGroup {
    return this.fb.group({
      name: [category, [Validators.required]]
    })
  }

  
  // ----- Form initializer ----- //

  loadFormData() {

    this.monsterCreateForm.patchValue({

      name: this.monster.name,
      last_updated: this.monster.last_updated,
      attack_level: this.monster.attack_level,
      defence_slash: this.monster.defence_slash,
      size: this.monster.size,
      hitpoints: this.monster.hitpoints,
      examine: this.monster.examine,
      wiki_url: this.monster.wiki_url,

    });

    this.categories.clear();
    
  }

  save() {

    this.monster = new Monster(0, "", "", 0, 0, 0, 0, "", "");

    this.monster.id = -1;
    this.monster.name = this.monsterCreateForm.value.name;
    this.monster.last_updated = this.monsterCreateForm.value.last_updated;
    this.monster.attack_level = this.monsterCreateForm.value.attack_level;
    this.monster.defence_slash = this.monsterCreateForm.value.defence_slash;
    this.monster.size = this.monsterCreateForm.value.size;
    this.monster.hitpoints = this.monsterCreateForm.value.hitpoints;
    this.monster.examine = this.monsterCreateForm.value.examine;
    this.monster.wiki_url = this.monsterCreateForm.value.wiki_url;
    this.categories.value.forEach((category: { name: string; }) => {

      this.monster.category.push(category.name)

    });

    this.monsterService.save(this.monster).subscribe(a => {
      console.log(a)
    })

  };


}
