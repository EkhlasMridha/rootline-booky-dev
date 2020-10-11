import { Component, OnInit } from '@angular/core';
import { SettignsService } from '../../services/settigns.service';
import {JwtHelperService} from "@auth0/angular-jwt"
import { RootlineModalService } from 'rootline-dialog';

@Component({
  selector: 'app-settigns',
  templateUrl: './settigns.component.html',
  styleUrls: ['./settigns.component.scss']
})
export class SettignsComponent implements OnInit {
  bexioToken:string;
  constructor(private settingService:SettignsService,private dialogService:RootlineModalService) { }

  ngOnInit(): void {
    this.primaryButton = this.primaryButton.bind(this);
    this.settingService.getProfile().subscribe(res=>{
      console.log(res);
      this.bexioToken = res.bexioToken;
    })
  }
  saveToken(){
    let ref = this.dialogService.openConfirmationModal({isLoader:true,loaderText:"Saving token ...",disableClose:true});
    this.settingService.changeBexioToken(this.bexioToken).subscribe(res=>{
      console.log(res);
      ref.close();
      this.dialogService.dispose();
      this.dialogService.openConfirmationModal({headerText:"Bexio token saved succesfully",primaryButtonName:"Okay",primaryEvent:this.primaryButton});
    },
    err=>{
      ref.close();
      this.dialogService.dispose();
      this.dialogService.openConfirmationModal({headerText:"Unknown error occured",matIcon:"warning",type:"warn",primaryButtonName:"Try again",primaryEvent:this.primaryButton});
    }
    )
  }

  primaryButton(){
    this.dialogService.dispose();
  }
}
