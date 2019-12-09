import { Component, OnInit } from '@angular/core';
import { Komunikat } from './komunikat';

@Component({
  selector: 'my-app',
  templateUrl: './hello.component.html',
  styleUrls: [ './hello.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  komunikaty: Komunikat[];

  ngOnInit() {
    this.komunikaty = [

      new Komunikat('Treść pierwszego komunikatu', new Date(), false),

      new Komunikat('Treść drugiego komunikatu', new Date(), true),

      new Komunikat('Treść trzeciego komunikatu', new Date(), false)
    ];
  }
}
