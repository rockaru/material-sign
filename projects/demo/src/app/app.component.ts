import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  signatureImage1: any;

  showImage1(data) {
    this.signatureImage1 = data;
  }
  signatureImage2: any;

  showImage2(data) {
    this.signatureImage2 = data;
  }

}
