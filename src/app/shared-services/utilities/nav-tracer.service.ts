import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root',
})
export class NavTracerService {
  private static readonly BREAD_CRUMB = 'breadCrumb';
  private separator;
  constructor(private titleService: Title, private router: Router) {}

  setTitle(
    routes: ActivatedRoute,
    appName: string,
    separator1: string = ':',
    separator2: string = '>'
  ) {
    this.separator = separator2;
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((res) => {
        let navTrace = this.generateNavTrace(routes);
        if (!isNullOrUndefined(navTrace) || navTrace !== '') {
          navTrace = appName + separator1 + navTrace;
        } else {
          navTrace = appName;
        }

        this.titleService.setTitle(navTrace);
      });
  }

  generateNavTrace(routes: ActivatedRoute, navTrace: string = ''): string {
    let childrens = routes.children;
    if (childrens.length == 0) {
      return navTrace;
    }

    for (let child of childrens) {
      let navName = child.snapshot.data[NavTracerService.BREAD_CRUMB];

      if (!isNullOrUndefined(navName)) {
        navTrace +=
          navTrace == ''
            ? navName == ''
              ? ''
              : navName
            : navName == ''
            ? navName
            : this.separator + navName;
      }

      return this.generateNavTrace(child, navTrace);
    }
  }
}
