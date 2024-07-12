import { Component } from '@angular/core';
import { SideComponent } from '../side/side.component';
import { ButtonComponent } from '../button/button.component';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { SelectPlansComponent } from '../select-plans/select-plans.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    SideComponent,
    ButtonComponent,
    PersonalInfoComponent,
    SelectPlansComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {}
