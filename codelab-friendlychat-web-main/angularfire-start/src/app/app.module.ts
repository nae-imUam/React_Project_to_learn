import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
} from '@angular/fire/firestore';
import {
  provideFunctions,
  getFunctions,
  connectFunctionsEmulator,
} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import {
  provideStorage,
  getStorage,
  connectStorageEmulator,
} from '@angular/fire/storage';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ChatPageComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule, provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-5dfdf","appId":"1:75844118356:web:9c6187c8ee84b72d990ac1","storageBucket":"friendlychat-5dfdf.appspot.com","locationId":"asia-south1","apiKey":"AIzaSyCNWtwMytoUaAZYvedr2Z5oLISglDtQD-Q","authDomain":"friendlychat-5dfdf.firebaseapp.com","messagingSenderId":"75844118356","measurementId":"G-4FQ8EC7X5C"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
