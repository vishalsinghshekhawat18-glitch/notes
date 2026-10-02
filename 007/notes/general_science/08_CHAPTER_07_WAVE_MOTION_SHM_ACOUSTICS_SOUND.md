<div style="page-break-before: always;"></div>

# CHAPTER 07: WAVE MOTION, SIMPLE HARMONIC MOTION & ACOUSTICS (SOUND)

**Canonical Sources Unified**:
* NCERT Class 9 Science (Chapter 12: Sound — Nature, Speed, Characteristics, Echo, Ultrasound, Ear)
* NCERT Class 11 Physics (Part 2, Chapter 14: Oscillations & Chapter 15: Waves)
* Halliday, Resnick & Walker, *Fundamentals of Physics* (Acoustic Mechanics & Oscillatory Dynamics)
* Standard Competitive Examination Compendiums (UPSC CSE, State PSCs, SSC CGL)

---

## 7.1 Simple Harmonic Motion (SHM) & Oscillations

### Periodic vs. Oscillatory Motion
* **Periodic Motion**: Any motion that repeats itself at regular, equal intervals of time (e.g., revolution of Earth around Sun, rotation of clock hands).
* **Oscillatory (Vibratory) Motion**: A specialized periodic motion in which a body moves **to-and-fro (back and forth)** about a fixed **mean position** (equilibrium point).  
  *Maxim*: *"All oscillatory motions are periodic, but all periodic motions are NOT oscillatory"* (Planetary revolution is periodic but not oscillatory).
* **Simple Harmonic Motion (SHM)**: The simplest and most fundamental form of oscillatory motion, in which the restoring force ($F$) acting on the particle is directly proportional to its displacement ($x$) from the mean position and always directed toward the mean position:

$$F = -k x \implies m a = -k x \implies \mathbf{a = -\omega^2 x}$$

```
                Left Extreme (-A)         Mean Position (x=0)        Right Extreme (+A)
                      ●───────────────────────────┼───────────────────────────●
                   Restoring Force F ────────►    │    ◄──────── Restoring Force F
                   PE = Max (1/2 kA²)             │    PE = Max (1/2 kA²)
                   KE = 0, Speed v = 0            │    KE = 0, Speed v = 0
                   Acceleration = Max (ω²A)       │    Acceleration = Max (ω²A)
                                                  │
                                             KE = Max (1/2 m v_max²)
                                             PE = 0 (or Min)
                                             Speed v_max = ωA
                                             Acceleration a = 0
```

### The Simple Pendulum: Mechanics & Time Period
A small heavy mass (bob) suspended from a frictionless, rigid support by an inextensible, weightless string of length $l$:

$$T = 2\pi \sqrt{\frac{l}{g}}$$

Where:
* $T$ = Time period for one complete oscillation ($\text{s}$).
* $l$ = Effective length of pendulum from suspension point to center of gravity of bob.
* $g$ = Local acceleration due to gravity ($\text{m/s}^2$).

> [!IMPORTANT]
> **High-Yield Invariants of the Simple Pendulum**:
> 1. **Mass Independence**: The time period $T$ is **strictly independent of the mass or material of the bob**! A pendulum made of lead, hollow plastic, or gold oscillates with the exact same time period if length $l$ is identical.
> 2. **Girl Swinging on a Swing Problem**:
>    - A girl is sitting on a swing. If she **stands up**, her Center of Gravity (CG) rises, effectively **shortening the pendulum length ($l \downarrow$)**. Because $T \propto \sqrt{l}$, the time period **decreases** (the swing oscillates faster!).
>    - If another girl sits beside her, total mass doubles, but $l$ and $g$ remain unchanged. Hence, **time period remains completely unchanged**!
> 3. **Pendulum Clocks in Summer vs. Winter**:
>    - In **Summer**, high temperatures cause the metal pendulum rod to expand ($\Delta l = l \alpha \Delta T > 0$). Length increases ($l \uparrow \implies T \uparrow$), so each tick takes longer than a second; **the clock loses time (runs slow)**!
>    - In **Winter**, the rod contracts ($l \downarrow \implies T \downarrow$); each tick is faster; **the clock gains time (runs fast)**!
> 4. **Pendulum Clock at the Moon / In an Elevator**:
>    - Taken to the Moon ($g_{\text{Moon}} \approx g/6$): $g \downarrow \implies T \uparrow$. The clock ticks very slowly ($T_{\text{Moon}} = \sqrt{6} T_{\text{Earth}} \approx 2.45\times$).
>    - In a Free-Falling Elevator ($g_{\text{eff}} = 0$): $T = 2\pi\sqrt{l/0} = \infty$. The pendulum ceases to oscillate entirely!
> 5. **Second's Pendulum**: A pendulum whose time period is exactly **2 seconds** (1 second for tick, 1 second for tock). On Earth's surface, its length is:
>    $$l = \frac{g T^2}{4\pi^2} = \frac{9.8 \times 2^2}{4 \times (3.1416)^2} \approx \mathbf{0.993\text{ metres} \approx 1\text{ metre} = 100\text{ cm}}$$

---

## 7.2 Wave Fundamentals: Transverse vs. Longitudinal Waves

A **Wave** is a self-propagating disturbance that transports **energy and momentum** through space or a material medium without transporting physical matter.

$$\mathbf{v = f \lambda = \frac{\lambda}{T}}$$

Where $v$ = wave propagation speed ($\text{m/s}$), $f$ = frequency ($\text{Hz}$), $\lambda$ = wavelength ($\text{m}$), $T$ = time period ($\text{s}$).

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MECHANICAL WAVE TYPOLOGY                        │
├───────────────────────────────────┬────────────────────────────────────┤
│ Transverse Waves                  │ Longitudinal Waves                 │
├───────────────────────────────────┼────────────────────────────────────┤
│ Particles oscillate PERPENDICULAR │ Particles oscillate PARALLEL       │
│ to wave propagation direction     │ to wave propagation direction      │
│ Propagates as Crests & Troughs    │ Propagates as Compressions &       │
│                                   │ Rarefactions                       │
│ Requires Shearing Elasticity      │ Requires Volumetric Elasticity     │
│ (Propagates ONLY in SOLIDS &      │ (Propagates in SOLIDS, LIQUIDS,    │
│ liquid surfaces; NEVER in gases)  │ and GASES)                         │
│ Can be POLARIZED                  │ CANNOT be polarized                │
│ Ex: Vibrating guitar string,      │ Ex: Sound waves in air, compression│
│ ripples on water surface          │ waves in a coiled slinky spring    │
└───────────────────────────────────┴────────────────────────────────────┘
```

> [!WARNING]
> **The Polarization Diagnostic Test**:  
> Light can be polarized because it is an electromagnetic **transverse wave**. Sound in air **CANNOT be polarized** under any circumstances because it is a **longitudinal wave**!

---

## 7.3 The Physics of Sound Waves

### Nature of Sound
Sound is a **mechanical, longitudinal wave** that requires a material medium to propagate.
* **Vacuum Test (Bell Jar Experiment)**: An electric bell ringing inside a sealed glass bell jar becomes completely inaudible as air is evacuated via a vacuum pump. **Sound CANNOT travel through vacuum!** (In outer space, astronauts must communicate via radio electromagnetic waves).

### Propagation Mechanics: Compressions & Rarefactions
When a tuning fork prong vibrates forward, it pushes air molecules together, creating a region of high density and high pressure called a **Compression ($C$)**. When the prong moves back, air molecules expand into a region of low density and low pressure called a **Rarefaction ($R$)**.

```
    Vibrating Prong ──►  |||||||||   | | | |   |||||||||   | | | |   |||||||||
                         Comp (C)    Rare (R)  Comp (C)    Rare (R)  Comp (C)
                         High P/ρ    Low P/ρ   High P/ρ    Low P/ρ   High P/ρ
```

### Speed of Sound in Different Media
Newton originally formulated the speed of sound as $v = \sqrt{\frac{B}{\rho}}$ assuming isothermal conditions. Laplace corrected this by recognizing sound compressions are so rapid that no heat exchange occurs (**adiabatic process**):

$$\mathbf{v = \sqrt{\frac{\gamma P}{\rho}} = \sqrt{\frac{\gamma R T}{M}}}$$

(where $\gamma = C_p/C_v$ is adiabatic index, $M$ is molar mass).

* **Media Dependency Hierarchy**: Because solids have enormous bulk elasticity ($B$) compared to liquids and gases:
  $$\mathbf{v_{\text{solids}} > v_{\text{liquids}} > v_{\text{gases}}}$$
  - Speed of sound in **Dry Air ($0^\circ\text{C}$)**: $\approx \mathbf{332\text{ m/s}}$ ($343\text{ m/s}$ at $20^\circ\text{C}$).
  - Speed of sound in **Distilled Water ($20^\circ\text{C}$)**: $\approx \mathbf{1,482\text{ m/s}}$ (Over 4 times faster than air!).
  - Speed of sound in **Seawater**: $\approx \mathbf{1,531\text{ m/s}}$.
  - Speed of sound in **Steel / Iron**: $\approx \mathbf{5,130\text{ m/s}}$ (Over 15 times faster than air!).
  - Speed of sound in **Aluminum**: $\approx \mathbf{6,420\text{ m/s}}$.

---

### Environmental Factors Affecting the Speed of Sound in Air

| Parameter | Effect on Speed of Sound ($v$) | Exact Physical Mechanism |
| :--- | :--- | :--- |
| **Temperature ($T$)** | **Increases** ($v \propto \sqrt{T_{\text{Kelvin}}}$) | Speed increases by **$+0.61\text{ m/s}$ for every $1^\circ\text{C}$ rise** in air temperature. Sound travels faster on a hot summer day than in winter. |
| **Humidity (Moisture)** | **Increases** | Water vapor ($\text{H}_2\text{O}$, molar mass $18$) is lighter than dry air ($\text{N}_2 + \text{O}_2$, effective molar mass $29$). Moist humid air is **less dense** than dry air ($\rho_{\text{moist}} < \rho_{\text{dry}}$). Since $v \propto \frac{1}{\sqrt{\rho}}$, **sound travels faster in rainy/humid air** (train whistles are heard over greater distances at night/in rain). |
| **Pressure ($P$)** | **Zero Effect (Completely Independent)** | At constant temperature, increasing pressure compresses gas, increasing density in exact proportion ($\frac{P}{\rho} = \text{constant}$). Hence, **barometric pressure changes have ZERO effect on sound speed**! |
| **Wind Velocity ($w$)** | Increases or Decreases | In the direction of wind: $v' = v + w$; Against the wind: $v' = v - w$. |
| **Frequency / Wavelength**| **Zero Effect** | Sound waves of all frequencies (bass or treble) travel at the exact same speed in a homogeneous medium. |

---

## 7.4 The Three Perceptual Characteristics of Sound

```
┌────────────────────────────────────────────────────────────────────────┐
│                   CHARACTERISTICS OF AUDIBLE SOUND                     │
├─────────────────────┬──────────────────────────┬───────────────────────┤
│ Loudness (Intensity)│ Pitch (Shrillness)       │ Quality (Timbre)      │
├─────────────────────┼──────────────────────────┼───────────────────────┤
│ Amplitude of Wave   │ Frequency of Wave        │ Waveform / Harmonics  │
│ I ∝ A²              │ High f = Shrill (Sharp)  │ Distinguishes notes of│
│ Unit: Decibel (dB)  │ Low f = Grave (Dull/Bass)│ same pitch & loudness │
│ Sensation in ear    │ Female voice > Male voice│ Guitar vs. Flute note │
└─────────────────────┴──────────────────────────┴───────────────────────┘
```

### 1. Loudness vs. Intensity
* **Intensity ($I$)**: Objective physical measure; the acoustic energy passing perpendicularly through a unit surface area per unit time ($I = \frac{P}{A}$, $\text{SI Unit: W/m}^2$).
  $$I \propto A^2 \quad (\text{Directly proportional to the square of amplitude } A)$$
* **Loudness ($L$)**: Subjective psychological sensation in the human auditory cortex, obeying the **Weber-Fechner Law** ($L \propto \log I$). Measured in **Decibels ($\text{dB}$)**:
  $$\beta (\text{dB}) = 10 \log_{10}\left(\frac{I}{I_0}\right)$$
  (where $I_0 = 10^{-12}\text{ W/m}^2$ is the threshold of human hearing at $1000\text{ Hz}$).

#### Decibel Scale Benchmarks
* **$0\text{ dB}$**: Absolute threshold of human hearing.
* **$20\text{--}30\text{ dB}$**: Quiet whisper / Rustling dry leaves.
* **$40\text{--}60\text{ dB}$**: Normal conversational speech.
* **$80\text{ dB}$**: Busy street traffic / Vacuum cleaner (Threshold of chronic hearing damage if exposed long-term).
* **$120\text{ dB}$**: Rock concert / Thunderclap (Threshold of human physical pain).
* **$140\text{--}150\text{ dB}$**: Jet aircraft engine taking off at close range (Rupture of eardrum).

### 2. Pitch (Shrillness)
The perceptual attribute that classifies a sound as "sharp/shrill" or "grave/dull/bass," determined strictly by **Frequency ($f$)**:
* **High Frequency $\implies$ High Pitch (Shrill)**: Buzzing of a mosquito, female voice, baby crying, whistle.
* **Low Frequency $\implies$ Low Pitch (Grave / Bass)**: Roar of a lion, male voice, beating of a bass drum.
* *Exam Paradox*: The roar of a lion is immensely loud (huge amplitude) but has low pitch; the buzzing of a mosquito has low loudness (tiny amplitude) but very high pitch!

### 3. Quality (Timbre)
The acoustic signature that enables the human ear to distinguish between sounds produced by two different musical instruments (e.g., a violin and a flute) even when playing at the **identical loudness and identical pitch**. It is determined by the **number and relative amplitudes of overtones and harmonics (the shape of the acoustic waveform)**.

---

## 7.5 Acoustic Spectra: Infrasound, Audible & Ultrasound

```
            INFRASONIC                 AUDIBLE SPECTRUM                 ULTRASONIC
      ◄─────────────────────|════════════════════════════════════|─────────────────────►
           f < 20 Hz                      20 Hz to 20,000 Hz                  f > 20,000 Hz (20 kHz)
      Earthquake shockwaves         Normal Human Hearing Range          Bats, Dolphins, Dogs
      Whales, Elephants, Rhinos                                         SONAR, Medical Ultrasound
```

### 1. Infrasonic Sound ($f < 20\text{ Hz}$)
Frequencies below the human auditory perception threshold:
* Generated by massive physical disturbances: **Earthquake seismic waves (P-waves)**, volcanic eruptions, ocean tsunamis, avalanches.
* Biological detection: **Elephants, whales, and rhinoceroses** communicate over vast distances using infrasound (~$5\text{--}15\text{ Hz}$). Animals often exhibit restless behavior minutes prior to major earthquakes because they perceive the preceding infrasonic ground tremors.

### 2. Ultrasonic Sound ($f > 20,000\text{ Hz} = 20\text{ kHz}$)
Frequencies above the upper limit of human hearing:
* Produced by quartz crystals via the **Piezoelectric Effect** or magnetostriction.
* Biological detection: **Bats, dolphins, and porpoises** emit ultrasound for echolocation navigation and hunting. **Dogs** can hear ultrasound up to $40\text{--}50\text{ kHz}$ (Galton's Silent Dog Whistle).
* **Industrial & Medical Applications**:
  1. **Ultrasonography (USG / Sonography)**: Safe diagnostic imaging of internal organs (liver, kidneys, fetus in womb) using acoustic reflection without harmful ionizing radiation.
  2. **Echocardiography (ECG/ECHO)**: Ultrasonic beam mapped across heart valves to assess cardiac hemodynamics.
  3. **Lithotripsy**: High-energy focused ultrasonic shockwaves pulverize kidney stones into fine sand, passed harmlessly in urine.
  4. **Non-Destructive Testing (NDT)**: Detecting microscopic internal cracks and flaws inside steel bridges, airplane wings, and railway tracks.
  5. **Ultrasonic Cleaning**: Scrubbing delicate jewelry, intricate watch mechanisms, and surgical instruments immersed in cleaning solvent.

---

## 7.6 Reflection of Sound: Echo, Reverberation & SONAR

### 1. Echo: The Discrete Reflection
An **Echo** is the distinct repetition of the original sound caused by reflection from a distant, rigid obstacle (cliff, tall building, mountain wall).

#### Derivation of Minimum Distance for Echo Perception
The human auditory cortex retains the impression of any sound sensation for approximately **$0.1\text{ second}$ ($\frac{1}{10}\text{th of a second}$)** (**Persistence of Hearing**). For an echo to be distinguished as a separate discrete sound, the reflected wave must arrive at the listener's ear at least $0.1\text{ s}$ after the original emission:

$$\text{Total Round-Trip Distance} = 2d = v \times t$$

At standard room temperature ($20^\circ\text{C}$), speed of sound in air is $v \approx 344\text{ m/s}$:

$$2d = 344\text{ m/s} \times 0.1\text{ s} = 34.4\text{ metres} \implies \mathbf{d_{\text{min}} = \frac{34.4}{2} = \mathbf{17.2\text{ metres}}}$$

*(At $0^\circ\text{C}$ where $v = 332\text{ m/s}$, minimum distance is $d_{\text{min}} = \mathbf{16.6\text{ metres}}$).*

### 2. Reverberation
The persistence of sound in an enclosed hall as a result of **multiple repeated reflections** from walls, ceiling, and floor even after the sound source has stopped.
* If reverberation time is excessive, syllables overlap into an unintelligible blur.
* **Acoustic Design of Auditoriums & Cinema Halls**:
  - Ceilings are curved so sound reflects uniformly to every seat in the hall.
  - Walls are covered with **porous sound-absorbing materials** (perforated acoustic tiles, compressed fiberglass, heavy curtains, carpets).
  - Seats are upholstered with soft, porous fabric to absorb acoustic reflections.

### 3. SONAR (*Sound Navigation and Ranging*)
Used on naval surface ships and submarines to detect underwater hazards, shipwrecks, enemy submarines, and map the seabed bathymetry.

```
       Ship Surface Transmitter [ ▼ ] ──► Ultrasonic Pulse ──► Sea Floor / Submarine
                                [ ▲ ] ◄── Reflected Echo   ◄── (Depth d)
       Ship Surface Receiver
```

$$\mathbf{2d = v \times t \implies d = \frac{v \times t}{2}}$$

(where $v \approx 1,500\text{ m/s}$ is the speed of ultrasonic waves in seawater, and $t$ is the elapsed round-trip time between transmission and reception).

---

## 7.7 The Doppler Effect in Sound

Discovered by Christian Doppler (1842):
> **The Doppler Effect**: The apparent shift in the perceived frequency (pitch) of a wave when there is relative motion between the source of sound and the observer:

$$f' = f_0 \left(\frac{v \pm v_o}{v \mp v_s}\right)$$

```
        Approaching Siren (v_s ──►)             Receding Siren (◄── v_s)
        Wavelengths compressed (λ ↓)            Wavelengths stretched (λ ↑)
        Perceived Pitch RISES (f' > f_0)        Perceived Pitch DROPS (f' < f_0)
        (High-pitched scream)                   (Dull, low-pitched drone)
```

* **When Source & Observer Approach Each Other**: The ear intercepts more wave crests per second $\implies$ **Apparent Frequency Increases ($f' > f_0$)**; sound appears more shrill.
* **When Source & Observer Recede from Each Other**: The ear intercepts fewer wave crests per second $\implies$ **Apparent Frequency Decreases ($f' < f_0$)**; sound appears deeper and lower-pitched.
* **Everyday Examples**:
  - The piercing, high-pitched horn of an approaching high-speed express train abruptly drops into a low-frequency drone the instant the engine rushes past the platform observer.
  - **Police Speed Guns (RADAR / LIDAR)**: Direct microwave/laser beam at a moving car; measured Doppler frequency shift calculates vehicle velocity to detect speeding.

### Sonic Boom & Mach Number
* **Mach Number**: The ratio of the speed of an object ($v_{\text{object}}$) to the speed of sound in the surrounding medium ($v_{\text{sound}}$):
  $$\text{Mach Number} = \frac{v_{\text{object}}}{v_{\text{sound}}}$$
  - **Subsonic**: $\text{Mach} < 1$
  - **Transonic**: $\text{Mach} \approx 1$
  - **Supersonic**: $1 < \text{Mach} < 5$ (Fighter jets, supersonic cruise missiles like BrahMos at Mach 2.8).
  - **Hypersonic**: $\text{Mach} \ge 5$ (ICBMs, hypersonic glide vehicles).
* **Sonic Boom**: When an aircraft flies faster than the speed of sound ($\text{Mach} > 1$), it outruns its own acoustic disturbance, forming a conical high-pressure shockwave (**Mach Cone**). When this trailing shockwave reaches the ground, observers hear an explosive double-bang (**Sonic Boom**) powerful enough to shatter glass window panes.

---

## 7.8 Anatomy of the Human Ear (Acoustic Transduction)

```
        OUTER EAR                 MIDDLE EAR                   INNER EAR
   [Pinna] ──► [Ear Canal] ──► [Eardrum] ──► [Ossicles: M-I-S] ──► [Cochlea] ──► Auditory Nerve
                                Tympanic     Malleus (Hammer)      Fluid & Hair     To Brain
                                Membrane     Incus (Anvil)         Cells (Cochlear
                                             Stapes (Stirrup)      Transduction)
```

1. **Outer Ear**:
   - **Pinna**: The outer cartilaginous funnel that collects ambient sound waves.
   - **Auditory Canal**: Channels acoustic vibrations to the eardrum.
2. **Middle Ear (Mechanical Amplification)**:
   - **Tympanic Membrane (Eardrum)**: Delicate taut membrane that vibrates in sympathy with compressions and rarefactions.
   - **The Three Ear Ossicles**: **Malleus (Hammer)**, **Incus (Anvil)**, and **Stapes (Stirrup)**.
     - *Key Fact*: The **Stapes** is the **smallest and lightest bone in the human body**!
     - *Function*: These three lever-like bones act as a mechanical amplifier, **increasing acoustic pressure by ~20 to 30 times** before delivering force to the oval window of the inner ear.
   - **Eustachian Tube**: Connects the middle ear cavity to the pharynx; equalizes air pressure across the two sides of the eardrum (pops during airplane takeoff).
3. **Inner Ear (Neural Transduction)**:
   - **Cochlea**: A snail-shell-like coiled organ filled with fluid (perilymph/endolymph) containing the **Organ of Corti** with microscopic sensory hair cells. Fluid pressure waves bend the hair cells, converting mechanical oscillations into electrical nerve impulses.
   - **Auditory Nerve**: Transmits electrical nerve impulses to the brain's temporal lobe.
   - **Semicircular Canals**: Three fluid-filled orthogonal loops responsible for **dynamic body balance and equilibrium** (unrelated to hearing).

---

## 7.9 Master Chapter Distinction Matrix

| Feature | Transverse Waves | Longitudinal Waves |
| :--- | :--- | :--- |
| **Particle Oscillation** | **Perpendicular** ($\perp$) to propagation direction. | **Parallel** ($\parallel$) to propagation direction. |
| **Morphology** | Formed of **Crests and Troughs**. | Formed of **Compressions and Rarefactions**. |
| **Medium Requirement** | Requires shear elasticity (Solids, liquid surfaces). | Requires volume elasticity (Solids, liquids, gases). |
| **Polarization** | **Can be Polarized** (Light, radio, EM waves). | **CANNOT be Polarized** (Sound in fluids). |
| **Everyday Example** | Light waves, vibrating violin string, water ripples. | Sound waves in air, ultrasound in body tissues. |

---

## 7.10 High-Yield Diagnostic Examination Traps

1. **The Sound in Vacuum Fallacy**:
   - *Trap*: "Astronauts on the Moon speak to each other directly because lunar gravity exists."
   - *Correction*: **Zero sound propagates on the Moon!** The Moon has no atmosphere (vacuum). Sound requires a material medium. Astronauts communicate via **VHF/UHF radio electromagnetic waves**, which travel freely through vacuum.
2. **Pressure and Sound Speed Trap**:
   - *Trap*: "If atmospheric pressure doubles at constant temperature, the speed of sound doubles."
   - *Correction*: **Completely False!** Speed of sound in a gas is **independent of pressure** at constant temperature, because density increases in identical proportion ($\frac{P}{\rho} = \text{constant}$).
3. **Minimum Echo Distance Trap**:
   - *Trap*: "The minimum distance between source and obstacle for an echo is $34.4\text{ metres}$."
   - *Correction*: The **round-trip distance** is $34.4\text{ m}$; hence the one-way distance between speaker and wall is **$17.2\text{ metres}$** (at $20^\circ\text{C}$).
4. **Pendulum Mass Fallacy**:
   - *Trap*: "Replacing a wooden pendulum bob with an iron bob of identical diameter doubles its period."
   - *Correction*: Period $T = 2\pi\sqrt{l/g}$ is **strictly independent of the mass of the bob**. Time period remains 100% unchanged!
