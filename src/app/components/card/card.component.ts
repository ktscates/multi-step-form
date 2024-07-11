import { Component } from '@angular/core';
import { SideComponent } from '../side/side.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SideComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {}
