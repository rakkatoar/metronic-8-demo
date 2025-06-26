import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LayoutService } from '../../_metronic/layout';

type Tabs = 'Dashboard' | 'BookingRecords';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  activeTab: Tabs = 'Dashboard';
  model: any;
  @ViewChild('form', { static: true }) form: NgForm;
  configLoading: boolean = false;
  resetLoading: boolean = false;
  constructor(private layout: LayoutService) {}

  ngOnInit(): void {
    this.model = this.layout.getConfig();
  }

  setActiveTab(tab: Tabs) {
    this.activeTab = tab;
  }

  resetPreview(): void {
    this.resetLoading = true;
    this.layout.refreshConfigToDefault();
  }

  submitPreview(): void {
    this.configLoading = true;
    this.layout.setConfig(this.model);
    location.reload();
  }

  collapse(id: string){
    const div = document.querySelector(`div[aria-controls="${id}"]`);
    const icon = div?.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
    }
    document.getElementById(id)?.classList.toggle('show')
  }
}
