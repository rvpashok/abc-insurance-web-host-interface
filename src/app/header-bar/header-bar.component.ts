import { Component, Inject } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MegaMenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DOCUMENT } from '@angular/common';
import { CommonService} from '../services/common.service';
import { MenubarModule } from 'primeng/menubar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { AuthService } from '@auth0/auth0-angular';
import { ToolbarModule } from 'primeng/toolbar';



interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

interface Category {
  displayName: string;
  categoryId: string;
  parentCategoryId: string;
}

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [FormsModule,
    AutoCompleteModule, ToolbarModule, CommonModule, DropdownModule,
    SplitButtonModule, ButtonModule, MenubarModule, 
    InputGroupModule,InputGroupAddonModule, BadgeModule, OverlayPanelModule,
    MegaMenuModule, AvatarModule],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent /*implements AfterViewInit*/{
  values = '';
  //public auth: AuthService
  constructor(
    private router : Router,
    @Inject(DOCUMENT) private doc: Document,
    public commonService:CommonService,
    public auth: AuthService) {
      console.log("AuthModule config Clicked");
  }
  
  isAuthenticated: boolean = false;
  categoryMenuBarItem = new Array<MegaMenuItem>();

    items: MegaMenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Insurance Plans',
                root: true,
                items: [
                    [
                        {
                            items: [
                                { 
                                  label: 'Health Insurance',
                                  command: () => {
                                    this.insurancePlan();
                                  }
                                },
                                { 
                                  label: 'Auto Insurance',
                                  command: () => {
                                    this.insurancePlan();
                                  }

                                },
                                { 
                                  label: 'Life Insurance' ,
                                  command: () => {
                                    this.insurancePlan();
                                  }

                                }
                            ]
                        }
                    ]
                ]
            },
            {
                label: 'Claims',
                root: true,
                command: () => {
                    this.claims();
                }
            },
            {
                label: 'Login',
                root: true,
                icon: 'fa fa-solid fa-user',
                visible: this.isAuthenticated ? !this.isAuthenticated : true,
                command: () => {
                    this.login();
                }
            },
            {
                label: 'Profile',
                root: true,
                icon: 'fa fa-solid fa-user',
                visible: this.isAuthenticated ? this.isAuthenticated : false,
                command: () => {
                    this.profile();
                }
            },
            {
                label: 'Logout',
                root: true,
                icon: 'fa fa-solid fa-user',
                visible: this.isAuthenticated ? this.isAuthenticated : false,
                command: () => {
                    this.logout();
                }
            }
        ];

        this.auth.getAccessTokenSilently().subscribe((accessToken)=>{
          console.log("Existing acessToken: " + this.commonService.getItem("accessToken"));
          console.log("request value acessToken: " + accessToken);
          if(accessToken != null && accessToken != undefined){
            this.commonService.setItem("accessToken",accessToken);
           // console.log("New acessToken: " + this.commonService.getItem("accessToken"));
            this.auth.user$.subscribe(userDetails=>{
              console.log("UserID: " + userDetails?.sub);
              this.commonService.setItem("profileId",userDetails?.sub);
              this.items?this.items[2].visible = false:"";
              this.items?this.items[3].visible = true:"";
              this.items?this.items[4].visible = true:"";
              this.items?.push(this.items);
            });
            this.auth.isAuthenticated$.subscribe((status) => {
              console.log("Inside boolean Auth set: " + status);
              this.isAuthenticated = status;
            });
          }
          
        });
    }


  save(severity: string) {
      console.log("Login button Save" + { severity: severity, summary: 'Success', detail: 'Data Saved' });
  } 

  insurancePlan(){
    console.log("Insurance Plan Clicked");
    this.router.navigate(['/insurance'])
  }
  profile(){
   console.log("Profile button Clicker" + this.auth.isAuthenticated$);
   //this.commonService.resetHeaderToDefault();
   this.router.navigate(['/profile'])
  }

  claims(){
    console.log("Claim button Clicker ");
    this.router.navigate(['/claims'])
  }

  login(){
    //console.log("Login button Clicker " + this.auth.isAuthenticated$);
    console.log("Login button Clicker ");
    this.auth.loginWithRedirect();
    this.auth.getAccessTokenSilently();
  }

  logout() {  
    console.log("Logout button Clicker ");
   // console.log("Logout button Clicker" + this.doc.location.origin);
    this.commonService.setItem("accessToken","");
    this.commonService.setItem("profileId","");
    this.auth.logout({ logoutParams: { returnTo: this.doc.location.origin } });
  }
  

  notifications(){
    console.log("Notification button Clicker")
    //this.commonService.resetHeaderToDefault();
    this.router.navigate(['/notifications'])
  }

  onEnter(event: Event){
    console.log("Enter pressed selected: ");
  }

  onClickHomeIcon(){
    this.router.navigate(['/']);
  }

  removeDuplicates(arr: Array<string>) { 
    return arr.filter((item, 
        index) => arr.indexOf(item) === index); 
  }

}
