import { Component, OnInit, Input } from '@angular/core';
import { Komunikat } from '../komunikat';

@Component({
  selector: 'app-komunikat',
  templateUrl: './komunikat.component.html',
  styleUrls: ['./komunikat.component.css']
})
export class KomunikatComponent {

k:Komunikat;

@Input() k: Komunikat;
}