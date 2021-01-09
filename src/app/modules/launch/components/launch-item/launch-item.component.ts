import { Component, Input, OnInit } from '@angular/core';
import { IMission } from '../../models/mission.model';

@Component({
  selector: 'app-launch-item',
  templateUrl: './launch-item.component.html',
  styleUrls: ['./launch-item.component.css']
})
export class LaunchItemComponent implements OnInit {
  @Input() mission!: IMission;
  constructor() { }

  ngOnInit(): void {
  }

}
