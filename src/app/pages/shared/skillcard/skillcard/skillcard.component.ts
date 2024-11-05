import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skillcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skillcard.component.html',
  styleUrl: './skillcard.component.css'
})
export class SkillcardComponent implements OnInit {
  @Input() skill: any 

  ngOnInit(): void {
    const skill = this.skill
    console.log(skill);
    
  }
}
