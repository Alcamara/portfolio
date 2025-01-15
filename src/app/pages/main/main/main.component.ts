import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxTimelineModule, NgxTimelineEvent, NgxTimelineEventChangeSide } from '@frxjs/ngx-timeline';
import { SkillcardComponent } from '../../shared/skillcard/skillcard/skillcard.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgxTimelineModule,
    SkillcardComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  skillSection = [
    {
      title: "Frontend",
      skills: ["HTML & CSS","JavaScript","Bootstrap","Angular","React","Redux & Redux Saga","RXJS","Responsive Web Design"]
    },
    {
      title: "Backend",
      skills: ["Go","Node.js","Express","SQL"]
    },
    {
      title: "Others",
      skills: [ "Jest", "Git & GitHub", "Agile Methodologies"]
    }
   ]

  changeSide = NgxTimelineEventChangeSide.ALL

  wave = '👋🏿'

  events: NgxTimelineEvent[] = [
    {
      id: 1,
      title: 'Prime Digital Academy',
      description: `Student Software Developer`,
      timestamp: new Date('2022-07-23 08:00:00')
    },
    {
      id: 2,
      title: 'TurnKey Correction',
      description: "Junior Software Developer",
      timestamp: new Date('2023-04-17 09:00:00')
    }
  ];

  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl( "", [Validators.required, Validators.email]),
    msg: new FormControl("", [Validators.required])
  })


  onSMIClick(socialMediaType: string){
    switch(socialMediaType){
      case 'Linkedin':
        open('https://www.linkedin.com/in/alhousseinec/','_blank')
        break
      case "Github":
        open('https://github.com/Alcamara','_blank')
        break
      default:
        open('https://x.com/Alcamaracodes','_blank')
    }
  }
}
