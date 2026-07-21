# AU Small Finance Bank -- UAT Bank Verification API Test Report

**Environment:** UAT\
**Prepared For:** AU Small Finance Bank\
**Module:** Bank Account Verification (Penny Drop & Penny Less)

---

# 1. Penny Drop API

## Endpoint

`https://api.auuat.bank.in/cbs/IMPSPennyDropService/pennydrop`

## Request Payload

```json
{
  "RemitterAccountNo": "1000000000000048",
  "RequestId": "12345654927",
  "OriginatingChannel": "CIB",
  "ReferenceNumber": "12345604327",
  "BeneficiaryAccountNo": "123456042",
  "TransactionBranch": "2011",
  "BeneficiaryIFSCCode": "DNSB0000001"
}
```

## Response

```json
{
  "retrievalRefNo": "620117296140",
  "MSGSTATUS": "SUCCESS",
  "resp": [
    {
      "respDesc": "Beneficiary Available",
      "benName": "Kiran Kumar",
      "respCode": "00"
    }
  ],
  "txnRefNo": "2620102994582375",
  "TXNID": "2620102994582376"
}
```

## Test Result

Field Value

---

API Status ✅ Success
Response Code 00
Response Message Beneficiary Available
Beneficiary Name Kiran Kumar
Transaction Status Successful

---

# 2. Penny Less (Beneficiary Name Inquiry)

## Endpoint

`https://api.auuat.bank.in/CBSIMPSBeneficiaryNameInqService/IMPSBeneficiary`

## Request Payload

```json
{
  "RemitterAccountNo": "2051220827230683",
  "BeneficiaryMobileNo": "",
  "RequestId": "3155233e-ca20-4fb5-a73c-a233ae84e8a5",
  "OriginatingChannel": "AUMB",
  "ReferenceNumber": "3155233e-ca20-4fb5-a73c-a233ae84e8a5",
  "BeneficiaryAccountNo": "123456080",
  "InquiryType": "BNR",
  "Remarks": "Validate Bank Account",
  "FlgIntraBankAllowed": "N",
  "PaymentMethod": "P2A",
  "RetrievalReferenceNumber": "6ee6f004-c076-4f60-bff7-4b947d7cc0ab",
  "TransactionBranch": "2011",
  "BeneficiaryIFSCCode": "UTIB0000004"
}
```

## Response

```json
{
  "BeneficiaryName": "KAJAL",
  "TransactionStatus": {
    "ResponseCode": "0",
    "ResponseMessage": "Success",
    "ExtendedErrorDetails": {
      "messages": [
        {
          "code": "00",
          "message": "Beneficiary Available"
        }
      ]
    }
  },
  "RetrievalReferenceNumber": "2620202994582638"
}
```

## Test Result

Field Value

---

API Status ✅ Success
Response Code 00
Response Message Beneficiary Available
Beneficiary Name KAJAL
Transaction Status Successful

---

# Summary

API Status Response Code Description

---

Penny Drop ✅ Success 00 Beneficiary Available
Penny Less ✅ Success 00 Beneficiary Available

---

# Conclusion

Both **Penny Drop** and **Penny Less (Beneficiary Name Inquiry)** APIs
were successfully tested in the **AU Small Finance Bank UAT**
environment.

Both APIs returned a successful response (`Response Code: 00`) and
correctly validated the beneficiary account details by returning the
beneficiary name. The integration is functioning as expected in the UAT
environment.
