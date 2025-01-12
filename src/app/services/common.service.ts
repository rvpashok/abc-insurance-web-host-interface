import { Injectable } from '@angular/core';
import { SharedService } from 'shared';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private sharedService: SharedService) { }

  initializeSampleData(){

    var analytics_claim_data = {"totalActiveClaims":233,"totalProcessedClaims":7177,"totalAmountPaid":88202345};
    this.sharedService.setItem("analytics_claim_data", analytics_claim_data);

    var health_U001_data = {"policyDetails":{"policyId":"P123456789","policyStatus":"ACTIVE","startDate":"2022-01-01","expiryDate":"2026-01-01","nextPremiumDate":"2025-06-01","premiumAmount":1200,"premiumFrequency":"YEARLY","type":1},"insuredDetails":{"userId":"677aa261f8934e7437eb6c37","firstName":"John","lastName":"Doe","age":37,"dob":"1987-03-15","email":"john.doe@example.com","phoneNumber":"9876543210"},"claimHistory":[{"userId":"677aa261f8934e7437eb6c37","claimId":"C001","description":"Emergency surgery","amount":5000,"registeredDate":"2022-05-01","processedDate":"2022-05-15"}],"paymentHistory":[{"userId":"677aa261f8934e7437eb6c37","paymentId":"P001","bankName":"Bank of America","ifscCode":"BOA0001234","transactionDate":"2022-05-18","transactionId":"T001","amount":4000}]};
    this.sharedService.setItem("insurance_health_677aa261f8934e7437eb6c37_data", health_U001_data);

    var auto_U001_data = {"policyDetails":{"policyId":"POL67890","policyStatus":"PENDING","startDate":"2024-02-01","expiryDate":"2029-02-01","nextPremiumDate":"2024-02-01","premiumAmount":2500,"premiumFrequency":"MONTHLY","type":2},"insuredDetails":{"userId":"677aa261f8934e7437eb6c37","firstName":"Alice","lastName":"Smith","age":28,"dob":"1995-11-10","email":"alice.smith@example.com","phoneNumber":"9876541234"},"claimHistory":[{"userId":"677aa261f8934e7437eb6c37","claimId":"CLM002","description":"Vehicle damage claim","amount":2000,"registeredDate":"2024-02-15","processedDate":"2024-02-18"}],"paymentHistory":[{"userId":"677aa261f8934e7437eb6c37","paymentId":"PAY002","bankName":"ICICI Bank","ifscCode":"ICIC0005678","transactionDate":"2024-02-01","transactionId":"TXN56789","amount":2500}]};
    this.sharedService.setItem("insurance_auto_677aa261f8934e7437eb6c37_data", auto_U001_data);

    var life_U001_data = {"policyDetails":{"policyId":"POL11223","policyStatus":"EXPIRED","startDate":"2019-03-01","expiryDate":"2024-03-01","nextPremiumDate":"2024-02-28","premiumAmount":5000,"premiumFrequency":"YEARLY","type":3},"insuredDetails":{"userId":"677aa261f8934e7437eb6c37","firstName":"Robert","lastName":"Brown","age":50,"dob":"1973-08-20","email":"robert.brown@example.com","phoneNumber":"9876512345"},"claimHistory":[],"paymentHistory":[{"userId":"677aa261f8934e7437eb6c37","paymentId":"PAY003","bankName":"SBI","ifscCode":"SBIN0012345","transactionDate":"2023-03-01","transactionId":"TXN99887","amount":5000}]};
    this.sharedService.setItem("insurance_life_677aa261f8934e7437eb6c37_data", life_U001_data);

    var term_U001_data = {"policyDetails":{"policyId":"POL44556","policyStatus":"ACTIVE","startDate":"2022-07-01","expiryDate":"2027-07-01","nextPremiumDate":"2024-07-01","premiumAmount":1200,"premiumFrequency":"MONTHLY","type":4},"insuredDetails":{"userId":"677aa261f8934e7437eb6c37","firstName":"Emily","lastName":"Davis","age":30,"dob":"1993-04-25","email":"emily.davis@example.com","phoneNumber":"9876509876"},"claimHistory":[],"paymentHistory":[{"userId":"677aa261f8934e7437eb6c37","paymentId":"PAY004","bankName":"Axis Bank","ifscCode":"UTIB0001234","transactionDate":"2023-07-01","transactionId":"TXN78654","amount":1200}]};
    this.sharedService.setItem("insurance_term_677aa261f8934e7437eb6c37_data", term_U001_data);


  }
}
