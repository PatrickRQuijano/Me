import { Component } from '@angular/core';
import { About } from '../components/about/about';
import { Contact } from '../components/contact/contact';
import { Resume } from '../components/resume/resume';
import { Menu } from '../components/menu/menu';


@Component({
  selector: 'app-home',
  imports: [About, Contact, Resume],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
