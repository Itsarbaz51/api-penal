# AU Bank BBPS UAT API Logs

**Environment:** UAT\
**Prepared For:** AU Small Finance Bank

## 1. Get Biller List

**Endpoint** `https://api.auuat.bank.in/bbpsservice/getBillerList`
**Payload** - {
"RequestId": "098u090981",
"OriginatingChannel": "CRM",
"Header": {
"Ver": 1.051732e8,
"OrigInst": "AU01",
"RefId": "ABCDE12345ABCDE12345ABCDE1A0119234",
"TimeStamp": "2026-05-13T12:39:52+05:30"
},
"ReferenceNumber": "90999999",
"Search": {
"Category": "Education Fees",
"LastUpdated": ""
},
"ReportingParam": {
"MISClass": "TEST",
"MISCode": "TEST01"
},
"TransactionBranch": 1090
}

**Response**
{
"head": {
"refId": "ABCDE12345ABCDE12345ABCDE1A0119234",
"origInst": "AU01",
"ts": "2026-07-03T12:24:39",
"ver": "1.0"
},
"reason": {
"responseCode": "000",
"responseReason": "Successful"
},
"billers": [
{
"billerId": "GJIN00000KER01",
"billerName": " Carmel Public School,Vazhakulam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GJIN00000KER08",
"billerName": " St Joseph MHSS , Kuriachira",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GJIN00000KER09",
"billerName": " St Joseph Public School , Kuriachira",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "AESE00000KER02",
"billerName": "A E S English Medium School",
"billerAliasName": "A E S English Medium School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "AMMI00000NAT9D",
"billerName": "A M Mission School",
"billerAliasName": "A M Mission School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-07-2024"
},
{
"billerId": "AVEN00015ANP8N",
"billerName": "A Venkateswarulu Educational Trust",
"billerAliasName": "A Venkateswarulu Educational Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-01-2026"
},
{
"billerId": "APPFEE000KER01",
"billerName": "A.M.U.P.S., Melmuri South, Malappuram",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "AADA00000ASMNP",
"billerName": "Aadarsh Gurukul Senior Secondary School",
"billerAliasName": "Aadarsh Gurukul Senior Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-12-2023"
},
{
"billerId": "AHVKML000GUJ01",
"billerName": "Aamin Hindi Vidhyalay",
"billerAliasName": "Aamin Hindi Vidhyalay",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "AARA00000GUJ6U",
"billerName": "Aarav Muchhala International School",
"billerAliasName": "Aarav Muchhala International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "04-09-2023"
},
{
"billerId": "AART00000NAM80",
"billerName": "Aarthi Trust Hostel",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-08-2023"
},
{
"billerId": "AAST00000RAJ67",
"billerName": "Aastha Children Academy",
"billerAliasName": "Aastha Children Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-08-2023"
},
{
"billerId": "ABAC00000WBLWB",
"billerName": "Abacus Education",
"billerAliasName": "Abacus Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-12-2023"
},
{
"billerId": "ABCC00000PTNNS",
"billerName": "Abc College Of Education",
"billerAliasName": "Abc College Of Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-08-2023"
},
{
"billerId": "ABHI00000MAPUN",
"billerName": "Abhinav Public School Guna",
"billerAliasName": "Abhinav Public School Guna",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-10-2024"
},
{
"billerId": "ACAD00000BPL6M",
"billerName": "Academy Of Aviation And Engineering",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2020"
},
{
"billerId": "ACHI00000WBL7C",
"billerName": "Achieves",
"billerAliasName": "Achieves",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "17-02-2023"
},
{
"billerId": "ACHI00000WBL7C",
"billerName": "Achieves",
"billerAliasName": "Achieves",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "17-02-2023"
},
{
"billerId": "ACSE00000ERNFJ",
"billerName": "ACS English Medium Higher Secondary School",
"billerAliasName": "ACS English Medium Higher Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number (Eg:ACS)",
"lastUpdated": "20-10-2023"
},
{
"billerId": "ADAR00024UTP9K",
"billerName": "Adarsh Bal Shiksha Niketan",
"billerAliasName": "Adarsh Bal Shiksha Niketan",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-01-2026"
},
{
"billerId": "ADAR00025UTP35",
"billerName": "Adarsh Bal Shiksha Niketan Junior High School Raebareli",
"billerAliasName": "Adarsh Bal Shiksha Niketan Junior High School Raebareli",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-01-2026"
},
{
"billerId": "ADAR00000RAJ9F",
"billerName": "Adarsh Gramin Shikshan Samiti",
"billerAliasName": "Adarsh Gramin Shikshan Samiti",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2022"
},
{
"billerId": "ABLP02000KNLPI",
"billerName": "Adarsh Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ADAR00000NAT97",
"billerName": "Adarsh Shikshan Sewa Trust Aburoad",
"billerAliasName": "Adarsh Shikshan Sewa Trust Aburoad",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-11-2022"
},
{
"billerId": "ADHY00000SIKGS",
"billerName": "Adhyaan Kidzee",
"billerAliasName": "Adhyaan Kidzee",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-09-2023"
},
{
"billerId": "ADHY00000WBLYC",
"billerName": "Adhyayanindia Technologies Private Limited",
"billerAliasName": "Adhyayanindia Technologies Private Limited",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-07-2024"
},
{
"billerId": "ADHY00000WBLYC",
"billerName": "Adhyayanindia Technologies Private Limited",
"billerAliasName": "Adhyayanindia Technologies Private Limited",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-07-2024"
},
{
"billerId": "ADVA00000RIP4Y",
"billerName": "Advani Oerlikon Govt Hr Sec School",
"billerAliasName": "Advani Oerlikon Govt Hr Sec School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2023"
},
{
"billerId": "APPFEE000KER02",
"billerName": "AES Public School, Erumapetty",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "AISKML000RAJ01",
"billerName": "Agarwal International School Sanstha",
"billerAliasName": "Agarwal International School Sanstha",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "AVVKML000GUJ02",
"billerName": "Agrawal Vidya Vihar English Medium College",
"billerAliasName": "Agrawal Vidya Vihar English Medium College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "AKAS00000HARZU",
"billerName": "Akash Public School",
"billerAliasName": "Akash Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-04-2023"
},
{
"billerId": "APPFEE000KER03",
"billerName": "AKM Higher Secondary School, Kottakkal",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER04",
"billerName": "Akm Public School,Morkulangara",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER05",
"billerName": "Al Amal Public School, Nellikuzhi",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ALAN00000KARIO",
"billerName": "Al Anam Public School",
"billerAliasName": "Al Anam Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-09-2022"
},
{
"billerId": "APPFEE000KER06",
"billerName": "Al Aqsa Public School, Kathikode",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER07",
"billerName": "Al Badar Central School Malappuram",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER08",
"billerName": "Al Falah English School Peruvallur, Malappuram",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER09",
"billerName": "Al Falah Green Valley",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ALHU00000TELT9",
"billerName": "Al Huda Educational And Welfare Society",
"billerAliasName": "Al Huda Educational And Welfare Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "05-06-2024"
},
{
"billerId": "ALHU00000TELT9",
"billerName": "Al Huda Educational And Welfare Society",
"billerAliasName": "Al Huda Educational And Welfare Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "05-06-2024"
},
{
"billerId": "ALJA00000TNDFZ",
"billerName": "Al Jamieathus Sadhik Matriculation School",
"billerAliasName": "Al Jamieathus Sadhik Matriculation School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-05-2023"
},
{
"billerId": "APPFEE000KER32",
"billerName": "Al Manar Senior Secondary School, Erattupetta",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DKAFEE000KER10",
"billerName": "Al-Ameen College Edathala",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "BENB00000VIS77",
"billerName": "Alliance Educational Society",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ALPH00000GNR1M",
"billerName": "Alpha College Of Engineering And Technology Degree",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "ALPH00000GNRI8",
"billerName": "Alpha College Of Engineering And Technology Diploma",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "ALPH00000GNRAU",
"billerName": "Alpha Institue Of Architecture Studies",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "CLBKML000TEL11",
"billerName": "Alphores E-Techno School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ALUM00000MAHET",
"billerName": "Alumni Association Of Government Polytechnic Gondia",
"billerAliasName": "Alumni Association Of Government Polytechnic Gondia",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-02-2023"
},
{
"billerId": "APPFEE000KER65",
"billerName": "Amal English School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "AMBI00000HIPZI",
"billerName": "Ambition Classes",
"billerAliasName": "Ambition Classes",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-02-2023"
},
{
"billerId": "AMIFEE000UTP11",
"billerName": "Amity University Noida",
"billerAliasName": "Amity University Noida",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "AMRU00000AHDVT",
"billerName": "Amrut Higher Secocondary School Managed By Firdaus Memorial Charity And Edu Trust",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "AMRU00000AHDPR",
"billerName": "Amrut Pre Primary School Managed By Firdaus Memorial Charity And Education Trust",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "AMRU00000AHDH2",
"billerName": "Amrut Primary School Managed By Firdus Memorial Charity And Education Trust",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KAR01",
"billerName": "Amrutha Bharathi Vidya Kendra, Hagadur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ANIN00000WBL76",
"billerName": "An Institute Of Education And Skill Development",
"billerAliasName": "An Institute Of Education And Skill Development",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-07-2024"
},
{
"billerId": "ABLP01000WMDW8",
"billerName": "Anand College Of Education",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ANAN00000GNR1J",
"billerName": "Anand Niketan Bhadaj",
"billerAliasName": "Anand Niketan Bhadaj",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2020"
},
{
"billerId": "ANAN00000MAH6W",
"billerName": "Anand Niketan College Of Agriculture",
"billerAliasName": "Anand Niketan College Of Agriculture",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-01-2023"
},
{
"billerId": "ANAN00000AHD2U",
"billerName": "Anant National University",
"billerAliasName": "Anant National University",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-01-2022"
},
{
"billerId": "APPFEE000KER76",
"billerName": "Ananthapuri Cbse School, Trivandrum.",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ANAN00000KERVC",
"billerName": "Ananthapuri Primary School",
"billerAliasName": "Ananthapuri Primary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-01-2023"
},
{
"billerId": "ANAN00000KERVC",
"billerName": "Ananthapuri Primary School",
"billerAliasName": "Ananthapuri Primary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-01-2023"
},
{
"billerId": "ANGE00000THID5",
"billerName": "Angels Arc English Medium School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-11-2020"
},
{
"billerId": "ABLP01000WMDX7",
"billerName": "Anindita College For Teacher Education",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ANNA00000HYDEN",
"billerName": "Annapurna College Of Film And Media",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "ANUS00000INDY8",
"billerName": "Anusuiya School",
"billerAliasName": "Anusuiya School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "APAR00000NATSV",
"billerName": "Aparna Public School",
"billerAliasName": "Aparna Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-04-2022"
},
{
"billerId": "APOL00000KRN91",
"billerName": "Apollo English Medium School Nandigama",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2020"
},
{
"billerId": "APOL00000UTPBD",
"billerName": "Apollo Institute Of Professional Studies",
"billerAliasName": "Apollo Institute Of Professional Studies",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2024"
},
{
"billerId": "ARCA00000PTN80",
"billerName": "Arcade Business College",
"billerAliasName": "Arcade Business College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2020"
},
{
"billerId": "ARIV00000NATJ3",
"billerName": "Ariv Educaton Private Limited",
"billerAliasName": "Ariv Educaton Private Limited",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-05-2022"
},
{
"billerId": "ARUN00000GUJA0",
"billerName": "Arun Muchhala International School Chordi",
"billerAliasName": "Arun Muchhala International School Chordi",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-02-2023"
},
{
"billerId": "ARUN00000ARP9V",
"billerName": "Arun Valley Public School",
"billerAliasName": "Arun Valley Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-04-2023"
},
{
"billerId": "ARVI00000STR5K",
"billerName": "Arvind Gavali College of Engineering",
"billerAliasName": "Arvind Gavali College of Engineering",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-11-2021"
},
{
"billerId": "ARVI00000STRW6",
"billerName": "Arvind Gavali College of Pharmacy B Pharm",
"billerAliasName": "Arvind Gavali College of Pharmacy B Pharm",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-11-2021"
},
{
"billerId": "ARVI00000STRVC",
"billerName": "Arvind Gavali College of Pharmacy D Pharm",
"billerAliasName": "Arvind Gavali College of Pharmacy D Pharm",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-11-2021"
},
{
"billerId": "ARVI00000STRKT",
"billerName": "Arvind Gavali College of Pharmacy M Pharm",
"billerAliasName": "Arvind Gavali College of Pharmacy M Pharm",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-11-2021"
},
{
"billerId": "BLVFEE000KAR02",
"billerName": "Arvind International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-03-2021"
},
{
"billerId": "BLVFEE000KAR02",
"billerName": "Arvind International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-03-2021"
},
{
"billerId": "ASHT00000NWDNR",
"billerName": "Ashtavakra Institute Of Rehabilitation Sciences And Research",
"billerAliasName": "Ashtavakra Institute Of Rehabilitation Sciences And Research",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "ASIA00000AHDG7",
"billerName": "Asia English School (K G Section)",
"billerAliasName": "Asia English School (K G Section)",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-01-2022"
},
{
"billerId": "ASIA00000AHDRG",
"billerName": "Asia English School (Non- Granted)",
"billerAliasName": "Asia English School (Non- Granted)",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-01-2022"
},
{
"billerId": "ASIA00000AHD9S",
"billerName": "Asia English School (Primary Section)",
"billerAliasName": "Asia English School (Primary Section)",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-01-2022"
},
{
"billerId": "APPFEE000KER109",
"billerName": "Asian Aviation College Of Management Science Tvm",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ASIA00012ASMTB",
"billerName": "Asian Institute of Management and Technology",
"billerAliasName": "Asian Institute of Management and Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-01-2026"
},
{
"billerId": "ASRH00000WGDVY",
"billerName": "Asr Homeopathic Hospital And Medical College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "APPFEE000KER120",
"billerName": "ASSISI EMM HSS, Thalakkottukkara",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KAR02",
"billerName": "ASSISI,Bangalore",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER142",
"billerName": "Assumption Public School, Thelpara",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "AURI00019NATU0",
"billerName": "Auric world pvt ltd",
"billerAliasName": "Auric",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-12-2025"
},
{
"billerId": "APPFEE000KER153",
"billerName": "Auxilium School Thiruthiparambu Thrissur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "AVIA00000VISQH",
"billerName": "Aviation Institute Of Advanced Technology Educational Society",
"billerAliasName": "Aviation Institute Of Advanced Technology Educational Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "AVRM00000TNDZ7",
"billerName": "AVRMV Matriculation Higher Secondary School",
"billerAliasName": "AVRMV Matriculation Higher Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-04-2023"
},
{
"billerId": "AVRM00000TND3D",
"billerName": "AVRMV Nursery And Primary School",
"billerAliasName": "AVRMV Nursery And Primary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-04-2023"
},
{
"billerId": "AWAS00000BIHER",
"billerName": "Awasiya Delhi Public School",
"billerAliasName": "Awasiya Delhi Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-03-2023"
},
{
"billerId": "AWAS00000BIHER",
"billerName": "Awasiya Delhi Public School",
"billerAliasName": "Awasiya Delhi Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-03-2023"
},
{
"billerId": "BKCO00000KARQ8",
"billerName": "B K Convent High School Rabkavi",
"billerAliasName": "B K Convent High School Rabkavi",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-04-2023"
},
{
"billerId": "BKCO00000KARQ8",
"billerName": "B K Convent High School Rabkavi",
"billerAliasName": "B K Convent High School Rabkavi",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-04-2023"
},
{
"billerId": "BSSM00000JHAUB",
"billerName": "B S S Mahila College",
"billerAliasName": "B S S Mahila College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-09-2023"
},
{
"billerId": "BACH00000JPR2B",
"billerName": "Bachpan Shiksha Samiti",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "BAIT00000PKDRX",
"billerName": "Baitu Shariqa AL Khairi Trust",
"billerAliasName": "Baitu Shariqa AL Khairi Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2021"
},
{
"billerId": "BAJI00029MAH5V",
"billerName": "Bajiraoji Karanjekar College Of Pharmacy",
"billerAliasName": "Bajiraoji Karanjekar College Of Pharmacy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-12-2025"
},
{
"billerId": "BALB00000ALLX4",
"billerName": "Bal Bharti Nursery School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2020"
},
{
"billerId": "BALD00015NATJS",
"billerName": "Baldwin Boys High School",
"billerAliasName": "Baldwin Boys High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-12-2025"
},
{
"billerId": "BALD00018NAT9O",
"billerName": "Baldwin Coeducation Extension High School",
"billerAliasName": "Baldwin Coeducation Extension High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-12-2025"
},
{
"billerId": "BALD00011NATH7",
"billerName": "Baldwin Girls High School",
"billerAliasName": "Baldwin Girls High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-12-2025"
},
{
"billerId": "BANG00000KARJW",
"billerName": "Bangalore Nursing College",
"billerAliasName": "Bangalore Nursing College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-07-2024"
},
{
"billerId": "BAPU00000MAHVS",
"billerName": "Bapusaheb D D Vispute B ED College",
"billerAliasName": "Bapusaheb D D Vispute B ED College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-09-2023"
},
{
"billerId": "BAPU00000MAHVS",
"billerName": "Bapusaheb D D Vispute B ED College",
"billerAliasName": "Bapusaheb D D Vispute B ED College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-09-2023"
},
{
"billerId": "BDSM00000RAJN4",
"billerName": "Bds Memorial Academy",
"billerAliasName": "Bds Memorial Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-06-2023"
},
{
"billerId": "BENB00000CEN3E",
"billerName": "Be N By Ias",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "BEAN00000KNL18",
"billerName": "Beanstalk International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "BEDI00000WBLXG",
"billerName": "Bedibhawan Rabitirtha Vidyalaya HS",
"billerAliasName": "Bedibhawan Rabitirtha Vidyalaya HS",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-06-2024"
},
{
"billerId": "APPFEE000KER169",
"billerName": "Bekal International School ,Velutholichal",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "BELL00000MAP97",
"billerName": "Bellwether International School",
"billerAliasName": "Bellwether International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-06-2024"
},
{
"billerId": "ABLP01000WMDS9",
"billerName": "Bengal College Of Teacher Education",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KAR03",
"billerName": "Bengaluru Public School, Bangalore",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER170",
"billerName": "Bethany Central School, Nangyarkulangara",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP04000JAGF7",
"billerName": "Bethany Convent School",
"billerAliasName": "Bethany Convent School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER171",
"billerName": "Bethany St Johns English H S School ,Kunnamkulam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "BETH00000TND86",
"billerName": "Bethel Institute Of Basic Level Education For Mentally Retd Vellore",
"billerAliasName": "Bethel Institute Of Basic Level Education For Mentally Retd Vellore",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2022"
},
{
"billerId": "APPFEE000KAR04",
"billerName": "BGS World School, Mahalakshmipuram",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "BHAI00000ANAZG",
"billerName": "Bhaikaka University",
"billerAliasName": "Private University",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-11-2021"
},
{
"billerId": "CLBKML000WBL02",
"billerName": "Bhakti Vedanta National School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "BHAN00000AJMQ2",
"billerName": "Bhanwar Lal Gothi Public Sen Secondary School",
"billerAliasName": "Bhanwar Lal Gothi Public Sen Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2021"
},
{
"billerId": "BHAR00000UTPD6",
"billerName": "Bharat International School Pratapgarh",
"billerAliasName": "Bharat International School Pratapgarh",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-10-2023"
},
{
"billerId": "BHAR00000TND0A",
"billerName": "Bharat Vidya Mandir Matriculation School",
"billerAliasName": "Bharat Vidya Mandir Matriculation School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "BHAR00000TNDN8",
"billerName": "Bharath Institute of Higher Education Research",
"billerAliasName": "Bharath Institute of Higher Education Research",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-09-2022"
},
{
"billerId": "GJIN00000KER13",
"billerName": "Bharath Vidya Mandir,Valapad",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "BHAR00000JAKJO",
"billerName": "Bhartiya College Of Education",
"billerAliasName": "Bhartiya College Of Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2024"
},
{
"billerId": "BHAR00000JAKJO",
"billerName": "Bhartiya College Of Education",
"billerAliasName": "Bhartiya College Of Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2024"
},
{
"billerId": "BHAS00000JAK0K",
"billerName": "Bhaskar Educational Trust",
"billerAliasName": "Bhaskar Educational Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-09-2024"
},
{
"billerId": "BHAS00000HYD3V",
"billerName": "Bhaskar Engineering College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2020"
},
{
"billerId": "BHAS00000HYD9B",
"billerName": "Bhaskar Law College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2020"
},
{
"billerId": "BHAS00000HYDOY",
"billerName": "Bhaskar Medical College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2020"
},
{
"billerId": "BHAS00000HYDIA",
"billerName": "Bhaskar Pharmacy College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2020"
},
{
"billerId": "BHAT00000KARBU",
"billerName": "Bhat And Bhat Tutorial",
"billerAliasName": "Bhat And Bhat Tutorial",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-05-2023"
},
{
"billerId": "ABLP01000WMD9F",
"billerName": "Bhatter College Dantan",
"billerAliasName": "Bhatter College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2021"
},
{
"billerId": "BHAU00000UTPLR",
"billerName": "Bhaurav Devras Saraswati Vidya Mandir Noida",
"billerAliasName": "Bhaurav Devras Saraswati Vidya Mandir Noida",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2022"
},
{
"billerId": "APPFEE000KER172",
"billerName": "Bhavans Bala Mandir",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "BHON00000NGPT8",
"billerName": "Bhonsala Military School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-12-2020"
},
{
"billerId": "BHUJ00000MAHTY",
"billerName": "Bhujbal Academy Of Science And Commerce",
"billerAliasName": "Bhujbal Academy Of Science And Commerce",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-03-2025"
},
{
"billerId": "BIRFEE000IETAG",
"billerName": "BIR Tikendrajit University",
"billerAliasName": "BIR Tikendrajit University",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2021"
},
{
"billerId": "BIRB00000NATO6",
"billerName": "Birbhum Mahavidyalaya Suri",
"billerAliasName": "Birbhum Mahavidyalaya Suri",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-02-2023"
},
{
"billerId": "BIRB00000WBL4P",
"billerName": "Birbhum Vivekananda Homeopathic Medical College And Hospital",
"billerAliasName": "Birbhum Vivekananda Homeopathic Medical College And Hospital",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-09-2023"
},
{
"billerId": "BIRB00000WBL4P",
"billerName": "Birbhum Vivekananda Homeopathic Medical College And Hospital",
"billerAliasName": "Birbhum Vivekananda Homeopathic Medical College And Hospital",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-09-2023"
},
{
"billerId": "BIRB00000WBLI4",
"billerName": "Birbhum Vivekananda Homeopathic Medical College And Hospital",
"billerAliasName": "Birbhum Vivekananda Homeopathic Medical College And Hospital",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-09-2023"
},
{
"billerId": "BISH00000WBLNC",
"billerName": "Bishnupur Krittybash Mukherjee High School",
"billerAliasName": "Bishnupur Krittybash Mukherjee High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-07-2024"
},
{
"billerId": "BISH00000KTMYI",
"billerName": "Bishop Speechly College for Advance Studies",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number&amp;amp;amp;nbsp;( Eg: BSCAS ).\r",
"lastUpdated": "12-05-2022"
},
{
"billerId": "BISH00000KERK9",
"billerName": "Bishop Speechly Vidyapeeth",
"billerAliasName": "Bishop Speechly Vidyapeeth",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-04-2023"
},
{
"billerId": "EDU007764KER01",
"billerName": "Bishop Speechly Vidyapeeth",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-04-2024"
},
{
"billerId": "EDU007764KER01",
"billerName": "Bishop Speechly Vidyapeeth",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-04-2024"
},
{
"billerId": "APPFEE000KER173",
"billerName": "Bishop Vayalil Memorial Holy Cross College",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "BLOO00000MUM96",
"billerName": "Blooming Buds Pre School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-04-2021"
},
{
"billerId": "BLOO00000MUM96",
"billerName": "Blooming Buds Pre School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-04-2021"
},
{
"billerId": "BLOO00000MUM96",
"billerName": "Blooming Buds Pre School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "BLOO00000MUM96",
"billerName": "Blooming Buds Pre School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "BLOO00000MUME5",
"billerName": "Blooming Buds School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "BLOS00000RAJ4M",
"billerName": "Blossom Children Academy Mirzawali Mer",
"billerAliasName": "Blossom Children Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2022"
},
{
"billerId": "BLOS00000KERKV",
"billerName": "Blossom International Residential School",
"billerAliasName": "Blossom International Residential School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2022"
},
{
"billerId": "BLOS00000NGP88",
"billerName": "Blossom School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "BLOS00000SURU1",
"billerName": "Blossoms English Medium School",
"billerAliasName": "Blossoms English Medium School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "BLUE00000TELAG",
"billerName": "Blue Bells High School",
"billerAliasName": "Blue Bells High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-10-2022"
},
{
"billerId": "BLUE00000TELAG",
"billerName": "Blue Bells High School",
"billerAliasName": "Blue Bells High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-10-2022"
},
{
"billerId": "BLUE00000ASM8F",
"billerName": "Blue Pine English High School",
"billerAliasName": "Blue Pine English High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-03-2023"
},
{
"billerId": "BMRG00000NATRN",
"billerName": "BMR Global School",
"billerAliasName": "BMR Global School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-01-2023"
},
{
"billerId": "BOLP00000WBLQC",
"billerName": "Bolpur College",
"billerAliasName": "Bolpur College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-08-2024"
},
{
"billerId": "BRAH00000ODI0G",
"billerName": "BRAHMANAJHARILO MAHAVIDYALAYA",
"billerAliasName": "BRAHMANAJHARILO MAHAVIDYALAYA",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "BRAH00000ODI0G",
"billerName": "BRAHMANAJHARILO MAHAVIDYALAYA",
"billerAliasName": "BRAHMANAJHARILO MAHAVIDYALAYA",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "BRAI00000PONO2",
"billerName": "Brainy Blooms Lecole Internationale",
"billerAliasName": "BRIANY BLOOMS",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-01-2022"
},
{
"billerId": "BRAI00000TND4R",
"billerName": "Brainy Buds Pre School And Kinder Garten",
"billerAliasName": "Brainy Buds Pre School And Kinder Garten",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-09-2023"
},
{
"billerId": "BRCM00000SURML",
"billerName": "BRCM College Of Business Administration Student Welfare And Amenities Fund",
"billerAliasName": "Sarvajanik Education Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER174",
"billerName": "Brethren Ems Kumbanad, Pathanamthitta",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "BRIT00000JLDYM",
"billerName": "British Olivia School",
"billerAliasName": "British Olivia School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2020"
},
{
"billerId": "BRIT00000NATRF",
"billerName": "Britto Nursery And Primary School",
"billerAliasName": "Britto Nursery And Primary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-02-2023"
},
{
"billerId": "BROA00000SURNV",
"billerName": "Broadway International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "BROO00000CDR6O",
"billerName": "Brookfield International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-12-2020"
},
{
"billerId": "BUDH00000ANPXM",
"billerName": "Budha Educational Society Bobbili",
"billerAliasName": "Budha Educational Society Bobbili",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-02-2023"
},
{
"billerId": "BUDH00000NEWF2",
"billerName": "Budha Institute of Management and Technology",
"billerAliasName": "Gautam Budha Welfare and Education Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU018665WBL01",
"billerName": "Burdwan Model School",
"billerAliasName": "Burdwan Model School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-08-2024"
},
{
"billerId": "APPFEE000KER175",
"billerName": "BVB, Ponnani",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CABC00000RJK9A",
"billerName": "Cabcin - RK University Managed By Shri Shamjibhai Harjibhai Talavia Cht",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "CAMI00000ANAX9",
"billerName": "CAM Institute Of Allied Health Science And Technology",
"billerAliasName": "Private University",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-11-2021"
},
{
"billerId": "CAMB00000RAJU3",
"billerName": "Cambridge Convent School Bikaner",
"billerAliasName": "Cambridge Convent School Bikaner",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-10-2023"
},
{
"billerId": "CAMB00000SAGWP",
"billerName": "Cambridge Heights School",
"billerAliasName": "Cambridge Heights School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-09-2024"
},
{
"billerId": "CAMP00000GBD1S",
"billerName": "Campus Education Development Society",
"billerAliasName": "NIMT B School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CAMP00000GBDT9",
"billerName": "Campus School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER176",
"billerName": "Cardinal Higher Secondary School, Thrikkakara",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER177",
"billerName": "Cardinal Padiyara Public School &amp; Junior College",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CARE00000ANIZI",
"billerName": "Carey Memorial School",
"billerAliasName": "Carey Memorial School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-05-2023"
},
{
"billerId": "APPFEE000KER178",
"billerName": "Carmel Cbse School, Trivandrum",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER179",
"billerName": "Carmel Convent English Medium School ,Thadiyoor",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER181",
"billerName": "Carmel English Medium School ,Thakazhi",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER180",
"billerName": "Carmel English Medium School Ochanthuruth, Ernakulam.",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CATE00000KERSM",
"billerName": "Caterpillarz Prep School",
"billerAliasName": "Caterpillarz Prep School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-05-2023"
},
{
"billerId": "CENT00000MAP0G",
"billerName": "Central Academy HR SEC School Shahdol",
"billerAliasName": "Central Academy HR SEC School Shahdol",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-04-2023"
},
{
"billerId": "CLBKML000TND01",
"billerName": "Century Foundation Nursery and Primary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000TND02",
"billerName": "Century Foundation Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CHAN00000MOHB5",
"billerName": "Chandigarh University",
"billerAliasName": "Chandigarh University",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CHAT00000MUMVA",
"billerName": "Chatrabhuj Narsee School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU014431TEL01",
"billerName": "Chavara Academy Mavala",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-06-2024"
},
{
"billerId": "CHHO00000DELY9",
"billerName": "Chhotu Ram Rural Institute Of Technology",
"billerAliasName": "Chhotu Ram Rural Institute Of Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-01-2025"
},
{
"billerId": "CHIG00000ANP9Q",
"billerName": "Chigurupati Sri Krishnaveni Talent School Poranki",
"billerAliasName": "Chigurupati Sri Krishnaveni Talent School Poranki",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-03-2022"
},
{
"billerId": "CHIN00000KERFD",
"billerName": "Chinmaya College of Arts Commerce and Science",
"billerAliasName": "Chinmaya College of Arts Commerce and Science",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-04-2023"
},
{
"billerId": "CHIN00000KERRO",
"billerName": "Chinmaya Vidyalaya Karamcode Alappuzha",
"billerAliasName": "Chinmaya Vidyalaya Karamcode Alappuzha",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-10-2023"
},
{
"billerId": "APPFEE000KER182",
"billerName": "Chinmaya Vidyalaya Kalladathur, Palakkad",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CHIN00000KERFU",
"billerName": "Chinmaya Vidyalaya Pallavur",
"billerAliasName": "Chinmaya Vidyalaya Pallavur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-10-2023"
},
{
"billerId": "GJIN00000KER04",
"billerName": "CHMKMHSS,Vadakkumbad ",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KAR05",
"billerName": "Christ Global Residential School, Bangalore",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DKAFEE000ASS02",
"billerName": "Christ Jyothi School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "CHRI00000NATXU",
"billerName": "Christian College Chengannur",
"billerAliasName": "Christian College Chengannur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "CITY00000JAURZ",
"billerName": "City International School",
"billerAliasName": "City International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2023"
},
{
"billerId": "EDU015244UTP01",
"billerName": "City International School",
"billerAliasName": "City International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-01-2026"
},
{
"billerId": "CITY00000NEDC6",
"billerName": "City Modern Public School Sadatpur Extension",
"billerAliasName": "City Modern Public School Sadatpur Extension",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-03-2022"
},
{
"billerId": "CITY00000NAT9R",
"billerName": "City Public School",
"billerAliasName": "City Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2022"
},
{
"billerId": "CLAR00000KARXE",
"billerName": "Clarence English School",
"billerAliasName": "Clarence English School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2022"
},
{
"billerId": "CLAR00000KARXE",
"billerName": "Clarence English School",
"billerAliasName": "Clarence English School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2022"
},
{
"billerId": "COGN00000NATG2",
"billerName": "Cognito Softech Private Ltd",
"billerAliasName": "Cognito_Softech",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-04-2022"
},
{
"billerId": "COGN00000NATG2",
"billerName": "Cognito Softech Private Ltd",
"billerAliasName": "Cognito_Softech",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-04-2022"
},
{
"billerId": "ABLP01000WMDLV",
"billerName": "College For Teacher Education",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "COLL00000KER05",
"billerName": "College Of Applied Science Kaduthuruthy",
"billerAliasName": "College Of Applied Science Kaduthuruthy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-04-2023"
},
{
"billerId": "COLL00000KER19",
"billerName": "College Of Applied Science Perissery",
"billerAliasName": "College Of Applied Science Perissery",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-04-2023"
},
{
"billerId": "COLL00000KERYW",
"billerName": "College Of Applied Science Vattamkulam",
"billerAliasName": "College Of Applied Science Vattamkulam",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2022"
},
{
"billerId": "COLL00000NATU3",
"billerName": "College Of Engineering Chengannur",
"billerAliasName": "College Of Engineering Chengannur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "COLL00000KERUY",
"billerName": "College Of Engineering Poonjar",
"billerAliasName": "College Of Engineering Poonjar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-04-2023"
},
{
"billerId": "CONT00000NATN3",
"billerName": "Continuing Education Centre Gptc Nedumanagad",
"billerAliasName": "Continuing Education Centre Gptc Nedumanagad",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "CORN00000KER1A",
"billerName": "Cornerstone Proclamations Trusts Cornerstone International School",
"billerAliasName": "Cornerstone Proclamations Trusts Cornerstone International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-09-2024"
},
{
"billerId": "CORN00000NATB9",
"billerName": "Cornerstone School",
"billerAliasName": "Cornerstone School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2023"
},
{
"billerId": "COUN00000SUR91",
"billerName": "Countryside International School Adm",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "COUN00000SURW1",
"billerName": "Countryside International School Meal And Transport Fees",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "COUN00000SURXD",
"billerName": "Countryside International School Pre Primary Education",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "COUN00000SUR0F",
"billerName": "Countryside International School Primary Education",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "CRES00000KERJV",
"billerName": "Crescent College Of Nursing",
"billerAliasName": "Crescent College Of Nursing",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-03-2023"
},
{
"billerId": "CRES00000KERJV",
"billerName": "Crescent College Of Nursing",
"billerAliasName": "Crescent College Of Nursing",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-03-2023"
},
{
"billerId": "EDU001355ANI01",
"billerName": "Crescent Public School Port Blair",
"billerAliasName": "Crescent Public School Port Blair",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-04-2024"
},
{
"billerId": "CRES00000AHDM4",
"billerName": "Crescent School",
"billerAliasName": "Crescent School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "CLBKML000TND04",
"billerName": "Crescent School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CRYS00000NATH1",
"billerName": "Crystal System",
"billerAliasName": "Crystal System",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2022"
},
{
"billerId": "CYAN00000WBLWV",
"billerName": "Cyanvas Ankan Siksha Kendra",
"billerAliasName": "Cyanvas Ankan Siksha Kendra",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-09-2023"
},
{
"billerId": "ABLP01000JMUQL",
"billerName": "Cybernetics Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DPTI00000JPROZ",
"billerName": "D P Tiwari Medical And Nursing Educational Institute",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DPTI00000JPRK1",
"billerName": "D P Tiwari School Of Nursing",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DAFF00000JHA7M",
"billerName": "Daffodil High School",
"billerAliasName": "Daffodil High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-06-2022"
},
{
"billerId": "DAFF00000JHA7M",
"billerName": "Daffodil High School",
"billerAliasName": "Daffodil High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-06-2022"
},
{
"billerId": "DARA00000ANI36",
"billerName": "Dar Al Arqam Public School",
"billerAliasName": "Dar Al Arqam Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2022"
},
{
"billerId": "DARS00024NATT0",
"billerName": "Darsh Universal School",
"billerAliasName": "Darsh Universal School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-01-2026"
},
{
"billerId": "DARU00000KERBZ",
"billerName": "Darul Aman English Medium School",
"billerAliasName": "Darul Aman English Medium School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2023"
},
{
"billerId": "DATT00000WBLKQ",
"billerName": "Dattas Study Circle Maryland",
"billerAliasName": "Dattas Study Circle Maryland",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-07-2024"
},
{
"billerId": "DATT00000WBLKQ",
"billerName": "Dattas Study Circle Maryland",
"billerAliasName": "Dattas Study Circle Maryland",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-07-2024"
},
{
"billerId": "DAVP00000MAHO9",
"billerName": "DAV Public School Fee",
"billerAliasName": "DAV Public School Fee Pay",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-11-2022"
},
{
"billerId": "APPFEE000KER190",
"billerName": "Davis English Medium School, Changaramkulam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER191",
"billerName": "De Paul Em School, Moonnammoodu, Trivandrum",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER192",
"billerName": "De Paul English Medium Hss,Choondal",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER193",
"billerName": "De Paul English Medium Icse School,choondal",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DKAFEE000KER03",
"billerName": "De Paul Higher Secondary School,",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "DEAN00000GUJIA",
"billerName": "DEAN GMERS MCPG FEES",
"billerAliasName": "DEAN GMERS MCPG FEES",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-03-2023"
},
{
"billerId": "DEEK00000TELZH",
"billerName": "Deeksha High School",
"billerAliasName": "Deeksha High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2024"
},
{
"billerId": "DELH00000VIS6Q",
"billerName": "Delhi Public International School",
"billerAliasName": "Delhi Public International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "DELH00000GAUWQ",
"billerName": "Delhi Public School - Greater Noida",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-12-2020"
},
{
"billerId": "DELH00000NATU6",
"billerName": "Delhi Public School - KPV",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-12-2020"
},
{
"billerId": "CLBKML000TEL22",
"billerName": "Delhi Public School - Warangal",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DELH00000UTPYO",
"billerName": "Delhi Public School Bulandshahr",
"billerAliasName": "Dps Bulandshahr",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-11-2022"
},
{
"billerId": "DELH00000CUTBQ",
"billerName": "Delhi Public School Kalinga",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-11-2020"
},
{
"billerId": "DELH00000UTT81",
"billerName": "Delhi Public School Rudrapur",
"billerAliasName": "Dps Rudrapur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2022"
},
{
"billerId": "DELH00000PTN72",
"billerName": "Delhi world Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DELH00000HYDWV",
"billerName": "Delhi World School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-11-2020"
},
{
"billerId": "DEVI00000BLR4C",
"billerName": "Dev In National School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DEVS00000RAJ73",
"billerName": "Dev Shikshan Sansthan Khinwara",
"billerAliasName": "Dev Shikshan Sansthan Khinwara",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "APPFEE000KER194",
"billerName": "Devamata Convent School ,Kollam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DHAN00000JODXT",
"billerName": "Dhanraj School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-12-2020"
},
{
"billerId": "DHAN00000UTTUB",
"billerName": "Dhanvantri Public School",
"billerAliasName": "Dhanvantri Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-02-2023"
},
{
"billerId": "DHEE00000NATXZ",
"billerName": "Dheeran Chinnamalai International Residential School",
"billerAliasName": "Dheeran Chinnamalai International Residential School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-03-2023"
},
{
"billerId": "DITU00000UTTI9",
"billerName": "DIT University",
"billerAliasName": "DIT University",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-03-2023"
},
{
"billerId": "DITU00000UTTI9",
"billerName": "DIT University",
"billerAliasName": "DIT University",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-03-2023"
},
{
"billerId": "DIVY00000GUJ56",
"billerName": "Divya Chetna BRS College Bhetali",
"billerAliasName": "Divya Chetna BRS College Bhetali",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-09-2023"
},
{
"billerId": "ABLP05000WGD2Q",
"billerName": "DNR College MBA Course A/C",
"billerAliasName": "DNR College MBA Course A/C",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2021"
},
{
"billerId": "ABLP05000WGD7C",
"billerName": "DNR College MCA General Fee Funds A/C",
"billerAliasName": "DNR College MCA General Fee Funds A/C",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2021"
},
{
"billerId": "ABLP05000WGD7Z",
"billerName": "DNR College Of Engineering And Technology A/C Tuition Fee",
"billerAliasName": "DNR College Of Engineering And Technology A/C Tuition Fee",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2021"
},
{
"billerId": "ABLP05000WGDW5",
"billerName": "DNR College Of Engineering And Technology A/C Tuition Fee MBA",
"billerAliasName": "DNR College Of Engineering And Technology A/C Tuition Fee MBA",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2021"
},
{
"billerId": "ABLP05000WGD4U",
"billerName": "DNR College Of Law",
"billerAliasName": "DNR College Of Law",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2021"
},
{
"billerId": "ABLP05000WGD5X",
"billerName": "DNR College Un Aided Section Fee Ac",
"billerAliasName": "DNR College Un Aided Section Fee Ac",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2021"
},
{
"billerId": "DNYA00000MAHJU",
"billerName": "Dnyansagar Shikshan Prasarak Mandal",
"billerAliasName": "Dnyansagar Shikshan Prasarak Mandal",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-10-2023"
},
{
"billerId": "DOLP00000BIHCX",
"billerName": "Dolphin Public School",
"billerAliasName": "Dolphin Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-09-2022"
},
{
"billerId": "DHSKML000RAJ02",
"billerName": "Dolphins High School",
"billerAliasName": "Dolphins High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "DISKML000RAJ03",
"billerName": "Dolphins International School Ck",
"billerAliasName": "Dolphins International School Ck",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "DIRKML000RAJ04",
"billerName": "Dolphins International School Rajapark",
"billerAliasName": "Dolphins International School Rajapark",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "DKAFEE000ASS01",
"billerName": "Don Bosco Higher Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "DOON00000BIH6H",
"billerName": "Doon Public School",
"billerAliasName": "Doon Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-08-2022"
},
{
"billerId": "DOON00000BIH6H",
"billerName": "Doon Public School",
"billerAliasName": "Doon Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-08-2022"
},
{
"billerId": "DOUB00000NATLJ",
"billerName": "Doubtnut",
"billerAliasName": "CLASS 21A TECHNOLOGIES PRIVATE LIMITED",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-05-2021"
},
{
"billerId": "DOUB00000NATLJ",
"billerName": "Doubtnut",
"billerAliasName": "CLASS 21A TECHNOLOGIES PRIVATE LIMITED",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-05-2021"
},
{
"billerId": "DOUB00000NATLJ",
"billerName": "Doubtnut",
"billerAliasName": "CLASS 21A TECHNOLOGIES PRIVATE LIMITED",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-05-2021"
},
{
"billerId": "DPSG00000GNR6N",
"billerName": "Dps - Gandhinagar",
"billerAliasName": "Dps - Gandhinagar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "GJIN00000KER22",
"billerName": "DR N International School,North Paravur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DRSH00000BPLCU",
"billerName": "Dr Shankar Dayal Sharma College Of Nursing",
"billerAliasName": "Dr Shankar Dayal Sharma College Of Nursing",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "DRHR00000KACYN",
"billerName": "Dr. H R Gajwani College Of Education",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DRHR00000KACWS",
"billerName": "Dr. H R Gajwani Primary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER195",
"billerName": "Dr. Z.H.M.B.V.V Changanassery, Kottayam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DRIE00000ODIF6",
"billerName": "DRIEMS",
"billerAliasName": "DRIEMS",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-12-2024"
},
{
"billerId": "DUKH00000WBLEF",
"billerName": "Dukhulal Nibaran Chandra College",
"billerAliasName": "Dukhulal Nibaran Chandra College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2022"
},
{
"billerId": "DUNL00000NATG5",
"billerName": "Dunlop English Medium School",
"billerAliasName": "Dunlop English Medium School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-12-2022"
},
{
"billerId": "DURG00000NAT2F",
"billerName": "Durgapur Institute Of Legal Studies",
"billerAliasName": "Durgapur Institute Of Legal Studies",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-03-2023"
},
{
"billerId": "DURG00000NATFU",
"billerName": "Durgapur Institute Of Nursing Sciences",
"billerAliasName": "Durgapur Institute Of Nursing Sciences",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2023"
},
{
"billerId": "DURG00000NATHE",
"billerName": "Durgapur Private Iti",
"billerAliasName": "Durgapur Private Iti",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-02-2023"
},
{
"billerId": "DVMP00000BIHE8",
"billerName": "DVM Public School Siwan",
"billerAliasName": "DVM Public School Siwan",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-10-2023"
},
{
"billerId": "EDUC00016NAT7X",
"billerName": "Education World Public School",
"billerAliasName": "Education World Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-01-2026"
},
{
"billerId": "EDUS00000NATM6",
"billerName": "Eduslive Private Limited",
"billerAliasName": "Eduslive Private Limited",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-03-2023"
},
{
"billerId": "EILKML000GUJ03",
"billerName": "Eduworld Infusion Limited",
"billerAliasName": "Eduworld Infusion Limited",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "EDWI00000RAJPB",
"billerName": "Edwin Public School Bhim",
"billerAliasName": "Edwin Public School Bhim",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-10-2023"
},
{
"billerId": "EKLA00000MAPBO",
"billerName": "Eklavya Higher Secondary School Shamgarh",
"billerAliasName": "Eklavya Higher Secondary School Shamgarh",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-03-2023"
},
{
"billerId": "EMER00000IND51",
"billerName": "Emerald Heights Boarding Unit",
"billerAliasName": "Emerald Heights Boarding Unit Of S U Real Estate Developers Pvt Ltd",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "APPFEE000KER196",
"billerName": "Eminent Model School ,Enathu",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EMSC00000NATWX",
"billerName": "EMS College Of Paramedical Science",
"billerAliasName": "EMS College Of Paramedical Science",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2023"
},
{
"billerId": "ENTR00000WBL1V",
"billerName": "Entrance Academy",
"billerAliasName": "Entrance Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-10-2023"
},
{
"billerId": "EURO00000RAJ77",
"billerName": "Euro International School",
"billerAliasName": "Euro International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-01-2023"
},
{
"billerId": "EVER00000RAJCP",
"billerName": "Evergreen English Academy Desuri",
"billerAliasName": "Evergreen English Academy Desuri",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "APPFEE000KER197",
"billerName": "Evershine Residential School, Pathanamthitta",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER198",
"billerName": "Fact Public School Udyogamandal, Ernakulam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "FACU00000RJK1K",
"billerName": "Faculty Of Medicine - Shri Shamjibhai Harjibhai Talaviya Charitable Trust",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "APPFEE000KER199",
"billerName": "Fathima Matha Higher Secondary School, Malappuram",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "FDRS00000RJKLC",
"billerName": "Fdrs Faculty Of Doctoral Studies And Research - Rk University",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "FIRD00000AHD3Q",
"billerName": "Firdaus Amrut Centre School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER200",
"billerName": "Floreat International School, Pulikkal",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "FLOR00000JAK3M",
"billerName": "Florence Nightingale School Of Nursing Kathua",
"billerAliasName": "Florence Nightingale School Of Nursing Kathua",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-04-2023"
},
{
"billerId": "APPFEE000KER201",
"billerName": "Focus Islamic English Medium Hss, Thottap",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "FOOD00000KERM1",
"billerName": "Food Craft Institute Kottayam",
"billerAliasName": "Food Craft Institute Kottayam",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-10-2023"
},
{
"billerId": "FOOD00000KEROJ",
"billerName": "Food Craft Institute Perinthalmanna",
"billerAliasName": "Food Craft Institute Perinthalmanna",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-10-2023"
},
{
"billerId": "FOOD00000ERN2J",
"billerName": "FoodCraftInstituteKalamassery",
"billerAliasName": "FoodCraftInstituteKalamassery",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2023"
},
{
"billerId": "FOST00000MAP1M",
"billerName": "Foster Kids Play School Chhatarpur",
"billerAliasName": "Foster Kids Play School Chhatarpur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2024"
},
{
"billerId": "APPFEE000KER202",
"billerName": "Fr. Thomas Porukara Central School, Alapuzha",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GJIN00000KER11",
"billerName": "Fr.Paul Chittilappilly Memorial Public School, Engandiyur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "FRAN00000NEWT8",
"billerName": "Frankfinn Institute Of Airhostess Training",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-11-2021"
},
{
"billerId": "GBPA00000UTTGB",
"billerName": "G B Pant Engineering College",
"billerAliasName": "G B Pant Engineering College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-02-2023"
},
{
"billerId": "GDSH00000RAJE5",
"billerName": "G D Shiksha Sanstha",
"billerAliasName": "G D Shiksha Sanstha",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-02-2023"
},
{
"billerId": "GHPA00000ANARZ",
"billerName": "G H Patel College Of Nursing",
"billerAliasName": "school",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-11-2021"
},
{
"billerId": "GKIN00000PATL3",
"billerName": "G K Institute Of Commerce",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "GRAM00000COIIQ",
"billerName": "G Ramasamy Institutional Services Private Limited",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number&amp;amp;amp;nbsp;( Eg: ).\r",
"lastUpdated": "12-05-2022"
},
{
"billerId": "GSPU00000RAJUE",
"billerName": "G S Public School",
"billerAliasName": "G S Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-09-2022"
},
{
"billerId": "GSPKML000MAH01",
"billerName": "Ga Shah English Primary School",
"billerAliasName": "Ga Shah English Primary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-09-2020"
},
{
"billerId": "GAJW00000KAC1H",
"billerName": "Gajwani International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GAJW00000KACDN",
"billerName": "Gajwani Pre Primary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GALA00000HYDW5",
"billerName": "Galaxy College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2020"
},
{
"billerId": "GALA00000HIP3A",
"billerName": "Galaxy Education Society",
"billerAliasName": "Galaxy Education Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "GAND00000KNLVP",
"billerName": "Gandhi College Of Nursing",
"billerAliasName": "Gandhi College Of Nursing",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "GAND00000KNLT5",
"billerName": "Gandhi School Of Nursing",
"billerAliasName": "Gandhi School Of Nursing",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2020"
},
{
"billerId": "GAND00000HYD57",
"billerName": "Gandikota Management Academy",
"billerAliasName": "Gandikota Management Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "OMNS00000AHD71",
"billerName": "Gangaba Preprimary School Managed by Gangaba Foundation",
"billerAliasName": "school",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SANF00000AHDW6",
"billerName": "Gangaba School Managed by Gangaba Kanyashala Trust",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GANG00000KAROM",
"billerName": "Gangothri School of Nursing",
"billerAliasName": "Gangothri School of Nursing",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-07-2024"
},
{
"billerId": "GANG00000NATN4",
"billerName": "Ganguria Sri Sri Saradatirtham",
"billerAliasName": "Ganguria Sri Sri Saradatirtham",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2022"
},
{
"billerId": "GANI00000NATAA",
"billerName": "GANIT Coaching Institute",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2020"
},
{
"billerId": "GDEKML000ANP01",
"billerName": "Gdmm College Of Engineering And Technology",
"billerAliasName": "Gdmm College Of Engineering And Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "GCNKML000ANP02",
"billerName": "Gdmm College Of Nursing",
"billerAliasName": "Gdmm College Of Nursing",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "GPCKML000ANP03",
"billerName": "Gdmm Polytechnic College",
"billerAliasName": "Gdmm Polytechnic College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "GEET00000TELS2",
"billerName": "Geethanjali Robotic School",
"billerAliasName": "Geethanjali Robotic School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-05-2024"
},
{
"billerId": "GEET00000GUN0X",
"billerName": "GEETHIKA SCHOOL PIDUGURALLA",
"billerAliasName": "GEETHIKA SCHOOL PIDUGURALLA",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-11-2023"
},
{
"billerId": "APPFEE000KER203",
"billerName": "Gems English School Maniyanodi, Kasaragod",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GHPA00000ANA82",
"billerName": "GH Patel School Of Nursing",
"billerAliasName": "school",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-11-2021"
},
{
"billerId": "GITI00000ASMBJ",
"billerName": "Git Institutes Pvt Ltd-Opc",
"billerAliasName": "Git Institutes Pvt Ltd-Opc",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-03-2023"
},
{
"billerId": "ABLP03000BLR1V",
"billerName": "Global Academy of Technology",
"billerAliasName": "Global Academy of Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GLOB00000NATYP",
"billerName": "Global Education And Management Studies Co Operative Ltd",
"billerAliasName": "Global Education And Management Studies Co Operative Ltd",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "04-03-2023"
},
{
"billerId": "APPFEE000KER204",
"billerName": "Global Public School ,Cherpu",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GLOR00000MAHRG",
"billerName": "Glorious Academy Chandrapur",
"billerAliasName": "Glorious Academy Chandrapur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2024"
},
{
"billerId": "APPFEE000KER205",
"billerName": "Gods Own Public School, Aluva, Ernakulam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER206",
"billerName": "Golden Central School, Puthur, Malappuram.",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER207",
"billerName": "Good Hope English Medium School, Nilambur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER209",
"billerName": "Goodhope School,Cheravallur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP01000WMD2Y",
"billerName": "Gopsai Avinandan Sangha PTTI",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GOVE00000CHHRO",
"billerName": "Government Arts Science Commerce College Dharamjaigarh",
"billerAliasName": "Government Arts Science Commerce College Dharamjaigarh",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-03-2023"
},
{
"billerId": "GOVE00000MAP4U",
"billerName": "Government College Ghuwara",
"billerAliasName": "Government College Ghuwara",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "GOVE00000MAH71",
"billerName": "Government College Of Engineering Ratnagiri Fees",
"billerAliasName": "Government College Of Engineering Ratnagiri Fees",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-02-2023"
},
{
"billerId": "GOVE00000ANPVU",
"billerName": "Government Degree College Sathyavedu",
"billerAliasName": "Government Degree College Sathyavedu",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2024"
},
{
"billerId": "GOVE00000NATS6",
"billerName": "Government Engineering College Kozhikode Mess Account",
"billerAliasName": "Government Engineering College Kozhikode Mess Account",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-03-2023"
},
{
"billerId": "GOVE00000NATCH",
"billerName": "Government Girls Degree College, DLW, Varanasi",
"billerAliasName": "Government Girls Degree College, DLW, Varanasi",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "17-02-2023"
},
{
"billerId": "GOVE00000MAPCW",
"billerName": "Government Girls PG College Chhatarpur",
"billerAliasName": "Government Girls PG College Chhatarpur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-03-2023"
},
{
"billerId": "GOVE00000CHHBX",
"billerName": "Government Higher Secondary School Dhumma",
"billerAliasName": "Government Higher Secondary School Dhumma",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2022"
},
{
"billerId": "GOVE00000WBLRV",
"billerName": "Government ITI Howrah Homes",
"billerAliasName": "Government ITI Howrah Homes",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-05-2022"
},
{
"billerId": "GOVE00000NATQJ",
"billerName": "Government ITI Sagardighi Running Under PTP",
"billerAliasName": "Government ITI Sagardighi Running Under PTP",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-03-2025"
},
{
"billerId": "GOVE00000MAPAQ",
"billerName": "Government Madhav Arts and Commerce College",
"billerAliasName": "Government Madhav Arts and Commerce College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-09-2022"
},
{
"billerId": "GOVE00000CHH2O",
"billerName": "Government Paluram Dhanania Commerce and Arts College Raigarh",
"billerAliasName": "Government Paluram Dhanania Commerce and Arts College Raigarh",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2023"
},
{
"billerId": "GOVE00000KARKU",
"billerName": "Government Paramedical College Navanagar Bagalkot",
"billerAliasName": "Government Paramedical College Navanagar Bagalkot",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-02-2023"
},
{
"billerId": "GOVE00000PARR6",
"billerName": "GovernmentPolytechnicJintur",
"billerAliasName": "GovernmentPolytechnicJintur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2023"
},
{
"billerId": "GOVT00000MAPB1",
"billerName": "Govt College Jaitpur",
"billerAliasName": "Govt College Jaitpur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-04-2023"
},
{
"billerId": "GOVT00000CHHVX",
"billerName": "Govt College Tamnar",
"billerAliasName": "Govt College Tamnar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-03-2023"
},
{
"billerId": "GOVT00000UTTOJ",
"billerName": "Govt Institute Of Hotel Management Catering Technology And Applied Nutrition",
"billerAliasName": "Govt Institute Of Hotel Management Catering Technology And Applied Nutrition",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-02-2023"
},
{
"billerId": "GOVT00000MAPVQ",
"billerName": "Govt Naveen College Baxwaha",
"billerAliasName": "Govt Naveen College Baxwaha",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-03-2023"
},
{
"billerId": "GOVT00000MAPVQ",
"billerName": "Govt Naveen College Baxwaha",
"billerAliasName": "Govt Naveen College Baxwaha",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-03-2023"
},
{
"billerId": "GOVT00000MAPYH",
"billerName": "Govt Naveen Mahavidyalaya Chandla",
"billerAliasName": "Govt Naveen Mahavidyalaya Chandla",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-03-2023"
},
{
"billerId": "GOVT00000ODILV",
"billerName": "Govt Poly Technic Nayagarh",
"billerAliasName": "Govt Poly Technic Nayagarh",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "GOVT00000HARDX",
"billerName": "Govt Polytechnic for Women",
"billerAliasName": "Govt Polytechnic for Women",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-03-2023"
},
{
"billerId": "GOVT00000UTT9C",
"billerName": "Govt Polytechnic Narendranagar",
"billerAliasName": "Govt Polytechnic Narendranagar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-02-2023"
},
{
"billerId": "GOVT00000MAP6E",
"billerName": "Govt Sanskrit College Ujjain",
"billerAliasName": "Govt Sanskrit College Ujjain",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-06-2023"
},
{
"billerId": "APPFEE000KER210",
"billerName": "Grace Mount Residential School, Kumbanad",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER211",
"billerName": "Grace Public School, Vypin, Ernakulam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER212",
"billerName": "Grace Valley Public School, Maravattam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GREE00000RAJRU",
"billerName": "Green Friendly Seva Samiti",
"billerAliasName": "Green Friendly Seva Samiti",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "ABLP05000WGDQL",
"billerName": "Green Royal Academy Of Pharm Education And Sciences",
"billerAliasName": "Green Royal Academy Of Pharm Education And Sciences",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GREE00000CHEM6",
"billerName": "Green Valley Central School",
"billerAliasName": "Green Valley Central School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-01-2022"
},
{
"billerId": "GREE00000RAJT2",
"billerName": "Green Venus Public School",
"billerAliasName": "Green Venus Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "APPFEE000KER213",
"billerName": "Greenwoods Arts And Science College For Women",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER215",
"billerName": "Gregorian Central School, Nalunnakkal, Kottayam.",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GSSS00000PUNIV",
"billerName": "GSSS Guruharsahai",
"billerAliasName": "GSSS Guruharsahai",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-03-2023"
},
{
"billerId": "GSSS00000PUNUT",
"billerName": "GSSS MEHMA",
"billerAliasName": "GSSS MEHMA",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-03-2023"
},
{
"billerId": "GUJA00000AHDCD",
"billerName": "Gujarat Power Engineering And Research Institute Managed By Gtu",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-12-2020"
},
{
"billerId": "GUPT00000JAKDV",
"billerName": "Gupta Institute of Paramedical and Allied Health Sciences",
"billerAliasName": "Gupta Institute of Paramedical and Allied Health Sciences",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-02-2023"
},
{
"billerId": "APPFEE000TND01",
"billerName": "Guru Saraan Public School, Coimbatore",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GURU00000BPL4E",
"billerName": "Gurukul College Of Education",
"billerAliasName": "Gurukul College Of Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "ABLP01000KTA8Y",
"billerName": "Gurukul Living Solutions",
"billerAliasName": "Kokoon Hostels",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER216",
"billerName": "Gurukulam Vidyanikethan Ems Wandoor, Malappuram.",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GVMS00000NATDT",
"billerName": "GVMS KG And Primary School",
"billerAliasName": "GVMS KG And Primary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2023"
},
{
"billerId": "CLBKML000UTP05",
"billerName": "Gyan Anant Vidyalaya",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GYAN00000KARZ7",
"billerName": "Gyanbharti Vidyamandir Higher Primary School",
"billerAliasName": "Gyanbharti Vidyamandir Higher Primary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-01-2023"
},
{
"billerId": "GYAN00000UTPKR",
"billerName": "Gyandeep Academy School and Hostel Varanasi",
"billerAliasName": "Gyandeep Academy School and Hostel Varanasi",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2022"
},
{
"billerId": "GYAN00000UTP4B",
"billerName": "Gyandeep Academy School and Hostel Varanasi",
"billerAliasName": "Gyandeep Academy School and Hostel Varanasi",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2022"
},
{
"billerId": "GYAN00000AHD49",
"billerName": "Gyanodaya English Medium Primary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GYAN00000AHDDX",
"billerName": "Gyanodaya Shishu Mandir",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "HMDE00000KAR09",
"billerName": "H M Devendra Jinagouda English Medium High School",
"billerAliasName": "H M Devendra Jinagouda English Medium High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "04-11-2023"
},
{
"billerId": "HMDE00000KAR09",
"billerName": "H M Devendra Jinagouda English Medium High School",
"billerAliasName": "H M Devendra Jinagouda English Medium High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "04-11-2023"
},
{
"billerId": "HMPA00000ANALN",
"billerName": "H M Patel Institute Of Post Graduate Studies",
"billerAliasName": "school",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-11-2021"
},
{
"billerId": "HVKA00000SURAC",
"billerName": "H V Kachhadiya Civilize Modern School English Medium",
"billerAliasName": "H V Kachhadiya Civilize Modern School English Medium",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "HVKA00000SUR2Q",
"billerName": "H V Kachhadiya Civilize Modern School Gujarati Medium",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2020"
},
{
"billerId": "HAMA00000BSRMT",
"billerName": "Ham Academy",
"billerAliasName": "Ham Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2023"
},
{
"billerId": "HAMA00000BSRMT",
"billerName": "Ham Academy",
"billerAliasName": "Ham Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2023"
},
{
"billerId": "HAMA00000BSRMT",
"billerName": "Ham Academy",
"billerAliasName": "Ham Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-12-2023"
},
{
"billerId": "HAMA00000BSRMT",
"billerName": "Ham Academy",
"billerAliasName": "Ham Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-12-2023"
},
{
"billerId": "HAPP00000RAJNV",
"billerName": "Happy Bal Mandir School Pali",
"billerAliasName": "Happy Bal Mandir School Pali",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-11-2022"
},
{
"billerId": "HAPP00000RAJNV",
"billerName": "Happy Bal Mandir School Pali",
"billerAliasName": "Happy Bal Mandir School Pali",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-11-2022"
},
{
"billerId": "HAPP00000RAJNV",
"billerName": "Happy Bal Mandir School Pali",
"billerAliasName": "Happy Bal Mandir School Pali",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "HAPP00000RAJNV",
"billerName": "Happy Bal Mandir School Pali",
"billerAliasName": "Happy Bal Mandir School Pali",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "HAPP00000JAKJB",
"billerName": "Happy Home Academy High School",
"billerAliasName": "Happy Home Academy High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "HARI00000WBL1L",
"billerName": "Harishchandrapur College",
"billerAliasName": "Harishchandrapur College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-09-2024"
},
{
"billerId": "CLBKML000MAH07",
"billerName": "Harmony International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000MAH01",
"billerName": "Harmony International School-Ahmednagar",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000MAH08",
"billerName": "Harmony School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000MAH09",
"billerName": "Harmony School and Jr.College",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "HAYA00000THRAD",
"billerName": "Hayath Charitable Trust Global Public School",
"billerAliasName": "Hayath Charitable Trust Global Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2023"
},
{
"billerId": "HBRE00000CHHZ4",
"billerName": "HBR English Medium School Bilha",
"billerAliasName": "HBR English Medium School Bilha",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-04-2023"
},
{
"billerId": "HBRE00000CHHZ4",
"billerName": "HBR English Medium School Bilha",
"billerAliasName": "HBR English Medium School Bilha",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-04-2023"
},
{
"billerId": "APPFEE000KER217",
"billerName": "Hidayath English Medium School, Kannur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "HILL00000MAHWX",
"billerName": "Hill Range High School Panchagani",
"billerAliasName": "Hill Range High School Panchagani",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-09-2023"
},
{
"billerId": "HILL00000KER0I",
"billerName": "Hill top public school trust of education",
"billerAliasName": "Hill top public school trust of education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "26-09-2023"
},
{
"billerId": "HILL00000KER0I",
"billerName": "Hill top public school trust of education",
"billerAliasName": "Hill top public school trust of education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "26-09-2023"
},
{
"billerId": "HILL00000KER0I",
"billerName": "Hill top public school trust of education",
"billerAliasName": "Hill top public school trust of education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "26-09-2023"
},
{
"billerId": "APPFEE000KER218",
"billerName": "Hill Top Public School, Cheruvadi, Kozhikode.",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER219",
"billerName": "Hill Valley Higher Secondary School Thrikakkara",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "HKER00000BID9V",
"billerName": "HKERS National English Medium Public School Bidar",
"billerAliasName": "HKERS National English Medium Public School Bidar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-11-2023"
},
{
"billerId": "HOLY00000WGD7B",
"billerName": "Holy Angels English Medium School Sidhantham",
"billerAliasName": "Holy Angels English Medium School Sidhantham",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2023"
},
{
"billerId": "HOLY00000JHAX5",
"billerName": "Holy Child School",
"billerAliasName": "Holy Child School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-02-2023"
},
{
"billerId": "HOLY00000KARI5",
"billerName": "Holy Cross College Of Nursing",
"billerAliasName": "Holy Cross College Of Nursing",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-12-2024"
},
{
"billerId": "HOLY00000KARMK",
"billerName": "Holy Cross School Of Nursing",
"billerAliasName": "Holy Cross School Of Nursing",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "05-02-2025"
},
{
"billerId": "HOLY00000KERHP",
"billerName": "Holy Grace Academy Of Management Studies",
"billerAliasName": "Holy Grace Academy Of Management Studies",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-04-2023"
},
{
"billerId": "HOLY00000TRIW6",
"billerName": "Holy Spirit School",
"billerAliasName": "Holy Spirit School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2024"
},
{
"billerId": "EDU014741TRI01",
"billerName": "Holy Spirit School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-09-2024"
},
{
"billerId": "HOLY00000WESPL",
"billerName": "Holychild Sr. Sec. School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "HOLY00000PAP2D",
"billerName": "HolyCrossHrSecSchool",
"billerAliasName": "HolyCrossHrSecSchool",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2023"
},
{
"billerId": "ICAR00000MAH7H",
"billerName": "ICAR Agricultural Technology Application Research Atari",
"billerAliasName": "ICAR Agricultural Technology Application Research Atari",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-02-2023"
},
{
"billerId": "ICAR00000MEGG1",
"billerName": "Icar Neh Regeion",
"billerAliasName": "Icar Neh Regeion",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-04-2023"
},
{
"billerId": "ICHKML000MAH02",
"billerName": "Ice College Of Hotel Management",
"billerAliasName": "Ice College Of Hotel Management",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "ICCKML000MAH03",
"billerName": "Ice College Of Hotel Management And Catering Technology",
"billerAliasName": "Ice College Of Hotel Management And Catering Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "CLBKML000ANP02",
"billerName": "Icon Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER223",
"billerName": "Ideal Higher Secondary School Kadakkasery, Malappuram",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER224",
"billerName": "Identity College Vatakara, Kozhikode",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER225",
"billerName": "IESEHSS, Thrithala",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER226",
"billerName": "IG English School, Karukaputhur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ILEA00000KOLAL",
"billerName": "iLead Foundation",
"billerAliasName": "iLead Foundation",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "IMBS00000ODIEF",
"billerName": "Imb School Of Hospitality",
"billerAliasName": "Imb School Of Hospitality",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2020"
},
{
"billerId": "INDI00000JPRWL",
"billerName": "Indian Digital Academy Of Skills And Enterprenureship",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "INDI00000KER0K",
"billerName": "Indian Institute Of Distance Education And Placement Services IIDEPS",
"billerAliasName": "Indian Institute Of Distance Education And Placement Services IIDEPS",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-04-2023"
},
{
"billerId": "INDI00000NATWK",
"billerName": "Indian Institute Of Mass Communication",
"billerAliasName": "Indian Institute Of Mass Communication",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-08-2022"
},
{
"billerId": "INDI00000NATWK",
"billerName": "Indian Institute Of Mass Communication",
"billerAliasName": "Indian Institute Of Mass Communication",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-08-2022"
},
{
"billerId": "INDI00000JABF7",
"billerName": "Indian Public Higher Secondary",
"billerAliasName": "Indian Public Higher Secondary",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "INDKML000RAJ05",
"billerName": "Indian School",
"billerAliasName": "Indian School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "INDI00000NATAO",
"billerName": "Indian Sports Academy Salem",
"billerAliasName": "Indian Sports Academy Salem",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "",
"lastUpdated": "05-02-2025"
},
{
"billerId": "INSKML000RAJ06",
"billerName": "Indian Sr Sec School",
"billerAliasName": "Indian Sr Sec School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "APPFEE000KER227",
"billerName": "Indira Gandhi Public School, Mambaram, Kannur.",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "INDO00000CDRZT",
"billerName": "Indo Global Education Foundation",
"billerAliasName": "Indo Global Education Foundation",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2020"
},
{
"billerId": "INDO00000KHODZ",
"billerName": "Indo Science Academy",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-11-2020"
},
{
"billerId": "APPFEE000KER228",
"billerName": "Infant Jesus Bethany Convent E.M.L.P School, Mnkd",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "INGR00000UTPCH",
"billerName": "Ingraham Institute Senior Secondary School",
"billerAliasName": "Ingraham Institute Senior Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-04-2022"
},
{
"billerId": "INNO00000RJKVH",
"billerName": "Innotal R K University - Shtc Rajkot",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "INSP00000DGLK2",
"billerName": "Inspiria Knowledge Campus",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "04-03-2021"
},
{
"billerId": "INSP00000DGLK2",
"billerName": "Inspiria Knowledge Campus",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "04-03-2021"
},
{
"billerId": "ABLP01000WMDXF",
"billerName": "Institute For Teacher Education",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "INST00000BPLGL",
"billerName": "Institute Of Aeronautics And Engineering",
"billerAliasName": "Institute Of Aeronautics And Engineering",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2020"
},
{
"billerId": "INST00000WBL1N",
"billerName": "Institute Of Hotel And Restaurant Management",
"billerAliasName": "Institute Of Hotel And Restaurant Management",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-09-2023"
},
{
"billerId": "INST00000ODIZH",
"billerName": "Institute Of Management Bhubaneswar",
"billerAliasName": "Institute Of Management Bhubaneswar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2020"
},
{
"billerId": "ABLP01000WMDTL",
"billerName": "Institute Of Science And Technology.",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP01000WOU12",
"billerName": "Institute Of Science And Technology.",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "INST00000VAD0R",
"billerName": "Institute Of Technology And Management Universe",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "INST00000PUN5Q",
"billerName": "Institution Of Agricultural Technologists",
"billerAliasName": "Institution Of Agricultural Technologists",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-01-2022"
},
{
"billerId": "INTE00000WBLIY",
"billerName": "Intellection Knowledge Campus Pvt Ltd",
"billerAliasName": "Intellection Knowledge Campus Pvt Ltd",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-09-2023"
},
{
"billerId": "IRIKML000RAJ07",
"billerName": "Iris College",
"billerAliasName": "Iris College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "ISRA00000PRAA8",
"billerName": "ISRA Academy",
"billerAliasName": "ISRA Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2023"
},
{
"billerId": "APPFEE000KER236",
"billerName": "Iss Senior Secondary School, Perinthalmanna",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ITMS00000VADT8",
"billerName": "ITM School Of Pharmacy",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ITMS00000VADJR",
"billerName": "ITM Sls Baroda University",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "IVYW00000JLDQ3",
"billerName": "Ivy World School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "JBIN00000HYD1Y",
"billerName": "J B Institute Of Engineering And Technology",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2020"
},
{
"billerId": "APPFEE000KER237",
"billerName": "Jaimatha Senior Secondary School,Uliyathaduka",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "JAIN00000MAH4O",
"billerName": "Jain Social Federations Anand Rishiji Nursing College",
"billerAliasName": "Jain Social Federations Anand Rishiji Nursing College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2022"
},
{
"billerId": "JAIN00000MAH4O",
"billerName": "Jain Social Federations Anand Rishiji Nursing College",
"billerAliasName": "Jain Social Federations Anand Rishiji Nursing College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2022"
},
{
"billerId": "JAMI00000KER3Q",
"billerName": "Jamia Badriya Arabic College",
"billerAliasName": "Jamia Badriya Arabic College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-04-2023"
},
{
"billerId": "JANK00000SURW9",
"billerName": "Jan Kalyan Mission Foundation",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "JAWA00000MUM95",
"billerName": "Jawahar Vidyalaya High School",
"billerAliasName": "Jawahar Vidyalaya High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2020"
},
{
"billerId": "APPFEE001KER12",
"billerName": "JEEVASS CMI CENTRAL SCHOOL ALUVA",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-05-2024"
},
{
"billerId": "APPFEE001KER12",
"billerName": "JEEVASS CMI CENTRAL SCHOOL ALUVA",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-10-2024"
},
{
"billerId": "APPFEE001KER12",
"billerName": "JEEVASS CMI CENTRAL SCHOOL ALUVA",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "04-10-2024"
},
{
"billerId": "APPFEE001KER12",
"billerName": "JEEVASS CMI CENTRAL SCHOOL ALUVA",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "04-10-2024"
},
{
"billerId": "APPFEE001KER12",
"billerName": "JEEVASS CMI CENTRAL SCHOOL ALUVA",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-10-2024"
},
{
"billerId": "JERU00000KERSX",
"billerName": "Jeruselam Mount H S S",
"billerAliasName": "Jeruselam Mount H S S",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "17-03-2023"
},
{
"billerId": "JERU00000KERSX",
"billerName": "Jeruselam Mount H S S",
"billerAliasName": "Jeruselam Mount H S S",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "17-03-2023"
},
{
"billerId": "JERU00000KERSX",
"billerName": "Jeruselam Mount H S S",
"billerAliasName": "Jeruselam Mount H S S",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2023"
},
{
"billerId": "JERU00000KERSX",
"billerName": "Jeruselam Mount H S S",
"billerAliasName": "Jeruselam Mount H S S",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2023"
},
{
"billerId": "ABLP04000BLRLD",
"billerName": "Jindal Public School",
"billerAliasName": "Jindal Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "JNAF00000TELGJ",
"billerName": "JNAFAU College Of Fine Arts Examination Fee",
"billerAliasName": "JNAFAU College Of Fine Arts Examination Fee",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2023"
},
{
"billerId": "JNAF00000TELEK",
"billerName": "JNAFAU College Of Fine Arts Examinations Acc",
"billerAliasName": "JNAFAU College Of Fine Arts Examinations Acc",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2023"
},
{
"billerId": "JNAF00000TELG2",
"billerName": "JNAFAU College Of Fine Arts Infrastructure Fee",
"billerAliasName": "JNAFAU College Of Fine Arts Infrastructure Fee",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-09-2023"
},
{
"billerId": "JNAF00000TELAD",
"billerName": "JNAFAU College Of Fine Arts Tution Fee",
"billerAliasName": "JNAFAU College Of Fine Arts Tution Fee",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2023"
},
{
"billerId": "JNAF00000TELZX",
"billerName": "JNAFAU School Of Planning And Architecture Development Acc",
"billerAliasName": "JNAFAU School Of Planning And Architecture Development Acc",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2023"
},
{
"billerId": "JNAF00000TELZX",
"billerName": "JNAFAU School Of Planning And Architecture Development Acc",
"billerAliasName": "JNAFAU School Of Planning And Architecture Development Acc",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2023"
},
{
"billerId": "JNAF00000TELRV",
"billerName": "JNAFAU School Of Planning And Architecture Miscellaneous Acc",
"billerAliasName": "JNAFAU School Of Planning And Architecture Miscellaneous Acc",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2023"
},
{
"billerId": "JNAF00000TELX8",
"billerName": "JNAFAU School Of Planning And Architecture Sss Acc",
"billerAliasName": "JNAFAU School Of Planning And Architecture Sss Acc",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2023"
},
{
"billerId": "JNAF00000TELCK",
"billerName": "JNAFAU School Of Planning And Architecture Tution Fee",
"billerAliasName": "JNAFAU School Of Planning And Architecture Tution Fee",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2023"
},
{
"billerId": "JNAN00000NATI0",
"billerName": "Jnanamandira Degree College",
"billerAliasName": "Jnanamandira Degree College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-11-2022"
},
{
"billerId": "JNAN00000NATOF",
"billerName": "Jnanamandira Pu College",
"billerAliasName": "Jnanamandira Pu College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "GJIN00000KER19",
"billerName": "Jnanodaya Central School,Kalady",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "JNTU00000TELUK",
"billerName": "JNTUH University College of Engineering Sultanpur",
"billerAliasName": "Lal Bahadur College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2022"
},
{
"billerId": "JNTU00000TELAR",
"billerName": "JNTUH University College Of Engineering Sultanpur Development Fee Account",
"billerAliasName": "JNTUH University College Of Engineering Sultanpur Development Fee Account",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-11-2022"
},
{
"billerId": "JNTU00000TEL10",
"billerName": "JNTUH University College Of Engineering Sultanpur Hostel Account",
"billerAliasName": "JNTUH University College Of Engineering Sultanpur Hostel Account",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-11-2022"
},
{
"billerId": "JNTU00000TEL10",
"billerName": "JNTUH University College Of Engineering Sultanpur Hostel Account",
"billerAliasName": "JNTUH University College Of Engineering Sultanpur Hostel Account",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-11-2022"
},
{
"billerId": "JOGI00000HYDOA",
"billerName": "Joginpally Br Engineering College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2020"
},
{
"billerId": "JOGI00000HYDQ2",
"billerName": "Joginpally Br Pharmacy College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2020"
},
{
"billerId": "EDU011008MEG01",
"billerName": "Jowai Public School",
"billerAliasName": "Jowai Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-04-2024"
},
{
"billerId": "JUBI00000GUNR8",
"billerName": "Jubilation Academy",
"billerAliasName": "Jubilation Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2020"
},
{
"billerId": "GJIN00000KER05",
"billerName": "Jyothi Nivas Public School,Aluva",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GJIN00000KER15",
"billerName": "Jyothis Central School,Manjapra",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "JYOT00000RAJAG",
"billerName": "Jyoti Vidhyapeeth Bali Jassakhera",
"billerAliasName": "Jyoti Vidhyapeeth Bali Jassakhera",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-10-2023"
},
{
"billerId": "KMPA00000ANAD6",
"billerName": "K M Patel Institute Of Physio Therapy",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-11-2021"
},
{
"billerId": "KJIN00000VADKF",
"billerName": "K J Institute Of Ayurveda And Research",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KKGC00000TND90",
"billerName": "K K G College Of Education",
"billerAliasName": "K K G College Of Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-09-2023"
},
{
"billerId": "KPPU00000UTPMZ",
"billerName": "K P Public School Pratapgarh",
"billerAliasName": "K P Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-02-2023"
},
{
"billerId": "KPPU00000UTPMZ",
"billerName": "K P Public School Pratapgarh",
"billerAliasName": "K P Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-02-2023"
},
{
"billerId": "KSPA00000RJKX6",
"billerName": "K S Patel Centre Of Entrepreneurship - Shtctrust",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "KSRC00000NAM7X",
"billerName": "K S R College Of Education",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "17-03-2021"
},
{
"billerId": "KSRC00000NAM7X",
"billerName": "K S R College Of Education",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "17-03-2021"
},
{
"billerId": "KSRC00000NAM7X",
"billerName": "K S R College Of Education",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KSRC00000NAM7X",
"billerName": "K S R College Of Education",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KSRC00000NAM4R",
"billerName": "K.S.R. College Arts And Science For Women",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KSRI00000NAMR0",
"billerName": "K.S.R. Institute Of Dental Science And Research",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2021"
},
{
"billerId": "KSRI00000NAMR0",
"billerName": "K.S.R. Institute Of Dental Science And Research",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2021"
},
{
"billerId": "KSRP00000NAM6Z",
"billerName": "K.S.R. Polytechnic College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KSRA00000NAMYL",
"billerName": "K.S.Rangasamy College Of Arts And Science",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KSRA00000NAMOT",
"billerName": "K.S.Rangasamy Institute Of Technology",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KAKA00000KRNZ4",
"billerName": "Kakatiya School Of Excellence Nandigama",
"billerAliasName": "KSEN",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "KALR00000VADUG",
"billerName": "Kalrav Balmandir",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-11-2020"
},
{
"billerId": "KALY00000WBLOZ",
"billerName": "Kalyani Mahavidyalaya",
"billerAliasName": "Kalyani Mahavidyalaya",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-09-2023"
},
{
"billerId": "KAMA00013KAR7U",
"billerName": "Kamadhenu Educational Society",
"billerAliasName": "Kamadhenu Educational Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-01-2026"
},
{
"billerId": "KAMA00000MUM82",
"billerName": "Kamala Ashish No 3 Co Operative Housing Society Limited",
"billerAliasName": "Kamala Ashish No 3 Co Operative Housing Society Limited",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "KAMP00000ASMKT",
"billerName": "Kampur College",
"billerAliasName": "Kampur College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-04-2023"
},
{
"billerId": "KANY00000RJKWQ",
"billerName": "Kanya Chhatralay Shree Vallabh Kanya Kelawani Mandal",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "KAPI00000WBL37",
"billerName": "Kapileswar Ghoshal Memorial And Welfare Trust",
"billerAliasName": "Kapileswar Ghoshal Memorial And Welfare Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-08-2024"
},
{
"billerId": "KDBP00000GBDQT",
"billerName": "Kdb Public School",
"billerAliasName": "Kdb Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "KENM00000CHHUQ",
"billerName": "Ken Memorial School Suryapara",
"billerAliasName": "Ken Memorial School Suryapara",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "KEND00000NATB5",
"billerName": "Kendriya Vidyala Sangathan",
"billerAliasName": "Kendriya Vidyala Sangathan",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-06-2023"
},
{
"billerId": "KEND00000NATB5",
"billerName": "Kendriya Vidyala Sangathan",
"billerAliasName": "Kendriya Vidyala Sangathan",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-06-2023"
},
{
"billerId": "KEND00000NATB5",
"billerName": "Kendriya Vidyala Sangathan",
"billerAliasName": "Kendriya Vidyala Sangathan",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-06-2023"
},
{
"billerId": "KEND00000NATB5",
"billerName": "Kendriya Vidyala Sangathan",
"billerAliasName": "Kendriya Vidyala Sangathan",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-06-2023"
},
{
"billerId": "KESH00000RAJ2M",
"billerName": "Keshav Bal Vidhya Mandir Mudarla",
"billerAliasName": "Keshav Bal Vidhya Mandir Mudarla",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-10-2023"
},
{
"billerId": "KHAN00000MAH5Q",
"billerName": "Khandeswari Madhyamik Vidhyalay Beed",
"billerAliasName": "Khandeswari Madhyamik Vidhyalay Beed",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "KHOD00000SURSP",
"billerName": "Khodiyar Vidhyalaya - Surat",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KHYA00000AHDAF",
"billerName": "Khyati College Of Nursing Managed By Khyati Foundation",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KHYA00000AHDVP",
"billerName": "Khyati College Of Pharmacy",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KHYA00000AHD1J",
"billerName": "Khyati College Of Physiotherapy",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KHYA00000AHDP7",
"billerName": "Khyati Institue Of Integrated Law",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KHYA00000AHDMS",
"billerName": "Khyati Institute Of Master Of Valuation",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KHYA00000AHDG7",
"billerName": "Khyati Institute Of Physiotherapy",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-03-2021"
},
{
"billerId": "KHYA00000AHDG7",
"billerName": "Khyati Institute Of Physiotherapy",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-03-2021"
},
{
"billerId": "KHYA00000AHDG7",
"billerName": "Khyati Institute Of Physiotherapy",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KHYA00000AHD1F",
"billerName": "Khyati School Of Computer Application",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KHYA00000AHDL9",
"billerName": "Khyati School Of Engineering",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KHYA00000AHDG0",
"billerName": "Khyati School Of Nursing",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KHYA00000AHDOH",
"billerName": "Khyati School Of Skill Development",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KIDD00000GWAWE",
"billerName": "Kiddys Corner Public School",
"billerAliasName": "Kiddys Corner Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2020"
},
{
"billerId": "KIDL00010RAJ49",
"billerName": "Kidland Play School",
"billerAliasName": "Kidland Play School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-01-2026"
},
{
"billerId": "KIDS00000KAR1K",
"billerName": "Kids International School",
"billerAliasName": "Kids International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-03-2024"
},
{
"billerId": "KIDZ00000RAJ2J",
"billerName": "Kidzee Bikaner Rajasthan",
"billerAliasName": "Kidzee Bikaner Rajasthan",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-09-2023"
},
{
"billerId": "KIIT00000KHOYE",
"billerName": "KIIT",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KING00000TND71",
"billerName": "Kings And Queens Residential School",
"billerAliasName": "Kings And Queens Residential School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-03-2023"
},
{
"billerId": "ABLP03000RHT94",
"billerName": "Kings College India",
"billerAliasName": "Kings College IndiaASWE56431Q",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KING00000RHT4E",
"billerName": "KINGS COLLEGE INDIA",
"billerAliasName": "KINGS COLLEGE INDIA",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-10-2021"
},
{
"billerId": "KKWA00000NASW6",
"billerName": "KKWaghArtsCommerceScienceAndComputerScienceCollege",
"billerAliasName": "KKWaghArtsCommerceScienceAndComputerScienceCollege",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2023"
},
{
"billerId": "APPFEE000KER15",
"billerName": "Kmm English School, Malappuram",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KNGU00000KERT5",
"billerName": "KNG Unnithan Central School",
"billerAliasName": "KNG Unnithan Central School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-09-2022"
},
{
"billerId": "KOHI00000BPL2Y",
"billerName": "Kohinoor Educational Serivces Pvt Ltd",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KORS00000MAHQ2",
"billerName": "Kor Shaikshanik V Samajik Sanstha",
"billerAliasName": "Kor Shaikshanik V Samajik Sanstha",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-09-2023"
},
{
"billerId": "KORA00000KHOM2",
"billerName": "Koraput College Of Nursing",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "KOTA00000WBLCZ",
"billerName": "KOTA CURBS PRIVATE LTD",
"billerAliasName": "KOTA CURBS PRIVATE LTD",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-12-2023"
},
{
"billerId": "KOTA00000RJKK4",
"billerName": "Kotak English School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "APPFEE000KER16",
"billerName": "Kottappuram Central School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "KPSKML000TND01",
"billerName": "Kovai Public School",
"billerAliasName": "Kovai Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "APPFEE000KAR12",
"billerName": "Ksvk Whitefield School, Bangalore.",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER17",
"billerName": "Kulapathi Munshi Bhavan&#39;S Vidya Mandir Pottore",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000TEL12",
"billerName": "KVM Talent High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DKAFEE000KER09",
"billerName": "KVVS College Of Scenes And Technology",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "LPPA00000ANADG",
"billerName": "L P Patel Institute Of Medical Laboratory Technology",
"billerAliasName": "school",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-11-2021"
},
{
"billerId": "DKAFEE000TND01",
"billerName": "Lady Andal House Of Children - Activity Centre",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "APPFEE000KAR13",
"billerName": "Lake View Public School, Bangalore",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "LAKS00000GUJV4",
"billerName": "Laksh Saffron Owners Association",
"billerAliasName": "Laksh Saffron Owners Association",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "LAKS00000BPLF4",
"billerName": "Lakshmi Narain College Of Technology- Excellence",
"billerAliasName": "Lakshmi Narain College Of Technology- Excellence",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "LAKS00000KER0Z",
"billerName": "Lakshmi Narayana Junior School",
"billerAliasName": "Lakshmi Narayana Junior School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "26-05-2023"
},
{
"billerId": "EDU008157KER01",
"billerName": "Lakshmi Narayana Vidhya Nikethan",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-06-2024"
},
{
"billerId": "LALB00000TELW9",
"billerName": "Lal Bahadur College",
"billerAliasName": "Lal Bahadur College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2022"
},
{
"billerId": "LAVE00000MAPF9",
"billerName": "Laveno Academy And Job Solutions",
"billerAliasName": "Laveno Academy And Job Solutions",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-03-2023"
},
{
"billerId": "LEAR00000AHDHK",
"billerName": "Learners And Earners",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "LEYA00000KER4Q",
"billerName": "Leyamma Memorial College Of Nursing",
"billerAliasName": "Leyamma Memorial College Of Nursing",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-04-2023"
},
{
"billerId": "ABLP01000NDLZO",
"billerName": "Lilawati Vidya Mandir School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-11-2021"
},
{
"billerId": "EDU009409MAP01",
"billerName": "Lions Convent Higher Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-07-2024"
},
{
"billerId": "DKAFEE000PUN01",
"billerName": "Little Flower Convent School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DKAFEE000PUN02",
"billerName": "Little Flower KG School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "LITT00000CHESP",
"billerName": "Little Flower Matriculation Higher Secondary School",
"billerAliasName": "Little Flower Matriculation Higher Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "LITT00000CHEJM",
"billerName": "Little Flower Polytechnic College",
"billerAliasName": "Little Flower Polytechnic College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "LITT00000PTTE8",
"billerName": "Little Flower Public School Kollamula",
"billerAliasName": "Little Flower Public School Kollamula",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFK )",
"lastUpdated": "20-10-2023"
},
{
"billerId": "APPFEE000KER26",
"billerName": "Little Flower Vidyanikethan Icse School, Monippally",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000WBL01",
"billerName": "Little Flowers English School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "LITT00000GBD21",
"billerName": "Little Leaders Education And Welfare Society",
"billerAliasName": "Little Leaders Education And Welfare Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "LITT00000GBD79",
"billerName": "Little Leaders International School",
"billerAliasName": "Little Leaders International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "LITT00000GBD95",
"billerName": "Little Leaders Play School Ghaziabad Unit Of L E And W S",
"billerAliasName": "Little Leaders Play School Ghaziabad Unit Of L E And W S",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "LITT00000GRGS9",
"billerName": "Little Leaders Play School Gurugram",
"billerAliasName": "Little Leaders Play School Gurugram",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "LITT00000GBDIQ",
"billerName": "Little Leaders Play School Nehru Nagar",
"billerAliasName": "Little Leaders Play School Nehru Nagar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "LITT00000NATHP",
"billerName": "Little Star High School",
"billerAliasName": "Little Star High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-02-2023"
},
{
"billerId": "LNCKML000MAP01",
"billerName": "Lnct World School",
"billerAliasName": "Lnct World School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "LOTU00000MAUOQ",
"billerName": "Lotus Institute Of Edu And Research",
"billerAliasName": "private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "LOTU00000HYD0N",
"billerName": "Lotus Lap Public High School - Kamalanagar",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "APPFEE000KER27",
"billerName": "Lourde Matha Hss, Mangalam Dam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DKAFEE000KER08",
"billerName": "Lourde Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "APPFEE000KER28",
"billerName": "Love And Care Pre School ,Kanjikode",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "LOVE00000NATKX",
"billerName": "Lovely Profession University",
"billerAliasName": "Lovely Profession University",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-03-2022"
},
{
"billerId": "LOVE00000MAT3C",
"billerName": "Lovely Pvt ITI",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER29",
"billerName": "Loyola School Sreekariyam, Trivandrum",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "LPGL00000KERU7",
"billerName": "LP Global Instistute of Management Studies and Technology",
"billerAliasName": "LP Global Instistute of Management Studies and Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-10-2024"
},
{
"billerId": "RISI00000ANPXY",
"billerName": "LRG High School",
"billerAliasName": "school",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "LUCK00000KARJ7",
"billerName": "Lucky Infotech",
"billerAliasName": "Lucky Infotech",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-01-2023"
},
{
"billerId": "ABLP01000NWDFZ",
"billerName": "M A Educational Institute",
"billerAliasName": "M A Educational Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER30",
"billerName": "M A M Central School Padanad, Chengannur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MKGR00000ANP5K",
"billerName": "M K Group Of Educational Institutions Of Society",
"billerAliasName": "M K Group Of Educational Institutions Of Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2023"
},
{
"billerId": "APPFEE000KAR14",
"billerName": "M M English High School ,Bangalore",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MNIN00000RAJHJ",
"billerName": "M N International School Malakhera",
"billerAliasName": "M N International School Malakhera",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-10-2023"
},
{
"billerId": "MTBA00000SURYP",
"billerName": "M T B Arts College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MTBA00000SURLU",
"billerName": "M T B Arts College -PF",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MWIN00000RAJAH",
"billerName": "M Wings Academy",
"billerAliasName": "M Wings Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-09-2022"
},
{
"billerId": "MWIN00000RAJAH",
"billerName": "M Wings Academy",
"billerAliasName": "M Wings Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-09-2022"
},
{
"billerId": "DKAFEE000KAR01",
"billerName": "M.S Ramaiah Institute Of Technology",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "MAAV00000BRMEL",
"billerName": "Maa Vankal Malani Jan Kalyan And Shikshan Sansthan",
"billerAliasName": "Maa Vankal Malani Jan Kalyan And Shikshan Sansthan",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-11-2023"
},
{
"billerId": "MADA00000NATOR",
"billerName": "Madaan International School",
"billerAliasName": "Madaan International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-05-2022"
},
{
"billerId": "MADA00000HAR0Z",
"billerName": "Madarsa Baitul Uloom",
"billerAliasName": "Madarsa Baitul Uloom",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-10-2022"
},
{
"billerId": "MADA00000TELAM",
"billerName": "Madarsa Darul Uloom Hussainia Educational Society",
"billerAliasName": "Madarsa Darul Uloom Hussainia Educational Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2022"
},
{
"billerId": "MAHA00011RAJMC",
"billerName": "Mahadev Vidhya Mandir Senior Secondary School",
"billerAliasName": "Mahadev Vidhya Mandir Senior Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-01-2026"
},
{
"billerId": "MVKKML000GUJ04",
"billerName": "Mahapragya Vidya Niketan Managed By Preksha Dhyan Academy",
"billerAliasName": "Mahapragya Vidya Niketan Managed By Preksha Dhyan Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "MAHA00000SURRK",
"billerName": "Maharaja Agrasen International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "MAHA00000RAJF7",
"billerName": "Maharaja Ganga Singh Dental College And Research Centre",
"billerAliasName": "Maharaja Ganga Singh Dental College And Research Centre",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-07-2022"
},
{
"billerId": "MAHA00000RAJF7",
"billerName": "Maharaja Ganga Singh Dental College And Research Centre",
"billerAliasName": "Maharaja Ganga Singh Dental College And Research Centre",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-07-2022"
},
{
"billerId": "MAHA00000DUNDS",
"billerName": "Maharana Pratap International Academy Sagwara",
"billerAliasName": "Maharana Pratap International Academy Sagwara",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-11-2023"
},
{
"billerId": "MAHA00000MUM1Z",
"billerName": "Maharashtra National Law University Mumbai",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SFLFEE000MAH01",
"billerName": "Maharashtra National Law University Mumbai",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MAIKML000RAJ08",
"billerName": "Maharishi Arvind Inst Of Science And Management",
"billerAliasName": "Maharishi Arvind Inst Of Science And Management",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-09-2020"
},
{
"billerId": "CLBKML000TND05",
"billerName": "Maharishi Vidya Mandir",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MAHA00000JOD5G",
"billerName": "Maharshi Dadhichi Mahila Mahavidyalaya",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "MAHE00000PUN26",
"billerName": "Mahesh Vidyalaya - Marathi Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MAHE00000PUNFN",
"billerName": "Mahesh Vidyalaya - Marathi Secondary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000MAH06",
"billerName": "Mahesh Vidyalaya English Pre Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000MAH04",
"billerName": "Mahesh Vidyalaya English Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000MAH05",
"billerName": "Mahesh Vidyalaya English Secondary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MAHI00000WBLGH",
"billerName": "Mahishadal Raj College",
"billerAliasName": "Mahishadal Raj College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-05-2022"
},
{
"billerId": "MAJO00000RAJN0",
"billerName": "Major M H Khan Memorial Shikshan Sansthan",
"billerAliasName": "Major M H Khan Memorial Shikshan Sansthan",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-01-2023"
},
{
"billerId": "MAKM00000TNDZF",
"billerName": "Mak Matriculation Higher Secondary School Ashok Nagar",
"billerAliasName": "Mak Matriculation Higher Secondary School Ashok Nagar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-03-2023"
},
{
"billerId": "MAND00000RAJGN",
"billerName": "Mandawa Public School Samiti",
"billerAliasName": "Mandawa Public School Samiti",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-07-2022"
},
{
"billerId": "MANG00000NATE9",
"billerName": "Mangala Vidyakendra",
"billerAliasName": "Mangala Vidyakendra",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-01-2023"
},
{
"billerId": "MANI00000WBLBJ",
"billerName": "Manigram Target Mission",
"billerAliasName": "Manigram Target Mission",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2022"
},
{
"billerId": "MANI00000MANUM",
"billerName": "Manipur College",
"billerAliasName": "Manipur College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-04-2023"
},
{
"billerId": "MANJ00000NATFZ",
"billerName": "Manjeeera Degree And Pg College",
"billerAliasName": "Manjeeera Degree And Pg College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-12-2022"
},
{
"billerId": "MANO00000WBL1L",
"billerName": "Manoranjan Das Educational Welfare Trust",
"billerAliasName": "Manoranjan Das Educational Welfare Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-07-2024"
},
{
"billerId": "DKAFEE000KER05",
"billerName": "Mar Athanasius International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "MARB00000KERCS",
"billerName": "Mar Baselios Public School",
"billerAliasName": "Mar Baselios Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-04-2023"
},
{
"billerId": "APPFEE000KER31",
"billerName": "Mar Baselios School Maruthamonpally Kollam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MARG00000KERY5",
"billerName": "Mar Gregorios English Medium Higher Secondary School",
"billerAliasName": "Mar Gregorios English Medium Higher Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-04-2023"
},
{
"billerId": "MARI00000ANP91",
"billerName": "Maria Montessori Em High School",
"billerAliasName": "Maria Montessori Em High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-05-2023"
},
{
"billerId": "MARI00000ANP91",
"billerName": "Maria Montessori Em High School",
"billerAliasName": "Maria Montessori Em High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-05-2023"
},
{
"billerId": "MARI00000JLDH3",
"billerName": "Marigold International Smart School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "APPFEE000KER33",
"billerName": "Markaz Al Hilal English Medium School, Kozhikode",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER34",
"billerName": "Markaz, Athavanad",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MARK00000KERV7",
"billerName": "Markazul Uloom Kondotty",
"billerAliasName": "Markazul Uloom Kondotty",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-08-2024"
},
{
"billerId": "GJIN00000KER16",
"billerName": "Mary Ward English Medium School,Puthenvelikkara ",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DKAFEE000KER01",
"billerName": "Matha Nagar Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MAUR00000VADR8",
"billerName": "Mauryan High School - Vadodara",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2020"
},
{
"billerId": "MAXC00000RAJ0J",
"billerName": "Max Career Public Secondary School",
"billerAliasName": "Max Career Public Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-10-2023"
},
{
"billerId": "MAYO00000NOIW5",
"billerName": "Mayoor School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-04-2021"
},
{
"billerId": "MAYO00000NOIW5",
"billerName": "Mayoor School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-04-2021"
},
{
"billerId": "MAYO00000NOIW5",
"billerName": "Mayoor School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "OU1201000MEE17",
"billerName": "Meerut Institute Of Technology test",
"billerAliasName": "Meerut Institute Of Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "05-12-2024"
},
{
"billerId": "EDU013066RAJ01",
"billerName": "Mentor International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "MERI00000JPRPI",
"billerName": "Meri Pahal Children Academy",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MERI00000RAJUU",
"billerName": "Meridian Kids Public School Jaitaran",
"billerAliasName": "Meridian Kids Public School Jaitaran",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "APPFEE000KER42",
"billerName": "Mes Campus School, Kuttippuram",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER47",
"billerName": "Mes Igcse Schoo,l Tirur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER49",
"billerName": "Mes Mcc Central School, Perinthalmanna",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER48",
"billerName": "MES, Managalam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP01000BPLX4",
"billerName": "Millennium College Of Management",
"billerAliasName": "Millennium College Of Management",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP01000BPLHE",
"billerName": "Millennium College Of Nursing",
"billerAliasName": "Millennium College Of Nursing",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP01000BPL1N",
"billerName": "Millennium College Of Pharmacy",
"billerAliasName": "Millennium College Of Pharmacy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP01000BPLEJ",
"billerName": "Millennium College Of Pharmacy &amp;amp; Science",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MIMS00000TELZV",
"billerName": "MIMS Degree and PG College",
"billerAliasName": "MIMS Degree and PG College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-10-2022"
},
{
"billerId": "EDU013067RAJ01",
"billerName": "Mittal International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013068RAJ01",
"billerName": "Mld International Academy",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013069RAJ01",
"billerName": "Mm Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "DKAFEE000KER04",
"billerName": "MMAR Central School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "MMBG00000CTO87",
"billerName": "Mmbg Tirupati",
"billerAliasName": "Mmbg Tirupati",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2020"
},
{
"billerId": "EDU013070RAJ01",
"billerName": "Modern Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013071RAJ01",
"billerName": "Modern Public Sr. Secondary School, Makro,Singhana(Jhunjhunu) Rajasthan",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013072RAJ01",
"billerName": "Modern School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013073RAJ01",
"billerName": "Modern School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013074RAJ01",
"billerName": "Modern School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "MODE00000KER49",
"billerName": "Modern Secondary School",
"billerAliasName": "Modern Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-11-2022"
},
{
"billerId": "MODE00000KER49",
"billerName": "Modern Secondary School",
"billerAliasName": "Modern Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-11-2022"
},
{
"billerId": "MODE00000KER49",
"billerName": "Modern Secondary School",
"billerAliasName": "Modern Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2022"
},
{
"billerId": "MODE00000KER49",
"billerName": "Modern Secondary School",
"billerAliasName": "Modern Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2022"
},
{
"billerId": "MODE00000JPRPE",
"billerName": "Modern Vidhya Ashram Sec School",
"billerAliasName": "Modern Vidhya Ashram Sec School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-11-2023"
},
{
"billerId": "EDU013075RAJ01",
"billerName": "Modi Inst Of Educational Research",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013076RAJ01",
"billerName": "Modi Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013077RAJ01",
"billerName": "Mohan Lal Dayal Vinay Mandir",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "MOHA00000RAJK1",
"billerName": "Mohanlal Dayal Vinay Mandir School",
"billerAliasName": "Mohanlal Dayal Vinay Mandir School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2024"
},
{
"billerId": "EDU013078RAJ01",
"billerName": "Mohta Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "SFLFEE000PUN30",
"billerName": "Montessori Public School",
"billerAliasName": "Montessori Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MONT00000PUNKP",
"billerName": "Montessori Public School",
"billerAliasName": "Montessori Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU013079RAJ01",
"billerName": "Morning Glory School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013080RAJ01",
"billerName": "Morning Star St. Anselms School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "MOTH00000HOOIZ",
"billerName": "Mother Mary Public School",
"billerAliasName": "Mother Mary Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "17-07-2024"
},
{
"billerId": "EDU013081RAJ01",
"billerName": "Mother&#39;S Mission Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "MOTI00000SPTBX",
"billerName": "Motilal Nehru School of Sports",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SFLFEE000HAR01",
"billerName": "Motilal Nehru School of Sports",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP01000NWDO3",
"billerName": "Mount Abu Public School",
"billerAliasName": "Mount Abu Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DKAFEE000KER11",
"billerName": "Mount Bethany Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "EDU013082RAJ01",
"billerName": "Mount Carmel Convent School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "DKAFEE000PUN03",
"billerName": "Mount Carmel School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "ABLP05000GUL7C",
"billerName": "Mount Litera Zee Primary School",
"billerAliasName": "Mount Litera Zee Primary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU013083RAJ01",
"billerName": "Mount Litera Zee School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "MOUN00000RHTQ4",
"billerName": "Mount Litera Zee School Rohtak",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MOUN00000GRGS0",
"billerName": "Mount Olympus School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "MOUN00000PKDX4",
"billerName": "Mount Seena College Of Arts And Science",
"billerAliasName": "Mount Seena College Of Arts And Science",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2021"
},
{
"billerId": "MOUN00000PKDXN",
"billerName": "Mount Seena English School",
"billerAliasName": "Mount Seena English School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2021"
},
{
"billerId": "MOUN00000PKDSG",
"billerName": "Mount Seena Private ITI",
"billerAliasName": "Mount Seena Private ITI",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2021"
},
{
"billerId": "MOUN00000PKD4E",
"billerName": "Mount Seena Public School",
"billerAliasName": "Mount Seena Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-10-2021"
},
{
"billerId": "EDU013084RAJ01",
"billerName": "Mount View Model Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "MSME00000NATDV",
"billerName": "Ms Memorial Model School",
"billerAliasName": "Ms Memorial Model School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-03-2023"
},
{
"billerId": "EDU013085RAJ01",
"billerName": "Ms Shikshan Sansthan",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "MSPH00000KERIU",
"billerName": "Msp Hss Uphill Malappuram",
"billerAliasName": "Msp Hss Uphill Malappuram",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-07-2024"
},
{
"billerId": "MSRN00000VISTW",
"billerName": "MSR National Degree College Munagapaka",
"billerAliasName": "MSR National Degree College Munagapaka",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-11-2023"
},
{
"billerId": "DKAFEE000KAR02",
"billerName": "MSRIT - Exam Fee Collection",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "MUDH00000NATQ1",
"billerName": "Mudhal Institute Of Biology",
"billerAliasName": "Mudhal Institute Of Biology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2022"
},
{
"billerId": "MUKU00000WBLWZ",
"billerName": "Mukul Bikash School",
"billerAliasName": "Mukul Bikash School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-09-2023"
},
{
"billerId": "MURA00000GUJ93",
"billerName": "Murari Education Trust",
"billerAliasName": "Murari Education Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-03-2023"
},
{
"billerId": "MYKI00000GUJLU",
"billerName": "My Kids Pre School",
"billerAliasName": "My Kids Pre School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-03-2023"
},
{
"billerId": "EDU013086RAJ01",
"billerName": "My Own School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "APPFEE000KER57",
"billerName": "N A Model English School ,Kasaragod",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "NDKKML000GUJ04",
"billerName": "N D Kothari English School",
"billerAliasName": "N D Kothari English School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "NLDA00000THAFQ",
"billerName": "N L Dalmia High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU013087RAJ01",
"billerName": "N.C.A. Senior Secondary School,Nai Mandi Gharsana",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013088RAJ01",
"billerName": "N.D. Ganga School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013089RAJ01",
"billerName": "N.K. Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "APPFEE000KER58",
"billerName": "N.S.S.E.M.H.S.Tirur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU013090RAJ01",
"billerName": "N.V.N. English Medium School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "GJIN00000KER12",
"billerName": "Naipunya Public School, Edakkunnu",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP01000PKDLO",
"billerName": "Najath Arts And Science College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER59",
"billerName": "Najmul Huda Hss Kavathikalam, Kottakkal",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "NALA00000SURGH",
"billerName": "Nalada Vidhyalaya - 1 Surat",
"billerAliasName": "Late PU Chavada Education Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "NALA00000SURMD",
"billerName": "Nalada Vidhyalaya - 2 Surat",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "NALA00000NAT9K",
"billerName": "Nalanda College Of Fashion Design Osmanabad",
"billerAliasName": "Nalanda College Of Fashion Design Osmanabad",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2022"
},
{
"billerId": "NALA00000WBL7W",
"billerName": "Nalanda Nursing Institute",
"billerAliasName": "Nalanda Nursing Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-09-2023"
},
{
"billerId": "NANK00000SDLWI",
"billerName": "Nanki Public School Sangam Vihar",
"billerAliasName": "Nanki Public School Sangam Vihar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-03-2022"
},
{
"billerId": "EDU013091RAJ01",
"billerName": "Narendra Academy, Sultana",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "NARI00000NATGT",
"billerName": "Narikunni English Medium School",
"billerAliasName": "Narikunni English Medium School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2023"
},
{
"billerId": "EDU013092RAJ01",
"billerName": "Narmada Devi Singhania International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013093RAJ01",
"billerName": "National Academy Day Boarding Eng",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "NATI00000KOLPN",
"billerName": "National Academy Of Media And Events",
"billerAliasName": "National Academy Of Media And Events",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2020"
},
{
"billerId": "APPFEE000KER60",
"billerName": "National Central School, Ezhamkulam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "NATI00000PUD52",
"billerName": "National Institute Of Technology Puducherry",
"billerAliasName": "National Institute Of Technology Puducherry",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-05-2023"
},
{
"billerId": "EDU013094RAJ01",
"billerName": "National Public Seni Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "NAVA00000TELC3",
"billerName": "Navabharathi Educational Society",
"billerAliasName": "Navabharathi Educational Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-06-2024"
},
{
"billerId": "NAVI00000MAHFX",
"billerName": "Navi Mumbai College",
"billerAliasName": "Navi Mumbai College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "NAVI00000MAHFX",
"billerName": "Navi Mumbai College",
"billerAliasName": "Navi Mumbai College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "NAVN00000MUMYS",
"billerName": "Navneet College Of Commerce And Science",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "NAVN00000MUMZ2",
"billerName": "Navneet Junior College Of Arts Science And Commerce",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "NAWA00000WBLKZ",
"billerName": "Nawapara Kinder Garten School",
"billerAliasName": "Nawapara Kinder Garten School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-08-2024"
},
{
"billerId": "NAYA00000NAY83",
"billerName": "Nayagarh College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "NAZA00000PTTP6",
"billerName": "Nazareth College of Pharmacy",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg:NCPBPHARM ).\r",
"lastUpdated": "12-05-2022"
},
{
"billerId": "NAZA00000TELFJ",
"billerName": "Nazareth Mission School",
"billerAliasName": "Nazareth Mission School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-05-2024"
},
{
"billerId": "EDU013095RAJ01",
"billerName": "Nbf Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "NEEL00000NATVA",
"billerName": "Neelkanth Degree College Shorapur",
"billerAliasName": "Neelkanth Degree College Shorapur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-04-2023"
},
{
"billerId": "NEEL00000NATVA",
"billerName": "Neelkanth Degree College Shorapur",
"billerAliasName": "Neelkanth Degree College Shorapur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-04-2023"
},
{
"billerId": "EDU013096RAJ01",
"billerName": "Neerja Modi School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "NEEKML000RAJ09",
"billerName": "Neewara Academy",
"billerAliasName": "Neewara Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "EDU013097RAJ01",
"billerName": "Nehru Bal Mandir Senior Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "NEHR00000CHEPR",
"billerName": "Nehru Nursery And Primary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2020"
},
{
"billerId": "NEPN00000ASM1A",
"billerName": "Nepni College Of Allied Health Science",
"billerAliasName": "Nepni College Of Allied Health Science",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-05-2022"
},
{
"billerId": "APPFEE000KER61",
"billerName": "Nest Public School Petta, Kozhikode",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KAR15",
"billerName": "New Baldwin School, Bangalore.",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "NEWD00000NEW1D",
"billerName": "NEW DELHI YMCA",
"billerAliasName": "NEW DELHI YOUNG MENS CHRISTIAN ASSOCIATION",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "EDU013098RAJ01",
"billerName": "New Era Central School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "NEWE00000THAEX",
"billerName": "New Era English Primary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "NEWE00000THAO0",
"billerName": "New Era Kg Classes",
"billerAliasName": "Seva sadan trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "NEWE00000THAXG",
"billerName": "New Era School",
"billerAliasName": "Seva Sadan Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "NEWE00000THAS1",
"billerName": "New Era Sindhi And Hindi Primary School",
"billerAliasName": "Seva Sadan Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "ABLP01000ANP02",
"billerName": "New Hope High School(E.M.)",
"billerAliasName": "New Hope High School(E.M.)",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-08-2023"
},
{
"billerId": "NEWH00000BIHRR",
"billerName": "New Horizon Public School",
"billerAliasName": "New Horizon Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2022"
},
{
"billerId": "EDU013099RAJ01",
"billerName": "New Look Central School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013100RAJ01",
"billerName": "New Look Central School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013101RAJ01",
"billerName": "New Look Sr Sec School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013102RAJ01",
"billerName": "New Look Uchtar Madhyamik Vidhyalaya,",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "NEWM00000JPRQM",
"billerName": "New Microtech Group Of Education Trust/School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2020"
},
{
"billerId": "CLBKML000KAR01",
"billerName": "New Millennium Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "NEWO00000HYDHZ",
"billerName": "New Oxford School",
"billerAliasName": "New Oxford School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "NEWP00000MAPUE",
"billerName": "New Primer Public School Mahasaon",
"billerAliasName": "New Primer Public School Mahasaon",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-03-2023"
},
{
"billerId": "EDU013103RAJ01",
"billerName": "New Rajasthan Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013104RAJ01",
"billerName": "New Rajasthan Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "NEWR00000RAJCO",
"billerName": "New Rise Sec School Nathdwara",
"billerAliasName": "New Rise Sec School Nathdwara",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "EDU013105RAJ01",
"billerName": "New Saraswati Children Academy",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-04-2024"
},
{
"billerId": "NEWS00000HYDYR",
"billerName": "New Srichaitanya Juniour College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "EDU013106RAJ01",
"billerName": "New State Academy",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "ABLP03000KMMA3",
"billerName": "New Vision Educational Society",
"billerAliasName": "New Vision Educational Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP02000KMMA3",
"billerName": "New Vision Educational Society",
"billerAliasName": "New Vision Educational Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "NEWR00000TNDSY",
"billerName": "Newriver Matriculation Higher Secondary School",
"billerAliasName": "Newriver Matriculation Higher Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-03-2023"
},
{
"billerId": "NIGA00000TELFL",
"billerName": "Nigama College Of Physical Education",
"billerAliasName": "Nigama College Of Physical Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2022"
},
{
"billerId": "NIGA00000TELWQ",
"billerName": "Nigama Engineering College",
"billerAliasName": "Nigama Engineering College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-11-2022"
},
{
"billerId": "EDU013107RAJ01",
"billerName": "Nims International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "NIMT00000EDLXD",
"billerName": "Nimt B Schools Foundation",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-01-2021"
},
{
"billerId": "NIRM00000NATUU",
"billerName": "Nirmala Hrudaya Girls High School",
"billerAliasName": "Nirmala Hrudaya Girls High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-03-2023"
},
{
"billerId": "APPFEE000KER62",
"billerName": "Nirmala Junior School, Muvattupuzha",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER63",
"billerName": "Nirmalamatha Convent Eyyal, Thrissur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "NJEE00000MAPFF",
"billerName": "NJEE Classes",
"billerAliasName": "NJEE Classes",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "ABLP01000AHDF9",
"billerName": "Nk Foundation Educational Trust",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-08-2023"
},
{
"billerId": "EDU013108RAJ01",
"billerName": "Noble International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "NORT00000MOH20",
"billerName": "Northern India Institute Of Fashion Technology",
"billerAliasName": "Northern India Institute Of Fashion Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "EDU013109RAJ01",
"billerName": "Nosegay Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "CLBKML000ANP10",
"billerName": "Nova Agricultural Polytechnic (Agri + Seed)",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000ANP03",
"billerName": "Nova College Of Agricultural Polytechnic",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000ANP04",
"billerName": "Nova College Of Business Management",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000ANP11",
"billerName": "Nova College Of Education",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000ANP05",
"billerName": "Nova College Of Elementary Education",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000ANP12",
"billerName": "Nova College Of Pharmacy",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000ANP13",
"billerName": "Nova College Of Physical Education",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000ANP14",
"billerName": "Nova Degree And Pg College",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000ANP15",
"billerName": "Nova Horticultural Polytechnic",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000TEL06",
"billerName": "Nova Pg College Mba",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000TEL07",
"billerName": "Nova Pg College Mca",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP01000BLRCV",
"billerName": "NSB Academy",
"billerAliasName": "NSB Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DKAFEE000KER02",
"billerName": "Nss College Of Engineering",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER64",
"billerName": "Nss Higher Secondary School, Mullurkara",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER66",
"billerName": "O Khalid Memorial English Medium School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "OPJI00000CHHSK",
"billerName": "O P Jindal School Raigarh",
"billerAliasName": "O P Jindal School Raigarh",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-10-2023"
},
{
"billerId": "OAKG00000UTTZ5",
"billerName": "Oak Grove School",
"billerAliasName": "Oak Grove School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-04-2023"
},
{
"billerId": "EDU013110RAJ01",
"billerName": "Oasis Sainik School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "CLBKML000TEL09",
"billerName": "Ocean The Abm School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER67",
"billerName": "Olive Public School, Perambra",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ORAN00000GRGWA",
"billerName": "Orane International Gurugram",
"billerAliasName": "RS Educations",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2021"
},
{
"billerId": "EDU013111RAJ01",
"billerName": "Orange County School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "OSHA00000RAJ3G",
"billerName": "Oshan Children Public Sr Sec School",
"billerAliasName": "Oshan Children Public Sr Sec School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2023"
},
{
"billerId": "OSMA00000NATN2",
"billerName": "OSMANIA COLLEGE OF ARTS AND SOCIAL SCIENCES UCA AND SSOU HOSTEL ACC",
"billerAliasName": "OSMANIA COLLEGE OF ARTS AND SOCIAL SCIENCES UCA AND SSOU HOSTEL ACC",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2024"
},
{
"billerId": "APPFEE000KER68",
"billerName": "Our Lady Of Mercy Hss, Aroor, Cherthala,Alappuzha",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU013112RAJ01",
"billerName": "Our Lady Of Pillar Convent School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "OXFO00000NEWAL",
"billerName": "Oxford College of Education",
"billerAliasName": "Oxford College of Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "OXFO00000NAT8J",
"billerName": "Oxford High School",
"billerAliasName": "Oxford High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-02-2023"
},
{
"billerId": "EDU013113RAJ01",
"billerName": "Oxford International Academy",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013114RAJ01",
"billerName": "Oxford International Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013115RAJ01",
"billerName": "Oxford International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013116RAJ01",
"billerName": "Oxford Public Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "PBKO00000RJKWK",
"billerName": "P B Kotak Memorial English School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "PGCO00000MAH3K",
"billerName": "P G College Of Pharmaceutical Science And Research",
"billerAliasName": "P G College Of Pharmaceutical Science And Research",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-03-2023"
},
{
"billerId": "PPSA00000MUM0B",
"billerName": "P P Savani Vidhyamandir - English Medium",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2020"
},
{
"billerId": "PPSA00000MUM6H",
"billerName": "P P Savani Vidhyamandir - Gujarati Medium",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2020"
},
{
"billerId": "PCAKML000RAJ11",
"billerName": "Pacific Academy Of Higher Edn And Reasearch University",
"billerAliasName": "Pacific Academy Of Higher Edn And Reasearch University",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "EDU013117RAJ01",
"billerName": "Padma Binani Dav Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "BLVFEE000KAR01",
"billerName": "Padmadeepa Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-03-2021"
},
{
"billerId": "BLVE00000SHIHQ",
"billerName": "Padmadeepa Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "BLVFEE000KAR01",
"billerName": "Padmadeepa Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-03-2021"
},
{
"billerId": "BLVFEE000KAR01",
"billerName": "Padmadeepa Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU013118RAJ01",
"billerName": "Padmawati Convent School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013119RAJ01",
"billerName": "Pallavan Uchatar Prathmik Vidyalaya.",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "ABLP01000WBL9R",
"billerName": "Pandit Iswar Chandra Vidyasagar Mission",
"billerAliasName": "PT Iswarchandra Vidyasagar Mission",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-03-2022"
},
{
"billerId": "ABLP01000WBL9R",
"billerName": "Pandit Iswar Chandra Vidyasagar Mission",
"billerAliasName": "PT Iswarchandra Vidyasagar Mission",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-03-2022"
},
{
"billerId": "PARA00000MAPNX",
"billerName": "Paradise Public School Narsinghpur",
"billerAliasName": "Paradise Public School Narsinghpur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-03-2023"
},
{
"billerId": "APPFEE000KER69",
"billerName": "Paramekavu Vidya Mandir, Thrissur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "PARA00000BIH1R",
"billerName": "Paramount Academy",
"billerAliasName": "Paramount Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2022"
},
{
"billerId": "PARA00000BIH1R",
"billerName": "Paramount Academy",
"billerAliasName": "Paramount Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2022"
},
{
"billerId": "EDU013120RAJ01",
"billerName": "Paras International English School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "PATE00000RAEWL",
"billerName": "PATEL SHIKSHA SADAN INTER COLLEGE RAEBARELI",
"billerAliasName": "PATEL SHIKSHA SADAN INTER COLLEGE RAEBARELI",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-11-2023"
},
{
"billerId": "PATH00000NATTP",
"billerName": "Pathfinder H S P School Berhampore",
"billerAliasName": "Pathfinder H S P School Berhampore",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2022"
},
{
"billerId": "PATH00000NATKO",
"billerName": "Pathfinder H S P School Siliguri",
"billerAliasName": "Pathfinder H S P School Siliguri",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2022"
},
{
"billerId": "EDU013121RAJ01",
"billerName": "Patni Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "PAUL00000KOLPP",
"billerName": "PAUL ESTABLISHMENT SERVICES",
"billerAliasName": "PAUL ESTABLISHMENT SERVICES",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-11-2023"
},
{
"billerId": "PAVA00000ANPZ0",
"billerName": "Pavan E M High School Akkayapalli",
"billerAliasName": "Pavan E M High School Akkayapalli",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "APPFEE000KER70",
"billerName": "Peace Public School ,Kottakal",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER71",
"billerName": "Peace Public School ,Manjeri",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER72",
"billerName": "Peace Public School Vengara, Malappuram",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU013122RAJ01",
"billerName": "Pearl Central Academy",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013123RAJ01",
"billerName": "Pearson School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "PEMI00000JHABL",
"billerName": "Pemiya Rishikesh Memorial Public School",
"billerAliasName": "Pemiya Rishikesh Memorial Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-03-2025"
},
{
"billerId": "PERF00000NATPA",
"billerName": "Perfect Bank Coaching",
"billerAliasName": "Perfect Bank Coaching",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "EDU013124RAJ01",
"billerName": "Petals International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "ABLP01000WMDRU",
"billerName": "Pg Institute Of Medical Sciences",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "PHOO00000MAP7O",
"billerName": "Phoolchandra Jain Monument School Ghuwara",
"billerAliasName": "Phoolchandra Jain Monument School Ghuwara",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-10-2023"
},
{
"billerId": "EDU013125RAJ01",
"billerName": "Pilani Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013126RAJ01",
"billerName": "Pioneer Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013127RAJ01",
"billerName": "Piramal Girls Senior Secondary School (English Medium) Bagar",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013128RAJ01",
"billerName": "Podar World School Jaipur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "PODD00000ALW3D",
"billerName": "PODDAR SHIKSHAN SANSTHAN",
"billerAliasName": "PODDAR SHIKSHAN SANSTHAN",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-11-2023"
},
{
"billerId": "EDU013129RAJ01",
"billerName": "Pole Star The School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013130RAJ01",
"billerName": "Polkaji Shikshan Sansthan",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013131RAJ01",
"billerName": "Pooja International Academy",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "PARB00000WBLB1",
"billerName": "Prabati Teachers Training Institute",
"billerAliasName": "Prabati Teachers Training Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-09-2023"
},
{
"billerId": "PARB00000WBLB1",
"billerName": "Prabati Teachers Training Institute",
"billerAliasName": "Prabati Teachers Training Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-09-2023"
},
{
"billerId": "PRAB00000RNC4Q",
"billerName": "Prabhat Tara English Medium School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "PRAD00000ODIIJ",
"billerName": "Pradosh Kumar Smruti Smaraki Higher Secondary School",
"billerAliasName": "Pradosh Kumar Smruti Smaraki Higher Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-04-2023"
},
{
"billerId": "EDU013132RAJ01",
"billerName": "Pragati Public Sr Sec School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "PRAM00000ANACX",
"billerName": "Pramukhswami Medical College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-11-2021"
},
{
"billerId": "PRAS00000RAJZE",
"billerName": "Prasad Public Senior Secondary School",
"billerAliasName": "Prasad Public Senior Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-01-2023"
},
{
"billerId": "PRAT00000KHOUM",
"billerName": "Prativa Devi College Of Nursing",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "PRAT00000KHOR9",
"billerName": "Prativa Devi School Of Nursing",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "PRAT00000KHOJN",
"billerName": "Prativa Educational And Charitable Trust- Prativa Group",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "EDU013133RAJ01",
"billerName": "Presidency School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDUFEE000KAR27",
"billerName": "Presidency School - Benaglore North",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2020"
},
{
"billerId": "EDU013134RAJ01",
"billerName": "Presidency The International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013135RAJ01",
"billerName": "Prince Academy Of Higher Education",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "PRIN00000JPR35",
"billerName": "Prince College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "PRIN00000JPR5W",
"billerName": "Prince International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "EDU013136RAJ01",
"billerName": "Prince International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013137RAJ01",
"billerName": "Prince Uch Madhyamik Vidyalaya",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "PRIN00000JPRDG",
"billerName": "Princess Bed College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "PRIN00000KARNY",
"billerName": "Principal And Nss Officer Nss Unit Sjm Dental College And Hospital",
"billerAliasName": "Principal And Nss Officer Nss Unit Sjm Dental College And Hospital",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-10-2023"
},
{
"billerId": "PRIN00000KARWL",
"billerName": "Principal And Wardan Maharani Composite Pu College",
"billerAliasName": "Principal And Wardan Maharani Composite Pu College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-04-2023"
},
{
"billerId": "PRIN00000CDRR4",
"billerName": "Principal Dev Samaj College Of Education",
"billerAliasName": "Principal Dev Samaj College Of Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "PRIN00000CDRQ4",
"billerName": "Principal Devsamaj College of Education",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "PRIS00000CHHZA",
"billerName": "Prism College Of Pharmacy",
"billerAliasName": "Prism College Of Pharmacy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-03-2023"
},
{
"billerId": "PRIS00000CHHLQ",
"billerName": "Prism Public School Utai",
"billerAliasName": "Prism Public School Utai",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-03-2023"
},
{
"billerId": "PRIS00000CHHL4",
"billerName": "Prism School Of Business And Entrepreneurship",
"billerAliasName": "Prism School Of Business And Entrepreneurship",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2023"
},
{
"billerId": "PRIY00000PUNEM",
"billerName": "Priyadarshani English Medium School",
"billerAliasName": "Priyadarshani English Medium School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "PRIY00000PUNC1",
"billerName": "Priyadarshani High School",
"billerAliasName": "Priyadarshani High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "PRIY00000PUNUA",
"billerName": "Priyadarshani Junior College",
"billerAliasName": "Priyadarshani Junior College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000TEL08",
"billerName": "Priyadarshini Degree College",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU013138RAJ01",
"billerName": "Prj Gyanjaya School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "PROF00000TELQK",
"billerName": "Professional Educational And Welfare Society",
"billerAliasName": "Professional Educational And Welfare Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-10-2023"
},
{
"billerId": "PSBKML000KAR02",
"billerName": "Psbb Learning Leadership Academy",
"billerAliasName": "Psbb Learning Leadership Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "PSNS00000ANPQU",
"billerName": "PSN SRI VIVEKANANDA EDUCATIONAL ACADEMY KONGAREDDYPALLI",
"billerAliasName": "PSN SRI VIVEKANANDA EDUCATIONAL ACADEMY KONGAREDDYPALLI",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-05-2023"
},
{
"billerId": "ABLP01000WBLK0",
"billerName": "PT Iswarchandra Vidyasagar PTT &amp;amp; Bed College",
"billerAliasName": "PT Iswarchandra PTT &amp;amp; Bed College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-03-2022"
},
{
"billerId": "PTRA00000CHHJ4",
"billerName": "PT Ramsahay Mishra Govt English Medium H S School",
"billerAliasName": "PT Ramsahay Mishra Govt English Medium H S School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2024"
},
{
"billerId": "EDU013139RAJ01",
"billerName": "Pt Uma Dutt Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "PTYA00000EDLA8",
"billerName": "Pt Yad Ram Education Society",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU013140RAJ01",
"billerName": "Pt. Parsadi Lal International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "PUNA00017NATZR",
"billerName": "Punarnavaha Open Learning Foundation ",
"billerAliasName": "Punarnavaha Open Learning Foundation",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2025"
},
{
"billerId": "PUNA00013NATXY",
"billerName": "Punarnavaha Open Learning Space",
"billerAliasName": "Punarnavaha Open Learning Space",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2025"
},
{
"billerId": "PURB00000NAT1H",
"billerName": "Purba Medinpur Bed College",
"billerAliasName": "AACTV4417EPURBA MEDINIPUR BED COLLEGE",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-03-2025"
},
{
"billerId": "ABLP01000BPLKM",
"billerName": "Pushpa Sr. Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU013141RAJ01",
"billerName": "Queen Mary&#39;S Girls School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013143RAJ01",
"billerName": "Queen Mary&#39;S School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013142RAJ01",
"billerName": "Queen Marys School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "RKCO00000RJKQL",
"billerName": "R K College Of Diploma Engineering",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "RKCO00000RJK0H",
"billerName": "R K College Of Engineering And Technology - R K University",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "RKTA00000THAB4",
"billerName": "R K Talreja College Of Arts Science And Commerce Junior Aided",
"billerAliasName": "Seva Sadan Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "RKUN00000RJK91",
"billerName": "R K University Alumni Association - Shtc Trust",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "RNTC00000RAJC3",
"billerName": "R N T College of Agriculture",
"billerAliasName": "R N T College of Agriculture9",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2023"
},
{
"billerId": "RNTC00000RAJ5G",
"billerName": "R N T College of Teacher Education",
"billerAliasName": "R N T College of Teacher Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "RNTI00000RAJ9I",
"billerName": "R N T Institute Of BSTC",
"billerAliasName": "R N T Institute Of BSTC",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-02-2023"
},
{
"billerId": "RPVKML000GUJ05",
"billerName": "R P Vasani International School",
"billerAliasName": "R P Vasani International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "RRED00000MAH4A",
"billerName": "R R Educational Trust College Of Education And Research",
"billerAliasName": "R R Educational Trust College Of Education And Research",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-10-2023"
},
{
"billerId": "RRED00000MAHXY",
"billerName": "R R Educational Trust English High School",
"billerAliasName": "R R Educational Trust English High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-10-2023"
},
{
"billerId": "RRED00000MAHWZ",
"billerName": "R R Educational Trust English Primary School",
"billerAliasName": "R R Educational Trust English Primary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-10-2023"
},
{
"billerId": "RRED00000MAH5Z",
"billerName": "R R Educational Trust Junior College Of Science And Commerce",
"billerAliasName": "R R Educational Trust Junior College Of Science And Commerce",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-10-2023"
},
{
"billerId": "RSRO00000JHAGO",
"billerName": "R S Roy College Bsc Mlt Paramedical Research Institute",
"billerAliasName": "R S Roy College Bsc Mlt Paramedical Research Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-05-2023"
},
{
"billerId": "EDU013144RAJ01",
"billerName": "R S V Higher Sec School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "RKTA00000THAWG",
"billerName": "R.K. Talreja College Of Arts Science And Commerce Junior Unaided",
"billerAliasName": "Seva Sadan Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "EDU013145RAJ01",
"billerName": "R.S. Memorial International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013146RAJ01",
"billerName": "Raath International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "RACKML000GUJ06",
"billerName": "Rachana - Deepalika",
"billerAliasName": "Rachana - Deepalika",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "RSCKML000GUJ07",
"billerName": "Rachana School Kg",
"billerAliasName": "Rachana School Kg",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "RSSKML000GUJ08",
"billerName": "Rachana School Std I To Vii",
"billerAliasName": "Rachana School Std I To Vii",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "RSSKML000GUJ09",
"billerName": "Rachana School Std Vii - X",
"billerAliasName": "Rachana School Std Vii - X",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "EDU013147RAJ01",
"billerName": "Radcliffe School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "RADH00000BIKGK",
"billerName": "RADHA DEVI SHIKSHAN SANTHAN",
"billerAliasName": "RADHA DEVI SHIKSHAN SANTHAN",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-11-2023"
},
{
"billerId": "RADH00000MAHMI",
"billerName": "Radhakrishna Foundation Aurangabad",
"billerAliasName": "Radhakrishna Foundation Aurangabad",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-12-2022"
},
{
"billerId": "EDU013148RAJ01",
"billerName": "Radhakrishnan Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "RADI00000MAP0G",
"billerName": "Radical Institute of Education",
"billerAliasName": "Radical Institute of Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2022"
},
{
"billerId": "EDU013149RAJ01",
"billerName": "Raffles International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013150RAJ01",
"billerName": "Raghav World School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "RAGH00000JPRKS",
"billerName": "Raghav World School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "EDU013151RAJ01",
"billerName": "Rahul Ma Shikshan Sansthan U Ma School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "RAIU00000THA7M",
"billerName": "Rai University",
"billerAliasName": "Private University",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "RAIN00000UTPU6",
"billerName": "Rainbow Academy_Pratapgarh",
"billerAliasName": "Rainbow Academy_Pratapgarh",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-06-2023"
},
{
"billerId": "RAIN00000UTPU6",
"billerName": "Rainbow Academy_Pratapgarh",
"billerAliasName": "Rainbow Academy_Pratapgarh",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-06-2023"
},
{
"billerId": "RAIN00000UTPU6",
"billerName": "Rainbow Academy_Pratapgarh",
"billerAliasName": "Rainbow Academy_Pratapgarh",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-06-2023"
},
{
"billerId": "RAIN00000UTPU6",
"billerName": "Rainbow Academy_Pratapgarh",
"billerAliasName": "Rainbow Academy_Pratapgarh",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-06-2023"
},
{
"billerId": "CLBKML000MAH12",
"billerName": "Rainbow Preschool - Anandnagar",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000MAH13",
"billerName": "Rainbow Preschool - Castle Mill ",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000MAH14",
"billerName": "Rainbow Preschool - Dhokali",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000MAH02",
"billerName": "Rainbow Preschool - Hariniwas",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000MAH03",
"billerName": "Rainbow Preschool - Mulund",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU013152RAJ01",
"billerName": "Rainbow Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013153RAJ01",
"billerName": "Rainbow School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "RAJD00000RAJXY",
"billerName": "Raj Durasth Shiksha",
"billerAliasName": "Raj Durasth Shiksha",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-02-2023"
},
{
"billerId": "EDU013154RAJ01",
"billerName": "Raj Public Senior Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "RAJU00000GWA4G",
"billerName": "Raj Uttam Private Iti",
"billerAliasName": "Raj Uttam Private Iti",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2020"
},
{
"billerId": "RAJA00000NAM7V",
"billerName": "Rajammal Rangasamy Industrial Training Institute",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "RAJA00000WBLVP",
"billerName": "Rajapur Islamia Madrasah Trust",
"billerAliasName": "Rajapur Islamia Madrasah Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-09-2023"
},
{
"billerId": "RAJA00000AHDK9",
"billerName": "Rajasthan Eglish Higher Secondary School Managed By Rajasthan Sewa Samiti",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "RAJA00000AHDQ4",
"billerName": "Rajasthan Hindi High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-04-2021"
},
{
"billerId": "RAJA00000AHDQ4",
"billerName": "Rajasthan Hindi High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-04-2021"
},
{
"billerId": "RAJA00000AHDQ4",
"billerName": "Rajasthan Hindi High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU013155RAJ01",
"billerName": "Rajasthan Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013156RAJ01",
"billerName": "Rajdhani Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013157RAJ01",
"billerName": "Rajdhani School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013158RAJ01",
"billerName": "Rajeev Shiksan Sansthan",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013159RAJ01",
"billerName": "Rajmata Krishna Kumari Girls Pub Sch",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "RAJS00000RAJ8V",
"billerName": "Rajshree International School Bansur",
"billerAliasName": "Rajshree International School Bansur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-11-2023"
},
{
"billerId": "RAJS00000ALWIL",
"billerName": "RAJSHREE INTERNATIONAL SCHOOL BANSUR",
"billerAliasName": "RAJSHREE INTERNATIONAL SCHOOL BANSUR",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-11-2023"
},
{
"billerId": "RAMS00000UTPEG",
"billerName": "Ram Sundar Yadav Uchchatar Madhyamik Vidyalay",
"billerAliasName": "Ram Sundar Yadav Uchchatar Madhyamik Vidyalay",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-06-2023"
},
{
"billerId": "RAMS00000UTPEG",
"billerName": "Ram Sundar Yadav Uchchatar Madhyamik Vidyalay",
"billerAliasName": "Ram Sundar Yadav Uchchatar Madhyamik Vidyalay",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-06-2023"
},
{
"billerId": "RAMS00000UTPEG",
"billerName": "Ram Sundar Yadav Uchchatar Madhyamik Vidyalay",
"billerAliasName": "Ram Sundar Yadav Uchchatar Madhyamik Vidyalay",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-06-2023"
},
{
"billerId": "RAMS00000UTPEG",
"billerName": "Ram Sundar Yadav Uchchatar Madhyamik Vidyalay",
"billerAliasName": "Ram Sundar Yadav Uchchatar Madhyamik Vidyalay",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-06-2023"
},
{
"billerId": "RAMJ00000JAKLD",
"billerName": "Ramji Classes",
"billerAliasName": "Ramji Classes",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-09-2024"
},
{
"billerId": "EDU013160RAJ01",
"billerName": "Ramprasad Bohara Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "RAMP00000WBL3Y",
"billerName": "Rampur Itu Memorial Kg School",
"billerAliasName": "Rampur Itu Memorial Kg School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-12-2023"
},
{
"billerId": "EDU013161RAJ01",
"billerName": "Rana International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013162RAJ01",
"billerName": "Rana Pratap English Medium School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013163RAJ01",
"billerName": "Rani Devendra Kumari Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "RANI00000CHE72",
"billerName": "Rani Institute Of Scholastic Education Private Limited",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "EDU013164RAJ01",
"billerName": "Rao Dalip Singh Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "EDU013165RAJ01",
"billerName": "Rao Gheesa Ram Shiksha Niketan",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "RASH00000ALWBP",
"billerName": "Rashtriya Global School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "RASH00000BIKKW",
"billerName": "Rashtriya Public Primary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-12-2020"
},
{
"billerId": "RASH00000BIKFX",
"billerName": "Rashtriya Public Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-12-2020"
},
{
"billerId": "RASH00000BIKXQ",
"billerName": "Rashtriya Sahayak Higher Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-12-2020"
},
{
"billerId": "RAVI00000RAJCR",
"billerName": "Ravi Public School Sansthan Babriya",
"billerAliasName": "Ravi Public School Sansthan Babriya",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-10-2023"
},
{
"billerId": "RAVI00000CHEGL",
"billerName": "Ravindra Bharathi Global School - Kolkata",
"billerAliasName": "Ravindra Bharathi Global School - Kolkata",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-01-2022"
},
{
"billerId": "REGI00000AJMVL",
"billerName": "Regional Institute of Education Ajmer",
"billerAliasName": "Regional Institute of Education Ajmer",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-11-2023"
},
{
"billerId": "RENG00000TNDFA",
"billerName": "Rengasamy Educational Trust",
"billerAliasName": "Rengasamy Educational Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-03-2023"
},
{
"billerId": "REVO00000CHESY",
"billerName": "Revoor Padmanabha Chettys Matriculation Higher Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "RGMC00000ANPHG",
"billerName": "RGM College Of Engineering And Technology Autonomous Nandyal",
"billerAliasName": "RGM College Of Engineering And Technology Autonomous Nandyal",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-01-2023"
},
{
"billerId": "RISI00000NWDVC",
"billerName": "Rising Star Academy Education Society",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "RITA00000PUNVT",
"billerName": "Ritambhra Public School",
"billerAliasName": "Ritambhra Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-03-2023"
},
{
"billerId": "RITA00000PUNVT",
"billerName": "Ritambhra Public School",
"billerAliasName": "Ritambhra Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-03-2023"
},
{
"billerId": "RIWA00000MEGQ5",
"billerName": "Riwar College",
"billerAliasName": "Riwar College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-04-2023"
},
{
"billerId": "RKMO00000GUNDU",
"billerName": "Rk Model School Repalle",
"billerAliasName": "Rk Model School Repalle",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-11-2023"
},
{
"billerId": "RKTA00000THA5D",
"billerName": "Rk Talreja College Of Arts Science And Commerce Degree Aided",
"billerAliasName": "Seva Sadan Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "RKTA00000THAFP",
"billerName": "Rk Talreja College Of Arts Science And Commerce Degree Unaided",
"billerAliasName": "Sevan Sadan Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "RKUN00000RJK60",
"billerName": "RK University",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "RKUN00000RJKQO",
"billerName": "RK University Ayurvedic College And Hospital",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "RKUN00000RJKXK",
"billerName": "Rk University Homoeopethic College And Hospital",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "RNTC00000RAJ8E",
"billerName": "RNT College of B ED",
"billerAliasName": "RNT College of B ED",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-09-2023"
},
{
"billerId": "RNTG00000RAJEK",
"billerName": "RNT Girls School Of Bstc",
"billerAliasName": "RNT Girls School Of Bstc",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "26-09-2023"
},
{
"billerId": "RNTP00000RAJFY",
"billerName": "RNT PG College Kapasan",
"billerAliasName": "RNT PG College Kapasan",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-02-2023"
},
{
"billerId": "ABLP02000KNGVQ",
"billerName": "Rose Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ROSH00000MAH3J",
"billerName": "Roshni Education Societys",
"billerAliasName": "Roshni Education Societys",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2023"
},
{
"billerId": "ROYA00000JHAVQ",
"billerName": "Royal Roots Play School",
"billerAliasName": "Royal Roots Play School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-06-2024"
},
{
"billerId": "RRED00023NATYL",
"billerName": "RR Educational Trust",
"billerAliasName": "RR Educational Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-01-2026"
},
{
"billerId": "RRED00026NATPJ",
"billerName": "RR Educational Trust B.ED College",
"billerAliasName": "RR Educational Trust B.ED College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-01-2026"
},
{
"billerId": "RRED00029NAT2X",
"billerName": "RR Educational Trust JR College of Science and Commerce",
"billerAliasName": "RR Educational Trust JR College of Science and Commerce",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-01-2026"
},
{
"billerId": "RRED00023NAT6Z",
"billerName": "RR Educational Trust LIL Wings",
"billerAliasName": "RR Educational Trust LIL Wings",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-01-2026"
},
{
"billerId": "RRGL00022NAT0R",
"billerName": "RR Global School Primary",
"billerAliasName": "RR Global School Primary",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-01-2026"
},
{
"billerId": "RRGL00020NATQD",
"billerName": "RR Global School Secondary",
"billerAliasName": "RR Global School Secondary",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-01-2026"
},
{
"billerId": "RUDR00000CHE45",
"billerName": "Rudrappasamy School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "RVIN00000GUNAU",
"billerName": "RV Institute of technology Rompicherla",
"billerAliasName": "RV Institute of technology Rompicherla",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-11-2023"
},
{
"billerId": "SDPA00000VAD4U",
"billerName": "S D Patel Vidyalaya Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "SDPA00000VADAJ",
"billerName": "S D Patel Vidyalaya Secondary And Higher Secondary",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "SDPU00000MAHGT",
"billerName": "S D Public School",
"billerAliasName": "S D Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2023"
},
{
"billerId": "SRIP00000TND6S",
"billerName": "S R I Polytechnic College",
"billerAliasName": "S R I Polytechnic College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-03-2023"
},
{
"billerId": "SRPU00000UTPTI",
"billerName": "S R Public School",
"billerAliasName": "S R Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-03-2023"
},
{
"billerId": "SKEN00000THAT4",
"billerName": "S.K.English School",
"billerAliasName": "S.K.English School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2020"
},
{
"billerId": "APPFEE000KER79",
"billerName": "Sabarigiri Higher Secondary School, Anchal, Kollam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER80",
"billerName": "Sabarigiri International School, Trivandrum",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER81",
"billerName": "Sabarigiri New Generation School, Nilamel, Kollam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER82",
"billerName": "Sabarigiri Residential School Anchal, Kollam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER83",
"billerName": "Sabarigiri Senior Secondary School, Punalur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DKAFEE000MAH01",
"billerName": "Sacred Heart Convent High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP02000NTP2J",
"billerName": "Sacred Heart Day High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SACR00000NTP2J",
"billerName": "Sacred Heart Day High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU014052TND01",
"billerName": "Sacred Heart School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-01-2026"
},
{
"billerId": "SACR00000CHE0U",
"billerName": "Sacred Hearts Nursery and Primary School",
"billerAliasName": "Sacred Hearts Nursery and Primary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-11-2023"
},
{
"billerId": "SADH00000KACPG",
"billerName": "Sadhu Vaswani International School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SADH00000KACA8",
"billerName": "Sadhu Vaswani Working Women Hostel",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-03-2021"
},
{
"billerId": "SADH00000KACA8",
"billerName": "Sadhu Vaswani Working Women Hostel",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-03-2021"
},
{
"billerId": "SADH00000KACA8",
"billerName": "Sadhu Vaswani Working Women Hostel",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SAGA00000TELWB",
"billerName": "Sagar Grammar High School",
"billerAliasName": "Sagar Grammar High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-05-2024"
},
{
"billerId": "EDU001364ANI01",
"billerName": "Sagritara School",
"billerAliasName": "Sagritara School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-05-2024"
},
{
"billerId": "EDU001364ANI01",
"billerName": "Sagritara School",
"billerAliasName": "Sagritara School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-05-2024"
},
{
"billerId": "EDU001364ANI01",
"billerName": "Sagritara School",
"billerAliasName": "Sagritara School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-06-2024"
},
{
"billerId": "EDU001364ANI01",
"billerName": "Sagritara School",
"billerAliasName": "Sagritara School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-06-2024"
},
{
"billerId": "EDU001364ANI01",
"billerName": "Sagritara School",
"billerAliasName": "Sagritara School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-06-2024"
},
{
"billerId": "EDU001364ANI01",
"billerName": "Sagritara School",
"billerAliasName": "Sagritara School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-06-2024"
},
{
"billerId": "EDU001364ANI01",
"billerName": "Sagritara School",
"billerAliasName": "Sagritara School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-06-2024"
},
{
"billerId": "SAHI00000RIPF2",
"billerName": "Sahid Sanjay Yadav Govt Hr Sec School",
"billerAliasName": "Sahid Sanjay Yadav Govt Hr Sec School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-12-2023"
},
{
"billerId": "ABLP01000KHO90",
"billerName": "Sai Educational Charitable Trust",
"billerAliasName": "Sai Educational Charitable Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SAIR00000ANPF1",
"billerName": "Sai Rajeswari Institute Of Technology Proddatur",
"billerAliasName": "Sai Rajeswari Institute Of Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-02-2023"
},
{
"billerId": "SAIR00000ANPF1",
"billerName": "Sai Rajeswari Institute Of Technology Proddatur",
"billerAliasName": "Sai Rajeswari Institute Of Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-02-2023"
},
{
"billerId": "SAIN00000KER21",
"billerName": "Saingits College Of Engineering",
"billerAliasName": "Saingits College Of Engineering",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-04-2023"
},
{
"billerId": "SAIN00000KER21",
"billerName": "Saingits College Of Engineering",
"billerAliasName": "Saingits College Of Engineering",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-04-2023"
},
{
"billerId": "SANKML000RAJ12",
"billerName": "Saint Anees Sr Sec School",
"billerAliasName": "Saint Anees Sr Sec School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "APPFEE000KER89",
"billerName": "Salafi English Medium School ,Tirur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER88",
"billerName": "Salafi English Medium School, Mathottam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP01000WMDMT",
"billerName": "Samaj Kalyan Nursing Institute",
"billerAliasName": "Samaj Kalyan Nursing Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2021"
},
{
"billerId": "APPFEE000KER90",
"billerName": "San Jos Public School ,Pavaratty",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SANJ00000KERWN",
"billerName": "Sanjo E M High School",
"billerAliasName": "Sanjo E M High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-11-2022"
},
{
"billerId": "SANK00000KARJB",
"billerName": "Sankalpa School of Nursing",
"billerAliasName": "Sankalpa School of Nursing",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-07-2024"
},
{
"billerId": "SANS00000MAH5M",
"billerName": "Sanskar Abhyasika",
"billerAliasName": "Sanskar Abhyasika",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-09-2023"
},
{
"billerId": "SANS00000WBLB4",
"billerName": "Sanskriti Educational System",
"billerAliasName": "Sanskriti Educational System",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "26-09-2024"
},
{
"billerId": "ABLP02000JLDYW ",
"billerName": "Sant baba bhag singh international school",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP0200JLDYW ",
"billerName": "Sant baba bhag singh international school",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SANT00028DELXQ",
"billerName": "Sant Kripal Model School",
"billerAliasName": "Sant Kripal Model School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-01-2026"
},
{
"billerId": "APPFEE000KER91",
"billerName": "Santa Maria Senior Secondary School, Santhome",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "GJIN00000KER21",
"billerName": "Santhome Central School,Mookkannoor",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SANT00000UTPD5",
"billerName": "Santosh Kumar Inter College Hardoi",
"billerAliasName": "Santosh Kumar Inter College Hardoi",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-02-2023"
},
{
"billerId": "SARA00000RNCZE",
"billerName": "Sarala Birla University",
"billerAliasName": "Sarala Birla University",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2020"
},
{
"billerId": "SARA00000BPL3B",
"billerName": "Sarasvati Vidhya Mandir",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-04-2023"
},
{
"billerId": "APPFEE000KER92",
"billerName": "Saraswathi Vidya Mandir, Kalloorkad, Thodupuzha",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER93",
"billerName": "Saraswathy Vidhyanikethan Central School ,Perambra",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER94",
"billerName": "Saraswathy Vidyanikethan Central School, Engandiyur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SARA00000RAJ18",
"billerName": "Saraswati Model School Samiti Goluwala Hanumangarh",
"billerAliasName": "Saraswati Model School Samiti Goluwala Hanumangarh",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-09-2023"
},
{
"billerId": "SARA00000RAJ18",
"billerName": "Saraswati Model School Samiti Goluwala Hanumangarh",
"billerAliasName": "Saraswati Model School Samiti Goluwala Hanumangarh",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-09-2023"
},
{
"billerId": "SARA00000RAJ18",
"billerName": "Saraswati Model School Samiti Goluwala Hanumangarh",
"billerAliasName": "Saraswati Model School Samiti Goluwala Hanumangarh",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-09-2023"
},
{
"billerId": "SARA00000NAT6I",
"billerName": "Saraswati Public Shiksha Samiti Talwara Jheel",
"billerAliasName": "Saraswati Public Shiksha Samiti Talwara Jheel",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-11-2022"
},
{
"billerId": "SARA00000NAT6I",
"billerName": "Saraswati Public Shiksha Samiti Talwara Jheel",
"billerAliasName": "Saraswati Public Shiksha Samiti Talwara Jheel",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-11-2022"
},
{
"billerId": "SARA00000NAT6I",
"billerName": "Saraswati Public Shiksha Samiti Talwara Jheel",
"billerAliasName": "Saraswati Public Shiksha Samiti Talwara Jheel",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "SARA00000NAT6I",
"billerName": "Saraswati Public Shiksha Samiti Talwara Jheel",
"billerAliasName": "Saraswati Public Shiksha Samiti Talwara Jheel",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "SARA00000ODI6B",
"billerName": "Saraswati Shishu Vidya Mandir",
"billerAliasName": "Saraswati Shishu Vidya Mandir",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-04-2022"
},
{
"billerId": "ABLP04000ODI6B",
"billerName": "Saraswati Shishu Vidya Mandir",
"billerAliasName": "Saraswati Shishu Vidya Mandir",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-05-2022"
},
{
"billerId": "SARA00020MAPWM",
"billerName": "Saraswati Shishu Vidya Mandir Higher Secondary School Binaganj",
"billerAliasName": "Saraswati Shishu Vidya Mandir Higher Secondary School Binaganj",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-12-2025"
},
{
"billerId": "SARA00000SURNF",
"billerName": "Saraswati Vidhyalay Punagam Surat",
"billerAliasName": "Saraswati Vidhyalay Punagam Surat",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2020"
},
{
"billerId": "SARO00000LUCAM",
"billerName": "Saroj College Of Engineering And Polytechnic",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SARO00000LUCQK",
"billerName": "Saroj Institute Of Technology And Management",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SARV00000RAJ6S",
"billerName": "Sarvepalli Dr Radha Krishnan College Bagidora",
"billerAliasName": "Sarvepalli Dr Radha Krishnan College Bagidora",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-10-2023"
},
{
"billerId": "SATG00000ASM4Y",
"billerName": "Satgaon High School",
"billerAliasName": "Satgaon High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-03-2023"
},
{
"billerId": "SATY00000RAJQM",
"billerName": "Satya Lakshya Euro World School",
"billerAliasName": "Satya Lakshya Euro World School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "27-07-2022"
},
{
"billerId": "SATY00000WGDDY",
"billerName": "SATYAM EDUCATIONAL SOCIETY VISSAKODERU",
"billerAliasName": "SATYAM EDUCATIONAL SOCIETY VISSAKODERU",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2023"
},
{
"billerId": "SATY00000WBLYM",
"billerName": "Satyanarayan Academy",
"billerAliasName": "Satyanarayan Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-05-2022"
},
{
"billerId": "SATY00000WBLYM",
"billerName": "Satyanarayan Academy",
"billerAliasName": "Satyanarayan Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-05-2022"
},
{
"billerId": "SAWA00000STRX2",
"billerName": "Sawakar Homoeopathic Medical college Satara",
"billerAliasName": "Sawakar Homoeopathic Medical college Satara",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-11-2021"
},
{
"billerId": "SAWK00000STRC0",
"billerName": "Sawkar Pharmacy College",
"billerAliasName": "Sawkar Pharmacy College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-11-2021"
},
{
"billerId": "SBBS00000PUNFU",
"billerName": "SBBS Lahore Khalsa SEN SEC School",
"billerAliasName": "SBBS Lahore KHALSA SEN SEC School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2023"
},
{
"billerId": "SBIO00000KAR05",
"billerName": "SBI Officers Association Education Society",
"billerAliasName": "SBI Officers Association Education Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-09-2022"
},
{
"billerId": "SBIO00000KAR05",
"billerName": "SBI Officers Association Education Society",
"billerAliasName": "SBI Officers Association Education Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-09-2022"
},
{
"billerId": "SBMP00013UTPTH",
"billerName": "SBM Public School",
"billerAliasName": "SBM Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-01-2026"
},
{
"billerId": "CLBKML000UTP02",
"billerName": "Sbs College Of Iti",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000UTP03",
"billerName": "Sbs College Of Management",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000UTP04",
"billerName": "Sbs College Of Pharmacy",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SBSS00000JHAJM",
"billerName": "SBSSPSJ College",
"billerAliasName": "SBSSPSJ College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-03-2023"
},
{
"billerId": "SCHO00000RJKLI",
"billerName": "School Of Agriculture Science Rk University - Shri Shamjibhai Harjibhai Talaviya Charitable Trust",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "SCHO00000RJKEJ",
"billerName": "School Of Business Studies Rk University",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "SCHO00000RJKV9",
"billerName": "School Of Computer Science - Rk University",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "SCHO00000RJKPM",
"billerName": "School Of Design Rk University - Shtc Trust",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "SCHO00000RJK9M",
"billerName": "School Of Diploma Studies - Rk University",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "SCHO00000RJK1O",
"billerName": "School Of Engineering - Rk University",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "SCHO00000RJKBL",
"billerName": "School Of Management - Rk University",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "SCHO00000RJKHU",
"billerName": "School Of Pharmacy - Rk University",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "SCHO00000RJKF0",
"billerName": "School Of Physiotherapy - Rk University",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "SCHO00000RJKL8",
"billerName": "School Of Science - Rk University",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "SDMC00000RAJG7",
"billerName": "Sdmc Govt Girl Sr Sec School Railmagra",
"billerAliasName": "Sdmc Govt Girl Sr Sec School Railmagra",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-10-2023"
},
{
"billerId": "APPFEE000KER95",
"billerName": "Sdpy Central School Palluruthy, Ernakulam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SEER00000RAJEB",
"billerName": "Seervi International School Jaitaran",
"billerAliasName": "Seervi International School Jaitaran",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-11-2022"
},
{
"billerId": "SEPH00000BDMHO",
"billerName": "Sephali Memorial Nursing Institute",
"billerAliasName": "Sephali Memorial Nursing Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2023"
},
{
"billerId": "SETH00000THAAS",
"billerName": "Seth Parsram Parumal New Era Secondary High School",
"billerAliasName": "Seva Sadan Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "SETH00000THAA3",
"billerName": "Seth Parsram Parumal New Era Secondary Jr College",
"billerAliasName": "Seva Sadan Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "SEVA00000KARN8",
"billerName": "Seva Bharathi School",
"billerAliasName": "Seva Bharathi School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-03-2023"
},
{
"billerId": "SEVA00000THA7W",
"billerName": "Seva Sadan",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "SEVA00000THAY6",
"billerName": "Seva Sadan College Of Arts Science And Commerce",
"billerAliasName": "Seva Sadan trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "SEVA00000THADS",
"billerName": "Seva Sadan College Of Design Studies",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "SEVA00000THACI",
"billerName": "Seva Sadan College Of Education Bed Aided",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "SEVA00000THAC0",
"billerName": "Seva Sadan College Of Education Bed Unaided",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "SEVA00000THAM5",
"billerName": "Seva Sadan College Of Education Ded",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "SEVA00000THAPW",
"billerName": "Seva Sadan College Of Education Ignou",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "SEVA00000THA7M",
"billerName": "Seva Sadan College Of Education Med",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-11-2020"
},
{
"billerId": "SEVA00000MUMZG",
"billerName": "Seva Sadan College Of Education Phd",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "SEVE00000SUR2D",
"billerName": "Seven Steps Pre School",
"billerAliasName": "Seven Steps Pre School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "SEVE00000SURDJ",
"billerName": "Seven Steps School",
"billerAliasName": "Seven Steps School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-04-2023"
},
{
"billerId": "SEVE00000ANIFS",
"billerName": "Seventh Day Adventist School Port Blair",
"billerAliasName": "Seventh Day Adventist School Port Blair",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-09-2023"
},
{
"billerId": "SGSP00000MAHD4",
"billerName": "SGSPS Institute Of Pharmacy",
"billerAliasName": "SGSPS Institute Of Pharmacy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-11-2022"
},
{
"billerId": "SHAS00000BPLOY",
"billerName": "Sha Shib Aviation Academey",
"billerAliasName": "Sha Shib Aviation Academey",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2020"
},
{
"billerId": "SHAS00000BPL1O",
"billerName": "Sha Shib College Of Engineering",
"billerAliasName": "Sha Shib College Of Engineering",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2020"
},
{
"billerId": "SHAS00000BPLMS",
"billerName": "Sha Shib Flying Acadmey",
"billerAliasName": "Sha Shib Flying Acadmey",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2020"
},
{
"billerId": "SHAK00000UTPE3",
"billerName": "Shakuntala Krishna Institute Of Technology",
"billerAliasName": "Shakuntala Krishna Institute Of Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-10-2024"
},
{
"billerId": "SHAN00000KARQT",
"billerName": "Shanthi Vidya Nikethana School",
"billerAliasName": "Shanthi Vidya Nikethana School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-03-2023"
},
{
"billerId": "SHAN00000KARQT",
"billerName": "Shanthi Vidya Nikethana School",
"billerAliasName": "Shanthi Vidya Nikethana School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-03-2023"
},
{
"billerId": "SHAN00000ANP0X",
"billerName": "Shanthiram College Of Pharmacy Nandyal",
"billerAliasName": "Shanthiram College Of Pharmacy Nandyal",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2023"
},
{
"billerId": "SHAN00000AHDAG",
"billerName": "Shanti Asiatic School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SHAN00000NATTJ",
"billerName": "Shanti Niketan Educational Society",
"billerAliasName": "Shanti Niketan Educational Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-04-2022"
},
{
"billerId": "SHEM00000MAN8K",
"billerName": "Shemrock Kids Garden",
"billerAliasName": "Shemrock Kids Garden",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-04-2023"
},
{
"billerId": "SHEM00000BIH3Q",
"billerName": "Shemrock Suhird Nagar",
"billerAliasName": "Shemrock Suhird Nagar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-02-2023"
},
{
"billerId": "SHER00000MOHPK",
"billerName": "Sherwood Convent School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2020"
},
{
"billerId": "CLBKML000MAH10",
"billerName": "Sheth N.K.T.T.Jr College Of Commerce And Sheth J.T.Jr College Of Arts and Science",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000MAH11",
"billerName": "Sheth Nkt English Medium High School And Jr Colle",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SHIM00000RAJVP",
"billerName": "Shimla Children Academy Boontoli",
"billerAliasName": "Shimla Children Academy Boontoli",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "26-09-2023"
},
{
"billerId": "SHIM00000RAJVP",
"billerName": "Shimla Children Academy Boontoli",
"billerAliasName": "Shimla Children Academy Boontoli",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "26-09-2023"
},
{
"billerId": "SHIM00000RAJVP",
"billerName": "Shimla Children Academy Boontoli",
"billerAliasName": "Shimla Children Academy Boontoli",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "26-09-2023"
},
{
"billerId": "SHIM00000RAJEL",
"billerName": "Shimla Madhyamik Vidhlaya",
"billerAliasName": "Shimla Madhyamik Vidhlaya",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "26-09-2023"
},
{
"billerId": "SHIR00000ANPJI",
"billerName": "Shiridi Sai Educational Society",
"billerAliasName": "Shiridi Sai Educational Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-09-2022"
},
{
"billerId": "SHIS00000TEL95",
"billerName": "Shishu Vihar Educational And Welfare Society",
"billerAliasName": "Shishu Vihar Educational And Welfare Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-05-2024"
},
{
"billerId": "SHIV00000UTPOZ",
"billerName": "Shiv Mol Singh KP Singh Siksha Sansthan",
"billerAliasName": "Shiv Mol Singh KP Singh Siksha Sansthan",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-02-2023"
},
{
"billerId": "SEAKML000TEL01",
"billerName": "Shraddha Educational Academy",
"billerAliasName": "Shraddha Educational Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-09-2020"
},
{
"billerId": "SHRA00000JPRXU",
"billerName": "Shradha Development School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-01-2021"
},
{
"billerId": "SHRE00000RJKMZ",
"billerName": "Shree Avdhesh Education Trust/School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "SHRE00000RJKFQ",
"billerName": "Shree C K G Primary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "SHRE00000RJKKX",
"billerName": "Shree Hari Education And Charitable Trust/School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-04-2023"
},
{
"billerId": "SHRE00000GNRBB",
"billerName": "Shree Hari International Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SHRE00000GUJEQ",
"billerName": "Shree Nobel Education Trust Surat",
"billerAliasName": "Shree Nobel Education Trust Surat",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-01-2023"
},
{
"billerId": "SHRE00000MUM2V",
"billerName": "Shree Panchamukhi Charitable Trusts - Shree Siddhi Vinayak English School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-11-2020"
},
{
"billerId": "SHRE00000GUJNP",
"billerName": "Shree Sahkar High School Lalpur",
"billerAliasName": "Shree Sahkar High School Lalpur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "SHRE00000SURJ8",
"billerName": "Shree Shantaram Bhat English Medium School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SHRE00000MAH4G",
"billerName": "Shree Swami Vivekanand English School",
"billerAliasName": "Shree Swami Vivekanand English School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-12-2022"
},
{
"billerId": "SHRE00000GNRIZ",
"billerName": "Shree Swaminarayan Gurukul Vidhyalaya - Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SHRE00000GNRPG",
"billerName": "Shree Swaminarayan Institute Of Technology",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SHRE00000GNRQ6",
"billerName": "Shree Swaminarayan Polytechnic",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SHRE00000RJKYM",
"billerName": "Shree Vallabh Kanya Kelawani Mandal",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "SHRE00000SURPA",
"billerName": "Shreenathji Education Trust",
"billerAliasName": "Shreenathji Education Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "SHRI00000RAJHT",
"billerName": "Shri AAIJEE Shikshan Sansthan",
"billerAliasName": "Shri AAIJEE Shikshan Sansthan",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-02-2023"
},
{
"billerId": "SHRI00000RAJ5T",
"billerName": "Shri Agrasen Snatkottar Shiksha Mahavidyalaya",
"billerAliasName": "Shri Agrasen Snatkottar Shiksha Mahavidyalaya",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "26-09-2024"
},
{
"billerId": "SHRI00000UTPRG",
"billerName": "Shri Braj Bihari Mehrotra Vidya Mandir Inter Collage",
"billerAliasName": "Shri Braj Bihari Mehrotra Vidya Mandir Inter Collage",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-03-2025"
},
{
"billerId": "SHRI00000SURB2",
"billerName": "Shri C J Patel Vidhyadham Commerce College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2020"
},
{
"billerId": "SHRI00000SUR47",
"billerName": "Shri C J Patel Vidhyadham Law College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2020"
},
{
"billerId": "SHRI00000RAJQ3",
"billerName": "Shri Char Bhuja Bal Niketan Madhyamik School",
"billerAliasName": "Shri Char Bhuja Bal Niketan Madhyamik School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-11-2023"
},
{
"billerId": "SHRI00000RJK32",
"billerName": "Shri Hari School",
"billerAliasName": "Shri Hari School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "SHRI00000ALLGV",
"billerName": "Shri Kanha Shyam Educational Evam Charitable Trust",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SHRI00000MAPF2",
"billerName": "Shri Krishna Pharmacy College",
"billerAliasName": "Shri Krishna Pharmacy College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-09-2022"
},
{
"billerId": "SHRI00000TNDON",
"billerName": "Shri Krishnaswamy College For Women",
"billerAliasName": "Shri Krishnaswamy College For Women",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "17-02-2023"
},
{
"billerId": "SHRI00000TNDKI",
"billerName": "Shri Krishnaswamy Matric HR SEC School Anna Nagar",
"billerAliasName": "Shri Krishnaswamy Matric HR SEC School Anna Nagar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-03-2023"
},
{
"billerId": "SHRI00000TND2U",
"billerName": "Shri Krishnaswamy Matric HR SEC School Nungambakkam",
"billerAliasName": "Shri Krishnaswamy Matric HR SEC School Nungambakkam",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "04-03-2023"
},
{
"billerId": "SHRI00000TNDFF",
"billerName": "Shri Krishnaswamy Matric HR SEC School Villivakkam",
"billerAliasName": "Shri Krishnaswamy Matric HR SEC School Villivakkam",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-03-2023"
},
{
"billerId": "SHRI00000TNDFF",
"billerName": "Shri Krishnaswamy Matric HR SEC School Villivakkam",
"billerAliasName": "Shri Krishnaswamy Matric HR SEC School Villivakkam",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-03-2023"
},
{
"billerId": "SHRI00000TND19",
"billerName": "Shri Krishnaswamy Matriculation School Ayapakkam",
"billerAliasName": "Shri Krishnaswamy Matriculation School Ayapakkam",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "04-03-2023"
},
{
"billerId": "SHRI00000TNDL6",
"billerName": "Shri M A Krishnaswamy MHSS Avadi",
"billerAliasName": "Shri M A Krishnaswamy MHSS Avadi",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-03-2023"
},
{
"billerId": "SHRI00000VAL9O",
"billerName": "Shri M K Mehta English Medium School",
"billerAliasName": "Shri M K Mehta English Medium School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SHRI00000KAR55",
"billerName": "Shri Marikamba Govt PU College",
"billerAliasName": "Shri Marikamba Govt PU College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-04-2023"
},
{
"billerId": "SHRI00000GWAHF",
"billerName": "Shri Pratap Private Iti",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-11-2020"
},
{
"billerId": "SHRI00000PTNQG",
"billerName": "Shri Ram Centennial School Patna",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SHRI00000GUJRU",
"billerName": "Shri Sahkar Prathmik School",
"billerAliasName": "Shri Sahkar Prathmik School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-08-2023"
},
{
"billerId": "SHRI00000GUJUQ",
"billerName": "Shri Sanskar Vidhya Niketan",
"billerAliasName": "Shri Sanskar Vidhya Niketan",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-02-2023"
},
{
"billerId": "SHRI00000KAR6D",
"billerName": "Shri Satyam College",
"billerAliasName": "Shri Satyam College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-09-2023"
},
{
"billerId": "SHRI00000ALG5D",
"billerName": "Shri Shivdan Singh Institute Of Techonology And Managment",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SHRI00000RJK94",
"billerName": "Shri Shubham High School",
"billerAliasName": "Shri Shubham High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "SHRI00000SURZK",
"billerName": "Shri Swaminarayan Gurukul",
"billerAliasName": "Shri Swaminarayan Gurukul",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "SHRI00000MAP1O",
"billerName": "Shri Vinayak Convent H S School Dalauda",
"billerAliasName": "Shri Vinayak Convent H S School Dalauda",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-04-2023"
},
{
"billerId": "SHUB00000RJK5R",
"billerName": "Shubham Uchchatar Madhyamik Shala",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "SHUB00000RJKU9",
"billerName": "Shubham Vidhyalaya",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "SHYA00020NATNN",
"billerName": "Shyam Foundation Deoria",
"billerAliasName": "Shyam Foundation Deoria",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-01-2026"
},
{
"billerId": "SICA00000IND0U",
"billerName": "Sica School",
"billerAliasName": "Sica School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SICA00000IND4P",
"billerName": "Sica Senior Secondary School No 3",
"billerAliasName": "Sica Senior Secondary School No 3",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SIDD00000TELQX",
"billerName": "Siddartha Degree And Pg College",
"billerAliasName": "Siddartha Degree And Pg College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-11-2022"
},
{
"billerId": "SIDD00000RAJ0G",
"billerName": "Siddhi Vinayak",
"billerAliasName": "Siddhi Vinayak",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-06-2022"
},
{
"billerId": "SIDD00000RAJ0G",
"billerName": "Siddhi Vinayak",
"billerAliasName": "Siddhi Vinayak",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-06-2022"
},
{
"billerId": "SIGM00000VAD9X",
"billerName": "Sigma College Of Management Studies",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "SIGM00000VAD3O",
"billerName": "Sigma Institute Of Engineering",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "SIGM00000VADPK",
"billerName": "Sigma Institute Of Engineering MBA Programme",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "SIGM00000VADLW",
"billerName": "Sigma Institute Of Nursing",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "SIGM00000VAD6B",
"billerName": "Sigma Institute Of Pharmacy",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "SIGM00000VAD5E",
"billerName": "Sigma Institute Of Physiotherapy",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "SIGM00000VADJW",
"billerName": "Sigma Institute Of Science And Commerce",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "SIGM00000VADBW",
"billerName": "Sigma Institute Of Technology And Engineering",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "SIGM00000VADIE",
"billerName": "Sigma Institute Of Technology And Engineering - Hostel",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2020"
},
{
"billerId": "SIGM00000VADWD",
"billerName": "Sigma Institute Of Technology And Engineering Polytechnic",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "15-10-2020"
},
{
"billerId": "SINH00000PUNY7",
"billerName": "Sinhagad Technical Education society",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SIRJ00000MAHL8",
"billerName": "Sir J J School of Art Architecture and Design",
"billerAliasName": "Sir J J School of Art Architecture and Design",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "05-10-2024"
},
{
"billerId": "SIRK00000SURWQ",
"billerName": "Sir K P College Of Commerce Surat",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SIRS00000UTT94",
"billerName": "Sir Stephen Hawking Public School",
"billerAliasName": "Sir Stephen Hawking Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-04-2023"
},
{
"billerId": "SIST00000NATEB",
"billerName": "Sister Nivedita Institute",
"billerAliasName": "Sister Nivedita Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-03-2023"
},
{
"billerId": "SITA00016MAP0Y",
"billerName": "Sitamau Public School",
"billerAliasName": "Sitamau Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-01-2026"
},
{
"billerId": "SIXT00000BIHLA",
"billerName": "Sixth Sense International School",
"billerAliasName": "Sixth Sense International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-09-2023"
},
{
"billerId": "SIXT00000BIHLA",
"billerName": "Sixth Sense International School",
"billerAliasName": "Sixth Sense International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-09-2023"
},
{
"billerId": "SIXT00000BIHLA",
"billerName": "Sixth Sense International School",
"billerAliasName": "Sixth Sense International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-09-2023"
},
{
"billerId": "SKYH00000RAJKS",
"billerName": "Sky High Immigration And Education",
"billerAliasName": "Sky High Immigration And Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-10-2023"
},
{
"billerId": "SLOK00000HYDBA",
"billerName": "Sloka Waldorf",
"billerAliasName": "Sloka Waldorf",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2020"
},
{
"billerId": "CSEVEN000KERAT",
"billerName": "Smart Media College",
"billerAliasName": "SMC",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER101",
"billerName": "SMD Public School, Peroor",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SMTC00000KARPT",
"billerName": "Smt Chikkamma Higher Primary And High School",
"billerAliasName": "Smt Chikkamma Higher Primary And High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-12-2024"
},
{
"billerId": "SNEH00000KER7K",
"billerName": "Snehacharya Institute Of Management Technology",
"billerAliasName": "Snehacharya Institute Of Management Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-04-2023"
},
{
"billerId": "SOLA00000MAHWV",
"billerName": "Solapur Vipassana Meditation Centre",
"billerAliasName": "Solapur Vipassana Meditation Centre",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2023"
},
{
"billerId": "SONA00000NATVL",
"billerName": "Sonamukhi College",
"billerAliasName": "Sonamukhi College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-03-2023"
},
{
"billerId": "SOPH00000RAJI0",
"billerName": "Sophia Public School",
"billerAliasName": "Sophia Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-05-2022"
},
{
"billerId": "SOUT00000NATDR",
"billerName": "South End Education Society",
"billerAliasName": "South End Education Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-12-2022"
},
{
"billerId": "SPAN00000WBL2S",
"billerName": "Spandan School And College Of Nursing",
"billerAliasName": "Spandan School And College Of Nursing",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-09-2023"
},
{
"billerId": "SPBE00000SURLT",
"billerName": "SPB English Medium College Of Commerce",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SPRI00026NATJT",
"billerName": "Spring Buds International PreSchool Oshiwara associates with HVPS",
"billerAliasName": "Spring Buds International PreSchool, Oshiwara",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-01-2026"
},
{
"billerId": "CLBKML000UTP06",
"billerName": "Spring Dale Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER103",
"billerName": "Sree Gurudeva Vidyanikethan Central School Penakam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SREE00000NATAL",
"billerName": "Sree Kanteerava Pragati Vidyasamste",
"billerAliasName": "Sree Kanteerava Pragati Vidyasamste",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-01-2023"
},
{
"billerId": "APPFEE000KER104",
"billerName": "Sree Maharshi Vidyalaya ,Nhangattiri",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SREE00000NAT6R",
"billerName": "Sree Naga Educational And Charitable Trust",
"billerAliasName": "Sree Naga Educational And Charitable Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-01-2023"
},
{
"billerId": "APPFEE000KER105",
"billerName": "Sree Narayana Higher Secondary School,Ernakulam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP02000HOOPG",
"billerName": "Sree Ramkrishna Sishu Tirtha",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER106",
"billerName": "Sree Vidyadhiraja English Medium School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SREE00000KER7W",
"billerName": "Sree Vivekananda Padanakendra BED College",
"billerAliasName": "Sree Vivekananda Padanakendra BED College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-04-2023"
},
{
"billerId": "SREE00000KER06",
"billerName": "Sree Vivekananda Padanakendra Diploma In Health Inspector",
"billerAliasName": "Sree Vivekananda Padanakendra Diploma In Health Inspector",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-04-2023"
},
{
"billerId": "SREE00000KER06",
"billerName": "Sree Vivekananda Padanakendra Diploma In Health Inspector",
"billerAliasName": "Sree Vivekananda Padanakendra Diploma In Health Inspector",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-04-2023"
},
{
"billerId": "SREE00000KER44",
"billerName": "Sree Vivekananda Padanakendra English Medium School",
"billerAliasName": "Sree Vivekananda Padanakendra English Medium School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-04-2023"
},
{
"billerId": "SREE00000KERGD",
"billerName": "Sree Vivekananda Padanakendra TTC",
"billerAliasName": "Sree Vivekananda Padanakendra TTC",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-04-2023"
},
{
"billerId": "SREE00000KERIM",
"billerName": "Sree Vivekananda Padanakendram Arts And Science College",
"billerAliasName": "Sree Vivekananda Padanakendram Arts And Science College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-04-2023"
},
{
"billerId": "APPFEE000KER107",
"billerName": "Sreebhadra Vidya Mandir, Chembuthara",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SREE00000KERSK",
"billerName": "Sreenarayana Higher Secondary School",
"billerAliasName": "Sreenarayana Higher Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-03-2023"
},
{
"billerId": "SREE00000TEL9K",
"billerName": "Sreenidhi Institute Of Science And Technology",
"billerAliasName": "Sreenidhi Institute Of Science And Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-09-2022"
},
{
"billerId": "SREE00000TEL9K",
"billerName": "Sreenidhi Institute Of Science And Technology",
"billerAliasName": "Sreenidhi Institute Of Science And Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-09-2022"
},
{
"billerId": "SREE00018TNDFC",
"billerName": "Sreevee Institute of Science",
"billerAliasName": "Sreevee Institute of Science",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-01-2026"
},
{
"billerId": "SRIA00000TNDIS",
"billerName": "Sri Akilandeswari Womens College",
"billerAliasName": "Sri Akilandeswari Womens College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-05-2023"
},
{
"billerId": "SRIA00000NATRZ",
"billerName": "Sri Arunachala Matric HR SEC School",
"billerAliasName": "Sri Arunachala Matric HR SEC School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-01-2023"
},
{
"billerId": "SRIA00000NATW8",
"billerName": "Sri Arunachala Vidhyalaya Nursery And Primary School",
"billerAliasName": "Sri Arunachala Vidhyalaya Nursery And Primary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-02-2023"
},
{
"billerId": "SRIA00000TNDBA",
"billerName": "Sri Arutsai Vetri Vidyalaya Matric HR SEC School",
"billerAliasName": "Sri Arutsai Vetri Vidyalaya Matric HR SEC School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-02-2023"
},
{
"billerId": "SAUKML000CHA01",
"billerName": "Sri Aurobindo School Of Integral Education",
"billerAliasName": "Sri Aurobindo School Of Integral Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "SRIB00000HYD90",
"billerName": "Sri Balaji Dental College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2020"
},
{
"billerId": "SRIB00000ANP9B",
"billerName": "Sri Bhavishya Educational Academy Vijayawada",
"billerAliasName": "Sri Bhavishya Educational Academy Vijayawada",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-09-2022"
},
{
"billerId": "SRIC00000TNDSS",
"billerName": "Sri Chandrasekharendra Saraswathi Viswa Maha Vidyalaya",
"billerAliasName": "SCSVMV",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-07-2024"
},
{
"billerId": "SRII00000KHOXY",
"billerName": "Sri ITI Bhubaneswar",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SRIK00000TNDEA",
"billerName": "Sri Krishnaswamy MHSS KK Nagar",
"billerAliasName": "Sri Krishnaswamy MHSS KK Nagar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-03-2023"
},
{
"billerId": "SRIM00000RAJ6C",
"billerName": "Sri Marudhar Vidhyapeeth Dhorimana",
"billerAliasName": "Sri Marudhar Vidhyapeeth Dhorimana",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-10-2023"
},
{
"billerId": "SRIM00000ANPTY",
"billerName": "Sri Mittapalli Institute Of Technology For Women Guntur",
"billerAliasName": "Sri Mittapalli Institute Of Technology For Women Guntur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-03-2023"
},
{
"billerId": "SRIM00000ANPTY",
"billerName": "Sri Mittapalli Institute Of Technology For Women Guntur",
"billerAliasName": "Sri Mittapalli Institute Of Technology For Women Guntur",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-03-2023"
},
{
"billerId": "SRIP00000NAY2K",
"billerName": "Sri Ploytechnic Komand Nayagargh",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SRIR00016KARO0",
"billerName": "Sri Ramananda Charitable Edu Trust",
"billerAliasName": "Sri Ramananda Charitable Edu Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-01-2026"
},
{
"billerId": "SRIS00000ANPJP",
"billerName": "Sri Sai Krishna Educational Society Kalyandurg",
"billerAliasName": "Sri Sai Krishna Educational Society Kalyandurg",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-03-2022"
},
{
"billerId": "SRIS00000ANPQ2",
"billerName": "Sri Sathya Sai Society for Junior Boys Hostel",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SRIS00000ANP63",
"billerName": "Sri Sathya Sai Society for Junior Boys Hostel- Stores",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SRIS00000ANPJY",
"billerName": "sri sathya sai students and staff welfare society",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SRIS00000TND5Z",
"billerName": "Sri Sukabrahma Maharishi Vidyalayam Matriculation School",
"billerAliasName": "Sri Sukabrahma Maharishi Vidyalayam Matriculation School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2023"
},
{
"billerId": "SRIV00000VEL0O",
"billerName": "Sri Vasavi Matriculation School",
"billerAliasName": "Sri Vasavi Matriculation School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-04-2022"
},
{
"billerId": "ABLP01000CTO0A",
"billerName": "Sri Venkateswara College Of Engineering",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SRKJ00000TEL97",
"billerName": "SRK Junior College",
"billerAliasName": "SRK Junior College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2022"
},
{
"billerId": "APPFEE000KER108",
"billerName": "St Alphonsa English Medium School, Vagamon",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER111",
"billerName": "St Ann&#39;S Carmel Public School ,Thirumarady",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER110",
"billerName": "St Annes Public School Anathadam, Thrissur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP04000DRWER",
"billerName": "St Antonys Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP01000DRWER",
"billerName": "St Antonys Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP04000DRWERD",
"billerName": "St Antonys Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP04000DRWEA",
"billerName": "St Antonys Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP04000DRWE7",
"billerName": "St Antonys Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER112",
"billerName": "St Catherine Icse School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER113",
"billerName": "St Charles Borromeo Convent School, Kollam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER114",
"billerName": "St Francis Assisi English Medium School Kottavattam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000UTT01",
"billerName": "St Francis High School ,Tanakpur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER115",
"billerName": "St George English Medium Up School ,Kottappady",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER116",
"billerName": "St George High School Manimala, Kottayam.",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STGE00000TNDCG",
"billerName": "St George Montessori Higher Secondary School Anbil Nagar Airport Trichy",
"billerAliasName": "St George Montessori Higher Secondary School Anbil Nagar Airport Trichy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-04-2023"
},
{
"billerId": "APPFEE000KER117",
"billerName": "St Goretti Higher Secondary School, Punalur,Kollam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STGR00000KER43",
"billerName": "St Gregorios English Medium School Nellipathy",
"billerAliasName": "St Gregorios English Medium School Nellipathy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-03-2023"
},
{
"billerId": "APPFEE000KER118",
"billerName": "St Gregorios Senior Secondary School ,Mulakuzha",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER119",
"billerName": "St John The Baptist&#39;S Cbse School ,Nedukunnam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER121",
"billerName": "St John&#39;S Higher Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER122",
"billerName": "St Johns Higher Secondary School, Pothundi",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER123",
"billerName": "St Johns Residential Hss ,Karuvelil",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER124",
"billerName": "St Joseph Central School Mundakayam, Kottayam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STJO00000TELMN",
"billerName": "St Joseph Conent School",
"billerAliasName": "St Joseph Conent School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-08-2024"
},
{
"billerId": "APPFEE000KER125",
"billerName": "St Joseph Public School,Pattanakad",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STJO00000NATP9",
"billerName": "ST Joseph s Convent School",
"billerAliasName": "ST Joseph s Convent School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-02-2023"
},
{
"billerId": "STJO00000SIKIC",
"billerName": "ST Josephs Convent School Martam",
"billerAliasName": "ST Josephs Convent School Martam",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "26-09-2023"
},
{
"billerId": "STJO00000JHANC",
"billerName": "ST Josephs School Dumka",
"billerAliasName": "ST Josephs School Dumka",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-04-2023"
},
{
"billerId": "STJO00000AHD6G",
"billerName": "St Josephs Turst/School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-11-2020"
},
{
"billerId": "STMA00000NATUL",
"billerName": "St Mary School",
"billerAliasName": "St Mary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-02-2023"
},
{
"billerId": "DKAFEE000HAR01",
"billerName": "St Mary&#39;s Sr Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STMA00012MAHVF",
"billerName": "St Marys Arts Commerce and Science S R College",
"billerAliasName": "St Marys Arts Commerce and Science S R College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-01-2026"
},
{
"billerId": "APPFEE000KER126",
"billerName": "St Marys Bethany Central School, Valakom , Kollam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STMA00000KARG2",
"billerName": "St Marys English School Parimala Nagar Bangalore",
"billerAliasName": "St Marys English School Parimala Nagar Bangalore",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-04-2023"
},
{
"billerId": "STMA00000KARG2",
"billerName": "St Marys English School Parimala Nagar Bangalore",
"billerAliasName": "St Marys English School Parimala Nagar Bangalore",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-04-2023"
},
{
"billerId": "STMA00000TEL7A",
"billerName": "ST Marys High School",
"billerAliasName": "ST Marys High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2022"
},
{
"billerId": "DKAFEE000HAR02",
"billerName": "St Marys KG School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "STMA00000NATB2",
"billerName": "St Marys LPS Ochanthuruthu",
"billerAliasName": "St Marys LPS Ochanthuruthu",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-12-2022"
},
{
"billerId": "DKAFEE000HAR21",
"billerName": "St Marys Senior Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "APPFEE000KER130",
"billerName": "St Michael&#39;S High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-03-2021"
},
{
"billerId": "APPFEE000KER130",
"billerName": "St Michael&#39;S High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-03-2021"
},
{
"billerId": "DKAFEE000KAR03",
"billerName": "St Paul",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "APPFEE000KER132",
"billerName": "St Pauls Bethani School, Kolenchery, Ernakulam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STPA00000RAJAX",
"billerName": "St Pauls Sr Sec School Banswara",
"billerAliasName": "STPAULS",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-09-2022"
},
{
"billerId": "STPA00000RAJC9",
"billerName": "St Pauls Sr Sec School Dhoinda Rajsamand",
"billerAliasName": "St Pauls Sr Sec School Dhoinda Rajsamand",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-11-2022"
},
{
"billerId": "STPA00000RAJC9",
"billerName": "St Pauls Sr Sec School Dhoinda Rajsamand",
"billerAliasName": "St Pauls Sr Sec School Dhoinda Rajsamand",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-11-2022"
},
{
"billerId": "STPA00000RAJC9",
"billerName": "St Pauls Sr Sec School Dhoinda Rajsamand",
"billerAliasName": "St Pauls Sr Sec School Dhoinda Rajsamand",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "STPA00000RAJC9",
"billerName": "St Pauls Sr Sec School Dhoinda Rajsamand",
"billerAliasName": "St Pauls Sr Sec School Dhoinda Rajsamand",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "STPE00000NAT0S",
"billerName": "St Peters Engineering College",
"billerAliasName": "St Peters Engineering College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "17-09-2024"
},
{
"billerId": "STTH00000UJJ04",
"billerName": "St Thomas High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STVI00000NWDFV",
"billerName": "St Vivekanand Sr Sec School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STVI00000NWDFU",
"billerName": "St Vivekanand Sr Sec School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STXA00000BIH7Q",
"billerName": "St Xaviers High School Aurangabad",
"billerAliasName": "St Xaviers High School Aurangabad",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-10-2023"
},
{
"billerId": "STAN00000ERNNG",
"billerName": "St. Anns HSS Eloor",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number( Eg: SASE ).\r",
"lastUpdated": "12-05-2022"
},
{
"billerId": "STDO00000KTMGK",
"billerName": "St. Dominics College PG",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number( Eg: SDCPGSF ).\r",
"lastUpdated": "12-05-2022"
},
{
"billerId": "STDO00000KTM8I",
"billerName": "St. Dominics College UG",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number( Eg: SDCSF ).\r",
"lastUpdated": "12-05-2022"
},
{
"billerId": "APPFEE000KER140",
"billerName": "St. John&#39;S School Anchal, Kollam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STJO00000EDL8A",
"billerName": "St. Johns Academy",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STJO00000UTPP7",
"billerName": "St. Joseph Academy",
"billerAliasName": "St. Joseph Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SJSKML000HUJ10",
"billerName": "St. Joseph English School",
"billerAliasName": "St. Joseph English School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "APPFEE000KER141",
"billerName": "St. Joseph&#39;S Higher Secondary School, Chengal",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER143",
"billerName": "St. Joseph&#39;S Higher Secondary School, Koonanmavu",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER144",
"billerName": "St. Mary&#39;S Higher Secondary School, Irinjalakuda",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER145",
"billerName": "St. Mary&#39;S Senior Secondary School Ranny",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STMA00000UTPBY",
"billerName": "St. Marys Orthodox School",
"billerAliasName": "St Marys Orthodox School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-10-2024"
},
{
"billerId": "STMA00000PKDR8",
"billerName": "St. Marys Polytechnic College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number&amp;amp;amp;amp;amp;amp;amp;amp;amp;nbsp;( Eg: SMPC ).\r",
"lastUpdated": "12-05-2022"
},
{
"billerId": "APPFEE000KER146",
"billerName": "St. Meera&#39;S Public School, Perambra.",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER147",
"billerName": "St. Michaels Anglo Indian School, Kannur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER148",
"billerName": "St. Peters Lp School, Vaduthala",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER149",
"billerName": "St. Ritas High School Ponnurunni, Ernakulam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DKAFEE000KER06",
"billerName": "St. Thomas Public School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "STXA00000BIHON",
"billerName": "St. Xaviers English High School",
"billerAliasName": "St. Xaviers English High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-09-2022"
},
{
"billerId": "EDU002557BIH01",
"billerName": "St. Xaviers English Medium School Kishanganj",
"billerAliasName": "St. Xaviers English Medium School Kishanganj",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "05-02-2025"
},
{
"billerId": "STXA00000DBD2Q",
"billerName": "St. Xaviers Mission School",
"billerAliasName": "St. Xaviers Mission School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "02-04-2022"
},
{
"billerId": "STXA00000CHHF6",
"billerName": "St. Xaviers School",
"billerAliasName": "St. Xaviers School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STXA00000JHAIN",
"billerName": "St. Xaviers School Sewlidanga Kotalpokhar",
"billerAliasName": "St. Xaviers School Sewlidanga Kotalpokhar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2022"
},
{
"billerId": "STXA00000JHAIN",
"billerName": "St. Xaviers School Sewlidanga Kotalpokhar",
"billerAliasName": "St. Xaviers School Sewlidanga Kotalpokhar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2022"
},
{
"billerId": "APPFEE000KER150",
"billerName": "St.Clare&#39;S Convent Girls Higher Secondary School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER151",
"billerName": "St.George Central School Anchal",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER152",
"billerName": "St.Jude&#39;S Global School ,Kottayam",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER154",
"billerName": "St.Michael&#39;S E.M.L.P.School, Westhil,Kozhikode",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000UTP07",
"billerName": "St.Patricks High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER155",
"billerName": "St.Rossello&#39;S English School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STAR00000VAR24",
"billerName": "Star Home English School U-O Vista",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STEE00000NAT0N",
"billerName": "Steel City College Of Education",
"billerAliasName": "Steel City College Of Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "24-02-2023"
},
{
"billerId": "APPFEE000KER156",
"billerName": "Stella Maris English Medium School,Padanakad",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "STUD00000KER1C",
"billerName": "Students College",
"billerAliasName": "Students College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-03-2023"
},
{
"billerId": "SUKH00000BIRJG",
"billerName": "Sukhena Educational And Charitable Trust",
"billerAliasName": "Sukhena Educational And Charitable Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2023"
},
{
"billerId": "SULA00000ODI55",
"billerName": "Sulagna Higher Secondary School",
"billerAliasName": "Sulagna Higher Secondary School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-09-2022"
},
{
"billerId": "SUNR00000SURER",
"billerName": "Sunrise Vidhyalay",
"billerAliasName": "Sunrise Vidhyalay",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "SURE00000WBLIN",
"billerName": "Suren Chandra Modern School H S",
"billerAliasName": "Suren Chandra Modern School H S",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-12-2023"
},
{
"billerId": "SUVI00000GBDGZ",
"billerName": "Suvigya The School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SVNI00000HIPNW",
"billerName": "Svn International Public School Tarkwari",
"billerAliasName": "Svn International Public School Tarkwari",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "05-10-2024"
},
{
"billerId": "SWAM00000ODII8",
"billerName": "Swami Sivananda Vidya Mandir",
"billerAliasName": "Swami Sivananda Vidya Mandir",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-11-2022"
},
{
"billerId": "SVUKML000MAP02",
"billerName": "Swami Vivekanand University",
"billerAliasName": "Swami Vivekanand University",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "APPFEE000KAR28",
"billerName": "Swargarani Public School Rajarajeshwarinagar, Bangalore",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SYSEDU000WBL01",
"billerName": "Swarnim International School",
"billerAliasName": "Swarnim International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "SYED00000BIHYK",
"billerName": "Syed Amjad Ali Foundation",
"billerAliasName": "Syed Amjad Ali Foundation",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-09-2022"
},
{
"billerId": "TAKKML000MAH04",
"billerName": "Takshila School Amhed Nagar",
"billerAliasName": "Takshila School Amhed Nagar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "TKSKML000MAH05",
"billerName": "Takshila School Sangli",
"billerAliasName": "Takshila School Sangli",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "TISKML000RAJ13",
"billerName": "Talent International School",
"billerAliasName": "Talent International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "TATH00000NAVBH",
"billerName": "Tathya Pharmacy College",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2020"
},
{
"billerId": "TEAM00000NASP0",
"billerName": "Team Good Shepherd Academy Sakri Secondary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "TEAM00000NAS2B",
"billerName": "Team Good Shepherd Academy Chalisgaon Pre Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "TEAM00000NASV6",
"billerName": "Team Good Shepherd Academy Chalisgaon Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "TEAM00000NASD2",
"billerName": "Team Good Shepherd Academy Chalisgaon Secondary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "TEAM00000NASSI",
"billerName": "Team Good Shepherd Academy Dharangaon Pre Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "TEAM00000NASLV",
"billerName": "Team Good Shepherd Academy Dharangaon Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "TEAM00000NAS7C",
"billerName": "Team Good Shepherd Academy Dharangaon Secondary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "TEAM00000NASDW",
"billerName": "Team Good Shepherd Academy Dindori Pre Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "TEAM00000NASWD",
"billerName": "Team Good Shepherd Academy Dindori Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-12-2020"
},
{
"billerId": "TEAM00000NASF4",
"billerName": "Team Good Shepherd Academy Manur Pre Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "TEAM00000NASNF",
"billerName": "Team Good Shepherd Academy Manur Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "TEAM00000NASSN",
"billerName": "Team Good Shepherd Academy Manur Secondary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "TEAM00000NAS47",
"billerName": "Team Good Shepherd Academy Pimpalner Pre Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-12-2020"
},
{
"billerId": "TEAM00000NASH5",
"billerName": "Team Good Shepherd Academy Pimpalner Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-12-2020"
},
{
"billerId": "TEAM00000NASFM",
"billerName": "Team Good Shepherd Academy Sakri Primary",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-12-2020"
},
{
"billerId": "APPFEE000KER157",
"billerName": "Technical Higher Secondary School, Muttada",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "TECN00000NWDTJ",
"billerName": "Tecnia Institute Of Advanced Studies",
"billerAliasName": "Tecnia Institute Of Advanced Studies",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "TECN00000NWDIS",
"billerName": "Tecnia International School",
"billerAliasName": "Tecnia International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-09-2020"
},
{
"billerId": "TEZP00000ASMAX",
"billerName": "Tezpur Law College",
"billerAliasName": "Tezpur Law College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-09-2022"
},
{
"billerId": "THEA00000MEELM",
"billerName": "The Adhyyan School",
"billerAliasName": "The Adhyyan School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-10-2021"
},
{
"billerId": "THEA00000GRG8O",
"billerName": "The Apparel Training and Design Center",
"billerAliasName": "The Apparel Training and Design Center",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-04-2022"
},
{
"billerId": "THEC00000EDLN9",
"billerName": "THE CLASS OF ONE",
"billerAliasName": "THE CLASS OF ONE",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "THEC00000SURYE",
"billerName": "The Coordinatory Gujrat Community College Of Fire And Safety",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "THEE00000INDVC",
"billerName": "The Emerald Heights Foundation School",
"billerAliasName": "The Emerald Heights Foundation School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "THEE00000INDKR",
"billerName": "The Emerald Heights International School",
"billerAliasName": "The Emerald Heights International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "CLBFEE000TEL78",
"billerName": "The Global Edge School - Madhapur",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "CLBKML000TND03",
"billerName": "The Home School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "THEI00000CENDM",
"billerName": "The Institute Of Civil Engineers",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-03-2021"
},
{
"billerId": "THEI00000CENDM",
"billerName": "The Institute Of Civil Engineers",
"billerAliasName": "Private Insititute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-03-2021"
},
{
"billerId": "THEI00000WBLXL",
"billerName": "The Institution Of Indian Educational Services",
"billerAliasName": "The Institution Of Indian Educational Services",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-11-2022"
},
{
"billerId": "ABLP01000TND01",
"billerName": "The Madras Seva Sadan Unit Sir Mutha School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-12-2020"
},
{
"billerId": "THEM00000MANT8",
"billerName": "The Maharaj Bodhchandra College",
"billerAliasName": "The Maharaj Bodhchandra College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-03-2023"
},
{
"billerId": "THEM00000RAJ3M",
"billerName": "The Maple International School",
"billerAliasName": "The Maple International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-05-2022"
},
{
"billerId": "MSAKML000PUN01",
"billerName": "The Millennium School Amritsar",
"billerAliasName": "The Millennium School Amritsar",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "MSBKML000PUN02",
"billerName": "The Millennium School Bathinda",
"billerAliasName": "The Millennium School Bathinda",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "MSCKML000TND02",
"billerName": "The Millennium School Cuddalore",
"billerAliasName": "The Millennium School Cuddalore",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "MSGKML000TND03",
"billerName": "The Millennium School Gerugambakkam",
"billerAliasName": "The Millennium School Gerugambakkam",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "MSHKML000PUN03",
"billerName": "The Millennium School Hmel Bathinda",
"billerAliasName": "The Millennium School Hmel Bathinda",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "MSIKML000MAP03",
"billerName": "The Millennium School Indore",
"billerAliasName": "The Millennium School Indore",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "MSKKML000HAR01",
"billerName": "The Millennium School Kurukshetra",
"billerAliasName": "The Millennium School Kurukshetra",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "MSLKML000UTP01",
"billerName": "The Millennium School Lucknow",
"billerAliasName": "The Millennium School Lucknow",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "MSMKML000UTP02",
"billerName": "The Millennium School Meerut",
"billerAliasName": "The Millennium School Meerut",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "MSPKML000HAR02",
"billerName": "The Millennium School Panipat",
"billerAliasName": "The Millennium School Panipat",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-09-2020"
},
{
"billerId": "MSPKML000PUN04",
"billerName": "The Millennium School Patiala",
"billerAliasName": "The Millennium School Patiala",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "MSSKM000GUJ11",
"billerName": "The Millennium School Surat",
"billerAliasName": "The Millennium School Surat",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "MSSKML000GUJ11",
"billerName": "The Millennium School Surat",
"billerAliasName": "The Millennium School Surat",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-09-2020"
},
{
"billerId": "MSNKML000UTP03",
"billerName": "The Millennium School- Noida",
"billerAliasName": "The Millennium School- Noida",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "THEN00000RJK7X",
"billerName": "The North Star School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-01-2021"
},
{
"billerId": "THEO00000UTTUE",
"billerName": "The Oberai School Of Integrated Studies",
"billerAliasName": "The Oberai School Of Integrated Studies",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-04-2023"
},
{
"billerId": "MSOKML000TND04",
"billerName": "The Psbb Millennium School Omr",
"billerAliasName": "The Psbb Millennium School Omr",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "MSSKML000TND04",
"billerName": "The Pssb Millennium School Coimbatore",
"billerAliasName": "The Pssb Millennium School Coimbatore",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-09-2020"
},
{
"billerId": "THES00000RHTVD",
"billerName": "The Sanskriti School",
"billerAliasName": "The Sanskriti School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2020"
},
{
"billerId": "MSFKML000HAR03",
"billerName": "The Shriram Millennium School Faridabad",
"billerAliasName": "The Shriram Millennium School Faridabad",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "19-09-2020"
},
{
"billerId": "THES00000NEW86",
"billerName": "The Srijan School",
"billerAliasName": "The Srijan School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "THES00000ANPFZ",
"billerName": "The Sunrise School VT Agraharam",
"billerAliasName": "The Sunrise School VT Agraharam",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-02-2023"
},
{
"billerId": "THEN00000SIKBO",
"billerName": "Theni College Of Arts And Science",
"billerAliasName": "Theni College Of Arts And Science",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-04-2023"
},
{
"billerId": "DKAFEE000MAH02",
"billerName": "Tilak Junior College Of Science And Commerce",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "TIRT00000CEN40",
"billerName": "Tirtheden Pvt Ltd",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "TMMC00000PTTEU",
"billerName": "TMM College of Nursing",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number&amp;amp;amp;nbsp;( Eg: TMMCN ).\r",
"lastUpdated": "12-05-2022"
},
{
"billerId": "TNPL00000NATE6",
"billerName": "TNPL Matric HR SEC School",
"billerAliasName": "TNPL Matric HR SEC School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-03-2023"
},
{
"billerId": "TNPL00000NATMV",
"billerName": "TNPL Public School",
"billerAliasName": "TNPL Public School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-03-2023"
},
{
"billerId": "TUTO00020NAT59",
"billerName": "Tutopia Private Limited",
"billerAliasName": "Tutopia",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "07-01-2026"
},
{
"billerId": "UMKA00000RJKS1",
"billerName": "U M Kanya Vidhyalay Shree Vkkm",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "11-12-2020"
},
{
"billerId": "UDMA00000NAT1K",
"billerName": "UDMA EDUCATIONAL TRUST",
"billerAliasName": "UDMA EDUCATIONAL TRUST",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "ULLE00000ASMYW",
"billerName": "Ullekh Foundation",
"billerAliasName": "Ullekh Foundation",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "28-05-2022"
},
{
"billerId": "UNIQ00000MAH63",
"billerName": "Unique Brain English School",
"billerAliasName": "Unique Brain English School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "09-09-2023"
},
{
"billerId": "UNIV00000MUMRL",
"billerName": "Universal Kingdom High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "USHA00000BIHMS",
"billerName": "Usha Mahila Vikas Samiti",
"billerAliasName": "Usha Mahila Vikas Samiti",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-09-2022"
},
{
"billerId": "UTKA00000BPLH5",
"billerName": "Utkal Aerospace And Engineerin",
"billerAliasName": "Utkal Aerospace And Engineering",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "08-10-2020"
},
{
"billerId": "UTKA00000NATS1",
"billerName": "Utkarsh Classes and Edutech Pvt. Ltd.",
"billerAliasName": "Utkarsh Classes &amp;amp;amp;amp; Edutech Pvt. Ltd.",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "ABLP01000DEHLO",
"billerName": "Uttarakhand Ayurved University",
"billerAliasName": "Uttarakhand Ayurved University",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "VRSC00000MAHUN",
"billerName": "V R Scholarden School",
"billerAliasName": "V R Scholarden School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "13-04-2023"
},
{
"billerId": "ABLP01000WGLGM",
"billerName": "Vaagdevi College Of Pharmacy",
"billerAliasName": "Vaagdevi College Of Pharmacy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-12-2021"
},
{
"billerId": "ABLP01000WGL0L",
"billerName": "Vaagdevi College Of Physiotherapy",
"billerAliasName": "Vaagdevi College Of Physiotherapy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-12-2021"
},
{
"billerId": "ABLP01000WGL32",
"billerName": "Vaagdevi Degree And Pg College",
"billerAliasName": "Vaagdevi Degree And Pg College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-12-2021"
},
{
"billerId": "ABLP01000WGLRA",
"billerName": "Vaagdevi Degree College",
"billerAliasName": "Vaagdevi Degree College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-12-2021"
},
{
"billerId": "VADY00000TELGK",
"billerName": "Vadyaraju Educational Society",
"billerAliasName": "Vadyaraju Educational Society",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "03-07-2024"
},
{
"billerId": "VALI00000NATSG",
"billerName": "Validation_Bill_Push_Multiple",
"billerAliasName": "Validation_Bill_Push_Multiple_Alias",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-08-2024"
},
{
"billerId": "KM1100000NATSG",
"billerName": "Validation_Bill_Push_Multiple",
"billerAliasName": "Validation_Bill_Push_Multiple_Alias",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "26-09-2022"
},
{
"billerId": "VANA00000TEL1N",
"billerName": "Vanaja Educational Academy",
"billerAliasName": "Vanaja Educational Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-05-2024"
},
{
"billerId": "VARD00000RAJOX",
"billerName": "Vardaan Shikshan Sansthan Bhadra",
"billerAliasName": "Vardaan Shikshan Sansthan Bhadra",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-10-2023"
},
{
"billerId": "VATI00000KARAD",
"billerName": "Vatican High School",
"billerAliasName": "Vatican High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-09-2022"
},
{
"billerId": "VATI00000KARAD",
"billerName": "Vatican High School",
"billerAliasName": "Vatican High School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "06-09-2022"
},
{
"billerId": "VBGI00000SUR53",
"billerName": "Vbgis Primary And Upper Primary English Medium",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-12-2020"
},
{
"billerId": "VBGI00000SUR5F",
"billerName": "Vbgis Primary And Upper Primary Gujarati Medium",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-12-2020"
},
{
"billerId": "VBGI00000SURS2",
"billerName": "Vbgis School - Hostel And Food",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "VBGI00000SURJH",
"billerName": "Vbgis Secondary And Higher Seconadry English Medium",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-12-2020"
},
{
"billerId": "VBGI00000SURNK",
"billerName": "Vbgis Secondary And Higher Secondary Gujarati Medium",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-12-2020"
},
{
"billerId": "CLBKML000TEL10",
"billerName": "Veda Degree College",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "VELS00000CHE4B",
"billerName": "Vels Institute Of Science Technology And Advanced Studies",
"billerAliasName": "VISTAS",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "29-01-2022"
},
{
"billerId": "VIDY00000BIHRT",
"billerName": "Vidya Anglo Vedic Academy",
"billerAliasName": "Vidya Anglo Vedic Academy",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "30-09-2022"
},
{
"billerId": "VIDY00000ASME0",
"billerName": "Vidya Bharti International School",
"billerAliasName": "Vidya Bharti International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-05-2023"
},
{
"billerId": "VIDY00000PUNWS",
"billerName": "VIDYA PRASARINI SABHAS COLLEGE OF ENGINEERING and TECHNOLOGY",
"billerAliasName": "VIDYA PRASARINI SABHAS COLLEGE OF ENGINEERING and TECHNOLOGY",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2023"
},
{
"billerId": "VIDY00000NAT7H",
"billerName": "Vidya Sagar Gyanpeeth",
"billerAliasName": "Vidya Sagar Gyanpeeth",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "21-02-2023"
},
{
"billerId": "VIJA00000GBD6Y",
"billerName": "Vijay College Of Education",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "DKAFEE000KER07",
"billerName": "Vijnan Institute Of Science And Technology",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "DKAFEE000KER07",
"billerName": "Vijnan Institute Of Science And Technology",
"billerAliasName": "College",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number ( Eg: LFCS. No need to add 0 before admission number). Prefix is LFCS for Classes 1 to 10",
"lastUpdated": "01-02-2022"
},
{
"billerId": "APPFEE000KAR29",
"billerName": "Vikas Central School, Bengaluru",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "EDU006443JHA01",
"billerName": "Vikas Vidyalaya 10+2",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "14-01-2026"
},
{
"billerId": "GJIN00000KER20",
"billerName": "Vimala Central School,Perumbavoor",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "VIMO00000RJKL4",
"billerName": "Vimohan Balmandir Shree Vallabh Kanya Kelawani Mandal",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "VISV00000TELG7",
"billerName": "Visvesvaraya College Of Engineering And Technology",
"billerAliasName": "Visvesvaraya College Of Engineering And Technology",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2022"
},
{
"billerId": "VISW00000TEL1N",
"billerName": "Viswa Vasudha Education",
"billerAliasName": "Viswa Vasudha Education",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-10-2022"
},
{
"billerId": "APPFEE000KER162",
"billerName": "Viswadeepthi School, Aluva",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "VISW00000TELFU",
"billerName": "Viswadharani Horticulture Polytechnic",
"billerAliasName": "Viswadharani Horticulture Polytechnic",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-09-2022"
},
{
"billerId": "VIVE00000AHMQP",
"billerName": "Vivekanand Electropathy Medical Institute",
"billerAliasName": "Private Institute",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "VIVE00000RAJ78",
"billerName": "Vivekanand Shikshan Sansthan Pindwara",
"billerAliasName": "Vivekanand Shikshan Sansthan Pindwara",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2023"
},
{
"billerId": "VIVE00000WBLNQ",
"billerName": "Vivekananda College For Women",
"billerAliasName": "Vivekananda College For Women",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "12-09-2023"
},
{
"billerId": "VIVE00027KERE4",
"billerName": "Vivekananda College of Engineering",
"billerAliasName": "Vivekananda College of Engineering",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-01-2026"
},
{
"billerId": "ABLP01000EMPCR",
"billerName": "Vivekananda Mission High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "VIVI00000MAHGM",
"billerName": "Viviana Co Op Hsg Soc Ltd Cultural Forum",
"billerAliasName": "Viviana Co Op Hsg Soc Ltd",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KAR30",
"billerName": "VVR Public School, Doddankannahalli",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "WAND00000JHA57",
"billerName": "WANDOOR MULTIVERSE PVT LTD",
"billerAliasName": "WANDOOR MULTIVERSE PVT LTD",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-03-2023"
},
{
"billerId": "WDED00000KARNA",
"billerName": "WD Educational Trust",
"billerAliasName": "WD Educational Trust",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "25-01-2023"
},
{
"billerId": "WISD00000TNDN7",
"billerName": "Wisdom Matric HR SEC School",
"billerAliasName": "Wisdom Matric HR SEC School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "18-03-2023"
},
{
"billerId": "WRAN00000RAJNB",
"billerName": "Wranglers Education And Samajik Vikas Samit",
"billerAliasName": "Wranglers Education And Samajik Vikas Samit",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "31-10-2023"
},
{
"billerId": "XAVI00000KHORH",
"billerName": "Xavier&#39;s High School",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "APPFEE000KER163",
"billerName": "Yes English School Mattaya, Palakkad.",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "16-09-2021"
},
{
"billerId": "YESH00000NNDGQ",
"billerName": "YESHWANT MAHAVIDYALAYA JUNIOR GRANT",
"billerAliasName": "YESHWANT MAHAVIDYALAYA JUNIOR GRANT",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2023"
},
{
"billerId": "YESH00000NND5J",
"billerName": "YESHWANT MAHAVIDYALAYA JUNIOR NON GRANT",
"billerAliasName": "YESHWANT MAHAVIDYALAYA JUNIOR NON GRANT",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "01-12-2023"
},
{
"billerId": "YESH00000NNDVZ",
"billerName": "YESHWANT MAHAVIDYALAYA SENIOR GRANT",
"billerAliasName": "YESHWANT MAHAVIDYALAYA SENIOR GRANT",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2023"
},
{
"billerId": "YESH00000NND2K",
"billerName": "Yeshwant Mahavidyalaya Senior Non-Grant",
"billerAliasName": "Yeshwant Mahavidyalaya Senior Non-Grant",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "22-12-2023"
},
{
"billerId": "YOGI00000CDPEE",
"billerName": "Yogi Vemana University College Kadapa",
"billerAliasName": "Yogi Vemana University College Kadapa",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "23-11-2023"
},
{
"billerId": "YOUN00023UTP2N",
"billerName": "Young Stream Academy Inter College",
"billerAliasName": "Young Stream Academy Inter College",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "20-01-2026"
},
{
"billerId": "YSSC00000BAASV",
"billerName": "YS School Barnala",
"billerAliasName": "School",
"billerCategoryName": "Education Fees",
"status": "Active",
"billerDescription": "Add Prefix before admission number( Eg: YSBN ).\r",
"lastUpdated": "12-05-2022"
},
{
"billerId": "ZENI00000JPR4T",
"billerName": "ZENITH PATHSHALA",
"billerAliasName": "ZENITH PATHSHALA",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2023"
},
{
"billerId": "ZION00000BIKHE",
"billerName": "Zion International School",
"billerAliasName": "Zion International School",
"billerCategoryName": "Education Fees",
"status": "Active",
"lastUpdated": "10-11-2023"
}
]
}
**Result** - Status: Success (`responseCode: 000`) - Biller list
retrieved successfully.

---

## 2. Get Biller Details

**Endpoint** `https://api.auuat.bank.in/bbpsservice/getBillerDetails`
**Payload** {
"RequestId": "08989898",
"OriginatingChannel": "CRM",
"Header": {
"Ver": 1.051732E7,
"OrigInst": "AU01",
"RefId": "ABCDE12345ABCDE12345ABCDE1A0119254",
"TimeStamp": ""
},
"ReferenceNumber": "90909888",
"ReportingParam": {
"MISClass": "TEST",
"MISCode": "TEST02"
},
"TransactionBranch": 100,
"Biller": {
"BillerId": "ALFA00000RAJH1"
}
}

**Response** {
"head": {
"refId": "ABCDE12345ABCDE12345ABCDE1A0119254",
"origInst": "AU01",
"ts": "2026-07-03T12:29:08",
"ver": "1.0"
},
"reason": {
"responseCode": "000",
"responseReason": "Successful"
},
"biller": {
"deemedSuccessEnabled": "No",
"billerId": "ALFA00000RAJH1",
"billerName": "Alfastar India Nidhi Limited",
"billerAliasName": "Alfastar India Nidhi Limited",
"billerCategoryName": "Loan Repayment",
"billerMode": "OFFLINEA",
"billerAcceptsAdhoc": false,
"parentBiller": false,
"billerOwnerShp": "Private",
"billerCoverage": "IND-RAJ",
"fetchRequirement": "MANDATORY",
"paymentAmountExactness": "EXACT UP",
"supportBillValidation": "NOT_SUPPORTED",
"billerEffectiveFrom": "28-03-2023",
"billerEffectiveTo": "31-12-2033",
"billerPaymentModes": [
{
"paymentMode": "Internet Banking",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentMode": "Debit Card",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentMode": "IMPS",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentMode": "Cash",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentMode": "UPI",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentMode": "Wallet",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentMode": "NEFT",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentMode": "AEPS",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentMode": "Account Transfer",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
}
],
"billerPaymentChannels": [
{
"paymentChannel": "INT",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentChannel": "INTB",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentChannel": "MOB",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentChannel": "MOBB",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentChannel": "POS",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentChannel": "MPOS",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentChannel": "ATM",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentChannel": "BNKBRNCH",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentChannel": "KIOSK",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentChannel": "AGT",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
},
{
"paymentChannel": "BSC",
"minLimit": 100,
"maxLimit": 10000000,
"supportPendingStatus": "No"
}
],
"billerCustomerParams": [
{
"paramName": "Loan Number",
"dataType": "ALPHANUMERIC",
"optional": false,
"minLength": 5,
"maxLength": 20,
"regex": "^[A-Z 0-9]{5,20}$",
"visibility": false,
"unique": false
}
],
"billerResponseParams": {
"params": [],
"amountOptions": [
{
"amountBreakupSet": [
"BASE_BILL_AMOUNT"
]
}
]
},
"billerAdditionalInfo": [
{
"paramName": "Penalty",
"dataType": "NUMERIC",
"optional": false,
"visibility": false,
"unique": false
}
],
"interchangeFeeConf": [],
"interchangeFee": [],
"status": "Active",
"supportDeemed": "Yes",
"supportPendingStatus": "No",
"billerResponseType": "SINGLE",
"planMdmRequirement": "NOT_SUPPORTED",
"billerAdditionalInfoPayment": [],
"planAdditionalInfo": [],
"billerPlanResponseParams": {
"params": [],
"amountOptions": [
{
"amountBreakupSet": [
"BASE_BILL_AMOUNT"
]
}
]
}
}
}

**Result** - Status: Success (`responseCode: 000`) - Biller ID:
`ALFA00000RAJH1` - Biller Name: Alfastar India Nidhi Limited - Category:
Loan Repayment - Fetch Requirement: MANDATORY - Payment Amount
Exactness: EXACT UP - Bill Validation: NOT_SUPPORTED - Customer
Parameter: - Loan Number (5-20 characters)

---

## 3. Bill Fetch

**Endpoint** `https://api.auuat.bank.in/bbpsservice/billFetch`
**Payload** {
"Agent": {
"Device": [
{
"Value": "INTB",
"Name": "INITIATING_CHANNEL"
},
{
"Value": "110.225.228.39",
"Name": "IP"
},
{
"Value": "BC-BE-33-65-E6-AC",
"Name": "MAC"
}
],
"Id": "AU01AU03AGT525314031"
},
"Head": {
"Ver": "1.0",
"OrigInst": "AU01",
"RefId": "00000000CHLP99634562PGuyTLP25208900",
"ts": "2026-06-18T12:27:20+05:30"
},
"RequestId": "AU016169099591674744",
"OriginatingChannel": "CRM",
"Customer": {
"Mobile": "9783411103",
"Tags": [
{
"Name": "EMAIL",
"Value": "kishan.kumawat@aadviktech.com"
}
]
},
"Txn": {
"RiskScores": [
{
"Type": "TXNRISK",
"Value": "030",
"Provider": "AU01"
},
{
"Type": "TXNRISK",
"Value": "030",
"Provider": "BBPS"
}
],
"MsgId": "90000000CHLP92670009lGLCLYR89429820",
"ts": "2026-06-18T12:27:20+05:30"
},
"Analytics": [
{
"Name": "FETCHREQUESTSTART",
"Value": "2026-06-18T12:27:20+05:30"
},
{
"Name": "FETCHREQUESTEND",
"Value": "2026-06-18T12:27:20+05:30"
}
],
"BillDetails": {
"CustomerParams": [
{
"Name": "Loan Number",
"Value": "M0004"
}
],
"BillerId": "ALFA00000RAJH1"
}
}
**Response** {
"head": {
"refId": "PAYREF9A510684A654FA439EA9297A64EC9",
"origInst": "BBCU",
"ts": "2026-06-15T12:45:13+05:30",
"ver": "1.0"
},
"reason": {
"responseCode": "000",
"responseReason": "Successful",
"approvalRefNum": "PAYREF9A510684A654FA439EA9297A64EC9"
},
"txn": {
"msgId": "TCoE1s73IQ0O0M5232Lv7fls9B0Mq9n2p23",
"txnReferenceId": "AU016166090769937183",
"ts": "2026-06-15T12:45:13+05:30"
},
"billDetails": {
"customerParams": [
{
"name": "Loan Number",
"value": "M0004"
}
]
},
"billerResponse": {
"amount": "5500000",
"dueDate": "2026-05-30"
}
}
**Result** - Status: Success (`responseCode: 000`) - Biller:
`ALFA00000RAJH1` - Loan Number: `M0004` - Amount: `5500000` - Due Date:
`2026-05-30` - Additional Info: - Penalty: `100`

---

## 4. Bill Pay

**Endpoint** `https://api.auuat.bank.in/bbpsserviceV1/billPay`
**Payload** {
"Head": {
"Ver": "1.0",
"OrigInst": "AU01",
"RefId": "00000000CHLP99634562PGuyTLP25208900",
"ts": "2026-06-19T13:15:20+05:30"
},
"Txn": {
"MsgId": "TCoE1s73IQ0O0M5232Lv7fls9B0Mq9n2p99",
"TxnReferenceId": "AU016170090769937093",
"ts": "2026-06-19T13:15:20+05:30",
"Type": "FORWARD TYPE REQUEST",
"RiskScores": [
{
"Type": "TXNRISK",
"Value": "030",
"Provider": "AU01"
},
{
"Type": "TXNRISK",
"Value": "030",
"Provider": "BBPS"
}
]
},
"Analytics": [
{
"Name": "PAYREQUESTSTART",
"Value": "2026-06-19T13:15:20+05:30"
},
{
"Name": "PAYREQUESTEND",
"Value": "2026-06-19T13:15:20+05:30"
}
],
"Customer": {
"Mobile": "9783411103"
},
"Agent": {
"Device": [
{
"Value": "INTB",
"Name": "INITIATING_CHANNEL"
},
{
"Value": "::1",
"Name": "IP"
},
{
"Value": "BC-BE-33-65-E6-AC",
"Name": "MAC"
}
],
"Id": "AU01AU03AGT525314031"
},
"BillDetails": {
"CustomerParams": [
{
"Name": "Loan Number",
"Value": "M0004"
}
],
"BillerId": "ALFA00000RAJH1"
},
"Amount": {
"amount": "5500000",
"CustConvFee": "0",
"CouCustConvFee": "0",
"Currency": "356"
},
"PaymentMethod": {
"QuickPay": "No",
"PaymentMode": "Internet Banking",
"SplitPay": "No",
"OffusPay": "Yes"
},
"paymentInformation": [
{
"Name": "IFSC|AccountNo",
"Value": "AUBL0002231|2221216839730720"
}
],
"debitAccountNo": "2221216839730720"
}

**Response**
{
"head": {
"refId": "00000000CHLP99634562PGuyTLP25208200",
"origInst": "BBCU",
"ts": "2026-06-15T12:06:42+05:30",
"ver": "1.0"
},
"reason": {
"responseCode": "000",
"responseReason": "Successful",
"approvalRefNum": "00000000CHLP99634562PGuyTLP25208200"
},
"txn": {
"msgId": "90000000CHLP92670009lGLCLYR89429520",
"ts": "2026-06-15T12:06:41+05:30"
},
"billDetails": {
"billerId": "ALFA00000RAJH1",
"customerParams": [
{
"name": "Loan Number",
"value": "M0004"
}
]
},
"billerResponse": {
"amount": "5500000",
"dueDate": "2026-05-30",
"tags": []
},
"additionalInfoList": [
{
"name": "Penalty",
"value": "100"
}
]
}

**Result** - Status: Success (`responseCode: 000`) - Approval Reference
received successfully. - Transaction processed successfully.

---

## 5. Transaction Status

**Endpoint** `https://api.auuat.bank.in/bbpsserviceV1/getTxnStatus`

**Payload** {
"head": {
"ver": "1.0",
"origInst": "AU01",
"refId": "CHLP62678423QGSWGY9O097AB123456789A",
"ts": "2026-06-22T10:38:57+05:30"
},
"txn": {
"msgId": "00000000CHLP62678423QGSW0A96M9720XM",
"ts": "2026-06-22T10:38:57+05:30",
"xchangeId": "401"
},
"transactionDetails": {
"txnReferenceId": "AU01616909A591ZkPKTS"
},
"otp": null
}

**Response** {
"head": {
"refId": "CHLP62678423QGSWGY9O097AB123456789A",
"origInst": "AU01",
"ts": "2026-07-03T12:02:43",
"ver": "1.0"
},
"reason": {
"responseCode": "000",
"responseReason": "Successful"
},
"txn": {
"msgId": "00000000CHLP62678423QGSW0A96M9720XM",
"ts": "2026-07-03T12:02:43",
"xchangeId": "401"
},
"txnList": [
{
"siID": "",
"txnReferenceId": "AU01616909A591ZkPKTS",
"agentId": "AU01AU03AGT525314031",
"billerId": "ALFA00000RAJH1",
"amount": "5500000",
"txnDate": "18-06-2026T17:08:57+05:30",
"txnStatus": "Failure"
}
],
"customerDetails": {
"mobile": "9783411103"
}
}

**Result** - Status: Success (`responseCode: 000`) - Transaction
Reference: `AU01616909A591ZkPKTS` - Transaction Status: **Failure** -
Agent ID: `AU01AU03AGT525314031` - Biller ID: `ALFA00000RAJH1` - Amount:
`5500000`

---

## Summary

API Status

---

Get Biller List Success
Get Biller Details Success
Bill Fetch Success
Bill Pay Success
Transaction Status Success (API), Transaction Status = Failure
