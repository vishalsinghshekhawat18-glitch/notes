<div style="page-break-before: always;"></div>

# CHAPTER 13: ATOMIC STRUCTURE, QUANTUM NUMBERS, ISOTOPES & RADIOISOTOPES

**Canonical Sources Unified**:
* NCERT Class 9 Science (Chapter 3: Atoms and Molecules & Chapter 4: Structure of the Atom)
* NCERT Class 11 Chemistry (Part 1, Chapter 2: Structure of Atom — Quantum Mechanical Model, Orbitals, Electronic Configurations)
* Standard Academic Chemistry Treatises (Morrison & Boyd, NCERT Canon)
* Standard Competitive Examination Compendiums (UPSC CSE, State PSCs, SSC CGL)

---

## 13.1 Historical Evolution of Atomic Architecture

```
        DALTON (1808)           THOMSON (1898)          RUTHERFORD (1911)          BOHR (1913)
        [ Solid Indivisible ]   [ Plum Pudding Model ]  [ Planetary Nuclear Model] [ Quantized Orbitals ]
        "Billiard Ball"         e⁻ embedded in uniform  Dense positive nucleus     e⁻ in discrete stationary
        sphere of matter        positive sphere         at center; e⁻ orbit like   orbits; L = nh / 2π
                                                        planets (Radiation crash!)
```

### 1. John Dalton's Atomic Theory (1808)
* Matter is composed of indivisible, indestructible particles called **Atoms**.
* Atoms of the same element are identical in mass and properties; atoms of different elements have different masses.
* Chemical reactions involve only the reorganization of atoms; atoms are neither created nor destroyed (**Conservation of Mass**).
* *Historical Note*: The indivisible atom concept was proposed 2,500 years earlier by ancient Indian sage-philosopher **Acharya Kanad** (who termed the smallest indivisible unit *Parmanu*) and Greek philosopher Democritus.

### 2. Discovery of Fundamental Subatomic Particles

| Particle | Symbol | Discoverer & Year | Absolute Charge | Relative Charge | Absolute Mass | Mass Relative to Proton |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Electron** | $e^-$ | **J.J. Thomson (1897)** (Cathode Ray Tube) | $-1.602 \times 10^{-19}\text{ C}$ | $-1$ | $9.109 \times 10^{-31}\text{ kg}$ | $\frac{1}{1837}\text{th}$ of proton |
| **Proton** | $p^+$ | **E. Goldstein (1886)** (Anode Rays / Canal Rays); Named by **Rutherford (1919)** | $+1.602 \times 10^{-19}\text{ C}$ | $+1$ | $1.6726 \times 10^{-27}\text{ kg}$ | $1.007\text{ u} \approx 1\text{ u}$ |
| **Neutron** | $n^0$ | **James Chadwick (1932)** (Bombarding Be with $\alpha$-particles) | **$0\text{ Coulombs}$** | $0$ | $1.6749 \times 10^{-27}\text{ kg}$ | $1.008\text{ u} \approx 1\text{ u}$ |

> [!IMPORTANT]
> **Subatomic Mass Hierarchy**:  
> $$\mathbf{\text{Mass of Neutron } (1.6749 \times 10^{-27}\text{ kg}) > \text{Mass of Proton } (1.6726 \times 10^{-27}\text{ kg}) \gg \text{Mass of Electron } (9.109 \times 10^{-31}\text{ kg})}$$
> A neutron is slightly heavier than a proton. An unbound, free neutron is unstable and undergoes radioactive beta decay into a proton, electron, and antineutrino with a half-life of $\sim 14.7\text{ minutes}$.

---

## 13.2 The Modern Quantum Mechanical Model of the Atom

### Dual Nature of Electron & Heisenberg Uncertainty Principle
1. **De Broglie Wavelength of Electron**: $\lambda = \frac{h}{m v}$. Because electron mass is minute, an electron behaves simultaneously as a **particle and a 3-dimensional standing wave**!
2. **Heisenberg Uncertainty Principle (Werner Heisenberg, 1927)**:
   > It is physically impossible to measure simultaneously both the exact position ($x$) and the exact linear momentum ($p$) of a microscopic subatomic particle like an electron with arbitrary precision:
   $$\mathbf{\Delta x \cdot \Delta p \ge \frac{h}{4\pi}}$$
   *(This permanently demolished Niels Bohr's classical concept of circular orbits where electrons travel along precise geometric tracks like railway trains).*

### Orbit vs. Orbital: The Paradigm Shift
* **Orbit (Bohr Model)**: A well-defined, flat, two-dimensional circular planar path around the nucleus where an electron revolves (outdated classical concept).
* **Orbital (Schrödinger Wave Mechanics)**: A **three-dimensional region of space around the nucleus** where the probability of finding an electron is maximum (**$\ge 90\%$ probability density $|\psi|^2$**).

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ORBITAL GEOMETRIES                              │
├───────────────┬──────────────────────────┬─────────────────────────────┤
│ Orbital Type  │ Three-Dimensional Shape  │ Maximum Electron Capacity   │
├───────────────┼──────────────────────────┼─────────────────────────────┤
│ s-orbital     │ Spherically Symmetrical  │ 2 electrons (1 pair)        │
│ p-orbital     │ Dumbbell-shaped (p_x,y,z)│ 6 electrons (3 pairs)       │
│ d-orbital     │ Double Dumbbell-shaped   │ 10 electrons (5 pairs)      │
│ f-orbital     │ Complex Multi-lobed      │ 14 electrons (7 pairs)      │
└───────────────┴──────────────────────────┴─────────────────────────────┘
```

---

## 13.3 The Four Quantum Numbers: Complete Electron Address

Just as delivering a letter requires: *Country $\rightarrow$ City $\rightarrow$ Street $\rightarrow$ House Number*, specifying the exact quantum state and energy of any electron in an atom requires four quantum numbers:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        THE FOUR QUANTUM NUMBERS                        │
├─────────────────────┬──────────────────────────┬───────────────────────┤
│ Quantum Number      │ Allowed Numerical Values │ Physical Significance │
├─────────────────────┼──────────────────────────┼───────────────────────┤
│ Principal (n)       │ n = 1, 2, 3, 4, ...      │ Main Shell / Energy   │
│                     │ (K, L, M, N, ...)        │ Level & Size of orbit │
│ Azimuthal /         │ l = 0 to (n - 1)         │ Subshell & 3D Shape   │
│ Orbital (l)         │ l=0(s), 1(p), 2(d), 3(f) │ of the orbital        │
│ Magnetic (m_l)      │ m_l = -l to +l           │ Spatial Orientation of│
│                     │ (Total = 2l + 1 values)  │ orbital in space      │
│ Electron Spin (m_s) │ m_s = +1/2 (↑) or        │ Intrinsic spin angular│
│                     │       -1/2 (↓)           │ momentum of electron  │
└─────────────────────┴──────────────────────────┴───────────────────────┘
```

### Electron Capacity Equations
* Maximum number of **electrons in a Main Shell ($n$)**: $\mathbf{2n^2}$ ($K=2, L=8, M=18, N=32$).
* Number of **orbitals in a Main Shell ($n$)**: $\mathbf{n^2}$ ($K=1, L=4, M=9, N=16$).
* Maximum number of **electrons in a Subshell ($l$)**: $\mathbf{2(2l + 1)}$ ($s=2, p=6, d=10, f=14$).

---

## 13.4 The Three Governing Rules of Electronic Configuration

```
                    1s
                   /
                 2s  2p
                /   /
              3s  3p  3d
             /   /   /
           4s  4p  4d  4f
          /   /   /
        5s  5p  5d
```

### 1. The Aufbau Principle (*German: "Building Up"*)
In the ground state of an atom, electrons occupy orbitals in the order of **increasing orbital energy** (lowest energy orbital filled first).
* **The $(n + l)$ Rule**:
  1. An orbital with a **lower value of $(n + l)$** has lower energy and is filled first.
     - *Example*: Why $4s$ is filled before $3d$:  
       For $4s$: $n = 4, l = 0 \implies n + l = \mathbf{4}$.  
       For $3d$: $n = 3, l = 2 \implies n + l = \mathbf{5}$.  
       Because $4 < 5$, **the $4s$ orbital is filled BEFORE the $3d$ orbital**!
  2. If two orbitals have identical $(n + l)$ values, the orbital with the **lower value of $n$** has lower energy and fills first (e.g., $3d$ fills before $4p$, both having $n+l=5$, because $3 < 4$).

### 2. Pauli's Exclusion Principle (Wolfgang Pauli, 1925)
> No two electrons in the same atom can possess the exact same set of all four quantum numbers ($n, l, m_l, m_s$).
* **Consequence**: An individual orbital can hold a **maximum of two electrons**, and they MUST have **opposite (anti-parallel) spins** ($\uparrow\downarrow$).

### 3. Hund's Rule of Maximum Multiplicity
> In a subshell of degenerate orbitals (orbitals with identical energy, like $p_x, p_y, p_z$), **electron pairing cannot begin until each orbital has received one electron with parallel spin** (singly occupied first).
* *Analogy*: Passengers boarding a public bus fill empty window seats one by one before pairing up to share rows!

### Exceptional Electronic Configurations: Chromium & Copper
A completely half-filled ($d^5$) or completely filled ($d^{10}$) subshell possesses **extraordinary thermodynamic stability** due to symmetrical charge distribution and maximum exchange energy:
* **Chromium ($Z = 24$)**:
  - Expected: $[Ar] 3d^4 4s^2$
  - Actual Stable Configuration: $\mathbf{[Ar] 3d^5 4s^1}$ (One electron shifts from $4s$ to $3d$ to achieve a half-filled $d^5$ subshell).
* **Copper ($Z = 29$)**:
  - Expected: $[Ar] 3d^9 4s^2$
  - Actual Stable Configuration: $\mathbf{[Ar] 3d^{10} 4s^1}$ (One electron shifts from $4s$ to $3d$ to achieve a fully filled $d^{10}$ subshell).

---

## 13.5 Atomic Species: Isotopes, Isobars, Isotones & Isoelectronic Systems

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ATOMIC SPECIES MATRIX                           │
├───────────────┬──────────────────────────┬─────────────────────────────┤
│ Species Type  │ Defining Characteristic  │ High-Yield Examples         │
├───────────────┼──────────────────────────┼─────────────────────────────┤
│ Isotopes      │ SAME Atomic Number (Z),  │ Protium (¹₁H),              │
│               │ DIFFERENT Mass Number (A)│ Deuterium (²₁H),            │
│               │ (Same chemical properties│ Tritium (³₁H - Radioactive!)│
│               │ due to same valence e⁻)  │ Carbon: ¹²₆C, ¹⁴₆C          │
├───────────────┼──────────────────────────┼─────────────────────────────┤
│ Isobars       │ SAME Mass Number (A),    │ ⁴⁰₁₈Ar, ⁴⁰₁₉K, ⁴⁰₂₀Ca       │
│               │ DIFFERENT Atomic Num (Z) │ (All have mass 40 u;        │
│               │ (Different chemistry!)   │ completely different atoms!)│
├───────────────┼──────────────────────────┼─────────────────────────────┤
│ Isotones      │ SAME Number of Neutrons  │ ¹⁴₆C (14 - 6 = 8 neutrons)  │
│               │ (A - Z = Constant)       │ ¹⁵₇N (15 - 7 = 8 neutrons)  │
│               │                          │ ¹⁶₈O (16 - 8 = 8 neutrons)  │
├───────────────┼──────────────────────────┼─────────────────────────────┤
│ Isoelectronic │ SAME Number of Total     │ N³⁻, O²⁻, F⁻, Ne, Na⁺, Mg²⁺,│
│ Species       │ Orbital Electrons        │ Al³⁺ (All have 10 electrons)│
└───────────────┴──────────────────────────┴─────────────────────────────┘
```

> [!TIP]
> **The Hydrogen Isotopes & Heavy Water ($\text{D}_2\text{O}$)**:  
> 1. **Protium ($^1_1H$)**: Ordinary hydrogen ($99.98\%$ natural abundance). Possesses 1 proton and **ZERO neutrons** (The *only* atom in the periodic table without neutrons!).
> 2. **Deuterium ($^2_1H$ or $D$)**: "Heavy Hydrogen" (1 proton + 1 neutron). Forms **Heavy Water ($\text{D}_2\text{O}$)**, used as a neutron moderator and coolant in nuclear reactors. Density of $\text{D}_2\text{O}$ ($1.11\text{ g/cm}^3$) is greater than ordinary water; an ice cube of $\text{D}_2\text{O}$ **sinks in regular water**!
> 3. **Tritium ($^3_1H$ or $T$)**: 1 proton + 2 neutrons. **Radioactive** (emits low-energy $\beta$-particles, half-life $\approx 12.3\text{ years}$). Used in glowing watch dials and thermonuclear fusion bombs.

---

## 13.6 Industrial, Archaeological & Medical Applications of Radioisotopes

| Radioisotope | Symbol & Half-Life | Radiation Emitted | Targeted Diagnostic / Industrial Application |
| :--- | :--- | :--- | :--- |
| **Carbon-14** | $^{14}_6C$ ($T_{1/2} = 5,730\text{ yr}$) | Soft $\beta^-$ | **Radiocarbon Dating**: Determining age of ancient fossils, wood, mummies, and archaeological artifacts up to 50,000 years. |
| **Uranium-238** | $^{238}_{92}U$ ($T_{1/2} = 4.5\text{ Gyr}$) | $\alpha, \beta, \gamma$ | **Geological Rock Dating**: Measuring age of the Earth ($\sim 4.5\text{ billion years}$) and ancient meteorites via $^{238}U \rightarrow ^{206}Pb$ ratio. |
| **Cobalt-60** | $^{60}_{27}Co$ ($T_{1/2} = 5.27\text{ yr}$) | High-energy $\gamma$ | **Oncology & Radiotherapy**: Deep beam radiation destroying malignant tumors and cancer cells; sterilizing disposable surgical tools. |
| **Iodine-131** | $^{131}_{53}I$ ($T_{1/2} = 8\text{ days}$) | $\beta^-$ and $\gamma$ | **Endocrinology**: Diagnosis, scanning, and targeted destruction of **thyroid gland tumors and hyperthyroidism**. |
| **Phosphorus-32**| $^{32}_{15}P$ ($T_{1/2} = 14.3\text{ days}$)| $\beta^-$ | **Hematology & Agriculture**: Treatment of bone marrow disorders (polycythemia vera) and tracing root fertilizer uptake in crops. |
| **Sodium-24** | $^{24}_{11}Na$ ($T_{1/2} = 15\text{ hours}$)| $\beta^-$ and $\gamma$ | **Cardiovascular Medicine**: Tracing blood flow velocity to detect arterial blood clots, circulation blockages, and vascular leaks. |
| **Technetium-99m**| $^{99m}_{43}Tc$ ($T_{1/2} = 6\text{ hr}$) | Pure $\gamma$ | **Nuclear Medical Imaging**: Most widely used diagnostic radiotracer for brain, bone, and heart scans worldwide. |
| **Americium-241** | $^{241}_{95}Am$ ($T_{1/2} = 432\text{ yr}$)| $\alpha$ | **Public Safety**: Household ionization smoke detectors (ionizes chamber air; smoke disrupts current, triggering alarm). |

---

## 13.7 Master Chapter Distinction Matrix

| Feature | Orbit (Bohr) | Orbital (Quantum Mechanics) |
| :--- | :--- | :--- |
| **Definition** | Well-defined 2D circular path around nucleus. | 3D region of space where electron probability $\ge 90\%$. |
| **Nature** | Planar, deterministic geometric path. | Three-dimensional probabilistic electron cloud. |
| **Uncertainty Principle**| Contradicts Heisenberg Uncertainty Principle. | Completely consistent with Heisenberg Principle. |
| **Max Capacity** | $2n^2$ electrons in $n$-th shell. | Maximum **2 electrons with opposite spins** ($\uparrow\downarrow$). |
| **Shapes** | Circular or elliptical only. | Spherically symmetrical ($s$), Dumbbell ($p$), Double dumbbell ($d$). |

---

## 13.8 High-Yield Diagnostic Examination Traps

1. **The Neutronless Element Trap**:
   - *Trap*: "All naturally occurring atoms contain protons, neutrons, and electrons."
   - *Correction*: **False! Ordinary Hydrogen (Protium, $^1_1H$) has ZERO neutrons!** It consists solely of 1 proton and 1 electron.
2. **Heavy Water Ice Cube Floatation**:
   - *Trap*: "An ice cube made of heavy water ($\text{D}_2\text{O}$) floats in ordinary liquid water like regular ice."
   - *Correction*: **It SINKS!** Heavy water has higher density ($\rho = 1.11\text{ g/cm}^3$); heavy ice density is $\sim 1.02\text{ g/cm}^3$, which is denser than ordinary liquid water ($1.00\text{ g/cm}^3$).
3. **Chromium and Copper Aufbau Configuration**:
   - *Trap*: "The ground state electronic configuration of Chromium ($Z=24$) is $[Ar] 3d^4 4s^2$."
   - *Correction*: **False!** It is $\mathbf{[Ar] 3d^5 4s^1}$ because a half-filled $d^5$ subshell possesses superior thermodynamic exchange stability.
4. **Isotopes Chemical Identity**:
   - *Trap*: "Isotopes have different chemical properties because their atomic masses differ."
   - *Correction*: Chemical properties depend **strictly on valence electrons (Atomic Number $Z$)**, NOT mass number ($A$). Hence, **all isotopes of an element exhibit identical chemical reactions** (though physical properties like boiling point differ slightly).
