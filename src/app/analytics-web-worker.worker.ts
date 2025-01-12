/// <reference lib="webworker" />

import { AnalyticsData } from "./model/common-models";

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  var analyticsData = data;
  const totalActiveClaims = roundOffAnalyticsData(analyticsData["totalActiveClaims"]);
  const totalProcessedClaims = roundOffAnalyticsData(analyticsData["totalProcessedClaims"]);
  const totalAmountPaid = roundOffAnalyticsData(analyticsData["totalAmountPaid"]);
  const reponseObj = {} as { totalActiveClaims: number, totalProcessedClaims: number, totalAmountPaid: number };
  reponseObj["totalActiveClaims"] = totalActiveClaims;
  reponseObj["totalProcessedClaims"] = totalProcessedClaims;
  reponseObj["totalAmountPaid"] = totalAmountPaid;
  console.log("Analytics Value: "+ JSON.parse(JSON.stringify(reponseObj)));
  postMessage(reponseObj);
});


function roundOffAnalyticsData(analyticsCount: number){
  if(analyticsCount != null && analyticsCount != undefined){
    const placeValue = Math.pow(10, Math.floor(Math.log10(analyticsCount)));  // Find the place value (e.g., 10, 100, 1000)
    return Math.round(analyticsCount / placeValue) * placeValue;
  }
  return 0;
}
