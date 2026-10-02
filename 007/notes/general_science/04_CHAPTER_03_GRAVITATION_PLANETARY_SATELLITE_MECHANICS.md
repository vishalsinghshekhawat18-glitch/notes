<div style="page-break-before: always;"></div>

# CHAPTER 03: GRAVITATION, PLANETARY MOTION & SATELLITE MECHANICS

**Canonical Sources Unified**:
* NCERT Class 9 Science (Chapter 10: Gravitation — Universal law, $g$, mass vs weight)
* NCERT Class 11 Physics (Part 1, Chapter 8: Gravitation — Kepler's laws, potential, escape velocity)
* Halliday, Resnick & Walker, *Fundamentals of Physics* (Gravitational Theory)
* Standard Competitive Examination Compendiums (UPSC CSE, State PSCs, SSC CGL)

---

## 3.1 Newton's Universal Law of Gravitation

### First Principles & Mathematical Formulation
Sir Isaac Newton deduced that the mysterious force causing an apple to detach and fall from a tree is the exact same fundamental force holding the Moon in its celestial orbit around Earth:
> **The Universal Law of Gravitation**: Every particle of matter in the universe attracts every other particle with a mutual force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers:

$$F = G \frac{m_1 m_2}{r^2}$$

```
        m₁                                               m₂
     ( ● ) ────────────── Force F ◄──► Force F ────────────── ( ● )
        ◄─────────────────────── Distance r ───────────────────────►
```

Where:
* $m_1, m_2$ = Masses of the interacting bodies ($\text{kg}$).
* $r$ = Center-to-center distance between the bodies ($\text{m}$).
* $G$ = **Universal Gravitational Constant**.

### The Universal Gravitational Constant ($G$)
* **Numerical Value**: Measured experimentally with a torsion balance by Henry Cavendish in 1798:
  $$G = 6.674 \times 10^{-11}\text{ N}\cdot\text{m}^2/\text{kg}^2$$
* **Dimensional Formula**:
  $$[G] = \frac{[F][r^2]}{[m_1][m_2]} = \frac{[M L T^{-2}][L^2]}{[M^2]} = [M^{-1} L^3 T^{-2}]$$
* **Why $G$ is called "Universal"**: Unlike acceleration due to gravity ($g$), the value of $G$ is **strictly invariant** across space and time. It does NOT depend on:
  - The nature or composition of the interacting masses.
  - The temperature, chemical state, or electric charge of the bodies.
  - The intervening medium (placing two masses in vacuum, air, water, or dense molten rock changes $F$ by zero percent).

---

## 3.2 Acceleration Due to Gravity ($g$): Variations Across Earth

### Relation Between $g$ and $G$
Consider a body of mass $m$ placed on the surface of Earth (mass $M_E$, radius $R_E$):
Gravitational force acting on the body = Weight of the body ($mg$):

$$mg = G \frac{M_E m}{R_E^2} \implies \mathbf{g = \frac{G M_E}{R_E^2}}$$

* **Standard Value at Earth's Surface**: $g \approx 9.8\text{ m/s}^2$ ($980\text{ cm/s}^2$ or $32.2\text{ ft/s}^2$).
* **Critical Takeaway**: $g$ depends entirely on the mass ($M_E$) and radius ($R_E$) of the planet, but is **completely independent of the mass of the falling object ($m$)**!

---

### Four Major Variations in the Value of $g$

```
                   VARIATIONS IN ACCELERATION DUE TO GRAVITY (g)
                                        │
     ┌───────────────────────┬──────────┴────────────┬──────────────────────┐
     ▼                       ▼                       ▼                      ▼
[Altitude / Height (h)]  [Depth (d)]          [Latitude (λ)]        [Shape of Earth]
 Decreases with height    Decreases with depth  Max at Poles (λ=90°)  Poles flatter: R_p < R_e
 g_h ≈ g(1 - 2h/R)        g_d = g(1 - d/R)      Min at Equator (λ=0°) Hence: g_poles > g_equator
 Zero at infinity         Zero at Earth Center  Due to rotation:
                                                g' = g - ω²R cos²λ
```

#### 1. Variation with Altitude (Height $h$ Above Earth Surface)
At a height $h$ above Earth's surface:

$$g_h = \frac{G M_E}{(R_E + h)^2} = g \left(1 + \frac{h}{R_E}\right)^{-2}$$

For small altitudes ($h \ll R_E$ where $R_E \approx 6400\text{ km}$):

$$g_h \approx g \left(1 - \frac{2h}{R_E}\right)$$

* **Conclusion**: Acceleration due to gravity **decreases steadily as altitude increases**. At an infinite distance, $g = 0$.

#### 2. Variation with Depth ($d$ Below Earth Surface)
As one burrows inside the Earth to a depth $d$, only the inner spherical core of radius $(R_E - d)$ exerts a net gravitational pull (the outer spherical shell exerts zero net internal gravitational force):

$$g_d = g \left(1 - \frac{d}{R_E}\right)$$

* **At the Center of the Earth**: Depth $d = R_E$:
  $$g_{\text{center}} = g \left(1 - \frac{R_E}{R_E}\right) = \mathbf{0\text{ m/s}^2}$$
* **Critical Conclusion**: A person at the exact center of the Earth experiences **total weightlessness** ($W = m \times 0 = 0$), although their mass remains unchanged!

#### 3. Variation with Latitude & Earth's Axial Rotation
Because Earth rotates on its axis with angular velocity $\omega$ ($1\text{ rev/24 hours}$), an object on the surface experiences an outward centrifugal acceleration:

$$g' = g - \omega^2 R_E \cos^2\lambda$$

(where $\lambda$ is latitude).
* **At the Equator ($\lambda = 0^\circ, \cos 0^\circ = 1$)**: Centrifugal reduction is maximum:
  $$g_{\text{equator}} = g - \omega^2 R_E \quad (\text{Minimum value of } g)$$
* **At the Poles ($\lambda = 90^\circ, \cos 90^\circ = 0$)**: Centrifugal reduction is zero:
  $$g_{\text{poles}} = g \quad (\text{Maximum value of } g)$$

> [!TIP]
> **What Happens If Earth Stops Rotating?**  
> If Earth suddenly ceases its axial rotation ($\omega = 0$):
> - At the **Equator**, the centrifugal penalty disappears, so **$g$ increases** by $\omega^2 R_E \approx 0.034\text{ m/s}^2$ (weight of bodies increases slightly).
> - At the **Poles**, $\cos 90^\circ = 0$, so **$g$ remains completely unchanged**!

#### 4. Variation Due to the Non-Spherical Shape of Earth (Oblateness)
Earth is not a perfect sphere; it is an **oblate spheroid (geoid)**, bulging at the equator and flattened at the poles:
* Equatorial radius: $R_e \approx 6378\text{ km}$
* Polar radius: $R_p \approx 6357\text{ km}$ ($R_e - R_p \approx 21\text{ km}$)

Since $g \propto \frac{1}{R^2}$:

$$R_p < R_e \implies \mathbf{g_{\text{poles}} > g_{\text{equator}}}$$

* **Practical Consequence**: An object or bag of gold weighs **more at the Poles than at the Equator**. If a merchant buys gold by spring balance at the equator and sells it at the poles, they would register an apparent gain in weight!

---

## 3.3 Mass vs. Weight & The Physics of Weightlessness in Elevators

### Mass vs. Weight Distinction

| Parameter | Mass ($m$) | Weight ($W$) |
| :--- | :--- | :--- |
| **Physical Nature** | Total quantity of matter contained within a body; measure of inertia. | Gravitational force with which the Earth attracts the body ($W = mg$). |
| **Quantity Type** | **Scalar** (Magnitude only). | **Vector** (Directed toward center of Earth). |
| **SI Unit** | **Kilogram ($\text{kg}$)** | **Newton ($\text{N}$)** ($1\text{ kg-wt} \approx 9.8\text{ N}$). |
| **Measuring Instrument**| Physical balance / Beam balance (compares masses). | Spring balance / Weighing machine (measures normal reaction). |
| **Spatial Invariance** | **Constant everywhere** in the universe. | **Variable** depending on local value of $g$ (Zero at Earth's center). |

### Apparent Weight of a Person in an Elevator (Lift)
A weighing scale measures the **Normal Reaction Force ($R$)** exerted by the floor on the person's feet, NOT actual gravity $mg$:

```
        Accelerating UP (+a)            Accelerating DOWN (-a)            Cable Snaps (Free Fall)
        ┌──────────────────┐            ┌──────────────────┐            ┌──────────────────┐
        │        ▲ R       │            │        ▲ R       │            │        ▲ R = 0   │
        │        │         │            │        │         │            │        │         │
        │      [ o ]       │            │      [ o ]       │            │      [ o ]       │
        │       /|\        │            │       /|\        │            │       /|\        │
        │       / \        │            │       / \        │            │       / \        │
        │        │         │            │        │         │            │        │         │
        │        ▼ mg      │            │        ▼ mg      │            │        ▼ mg      │
        └──────────────────┘            └──────────────────┘            └──────────────────┘
           R = m(g + a)                    R = m(g - a)                    R = m(g - g) = 0
         Feels HEAVIER                   Feels LIGHTER                   WEIGHTLESSNESS
```

1. **Elevator at Rest or Moving with Uniform Velocity ($a = 0$)**:
   $$R - mg = 0 \implies \mathbf{R = mg} \quad (\text{Apparent weight equals true weight})$$
2. **Elevator Accelerating Upward with Acceleration $a$**:
   $$R - mg = ma \implies \mathbf{R = m(g + a)} \quad (\text{Person feels heavier})$$
3. **Elevator Accelerating Downward with Acceleration $a$ ($a < g$)**:
   $$mg - R = ma \implies \mathbf{R = m(g - a)} \quad (\text{Person feels lighter})$$
4. **Free Fall (Elevator Supporting Cable Snaps, $a = g$)**:
   $$R = m(g - g) = \mathbf{0} \quad (\text{Apparent weight becomes strictly ZERO})$$
   - The person experiences **Weightlessness**; their feet lose contact with the scale and they float freely.
5. **Elevator Accelerating Downward with $a > g$**:
   $$R = m(g - a) < 0$$
   - The person accelerates downward slower than the ceiling; they rise up and collide with the elevator ceiling!

---

## 3.4 Kepler's Three Laws of Planetary Motion

In the early 17th century, Johannes Kepler analyzed Tycho Brahe's astronomical observations to formulate the three fundamental laws governing planetary orbits:

```
                          Perihelion (Fastest speed)
                                    ●
                                   / \
                                  /   \
                                 /  ★  \
                                /   Sun \
                                \       /
                                 \     /
                                  \   /
                                    ●
                           Aphelion (Slowest speed)
```

### 1. Kepler's First Law: The Law of Orbits
> All planets revolve around the Sun in **elliptical orbits**, with the Sun situated at one of the two foci of the ellipse.

* **Perihelion**: The point of closest orbital approach to the Sun.
* **Aphelion**: The point of farthest distance from the Sun.

### 2. Kepler's Second Law: The Law of Areas
> The line connecting the planet to the Sun (radius vector) **sweeps out equal areas in equal intervals of time**; that is, the **areal velocity is constant**:
> $$\frac{dA}{dt} = \frac{L}{2m} = \text{Constant}$$

* **Physical Origin**: This law is a direct mathematical consequence of the **Conservation of Angular Momentum** ($\vec{L} = m \vec{r} \times \vec{v} = \text{constant}$), because gravitational attraction acts along the radial line (zero net torque, $\vec{\tau} = 0$).
* **Planetary Velocity Dynamics**:
  $$v_1 r_1 = v_2 r_2 \implies v \propto \frac{1}{r}$$
  - A planet moves **fastest at Perihelion** (closest to Sun).
  - A planet moves **slowest at Aphelion** (farthest from Sun).

### 3. Kepler's Third Law: The Law of Periods (Harmonic Law)
> The square of the orbital period of revolution ($T$) of a planet is directly proportional to the cube of the semi-major axis ($r$) of its elliptical orbit:

$$T^2 \propto r^3 \implies \frac{T_1^2}{T_2^2} = \frac{r_1^3}{r_2^3}$$

* **Consequence**: Planets situated farther from the Sun possess vastly longer orbital periods (Mercury takes 88 days; Earth takes 365.25 days; Neptune takes ~165 years).

---

## 3.5 Orbital Velocity & Escape Velocity Mechanics

### 1. Orbital Velocity of an Artificial Satellite ($v_o$)
To keep a satellite of mass $m$ in a stable circular orbit at height $h$ above Earth's surface, gravitational attraction must provide the exact required centripetal force:

$$\frac{m v_o^2}{R_E + h} = G \frac{M_E m}{(R_E + h)^2} \implies \mathbf{v_o = \sqrt{\frac{G M_E}{R_E + h}}}$$

For a satellite orbiting very close to Earth's surface ($h \ll R_E$):

$$v_o = \sqrt{\frac{G M_E}{R_E}} = \sqrt{g R_E}$$

Substituting $g = 9.8\text{ m/s}^2$ and $R_E = 6.4 \times 10^6\text{ m}$:

$$\mathbf{v_o \approx 7.92\text{ km/s} \approx 8\text{ km/s}}$$

* **Key Takeaway**: Satellite orbital velocity is **independent of satellite mass** (a 1-tonne satellite and a 10-gram bolt orbit with identical velocity at the same altitude).

### 2. Escape Velocity ($v_e$)
**Escape Velocity** is the minimum initial speed with which an object must be projected upward from a planetary surface so that it completely overcomes the gravitational pull and escapes to infinity ($E_{\text{total}} \ge 0$):

$$\frac{1}{2} m v_e^2 - \frac{G M_E m}{R_E} = 0 \implies \mathbf{v_e = \sqrt{\frac{2 G M_E}{R_E}} = \sqrt{2 g R_E}}$$

Substituting Earth's constants:

$$\mathbf{v_e = \sqrt{2 \times 9.8 \times 6.4 \times 10^6} \approx 11.2\text{ km/s}}$$

### The Invariant Ratio Between Escape Velocity and Orbital Velocity

$$\mathbf{v_e = \sqrt{2} \times v_o \approx 1.414 \times v_o}$$

> [!IMPORTANT]
> **High-Yield Examination Application**:  
> If the speed of an orbiting satellite close to Earth is increased by $\mathbf{41.4\%}$ (or its kinetic energy is doubled), its total energy becomes zero and it escapes Earth's gravitational field along a parabolic trajectory!

### Why the Moon Has No Atmosphere
* On the Moon: $M_M \approx \frac{1}{81} M_E$ and $g_M \approx \frac{1}{6} g_E \approx 1.63\text{ m/s}^2$.
* Moon's escape velocity: $v_{e(\text{Moon})} \approx \mathbf{2.38\text{ km/s}}$.
* Root-mean-square thermal speed ($v_{\text{rms}} = \sqrt{\frac{3kT}{m}}$) of gas molecules (oxygen, nitrogen, water vapor) at lunar daytime temperatures exceeds $2.38\text{ km/s}$.
* **Result**: Any atmospheric gas molecules easily exceeded escape velocity and leaked permanently into space billions of years ago.

---

## 3.6 Satellite Typologies & Orbital Architectures

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SATELLITE ORBITAL TYPES                         │
├───────────────────────────────────┬────────────────────────────────────┤
│ Geostationary Orbit (GEO)         │ Polar Orbit (Low Earth Orbit - LEO)│
├───────────────────────────────────┼────────────────────────────────────┤
│ Altitude: ~35,786 km (~36,000 km) │ Altitude: ~500 to 1,000 km         │
│ Orbital Period: Exactly 24 Hours  │ Orbital Period: ~90 to 100 Minutes │
│ Plane: Equatorial Plane Only      │ Plane: Passes over North/South Pole│
│ Apparent Motion: Stationary to    │ Apparent Motion: Scans successive  │
│ an observer on Earth              │ strips as Earth rotates beneath it │
│ Application: Telecommunications,  │ Application: Earth Observation,    │
│ Weather forecasting (INSAT)       │ Remote Sensing (IRS), Spy/Military │
└───────────────────────────────────┴────────────────────────────────────┘
```

### Characteristics of Geostationary Orbit (The Clarke Orbit)
Named in honor of Arthur C. Clarke who conceived satellite communications in 1945:
1. **Altitude**: Exactly $35,786\text{ km}$ above the equator.
2. **Orbital Period**: Exactly equal to Earth's sidereal rotation period ($23\text{ hr } 56\text{ min } 4\text{ sec} \approx 24\text{ hours}$).
3. **Direction of Motion**: Must revolve from **West to East** (synchronous with Earth's rotation).
4. **Orbital Plane**: Strictly coplanar with Earth's **Equatorial Plane** (inclination $i = 0^\circ$). If tilted, it is called a *Geosynchronous Orbit* (traces a figure-8 analemma pattern in the sky).
5. **Coverage**: Exactly **3 geostationary satellites** spaced $120^\circ$ apart are mathematically sufficient to provide continuous communication coverage across the entire globe (excluding the extreme polar caps).

---

## 3.7 Master Chapter Distinction Matrix

| Feature | Universal Gravitational Constant ($G$) | Acceleration Due to Gravity ($g$) |
| :--- | :--- | :--- |
| **Nature** | Universal fundamental physical scalar constant. | Vector acceleration produced by gravitational pull. |
| **Numerical Value**| $6.674 \times 10^{-11}\text{ N}\cdot\text{m}^2/\text{kg}^2$ everywhere. | $9.8\text{ m/s}^2$ (standard on Earth surface). |
| **Spatial Invariance**| Strictly constant across the entire universe. | Highly variable (changes with height, depth, latitude, and planet). |
| **Dimensional Formula**| $[M^{-1} L^3 T^{-2}]$ | $[M^0 L^1 T^{-2}]$ |
| **Dependence on Medium**| Zero dependence on intervening medium. | Zero dependence on falling body's mass. |

---

## 3.8 High-Yield Diagnostic Examination Traps

1. **The Moon's Weight Trap**:
   - *Trap*: "A person has mass 60 kg on Earth. What is their mass on the Moon?"
   - *Correction*: Their **mass remains strictly 60 kg**! Only their **weight** decreases to $\frac{1}{6}\text{th}$ ($W_{\text{Moon}} \approx 60 \times 1.63 \approx 98\text{ N}$).
2. **Escape Velocity Angle Trap**:
   - *Trap*: "To escape Earth's gravity, must a rocket be launched vertically at $90^\circ$?"
   - *Correction*: **No**. Escape velocity is a scalar energy threshold ($E \ge 0$). An object launched at **any angle** (ignoring atmospheric collision) with $v \ge 11.2\text{ km/s}$ will escape Earth's field!
3. **Satellite Free-Fall Trap**:
   - *Trap*: "Astronauts inside the International Space Station (ISS) float because gravity is zero at 400 km altitude."
   - *Correction*: **Deadly Fallacy!** At $400\text{ km}$ altitude, $g$ is still ~$\mathbf{8.7\text{ m/s}^2}$ (~$90\%$ of surface gravity). Astronauts float because the ISS and everything inside it are in a continuous, state of **free-fall around the Earth**, producing an apparent weight of zero ($R = m(g - g) = 0$).
4. **Earth Rotation Stoppage at Poles Trap**:
   - *Trap*: "If Earth stops rotating, weight increases at the poles."
   - *Correction*: At the poles, latitude $\lambda = 90^\circ$ and $\cos 90^\circ = 0$. Rotational centrifugal effects at the poles are already zero. Thus, weight at the poles **remains completely unchanged**; it increases only away from the poles, maximizing at the equator.
