# CHAPTER 25: DELIVERY CHANNELS, ELECTRONIC PAYMENTS & CUSTOMER LIABILITY

---

## 25.1 Delivery Channels Architecture: ATMs, WLAs, and POS

Modern commercial banking operates on a decoupled multi-channel architecture where customer touchpoints are separated from the centralized ledger. Alternative Delivery Channels (ADCs) lower transaction operating costs, decongest physical branch networks, and provide 24x7 transactional access.

```
+-----------------------------------------------------------------------------------+
|                    ALTERNATIVE DELIVERY CHANNELS (ADC) TOPOLOGY                   |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [ Customer Touchpoints ]                                                         |
|         |                                                                         |
|         +---> Automated Teller Machines (ATMs) / Cash Recyclers (BNA)             |
|         +---> White Label ATMs (WLA - Non-Bank PSS Act) / Brown Label (BLA)       |
|         +---> Point of Sale (POS) Terminals / mPOS / SoftPOS / Bharat QR          |
|         +---> Internet & Mobile Banking Applications                              |
|         |                                                                         |
|  [ Interbank Switching & Settlement Rails ]                                       |
|         |                                                                         |
|         +---> National Financial Switch (NFS - NPCI)                              |
|         +---> Structured Financial Messaging System (SFMS - RBI / IFTAS)          |
|         +---> SWIFT Network (ISO 15022 MT / ISO 20022 MX Messaging)               |
|         |                                                                         |
|  [ Centralized Processing & Host Settlement ]                                     |
|         |                                                                         |
|         +---> Core Banking Solution (CBS - Host Central Ledger)                   |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### 1. Classification of Automated Teller Machines (ATMs)
* **On-Site ATMs:** Located within or contiguous to the premises of an existing bank branch. Primary role is to migrate cash withdrawals and routine balance inquiries away from physical teller counters.
* **Off-Site ATMs:** Located at independent geographical points with high footfall (transit hubs, hospitals, educational institutions, shopping arcades) completely standalone from branch premises.
* **Mobile ATMs:** Mobile vans equipped with satellite connectivity and cash dispensing units, deployed during natural disasters, rural market fairs (*haats*), or military cantonments.
* **Worksite ATMs:** Installed exclusively within corporate campuses or factory premises reserved for employees of that corporate client.
* **Cash Recycler Systems (CRS) / Bunch Note Acceptors (BNA):** Specialized machines capable of both dispensing and accepting cash deposits. CRSs incorporate optical note-sorting and counterfeit detection sensors. Under Reserve Bank of India (RBI) Clean Note directives, accepted currency cannot be recirculated unless it passes high-speed authentication and fitness sorting; otherwise, deposited cash is segregated in a dedicated vault box until manual bank verification.

### 2. White Label ATMs (WLAs) vs. Brown Label ATMs (BLAs)

| Dimension | White Label ATMs (WLAs) | Brown Label ATMs (BLAs) |
| :--- | :--- | :--- |
| **Ownership of Hardware** | Non-bank entity authorized under Payment & Settlement Systems Act, 2007 (PSSA). | Third-party vendor / Service provider owns hardware and leasehold. |
| **Branding Displayed** | Non-bank entity branding (e.g., India1, Tata Indicash, Muthoot). No bank logo. | Sponsoring Commercial Bank's official logo and visual branding. |
| **Cash Ownership & Loading**| Sponsoring commercial bank provides cash; WLA operator manages cash logistics. | Sponsoring bank provides and owns cash; vendor provides site management. |
| **Network Switching** | Connected to National Financial Switch (NFS) operated by NPCI via sponsor bank. | Connected directly to the sponsoring bank's switch and CBS. |
| **Regulatory Objective** | Deepen financial inclusion and ATM penetration in Tier III to Tier VI semi-urban/rural centers. | Cost reduction and capital-expenditure offloading for commercial banks. |

### 3. Point of Sale (POS) Ecosystem and Merchant Discount Rate (MDR)
* **Standard POS Terminals:** Dedicated electronic hardware validating chip-and-PIN (EMV standard) or contactless Near Field Communication (NFC) cards over mobile telecommunication or fixed broadband networks.
* **Mobile POS (mPOS):** Card reader peripheral interfaced with a merchant smartphone or tablet executing transactions through a secure mobile application.
* **SoftPOS:** Technology allowing standard NFC-enabled consumer Android smartphones to act as merchant card readers without external dongles, adhering to PCI-CPoC (Contactless Payments on COTS) standards.
* **Bharat QR:** Interoperable QR code standard jointly developed by NPCI, Visa, Mastercard, and American Express, enabling push-payment from card or bank accounts without physical terminal hardware.
* **Merchant Discount Rate (MDR):** The fee charged to a merchant by the acquiring bank for processing debit or credit card transactions. Regulated by RBI under PSSA:
  * For debit card transactions at physical POS: MDR is capped based on merchant turnover (maximum 0.40% for turnover up to ₹20 Lakh; maximum 0.90% for turnover exceeding ₹20 Lakh, capped at ₹1,000 per transaction).
  * UPI and RuPay Debit Cards: By statutory mandate under Section 10A of PSSA 2007 (inserted via Finance Act 2019), zero MDR is leviable on merchants.

---

## 25.2 Electronic Remittance Systems: NEFT, RTGS, and SWIFT

### 1. National Electronic Funds Transfer (NEFT)
* **Governing Body:** Owned and operated directly by the Reserve Bank of India.
* **Operational Availability:** Operates on a 24x7x365 basis since December 2019.
* **Settlement Mechanism:** Settled on a Deferred Net Settlement (DNS) basis in 48 half-hourly batches starting from 00:30 hours to 00:00 hours daily.
* **Transaction Caps:** No minimum transaction limit (transfers starting from ₹1 permitted). No maximum regulatory ceiling for individual transactions processed through online channels (banks may enforce internal fraud-risk limits).
* **Cash Remittance Limit:** For walk-in customers who do not maintain a bank account at the remitting branch, cash-based NEFT remittances are capped at ₹50,000 per transaction, subject to full remitter KYC (name, address, mobile number).
* **Indo-Nepal Remittance Scheme:** Operated through NEFT under reciprocal bilateral arrangements between RBI and Nepal Rastra Bank. Beneficiary receives funds in Nepali Rupees via Nepal SBI Bank Ltd (NSBL) or authorized agencies. Maximum limit per transaction is ₹2,00,000 (raised from ₹50,000), with a cap of 12 remittances per calendar year for non-account walk-in remitters (unlimited for account holders).
* **Charges:** Under RBI directives, banks are strictly prohibited from levying any charges on savings bank account holders for outward NEFT transactions initiated online (internet or mobile banking).

### 2. Real Time Gross Settlement (RTGS)
* **Governing Body:** Owned and operated directly by the Reserve Bank of India.
* **Operational Availability:** Operates on a continuous 24x7x365 basis since December 2020.
* **Settlement Mechanism:** Continuous, order-by-order gross settlement without netting. Transactions are settled irrevocably and unconditionally in central bank funds directly across the settlement accounts of member banks maintained with RBI.
* **Transaction Thresholds:**
  * **Minimum Transaction Value:** ₹2,00,000 (Rupees Two Lakh). Transactions below ₹2,00,000 cannot be routed through RTGS.
  * **Maximum Limit:** No upper ceiling.
* **Charges:** Zero charges for inward RTGS transactions. For outward online transactions initiated by savings bank holders, charges are completely waived. For branch-assisted transactions, RBI prescribes maximum regulatory caps based on value slabs.

### 3. Messaging Protocols: SFMS and SWIFT Architecture
* **Structured Financial Messaging System (SFMS):**
  * Secure, domestic financial messaging platform designed by IDRBT (Institute for Development and Research in Banking Technology) and operated by IFTAS (Indian Financial Technology and Allied Services, an RBI subsidiary).
  * Employs asymmetric cryptography and digital certificates to authenticate domestic inter-bank messaging for NEFT, RTGS, and domestic bank guarantees.
* **Society for Worldwide Interbank Financial Telecommunication (SWIFT):**
  * Global cooperative society headquartered in La Hulpe, Belgium, providing standardized, highly secure financial telecommunication messaging across global financial institutions.
  * **Business Identifier Codes (BIC) / SWIFT Codes:** ISO 9362 standard consisting of 8 or 11 alphanumeric characters:
    * Characters 1-4: Institution Code (Bank identifier).
    * Characters 5-6: ISO Country Code (e.g., `IN` for India).
    * Characters 7-8: Location Code.
    * Characters 9-11 (Optional): Specific Branch Code (head office default is `XXX`).
  * **Message Formats & Migration:**
    * *Legacy Category MT (Message Type):* Proprietary text-based formats (e.g., MT 103 for Single Customer Credit Transfer, MT 700 for Letter of Credit issuance).
    * *ISO 20022 Standard (MX Messages):* Modern, structured XML-based financial messaging replacing legacy MT messages. Provides richer data structures, end-to-end auditability, enhanced sanctions screening, and interoperability between domestic and international market infrastructures.
  * **The PNB-Nirav Modi Fraud Vulnerability & Remediation:** Fraudulent Letters of Undertaking (LoUs) were issued via standalone SWIFT terminals without recording corresponding contingent liabilities in the Core Banking Solution (CBS). In response, RBI issued an unbending statutory directive mandating 100% straight-through processing (STP) integration between SWIFT messaging infrastructure and bank CBS, eliminating any offline, manual entry of trade and financial messaging.

---

## 25.3 Customer Liability in Unauthorised Electronic Banking Transactions

To protect consumer trust in digital payments, RBI issued Master Directions establishing a three-tiered liability framework governing unauthorized electronic banking transactions (covering both remote/online transactions and card-present face-to-face transactions).

```
+-----------------------------------------------------------------------------------+
|               RBI CUSTOMER LIABILITY MATRIX (MASTER DIRECTION 2017/2024)          |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [ Scenario 1: Zero Customer Liability ]                                          |
|  * Contributory fraud / negligence / deficiency on part of the bank               |
|    (irrespective of whether customer reports or not).                             |
|  * Third-party breach where neither bank nor customer is at fault, PROVIDED       |
|    customer notifies the bank WITHIN 3 WORKING DAYS of receiving communication.   |
|                                                                                   |
|  [ Scenario 2: Limited Customer Liability ]                                       |
|  * Customer negligence (e.g., credential sharing, OTP disclosure):                |
|    -> Customer bears 100% loss until the unauthorized transaction is reported.    |
|    -> Any transaction occurring AFTER reporting is 100% the bank's liability.     |
|  * Third-party breach notified between 4 to 7 WORKING DAYS:                       |
|    -> Customer liability capped based on account/facility type:                   |
|       - BSBDA Accounts: Maximum ₹5,000                                            |
|       - Other SB Accounts, Pre-paid instruments, Credit Card limit up to ₹5 Lakh: |
|         Maximum ₹10,000                                                           |
|       - Current / Overdraft / CC limit above ₹5 Lakh: Maximum ₹25,000             |
|                                                                                   |
|  [ Scenario 3: Beyond 7 Working Days ]                                            |
|  * If reported after 7 working days, customer liability is determined strictly    |
|    according to the bank's Board-approved policy.                                 |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### Operational Mandates for Banks
1. **Mandatory SMS and Email Alerts:** Banks must mandatorily register customers for direct mobile alerts for electronic transactions. Customers must be provided with a direct mechanism (immediate reply SMS, interactive toll-free number, one-click mobile app block) to report fraud instantly.
2. **Shadow Reversal / Credit within 10 Working Days:** Once a customer reports an unauthorized transaction, the bank must credit the disputed amount to the customer's account within 10 working days from the date of intimation (which may be a shadow credit with lien pending investigation).
3. **90-Day Absolute Resolution Window:** The complaint must be conclusively resolved, and the customer liability settled, within 90 days from the date of receipt of the complaint. In the event the bank fails to resolve the complaint within 90 calendar days, the customer must be compensated 100% of the disputed amount, regardless of customer negligence.
4. **Burden of Proof:** The burden of proving customer negligence or customer complicity in an unauthorized transaction lies entirely on the bank, not the customer.

---

## 25.4 Harmonisation of Turn Around Time (TAT) and Failed Transaction Penalties

Under Section 10(2) read with Section 18 of the Payment and Settlement Systems Act, 2007, the RBI issued a harmonized framework specifying Turn Around Time (TAT) for failed transactions across electronic payment systems and mandatory customer compensation for delays.

```
+----------------------------------------------------------------------------------------------------------+
|                       HARMONISED TAT & COMPENSATION FRAMEWORK (RBI DIRECTIONS)                           |
+----------------------------------------------------------------------------------------------------------+
| Payment System               | Scenario Description          | Prescribed TAT      | Mandatory Penalty   |
| :---                         | :---                          | :---                | :---                |
| **ATM / Cash Recyclers**     | Account debited, but cash     | Proactive reversal  | ₹100 per day        |
|                              | not dispensed or partially    | within **T + 5**    | beyond T + 5 days   |
|                              | dispensed.                    | calendar days.      | to customer.        |
+------------------------------+-------------------------------+---------------------+---------------------+
| **Card to Card Transfer**    | Card account debited, but     | Reversal within     | ₹100 per day        |
|                              | beneficiary card not credited.| **T + 1** day.      | beyond T + 1 day.   |
+------------------------------+-------------------------------+---------------------+---------------------+
| **POS / E-Commerce**         | Account debited, but merchant | Auto-reversal within| ₹100 per day        |
|                              | confirmation not received.    | **T + 5** days.     | beyond T + 5 days.  |
+------------------------------+-------------------------------+---------------------+---------------------+
| **IMPS (Instant Payment)**   | Account debited, but credit   | Auto-reversal within| ₹100 per day        |
|                              | not passed to beneficiary.    | **T + 1** day.      | beyond T + 1 day.   |
+------------------------------+-------------------------------+---------------------+---------------------+
| **UPI Transactions**         | Beneficiary not credited;     | Auto-reversal within| ₹100 per day        |
|                              | debit executed from remitter. | **T + 1** day.      | beyond T + 1 day.   |
+------------------------------+-------------------------------+---------------------+---------------------+
| **NACH Mandates**            | Delay in crediting customer   | Beneficiary credit  | ₹100 per day        |
|                              | or delay in refunding debit.  | within **T + 1** day.| beyond T + 1 day.  |
+----------------------------------------------------------------------------------------------------------+
```
*Note: In all cases, compensation must be credited directly to the customer's bank account automatically, without requiring the customer to submit a formal claim or grievance.*

---

## 25.5 Practice Drill: Examination Diagnostic Questions

### Question 1
A customer notices an unauthorized electronic debit of ₹45,000 from their regular Savings Bank account on Monday evening. The investigation confirms that the debit was due to a third-party cybersecurity breach occurring at the payment aggregator level, with no contributory negligence or credential compromise on the part of the customer. The customer informs the branch on Thursday morning (within 3 working days). What is the customer's financial liability under RBI directives?
A) Maximum ₹10,000
B) Maximum ₹5,000
C) Zero liability
D) Full liability until the bank recovers the funds from the payment aggregator

### Question 2
Under the Payment & Settlement Systems Act, 2007 regulations governing White Label ATMs (WLAs), which of the following statements is legally accurate?
A) Non-bank entities operating WLAs are permitted to display their own branding alongside the sponsoring bank's logo on the terminal exterior.
B) The cash dispensed from a WLA is owned and legally backed by the Reserve Bank of India directly.
C) WLAs are owned and operated by non-bank entities authorized by RBI, but they connect to the National Financial Switch (NFS) via a sponsor commercial bank.
D) Walk-in customers are not permitted to use debit cards issued by public sector banks at WLA locations.

### Question 3
A customer attempts an ATM cash withdrawal of ₹10,000 on the 1st of the month. The account is successfully debited, but the ATM suffers a hardware jam and fails to dispense any cash. The customer registers a complaint immediately. The bank resolves the issue and credits the customer's account on the 10th of the same month (taking a total of T + 9 calendar days). Under RBI's Harmonised TAT framework, what compensation, if any, is the bank legally mandated to pay the customer?
A) No compensation, because the bank rectified the failure within 15 calendar days.
B) ₹400 (₹100 per day for 4 days of delay beyond T + 5 days).
C) ₹900 (₹100 per day for the entire 9-day duration).
D) Bank Rate plus 2% interest on ₹10,000 for 9 days.

### Question 4
Consider the following statements regarding the Real Time Gross Settlement (RTGS) system in India:
1. RTGS is owned, operated, and settled directly across the books of the Reserve Bank of India.
2. The minimum threshold for routing a transaction through RTGS is ₹2,00,000.
3. Outward RTGS transactions initiated by individual customers through mobile and internet banking channels attract a mandatory statutory processing fee of ₹25.
4. RTGS operates on a continuous gross settlement basis across 24x7x365 days.

Which of the statements given above are correct?
A) 1, 2, and 4 only
B) 2 and 3 only
C) 1, 3, and 4 only
D) 1, 2, 3, and 4

### Question 5
In the context of international financial messaging, what major structural vulnerability was exposed during the PNB-Nirav Modi banking fraud involving Letters of Undertaking (LoUs), and what corrective statutory measure was enforced by the RBI?
A) SWIFT MT 700 messages were intercepted and decrypted by cyber-attackers; RBI mandated the immediate suspension of all international trade credit.
B) LoUs were transmitted over standalone SWIFT terminals without corresponding liability entries being logged in the bank's Core Banking Solution (CBS); RBI mandated mandatory STP integration between SWIFT and CBS.
C) The SWIFT network lacked 8-digit BIC identification codes; RBI mandated the creation of the Indian Structured Financial Messaging System (SFMS) for cross-border trade.
D) Foreign correspondent banks failed to authenticate Belgian SWIFT certificates; RBI prohibited Indian banks from operating overseas branches.

---

## 25.6 Diagnostic Solutions & Analysis

1. **Correct Answer: C**
   * *Analysis:* Under RBI's Master Direction on Customer Liability in Unauthorised Electronic Banking Transactions, where the unauthorized transaction is due to a third-party breach and neither the bank nor the customer is at fault, and the customer notifies the bank within three working days of receiving the communication, the customer has **Zero Liability**. The entire amount of ₹45,000 must be restored to the customer by the bank.

2. **Correct Answer: C**
   * *Analysis:* WLAs are owned and operated by non-bank entities authorized by RBI under the PSSA 2007. They connect to the National Financial Switch (NFS) operated by NPCI through a designated sponsor commercial bank, which also handles cash replenishment logistics. WLAs carry the branding of the non-bank operator only and strictly do not bear commercial bank logos.

3. **Correct Answer: B**
   * *Analysis:* Under the RBI Harmonised TAT framework for failed ATM transactions, the prescribed TAT for proactive reversal is **T + 5 calendar days**. If the bank reverses the debit on T + 9 days, there is a delay of 4 days beyond the mandated limit. The bank must proactively credit compensation of ₹100 per day for each day of delay, resulting in $4 \times ₹100 = ₹400$.

4. **Correct Answer: A**
   * *Analysis:* Statements 1, 2, and 4 are correct. Statement 3 is incorrect because RBI has completely abolished all charges on online RTGS and NEFT transactions initiated through digital channels (internet and mobile banking) for savings bank account holders.

5. **Correct Answer: B**
   * *Analysis:* The PNB fraud occurred because fraudulent Letters of Undertaking (LoUs) were issued on a standalone SWIFT terminal that had not been integrated with the bank's Core Banking Solution (CBS). Consequently, no contingent liabilities or fund commitments were visible in the bank's accounting ledger. RBI strictly mandated 100% Straight-Through Processing (STP) integration between SWIFT and CBS to ensure zero manual or off-ledger message transmission.
