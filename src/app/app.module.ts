import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [AppComponent, MyCalendarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule,
    FormlyModule.forRoot({
      types: [{ name: 'mycalendar', component: MyCalendarComponent }],
      extras: { lazyRender: true },
    }),
    FormlyPrimeNGModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
