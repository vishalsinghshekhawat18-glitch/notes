<div style="page-break-before: always;"></div>

# CHAPTER 04: WORK, ENERGY, POWER & CONSERVATION LAWS

**Canonical Sources Unified**:
* NCERT Class 9 Science (Chapter 11: Work and Energy)
* NCERT Class 11 Physics (Part 1, Chapter 6: Work, Energy and Power)
* Feynman Lectures on Physics (Volume I, Conservation of Energy)
* Standard Competitive Examination Compendiums (UPSC CSE, State PSCs, SSC CGL)

---

## 4.1 The Scientific Definition of Work: Overcoming Daily Misconceptions

### Everyday Work vs. Scientific Work
In everyday conversation, mental exertion (reading a textbook, studying for hours) or holding a heavy suitcase stationary is colloquially called "hard work." In physics, these involve **zero mechanical work**:
> **Scientific Definition of Work**: Work is done by a force if and only if there is a displacement of the point of application of the force in the direction of the force.

Mathematically, work is the **scalar dot product** of the force vector ($\vec{F}$) and the displacement vector ($\vec{s}$):

$$W = \vec{F} \cdot \vec{s} = |\vec{F}| |\vec{s}| \cos\theta$$

```
                       F (Applied Force)
                      ↗
                     /  θ (Angle between F and s)
                    /______► s (Displacement vector)
                 W = F · s · cos(θ)
```

Where:
* $F$ = Magnitude of applied force ($\text{N}$)
* $s$ = Magnitude of displacement ($\text{m}$)
* $\theta$ = Angle between force vector $\vec{F}$ and displacement vector $\vec{s}$

### Units & Dimensions of Work
* **SI Unit**: **Joule ($\text{J}$)** ($1\text{ Joule} = 1\text{ Newton} \times 1\text{ metre} = 1\text{ N}\cdot\text{m} = 1\text{ kg}\cdot\text{m}^2/\text{s}^2$).
* **CGS Unit**: **Erg** ($1\text{ Erg} = 1\text{ Dyne} \times 1\text{ cm} = 10^{-5}\text{ N} \times 10^{-2}\text{ m} = 10^{-7}\text{ Joules}$).
  $$\mathbf{1\text{ Joule} = 10^7\text{ Ergs}}$$
* **Dimensional Formula**: $[M^1 L^2 T^{-2}]$ (Identical to Energy and Torque).

---

### Three Regimes of Work Based on Angle $\theta$

```
┌────────────────────────────────────────────────────────────────────────┐
│                          THE THREE REGIMES OF WORK                     │
├─────────────────────┬──────────────────────────┬───────────────────────┤
│ Positive Work (W>0) │ Zero Work (W = 0)        │ Negative Work (W < 0) │
├─────────────────────┼──────────────────────────┼───────────────────────┤
│ 0° ≤ θ < 90°        │ θ = 90° or s = 0 or F = 0│ 90° < θ ≤ 180°        │
│ cos θ > 0           │ cos 90° = 0              │ cos θ < 0             │
│ Force assists       │ Force perpendicular to   │ Force opposes         │
│ motion              │ displacement             │ motion                │
│ Ex: Free falling    │ Ex: Coolie carrying bag, │ Ex: Friction opposing │
│ body under gravity  │ Earth orbiting Sun       │ sliding motion        │
└─────────────────────┴──────────────────────────┴───────────────────────┘
```

#### 1. Positive Work ($W > 0$)
Occurs when the angle $\theta$ is acute ($0^\circ \le \theta < 90^\circ$):
* Gravity doing work on an apple falling freely from a tree ($\theta = 0^\circ, \cos 0^\circ = 1 \implies W = +mgh$).
* A horse pulling a cart forward along horizontal ground.

#### 2. Negative Work ($W < 0$)
Occurs when the angle $\theta$ is obtuse ($90^\circ < \theta \le 180^\circ$):
* **Frictional Force**: Always acts opposite to the direction of relative displacement ($\theta = 180^\circ, \cos 180^\circ = -1 \implies W = -f \cdot s$).
* **Gravity on an Ascending Object**: When a ball is thrown vertically upward, gravity pulls downward while displacement is upward ($\theta = 180^\circ \implies W = -mgh$).
* Vehicle brakes bringing a car to a stop.

#### 3. Zero Work ($W = 0$)
Work done is strictly zero under three distinct physical conditions:
1. **Displacement is Zero ($s = 0$)**: Pushing against a rigid concrete wall until exhausted. Because $s = 0$, $W = 0$.
2. **Applied Force is Zero ($F = 0$)**: An object moving with uniform velocity through frictionless interstellar space.
3. **Force is Perpendicular to Displacement ($\theta = 90^\circ, \cos 90^\circ = 0$)**:
   - **The Coolie Paradox**: A porter (coolie) carries a heavy suitcase of mass $M$ on his head and walks along a flat horizontal platform. True, he exerts an upward normal force against gravity ($F = Mg$). But the horizontal displacement $\vec{s}$ is at an angle $\theta = 90^\circ$ to his vertical lifting force. Hence:
     $$W = F s \cos 90^\circ = \mathbf{0\text{ Joules!}}$$
     *(Note: The coolie does biological work metabolizing ATP in his muscles, but does zero mechanical work against gravity).*
   - **Planetary Orbits & Centripetal Force**: When Earth orbits the Sun in a circular path, the gravitational pull acts radially inward ($\theta = 90^\circ$ to the tangential displacement vector at every infinitesimal instant). Hence, **work done by gravitational centripetal force on an orbiting satellite or planet is strictly ZERO**!

---

## 4.2 Energy Typologies: Kinetic & Potential Architecture

Energy is the **capacity to do work**. It is a **scalar quantity** sharing the same unit (**Joule**) and dimensions ($[M L^2 T^{-2}]$) as work.

### 1. Kinetic Energy ($E_k$ or $K$)
The energy possessed by a body by virtue of its state of motion:

$$E_k = \frac{1}{2} m v^2$$

#### Crucial Mathematical Relation Between Kinetic Energy and Linear Momentum
Linear momentum is $p = mv \implies v = \frac{p}{m}$. Substituting into the kinetic energy equation:

$$E_k = \frac{1}{2} m \left(\frac{p}{m}\right)^2 \implies \mathbf{E_k = \frac{p^2}{2m}} \quad \text{and} \quad \mathbf{p = \sqrt{2m E_k}}$$

```
   If Momentum (p) is DOUBLED (2p):
   E_k' = (2p)² / (2m) = 4 · [p² / (2m)] = 4 · E_k  ===> Kinetic Energy QUADRUPLES (+300% increase!)
```

> [!TIP]
> **High-Yield Examination Formula: Heavy vs. Light Momentum & Energy**:  
> 1. If a light body (mass $m_1$) and a heavy body (mass $m_2$, $m_2 > m_1$) have the **SAME linear momentum ($p_1 = p_2$)**:
>    $$E_k \propto \frac{1}{m} \implies \mathbf{E_{k(\text{light})} > E_{k(\text{heavy})}}$$
>    *(The lighter body possesses vastly more kinetic energy!)*
> 2. If a light body and a heavy body possess the **SAME kinetic energy ($E_{k1} = E_{k2}$)**:
>    $$p \propto \sqrt{m} \implies \mathbf{p_{\text{heavy}} > p_{\text{light}}}$$
>    *(The heavier body possesses vastly more linear momentum!)*

---

### 2. Potential Energy ($E_p$ or $U$)
The energy stored in a body by virtue of its position, configuration, or state of mechanical strain.

1. **Gravitational Potential Energy**:
   The work done against gravity in raising a body of mass $m$ to a height $h$:
   $$U_g = mgh$$
2. **Elastic Potential Energy (Hooke's Law Spring)**:
   For an ideal spring with spring constant $k$ stretched or compressed by distance $x$ ($F = -kx$):
   $$U_s = \frac{1}{2} k x^2$$
   - *Everyday Examples*: Stretched bow ready to release an arrow, coiled mainspring of a mechanical winding watch, compressed shock absorber spring.

---

## 4.3 The Work-Energy Theorem & Conservation of Mechanical Energy

### The Work-Energy Theorem
> **Fundamental Theorem**: The net work done by all external forces (conservative and non-conservative) acting on a body is identically equal to the change in its kinetic energy:

$$W_{\text{net}} = \Delta E_k = E_{k(\text{final})} - E_{k(\text{initial})} = \frac{1}{2}mv^2 - \frac{1}{2}mu^2$$

### Law of Conservation of Mechanical Energy
In an isolated system where **only conservative forces** (like gravity or ideal electrostatic/spring forces) act:

$$E_{\text{total}} = E_k + E_p = \text{Constant}$$

```
                [Point A: Top of Cliff (Height h)]
                E_k = 0, E_p = mgh  ===> Total Energy = mgh
                          │
                          │ Falling under gravity
                          ▼
                [Point B: Mid-way (Height h/2)]
                E_k = 1/2 mgh, E_p = 1/2 mgh ===> Total Energy = mgh
                          │
                          │ Striking ground
                          ▼
                [Point C: Ground Level (Height 0)]
                E_k = 1/2 m v² = mgh, E_p = 0 ===> Total Energy = mgh
```

* **Conservative Forces**: Work done is path-independent and depends solely on initial and final positions; work done in any closed loop is strictly zero ($\oint \vec{F} \cdot d\vec{r} = 0$).  
  *Examples*: Gravitational force, Electrostatic force, Elastic spring force.
* **Non-Conservative (Dissipative) Forces**: Work done is path-dependent; mechanical energy is irreversibly dissipated into heat, sound, or light.  
  *Examples*: Friction, Viscous fluid drag, Air resistance.

---

## 4.4 Power & Commercial Energy Units

### Definition & SI Formulation
**Power ($P$)** is the time rate at which work is done or energy is transferred:

$$P = \frac{dW}{dt} = \frac{\vec{F} \cdot d\vec{s}}{dt} = \mathbf{\vec{F} \cdot \vec{v}}$$

* **SI Unit**: **Watt ($\text{W}$)** ($1\text{ Watt} = 1\text{ Joule/second} = 1\text{ J/s}$).
* **Dimensional Formula**: $[M^1 L^2 T^{-3}]$.
* **Imperial / Practical Power Unit: Horsepower ($\text{hp}$)**:
  $$\mathbf{1\text{ Horsepower (hp)} = 746\text{ Watts}}$$

### Commercial Electrical Energy: The Board of Trade Unit (kWh)
Electricity supply boards bill consumers not for electrical power (Watts), but for **total electrical energy consumed** measured in **Kilowatt-hours ($\text{kWh}$)**, popularly termed "Units":

$$1\text{ Unit} = 1\text{ kWh} = 1000\text{ Watts} \times 3600\text{ Seconds} = \mathbf{3.6 \times 10^6\text{ Joules} = 3.6\text{ MJ}}$$

> [!TIP]
> **Exam Electricity Bill Calculation Formula**:
> $$\text{Total Units Consumed (kWh)} = \frac{\text{Power (Watts)} \times \text{Hours per Day} \times \text{Number of Days}}{1000}$$
> *Example*: Ten 100W light bulbs running for 10 hours daily for 30 days:
> $$\text{Units} = \frac{10 \times 100\text{ W} \times 10\text{ hr} \times 30}{1000} = \frac{300,000}{1000} = 300\text{ Units}$$

---

## 4.5 Collisions: Elastic vs. Inelastic Dynamics

When two physical bodies collide, their interaction is governed by the **Coefficient of Restitution ($e$)**:

$$e = \frac{\text{Relative Velocity of Separation}}{\text{Relative Velocity of Approach}} = \frac{v_2 - v_1}{u_1 - u_2}$$

```
┌────────────────────────────────────────────────────────────────────────┐
│                        COLLISION TAXONOMY                              │
├─────────────────────┬──────────────────────────┬───────────────────────┤
│ Elastic Collision   │ Inelastic Collision      │ Perfectly Inelastic   │
├─────────────────────┼──────────────────────────┼───────────────────────┤
│ e = 1               │ 0 < e < 1                │ e = 0                 │
│ Momentum Conserved  │ Momentum Conserved       │ Momentum Conserved    │
│ Kinetic Energy      │ Kinetic Energy is NOT    │ Maximum Kinetic       │
│ strictly CONSERVED  │ conserved (Heat/Sound)   │ Energy Loss           │
│ Ex: Subatomic       │ Ex: Automobile collision,│ Bodies stick together │
│ particle collisions │ cricket ball hitting bat │ Ex: Bullet in wood    │
└─────────────────────┴──────────────────────────┴───────────────────────┘
```

> **Universal Conservation Rule**: In **ALL collisions** (elastic, inelastic, or perfectly inelastic), **Total Linear Momentum is ALWAYS conserved**, because internal impact forces cancel out in pairs (Newton's 3rd Law)! Kinetic energy is conserved *only* in perfectly elastic collisions ($e = 1$).

---

## 4.6 Master Chapter Distinction Matrix

| Feature | Work | Torque | Power |
| :--- | :--- | :--- | :--- |
| **Physical Definition** | Force causing linear displacement ($\vec{F} \cdot \vec{s}$). | Force producing rotational turning effect ($\vec{r} \times \vec{F}$). | Rate of doing work ($\frac{dW}{dt}$). |
| **Quantity Type** | **Scalar** | **Vector / Pseudo-vector** | **Scalar** |
| **SI Unit** | **Joule ($\text{J}$)** or $\text{N}\cdot\text{m}$ | **$\text{N}\cdot\text{m}$** (Never written as Joules!). | **Watt ($\text{W}$)** |
| **Dimensional Formula**| $[M^1 L^2 T^{-2}]$ | $[M^1 L^2 T^{-2}]$ | $[M^1 L^2 T^{-3}]$ |

---

## 4.7 High-Yield Diagnostic Examination Traps

1. **The Coolie Work Trap**:
   - *Trap*: "A coolie carrying a 50 kg luggage on his head walks 100 meters horizontally. Work done against gravity is $mgh = 50 \times 9.8 \times 100 = 49,000\text{ J}$."
   - *Correction*: **Zero Joules!** Gravitational force acts vertically downward, while displacement is purely horizontal ($\theta = 90^\circ$). Because $\cos 90^\circ = 0$, work against gravity is strictly zero.
2. **Momentum Doubling Trap**:
   - *Trap*: "If the momentum of a body is increased by $100\%$, its kinetic energy increases by $100\%$."
   - *Correction*: **False!** Because $E_k \propto p^2$, doubling momentum ($p \rightarrow 2p$) causes kinetic energy to become $(2p)^2 = 4 E_k$, which is a **$300\%$ increase**!
3. **Torque in Joules Trap**:
   - *Trap*: Stating torque in Joules because both have dimensions of $[M L^2 T^{-2}]$.
   - *Correction*: Torque is a **vector cross product** ($\vec{\tau} = \vec{r} \times \vec{F}$) measured strictly in **Newton-metres ($\text{N}\cdot\text{m}$)**. The unit "Joule" is reserved exclusively for scalar work and energy.
4. **Collision Momentum Loss Fallacy**:
   - *Trap*: "In an inelastic car crash, total momentum decreases due to vehicle deformation."
   - *Correction*: **False**. In any isolated collision, **momentum is 100% conserved**. Only kinetic energy is converted into metal deformation, sound, and thermal heat.
