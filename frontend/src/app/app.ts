import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Backend Test</h1>

    <button (click)="testAPI()">Test Backend</button>

    <pre>{{ response | json }}</pre>
  `
})
export class AppComponent {

  http = inject(HttpClient);
  response: any;

  testAPI() {
    this.http.get('http://localhost:8089/api/users')
      .subscribe((res: any) => {
        this.response = res;
      });
  }
}
