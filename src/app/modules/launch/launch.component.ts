import { Component, OnInit } from '@angular/core';
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


  constructor(
    private httpLaunchService: HttpLaunchService
  ) { }

  ngOnInit(): void {
    this.subscription = this.httpLaunchService.getLaunchList().subscribe((missions) => {
      this.missions = missions;
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
