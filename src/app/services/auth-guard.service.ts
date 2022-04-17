import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { ApiCallerService } from "./api-caller.service";
import { Observable, of } from 'rxjs';
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private apiCallerService: ApiCallerService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    const formData = route.params;
    // Navigation only after successful response from Registration
    return this.apiCallerService.register(formData).pipe(
      switchMap((resp: any) => {
        return of(resp.success);
      })
    );
  }
}
