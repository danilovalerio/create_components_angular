import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { NgifComponentComponent } from './ngif-component/ngif-component.component';
import { NgforComponentComponent } from './ngfor-component/ngfor-component.component';
import { PersonComponent } from './person/person.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgclassComponent } from './ngclass-c/ngclass.component';
import { PipesExComponent } from './pipes-ex/pipes-ex.component';
import { StatusClassPipe } from './pipes/status-class.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponentComponent,
    NgforComponentComponent,
    PersonComponent,
    NgStyleComponent,
    NgclassComponent,
    PipesExComponent,
    StatusClassPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule, FormsModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
