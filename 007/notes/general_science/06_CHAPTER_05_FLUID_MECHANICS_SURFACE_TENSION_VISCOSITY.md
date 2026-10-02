<div style="page-break-before: always;"></div>

# CHAPTER 05: FLUID MECHANICS, HYDROSTATICS, SURFACE TENSION & VISCOSITY

**Canonical Sources Unified**:
* NCERT Class 9 Science (Chapter 10: Gravitation — Thrust, Pressure, Buoyancy, Archimedes)
* NCERT Class 11 Physics (Part 2, Chapter 9: Mechanical Properties of Fluids — Pascal, Bernoulli, Stokes, Surface Tension)
* Halliday, Resnick & Walker, *Fundamentals of Physics* (Fluid Dynamics)
* Standard Competitive Examination Compendiums (UPSC CSE, State PSCs, SSC CGL)

---

## 5.1 Hydrostatics: Pressure, Thrust & Pascal's Principle

### Thrust vs. Pressure
* **Thrust**: The total force acting **perpendicularly** (normally) on a surface ($\vec{F}_\perp$, SI: $\text{Newton}$, Vector).
* **Pressure ($P$)**: Thrust per unit surface area:

$$P = \frac{\text{Thrust}}{\text{Area}} = \frac{F_\perp}{A} \quad [\text{SI Unit: } \text{Pascal (Pa)} = \text{N/m}^2, \text{ Dimensions: } [M^1 L^{-1} T^{-2}]]$$

```
                   P = F / A   ===>   P ∝ 1 / A
      Small Area (A ↓) ===> High Pressure (P ↑) : Sharp needle, nail, knife blade
      Large Area (A ↑) ===> Low Pressure  (P ↓) : Broad camel feet, heavy truck tires
```

* **Everyday Applications of $P \propto \frac{1}{A}$**:
  - A sharp knife cuts vegetables effortlessly compared to a blunt knife because the microscopic edge area of a sharp blade is tiny, generating enormous pressure for the same applied force.
  - Camels walk across desert sands without sinking because their broad, padded hooves distribute body weight over a large area, minimizing pressure.
  - Heavy army battle tanks and bulldozers use continuous broad caterpillar tracks rather than standard wheels to prevent sinking into soft soil.
  - Railway tracks are laid on broad wooden, concrete, or steel sleepers to disperse the enormous weight of trains over a wide surface area of ballast stone.

### Hydrostatic Pressure Inside a Liquid Column
At depth $h$ inside a static liquid of density $\rho$ under local gravity $g$:

$$P = P_0 + \rho g h$$

Where:
* $P_0$ = Atmospheric pressure acting on the free liquid surface ($1.013 \times 10^5\text{ Pa}$).
* $\rho g h$ = **Gauge Pressure** (pressure exerted exclusively by the liquid column).
* **Hydrostatic Paradox**: The pressure at the bottom of a liquid container depends **only on the vertical depth ($h$) and liquid density ($\rho$)**, NOT on the shape, cross-sectional area, or total volume of the container!

### Pascal's Principle: The Engine of Hydraulic Machines
> **Pascal's Law**: Pressure applied to an enclosed, incompressible fluid at rest is transmitted **undiminished and equally** to every portion of the fluid and to the walls of the containing vessel.

```
                  Small Piston (Area a)            Large Output Piston (Area A)
                       Force f ──► [ | ]                      ▲
                                   |   |                      │ Force F = f · (A / a)
                                   |   |                      │ (Enormous Lift!)
               ~~~~~~~~~~~~~~~~~~~~|   |~~~~~~~~~~~~~~~~~~~~~~[====]
               Fluid Pressure P = f / a = F / A (Undiminished!)
```

* **Mechanical Advantage**:
  $$P_1 = P_2 \implies \frac{f}{a} = \frac{F}{A} \implies \mathbf{F = f \left(\frac{A}{a}\right)}$$
  If output area $A$ is $100$ times input area $a$, a modest human effort of $10\text{ N}$ lifts a massive $1,000\text{ N}$ automobile!
* **Everyday Engineering Applications**: Hydraulic brakes in automobiles, hydraulic lifts in service stations, hydraulic car jacks, and hydraulic presses for cotton baling.

---

## 5.2 Atmospheric Pressure & Barometric Variations

### Atmospheric Pressure at Sea Level
The envelope of air surrounding Earth exerts immense pressure due to gravity:
* **Standard Value**: $1\text{ atm} = 1.01325 \times 10^5\text{ Pa} \approx \mathbf{1.01\text{ bar}} = \mathbf{760\text{ mm of Hg}}$ (Torricelli vacuum column).
* **Torricelli's Mercury Barometer**: Atmospheric pressure supports a column of mercury of height exactly $760\text{ mm}$ ($76\text{ cm}$) at sea level. The empty space above the mercury column is the **Torricellian Vacuum**.

> [!IMPORTANT]
> **Why Mercury is Used in Barometers Instead of Water**:  
> 1. Density of mercury ($\rho_{\text{Hg}} = 13,600\text{ kg/m}^3$) is $13.6$ times that of water ($\rho_{\text{water}} = 1000\text{ kg/m}^3$). A water barometer would require an unmanageable glass column over **10.3 metres tall** ($h = \frac{P}{\rho g} = \frac{101325}{1000 \times 9.8} \approx 10.34\text{ m}$)!
> 2. Mercury does not wet or stick to the glass tube wall, ensuring precise meniscus readings.
> 3. Mercury has an exceptionally low vapor pressure, keeping the Torricellian vacuum pure.

### Atmospheric Pressure Variations with Altitude & Everyday Effects
Atmospheric density drops exponentially with elevation:
* **Nosebleeds at High Altitudes**: At high mountain peaks, external atmospheric pressure drops significantly, while internal human blood pressure remains high. This pressure difference can rupture delicate nasal capillaries.
* **Why Cooking Takes Longer in the Mountains**:
  - The boiling point of a liquid is the temperature at which its vapor pressure equals external atmospheric pressure.
  - On high mountains, low atmospheric pressure causes water to boil at a much lower temperature (e.g., $90^\circ\text{C}$ instead of $100^\circ\text{C}$). Because water cannot reach $100^\circ\text{C}$, heat content is insufficient, making food take vastly longer to cook in an open pot.
* **Why Pressure Cookers Cook Food Faster**:
  - The tightly sealed lid traps steam, raising internal pressure to ~$\mathbf{2\text{ atmospheres}}$.
  - Under elevated pressure, the boiling point of water rises to **$120^\circ\text{C}$ to $125^\circ\text{C}$**. The higher cooking temperature cooks food in one-third the normal time, saving energy and preserving nutrients.

### Weather Forecasting via Barometer Readings
| Barometric Trend | Meteorological Interpretation | Physical Reason |
| :--- | :--- | :--- |
| **Sudden, Sharp Drop in Mercury** | **Imminent Storm / Cyclone** | Center of intense low-pressure system arriving; high-speed winds rush inward. |
| **Gradual, Continuous Fall** | **Approaching Rain** | Increasing moisture/humidity; water vapor is less dense than dry air, lowering air density. |
| **Gradual, Steady Rise** | **Clear, Fair Weather** | High-pressure system establishing, dry and stable atmospheric conditions. |

---

## 5.3 Archimedes' Principle, Buoyancy & Floatation

### Archimedes' Principle
> **Statement**: When a body is wholly or partially immersed in a fluid at rest, it experiences an upward buoyant force (upthrust) that is identically equal to the weight of the fluid displaced by the body:

$$F_{\text{buoyant}} = \text{Weight of Displaced Fluid} = V_{\text{submerged}} \times \rho_{\text{fluid}} \times g$$

```
               [ Body of Volume V, Density d ]
                           │
                           ▼ Weight W = V · d · g (Acts Downward)
             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ (Liquid of Density ρ)
                           ▲
                           │ Buoyant Force F_b = V_sub · ρ · g (Acts Upward)
```

### The Three Laws of Floatation
Let density of solid body be $d$ and density of liquid be $\rho$:

| Condition | Mathematical Relation | Net Result & State of Equilibrium |
| :--- | :--- | :--- |
| **Case 1: $d > \rho$** | Weight ($W$) $>$ Max Buoyancy ($F_b$) | Body **sinks completely to the bottom** (e.g., Iron nail in water). |
| **Case 2: $d = \rho$** | Weight ($W$) $=$ Max Buoyancy ($F_b$) | Body **floats completely submerged** just beneath the surface in neutral equilibrium. |
| **Case 3: $d < \rho$** | Weight ($W$) $<$ Max Buoyancy ($F_b$) | Body **floats partially submerged** with a fraction of its volume above the liquid surface. |

* **Fraction of Volume Submerged in Liquid**:
  $$\frac{V_{\text{inside}}}{V_{\text{total}}} = \frac{\text{Density of Body } (d)}{\text{Density of Liquid } (\rho)}$$

### High-Yield Floatation Phenomena
* **Why an Iron Nail Sinks in Water but a Massive Steel Ship Floats**:  
  An iron nail has density ($7,800\text{ kg/m}^3$) greater than water ($1000\text{ kg/m}^3$); its small volume displaces very little water, so buoyant force cannot balance its weight. A steel ship, however, is **hollowed out with vast internal air chambers**. Its *average density* ($\frac{\text{total mass}}{\text{total external volume}}$) is far less than water, allowing it to displace a volume of water whose weight easily equals the ship's weight.
* **Why an Iron Nail Floats in Mercury**:  
  Density of iron is $7.8\text{ g/cm}^3$, while density of mercury is $13.6\text{ g/cm}^3$. Because $d_{\text{iron}} < \rho_{\text{mercury}}$, the iron nail floats on mercury!
* **The Melting Floating Ice Cube in Water**:  
  *Question*: When an ice cube floating in a glass of water melts completely, does the water level rise, fall, or remain unchanged?  
  *Answer*: **The water level remains completely UNCHANGED!**  
  *Proof*: A floating ice cube displaces a volume of water equal to its own weight ($V_{\text{displaced}} = \frac{m_{\text{ice}}}{\rho_{\text{water}}}$). When it melts, its mass $m_{\text{ice}}$ turns into liquid water of volume $V_{\text{melted}} = \frac{m_{\text{ice}}}{\rho_{\text{water}}}$. The melted water exactly fills the submerged cavity the ice occupied!
* **Floating Iceberg Volume**: Density of ice is $\approx 0.9\text{ g/cm}^3$, water is $1.0\text{ g/cm}^3$. Thus, $\frac{0.9}{1.0} = \mathbf{\frac{9}{10}\text{th}}$ ($90\%$) of an iceberg remains submerged underwater, while only $\mathbf{\frac{1}{10}\text{th}}$ ($10\%$) is visible above the sea.
* **Swimming in the Dead Sea vs. Freshwater**:  
  The Dead Sea has extremely high salinity ($\sim 34\%$ salt), giving it high density ($\sim 1.24\text{ g/cm}^3$). Human body density is $\sim 1.06\text{ g/cm}^3$. Because human density is less than the water, a person floats effortlessly on the surface without sinking!

---

## 5.4 Surface Tension: Molecular Origin & Phenomena

### Molecular Origin: Cohesive vs. Adhesive Forces
* **Cohesive Force**: Intermolecular attraction between molecules of the **same substance** (e.g., water molecule to water molecule, mercury to mercury).
* **Adhesive Force**: Intermolecular attraction between molecules of **different substances** (e.g., water molecule to glass wall).
  - *Water on Glass*: Adhesive force $>$ Cohesive force $\implies$ Water wets glass, forms a **concave meniscus**, capillary rise.
  - *Mercury on Glass*: Cohesive force $>$ Adhesive force $\implies$ Mercury does not wet glass, forms a **convex meniscus**, capillary depression.

### Definition of Surface Tension ($T$ or $\sigma$)
Molecules inside the bulk of a liquid experience equal attractive forces in all directions. A molecule on the surface layer experiences an **unbalanced inward pull**, causing the liquid surface to behave like a **stretched elastic membrane** minimizing its surface area:

$$T = \frac{\text{Force}}{\text{Length}} = \frac{F}{L} \quad [\text{SI Unit: } \text{N/m}, \text{ Dimensions: } [M^1 L^0 T^{-2}]]$$

```
          Surface Molecule (Net Inward Pull)      Bulk Molecule (Balanced Pull in All Directions)
                   \  |  /                                         |
               ─────●───── Liquid Surface                        ─ ● ─
                   /  |  \                                         |
```

### Why Liquid Droplets are Spherical
For a given volume, a **sphere has the minimum possible surface area**. Because surface tension forces a liquid to minimize its surface area, freely falling raindrops, oil droplets, and small mercury droplets assume a perfectly spherical shape.

### Everyday Phenomena Driven by Surface Tension
1. **Action of Detergents & Soaps**: Detergents drastically reduce the surface tension of water, allowing water to penetrate deep into microscopic fabric pores and dislodge dirt.
2. **Hot Soup Tastes Better**: Heating a liquid **decreases its surface tension**. Hot soup spreads thinly and uniformly over a wider area of the tongue's taste buds compared to viscous, cold soup.
3. **Calming Ocean Waves with Oil**: Pouring oil over turbulent sea waves lowers surface tension, dampening the crests of waves.
4. **Mosquito Larvae Control via Kerosene**: Spraying kerosene oil over stagnant water lowers surface tension. The surface tension film can no longer support the breathing siphon of mosquito larvae, causing them to drown.
5. **A Greased Steel Needle Floating on Water**: Placing a dry steel needle gently on a paper tissue on water allows the needle to float on the stretched elastic skin of surface tension, even though steel's density is 8 times that of water! Poking it ruptures the surface film, and it sinks instantly.

### Capillarity (Capillary Action) & Jurin's Law
The rise or depression of a liquid inside a tube of narrow bore (capillary tube):

$$h = \frac{2 T \cos\theta}{\rho g r}$$

Where $r$ = tube radius, $\theta$ = contact angle. **Height is inversely proportional to tube radius ($h \propto \frac{1}{r}$)**.
* **Everyday Examples**:
  - Kerosene rising through the cotton wick of a lantern.
  - Blotting paper absorbing spilled ink through microscopic paper pores.
  - Water and dissolved minerals rising from tree roots to leaves via xylem vessels.
  - Farmers ploughing fields in summer to break soil capillary channels and prevent evaporation of underground moisture.
  - A fountain pen leaking in an airplane at high altitudes due to low cabin pressure pushing ink out.

---

## 5.5 Viscosity, Terminal Velocity & Bernoulli's Principle

### Viscosity: Fluid Internal Friction
Viscosity is the property of a fluid by virtue of which it opposes relative motion between its adjacent fluid layers (**internal friction**).
* **Newton's Law of Viscosity**:
  $$F = -\eta A \frac{dv}{dx}$$
  (where $\eta$ is the **Coefficient of Viscosity**, $[M^1 L^{-1} T^{-1}]$, SI: $\text{Pa}\cdot\text{s}$ or $\text{Poiseuille}$; CGS: $\text{Poise} = 0.1\text{ Pa}\cdot\text{s}$).
* **Temperature Effect on Viscosity**:
  - In **Liquids**, increasing temperature **decreases viscosity** (cohesive forces weaken; warm honey/oil flows faster).
  - In **Gases**, increasing temperature **increases viscosity** (molecular collision frequency and momentum transfer increase).

### Stokes' Law & Terminal Velocity
When a small spherical body of radius $r$ falls through a viscous medium of viscosity $\eta$, it experiences a resistive viscous drag:

$$F_v = 6 \pi \eta r v$$

Eventually, the downward weight is completely balanced by the upward buoyant force plus viscous drag ($\sum F = 0$). The body stops accelerating and falls with a constant maximum speed known as **Terminal Velocity ($v_t$)**:

$$v_t = \frac{2}{9} \frac{r^2 (\rho - \sigma) g}{\eta} \implies \mathbf{v_t \propto r^2}$$

* **Applications**:
  - Formation of clouds: Microscopic water droplets have tiny radii ($r$), giving them an imperceptibly small terminal velocity, allowing them to remain suspended in the air.
  - Parachute jumpers: A deployed parachute provides enormous surface area, drastically reducing terminal velocity to a safe landing speed.

### Bernoulli's Theorem: Conservation of Energy in Fluid Flow
> For an ideal fluid (incompressible, non-viscous, streamline flow), the total energy—consisting of pressure energy, kinetic energy, and potential energy—remains constant along any streamline:

$$P + \frac{1}{2} \rho v^2 + \rho g h = \text{Constant}$$

```
     High Speed Flow (v ↑) ===> Low Fluid Pressure (P ↓)
     Low Speed Flow  (v ↓) ===> High Fluid Pressure (P ↑)
```

```
                 Low Pressure Area Above Wing (High Air Speed v_top)
                             - - - - - - - - - - - - -
                          ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ Dynamic Lift (L)
                   ═════/                               \═════ (Aerofoil Wing)
                       \________________________________/
                             - - - - - - - - - - - - -
                 High Pressure Area Below Wing (Low Air Speed v_bottom)
```

* **Applications of Bernoulli's Principle**:
  1. **Dynamic Aerodynamic Lift of Aircraft Wings**: The upper surface of an airplane wing is curved (aerofoil shape). Air moves faster over the curved top than the flat bottom ($v_{\text{top}} > v_{\text{bottom}}$). By Bernoulli's equation, pressure above the wing drops ($P_{\text{top}} < P_{\text{bottom}}$), creating an upward net **Dynamic Lift Force**.
  2. **Blowing Off Tin Roofs in Storms**: High-speed hurricane winds blow horizontally over a tin shed ($v \gg 0 \implies P \ll P_0$). The high atmospheric pressure inside the closed shed pushes the roof upward and blows it away.
  3. **The Danger of Standing Near Fast Trains**: When a fast express train zooms past a platform, the air speed between the train and a waiting passenger is high, causing pressure in that gap to drop. The higher atmospheric pressure behind the passenger pushes them toward the moving train.
  4. **The Magnus Effect**: The curved trajectory of a spinning cricket, tennis, or soccer ball in flight due to velocity differential across sides.
  5. **Atomizer / Perfume Scent Sprayer / Carburetor**: High-speed air stream creates low pressure over a vertical tube, sucking liquid upward and spraying it as a fine mist.

---

## 5.6 Master Chapter Distinction Matrix

| Property | Surface Tension | Viscosity |
| :--- | :--- | :--- |
| **Physical Origin** | Intermolecular cohesive forces on the free liquid surface layer. | Internal friction between adjacent moving fluid layers. |
| **Medium Occurrence** | Strictly at the **liquid-gas / free surface boundary**. | Throughout the **entire bulk of moving fluids (liquids & gases)**. |
| **SI Unit** | **$\text{N/m}$** or $\text{J/m}^2$ | **$\text{Pa}\cdot\text{s}$** or $\text{N}\cdot\text{s/m}^2$ |
| **Dimensional Formula**| $[M^1 L^0 T^{-2}]$ | $[M^1 L^{-1} T^{-1}]$ |
| **Temperature Effect** | Always **decreases** with temperature. | **Decreases** in liquids; **Increases** in gases. |

---

## 5.7 High-Yield Diagnostic Examination Traps

1. **The Melting Ice Cube Water Level Trap**:
   - *Trap*: "An ice cube floats in a glass of water. When it melts, does the water level rise?"
   - *Correction*: The water level remains **strictly UNCHANGED**, because the ice cube displaces a volume of water equal to the volume of melted liquid it turns into.
2. **Submerged Iceberg Ratio Trap**:
   - *Trap*: "What fraction of an iceberg is visible above seawater? (a) 90% (b) 10%".
   - *Correction*: Exactly **$\mathbf{10\%}$ ($\frac{1}{10}\text{th}$)** is visible above the surface; **$\mathbf{90\%}$ ($\frac{9}{10}\text{th}$)** is submerged beneath water!
3. **Viscosity of Gases with Temperature Trap**:
   - *Trap*: "Like liquids, the viscosity of gases decreases as temperature rises."
   - *Correction*: **False!** While liquid viscosity decreases with temperature, the **viscosity of gases increases with temperature** due to increased molecular collision frequency and momentum transfer.
4. **Water Barometer Height Fallacy**:
   - *Trap*: "Water can be used in a standard 1-meter mercury barometer tube."
   - *Correction*: To measure atmospheric pressure, a water column must be **over 10.3 metres tall** ($h = \frac{101325}{1000 \times 9.8} \approx 10.34\text{ m}$), because water density is 13.6 times less than mercury.
