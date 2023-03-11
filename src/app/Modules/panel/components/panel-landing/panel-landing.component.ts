import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-panel-landing',
  templateUrl: './panel-landing.component.html',
  styleUrls: ['./panel-landing.component.css'],
})
export class PanelLandingComponent implements OnChanges {
  constructor(private router: Router) {}
  private firstUrl: string = this.router.url.split('/')[1];
  public secondUrl: string = this.router.url.split('/')[2];
  navigateToUrl(endUrl: string) {
    this.router.navigate([`${this.firstUrl}/${this.secondUrl}`, endUrl]);
  }
  ngOnChanges() {}
}
