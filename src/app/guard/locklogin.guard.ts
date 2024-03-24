import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store , select } from '@ngrx/store';
import { Observable , map } from 'rxjs';
import { selectLogIsConnected } from '../ngrx/login.selector';

@Injectable({
  providedIn: 'root'
})
export class LockloginGuard implements CanActivate {

  constructor(private router : Router , private store : Store) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.store.pipe(
        select(selectLogIsConnected),
        map(value => 
          {
            if(value)
            {
              this.router.navigateByUrl('aircrafts')
              return value
            }
            else
            { 
              return value
            }
          })
        )

  }
  
}
