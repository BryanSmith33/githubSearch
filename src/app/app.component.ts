import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import { GithubService } from './services/github.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ProfileComponent],
  providers: [HTTP_PROVIDERS, GithubService]
})
export class AppComponent {
  title = 'app works!';
}
