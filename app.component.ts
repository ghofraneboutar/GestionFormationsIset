import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PublicSpaceModule } from './public-space/public-space.module';
import { PrivateSpaceModule } from './private-space/private-space.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PublicSpaceModule,PrivateSpaceModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestion-formation-iset';
}
