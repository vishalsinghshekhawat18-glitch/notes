# REVISION CHAPTER 09: ELECTROSTATICS, CAPACITANCE & ELECTRICITY

## 60-Second Concept Retrieval Skeleton
* **Charge**: $q = \pm ne$ ($e = 1.602 \times 10^{-19}\text{ C}$). $1\text{ Coulomb} = 6.25 \times 10^{18}\text{ electrons}$.
* **Coulomb's Law**: $F = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r^2}$ ($k = 9 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2$). Dielectric $K$ lowers force ($F' = F/K$; water $K \approx 81$).
* **Potential & Capacitor**: $V = W/q$ (Volt); Capacitor $C = Q/V$ (Farad); Energy $U = \frac{1}{2}CV^2$.
* **Current & Drift**: $I = dq/dt$ (Ampere, **Scalar**). Drift speed $v_d \approx 0.1\text{ mm/s}$ (EM signal travels near speed of light $c$).
* **Ohm's Law**: $V = IR$. Resistance $R = \rho \frac{l}{A}$.
  - Stretched wire: Length $n$-times $\implies R_{\text{new}} = \mathbf{n^2 R}$ (Stretching to $2\times$ length yields **$4R$**).
  - Temperature: Metals $R \uparrow$ with Temp; Semiconductors $R \downarrow$ with Temp.
  - Superconductors: $R = 0$ below critical temp $T_c$ (Mercury at $4.2\text{ K}$).
* **Circuits**:
  - Series: Current same, $R_{\text{eq}} = R_1 + R_2$.
  - Parallel: Voltage same ($220\text{ V}$), $\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2}$. **All domestic wiring is PARALLEL**.
* **Joule Heating & Power**: $H = I^2 R t$; $P = VI = I^2 R = \frac{V^2}{R}$.
  - Heating elements: **Nichrome** (High resistivity + High melting point $\sim 1400^\circ\text{C}$).
  - Bulb filament: **Tungsten** (Highest melting point $\sim 3422^\circ\text{C}$); Filled with **Argon/Nitrogen**.
  - **Bulb Brightness Paradox**: In parallel (home), **100W glows brighter**; in series, **25W glows brighter** ($R_{25\text{W}} > R_{100\text{W}}$)!
* **Safety**: Fuse wire (Tin-Lead alloy $63:37$) has **HIGH resistance and LOW melting point**, wired in **SERIES with LIVE wire**. Earthing (green wire) prevents casing shocks.

---

## 3-Minute Active Recall Flashcard Drills

| Flash Question | Target Rapid Retrieval Answer |
| :--- | :--- |
| **Q1: How many electrons make up exactly 1 Coulomb of negative electric charge?** | Exactly **$6.25 \times 10^{18}\text{ electrons}$** ($n = 1 / 1.602 \times 10^{-19}$). |
| **Q2: If a wire of resistance R is stretched to double its original length, what is its new resistance?** | **$4R$** ($n^2 R = 2^2 R$), because doubling length halves cross-sectional area under constant volume. |
| **Q3: What are the two mandatory physical properties of an electric fuse wire?** | **High Electrical Resistance** and a **strictly LOW Melting Point** (made of Tin-Lead alloy). |
| **Q4: Why does a 25W bulb glow brighter than a 100W bulb when connected in series?** | Resistance is inversely proportional to wattage ($R \propto 1/P$), so $R_{25\text{W}} > R_{100\text{W}}$. In series, current is identical, so $P_{\text{dissipated}} = I^2R$ is greater for the 25W bulb. |
| **Q5: Why do household electrical circuits strictly use parallel wiring rather than series?** | Parallel wiring provides identical operating voltage ($220\text{ V}$) to each socket, allows independent switching, and prevents entire circuit failure if one appliance fails. |
| **Q6: How does increasing temperature affect the electrical resistance of copper vs. silicon?** | In **copper** (metal conductor), resistance **increases** ($\alpha > 0$); in **silicon** (semiconductor), resistance **decreases** ($\alpha < 0$). |

---

## Diagnostic Test-Maker Trap Matrix

| Concept | The Deceptive Trap | The Ironclad Scientific Fact |
| :--- | :--- | :--- |
| **Fuse Wire Properties** | "A fuse should have low resistance and high melting point." | A fuse must have **high resistance** (to generate heat rapidly via $I^2R$) and a **LOW melting point** (to melt quickly and break the live circuit). |
| **Electron Drift vs Light** | "Electrons travel at the speed of light from switch to bulb." | Electrons drift at an imperceptible **$0.1\text{ mm/s}$**; the **electromagnetic field** propagates through the wire at the speed of light ($c$). |
| **Wire Stretching** | "Stretching a wire to double length doubles resistance to $2R$." | Volume is conserved ($V = Al$), so area halves ($A/2$). New resistance is $R' = \rho \frac{2l}{A/2} = \mathbf{4R}$! |
| **Current Direction** | "Current is a vector because it has magnitude and direction." | Electric current is a **scalar**. Currents add algebraically at junctions ($I_{\text{total}} = I_1 + I_2$), violating vector addition laws. |
