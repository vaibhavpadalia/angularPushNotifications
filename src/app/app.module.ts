import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessagingService } from './messaging.service';
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { routingComponents, AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, routingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBfgMuhIpfMvcE04lyHvHhSnAiGFa8IXKM',
      authDomain: 'push-notifications-9cf18.firebaseapp.com',
      databaseURL: 'https://push-notifications-9cf18.firebaseio.com',
      projectId: 'push-notifications-9cf18',
      storageBucket: 'push-notifications-9cf18.appspot.com',
      messagingSenderId: '233910781322'
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
