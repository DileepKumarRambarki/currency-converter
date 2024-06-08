let dropBox=document.querySelectorAll(".drop-box");
const countryList = {
   AED: "AE",
   AFN: "AF",
   XCD: "AG",
   ALL: "AL",
   AMD: "AM",
   ANG: "AN",
   AOA: "AO",
   AQD: "AQ",
   ARS: "AR",
   AUD: "AU",
   AZN: "AZ",
   BAM: "BA",
   BBD: "BB",
   BDT: "BD",
   XOF: "BE",
   BGN: "BG",
   BHD: "BH",
   BIF: "BI",
   BMD: "BM",
   BND: "BN",
   BOB: "BO",
   BRL: "BR",
   BSD: "BS",
   NOK: "BV",
   BWP: "BW",
   BYR: "BY",
   BZD: "BZ",
   CAD: "CA",
   CDF: "CD",
   XAF: "CF",
   CHF: "CH",
   CLP: "CL",
   CNY: "CN",
   COP: "CO",
   CRC: "CR",
   CUP: "CU",
   CVE: "CV",
   CYP: "CY",
   CZK: "CZ",
   DJF: "DJ",
   DKK: "DK",
   DOP: "DO",
   DZD: "DZ",
   ECS: "EC",
   EEK: "EE",
   EGP: "EG",
   ETB: "ET",
   EUR: "FR",
   FJD: "FJ",
   FKP: "FK",
   GBP: "GB",
   GEL: "GE",
   GGP: "GG",
   GHS: "GH",
   GIP: "GI",
   GMD: "GM",
   GNF: "GN",
   GTQ: "GT",
   GYD: "GY",
   HKD: "HK",
   HNL: "HN",
   HRK: "HR",
   HTG: "HT",
   HUF: "HU",
   IDR: "ID",
   ILS: "IL",
   INR: "IN",
   IQD: "IQ",
   IRR: "IR",
   ISK: "IS",
   JMD: "JM",
   JOD: "JO",
   JPY: "JP",
   KES: "KE",
   KGS: "KG",
   KHR: "KH",
   KMF: "KM",
   KPW: "KP",
   KRW: "KR",
   KWD: "KW",
   KYD: "KY",
   KZT: "KZ",
   LAK: "LA",
   LBP: "LB",
   LKR: "LK",
   LRD: "LR",
   LSL: "LS",
   LTL: "LT",
   LVL: "LV",
   LYD: "LY",
   MAD: "MA",
   MDL: "MD",
   MGA: "MG",
   MKD: "MK",
   MMK: "MM",
   MNT: "MN",
   MOP: "MO",
   MRO: "MR",
   MTL: "MT",
   MUR: "MU",
   MVR: "MV",
   MWK: "MW",
   MXN: "MX",
   MYR: "MY",
   MZN: "MZ",
   NAD: "NA",
   XPF: "NC",
   NGN: "NG",
   NIO: "NI",
   NPR: "NP",
   NZD: "NZ",
   OMR: "OM",
   PAB: "PA",
   PEN: "PE",
   PGK: "PG",
   PHP: "PH",
   PKR: "PK",
   PLN: "PL",
   PYG: "PY",
   QAR: "QA",
   RON: "RO",
   RSD: "RS",
   RUB: "RU",
   RWF: "RW",
   SAR: "SA",
   SBD: "SB",
   SCR: "SC",
   SDG: "SD",
   SEK: "SE",
   SGD: "SG",
   SKK: "SK",
   SLL: "SL",
   SOS: "SO",
   SRD: "SR",
   STD: "ST",
   SVC: "SV",
   SYP: "SY",
   SZL: "SZ",
   THB: "TH",
   TJS: "TJ",
   TMT: "TM",
   TND: "TN",
   TOP: "TO",
   TRY: "TR",
   TTD: "TT",
   TWD: "TW",
   TZS: "TZ",
   UAH: "UA",
   UGX: "UG",
   USD: "US",
   UYU: "UY",
   UZS: "UZ",
   VEF: "VE",
   VND: "VN",
   VUV: "VU",
   YER: "YE",
   ZAR: "ZA",
   ZMK: "ZM",
   ZWD: "ZW",
 };
 
for(let select of dropBox)
{
   for(countrCode in countryList)
   {
      let newOption=document.createElement("option");
      newOption.innerText=countrCode;
      newOption.value=countrCode;
      select.append(newOption);
   }
}
let selected=(selectId,imgId)=>{
   let selectBox=document.querySelector(selectId);
   let value=selectBox.value;
   let img=document.querySelector(imgId);
   let countryImg=countryList[value.toUpperCase()];
   img.setAttribute("src",`https://flagsapi.com/${countryImg}/flat/64.png`);
}
let selectBox1=document.querySelector("#from-country");
selectBox1.addEventListener("change",()=>{
   selected("#from-country","#from-img");
});
let selectBox2=document.querySelector("#to-country");
selectBox2.addEventListener("change",()=>{
   selected("#to-country","#to-img");
   
});
let fromInput=document.querySelector("#from-input");
fromInput.addEventListener("input",async()=>{
   let toInput=document.querySelector("#to-input");
   let fromCountry=selectBox1.value.toUpperCase();
   let toCountry=selectBox2.value.toUpperCase();
   let rate;
   async function exchangerate(fromCountry,toCountry){
         let url=`https://api.exchangerate-api.com/v4/latest/${fromCountry}`;
         let promise=await fetch(url);
         let data=await promise.json();
         return data["rates"][toCountry];
         
   }
   let rateButton=document.querySelector("#rate");
   rate= await exchangerate(fromCountry,toCountry);
   rateButton.textContent=`1 ${fromCountry} = ${rate} ${toCountry}`
   toInput.value=fromInput.value*rate;

})
let convert=document.querySelector("#convert");

convert.addEventListener("click",async()=>{
   let fromInput=document.querySelector("#from-input");
   let toInput=document.querySelector("#to-input");
   let fromCountry=selectBox1.value.toUpperCase();
   let toCountry=selectBox2.value.toUpperCase();
   let rate;
   async function exchangerate(fromCountry,toCountry){
         url=`https://api.exchangerate-api.com/v4/latest/${fromCountry}`;
         let promise=await fetch(url);
         let data=await promise.json();
         return data["rates"][toCountry];
         
   }
    rateButton=document.querySelector("#rate");
   rate= await exchangerate(fromCountry,toCountry);
   rateButton.textContent=`1 ${fromCountry} = ${rate} ${toCountry}`
   toInput.value=fromInput.value*rate;



})

