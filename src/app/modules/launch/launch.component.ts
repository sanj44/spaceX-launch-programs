import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMission } from './models/mission.model';
import { HttpLaunchService } from './sevices/http-launch.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  subscription!: Subscription;
  missions: IMission[] = [];
  yearFilters: string[] = [];
  activeYear!:string;
  activeLandSuccess!: string;
  activeLaunchSuccess!: string;

  constructor(
    private httpLaunchService: HttpLaunchService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      let filters: string = this.getFilterString(params);
      this.subscription = this.httpLaunchService.getLaunchList(filters).subscribe((missions) => {
        this.missions = missions;
      });
    });
  }
  getFilterString(params: Params): string {
    this.activeYear = params.launch_year;
    this.activeLandSuccess = params.land_success;
    this.activeLaunchSuccess = params.launch_success;
    debugger;
    let filters = Object.keys(params).map((k) => `${k}=${params[k]}`).join("&");
    if (!Object.keys(params).length) {
      filters = 'limit=100';
    }
    else if (Object.keys(params).length && !params.limit) {
      filters += '&limit=100';
    }
    return filters;
  }
  ngOnInit(): void {
    let currentYear = new Date().getFullYear();
    for (let i = 15; i > 0; i--)
      this.yearFilters.push((currentYear - i).toString());
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
