import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { combineLatest, ConnectableObservable, Observable } from 'rxjs';
import { map, publishLast, publishReplay } from 'rxjs/operators';

import { CurrentNodes, NavigationNode, NavigationResponse, NavigationViews, VersionInfo } from './navigation.model';
export {
  CurrentNodes,
  CurrentNode,
  NavigationNode,
  NavigationResponse,
  NavigationViews,
  VersionInfo,
} from './navigation.model';

export const navigationPath = "" + 'navigation.json';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }
}
