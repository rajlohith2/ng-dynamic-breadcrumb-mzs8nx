import { Component, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
})
export class Page3Component implements OnInit {

  constructor(private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService) { }

  ngOnInit() {

    const breadcrumb =  {customText: 'This is the Custom Text'};
    this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }

    updateBreadcrumb(): void {
    const breadcrumbs  =  [
      {
        label: 'page {{pageOneID}}',
        url: '/page1/:pageOneID'
      },
      {
        label: 'page {{pageTwoID}}',
        url: 'page1/:pageOneID/page2/:pageTwoID'
      },
      {
        label: 'page {{pageThreeID}}',
        url: 'page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID'
      },
      {
        label: 'Update Breadcrumb',
        url: ''
      }
    ];
    this.ngDynamicBreadcrumbService.updateBreadcrumb(breadcrumbs);
  }


}
