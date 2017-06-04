import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';

export const firebaseConfig = {
      apiKey: "AIzaSyDE19PZLxCf68PRsPkFiduGIyqez_ln0bE",
    authDomain: "ng4list.firebaseapp.com",
    databaseURL: "https://ng4list.firebaseio.com",
    projectId: "ng4list",
    storageBucket: "ng4list.appspot.com",
    messagingSenderId: "566072764440"

};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
