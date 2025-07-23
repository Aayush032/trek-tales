import { Component } from "@angular/core";
import { CountUpDirective } from "../../directives/count-up.directive";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [CountUpDirective]
})
export class HomePageComponent {
}