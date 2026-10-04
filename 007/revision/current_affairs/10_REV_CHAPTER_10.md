# RAPID REVISION MATRIX: CHAPTER 10

**Topic**: Computer Aptitude, Digital Banking Systems & Cybersecurity Master  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)  
**Curricular Link**: Chapter 10

---

## 1. Computer Systems, Protocols & Architecture Matrix

| Component / Layer | Protocol / Unit | Key Technical Function | Exam Distractor & Pitfall |
| :--- | :--- | :--- | :--- |
| **CPU Architecture** | Program Counter (PC) vs Instruction Register (IR) | PC holds address of **next** instruction to be executed; IR holds instruction **currently** being decoded. | Stating that PC holds the current instruction is a classic question trap! |
| **Memory Hierarchy** | Registers > Cache (L1, L2, L3) > RAM (SRAM, DRAM) > SSD > HDD | SRAM uses flip-flops (no refresh needed, faster); DRAM uses capacitors (needs periodic refreshing, slower). | DRAM is cheaper and denser than SRAM; main memory is built of DRAM. |
| **OSI 7-Layer Model** | Physical (Bits) $ightarrow$ Data Link (Frames) $ightarrow$ Network (Packets) $ightarrow$ Transport (Segments) $ightarrow$ Session $ightarrow$ Presentation $ightarrow$ Application | Router operates at Layer 3 (Network); Switch operates at Layer 2 (Data Link); Hub operates at Layer 1. | TCP and UDP operate at **Layer 4 (Transport)**. IP operates at **Layer 3**. |
| **Digital Banking Tech** | RTGS vs NEFT vs IMPS | RTGS: Real-time, gross settlement, min limit **₹2 Lakhs** (zero max limit); NEFT: Half-hourly batches, zero minimum limit; IMPS: Instant, operated by NPCI, 24x7x365, max limit **₹5 Lakhs**. | Both RTGS and NEFT are operated directly by **RBI** and are free of charge for online transactions since 2019. |
| **Cybersecurity Threats** | Ransomware vs Trojan vs Rootkit | Ransomware encrypts user data demanding ransom (e.g. WannaCry); Trojan disguises as legitimate software; Rootkit provides stealth administrative/root privileges undetected by OS. | A **Worm** is self-replicating and does NOT need a host program, unlike a standard Virus which requires host execution! |

---

## 2. 60-Second Memory Skeleton
- **ISO 20022**: Universal XML-based financial messaging standard adopted for RTGS and international payments replacing legacy SWIFT MT messages.
- **CBS (Core Banking Solutions)**: Centralized online banking engine (e.g., Finacle by Infosys, BaNCS by TCS, Flexcube by Oracle).
- **Phishing vs Vishing vs Smishing**: Phishing via Email, Vishing via Voice call, Smishing via SMS text message.
