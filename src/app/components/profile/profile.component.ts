import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from 'src/app/services/api-caller.service';

// Interface for receiving Profile details
export interface IProfile {
  name: string;
  email: string;
  bio: string;
  img: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileDetails: IProfile | undefined;
  errorOccurred = false;

  constructor(private apiCallerService: ApiCallerService) { }

  ngOnInit(): void {
    // Get Profile Page Details on load
    this.apiCallerService.getProfileDetails().subscribe((res:any) => {
      if (res) {
        this.profileDetails = res;
      }
    }, (error) => {
      this.errorOccurred = true;
    });
  }

}
