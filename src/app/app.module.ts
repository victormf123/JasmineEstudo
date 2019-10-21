import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { TodosComponent } from './todos/todos.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    TodosComponent,
    NavComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
