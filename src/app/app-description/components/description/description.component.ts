import { Component, Inject, OnInit } from '@angular/core';
import {
  DescriptionToken,
  DESCRIPTION_POPUP_CONFIG,
  FilePreviewDialogConfig,
} from '../../description.config';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  popConfig: FilePreviewDialogConfig;
  constructor(@Inject(DESCRIPTION_POPUP_CONFIG) config: DescriptionToken) {
    this.popConfig = config.config;
  }

  ngOnInit(): void {
    console.log(this.popConfig);
  }
}
