import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { DividerModule } from 'primeng/divider';
import { UserProfileResponse } from '../model/common-models';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AuthService } from '@auth0/auth0-angular';
import { SharedService } from 'shared';



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CardModule, DividerModule, InputTextModule, FormsModule, CommonModule, ProgressSpinnerModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  public userDetails : UserProfileResponse | any;
  isPageLoading = false;

  constructor(private router : Router,
    private activatedRoute: ActivatedRoute,
    public commonService:CommonService,
    public auth: AuthService,
    private sharedService: SharedService) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
    }; 
   // this.router.onSameUrlNavigation = 'reload';
    var profileId = this.sharedService.getItem("profileId");
    var accessToken = this.sharedService.getItem("accessToken");
    
      if(profileId){
        this.auth.user$.subscribe(user=> {
          console.log("USERRRRR::: "+ JSON.stringify(user));
          this.userDetails = {
            "email": user?.email,
            "name": user?.name,
            "profilePicUrl": user?.picture,
            "phone_number": user?.phone_number,
            "auth0_id": user?.sub,
            "id": user?.sub
          }
        });
    }
  }

}
