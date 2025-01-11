export interface UserProfileResponse {
    'id': string;
    'auth0_id': string;
    'name' : string;
    'email': string;
    'phone_number' : string;
    'profilePicUrl' : string;
  }

  export enum PolicyType {
    Health = "1",
    Auto = "2",
    Life = "3",
    Term = "4"
  }