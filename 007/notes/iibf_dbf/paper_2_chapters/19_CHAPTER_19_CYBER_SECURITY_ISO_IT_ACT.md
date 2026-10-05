# CYBER SECURITY IN BANKS, ISO 27001 & IT ACT 2000

Digital banking infrastructure faces persistent advanced persistent threats (APTs), ransomware, and phishing. Regulated under the RBI Cyber Security Framework (2016), Information Technology Act 2000 (amended 2008), and ISO/IEC 27001 standards, banks maintain 24x7 Security Operations Centers (SOC) with strict mandatory incident reporting windows.

## § 19.1 Comprehensive Operational & Legal Analysis

Cyber Security in Banks, ISO 27001 & Information Technology Act

> **Key Concept — Pivotal Concept: Information Security & Cyber Resilience in Banking**
> Banks handle massive financial assets and sensitive personal data, making robust cyber defense, data confidentiality, integrity, and availability (CIA Triad) a regulatory prerequisite.

## 1. RBI Cyber Security Framework & Incident Reporting Norms

| Security Dimension | Mandatory RBI Guideline / Standard | Operational Enforcement Mechanism |
| --- | --- | --- |
| Security Operations Centre (SOC) | Mandatory **24x7x365 SOC** equipped with SIEM (Security Information & Event Management) tools | Real-time threat monitoring, anomaly detection, and automated log analysis. |
| Mandatory Incident Reporting | All unusual cyber incidents, data breaches, or ransomware attacks must be reported to RBI and **CERT-In within 6 Hours** | Submission of initial cyber incident report within 6 hours followed by root-cause analysis. |
| Two-Factor Authentication (2FA) | Mandatory Additional Factor of Authentication (AFA) for all card-not-present and digital fund transfers | OTP, Hardware Token, or Biometric verification alongside static password. |
| Network Segmentation | Separation of database servers, application servers, and external internet-facing web servers with firewalls | Demilitarized Zone (DMZ) architecture preventing direct external access to core databases. |
| VAPT (Vulnerability Assessment & Penetration Testing) | Mandatory periodic VAPT audits of all internet-facing banking applications | Conducted at least **twice a year** by CERT-In empaneled security auditors. |

## 2. Key Provisions of the Information Technology Act, 2000 (Amended 2008)

| Section in IT Act | Offence / Statutory Mandate | Penalties / Legal Consequence |
| --- | --- | --- |
| Section 43 | Damage to computer systems, unauthorized downloading, virus injection, or data extraction without permission | Compensation up to **₹1 Crore** to the affected person/bank. |
| Section 43A | Failure of a corporate entity / bank to protect sensitive personal data resulting in wrongful loss | Liable to pay damages by way of compensation to the affected person (no upper cap). |
| Section 66 | Hacking / Computer related offences with fraudulent intention | Imprisonment up to **3 years** or fine up to **₹5 Lakhs** or both. |
| Section 66C | Identity Theft (fraudulent use of electronic signature, password, or unique identification feature) | Imprisonment up to **3 years** and fine up to **₹1 Lakh**. |
| Section 66D | Cheating by Personation using computer resource / mobile phone (Phishing / Vishing frauds) | Imprisonment up to **3 years** and fine up to **₹1 Lakh**. |
| Section 66F | Cyber Terrorism (acts aimed at threatening unity, integrity, security of India or disabling critical infrastructure) | Imprisonment for **LIFE**. |

> **Exam Anchor & Trap:**
> Top Exam Traps on Cyber Security & IT Act:
1. **CERT-In Reporting Deadline:** Cyber security incidents must be reported to CERT-In within **6 HOURS** of detection (not 24 hours or 48 hours).
2. **Cyber Terrorism Penalty:** The maximum penalty under Section 66F for cyber terrorism targeting critical financial/national infrastructure is **Life Imprisonment**.
3. **ISO 27001 Standard:** ISO 27001 is the standard for **Information Security Management Systems (ISMS)**, while ISO 9001 is for General Quality Management.

---

### Practice Questions & Solved Numerical Drills (IIBF Pattern)

**Q1:** Under RBI Cyber Security Framework guidelines, within what maximum timeline must a commercial bank report any unusual cybersecurity incident or breach to the RBI?
• (A) Within 2 to 6 hours of detection
• (B) Within 24 hours of investigation completion
• (C) Within 7 working days
• (D) In the quarterly compliance report

**Q2:** Which section of the Information Technology Act 2000 penalizes identity theft and fraudulent use of another person’s electronic signature or password?
• (A) Section 43A
• (B) Section 66C
• (C) Section 66E
• (D) Section 72A

**Q3:** What is the role of the Indian Computer Emergency Response Team (CERT-In) under Section 70B of the Information Technology Act?
• (A) Commercial audit of bank loan portfolios
• (B) National apex agency for collecting, analyzing, and disseminating cybersecurity incidents and emergency response
• (C) Setting bank interest subvention rates
• (D) Issuing credit cards to consumers

#### Solutions & Detailed Explanations

1. **(A) Within 2 to 6 hours of detection** — Banks must report cyber incidents to the RBI within 2 to 6 hours of detection to allow coordinated containment across the financial sector.

2. **(B) Section 66C** — Section 66C penalizes identity theft with imprisonment up to 3 years and fine up to ₹1 Lakh.

3. **(B) National apex agency for collecting, analyzing, and disseminating cybersecurity incidents and emergency response** — CERT-In coordinates national cybersecurity incident response and mandates 6-hour incident reporting for critical entities.

## § 19.2 Active Recall Diagnostic Vault

<details>
<summary>What are the core components of the "CIA Triad" in banking information security?</summary>
1. Confidentiality: Protecting sensitive financial and customer data from unauthorized access or disclosure (encryption, access controls). 2. Integrity: Guarding against unauthorized modification, deletion, or tampering of financial ledgers (hashing, checksums, digital signatures). 3. Availability: Ensuring authenticated users have timely and uninterrupted access to banking systems (redundant infrastructure, DDoS mitigation).
</details>

<details>
<summary>Explain the role of a 24x7 Security Operations Center (SOC) and Security Information and Event Management (SIEM) in banking.</summary>
A SOC is a centralized facility staffed by cybersecurity analysts monitoring bank networks in real-time. It uses SIEM software to aggregate, correlate, and analyze log events from firewalls, servers, databases, and ATMs, triggering automated alerts on detecting anomalous behavioral patterns, unauthorized logins, or malware propagation.
</details>

