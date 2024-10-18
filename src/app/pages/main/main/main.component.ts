import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

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
