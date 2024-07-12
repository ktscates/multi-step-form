import { Component } from '@angular/core';
import { SideComponent } from '../side/side.component';
import { ButtonComponent } from '../button/button.component';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { SelectPlansComponent } from '../select-plans/select-plans.component';
import { AddOnsComponent } from '../add-ons/add-ons.component';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    SideComponent,
    ButtonComponent,
    PersonalInfoComponent,
    SelectPlansComponent,
    AddOnsComponent,
    SummaryComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {}
