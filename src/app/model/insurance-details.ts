import { PolicyType } from "./common-models";

export class InsuranceDetails {
    'policyDetails': PolicyDetails;
    'insuredDetails': InsuranceDetails;
    'claimHistory': ClaimHistory[];
    'paymentHistory': PaymentHistory[];

    constructor(policyDetails: PolicyDetails){
        this.policyDetails=policyDetails;
    }
  }

  export enum PolicyStatus {
    Active = "ACTIVE",
    Pending = "PENDING",
    Expired = "EXPIRED"
  }

  export enum PolicyFrequency {
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Yearly = "YEARLY"
  }

  export class PolicyDetails {
    'policyId': string;
    'policyStatus': PolicyStatus;
    'startDate': string;
    'expiryDate': string;
    'nextPremiumDate': string;
    'premiumAmount': number;
    'premiumFrequency': PolicyFrequency;
    'type': PolicyType

    constructor(policyId: string, policyStatus: PolicyStatus, startDate: string, nextPremiumDate: string,
        expiryDate: string, premiumAmount: number, premiumFrequency: PolicyFrequency, type: PolicyType){
        this.policyId=policyId;
        this.policyStatus =policyStatus;
        this.startDate=startDate;
        this.nextPremiumDate=nextPremiumDate;
        this.expiryDate=expiryDate;
        this.premiumAmount=premiumAmount;
        this.premiumFrequency=premiumFrequency;
        this.type=type;
    }

  }

  export class InsuredDetails {
    'userId': string;
    'firstName': string;
    'lastName': string;
    'age': number;
    'dob': string;
    'email': string;
    'phoneNumber': string;

    constructor(userId: string, firstName: string, lastName: string, 
        age: number, dob: string, email: string, phoneNumber: string) {
        this.userId=userId;
        this.firstName =firstName;
        this.lastName=lastName;
        this.age=age;
        this.dob=dob;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }
    
  }

  export class ClaimHistory {
    'userId': string;
    'claimId': string;
    'description': string;
    'amount': number;
    'registeredDate': string;
    'processedDate': string;

    constructor(userId: string, claimId: string, description: string, 
        amount: number, registeredDate: string, processedDate: string) {
        this.userId=userId;
        this.claimId =claimId;
        this.description=description;
        this.amount=amount;
        this.registeredDate=registeredDate;
        this.processedDate=processedDate;
    }
  }

  
  export class PaymentHistory {
    'userId': string;
    'paymentId': string;
    'bankName': string;
    'ifscCode': string;
    'transactionDate': string;
    'transactionId': string;
    'amount': number;

    constructor(userId: string, paymentId: string, bankName: string, 
        ifscCode: string, transactionDate: string, transactionId: string, amount: number) {
        this.userId=userId;
        this.paymentId =paymentId;
        this.bankName=bankName;
        this.ifscCode=ifscCode;
        this.transactionDate=transactionDate;
        this.transactionId=transactionId;
        this.amount=amount;
    }
  }

export { PolicyType };

