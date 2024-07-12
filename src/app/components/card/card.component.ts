import { Component } from '@angular/core';
import { SideComponent } from '../side/side.component';
import { ButtonComponent } from '../button/button.component';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SideComponent, ButtonComponent, PersonalInfoComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {}
