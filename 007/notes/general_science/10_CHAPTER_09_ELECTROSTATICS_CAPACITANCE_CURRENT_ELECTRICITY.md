<div style="page-break-before: always;"></div>

# CHAPTER 09: ELECTROSTATICS, CAPACITANCE & CURRENT ELECTRICITY

**Canonical Sources Unified**:
* NCERT Class 10 Science (Chapter 12: Electricity — Current, Potential, Ohm's Law, Resistance, Heating Effect, Power)
* NCERT Class 12 Physics (Part 1, Chapter 1: Electric Charges and Fields, Chapter 2: Electrostatic Potential and Capacitance, Chapter 3: Current Electricity)
* Halliday, Resnick & Walker, *Fundamentals of Physics* (Electromagnetism Core)
* Standard Competitive Examination Compendiums (UPSC CSE, State PSCs, SSC CGL)

---

## 9.1 Electrostatics: Charge, Coulomb's Law & Electric Fields

### Electric Charge: The Fundamental Property
Electric charge is an intrinsic scalar property of elementary particles that gives rise to electric and magnetic interactions.
* **Two Kinds of Charges**: Named by Benjamin Franklin: **Positive** (vitreous, e.g., glass rubbed with silk) and **Negative** (resinous, e.g., ebonite/amber rubbed with wool/fur).
* **Fundamental Law of Electrostatics**: Like charges **repel** each other; unlike charges **attract** each other.
* **SI Unit of Charge**: **Coulomb ($\text{C}$)** ($1\text{ C} = 1\text{ Ampere} \times 1\text{ Second}$, $[M^0 L^0 T^1 I^1]$).
* **CGS Unit**: **Electrostatic Unit (esu) / Statcoulomb**:
  $$1\text{ Coulomb} = 3 \times 10^9\text{ esu} = \frac{1}{10}\text{ emu (ab-coulomb)}$$

### The Three Invariant Properties of Electric Charge
1. **Additivity of Charges**: Total charge of an isolated system is the algebraic sum of individual charges ($Q_{\text{net}} = q_1 + q_2 + q_3 + \dots$).
2. **Conservation of Charge**: The total net electric charge of an electrically isolated system remains strictly constant over time. Charge can neither be created nor destroyed, only transferred (e.g., in pair production $\gamma \rightarrow e^- + e^+$, net charge remains zero).
3. **Quantization of Charge**: Electric charge exists only in discrete integral multiples of the **elementary charge ($e$)**:
   $$\mathbf{q = \pm n e} \quad (n = 1, 2, 3, \dots)$$
   Where $e$ is the magnitude of charge on a single electron/proton:
   $$e = 1.602176634 \times 10^{-19}\text{ Coulombs}$$

> [!IMPORTANT]
> **How Many Electrons Constitute 1 Coulomb of Charge?**  
> $$n = \frac{q}{e} = \frac{1\text{ C}}{1.602 \times 10^{-19}\text{ C}} = \mathbf{6.25 \times 10^{18}\text{ Electrons}}$$

### Coulomb's Inverse Square Law
The electrostatic force of attraction or repulsion between two stationary point charges ($q_1$ and $q_2$) separated by distance $r$ in vacuum:

$$\mathbf{F = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r^2}}$$

```
                 q₁                                    q₂
              (  ●  ) ◄────── Force F ──────► (  ●  )
                 ◄───────────────── r ─────────────────►
```

* **Permittivity of Free Space ($\varepsilon_0$)**: $\varepsilon_0 \approx 8.854 \times 10^{-12}\text{ C}^2/(\text{N}\cdot\text{m}^2)$.
* **Electrostatic Constant ($k$)**:
  $$k = \frac{1}{4\pi\varepsilon_0} \approx \mathbf{9 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2}$$
* **Dielectric Constant (Relative Permittivity $K$ or $\varepsilon_r$)**:
  When charges are immersed in an insulating medium of dielectric constant $K$ (for water, $K \approx 81$):
  $$F_{\text{medium}} = \frac{F_{\text{vacuum}}}{K}$$
  *(Placing charges in water reduces their electrostatic attraction by 81 times! This explains why water is an exceptional solvent for ionic salts like $NaCl$).*

### Electrostatic Induction & Lightning Protection
* **Charging by Friction**: Rubbing transfers outer valence electrons (glass loses electrons to silk $\rightarrow$ glass becomes $+$, silk becomes $-$).
* **Charging by Induction**: Bringing a charged rod near an uncharged neutral metal sphere induces opposite charges on the near face without physical contact.
* **Atmospheric Lightning & Lightning Conductors (Benjamin Franklin)**:  
  Violent friction inside storm clouds creates immense charge separation (positive top, negative base). When potential exceeds dielectric breakdown of air ($\sim 3 \times 10^6\text{ V/m}$), an explosive discharge (**Lightning**) strikes tall trees/buildings. A **Lightning Conductor** (thick copper rod with sharp spikes mounted on top of a building and grounded deep in moist soil) safely bleeds accumulated atmospheric charge harmlessly into the earth.

---

## 9.2 Electric Potential, Potential Difference & Capacitance

### Electric Potential ($V$) & Potential Difference ($\Delta V$)
* **Electric Potential ($V$)**: The mechanical work done per unit positive test charge in bringing it from infinity to that point against electrostatic forces:
  $$V = \frac{W}{q} \quad [\text{SI Unit: } \mathbf{\text{Volt (V)}} = 1\text{ Joule/Coulomb}, \text{ Dimensions: } [M^1 L^2 T^{-3} I^{-1}]]$$
* **Potential Difference ($V_A - V_B$)**: Work done per unit charge in moving it between two points in an electric field.  
  *Intuition*: Just as water flows spontaneously from a higher gravitational level to a lower level, **positive electric charge flows spontaneously from higher electric potential to lower potential**.

### Capacitance & Capacitors (Condensers)
A **Capacitor** is a device engineered to store electrostatic potential energy in an electric field:

$$Q = C V \implies \mathbf{C = \frac{Q}{V}} \quad [\text{SI Unit: } \mathbf{\text{Farad (F)}} = \text{Coulomb/Volt}]$$

* **Parallel Plate Capacitor Formula**:
  $$C = \frac{\varepsilon_0 A}{d}$$
  (where $A$ is plate area, $d$ is separation distance). Inserting a dielectric slab of constant $K$ multiplies capacitance by $K$ ($C' = K C$).
* **Electrostatic Energy Stored in a Capacitor**:
  $$U = \frac{1}{2} C V^2 = \frac{Q^2}{2C} = \frac{1}{2} Q V$$
* **Everyday Applications of Capacitors**:
  - Ceiling Fans & Motors: A starter capacitor provides the initial $90^\circ$ phase shift and torque necessary to spin the stationary motor.
  - Camera Xenon Flash: Stores energy slowly from a 3V battery and dumps it in milliseconds as a blinding burst of light.
  - Computer Keyboard Keys: Key presses alter plate distance $d$, changing capacitance $C$ to register keystrokes.

---

## 9.3 Current Electricity: Drift Velocity & Ohm's Law

### Electric Current ($I$)
The time rate of flow of electric charge across a cross-section of a conductor:

$$I = \frac{dq}{dt} = \frac{n e}{t} \quad [\text{SI Unit: } \mathbf{\text{Ampere (A)}} = \text{Coulomb/second}]$$

* **Conventional Current vs. Electronic Current**:
  - **Electronic Current**: Real physical movement of free electrons from the **negative terminal to the positive terminal**.
  - **Conventional Current**: Direction in which positive charges would move, defined from **positive terminal to negative terminal** (opposite to electron drift).
* **Drift Velocity ($v_d$)**: Free electrons in a metal have random thermal speeds ($\sim 10^5\text{ m/s}$), but in the presence of an electric field, they slowly drift with an imperceptible net speed:
  $$v_d \approx \mathbf{10^{-4}\text{ m/s} = 0.1\text{ mm/s}}$$
  *Why do lights turn on instantly when a switch is flipped?*  
  Although individual electrons drift at turtle speed ($0.1\text{ mm/s}$), the **electromagnetic field establishes through the entire circuit wire at nearly the speed of light ($c \approx 3 \times 10^8\text{ m/s}$)**, setting all free electrons into coordinated motion simultaneously!

---

### Ohm's Law: The Fundamental Circuit Relation
Formulated by Georg Simon Ohm in 1827:
> **Ohm's Law**: The electric current flowing through a metallic conductor is directly proportional to the potential difference applied across its terminals, provided its temperature, mechanical strain, and physical conditions remain strictly constant:

$$V \propto I \implies \mathbf{V = I R}$$

```
                Potential Difference (V)
                          │         / (Slope = R = V / I)
                          │        /
                          │       /
                          │      /
                          │     /
                          └────/─────────────► Current (I)
                           Ohmic Conductor (Straight Line V-I Graph)
```

* **Ohmic Conductors**: Strictly obey Ohm's law; $V$-$I$ characteristic is a straight line passing through the origin (e.g., copper, silver, aluminum, nichrome wire).
* **Non-Ohmic Conductors**: Violate Ohm's law; $V$-$I$ curve is non-linear (e.g., semiconductor diodes, transistors, vacuum tubes, LED, electrolytes).

---

## 9.4 Resistance, Resistivity & Temperature Dynamics

### Electrical Resistance ($R$)
The opposition offered by a conductor to the flow of electric current through it, caused by frequent collisions of drifting electrons with vibrating metal ions:

$$R = \frac{V}{I} \quad [\text{SI Unit: } \mathbf{\text{Ohm }} (\Omega) = \text{Volt/Ampere}, \text{ Dimensions: } [M^1 L^2 T^{-3} I^{-2}]]$$

### Factors Affecting Resistance: The Resistivity Equation
For any uniform conductor:
1. $R \propto l$ (Directly proportional to length $l$).
2. $R \propto \frac{1}{A}$ (Inversely proportional to cross-sectional area $A = \pi r^2$).

$$\mathbf{R = \rho \frac{l}{A}}$$

Where $\rho$ is the **Specific Resistance or Electrical Resistivity** of the material:

$$\rho = \frac{R A}{l} \quad [\text{SI Unit: } \mathbf{\Omega\cdot\text{m}}]$$

> [!TIP]
> **The Wire Stretching / Doubling Examination Trap**:  
> If a wire of resistance $R$ is **stretched** so that its length doubles ($l' = 2l$):  
> Because total metal volume remains constant ($V = A \times l = \text{constant}$), doubling the length halves the cross-sectional area ($A' = A/2$).
> $$R' = \rho \frac{l'}{A'} = \rho \frac{2l}{A/2} = 4 \left(\rho \frac{l}{A}\right) = \mathbf{4 R}$$
> *General Rule*: If a wire is stretched to $n$ times its initial length, its new resistance becomes $\mathbf{n^2 R}$!

### Temperature Dependence of Resistivity

$$\rho_T = \rho_0 (1 + \alpha \Delta T)$$

(where $\alpha$ is the Temperature Coefficient of Resistance).

```
┌────────────────────────────────────────────────────────────────────────┐
│               TEMPERATURE COEFFICIENT OF RESISTANCE (α)                │
├─────────────────────┬──────────────────────────┬───────────────────────┤
│ Conductors (Metals) │ Semiconductors           │ Superconductors       │
├─────────────────────┼──────────────────────────┼───────────────────────┤
│ α is POSITIVE (+)   │ α is NEGATIVE (-)        │ Resistance drops      │
│ Temp ↑ ===> R ↑     │ Temp ↑ ===> R ↓          │ abruptly to strictly  │
│ Increased thermal   │ Covalent bonds rupture,  │ ZERO at Critical      │
│ lattice vibrations  │ liberating massive free  │ Temperature (T_c)     │
│ impede electrons    │ electron-hole pairs      │ Ex: Mercury at 4.2 K  │
│ Ex: Copper, Silver  │ Ex: Silicon, Germanium   │ (Heike Kamerlingh)    │
└─────────────────────┴──────────────────────────┴───────────────────────┘
```

* **Superconductivity**: Discovered in 1911 by Heike Kamerlingh Onnes. Below a critical temperature ($T_c$), electrical resistance of certain materials vanishes completely ($R = 0$). An electric current induced in a closed superconducting loop can flow indefinitely for years with zero power loss! Used in MRI machines and Maglev levitating trains.

---

## 9.5 Series vs. Parallel Circuits & Domestic Wiring

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CIRCUIT COMBINATION MATRIX                      │
├───────────────────────────────────┬────────────────────────────────────┤
│ Series Combination                │ Parallel Combination               │
├───────────────────────────────────┼────────────────────────────────────┤
│ ──[ R₁ ]──[ R₂ ]──[ R₃ ]──        │       ┌──[ R₁ ]──┐                 │
│                                   │    ───┼──[ R₂ ]──┼───              │
│ Current is IDENTICAL through each │       └──[ R₃ ]──┘                 │
│ Voltage divides: V = V₁ + V₂ + V₃ │ Potential Diff. is IDENTICAL across│
│ Equivalent Resistance:            │ Current divides: I = I₁ + I₂ + I₃  │
│ R_eq = R₁ + R₂ + R₃               │ Equivalent Resistance:             │
│ R_eq is GREATER than the largest  │ 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃        │
│ individual resistor               │ R_eq is SMALLER than the smallest  │
│ If one bulb fuses, ENTIRE circuit │ individual resistor                │
│ breaks down and shuts off!        │ If one appliance is switched off,  │
│ Ex: Decorative festival lights    │ others function independently!     │
│                                   │ Ex: Household Domestic Wiring      │
└───────────────────────────────────┴────────────────────────────────────┘
```

### Why Domestic Household Circuits are ALWAYS Wired in PARALLEL
1. **Identical Operating Voltage**: Every household socket receives the standard full supply potential (**$220\text{ V AC}$ in India**), allowing appliances to function at peak rated capacity.
2. **Independent Operation**: Each electrical appliance has its own dedicated switch. Turning off the refrigerator does not cut off power to ceiling fans or lights.
3. **Fault Isolation**: If one appliance burns out or short-circuits, all other household circuits continue operating normally.
4. **Minimum Total Resistance**: Parallel combination minimizes the equivalent circuit resistance ($R_{\text{eq}}$), minimizing energy dissipation in supply cables.

---

## 9.6 Joule's Law of Heating, Electric Power & Safety Systems

### Joule's Heating Law
When an electric current $I$ passes through a conductor of resistance $R$ for time $t$, electrical potential energy is converted irreversibly into thermal heat ($H$):

$$\mathbf{H = I^2 R t} = V I t = \frac{V^2}{R} t \quad [\text{Joules}]$$

* **Applications of Joule Heating**:
  - **Electric Heaters, Geysers, Toasters & Irons**: Heating element is made of **Nichrome** (an alloy of $80\%$ Nickel, $20\%$ Chromium).
    - *Why Nichrome is used*: Has exceptionally **high electrical resistivity** ($\rho$) and a very **high melting point ($\sim 1400^\circ\text{C}$)**, and does not oxidize (burn) even when glowing red-hot!
  - **Incandescent Electric Bulb**: Filament is made of **Tungsten** (Wolfram, $W$).
    - *Why Tungsten is used*: Possesses the **highest melting point of all metals ($\sim 3422^\circ\text{C}$)** and high resistivity. Can glow white-hot at $2500^\circ\text{C}$ emitting light.
    - *Bulb Gas Filling*: Filled with chemically inactive, inert gases (**Argon and Nitrogen**) to prevent oxidation and sublimation of the boiling tungsten filament.

### Electric Power ($P$) & Bulb Brightness Dynamics

$$P = \frac{W}{t} = V I = I^2 R = \frac{V^2}{R} \quad [\text{Watts}]$$

> [!WARNING]
> **The Bulb Brightness Examination Paradox (Series vs. Parallel)**:  
> Two light bulbs marked **$25\text{ W}, 220\text{ V}$** and **$100\text{ W}, 220\text{ V}$**:  
> Since $R = \frac{V^2}{P}$:
> $$R_{25\text{W}} = \frac{220^2}{25} = 1936\ \Omega \quad \text{and} \quad R_{100\text{W}} = \frac{220^2}{100} = 484\ \Omega \implies \mathbf{R_{25\text{W}} > R_{100\text{W}}}$$
> *(The lower wattage bulb has 4 times HIGHER electrical resistance!)*
>
> 1. **Connected in PARALLEL (Standard Household Connection at 220V)**:  
>    Voltage is identical. $P_{\text{consumed}} = \frac{V^2}{R}$. Lower resistance consumes more power:  
>    **The 100-Watt bulb glows vastly brighter!**
> 2. **Connected in SERIES across 220V**:  
>    Current $I$ is identical through both. $P_{\text{consumed}} = I^2 R$. Higher resistance consumes more power:  
>    **The 25-Watt bulb glows vastly brighter than the 100-Watt bulb!**

---

### Electrical Safety Infrastructure: Fuse, MCB & Earthing

```
        Live Wire (Brown / Red: High Potential 220V) ──► [ FUSE / MCB ] ──► Appliance
        Neutral Wire (Blue / Black: Zero Potential 0V) ◄────────────────────┘    │
        Earth Wire (Green / Yellow: Grounded to Soil) ◄── Metal Casing ──────────┘
```

1. **The Electric Fuse**:
   - Operating Principle: Works on the **heating effect of electric current (Joule's Law)**.
   - Material: Made of an alloy of **Tin ($63\%$) and Lead ($37\%$)** (Solder metal).
   - Essential Properties: Possesses **high resistance** and a **strictly LOW melting point**.
   - Placement: ALWAYS connected in **SERIES with the LIVE WIRE**, so that when current exceeds safe limits (due to overloading or short-circuit), Joule heat ($I^2Rt$) instantly melts the fuse wire, breaking the live circuit before fire erupts.
2. **Miniature Circuit Breakers (MCB)**:
   - Modern replacement for fuses. Operates on electromagnetic deflection (solenoid trip mechanism) or bimetallic heat deflection to automatically trip off in milliseconds during over-current. Easily reset by flipping a switch without replacing wire.
3. **Earthing (Grounding)**:
   - Thick green/yellow insulated wire connecting the outer metallic body of heavy appliances (refrigerators, washing machines, microwaves) to a copper plate buried deep in moist earth.
   - Function: If internal live wire insulation frays and touches the metal casing, fault current flows instantly into the earth via the low-resistance earth wire rather than through the human body, preventing fatal electric shocks.

---

## 9.7 Master Chapter Distinction Matrix

| Feature | Conductor (Metal) | Semiconductor | Superconductor |
| :--- | :--- | :--- | :--- |
| **Resistivity ($\rho$)** | Low ($10^{-8}\text{ to } 10^{-6}\ \Omega\cdot\text{m}$). | Moderate ($10^{-5}\text{ to } 10^3\ \Omega\cdot\text{m}$). | **Strictly Zero ($0\ \Omega\cdot\text{m}$)** below $T_c$. |
| **Charge Carriers** | Free electrons. | Electrons and positive holes. | Cooper electron pairs. |
| **Temp Effect on $R$** | **$R$ INCREASES with Temp** ($\alpha > 0$). | **$R$ DECREASES with Temp** ($\alpha < 0$). | Zero resistance at sub-critical temps. |
| **Everyday Examples** | Copper, Aluminum, Silver. | Silicon, Germanium, GaAs. | Mercury below $4.2\text{ K}$, Lead below $7.2\text{ K}$. |

---

## 9.8 High-Yield Diagnostic Examination Traps

1. **Wire Stretching Resistance Trap**:
   - *Trap*: "A wire of resistance $10\ \Omega$ is stretched to double its length. Its new resistance is $20\ \Omega$."
   - *Correction*: **False!** Volume is conserved, so stretching to double length halves the cross-sectional area. New resistance is $n^2 R = 2^2 \times 10 = \mathbf{40\ \Omega}$!
2. **The Fuse Wire Characteristics Trap**:
   - *Trap*: "An electric fuse wire should have low resistance and high melting point."
   - *Correction*: **Deadly Mistake!** A fuse wire must have **high resistance** (to generate heat quickly via $I^2R$) and a **LOW melting point** (to melt easily and break the circuit).
3. **Series Bulb Brightness Paradox**:
   - *Trap*: "A 100W bulb always glows brighter than a 40W bulb."
   - *Correction*: In parallel, yes. But in a **series circuit**, current is identical, so the bulb with higher resistance ($R \propto 1/P \implies 40\text{W}$) dissipates more power ($I^2R$); hence the **40W bulb glows brighter**!
4. **Current Scalar Paradox**:
   - *Trap*: "Electric current has direction, so it must follow vector addition."
   - *Correction*: Electric current is a **scalar**. Currents add algebraically at junctions according to Kirchhoff's Current Law, with zero dependence on the geometric angles between wires.
