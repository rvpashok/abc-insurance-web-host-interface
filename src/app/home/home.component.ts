import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonService } from '../services/common.service';
import { SharedService } from 'shared';
import { AnalyticsData } from '../model/common-models';

@Component({
  selector: 'app-home',
  imports: [CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public analyticsData : AnalyticsData  | any;

  constructor(private commonService: CommonService, private sharedService: SharedService) {
    
  }
  
  ngOnInit(): void {
    
    this.commonService.initializeSampleData();
    const dataKey = "analytics_claim_data";
    var analyticsDataStr = this.sharedService.getItem(dataKey);
    if(analyticsDataStr !== null){
      this.analyticsData = JSON.parse(analyticsDataStr?analyticsDataStr: "");
      this.calculateAnalyticMetrics( this.analyticsData)
    }


  }

  calculateAnalyticMetrics(analyticsData: AnalyticsData) {
    console.log("Analytics data calculate call to web-worker:");
    if (typeof Worker !== 'undefined' && analyticsData !== null) {
      const worker = new Worker(new URL('../analytics-web-worker.worker',  import.meta.url));

      worker.onmessage = ({ data }) => {
        this.analyticsData.totalActiveClaims = data.totalActiveClaims;
        this.analyticsData.totalProcessedClaims = data.totalProcessedClaims;
        this.analyticsData.totalAmountPaid = data.totalAmountPaid;
        console.log("Results from worker: " + data);
        worker.terminate();
      };
      worker.postMessage(analyticsData);
    } else {
      console.error('Web Workers are not supported in this environment.');
    }
}

}
