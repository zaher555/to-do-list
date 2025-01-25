import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from "./components/content/content.component";

@Component({
  selector: 'app-root',
  imports: [ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo_list';
}
