import { NgModule, importProvidersFrom } from '@angular/core';
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
import { MatExpansionModule } from '@angular/material/expansion';
import { TempVariablesComponent } from './fundamentos-ii/temp-variables/temp-variables.component';
import { ViewChildComponent } from './fundamentos-ii/view-child/view-child.component';
import { FilhoViewchildComponent } from './fundamentos-ii/filho-viewchild/filho-viewchild.component';
import { ViewChildrenComponent } from './fundamentos-ii/view-children/view-children.component';
import { SemDiretivaComponent } from './fundamentos-ii/sem-diretiva/sem-diretiva.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ComDiretivaComponent } from './fundamentos-ii/com-diretiva/com-diretiva.component';
import { DisabledDirective } from './directives/disabled.directive';
import { StyleDirective } from './directives/style.directive';
import { ClassDirective } from './directives/class.directive';
import { ListenerDirective } from './directives/listener.directive';
import { InputBackgroundDirective } from './directives/input-background.directive';
import { ElementRefComponent } from './fundamentos-iii/element-ref/element-ref.component';
import { FocusSecondInputDirective } from './directives/focus-second-input.directive';
import { ElementRefDirectiveComponent } from './fundamentos-iii/element-ref-directive/element-ref-directive.component';
import { ElementRefServiceComponent } from './fundamentos-iii/element-ref-service/element-ref-service.component';
import { XssExemploComponent } from './fundamentos-iii/xss-exemplo/xss-exemplo.component';
import { TestesJestComponent } from './testes-jest/testes-jest.component';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';

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
    TempVariablesComponent,
    ViewChildComponent,
    FilhoViewchildComponent,
    ViewChildrenComponent,
    SemDiretivaComponent,
    HighlightDirective,
    ComDiretivaComponent,
    DisabledDirective,
    StyleDirective,
    ClassDirective,
    ListenerDirective,
    InputBackgroundDirective,
    ElementRefComponent,
    FocusSecondInputDirective,
    ElementRefDirectiveComponent,
    ElementRefServiceComponent,
    XssExemploComponent,
    TestesJestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    ComponentsModule,
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
