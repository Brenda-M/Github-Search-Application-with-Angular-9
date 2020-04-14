import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RepositoriesComponent } from './components/repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    DateAgoPipe,
    ProfileComponent,
    NotFoundComponent,
    HighlightDirective,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
