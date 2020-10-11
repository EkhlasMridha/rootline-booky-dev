import { Component, OnInit } from '@angular/core';
import { SettignsService } from '../../services/settigns.service';
import {JwtHelperService} from "@auth0/angular-jwt"

@Component({
  selector: 'app-settigns',
  templateUrl: './settigns.component.html',
  styleUrls: ['./settigns.component.scss']
})
export class SettignsComponent implements OnInit {
  bexioToken:string;
  constructor(private settingService:SettignsService) { }

  ngOnInit(): void {
    this.settingService.getProfile().subscribe(res=>{
      console.log(res);
      this.bexioToken = res.bexioToken;
    })
  }
  saveToken(){
    this.settingService.changeBexioToken(this.bexioToken).subscribe(res=>{
      console.log(res);
    })
  }
}
