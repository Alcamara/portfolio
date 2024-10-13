import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {


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
