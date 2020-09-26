import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, PLATFORM_ID } from '@angular/core';
import { RootRoutingModule } from '../root-routing/RT-route-system/root-routing.module';
import { AppComponent } from './components/root-component/app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppContentComponent } from './components/app-content/app-content.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DomainService } from '../shared-services/utilities/domain.service';
import { AppLoaderModule } from '../app-tools/app-loader/app-loader.module';
import { NonavLayoutComponent } from './components/nonav-layout/nonav-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { interceptorProvider } from '../shared-services/interceptors/interceptor.provider';
import { ApiInterceptorService } from '../shared-services/interceptors/api-interceptor.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MatIconModule } from '@angular/material/icon';

export function initializer(domainService: DomainService) {
  return () => {
    new Promise((resolve, reject) => {
      if (DomainService.domains) {
        resolve();
      }
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AppContentComponent,
    PageLayoutComponent,
    NonavLayoutComponent,
    MainLayoutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    AppLoaderModule,
    MatIconModule,
  ],
  providers: [
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    interceptorProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [PLATFORM_ID, DomainService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
