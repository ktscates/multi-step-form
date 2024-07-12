import { Component } from '@angular/core';
import { SideComponent } from '../side/side.component';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SideComponent, InputComponent, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {}
