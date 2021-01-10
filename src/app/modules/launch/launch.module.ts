import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchComponent } from './launch.component';
import { LaunchItemComponent } from './components/launch-item/launch-item.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';


@NgModule({
  declarations: [LaunchComponent, LaunchItemComponent],
  imports: [
    CommonModule,
    LaunchRoutingModule,
    NgxUiLoaderModule
  ],
  providers: []
})
export class LaunchModule { }
