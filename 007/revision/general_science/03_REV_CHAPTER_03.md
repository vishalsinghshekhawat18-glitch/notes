# REVISION CHAPTER 03: GRAVITATION, PLANETARY MOTION & SATELLITE MECHANICS

## 60-Second Concept Retrieval Skeleton
* **Universal Law of Gravitation**: $F = G \frac{m_1 m_2}{r^2}$. $G = 6.674 \times 10^{-11}\text{ N}\cdot\text{m}^2/\text{kg}^2$ ($[M^{-1} L^3 T^{-2}]$). $G$ is invariant across all media/space.
* **Surface Gravity**: $g = \frac{G M}{R^2} \approx 9.8\text{ m/s}^2$ ($g_{\text{Moon}} \approx \frac{1}{6} g_{\text{Earth}} \approx 1.63\text{ m/s}^2$). Independent of falling mass!
* **Variations in $g$**:
  - Altitude: $g_h \approx g(1 - \frac{2h}{R})$ (Decreases with height).
  - Depth: $g_d = g(1 - \frac{d}{R})$ (Decreases with depth; strictly **$0$ at Earth's center**).
  - Shape: $R_{\text{poles}} < R_{\text{equator}} \implies \mathbf{g_{\text{poles}} > g_{\text{equator}}}$.
  - Rotation: $g' = g - \omega^2 R \cos^2\lambda$. If Earth stops spinning, $g$ increases at equator, **unchanged at poles**.
* **Elevator Dynamics**: Up with $a$: $R = m(g+a)$ (Heavier); Down with $a$: $R = m(g-a)$ (Lighter); Cable snaps ($a=g$): $R = 0$ (Weightlessness).
* **Kepler's Laws**:
  - 1st: Elliptical orbits with Sun at one focus.
  - 2nd: Equal areas in equal times ($\frac{dA}{dt} = \text{const}$); **Conservation of Angular Momentum** ($v \propto \frac{1}{r}$; fastest at Perihelion, slowest at Aphelion).
  - 3rd: Harmonic law $T^2 \propto r^3$.
* **Velocities**:
  - Orbital Velocity: $v_o = \sqrt{gR} \approx 8\text{ km/s}$ (Surface).
  - Escape Velocity: $v_e = \sqrt{2gR} \approx 11.2\text{ km/s}$ on Earth ($2.38\text{ km/s}$ on Moon $\rightarrow$ no atmosphere).
  - Relation: $\mathbf{v_e = \sqrt{2} v_o \approx 1.414 v_o}$ (+41.4% speed to escape).
* **Geostationary Satellites**: Altitude $35,786\text{ km}$; Period $24\text{ hours}$; West to East; Equatorial plane; 3 satellites cover the globe.

---

## 3-Minute Active Recall Flashcard Drills

| Flash Question | Target Rapid Retrieval Answer |
| :--- | :--- |
| **Q1: What is the apparent weight of a 70 kg person at the exact geographical center of Earth?** | Strictly **0 Newtons** (complete weightlessness), because $g_{\text{center}} = 0$, though mass remains $70\text{ kg}$. |
| **Q2: Why does an astronaut float inside the International Space Station (ISS)?** | NOT because gravity is zero ($g \approx 8.7\text{ m/s}^2$ at $400\text{ km}$), but because the station and astronaut are in a state of **continuous free fall** around Earth ($R = 0$). |
| **Q3: Which conservation law directly drives Kepler's Second Law of planetary areas?** | **Conservation of Angular Momentum** ($\vec{L} = \text{constant}$), because gravitational pull exerts zero external torque about the Sun ($\vec{\tau} = 0$). |
| **Q4: Why does the Moon lack a permanent atmosphere?** | Its low escape velocity ($2.38\text{ km/s}$) is lower than the root-mean-square thermal velocity of common gas molecules at lunar surface temperatures. |
| **Q5: By what percentage must an orbiting satellite's speed be increased to escape Earth's gravitational pull?** | By **$41.4\%$** ($v_e = \sqrt{2} v_o \approx 1.414 v_o$). |
| **Q6: Where on Earth does a pendulum clock run fastest?** | At the **Poles**, where $g$ is maximum ($T = 2\pi\sqrt{l/g}$, so higher $g$ yields smaller period $T$, ticking faster). |

---

## Diagnostic Test-Maker Trap Matrix

| Concept | The Deceptive Trap | The Ironclad Scientific Fact |
| :--- | :--- | :--- |
| **Mass on the Moon** | "If a body has mass 60 kg on Earth, what is its mass on the Moon? (a) 10 kg (b) 60 kg". | Its **mass is strictly 60 kg** everywhere in the universe. Only its **weight** decreases to $\sim 10\text{ kg-wt}$ ($\sim 98\text{ N}$). |
| **Earth Rotation Halt** | "If Earth stops spinning, weight at the North Pole increases." | At the North Pole, $\cos 90^\circ = 0$, so centrifugal reduction is already zero. Weight at the poles **remains completely unchanged**! |
| **Escape Velocity Angle** | "A rocket must be fired at $90^\circ$ vertically to escape Earth." | Escape velocity ($11.2\text{ km/s}$) is a **scalar energy barrier**; launching at ANY angle above the horizon achieves escape into space. |
| **Universal Constant $G$** | "Value of $G$ is higher inside water than in air." | $G$ is an immutable universal constant ($6.674 \times 10^{-11}\text{ N}\cdot\text{m}^2/\text{kg}^2$); it has **zero dependence on the intervening medium**. |
