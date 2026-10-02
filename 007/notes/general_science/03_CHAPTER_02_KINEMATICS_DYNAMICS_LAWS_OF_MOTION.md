<div style="page-break-before: always;"></div>

# CHAPTER 02: KINEMATICS, DYNAMICS, FRICTION & LAWS OF MOTION

**Canonical Sources Unified**:
* NCERT Class 9 Science (Chapter 8: Motion & Chapter 9: Force and Laws of Motion)
* NCERT Class 11 Physics (Part 1, Chapter 3: Motion in a Straight Line, Chapter 4: Motion in a Plane, Chapter 5: Laws of Motion)
* Halliday, Resnick & Walker, *Fundamentals of Physics* (Mechanics Core)
* Standard Competitive Exam Compendiums (UPSC CSE, RPSC RAS, SSC CGL Physics)

---

## 2.1 Kinematics: The Description of Motion Without Cause

### Rest vs. Motion: The Relativity of Observer Frame
An object is said to be at **rest** or in **motion** only relative to a chosen **Frame of Reference**:
* There is no such thing as "absolute rest" in the universe. A passenger seated inside a moving train is at rest relative to their co-passengers, but in rapid motion relative to a tree on the platform.

### Distance vs. Displacement

```
              Path A (Actual zig-zag trajectory traversed = Distance)
         . - - - - - - - - - - - - - - - - - - - - - - - - .
       /                                                     \
      A ●=====================================================● B
                    Path B (Shortest straight-line vector = Displacement)
```

| Parameter | Distance | Displacement |
| :--- | :--- | :--- |
| **Scientific Definition** | Total length of the actual path traversed between initial and final points. | Shortest directed straight-line distance from initial position to final position. |
| **Quantity Nature** | **Scalar** (Magnitude only). | **Vector** (Magnitude and unique direction). |
| **Sign & Values** | Always positive ($> 0$) for moving body; never zero or negative. | Can be **positive, negative, or zero**. |
| **Magnitude Relation** | $\text{Distance} \ge \vert\text{Displacement}\vert$ | $\frac{\vert\text{Displacement}\vert}{\text{Distance}} \le 1$ (Equality holds *only* in unidirectional straight-line motion). |
| **In a Closed Loop** | Positive (circumference $2\pi r$). | Strictly **Zero** (initial point = final point). |

### Speed vs. Velocity & Average Metrics
* **Speed ($v$)**: Rate of change of distance ($v = \frac{\text{Distance}}{\Delta t}$, SI: $\text{m/s}$, Scalar).
* **Velocity ($\vec{v}$)**: Rate of change of displacement ($\vec{v} = \frac{\text{Displacement}}{\Delta t}$, SI: $\text{m/s}$, Vector).
* **Average Speed vs. Average Velocity**:
  $$\text{Average Speed} = \frac{\text{Total Distance Traversed}}{\text{Total Time Taken}}$$
  $$\text{Average Velocity} = \frac{\text{Net Displacement}}{\text{Total Time Elapsed}}$$

> [!TIP]
> **High-Yield Exam Trap: The Two-Way Average Speed Formula**:  
> If an automobile travels from point $A$ to $B$ at speed $v_1$ and returns from $B$ to $A$ along the exact same path at speed $v_2$:
> - **Average Velocity** = Strictly **$0\text{ m/s}$** (net displacement is zero).
> - **Average Speed** is the **Harmonic Mean**, NOT arithmetic average:
>   $$v_{\text{avg}} = \frac{2 v_1 v_2}{v_1 + v_2}$$

### Acceleration: The Time Derivative of Velocity
Acceleration ($\vec{a}$) is the time rate of change of velocity:

$$\vec{a} = \frac{\Delta \vec{v}}{\Delta t} = \frac{\vec{v} - \vec{u}}{t} \quad [\text{SI Unit: } \text{m/s}^2, \text{ Dimensions: } [M^0 L^1 T^{-2}]]$$

* **Positive Acceleration**: Velocity increases in the direction of motion.
* **Negative Acceleration (Deceleration / Retardation)**: Velocity decreases over time (e.g., applying vehicle brakes).
* **Zero Acceleration**: Body moves with constant velocity in a straight line (uniform motion).
* **Crucial Insight**: A body can have zero velocity yet non-zero acceleration! At the highest point of a vertically projected ball, instantaneous velocity $v = 0$, but acceleration is $g = 9.8\text{ m/s}^2$ directed downward.

---

## 2.2 The Uniformly Accelerated Kinematic Equations

For motion along a straight line under **constant (uniform) acceleration** $a$:

$$\begin{aligned}
1. \quad & v = u + at \\
2. \quad & s = ut + \frac{1}{2}at^2 \\
3. \quad & v^2 = u^2 + 2as \\
4. \quad & s_n = u + \frac{a}{2}(2n - 1) \quad (\text{Distance traversed strictly in the } n\text{-th second})
\end{aligned}$$

Where:
* $u$ = Initial velocity ($\text{m/s}$)
* $v$ = Final velocity ($\text{m/s}$)
* $a$ = Constant acceleration ($\text{m/s}^2$)
* $t$ = Time elapsed ($\text{s}$)
* $s$ = Total displacement covered ($\text{m}$)

### Vertical Motion Under Earth's Gravity ($a = \pm g$)
Assuming upward direction as positive and downward as negative:
1. **Body Projected Vertically Upward with Initial Velocity $u$ ($a = -g$)**:
   - Maximum height reached: $H_{\text{max}} = \frac{u^2}{2g}$
   - Time of ascent: $t_a = \frac{u}{g}$
   - Total time of flight: $T = 2 t_a = \frac{2u}{g}$
   - Velocity upon returning to ground level: $v = -u$ (magnitude identical to projection speed).
2. **Body Dropped Freely from Rest ($u = 0$, $a = +g$)**:
   - Velocity after time $t$: $v = gt$
   - Velocity upon striking ground from height $h$: $v = \sqrt{2gh}$
   - Time taken to hit the ground: $t = \sqrt{\frac{2h}{g}}$ (Independent of mass!).

> [!IMPORTANT]
> **Galileo's Leaning Tower Principle: Mass Independence of Free Fall**:  
> In pure vacuum (zero air resistance), a feather and a heavy iron cannonball dropped from the same height strike the ground at the **exact same instant** with identical velocity ($v = \sqrt{2gh}$), because gravitational acceleration ($g$) is independent of the mass of the falling body. In atmospheric air, the feather falls slower solely due to **viscous air resistance / aerodynamic drag**.

---

## 2.3 Two-Dimensional Dynamics: Projectile & Circular Motion

### Projectile Motion (Parabolic Trajectory)
When an object is thrown into space with initial velocity $u$ at an angle $\theta$ to the horizontal, gravity acts only in the vertical direction ($a_y = -g$), while horizontal velocity remains constant ($u_x = u \cos\theta$ assuming zero air drag).

$$\begin{aligned}
\text{Time of Flight: } & T = \frac{2u \sin\theta}{g} \\
\text{Maximum Vertical Height: } & H_{\text{max}} = \frac{u^2 \sin^2\theta}{2g} \\
\text{Horizontal Range: } & R = \frac{u^2 \sin(2\theta)}{g}
\end{aligned}$$

> **Maximum Range Angle**: To achieve maximum horizontal range for a given launch speed, $\sin(2\theta) = 1 \implies 2\theta = 90^\circ \implies \mathbf{\theta = 45^\circ}$.  
> Maximum range: $R_{\text{max}} = \frac{u^2}{g} = 4 H_{\text{max}}$.
>
> **Complementary Angle Invariant**: For projection angles $\theta$ and $(90^\circ - \theta)$ (e.g., $30^\circ$ and $60^\circ$), the **horizontal range $R$ is identical**, although the maximum heights and flight times differ!

### Uniform Circular Motion: Centripetal vs. Centrifugal Force
When a particle moves along a circular path of radius $r$ with constant speed $v$:
* The magnitude of speed is constant, but the **direction of velocity continuously changes**. Hence, uniform circular motion is **inherently accelerated motion**.
* **Centripetal Acceleration**: Directed radially inward toward the center:
  $$a_c = \frac{v^2}{r} = \omega^2 r \quad (\text{where } \omega = \text{angular velocity})$$
* **Centripetal Force**: The real physical force pulling the body toward the center:
  $$F_c = \frac{m v^2}{r}$$
  - Earth orbiting Sun: Centripetal force provided by *Gravitational Attraction*.
  - Car turning on a flat circular road: Centripetal force provided by *Static Friction between tires and asphalt*.
  - Electron orbiting nucleus: Centripetal force provided by *Electrostatic Coulomb Force*.

```
                      [Centrifugal Force (Fictitious Inertial Force)]
                                     ▲ (Points Outward)
                                     │
             ════════════════════════●════════════════════════
             (Center of Circle)      │ (Points Inward)
                                     ▼
                      [Centripetal Force (Real Inward Force)]
```

* **Centrifugal Force**: A **pseudo-force (fictitious inertial force)** experienced by an observer located *inside* the rotating non-inertial frame of reference, directed radially outward with magnitude $\frac{mv^2}{r}$.
  - *Practical Applications*: Cream separator (denser milk components move outward, lighter cream stays near axis), Laboratory centrifuge, Washing machine spin dryer.

### Banking of Curved Roads
On flat roads, turning safely depends entirely on friction, which fails on wet or icy roads. Roads and railway tracks are curved with the outer edge raised above the inner edge by an angle $\theta$ (**Banking of Roads**):

$$\tan\theta = \frac{v^2}{rg} \implies v_{\text{safe}} = \sqrt{rg \tan\theta}$$

At this designed speed, the horizontal component of the normal reaction ($N \sin\theta$) provides the entire required centripetal force, eliminating reliance on tire friction.

---

## 2.4 Newton's Three Laws of Motion: The Foundation of Classical Dynamics

```
┌────────────────────────────────────────────────────────────────────────┐
│                      NEWTON'S LAWS OF MOTION                           │
├─────────────────────┬──────────────────────────┬───────────────────────┤
│ 1st Law (Inertia)   │ 2nd Law (Force & Mom.)   │ 3rd Law (Action/React)│
├─────────────────────┼──────────────────────────┼───────────────────────┤
│ Qualitative         │ Quantitative             │ Mutual Interaction    │
│ Definition of Force │ Measurement of Force     │ Nature of Force       │
│ Law of Inertia      │ F = dp/dt = ma           │ F_AB = - F_BA         │
│ (Galileo's legacy)  │ Impulse J = F · Δt       │ Equal & Opposite      │
└─────────────────────┴──────────────────────────┴───────────────────────┘
```

### 1. Newton's First Law: The Law of Inertia
> **Statement**: An object remains in its state of rest or uniform motion in a straight line unless acted upon by an unbalanced external force.

* **Inertia**: The inherent property of matter that resists any change in its state of rest or motion. **Mass is the direct quantitative measure of inertia** (more mass = more inertia).
* **Types of Inertia**:
  1. *Inertia of Rest*: 
     - When a stationary bus abruptly accelerates forward, passengers jerk **backward** (lower body moves with the bus floor, upper body stays at rest).
     - Dust particles fall off when a hanging carpet is beaten with a stick.
     - Fruits or dry leaves detach from tree branches when vigorously shaken.
  2. *Inertia of Motion*:
     - When a fast-moving bus suddenly applies brakes, passengers lurch **forward** (lower body halts, upper body continues moving forward).
     - An athlete runs some distance before taking a long jump to gain momentum.
  3. *Inertia of Direction*:
     - When a car takes a sharp left turn, passengers are thrown toward the right.
     - Sparks flying off a grinding stone move along the tangent to the rotating wheel.
     - Mudguards on bicycles prevent tangential mud projection onto the rider.

### 2. Newton's Second Law: The Quantitative Engine
> **Statement**: The time rate of change of linear momentum of a body is directly proportional to the applied force and takes place in the direction of the force.

Linear momentum ($\vec{p}$) is the total "quantity of motion" contained in a body:

$$\vec{p} = m \vec{v} \quad [\text{SI Unit: } \text{kg}\cdot\text{m/s}, \text{ Dimensions: } [M L T^{-1}]]$$

Mathematical derivation:

$$\vec{F} = \frac{d\vec{p}}{dt} = \frac{d(m\vec{v})}{dt} = m \frac{d\vec{v}}{dt} + \vec{v} \frac{dm}{dt}$$

For constant mass systems ($\frac{dm}{dt} = 0$):

$$\vec{F} = m \vec{a} \quad [\text{SI Unit: } \text{Newton (N)} = \text{kg}\cdot\text{m/s}^2]$$

> **The CGS Unit of Force: The Dyne**:
> $$1\text{ Newton} = 1\text{ kg} \times 1\text{ m/s}^2 = 10^3\text{ g} \times 10^2\text{ cm/s}^2 = 10^5\text{ Dynes}$$

### Impulse of a Force: Cushioning & Impact Mechanics
**Impulse ($\vec{J}$)** is the total effect of a large force acting for a very short duration:

$$\vec{J} = \vec{F} \times \Delta t = \Delta \vec{p} \quad [\text{SI Unit: } \text{N}\cdot\text{s} \text{ or } \text{kg}\cdot\text{m/s}]$$

$$\text{Applied Impact Force: } F = \frac{\Delta p}{\Delta t}$$

* **Why a cricketer pulls his hands backward while catching a ball**:  
  By pulling hands back, the fielder increases the time taken ($\Delta t$) to bring the ball's momentum to zero ($\Delta p$). Because $F \propto \frac{1}{\Delta t}$, increasing duration drastically reduces the impact force on the hands, preventing severe injury.
* **Other Everyday Applications of Impulse**:
  - Vehicles equipped with shock absorbers/springs to prolong impact time over road bumps.
  - High-jump athletes land on foam mattresses or loose sand pits rather than concrete floors.
  - Ceramic crockery wrapped in bubble wrap, hay, or shredded paper during transportation.

### 3. Newton's Third Law: Action and Reaction Pairs
> **Statement**: To every action, there is always an equal and opposite reaction; mutual forces of two bodies upon each other are always equal in magnitude and opposite in direction.

$$\vec{F}_{AB} = - \vec{F}_{BA}$$

> [!WARNING]
> **The Action-Reaction Cancellation Fallacy**:  
> *Trap*: "If action and reaction are equal and opposite, why don't they cancel each other out and produce zero motion?"  
> *Scientific Reality*: Action and reaction **act on TWO COMPLETELY DIFFERENT BODIES**, never on the same body! For forces to cancel each other, they must act simultaneously on the *exact same object*. Because they act on different bodies, motion occurs freely.

* **Everyday Examples**:
  - **Recoil of a Gun**: Gun exerts forward force on the bullet (action); bullet exerts equal backward force on the gun (recoil reaction).
  - **Walking on Ground**: Foot pushes the ground backward and downward; ground exerts equal forward reaction force on foot.
  - **Swimming**: Swimmer pushes water backward; water reaction propels swimmer forward.
  - **Rocket Propulsion Mechanics**: Expelling hot exhaust gases at high speed downward generates equal and opposite upward thrust.

---

## 2.5 Conservation of Linear Momentum & Rocket Propulsion

### Law of Conservation of Linear Momentum
> In an isolated system (where net external force is zero, $\sum \vec{F}_{\text{ext}} = 0$), the total linear momentum remains strictly constant over time:
> $$\sum \vec{p}_{\text{initial}} = \sum \vec{p}_{\text{final}}$$

### Recoil Velocity of a Firearm
Let mass of gun be $M$ and mass of bullet be $m$. Before firing, both are at rest ($\vec{p}_{\text{initial}} = 0$).  
After firing, bullet leaves with velocity $\vec{v}$ and gun recoils with velocity $\vec{V}$:

$$M\vec{V} + m\vec{v} = 0 \implies \vec{V} = -\frac{m}{M}\vec{v}$$

*Intuition*: Because the gun mass ($M$) is vastly greater than the bullet mass ($m$), the gun's recoil velocity ($V$) is far smaller than the bullet speed ($v$), though their momenta are equal and opposite.

### Rocket Propulsion as a Variable Mass System
A rocket is a variable mass system where fuel mass decreases continuously ($\frac{dm}{dt} < 0$).
* **Rocket Thrust ($F$)**:
  $$F = - u_{\text{rel}} \frac{dm}{dt}$$
  (where $u_{\text{rel}}$ is exhaust gas ejection speed relative to the rocket nozzle).
* **Tsiolkovsky Rocket Equation (Final Burnout Velocity)**:
  $$v = v_0 + u_{\text{rel}} \ln\left(\frac{m_0}{m_f}\right)$$
  (where $m_0$ is initial wet launch mass, $m_f$ is final dry structural mass).

---

## 2.6 Friction: The Contact Phenomenon

Friction is an electromagnetic contact force that opposes the relative motion (or impending relative motion) between two surfaces in contact.

```
       [STATIC FRICTION]       │       [KINETIC / SLIDING FRICTION]
  (Self-adjusting from 0 to f_s)│  (Constant once motion begins: f_k < f_s(max))
                               │
               f_s(max) = Limiting Friction (Peak)
                     /\
                    /  \──────────────────────── f_k = μ_k · N
                   /
                  /
                 /
  ──────────────/─────────────────────────────────────────────────► Applied Force
```

### Types of Friction
1. **Static Friction ($f_s$)**: Operates when an applied force tries to move an object, but no actual relative motion has begun. It is **self-adjusting**—it automatically balances the applied external force up to a maximum threshold.
2. **Limiting Friction ($f_s^{\text{max}}$)**: The maximum value of static friction just before the body begins to slide:
   $$f_s^{\text{max}} = \mu_s N$$
   (where $\mu_s$ is the coefficient of static friction, $N = mg$ is normal reaction force).
3. **Kinetic / Sliding Friction ($f_k$)**: Operates once actual relative sliding motion begins. It is slightly less than limiting friction:
   $$f_k = \mu_k N \quad (\mu_k < \mu_s)$$
4. **Rolling Friction ($f_r$)**: Operates when one body rolls over the surface of another (due to surface deformation).
   $$\mathbf{f_s^{\text{max}} > f_k > f_r}$$
   *Crucial Engineering Application*: Because rolling friction is orders of magnitude smaller than sliding friction, heavy machinery and vehicle wheel hubs use **ball bearings** to convert sliding friction into rolling friction.

### Angle of Friction & Angle of Repose
* **Angle of Friction ($\theta$)**: $\tan\theta = \mu_s$
* **Angle of Repose ($\alpha$)**: The minimum angle of an inclined plane at which an object placed on it just begins to slide down under gravity alone:
  $$\tan\alpha = \mu_s \implies \mathbf{\theta = \alpha}$$
  (The Angle of Friction is always equal to the Angle of Repose).

---

## 2.7 Master Chapter Distinction Matrix

| Parameter | Static Friction | Kinetic Friction | Rolling Friction |
| :--- | :--- | :--- | :--- |
| **State of Motion** | Relative rest (impending motion). | Body is actively sliding. | Body is rolling. |
| **Magnitude Nature** | **Self-adjusting** ($0 \le f_s \le \mu_s N$). | Constant for a given speed ($f_k = \mu_k N$). | Minimum value ($f_r = \mu_r \frac{N}{R}$). |
| **Coefficient Comparison**| Highest ($\mu_s$). | Intermediate ($\mu_k$). | Lowest ($\mu_r$). |
| **Everyday Example** | Pushing a heavy trunk that refuses to move. | Sled sliding across packed snow. | Wheel of a car rolling on asphalt with ball bearings. |

---

## 2.8 High-Yield Diagnostic Examination Traps

1. **The Tangential Inertia Fallacy**:
   - *Trap*: "When a stone whirled in a circle on a string is suddenly released, it flies radially outwards due to centrifugal force."
   - *Correction*: **False**. The stone flies away **tangentially** to the circle at that instant due to **Inertia of Direction**!
2. **Zero Acceleration Equals Zero Velocity Trap**:
   - *Trap*: "Can an object have acceleration when its velocity is zero?"
   - *Correction*: **Yes**. At the peak of a vertically thrown projectile, $v = 0$, but acceleration is non-zero ($a = -g = -9.8\text{ m/s}^2$).
3. **Equal Average Speed Trap**:
   - *Trap*: A car goes from A to B at $40\text{ km/h}$ and returns at $60\text{ km/h}$. The average speed is $(40+60)/2 = 50\text{ km/h}$.
   - *Correction*: **False**. Average speed is the harmonic mean:
     $$v_{\text{avg}} = \frac{2(40)(60)}{40+60} = \frac{4800}{100} = 48\text{ km/h}$$
4. **Third Law Internal Force Confusion**:
   - *Trap*: "A horse pulling a cart exerts force on the cart; the cart pulls the horse back with equal force. Hence, the system cannot move."
   - *Correction*: The motion of the horse-cart system is driven by the **external horizontal friction force of the ground on the horse's hooves**, which exceeds the friction resisting the cart wheels. Action and reaction forces act on different bodies.
