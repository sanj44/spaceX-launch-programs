import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { LaunchItemComponent } from './components/launch-item/launch-item.component';

import { LaunchComponent } from './launch.component';
import { HttpLaunchService } from './sevices/http-launch.service';
import { HttpLaunchServiceMock } from './testing/services/http-launch.service.mock';

describe('LaunchComponent', () => {
  let component: LaunchComponent;
  let fixture: ComponentFixture<LaunchComponent>;
  let httpLaunchService: HttpLaunchService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaunchComponent, LaunchItemComponent],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: HttpLaunchService, useClass: HttpLaunchServiceMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpLaunchService = TestBed.inject(HttpLaunchService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show message no mission in selected filter when api return no data', () => {
    fixture.debugElement.queryAll(By.css('.yearlist li a'))[0].nativeElement.click();
    expect(component.missions.length).toEqual(1);
  });
});
