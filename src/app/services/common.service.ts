import { Injectable } from '@angular/core';
import { SharedService } from 'shared';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private sharedService: SharedService) { }

  initializeSampleData(){
    var health_U001_data = {"policyDetails":{"policyId":"P123456789","policyStatus":"ACTIVE","startDate":"2022-01-01","expiryDate":"2026-01-01","nextPremiumDate":"2025-06-01","premiumAmount":1200,"premiumFrequency":"YEARLY","type":"HEALTH"},"insuredDetails":{"userId":"U001","firstName":"John","lastName":"Doe","age":37,"dob":"1987-03-15","email":"john.doe@example.com","phoneNumber":"9876543210"},"claimHistory":[{"userId":"U001","claimId":"C001","description":"Emergency surgery","amount":5000,"registeredDate":"2022-05-01","processedDate":"2022-05-15"}],"paymentHistory":[{"userId":"U001","paymentId":"P001","bankName":"Bank of America","ifscCode":"BOA0001234","transactionDate":"2022-05-18","transactionId":"T001","amount":4000}]};
    this.sharedService.setItem("insurance_health_U001_data", health_U001_data);
  }
}
