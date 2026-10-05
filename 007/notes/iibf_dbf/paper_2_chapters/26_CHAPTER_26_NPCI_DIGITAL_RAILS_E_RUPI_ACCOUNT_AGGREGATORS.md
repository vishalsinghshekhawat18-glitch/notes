# CHAPTER 26: NPCI DIGITAL RAILS, E-RUPI, CBDC & ACCOUNT AGGREGATORS

---

## 26.1 National Payments Corporation of India (NPCI) Ecosystem

The National Payments Corporation of India (NPCI) was incorporated in 2008 under the provisions of the Payment and Settlement Systems Act, 2007 (PSSA) as an initiative of the Reserve Bank of India (RBI) and the Indian Banks' Association (IBA). It is registered as a "Not for Profit" company under Section 8 of the Companies Act, 2013 (formerly Section 25 of the Companies Act, 1956) to serve as an umbrella organization for retail payment and settlement systems in India.

```
+-----------------------------------------------------------------------------------+
|                        NPCI RETAIL PAYMENT RAILS ARCHITECTURE                     |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [ Real-Time Retail Switches ]                                                    |
|         |                                                                         |
|         +---> Immediate Payment Service (IMPS - 24x7 Account-to-Account)          |
|         +---> Unified Payments Interface (UPI - VPA / QR / Interoperable)         |
|         +---> National Financial Switch (NFS - Interbank ATM Network)             |
|                                                                                   |
|  [ Biometric & Financial Inclusion Rails ]                                        |
|         |                                                                         |
|         +---> Aadhaar Enabled Payment System (AePS - Micro-ATM Biometric)         |
|         +---> Aadhaar Payment Bridge System (APBS - Direct Benefit Transfer / DBT)|
|                                                                                   |
|  [ Recurring & Bulk Clearing Infrastructure ]                                     |
|         |                                                                         |
|         +---> National Automated Clearing House (NACH - Credit & Debit Mandates)  |
|         +---> Bharat Bill Payment System (BBPS - Interoperable Utility Rails)     |
|                                                                                   |
|  [ Card & Specialized Infrastructure ]                                            |
|         |                                                                         |
|         +---> RuPay (Domestic EMV Contact & Contactless Card Scheme)              |
|         +---> National Electronic Toll Collection (NETC - FASTag RFID)            |
|         +---> e-RUPI (Programmable Purpose-Specific Offline/Online Voucher)       |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### 1. Immediate Payment Service (IMPS)
* **Operational Profile:** Operates 24x7x365 providing real-time, instantaneous interbank fund transfer.
* **Routing Keys:**
  1. *Mobile Number + MMID:* Mobile Money Identifier (MMID) is a unique 7-digit random code issued by the bank (first 4 digits identify the bank; last 3 identify the customer account).
  2. *Account Number + IFSC Code:* Direct routing to the beneficiary's CBS.
* **Transaction Cap:** Standard transaction limit is ₹5,00,000 (Rupees Five Lakh) per transaction (raised from ₹2 Lakh in October 2021).

### 2. Unified Payments Interface (UPI)
* **Underlying Architecture:** Advanced overlay platform built on top of the IMPS infrastructure. Utilizes Virtual Payment Addresses (VPAs or UPI IDs, e.g., `user@bank`) to decouple bank account details from transaction execution.
* **Security Architecture:** Single-click two-factor authentication (2FA): First factor is device binding (cryptographic token bound to mobile SIM/IMEI); second factor is the secure 4-digit or 6-digit UPI PIN.
* **UPI Transaction Value Caps (RBI & NPCI Benchmark Directives):**
  * *Standard Peer-to-Peer (P2P) and Merchant (P2M):* ₹1,00,000 per transaction (certain banks set internal lower limits).
  * *Specific Capital Market Segments:* ₹5,00,000 per transaction for Initial Public Offerings (IPOs) and Retail Direct Scheme (G-Sec investments).
  * *Educational Institutions and Healthcare/Hospitals:* ₹5,00,000 per transaction.
  * *Tax Payments (CBDT / Direct Taxes):* Raised to ₹5,00,000 per transaction.
* **Key Evolutionary Variants:**
  * *UPI 2.0:* Introduced Overdraft (OD) account linking, One-Time Mandates with block functionality, Invoice in the Inbox (pre-payment bill verification), and Signed Intent/QR codes to protect against malicious tampering.
  * *UPI Lite:* An on-device wallet feature enabling pinless micro-transactions up to ₹500 per transaction with an aggregate wallet holding limit of ₹2,00,000 (or ₹2,000 depending on specific issuer tier), decongesting bank CBS core switches.
  * *UPI 123PAY:* Multi-channel payment system engineered for non-internet feature phones operating via Interactive Voice Response (IVR) numbers, missed call technology, embedded OEM apps, and sound-wave proximity communication.
  * *Credit Line on UPI:* Enables pre-sanctioned credit lines from commercial banks to be drawn dynamically via UPI rails without requiring a plastic credit card.

### 3. Aadhaar Enabled Payment System (AePS) and APBS
* **Aadhaar Enabled Payment System (AePS):**
  * Financial inclusion model operated through Business Correspondents (BCs) and Micro-ATMs.
  * *Authentication Keys:* Bank Name / Issuer Identification Number (IIN) + Aadhaar Number + Live Biometric Fingerprint / Iris scan. No physical debit card or PIN required.
  * *Services Permitted:* Cash Withdrawal, Cash Deposit, Balance Inquiry, Mini Statement, and Aadhaar-to-Aadhaar Funds Transfer.
* **Aadhaar Payment Bridge System (APBS):**
  * Automated bulk clearing pipeline routing direct government subsidies and Direct Benefit Transfer (DBT) funds.
  * Beneficiary accounts are credited purely based on Aadhaar numbers mapped to bank accounts via the NPCI Aadhaar Mapper server, bypassing IFSC and account number mismatches.

### 4. NACH, NETC, and RuPay
* **National Automated Clearing House (NACH):** High-volume, electronic clearing system replacing the legacy Electronic Clearing Service (ECS).
  * *NACH Debit:* Mandate-based recurring collections (mutual fund SIPs, loan EMIs, utility bills). Supports e-Mandates authenticated via Net Banking, Debit Card, or Aadhaar OTP.
  * *NACH Credit:* Bulk disbursements (salaries, pensions, dividends).
* **National Electronic Toll Collection (NETC / FASTag):** Interoperable toll collection using Radio Frequency Identification (RFID) passive transponders attached to vehicle windscreens operating on the UHF 865-868 MHz band.
* **RuPay Card Scheme:** India's indigenous card payment network offering debit, credit, prepaid, and contactless Global cards. Complies with National Common Mobility Card (NCMC) specifications enabling transit fare payments via offline card balance.

---

## 26.2 Programmable Digital Vouchers: e-RUPI

e-RUPI is a cashless, contactless digital voucher system developed by NPCI in collaboration with the Department of Financial Services (DFS), the Ministry of Health and Family Welfare (MoHFW), and the National Health Authority (NHA).

```
+-----------------------------------------------------------------------------------+
|                            e-RUPI OPERATIONAL ARCHITECTURE                        |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [ Sponsoring Entity ] (Govt Dept / Corporate / Philanthropic Donor)              |
|         |                                                                         |
|         v                                                                         |
|  [ Partner Commercial Bank ] ---> NPCI e-RUPI Platform                            |
|         |                                 |                                       |
|         +---------------------------------+                                       |
|         v                                                                         |
|  [ Beneficiary Mobile ] <--- Receives SMS String or QR Code Voucher               |
|    (No Bank Account, Smart Phone, or Digital App Required)                        |
|         |                                                                         |
|         v                                                                         |
|  [ Designated Service Provider / Hospital / Merchant ]                            |
|    (Scans QR / Inputs SMS String + Beneficiary inputs OTP)                        |
|         |                                                                         |
|         v                                                                         |
|  [ Real-Time Settlement ] ---> Merchant Account Credited Instantly               |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### Statutory Limits and Characteristics of e-RUPI
1. **Purpose-Specific and Person-Specific:** An e-RUPI voucher is locked to both a specific beneficiary identity and a specific purpose category (e.g., tuberculosis nutritional support, fertilizer subsidy, employee vaccine sponsorship). It cannot be transferred or diverted to alternative expenses.
2. **Device Agnostic:** Delivered via basic alphanumeric SMS strings to basic feature phones or via QR codes; does not require internet connectivity, a smartphone, or a bank account on the beneficiary's end.
3. **Monetary Thresholds:**
   * Government Schemes: Maximum limit per voucher is **₹1,00,000** (Rupees One Lakh).
   * Multiple Redemptions: Vouchers can be redeemed multiple times until the aggregate authorized amount is completely exhausted (amended from the original single-use cap of ₹10,000).

---

## 26.3 Central Bank Digital Currency (CBDC): The Digital Rupee (e₹)

The Reserve Bank of India launched the Digital Rupee (e₹) pilot in 2022 following amendments to the Reserve Bank of India Act, 1934, enacted through the Finance Act, 2022. Section 22 of the RBI Act was amended to explicitly establish that banknotes issued by the Reserve Bank include notes in digital form.

```
+-----------------------------------------------------------------------------------+
|                     CBDC (e₹) VS COMMERCIAL BANK MONEY VS CRYPTO                 |
+-----------------------------------------------------------------------------------+
| Dimension            | Central Bank Digital Currency| Commercial Bank Money       |
|                      | (Digital Rupee - e₹)         | (Bank Deposits / Wallets)   |
| :---                 | :---                         | :---                        |
| **Issuer**           | Reserve Bank of India (RBI). | Commercial Banks.           |
| **Legal Status**     | Sovereign Legal Tender.      | Claim against Private Bank. |
| **Balance Sheet**    | Direct Sovereign Liability   | Bank's Balance Sheet        |
|                      | of the Central Bank.         | Liability (Insured DICGC).  |
| **Credit Risk**      | Zero Sovereign Credit Risk.  | Bank Credit / Liquidity Risk|
| **Interest Earning** | Strictly Non-Interest-Bearing| Bears contractual interest. |
| **Settlement**       | Immediate Finality           | Requires Interbank Clearing |
|                      | (No Clearing House needed).  | (NEFT/RTGS/NFS Netting).    |
+-----------------------------------------------------------------------------------+
```

### 1. Classification of CBDC
* **Wholesale CBDC (e₹-W):** Restricted access limited to select scheduled commercial banks and primary dealers. Designed for the settlement of secondary market transactions in Government Securities (G-Secs) and interbank money market transactions, reducing settlement risk, counterparty risk, and transaction costs through instantaneous Delivery versus Payment (DvP).
* **Retail CBDC (e₹-R):** Cash-like electronic token representing sovereign currency issued to the public. 
  * Distributed via an **intermediated two-tier model**: RBI creates and issues e₹ tokens; authorized commercial banks distribute and manage digital token wallets on consumer smartphones.
  * Denominated in the exact same denominations as physical currency coins and banknotes (50 paise, ₹1, ₹2, ₹5, ₹10, ₹20, ₹50, ₹100, ₹200, ₹500).
  * Features direct peer-to-peer (P2P) and peer-to-merchant (P2M) settlement with full interoperability with existing UPI QR codes.
  * **Non-Interest-Bearing Design:** To preserve financial stability and prevent the rapid "disintermediation" of the commercial banking sector (where depositors might withdraw funds from bank deposits to hold sovereign digital cash during times of bank stress), the Digital Rupee does not bear interest.

---

## 26.4 The Account Aggregator (AA) Ecosystem

The Account Aggregator (AA) framework is a consent-driven, secure data-sharing financial architecture regulated by the RBI under the *Non-Banking Financial Company - Account Aggregator (Reserve Bank) Directions, 2016*.

```
+-----------------------------------------------------------------------------------+
|                        ACCOUNT AGGREGATOR (AA) TOPOLOGY                           |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [ Financial Information Providers (FIPs) ]                                       |
|  * Scheduled Commercial Banks                                                     |
|  * Mutual Fund Asset Management Companies (AMCs)                                  |
|  * Depositories (NSDL / CDSL) & Brokers                                           |
|  * Insurance Companies & Pension Funds (PFRDA)                                    |
|  * Goods and Services Tax Network (GSTN)                                          |
|         ^                                                                         |
|         | Encrypted Financial Data (Direct Point-to-Point Payload)                |
|         v                                                                         |
|  [ ACCOUNT AGGREGATOR (NBFC-AA) ] <==================== [ CUSTOMER / USER ]       |
|  * Intermediary Data Conduit                          * Explicit, Granular,       |
|  * Strictly Data-Blind (Zero Storage, Decryption,       Revocable Digital         |
|    or Monetization of Data Payloads)                    Consent Artefact          |
|         ^                                                                         |
|         | Encrypted Data Delivered                                                |
|         v                                                                         |
|  [ Financial Information Users (FIUs) ]                                           |
|  * Lending Banks / NBFCs (Instant Cash Flow Underwriting)                         |
|  * Wealth Management Firms / Personal Finance Planners                            |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### Core Architecture and Legal Principles
1. **Data Blindness Standard:** The NBFC-AA is purely a digital conduit. It is legally and architecturally prohibited from storing, viewing, decrypting, or monetizing customer financial records. All data moving across the AA network is encrypted end-to-end with the recipient FIU's public cryptographic keys.
2. **Electronic Consent Artefact:** Data sharing requires explicit, informed, revocable, and granular consent from the customer. The electronic consent artefact specifies:
   * Identity of the customer and FIU.
   * Specific categories of financial information requested.
   * Explicit purpose of data collection.
   * Validity duration of consent and frequency of data retrieval.
   * Data retention period permitted at the FIU level.
3. **FIPs and FIUs:**
   * *Financial Information Providers (FIPs):* Entities that hold customer financial data registered with financial sector regulators (RBI, SEBI, IRDAI, PFRDA, and GSTN).
   * *Financial Information Users (FIUs):* Regulated financial entities that consume verified customer data to deliver financial products (e.g., cash-flow-based MSME lending without physical bank statement verification).

---

## 26.5 Practice Drill: Examination Diagnostic Questions

### Question 1
Under the Reserve Bank of India and NPCI regulatory guidelines, which of the following statements regarding the Unified Payments Interface (UPI) transaction value caps is correct?
A) The maximum limit for all UPI transactions, including merchant, retail, and capital market investments, is strictly capped at ₹1,00,000 per transaction.
B) The transaction limit for payments towards Initial Public Offerings (IPOs) and Retail Direct Scheme G-Sec investments through UPI is ₹5,00,000 per transaction.
C) UPI Lite allows offline transactions up to ₹2,000 per individual transaction without entering a UPI PIN.
D) Overdraft accounts are legally prohibited from being linked to UPI IDs under the Payment and Settlement Systems Act.

### Question 2
What is the core structural difference between the Digital Rupee (e₹) issued as a Central Bank Digital Currency (CBDC) and electronic money held in a commercial bank savings deposit?
A) The Digital Rupee is a direct sovereign liability appearing on the balance sheet of the Reserve Bank of India, whereas bank deposits represent commercial bank liabilities backed by deposit insurance.
B) The Digital Rupee bears an assured repo-linked interest rate, whereas savings bank deposits pay floating market rates.
C) Commercial bank money can be settled with instantaneous finality without clearing networks, whereas the Digital Rupee requires RTGS clearing.
D) The Digital Rupee is governed exclusively by the Information Technology Act, 2000, whereas bank deposits are governed by the Banking Regulation Act, 1949.

### Question 3
Under the RBI's Master Directions governing Non-Banking Financial Company - Account Aggregators (NBFC-AAs), what is meant by the principle of "Data Blindness"?
A) The Account Aggregator is permitted to view customer data only if authorized by a magistrate order.
B) The Account Aggregator processes and stores customer data in plaintext on sovereign domestic servers for 5 years.
C) The Account Aggregator acts solely as a secure data pipeline; it cannot decrypt, view, store, or sell the financial data payloads passing through its platform.
D) The Account Aggregator obscures the identity of the lender from the borrower during loan processing.

### Question 4
Regarding the programmable digital voucher system "e-RUPI", which of the following statements is FALSE?
A) It is both person-specific and purpose-specific, ensuring funds cannot be diverted to unauthorized categories.
B) Beneficiaries require a basic smartphone running the BHIM e-RUPI application to redeem the voucher.
C) The maximum ceiling for e-RUPI vouchers issued under government schemes is ₹1,00,000 per voucher.
D) Vouchers can be issued as basic SMS alphanumeric strings delivered to non-smart feature phones.

### Question 5
In the Aadhaar Enabled Payment System (AePS), which combination of customer credentials is strictly required to execute an off-us cash withdrawal at a Business Correspondent's Micro-ATM?
A) Debit Card Number + PIN + OTP
B) Bank Name (or IIN) + Aadhaar Number + Live Biometric Authentication (Fingerprint or Iris)
C) Virtual Payment Address (VPA) + 6-digit UPI PIN
D) Aadhaar Number + Registered Mobile Number OTP only

---

## 26.6 Diagnostic Solutions & Analysis

1. **Correct Answer: B**
   * *Analysis:* NPCI and RBI have raised the transaction ceiling for specific categories under UPI: payments towards IPO applications and the RBI Retail Direct Scheme (G-Secs), as well as educational institutions, direct tax payments, and healthcare, have a limit of **₹5,00,000** per transaction, compared to the standard ₹1,00,000 limit. Statement C is incorrect because UPI Lite permits individual pinless transactions up to ₹500 (with an aggregate wallet limit). Statement D is incorrect because UPI 2.0 explicitly permits linking Overdraft (OD) accounts.

2. **Correct Answer: A**
   * *Analysis:* CBDC (Digital Rupee) is sovereign legal tender and constitutes a direct liability of the central bank (RBI) appearing on its balance sheet, carrying zero sovereign credit risk. In contrast, commercial bank deposits are liabilities of individual commercial banks, subject to commercial bank credit and liquidity risks (partially mitigated by DICGC coverage up to ₹5 Lakh). The Digital Rupee does not bear interest.

3. **Correct Answer: C**
   * *Analysis:* "Data Blindness" is the cornerstone regulatory safeguard of the NBFC-AA architecture. The Account Aggregator is an encrypted conduit that transfers data from Financial Information Providers (FIPs) to Financial Information Users (FIUs) based on explicit user consent. The AA cannot decrypt, read, store, or monetize the data passing through its infrastructure.

4. **Correct Answer: B**
   * *Analysis:* Statement B is false. A major operational design strength of e-RUPI is that the beneficiary does not need a smartphone, bank account, or digital payment application. The voucher can be delivered via a simple SMS string or QR code to an ordinary feature phone and redeemed at the merchant using an OTP verification.

5. **Correct Answer: B**
   * *Analysis:* AePS transactions do not utilize physical plastic debit cards or passwords. To perform an off-us transaction (where the customer's account is with a different bank than the BC's acquiring bank), the system requires the Issuer Identification Number (IIN) / Bank Name, the customer's 12-digit Aadhaar Number, and live biometric authentication (fingerprint or iris scan) matched against the UIDAI central database.
