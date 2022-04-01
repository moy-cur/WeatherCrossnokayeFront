import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styles: [`
    .social {
      margin-left: 5px;
      margin-top: 5px;
    }
  `]
})
export class SocialComponent implements OnInit {
  @Input() shareUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
