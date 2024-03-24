import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLogIsConnected } from './ngrx/login.selector';
import { UserService } from './services/user.service';
import { logoutUserAction, logoutUserActionSuccess } from './ngrx/authenticate.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airbus-app-ngrx';

  isLogin$: Observable<boolean> 
  

  constructor(private store: Store<any> , private router : Router) {
    this.isLogin$ = store.select(selectLogIsConnected)
    
  }

  ngOnInit(): void { }

  resetConnection()
  {
    this.store.dispatch(new logoutUserActionSuccess({}));
  }
}
