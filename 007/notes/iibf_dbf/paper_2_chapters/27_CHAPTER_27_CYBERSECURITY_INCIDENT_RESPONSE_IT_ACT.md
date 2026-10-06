# CHAPTER 27: CYBERSECURITY, INCIDENT RESPONSE & THE IT ACT

---

## 27.1 The Banking Cyber Threat Landscape & Defense Architecture

The rapid digital transformation of banking infrastructures has expanded the surface area for cyber threats. In financial services, cyber risk is not merely an operational IT concern but a systemic risk that can threaten capital solvency, operational continuity, and public confidence.

```
+-----------------------------------------------------------------------------------+
|                        TAXONOMY OF BANKING CYBER THREATS                          |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [ Social Engineering & Identity Fraud ]                                          |
|  * Phishing / Spear Phishing / Whaling: Fraudulent emails harvesting credentials. |
|  * Vishing (Voice) & Smishing (SMS): Deceptive communications harvesting OTPs.    |
|  * SIM Swap Fraud: Fraudulent re-issuance of mobile SIM to intercept 2FA SMS.     |
|                                                                                   |
|  [ Perimeter & Infrastructure Attacks ]                                           |
|  * Distributed Denial of Service (DDoS): Flooding network bandwidth or server     |
|    resources to render online portals and CBS gateways unreachable.               |
|  * Advanced Persistent Threats (APTs): State-sponsored or sophisticated covert    |
|    actors establishing long-term undetected footholds inside bank intranets.      |
|  * ATM Jackpotting & Skimming: Physical/malware attacks manipulating cash-dispense|
|    dispenser commands or copying magnetic stripe tracks.                          |
|                                                                                   |
|  [ Application & Data Layer Exploits ]                                            |
|  * SQL Injection (SQLi): Malicious SQL queries executed via input fields to       |
|    bypass authentication or extract database tables.                              |
|  * Ransomware: Cryptographic locking of databases and file servers accompanied   |
|    by extortion demands.                                                          |
|  * Man-in-the-Middle (MitM): Interception of unencrypted or improperly signed      |
|    network communications between customer client applications and bank servers.  |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

---

## 27.2 The RBI Cyber Security Framework & IT Governance

The Reserve Bank of India, operating through the recommendations of the **G. Gopalakrishnan Working Group** and the comprehensive *Master Direction on Information Technology Governance, Risk, Controls and Assurance Practices*, mandates a rigorous governance structure for commercial banks.

```
+-----------------------------------------------------------------------------------+
|                       BANK IT & CYBERSECURITY GOVERNANCE                          |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [ Board of Directors ]                                                           |
|    * Ultimate responsibility for IT Strategy, Information Security, and Resilience|
|         |                                                                         |
|         +---> [ IT Strategy Committee of the Board ]                              |
|         |       * Chaired by an Independent Director                              |
|         |       * Aligns IT investments with strategic business objectives        |
|         |                                                                         |
|         +---> [ Information Security Committee (ISC) ]                            |
|                 * High-level executive body driving security policy execution     |
|                                                                                   |
|  [ Chief Information Security Officer (CISO) ]                                    |
|    * Senior executive with dedicated, independent oversight of InfoSec           |
|    * Reports to executive leadership / Risk function; direct access to Board     |
|    * STRICT INDEPENDENCE: Operationally decoupled from Head of IT / CIO          |
|      (must not report to Head of IT) to prevent conflict of interest             |
|                                                                                   |
|  [ Security Operations Centre (SOC) ]                                             |
|    * 24x7x365 command center monitoring real-time network traffic and telemetry   |
|    * SIEM (Security Information and Event Management) analytics & threat hunting  |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### Core Regulatory Mandates
1. **Independence of the CISO:** The CISO must be an independent executive who does not have operational IT duties and must not report to the Head of IT / CIO. This prevents the self-audit conflict where operational IT delivery targets compromise information security standards.
2. **Security Operations Centre (SOC):** Banks must maintain a 24x7 Security Operations Centre staffed by trained personnel and powered by SIEM, Endpoint Detection and Response (EDR), and Network Traffic Analysis (NTA) tools.
3. **Vulnerability Assessment and Penetration Testing (VAPT):** Periodic vulnerability scans and invasive penetration tests must be conducted across all critical systems, web applications, mobile apps, and network segments before deployment and at least bi-annually thereafter.
4. **Mandatory Incident Reporting Window:**
   * **Reporting to RBI (CSITE Cell):** Banks must report any significant cyber incident to the RBI's Cyber Security and Information Technology Examination (CSITE) Cell within **2 to 6 hours** of detection, followed by a comprehensive Root Cause Analysis (RCA) report within specified statutory deadlines.
   * **Reporting to CERT-In:** Under the Ministry of Electronics and Information Technology (MeitY) directives, all cybersecurity incidents must be reported to the Indian Computer Emergency Response Team (CERT-In) within **6 hours** of noticing them.

---

## 27.3 Business Continuity Planning (BCP) & Disaster Recovery (DR)

Business Continuity Management ensures that a bank can maintain or rapidly recover operations following a natural disaster, cyber strike, or physical infrastructure disruption.

```
+-----------------------------------------------------------------------------------+
|                             BCP AND DR RECOVERY METRICS                           |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  <--- Past (Data Lost) ------------ Incident Point ------------ Future (Downtime) --->|
|  [======================|==================X==================|==================]
|                         |<------ RPO ----->|                  |                   |
|                         |                  |<------ RTO ----->|                   |
|                         |                                     |                   |
|  **Recovery Point Objective (RPO)**:                **Recovery Time Objective (RTO)**:
|  * The maximum acceptable latency / age             * The maximum acceptable elapsed   |
|    of data that must be recovered from              time before critical systems must |
|    backup storage when a disaster strikes.          be fully operational and restored.|
|  * Target for Core Banking: Near Zero               * Target for Critical Core Systems:|
|    (Synchronous Data Mirroring).                    Typically <= 2 to 4 hours.         |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### Operational DR Requirements
* **Geographical Separation:** The Primary Data Centre (PDC) and the Disaster Recovery Site (DRS) must be located in different seismic zones and geographical regions to prevent a single catastrophic event (earthquake, flood, regional power grid failure) from incapacitating both.
* **Near-Site (Data Mirroring):** In addition to the DRS, banks often maintain a Near-Site (within 50–100 km) with high-speed fiber links executing **zero-data-loss synchronous replication**, while the distant DRS uses asynchronous replication.
* **DR Drills:** Banks are legally required to conduct live Disaster Recovery drills at least on a half-yearly basis, switching real-time banking operations from the Primary Data Centre to the Disaster Recovery Site for a sustained operational window.

---

## 27.4 The Information Technology Act, 2000 (and 2008 Amendment)

The Information Technology Act, 2000 (IT Act) provides statutory recognition for electronic records, digital signatures, and electronic contracts, while establishing a penal framework for cyber offenses.

```
+----------------------------------------------------------------------------------------------------------+
|                               STATUTORY OFFENSES UNDER THE IT ACT, 2000                                  |
+----------------------------------------------------------------------------------------------------------+
| Section      | Nature of Offense                              | Prescribed Penalty / Punishment         |
| :---         | :---                                           | :---                                    |
| **Sec 43**   | Penalty and compensation for damage to computer| Civil liability: Compensation to the    |
|              | system (unauthorized download, virus, hacking).| affected person for damages.            |
+--------------+------------------------------------------------+-----------------------------------------+
| **Sec 43A**  | Failure to protect sensitive personal data     | Compensation to victim for negligence in|
|              | due to lack of reasonable security practices.  | implementing reasonable security norms. |
+--------------+------------------------------------------------+-----------------------------------------+
| **Sec 65**   | Tampering with computer source documents.      | Imprisonment up to 3 years, or          |
|              |                                                | fine up to ₹2,00,000, or both.          |
+--------------+------------------------------------------------+-----------------------------------------+
| **Sec 66**   | Dishonest or fraudulent act referred to in     | Imprisonment up to 3 years, or          |
|              | Section 43 (General Computer Offenses).        | fine up to ₹5,00,000, or both.          |
+--------------+------------------------------------------------+-----------------------------------------+
| **Sec 66C**  | Identity theft (fraudulent use of electronic   | Imprisonment up to 3 years, and         |
|              | signature, password, or unique identifier).    | fine up to ₹1,00,000.                   |
+--------------+------------------------------------------------+-----------------------------------------+
| **Sec 66D**  | Cheating by personation by using computer      | Imprisonment up to 3 years, and         |
|              | resource (covers phishing and social scams).   | fine up to ₹1,00,000.                   |
+--------------+------------------------------------------------+-----------------------------------------+
| **Sec 66E**  | Violation of bodily privacy (capturing/sharing)| Imprisonment up to 3 years, or          |
|              | images without consent.                        | fine up to ₹2,00,000, or both.          |
+--------------+------------------------------------------------+-----------------------------------------+
| **Sec 66F**  | Cyber terrorism (attacks threatening national  | Imprisonment which may extend to        |
|              | security or unity, or critical infrastructure).| **Life Imprisonment**.                  |
+--------------+------------------------------------------------+-----------------------------------------+
| **Sec 72**   | Penalty for breach of confidentiality and      | Imprisonment up to 2 years, or          |
|              | privacy by person with authorized access.      | fine up to ₹1,00,000, or both.          |
+----------------------------------------------------------------------------------------------------------+
```

### Digital Signatures vs. Electronic Signatures
* **Digital Signatures (Section 3):** Based on Asymmetric Crypto-systems and Hash Functions. Uses a private key for signing and a public key for verification. Issued exclusively by licensed Certifying Authorities (CAs) supervised by the Controller of Certifying Authorities (CCA).
* **Electronic Signatures (Section 3A):** Broader category encompassing any electronic authentication technique recognized by the Central Government in the Second Schedule of the Act (e.g., Aadhaar e-Sign using OTP/biometrics).

---

## 27.5 Practice Drill: Examination Diagnostic Questions

### Question 1
Under the Reserve Bank of India's Cybersecurity Framework and IT Governance directives, why is the Chief Information Security Officer (CISO) mandated to be organizationally independent of the Chief Information Officer (CIO) / IT Operations Department?
A) Because the CISO must hold statutory powers under the Indian Penal Code to arrest cyber offenders.
B) To eliminate conflicts of interest between operational IT targets (such as rapid deployment and low infrastructure costs) and information security assurance standards.
C) Because the CISO is an employee of the RBI seconded to the commercial bank.
D) To ensure that the CISO reports exclusively to the external auditor rather than the Board of Directors.

### Question 2
In Business Continuity Management (BCP) and Disaster Recovery (DR) engineering, what does a "Recovery Point Objective (RPO) of zero" imply for a bank's Core Banking Solution?
A) The bank can resume banking operations within zero seconds of an earthquake.
B) The disaster recovery site requires zero electricity to function.
C) In the event of a catastrophic failure at the primary data center, zero data loss is tolerated, requiring real-time synchronous data mirroring to the backup site.
D) The bank has zero liability towards customer claims arising from server failure.

### Question 3
Under current regulatory guidelines issued by the Indian Computer Emergency Response Team (CERT-In) and the Reserve Bank of India, what is the mandated timeline within which banks must report a significant cybersecurity incident to CERT-In?
A) Within 24 hours of identifying the incident
B) Within 6 hours of noticing the incident
C) Within 30 days along with the completed audited balance sheet
D) Within 48 hours after recovering all compromised databases

### Question 4
A rogue individual deploys deceptive electronic emails mimicking an authorized bank portal to steal customer login credentials, and uses those credentials to fraudulently transfer funds from customer accounts. Under which provisions of the Information Technology Act, 2000, can the offender be prosecuted for identity theft and cheating by personation?
A) Section 43A and Section 65
B) Section 66C (Identity Theft) and Section 66D (Cheating by Personation)
C) Section 72 and Section 85
D) Section 25 and Section 31

### Question 5
Which committee constituted by the Reserve Bank of India provided the foundational recommendations that led to the formalization of Information Security policies, electronic banking controls, and technology risk governance in the Indian banking system?
A) Narasimham Committee
B) G. Gopalakrishnan Working Group
C) Tarapore Committee
D) Damodaran Committee

---

## 27.6 Diagnostic Solutions & Analysis

1. **Correct Answer: B**
   * *Analysis:* Regulatory governance strictly demands that the CISO be independent of IT Operations and must not report to the Head of IT / CIO. The Head of IT/CIO is evaluated on system uptime, speed of project delivery, and cost efficiency, which can lead to compromises on security controls. An independent CISO ensures uncompromised security oversight without operational conflict of interest.

2. **Correct Answer: C**
   * *Analysis:* **Recovery Point Objective (RPO)** measures the maximum acceptable age of data lost due to a disruptive event. An RPO of zero means that zero transaction data loss is tolerated; every committed transaction at the Primary Data Centre must be synchronously mirrored in real-time to the backup or near-site storage before the transaction is acknowledged. (In contrast, **RTO** measures the time required to restore system operations).

3. **Correct Answer: B**
   * *Analysis:* Under the MeitY/CERT-In directions issued in April 2022, all cybersecurity incidents must be reported to CERT-In within **6 hours** of noticing or being brought to notice of the incident. (RBI also requires initial reporting to its CSITE cell within 2 to 6 hours).

4. **Correct Answer: B**
   * *Analysis:* Section 66C of the IT Act penalizes identity theft (fraudulently using another person's electronic signature, password, or unique identifier), carrying up to 3 years imprisonment and fine. Section 66D penalizes cheating by personation by using any computer resource, directly covering phishing attacks and online financial impersonation.

5. **Correct Answer: B**
   * *Analysis:* The **G. Gopalakrishnan Working Group** on Information Security, Electronic Banking, Technology Risk Management, and Cyber Frauds (submitted in 2011) was the landmark committee whose findings formed the bedrock of RBI's cybersecurity and IT governance frameworks. (The Damodaran Committee focused on Customer Service; Tarapore focused on Capital Account Convertibility).
