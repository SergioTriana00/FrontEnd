import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { Item } from 'src/app/model/item';
import { Player } from 'src/app/model/player';
import { ItemService } from 'src/app/Shared/item.service';
import { PlayerService } from 'src/app/Shared/player.service';

@Component({
  selector: 'app-player-show',
  templateUrl: './player-show.component.html',
  styleUrls: ['./player-show.component.css']
})
export class PlayerShowComponent implements OnInit {

  player: Player = new Player(0, "", "", 0, 0, 0, 0, "", "", 0, 0);
  playerToSend: Player = new Player(0, "", "", 0, 0, 0, 0, "", "", 0, 0);

  playerCreateForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private fb: FormBuilder,
    private playerService: PlayerService,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {

      let id = +params.get("id")!;
      this.playerService.findById(id).subscribe((received) => {
        this.player = received;
        this.loadFormData()
      });

    });

    this.playerCreateForm = this.fb.group({
      name: ['', [Validators.required]],
      last_updated: ['', [Validators.required]],
      attack_level: ['', [Validators.required]],
      defence_slash: ['', [Validators.required]],
      size: ['', [Validators.required]],
      hitpoints: ['', [Validators.required]],
      examine: ['', [Validators.required]],
      wiki_url: ['', [Validators.required]],
      categories: this.fb.array([]),
      maxWeight: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      backpack: this.fb.array([])
    });

    this.itemService.itemSelected.subscribe(item => {
      this.addItem(item)
    })

  }

  loadFormData() {

    this.playerCreateForm.patchValue({

      name: this.player.name,
      last_updated: this.player.last_updated,
      attack_level: this.player.attack_level,
      defence_slash: this.player.defence_slash,
      size: this.player.size,
      hitpoints: this.player.hitpoints,
      examine: this.player.examine,
      wiki_url: this.player.wiki_url,
      maxWeight: this.player.maxWeight,
      weight: this.player.weight

    });

    this.categories.clear();
    this.player.category.forEach(category => {
      this.categories.push(this.newCategory(category))
    });

    this.items.clear();
    this.player.backpack.forEach(item => {
      this.items.push(this.newItem(item))
    });

  }

  // -------- CATEGORIES ------- ///
  get categories(): FormArray {
    return this.playerCreateForm.get('categories') as FormArray
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


  /// ----------- ITEMS ---------- ///
  get items(): FormArray {
    return this.playerCreateForm.get('backpack') as FormArray
  }

  removeItem(i: number) {
    this.items.removeAt(i)
  }

  addItem(newItem: Item) {

    
    // ------- add Item logic not repeatable ------ ///
    let valid = true;

    this.items.value.forEach((item: { item: Item; }) => {

      if(item.item.id == newItem.id){
        valid = false;
      }

    })

    if ((newItem.id != -1) && valid) {
      return this.items.push(this.newItem(newItem))
    }

  }

  newItem(newItem: Item): FormGroup {
    return this.fb.group({

      item: [newItem, Validators.required]
    })
  }

  save() {

    this.playerToSend = new Player(0, "", "", 0, 0, 0, 0, "", "", 0, 0);

    this.playerToSend.id = this.player.id;
    this.playerToSend.name = this.playerCreateForm.value.name;
    this.playerToSend.last_updated = this.playerCreateForm.value.last_updated;
    this.playerToSend.attack_level = this.playerCreateForm.value.attack_level;
    this.playerToSend.defence_slash = this.playerCreateForm.value.defence_slash;
    this.playerToSend.size = this.playerCreateForm.value.size;
    this.playerToSend.hitpoints = this.playerCreateForm.value.hitpoints;
    this.playerToSend.examine = this.playerCreateForm.value.examine;
    this.playerToSend.wiki_url = this.playerCreateForm.value.wiki_url;
    this.playerToSend.maxWeight = this.playerCreateForm.value.maxWeight;
    this.playerToSend.weight = this.playerCreateForm.value.weight;

    this.categories.value.forEach((category: { name: string; }) => {

      this.playerToSend.category.push(category.name)

    });

    this.items.value.forEach((item: { item: Item; }) => {

      this.playerToSend.backpack.push(item.item)

    })

    this.playerService.save(this.playerToSend).subscribe(a => {
      console.log(a)
    })

  }

}
