<div style="page-break-before: always;"></div>

# CHAPTER 10: MAGNETISM, ELECTROMAGNETISM & ELECTROMAGNETIC INDUCTION

**Canonical Sources Unified**:
* NCERT Class 10 Science (Chapter 13: Magnetic Effects of Electric Current)
* NCERT Class 12 Physics (Part 1, Chapter 4: Moving Charges and Magnetism, Chapter 5: Magnetism and Matter, Chapter 6: Electromagnetic Induction, Chapter 7: Alternating Current)
* Halliday, Resnick & Walker, *Fundamentals of Physics* (Electromagnetic Field Theory)
* Standard Competitive Examination Compendiums (UPSC CSE, State PSCs, SSC CGL)

---

## 10.1 Foundations of Magnetism: Poles, Dipoles & Earth's Geomagnetism

### Magnetic Poles & The Non-Existence of Magnetic Monopoles
* Every magnet possesses two distinct poles: **North-Seeking Pole ($N$)** and **South-Seeking Pole ($S$)**. Like poles repel; unlike poles attract.
* **The Universal Non-Existence of Magnetic Monopoles**:  
  Unlike electric charges (where isolated positive and negative charges exist independently), **magnetic monopoles do not exist in classical physics** ($\nabla \cdot \vec{B} = 0$, Gauss's Law for Magnetism). If a bar magnet is broken in half, each broken piece instantly becomes a complete dipole possessing its own North and South poles. No matter how many times a magnet is cleaved—down to the atomic level—it remains a magnetic dipole!

### Properties of Magnetic Field Lines (Lines of Force)
1. Form **continuous closed loops**: Outside the magnet, they emerge from the **North pole and enter the South pole**; inside the magnet, they travel from the **South pole to the North pole**.
2. The tangent drawn to a magnetic field line at any point gives the **direction of the magnetic field ($\vec{B}$)** at that point.
3. **Two magnetic field lines NEVER intersect each other**! (If they intersected, a magnetic compass placed at the intersection point would point in two contradictory directions simultaneously, which is impossible).
4. Degree of closeness of field lines indicates field strength (crowded near poles $\implies$ strong field).

```
                         Outside: North ──► South
                     ┌───────────────────────────────┐
                     │                               │
                 ┌───▼───────────────────────────────┴───┐
                 │  N                                 S  │  (Bar Magnet)
                 └───┬───────────────────────────────▲───┘
                     │                               │
                     └───────────────────────────────┘
                          Inside: South ──► North
```

### Earth as a Giant Natural Magnet (Geomagnetism)
Earth behaves as if a powerful magnetic dipole is embedded deep in its molten outer core (driven by the geodynamo effect—convective flow of molten iron and nickel):
* **Magnetic Inversion**: Earth's **Magnetic South Pole** is located near the **Geographic North Pole** (in Northern Canada), and Earth's **Magnetic North Pole** is located near the **Geographic South Pole** (in Antarctica). This is why the North pole of a freely suspended magnetic needle points toward geographic North (drawn by Earth's magnetic South).

#### The Three Elements of Earth's Magnetic Field
1. **Magnetic Declination ($\theta$)**: The acute angle between the Geographic Meridian (true North-South) and the Magnetic Meridian.
2. **Magnetic Dip or Inclination ($\delta$)**: The angle made by the total magnetic field of Earth with the horizontal:
   - **At the Magnetic Equator**: Magnetic lines are perfectly horizontal $\implies \mathbf{\text{Dip } \delta = 0^\circ}$.
   - **At the Magnetic Poles**: Magnetic lines plunge vertically into the ground $\implies \mathbf{\text{Dip } \delta = 90^\circ}$.
3. **Horizontal Component of Earth's Field ($B_H$)**:
   $$B_H = B \cos\delta \quad \text{and} \quad B_V = B \sin\delta \implies \tan\delta = \frac{B_V}{B_H}$$

---

## 10.2 Magnetic Materials: Diamagnetic, Paramagnetic & Ferromagnetic

Michael Faraday classified all natural materials into three distinct magnetic categories based on their atomic orbital electrons and response to external magnetic fields ($\vec{B}_{\text{ext}}$):

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MAGNETIC MATERIALS TAXONOMY                     │
├─────────────────────┬──────────────────────────┬───────────────────────┤
│ Diamagnetic         │ Paramagnetic             │ Ferromagnetic         │
├─────────────────────┼──────────────────────────┼───────────────────────┤
│ Feebly REPELLED by  │ Feebly ATTRACTED by      │ Strongly ATTRACTED by │
│ external magnet     │ external magnet          │ external magnet       │
│ Move from stronger  │ Move from weaker to      │ Move strongly to      │
│ to weaker field     │ stronger field           │ strongest field       │
│ Susceptibility (χ)  │ Susceptibility (χ)       │ Susceptibility (χ)    │
│ is SMALL & NEGATIVE │ is SMALL & POSITIVE      │ is VASTLY POSITIVE    │
│ Permeability μ_r < 1│ Permeability μ_r > 1     │ Permeability μ_r ≫ 1  │
│ Independent of Temp │ Follows Curie's Law:     │ Follows Curie-Weiss   │
│ (Zero dipole moment)│ χ ∝ 1/T                  │ Law; Loses magnetism  │
│ Ex: Bismuth, Copper,│ Ex: Aluminum, Platinum,  │ above Curie Temp (T_c)│
│ Gold, Water, Nitrogen│ Oxygen (liquid O₂), Sodium│ Ex: Iron, Nickel, Cobalt│
└─────────────────────┴──────────────────────────┴───────────────────────┘
```

### The Curie Temperature ($T_c$)
The critical threshold temperature above which a **ferromagnetic material loses its spontaneous domain magnetization and transforms into a simple paramagnetic material**:
* **Iron ($Fe$)**: $T_c \approx \mathbf{770^\circ\text{C}}$ ($1043\text{ K}$).
* **Nickel ($Ni$)**: $T_c \approx \mathbf{358^\circ\text{C}}$ ($631\text{ K}$).
* **Cobalt ($Co$)**: $T_c \approx \mathbf{1120^\circ\text{C}}$ ($1393\text{ K}$).

### Soft Iron vs. Steel: Permanent Magnets vs. Electromagnets
* **Soft Iron**: Has **high magnetic permeability** (magnetizes easily) and **low retentivity/coercivity** (loses magnetism immediately when current is cut off).  
  *Ideal Application*: **Cores of Electromagnets, Transformers, and Electric Bells**.
* **Steel / Alnico / Neodymium**: Has high retentivity and high coercivity (retains strong magnetization even against demagnetizing forces).  
  *Ideal Application*: **Permanent Magnets, Loudspeaker Magnets, Compass Needles**.

---

## 10.3 Electromagnetism: Oersted's Discovery & Field Geometry

### Oersted's Historic Experiment (1820)
Hans Christian Oersted discovered the foundational unity of electricity and magnetism:
> An electric current flowing through a metallic wire produces a **magnetic field** in the surrounding space, deflecting a nearby magnetic compass needle.

### Right-Hand Thumb Rule (Maxwell's Corkscrew Rule)
To determine the direction of magnetic field lines around a straight current-carrying wire:
> Imagine gripping the wire with your right hand such that your **outstretched thumb points in the direction of electric current**; then your **curled fingers point in the direction of the concentric magnetic field lines**.

```
                         ▲ Current I (Thumb points UP)
                         │
                      ┌──┼──┐
                     (   │   )  Curled Fingers show CONCENTRIC
                      └──┼──┘   MAGNETIC FIELD LINES (Anticlockwise)
                         │
```

### Magnetic Field of a Solenoid & Electromagnet
A **Solenoid** is a long cylindrical helical coil of insulated copper wire wound closely into a tube:
* **Inside the Solenoid**: Magnetic field lines are **parallel, straight, and densely packed**, indicating that the **magnetic field is completely UNIFORM** throughout the interior:
  $$\mathbf{B = \mu_0 n I}$$
  (where $n = N/L$ is number of turns per unit length, $I$ is current).
* **Electromagnet**: Inserting a rod of **Soft Iron** inside the core of a current-carrying solenoid multiplies magnetic field strength thousands of times because soft iron domains align with the field. It acts as an extremely powerful magnet that can be turned on or off instantly with an electrical switch (used in scrap metal scrapyard cranes, maglev trains, electric relays).

---

## 10.4 Magnetic Force on Moving Charges: The Lorentz Force & Electric Motors

### The Magnetic Lorentz Force
A stationary electric charge in a magnetic field experiences zero magnetic force. However, when a charge $q$ moves with velocity $\vec{v}$ through a magnetic field $\vec{B}$:

$$\mathbf{\vec{F}_m = q (\vec{v} \times \vec{B}) \implies F_m = q v B \sin\theta}$$

```
                F = q · v · B · sin(θ)
     θ = 0° or 180° (Moving PARALLEL to Field)   ===> Force F = 0 (Undeviated straight line)
     θ = 90°        (Moving PERPENDICULAR)       ===> Force F = qvB (Moves in a CIRCLE!)
     0° < θ < 90°   (Moving at Oblique Angle)    ===> Moves in a HELIX (Spiral path)
```

> [!IMPORTANT]
> **Why Magnetic Forces Do ZERO Mechanical Work**:  
> Because the magnetic force vector is always perpendicular to the velocity vector ($\vec{F}_m \perp \vec{v}$), the power dissipated is:
> $$P = \vec{F}_m \cdot \vec{v} = 0 \implies \mathbf{W = 0\text{ Joules}}$$
> **A pure magnetic field can NEVER change the kinetic energy or speed of a charged particle**! It alters *only the direction of motion* (acts as a purely deflecting centripetal force).

### Fleming's Left-Hand Rule (Electric Motor Rule)
Used to find the direction of physical mechanical force acting on a current-carrying conductor placed inside an external magnetic field:

```
                          THUMB ──► Force / Motion (F)
                            │
                            │
       FOREFINGER ──────────┼──────────► Magnetic Field (B)
                            │
                            │
                   CENTER FINGER ──► Current (I)
                     (F - B - I: Father - Mother - Child)
```

* Stretch the thumb, forefinger, and center finger of your **Left Hand** mutually perpendicular to each other:
  - **Forefinger**: Points in the direction of **Magnetic Field ($\vec{B}$)**.
  - **Center Finger**: Points in the direction of **Electric Current ($I$)**.
  - **Thumb**: Points in the direction of **Mechanical Force / Motion ($\vec{F}$)**.

### The Electric Motor: Converting Electrical Energy into Mechanical Torque
An electric motor operates on the principle that a current-carrying rectangular coil placed in a magnetic field experiences equal and opposite forces on its parallel sides, creating a turning couple (**Torque $\tau = N I A B \sin\theta$**):
* **Split-Ring Commutator**: A copper ring split into two halves ($P$ and $Q$) that reverses the direction of current through the rotating armature coil every half-rotation ($180^\circ$). This ensures the torque continues turning the coil in the **exact same continuous rotational direction**!

---

## 10.5 Electromagnetic Induction (EMI): Faraday & Lenz's Laws

Discovered independently by Michael Faraday (1831) and Joseph Henry:
> **Electromagnetic Induction**: The phenomenon of generating an electric current (and induced electromotive force, EMF) in a closed circuit whenever the magnetic flux linked with the circuit changes over time.

### Magnetic Flux ($\Phi_B$)
The total number of magnetic field lines passing perpendicularly through a given surface area $A$:

$$\mathbf{\Phi_B = \vec{B} \cdot \vec{A} = B A \cos\theta} \quad [\text{SI Unit: } \mathbf{\text{Weber (Wb)}} = \text{Tesla}\cdot\text{m}^2, \text{ Dimensions: } [M^1 L^2 T^{-2} I^{-1}]]$$

### 1. Faraday's Laws of Induction
* **First Law**: Whenever the magnetic flux linked with an electric circuit changes, an induced electromotive force (EMF) is produced in the circuit, which lasts as long as the change in flux continues.
* **Second Law**: The magnitude of the induced EMF is directly proportional to the time rate of change of magnetic flux:
  $$\mathbf{\mathcal{E} = -N \frac{d\Phi_B}{dt}}$$

### 2. Lenz's Law (Conservation of Energy)
Represented by the **negative sign ($-$)** in Faraday's equation, formulated by Heinrich Lenz:
> **Lenz's Law**: The polarity of the induced electromotive force is always such that it tends to produce an electric current whose magnetic field **opposes the very change in magnetic flux that produced it**.

```
                Pushing North Pole INTO Coil          Pulling North Pole AWAY from Coil
                       ┌──────┐                               ┌──────┐
              N ──►    │      │                      ◄── N    │      │
           (Moving in) │ coil │                   (Moving out)│ coil │
                       └──────┘                               └──────┘
               Coil face becomes a NORTH pole         Coil face becomes a SOUTH pole
               (REPELELS the incoming magnet)         (ATTRACTS the receding magnet)
```

* **Physical Significance of Lenz's Law**: Lenz's Law is a direct manifestation of the **Law of Conservation of Energy**. When pushing a magnet toward a coil, one must do physical mechanical work against the opposing magnetic repulsion. This mechanical work is converted into the electrical energy of the induced current!

### Fleming's Right-Hand Rule (Electric Generator Rule)
Used to determine the direction of **induced electric current** in a conductor moving through a magnetic field:
* Stretch thumb, forefinger, and center finger of your **Right Hand** mutually perpendicular:
  - **Thumb**: Direction of **Motion of Conductor**.
  - **Forefinger**: Direction of **Magnetic Field**.
  - **Center Finger**: Direction of **Induced Electric Current**.

---

## 10.6 Transformers: Stepping Up & Down AC Voltage

A **Transformer** is a static electromagnetic device that transfers alternating electrical power from one circuit to another at the **exact same frequency**, while stepping voltage up or down based on the principle of **Mutual Induction**:

$$\mathbf{\frac{V_s}{V_p} = \frac{N_s}{N_p} = \frac{I_p}{I_s} = k} \quad (\text{Transformation Ratio})$$

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TRANSFORMER ARCHITECTURE                        │
├───────────────────────────────────┬────────────────────────────────────┤
│ Step-Up Transformer               │ Step-Down Transformer              │
├───────────────────────────────────┼────────────────────────────────────┤
│ N_s > N_p (Secondary turns > Pri.)│ N_s < N_p (Secondary turns < Pri.) │
│ V_s > V_p (Output Voltage RISES)  │ V_s < V_p (Output Voltage DROPS)   │
│ I_s < I_p (Output Current DROPS)  │ I_s > I_p (Output Current RISES)   │
│ Used at Power Generating Stations │ Used at Substations & Mobile       │
│ to transmit power over vast grid  │ phone chargers (Steps 220V AC down │
│ distances with minimum I²R loss   │ to 5V AC for rectification)        │
└───────────────────────────────────┴────────────────────────────────────┘
```

> [!IMPORTANT]
> **Why Transformers CANNOT Work on Direct Current (DC)**:  
> Direct Current (DC) from a battery provides a constant, unvarying magnetic flux ($\frac{d\Phi}{dt} = 0$). With zero rate of change of flux, the induced voltage in the secondary coil is **strictly ZERO**! Furthermore, the primary coil lacks inductive reactance for DC ($X_L = 2\pi f L = 0$ since $f = 0$); connecting a transformer to DC causes massive over-current that burns out the primary windings.

### Eddy Currents & Core Lamination
When a solid block of iron experiences a changing magnetic flux, circulating closed loops of induced current (**Eddy Currents / Foucault Currents**) are generated in the metal bulk, dissipating massive electrical power as waste heat ($I^2R$).
* **Mitigation**: Transformer cores are never constructed from solid iron blocks. They are built from **thin, insulated sheets of soft silicon steel (Laminated Core)** glued together with insulating varnish, slicing eddy current loops and reducing core heating losses by over 90%.

---

## 10.7 Master Chapter Distinction Matrix

| Feature | Fleming's Left-Hand Rule | Fleming's Right-Hand Rule |
| :--- | :--- | :--- |
| **Operating Domain** | **Electric Motors** (Converting Electrical $\rightarrow$ Mechanical). | **Electric Generators** (Converting Mechanical $\rightarrow$ Electrical). |
| **Hand Used** | **Left Hand** | **Right Hand** |
| **Primary Input** | Electric Current ($I$) in a Magnetic Field ($B$). | Mechanical Motion / Force ($F$) in a Magnetic Field ($B$). |
| **Resulting Output** | **Mechanical Force / Motion ($\vec{F}$)** | **Induced Current ($I$)** |
| **Finger Roles** | Thumb: Force, Forefinger: Field, Center: Current. | Thumb: Motion, Forefinger: Field, Center: Induced Current. |

---

## 10.8 High-Yield Diagnostic Examination Traps

1. **Magnetic Monopole Fallacy**:
   - *Trap*: "Cutting a bar magnet exactly at its center isolates a pure North pole from a South pole."
   - *Correction*: **Zero Monopoles!** Each severed piece instantly forms two new opposite poles, yielding two complete dipole magnets.
2. **Magnetic Field Work Fallacy**:
   - *Trap*: "A magnetic field does work on an electron to accelerate it in a circular path."
   - *Correction*: **Work done by a magnetic field is strictly ZERO!** The Lorentz force ($\vec{F} = q\vec{v} \times \vec{B}$) acts perpendicular to motion ($\theta = 90^\circ$); it changes direction, never speed or kinetic energy!
3. **Transformer on DC Battery**:
   - *Trap*: "Connecting a $12\text{V}$ DC battery to a $1:10$ step-up transformer yields $120\text{V}$ DC output."
   - *Correction*: **Output is ZERO Volts!** Transformers operate on mutual induction requiring an alternating flux ($\frac{d\Phi}{dt} \neq 0$). For constant DC, $\frac{d\Phi}{dt} = 0$, producing zero induced EMF and burning the primary coil.
4. **Curie Temperature Transformation**:
   - *Trap*: "Heating an iron rod above its Curie temperature ($770^\circ\text{C}$) makes it diamagnetic."
   - *Correction*: Heating iron above its Curie temperature transforms it into a **PARAMAGNETIC material**, never diamagnetic!
