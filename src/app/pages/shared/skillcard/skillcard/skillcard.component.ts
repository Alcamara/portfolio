import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skillcard',
  standalone: true,
  imports: [],
  templateUrl: './skillcard.component.html',
  styleUrl: './skillcard.component.css'
})
export class SkillcardComponent {
  @Input() skill: any 
}
