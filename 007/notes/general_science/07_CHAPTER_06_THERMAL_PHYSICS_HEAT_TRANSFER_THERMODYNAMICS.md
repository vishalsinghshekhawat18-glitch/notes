<div style="page-break-before: always;"></div>

# CHAPTER 06: THERMAL PHYSICS, HEAT TRANSFER & LAWS OF THERMODYNAMICS

**Canonical Sources Unified**:
* NCERT Class 7 Science (Chapter 4: Heat — Temperature, Thermometers, Modes of Transfer)
* NCERT Class 11 Physics (Part 2, Chapter 11: Thermal Properties of Matter & Chapter 12: Thermodynamics)
* Halliday, Resnick & Walker, *Fundamentals of Physics* (Thermodynamics Core)
* Standard Competitive Examination Compendiums (UPSC CSE, State PSCs, SSC CGL)

---

## 6.1 Temperature, Heat & Thermometric Architecture

### Heat vs. Temperature: The Fundamental Distinction
* **Heat ($Q$)**: The total **internal thermal kinetic energy** transferred between two bodies or systems solely by virtue of a **temperature difference**. It is energy in transit ($\text{SI Unit: Joule, CGS: Calorie}$, $[M^1 L^2 T^{-2}]$).
  $$\mathbf{1\text{ Calorie} = 4.186\text{ Joules} \approx 4.2\text{ J}} \quad (\text{Mechanical Equivalent of Heat } J)$$
* **Temperature ($T$)**: The macroscopic measure of the **average translational kinetic energy** of the constituent molecules of a substance. It determines the direction of heat flow: heat naturally and spontaneously flows from a body at higher temperature to a body at lower temperature.

### Thermometric Scales & Inter-Conversion Formula
Any physical property that changes linearly with temperature (volume of liquid, electrical resistance, pressure of gas) can serve as a **thermometric property**.

```
    Freezing Point of Water                    Boiling Point of Water
              0°C ───────────────────────────────────► 100°C       (Celsius: 100 Divisions)
             32°F ───────────────────────────────────► 212°F       (Fahrenheit: 180 Divisions)
           273.15 K ─────────────────────────────────► 373.15 K    (Kelvin: 100 Divisions)
```

> **The Master Thermometric Conversion Equation**:
> $$\frac{C - 0}{100} = \frac{F - 32}{180} = \frac{K - 273.15}{100} = \frac{R - 0}{80}$$
> Simplifying:
> $$\mathbf{\frac{C}{5} = \frac{F - 32}{9} = \frac{K - 273.15}{5}}$$

> [!IMPORTANT]
> **The $-40^\circ$ Coincidence Point**:  
> At what temperature do the Celsius and Fahrenheit scales register the exact same numerical reading?  
> Let $C = F = x$:
> $$\frac{x}{5} = \frac{x - 32}{9} \implies 9x = 5x - 160 \implies 4x = -160 \implies \mathbf{x = -40^\circ}$$
> Hence: **$-40^\circ\text{C} = -40^\circ\text{F}$**.

### Absolute Zero & The Kelvin Scale
* **Absolute Zero ($0\text{ K} = -273.15^\circ\text{C}$)**: The lowest theoretically achievable temperature in the universe, at which the translational kinetic energy of molecules becomes zero (molecular motion ceases entirely).
* **The Kelvin Scale**: The official SI thermodynamic scale. It has **no negative temperatures** (starts at $0\text{ K}$). Temperatures on the Kelvin scale are written simply as $\text{K}$ (never with a degree symbol $^\circ$).
* **Triple Point of Water**: The unique thermodynamic state where pure water, ice, and water vapor coexist in stable thermodynamic equilibrium:
  $$T_{\text{triple}} = \mathbf{273.16\text{ K} = 0.01^\circ\text{C}} \quad \text{at a partial pressure of } 611.65\text{ Pa (4.58 mm of Hg)}$$

### Diagnostic Thermometer Types
1. **Clinical / Medical Thermometer**:
   - Liquid: Mercury.
   - Range: $35^\circ\text{C}$ to $42^\circ\text{C}$ ($95^\circ\text{F}$ to $108^\circ\text{F}$); Normal human body temperature is **$37.0^\circ\text{C}$ ($98.6^\circ\text{F}$)**.
   - Design Feature: Possesses a small **constriction (kink)** in the capillary just above the bulb that prevents the mercury thread from falling back when removed from the patient's mouth, allowing accurate reading.
2. **Laboratory Alcohol Thermometer**:
   - Liquid: Colored alcohol (freezing point $-114^\circ\text{C}$). Ideal for measuring extreme sub-zero Arctic temperatures where mercury freezes (mercury freezes at **$-39^\circ\text{C}$**).
3. **High-Temperature Pyrometers (Radiation Thermometers)**:
   - Measures temperatures above $800^\circ\text{C}$ (e.g., blast furnaces, the Sun at $6000\text{ K}$) without physical contact by detecting radiant electromagnetic energy, based on **Stefan's Law** ($E \propto T^4$).

---

## 6.2 Thermal Expansion & The Anomalous Expansion of Water

When matter absorbs heat, molecular vibrational amplitudes increase, causing expansion in volume.

### Linear, Superficial & Volumetric Expansion
For solids:
1. **Linear Expansion**: $\Delta L = L_0 \alpha \Delta T$ (where $\alpha$ is coefficient of linear expansion).
2. **Superficial (Area) Expansion**: $\Delta A = A_0 \beta \Delta T$ (where $\beta \approx 2\alpha$).
3. **Volumetric (Cubical) Expansion**: $\Delta V = V_0 \gamma \Delta T$ (where $\gamma \approx 3\alpha$).

$$\mathbf{\alpha : \beta : \gamma = 1 : 2 : 3}$$

* **Everyday Engineering Accommodations of Thermal Expansion**:
  - **Gaps Left in Railway Tracks**: Small expansion gaps are deliberately left between consecutive steel rail sections. During scorching summers, the rails expand longitudinally; without these gaps, rails buckle and cause catastrophic derailments.
  - **Sagging of Telephone & Telegraph Wires**: Overhead copper/aluminum power cables are strung with slight slack in summer so that when they contract in winter, tension does not snap the wires.
  - **Bimetallic Strips**: Made of two metals with different expansion coefficients (e.g., Brass and Iron, $\alpha_{\text{brass}} > \alpha_{\text{iron}}$) riveted together. When heated, the brass expands more, forcing the strip to bend into a curve. Used as automatic switches in thermostats, electric irons, fire alarms, and refrigerators.

---

### The Anomalous Expansion of Water (The Miracle of Life)

Almost all liquids contract continuously when cooled, increasing in density until solidification. Water exhibits a bizarre, life-sustaining exception between $0^\circ\text{C}$ and $4^\circ\text{C}$:

```
     Volume of Water                            Density of Water
        │                                          │
        │ \                                        │       Peak Density at 4°C
        │  \      Minimum Volume                   │           (1000 kg/m³)
        │   \       at 4°C                         │             /‾‾\
        │    \__/\                                 │            /    \
        │         \                                │           /      \
        └────────────────► Temp (°C)               └────────────────► Temp (°C)
          0°C   4°C                                  0°C     4°C
```

* **When Water is Heated from $0^\circ\text{C}$ to $4^\circ\text{C}$**:
  - Its **volume decreases** (it contracts!).
  - Its **density increases**, reaching its absolute maximum at **$4^\circ\text{C}$ ($1.000\text{ g/cm}^3 = 1000\text{ kg/m}^3$)**.
* **When Water is Heated Above $4^\circ\text{C}$**: It expands normally, and density decreases.
* **Why Ice Floats on Water**: As water freezes from $4^\circ\text{C}$ to $0^\circ\text{C}$, hydrogen bonds arrange water molecules into an open, hexagonal, cage-like crystal lattice. Hence, **ice expands by ~9% in volume**, making its density ($0.917\text{ g/cm}^3$) less than liquid water ($1.0\text{ g/cm}^3$).

> [!IMPORTANT]
> **How Aquatic Marine Life Survives in Frozen Lakes**:  
> During harsh sub-zero winter temperatures, the surface water of a lake cools to $4^\circ\text{C}$. Being the densest, this $4^\circ\text{C}$ water sinks to the lake bottom. The remaining surface water cools from $4^\circ\text{C}$ down to $0^\circ\text{C}$, expands, becomes lighter, and freezes into a floating layer of solid ice at the top surface.  
> Because ice is a **terrible conductor of heat**, it acts as a thermal insulating blanket, preventing heat loss from the deep water below. The deep bottom water remains in liquid state at **$+4^\circ\text{C}$**, allowing fish, plants, and aquatic organisms to thrive beneath the frozen surface!

* **Bursting of Water Pipes in Freezing Winters**: When underground water pipes freeze in winter, water converts into ice at $0^\circ\text{C}$, expanding in volume by ~9%. If confined without room to expand, the immense pressure bursts cast-iron and PVC pipes.

---

## 6.3 Specific Heat Capacity, Latent Heat & Phase Transitions

### Specific Heat Capacity ($c$ or $s$)
The quantity of heat required to raise the temperature of a unit mass ($1\text{ kg}$) of a substance by $1^\circ\text{C}$ ($1\text{ K}$):

$$Q = m c \Delta T \implies c = \frac{Q}{m \Delta T} \quad [\text{SI Unit: } \text{J}/(\text{kg}\cdot\text{K})]$$

* **Water's Astronomical Specific Heat Capacity**:  
  Water has an exceptionally high specific heat capacity ($c_{\text{water}} = 4186\text{ J}/(\text{kg}\cdot\text{K}) \approx 1\text{ cal}/(\text{g}\cdot^\circ\text{C})$), higher than almost all common liquids and metals (copper is $\sim 385$, iron is $\sim 450$).
* **Consequences of Water's High Specific Heat**:
  1. **Automobile Radiator Coolant**: Water can absorb massive quantities of engine heat with only a modest rise in its own temperature.
  2. **Hot Water Bottles for Fermentation**: Retains heat for hours without cooling down quickly.
  3. **Maritime Climate Regulation**: Oceans heat up slowly during summer and cool down slowly during winter, buffering coastal cities against extreme temperature swings (unlike inland deserts).

### Latent Heat: The Hidden Energy of Phase Change
When a substance changes its physical state (solid to liquid or liquid to gas), its **temperature remains completely constant** during the entire transition, even though heat is continuously supplied. This energy breaks intermolecular bonds and is called **Latent ("Hidden") Heat**:

$$Q = m L \implies L = \frac{Q}{m} \quad [\text{SI Unit: } \text{J/kg}]$$

```
                   100°C ────────────────────────► Boiling / Vaporization (L_v = 2.26 × 10⁶ J/kg)
                     ▲                             (Temperature strictly CONSTANT!)
                     │ Liquid Water Heating (Q = mcΔT)
            0°C ─────┴───────────────────────────► Melting / Fusion (L_f = 3.34 × 10⁵ J/kg)
              ▲                                    (Temperature strictly CONSTANT!)
              │ Solid Ice Heating (Q = mcΔT)
```

1. **Latent Heat of Fusion ($L_f$)**: Solid $\leftrightarrow$ Liquid transition (For ice: $L_f \approx 80\text{ cal/g} = 3.34 \times 10^5\text{ J/kg}$).
2. **Latent Heat of Vaporization ($L_v$)**: Liquid $\leftrightarrow$ Gas transition (For water: $L_v \approx 540\text{ cal/g} = 2.26 \times 10^6\text{ J/kg}$).

> [!WARNING]
> **Why Steam Burns are Far More Severe Than Boiling Water Burns**:  
> Both boiling water and steam exist at $100^\circ\text{C}$. However, every 1 gram of steam at $100^\circ\text{C}$ contains an extra **$540\text{ calories}$ ($2,260\text{ Joules}$)** of latent heat of vaporization compared to 1 gram of liquid water at $100^\circ\text{C}$. When steam hits human skin, it condenses back into liquid water, releasing this enormous reservoir of latent heat directly onto the flesh, producing devastating deep tissue scalds!

### Sublimation & Evaporative Cooling
* **Sublimation**: The direct phase change from solid to gas without passing through the intermediate liquid state:
  - *Substances*: Camphor, Ammonium Chloride ($NH_4Cl$), Naphthalene mothballs, Dry Ice (solid $CO_2$), Iodine crystals.
* **Cooling Caused by Evaporation**:
  - Evaporation is a **surface phenomenon** occurring at all temperatures below boiling point. High-energy molecules escape the surface, leaving behind molecules with lower average kinetic energy, lowering the temperature.
  - *Earthen Pitchers (Matka) in Summer*: Water seeps through microscopic clay pores and evaporates into the dry air, drawing latent heat from the remaining water inside, keeping it cool.
  - *Perspiration / Sweating*: Human sweat evaporates from the skin, absorbing latent heat and preventing core body hyperthermia.
  - *Acetone / Alcohol on Palm*: Feels ice-cold because of rapid volatile evaporation.

---

## 6.4 The Three Modes of Heat Transfer

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MODES OF HEAT TRANSFER                          │
├─────────────────────┬──────────────────────────┬───────────────────────┤
│ Conduction          │ Convection               │ Radiation             │
├─────────────────────┼──────────────────────────┼───────────────────────┤
│ Solid Medium        │ Fluid (Liquid/Gas)       │ Vacuum / No Medium    │
│ Vibration of atoms  │ Actual bulk bodily       │ Pure Electromagnetic  │
│ without bodily      │ migration of heated,     │ Waves (Infrared)      │
│ movement of matter  │ less-dense matter        │ Travels at speed of   │
│ Ex: Metal spoon in  │ Ex: Sea breeze, boiling  │ light (c = 3×10⁸ m/s) │
│ hot cup of tea      │ water in a kettle        │ Ex: Solar heat        │
└─────────────────────┴──────────────────────────┴───────────────────────┘
```

### 1. Thermal Conduction
Occurs primarily in solids via lattice vibrations (phonons) and free electrons.
* **Fourier's Law of Conduction**:
  $$\frac{\Delta Q}{\Delta t} = \frac{K A (T_1 - T_2)}{d}$$
  (where $K$ is **Thermal Conductivity**, SI: $\text{W}/(\text{m}\cdot\text{K})$).
  - *Best Conductors*: Silver ($K \approx 429$), Copper ($K \approx 401$), Aluminum.
  - *Thermal Insulators*: Wood, glass, plastic, stagnant dry air, asbestos.
* **Everyday Examples**:
  - Cooking pans are made of metals (copper, aluminum) with high conductivity, while handles are made of Bakelite or wood (thermal insulators).
  - Wearing two thin woolen sweaters provides more warmth than one thick sweater of equal weight because a layer of **trapped stagnant air** (an exceptional insulator) sits between the two sweaters.
  - An iron chair feels colder to the touch than a wooden chair on a winter morning because iron has a far higher thermal conductivity, rapidly conducting heat away from your hand, even though both chairs are at the exact same ambient room temperature.

### 2. Thermal Convection
Occurs exclusively in fluids (liquids and gases) via density differentials: heated fluid expands, becomes less dense, and floats upward, while colder, denser fluid sinks to replace it, establishing a **Convection Current**.
* **Sea Breeze & Land Breeze Dynamics**:
  - **Sea Breeze (Daytime)**: Land has a lower specific heat than seawater and heats up rapidly under the sun. Warm air over land rises, creating a localized low pressure; cool air from the sea blows inland to replace it.
  - **Land Breeze (Nighttime)**: Land cools down much faster than the ocean. The air over the ocean is now warmer and rises; cool air from the land blows seaward.
* **Why Freezing Units in Refrigerators are at the Top**: Cold air is denser and naturally sinks downward to chill vegetables, while warm air rises to the top to be refrigerated, setting up a continuous natural convection cycle.

### 3. Thermal Radiation
Transfer of heat via **electromagnetic waves (primarily Infrared Radiation)** requiring zero material medium (travels effortlessly across outer space vacuum).

#### The Fundamental Radiation Laws
1. **Stefan-Boltzmann Law**: Total radiant energy ($E$) emitted per unit surface area per second by a black body is directly proportional to the fourth power of its absolute temperature:
   $$E = \sigma T^4 \quad [\sigma = 5.67 \times 10^{-8}\text{ W}/(\text{m}^2\cdot\text{K}^4)]$$
2. **Wien's Displacement Law**: The wavelength ($\lambda_{\text{max}}$) corresponding to maximum emission intensity is inversely proportional to absolute temperature:
   $$\lambda_{\text{max}} T = b = 2.898 \times 10^{-3}\text{ m}\cdot\text{K}$$
   *(A hotter star glows blue-white at short wavelengths, while a cooler star glows dull red at long wavelengths).*
3. **Kirchhoff's Law of Thermal Radiation**: At any given temperature, the ratio of emissive power to absorptive power is constant for all bodies and equals the emissive power of a perfect black body:
   > **Core Maxim**: *"Good absorbers are good emitters; poor absorbers are poor emitters."*
   - A piece of black charcoal absorbs all incident light. When heated in a furnace to $1000^\circ\text{C}$ and placed in a dark room, it glows brilliantly, emitting vastly more light than a polished white porcelain plate placed beside it!
4. **Newton's Law of Cooling**: For small temperature differences ($T - T_0 < 30^\circ\text{C}$), the rate of heat loss of a body by radiation is directly proportional to the temperature difference between the body and its surroundings:
   $$-\frac{dT}{dt} = k(T - T_0)$$
   *(A cup of hot coffee cools much faster when it is at $90^\circ\text{C}$ than when it has cooled down to $40^\circ\text{C}$ in a $25^\circ\text{C}$ room).*

### Engineering Architecture of the Thermos Flask (Dewar Flask)
A vacuum-insulated thermos flask is engineered to eliminate all three modes of heat transfer:
1. **Double-Walled Glass with Evacuated Vacuum**: Eliminates **Conduction** and **Convection** across the wall.
2. **Silver-Coated Inner Glass Surfaces**: Highly reflective mirror surfaces minimize **Radiation** (inner mirror reflects radiant heat back inside; outer mirror reflects external ambient radiant heat away).
3. **Cork / Plastic Stopper**: Low-conductivity insulating cap stops **Convection and Evaporation** through the top opening.

---

## 6.5 The Laws of Thermodynamics & Heat Engines

```
┌────────────────────────────────────────────────────────────────────────┐
│                        THE LAWS OF THERMODYNAMICS                      │
├─────────────────────┬──────────────────────────┬───────────────────────┤
│ Zeroth Law          │ First Law                │ Second Law            │
├─────────────────────┼──────────────────────────┼───────────────────────┤
│ Thermal Equilibrium │ Conservation of Energy   │ Direction of Processes│
│ Defines Temperature │ Defines Internal Energy  │ Defines Entropy       │
│ If A=B and B=C,     │ ΔQ = ΔU + ΔW             │ Kelvin-Planck: η < 1  │
│ then A=C            │ Heat added = Work done + │ Clausius: No heat flow│
│ Basis of Thermometer│ Internal energy change   │ from cold to hot free │
└─────────────────────┴──────────────────────────┴───────────────────────┘
```

### 1. The Zeroth Law of Thermodynamics (Equilibrium & Thermometry)
> If two thermodynamic systems $A$ and $B$ are each in thermal equilibrium with a third system $C$, they are in mutual thermal equilibrium with each other ($T_A = T_C \text{ and } T_B = T_C \implies T_A = T_B$).
* Establishes the physical existence of a scalar property called **Temperature**. The third system $C$ is the **Thermometer**.

### 2. The First Law of Thermodynamics (Energy Conservation)
> Energy can neither be created nor destroyed; it can only be transformed from one form to another.

$$\Delta Q = \Delta U + \Delta W$$

Where:
* $\Delta Q$ = Heat energy supplied to the system.
* $\Delta U$ = Change in internal energy of the system ($U$ depends strictly on temperature for an ideal gas).
* $\Delta W = P \Delta V$ = External mechanical work done by the system.

#### Four Classical Thermodynamic Processes
1. **Isothermal Process**: Temperature remains constant ($\Delta T = 0 \implies \Delta U = 0$).  
   $\Delta Q = \Delta W$. Carried out infinitely slowly in thin, perfectly conducting containers. Obeys Boyle's Law ($PV = \text{constant}$).
2. **Adiabatic Process**: Zero heat enters or leaves the system ($\Delta Q = 0$).  
   $\Delta W = -\Delta U$. Carried out extremely rapidly in thick, insulating containers. Obeys Poisson's Law ($P V^\gamma = \text{constant}$).
   - *Everyday Example*: Sudden bursting of a bicycle tube cools the escaping air rapidly due to adiabatic expansion ($\Delta W > 0 \implies \Delta U < 0 \implies T \text{ drops}$).
3. **Isobaric Process**: Pressure remains constant ($\Delta P = 0$). Work done is $W = P(V_2 - V_1)$.
4. **Isochoric Process**: Volume remains constant ($\Delta V = 0 \implies \Delta W = 0$). All supplied heat increases internal energy ($\Delta Q = \Delta U$).

### 3. The Second Law of Thermodynamics (Arrow of Time & Entropy)
The First Law permits any process that conserves energy, but many energy-conserving processes never occur in nature (a cold cup of coffee never spontaneously draws heat from the room to boil itself). The Second Law dictates the **direction of natural processes**:

* **Kelvin-Planck Statement (Heat Engines)**: It is impossible to construct a heat engine that absorbs heat from a single thermal reservoir and converts $100\%$ of it into mechanical work without rejecting waste heat to a colder sink ($\text{Efficiency } \eta < 1$).
* **Clausius Statement (Refrigerators / Heat Pumps)**: It is impossible to construct a cyclic machine whose sole effect is to transfer heat from a colder body to a hotter body without requiring external work input (refrigerators require electric compressors).
* **Entropy ($S$)**: A mathematical measure of molecular disorder or randomness in a system. The **Entropy of the Universe always increases** in any irreversible natural process ($\Delta S_{\text{universe}} > 0$).

### The Carnot Cycle & Theoretical Engine Efficiency
Sadi Carnot (1824) proved that no engine operating between two thermal reservoirs (Source at $T_1$, Sink at $T_2$) can ever be more efficient than an ideal reversible engine (Carnot engine):

$$\eta_{\text{Carnot}} = 1 - \frac{T_2}{T_1} = \frac{T_1 - T_2}{T_1}$$

*(Temperatures $T_1$ and $T_2$ MUST be in Kelvin).*  
Efficiency reaches $100\%$ ($\eta = 1$) only if the sink temperature is at absolute zero ($T_2 = 0\text{ K}$), which is physically unattainable.

---

## 6.6 Master Chapter Distinction Matrix

| Parameter | Heat | Temperature | Internal Energy |
| :--- | :--- | :--- | :--- |
| **Physical Definition** | Energy in transit between bodies due to temperature gradient. | Measure of average translational kinetic energy of molecules. | Total kinetic and potential energy of all molecules in the system. |
| **SI Unit** | **Joule ($\text{J}$)** | **Kelvin ($\text{K}$)** | **Joule ($\text{J}$)** |
| **State vs. Path** | **Path Function** (depends on thermodynamic path). | **State Function** (depends only on equilibrium state). | **State Function** ($\Delta U = n C_v \Delta T$). |
| **Flow Condition** | Spontaneous from higher to lower $T$. | Determined by zeroth law equilibrium. | Does not flow; stored internally. |

---

## 6.7 High-Yield Diagnostic Examination Traps

1. **The $-40^\circ$ Temperature Scale Trap**:
   - *Trap*: "At what temperature are Celsius and Kelvin scales equal?"
   - *Correction*: **Never!** $K = C + 273.15$, so they can never have the same value. Celsius and **Fahrenheit** intersect at **$-40^\circ$** ($-40^\circ\text{C} = -40^\circ\text{F}$).
2. **Cold Touch Sensation Fallacy**:
   - *Trap*: "An iron rod feels colder than a wooden rod on a winter morning because iron is at a lower temperature."
   - *Correction*: **False**. Both rods are at the **exact same ambient temperature**. Iron feels colder solely because its **thermal conductivity is vastly higher**, conducting heat away from your fingertips much faster.
3. **Boiling Point at High Altitude Trap**:
   - *Trap*: "Water boils faster in the mountains because it reaches $100^\circ\text{C}$ sooner."
   - *Correction*: Water boils at a **lower temperature** (e.g., $90^\circ\text{C}$) in mountains due to lower atmospheric pressure. It does NOT reach $100^\circ\text{C}$, which is why food takes **longer to cook** in open pots!
4. **Isothermal vs. Adiabatic Tube Burst**:
   - *Trap*: "When a tire bursts suddenly, the air cools due to an isothermal process."
   - *Correction*: The burst happens in milliseconds, giving zero time for heat exchange ($\Delta Q = 0$). It is an **adiabatic expansion**, where escaping gas does work at the expense of its internal energy, dropping temperature.
