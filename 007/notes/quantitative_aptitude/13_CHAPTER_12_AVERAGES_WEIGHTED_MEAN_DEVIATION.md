<div style="page-break-before: always;"></div>

# CHAPTER 12: AVERAGES, WEIGHTED MEAN, ASSUMED MEAN METHOD & AGE DYNAMICS

**Canonical Sources Unified**:
* Dr. R.S. Aggarwal, *Quantitative Aptitude* (Ch. 6: Average, pp. 206–239)
* Sarvesh K. Verma, *Quantum CAT* (Ch. 8: Averages, Alligation & Mixtures)
* Rajesh Verma, *Fast Track Objective Arithmetic* (Ch. 10: Average & Deviation Methods)
* Arun Sharma, *Quantitative Aptitude for CAT* (Ch. 4: Averages & Weighted Grouping)

---

## 12.1 The Definition & Fundamental Sum Invariant

The **Arithmetic Mean (Average)** of $n$ observations is the quotient obtained by dividing the sum of all observations by their total count:

$$\mathbf{\text{Average } (\bar{X}) = \frac{\sum_{i=1}^{n} x_i}{n} \implies \text{Total Sum} = n \times \bar{X}}$$

### Core Mathematical Invariants of the Mean
1. **Additive Scaling Invariant**: If a constant $k$ is added to (or subtracted from) every observation, the new average increases (or decreases) by $k$:
   $$\text{New Mean} = \bar{X} \pm k$$
2. **Multiplicative Scaling Invariant**: If every observation is multiplied (or divided) by a non-zero scalar $k$, the new average is multiplied (or divided) by $k$:
   $$\text{New Mean} = k \cdot \bar{X} \quad \left(\text{or } \frac{\bar{X}}{k}\right)$$
3. **The Zero Deviation Axiom**: The algebraic sum of the deviations of all observations from their true arithmetic mean is **identically ZERO**:
   $$\mathbf{\sum_{i=1}^{n} (x_i - \bar{X}) = 0}$$

---

## 12.2 The Assumed Mean (Deviation) Algorithm

Calculating large sums by hand invites arithmetic error. The **Assumed Mean Method** chooses a convenient benchmark number $A$ proximate to the cluster, calculating deviations:

$$\mathbf{\bar{X} = A + \frac{\sum_{i=1}^{n} (x_i - A)}{n}}$$

#### Exemplar: Find the average of $894, 912, 885, 921, 908$.
1. Select an assumed benchmark: $A = 900$.
2. Compute individual deviations $(x_i - 900)$:
   * $894 - 900 = -6$
   * $912 - 900 = +12$
   * $885 - 900 = -15$
   * $921 - 900 = +21$
   * $908 - 900 = +8$
3. Sum of deviations:
   $$\sum d_i = -6 + 12 - 15 + 21 + 8 = +20$$
4. Net adjustment: $\frac{+20}{5} = +4$.
5. True Average $= 900 + 4 = \mathbf{904}$.

---

## 12.3 Weighted Mean & Multi-Group Aggregation

When combining two groups with counts $n_1, n_2$ and averages $\bar{X}_1, \bar{X}_2$:

$$\mathbf{\bar{X}_{\text{combined}} = \frac{n_1\bar{X}_1 + n_2\bar{X}_2}{n_1 + n_2}}$$

### The Inverse Weight Ratio Law:
Rearranging the combined mean equation establishes:
$$n_1(\bar{X}_{\text{combined}} - \bar{X}_1) = n_2(\bar{X}_2 - \bar{X}_{\text{combined}})$$

$$\mathbf{\frac{n_1}{n_2} = \frac{\bar{X}_2 - \bar{X}_{\text{combined}}}{\bar{X}_{\text{combined}} - \bar{X}_1}}$$

*(This is the exact mathematical foundation of the Alligation Cross-Rule!)*

---

## 12.4 Insertion, Departure & Replacement Dynamics

### 1. Replacement Mechanics (One Entity Replaces Another)
When one person of weight $W_{\text{old}}$ is replaced by a new person of weight $W_{\text{new}}$ in a group of $n$ people, causing the average to change by $\Delta$:

$$\mathbf{W_{\text{new}} = W_{\text{old}} \pm (n \times \Delta)}$$

*(Use $+$ if the average increases; use $-$ if the average decreases).*

#### Multi-Tier Worked Exemplar (R.S. Aggarwal Benchmark):
The average weight of 8 persons increases by $2.5 \text{ kg}$ when a new person comes in place of one of them weighing $65 \text{ kg}$. What is the weight of the new person?
* Number of persons: $n = 8$.
* Old person weight: $W_{\text{old}} = 65 \text{ kg}$.
* Increase in average: $\Delta = +2.5 \text{ kg}$.
* **Solution**:
  $$W_{\text{new}} = 65 + (8 \times 2.5) = 65 + 20 = \mathbf{85 \text{ kg}}$$

---

### 2. Insertion Mechanics (A New Member Joins)
When a new person joins an existing group of $n_{\text{old}}$ members:
$$\mathbf{\text{Value of New Member} = \text{New Average} + [n_{\text{old}} \times (\text{New Average} - \text{Old Average})]}$$

---

### 3. Departure Mechanics (A Member Leaves)
When a person leaves a group, reducing the count to $n_{\text{new}}$:
$$\mathbf{\text{Value of Departing Member} = \text{Old Average} + [n_{\text{new}} \times (\text{Old Average} - \text{New Average})]}$$

---

## 12.5 Consecutive Numbers & Arithmetic Progressions

For any sequence of numbers in **Arithmetic Progression (AP)** with common difference $d$:
$$\mathbf{\text{Average} = \frac{\text{First Term} + \text{Last Term}}{2}}$$

* **Odd Number of Consecutive Terms ($n$ is odd)**: The average is strictly the **exact middle term**.
* **Even Number of Consecutive Terms ($n$ is even)**: The average is the arithmetic mean of the two central terms.

```
┌───────────────────────────────────────┬────────────────────────────────────────────────────────┐
│ Number Series Category                │ Exact Closed Formula for Average                       │
├───────────────────────────────────────┼────────────────────────────────────────────────────────┤
│ 1. First n Natural Numbers (1 to n)   │ (n + 1) / 2                                            │
│ 2. First n Even Numbers (2 to 2n)     │ n + 1                                                  │
│ 3. First n Odd Numbers (1 to 2n - 1)  │ n                                                      │
│ 4. Squares of First n Natural Numbers │ (n + 1)(2n + 1) / 6                                    │
│ 5. Cubes of First n Natural Numbers   │ n(n + 1)² / 4                                          │
└───────────────────────────────────────┴────────────────────────────────────────────────────────┘
```

#### Exemplar: Find the average of the first 40 odd numbers.
* By the Odd Numbers Average Invariant, the average of the first $n$ odd numbers is simply $n$.
* Here $n = 40 \implies \mathbf{\text{Average} = 40}$.

---

## 12.6 Cricket Batting & Bowling Average Analytics

### 1. Batting Average
$$\mathbf{\text{Batting Average} = \frac{\text{Total Runs Scored}}{\text{Total Number of Innings OUT}}}$$
*(Crucial: Not-out innings add runs to the numerator without incrementing the denominator!)*

#### Exemplar (R.S. Aggarwal Benchmark):
A batsman makes a score of $87$ runs in the $17\text{th}$ inning and thus increases his average by $3$. Find his average after the $17\text{th}$ inning.
1. Let the average after 16 innings be $\bar{X}$.
2. Total runs in 16 innings $= 16\bar{X}$.
3. Runs in 17th inning $= 87$.
4. New average $= \bar{X} + 3$.
5. Equate total runs:
   $$16\bar{X} + 87 = 17(\bar{X} + 3)$$
   $$16\bar{X} + 87 = 17\bar{X} + 51 \implies \bar{X} = 87 - 51 = 36$$
6. New average after 17th inning:
   $$\bar{X} + 3 = 36 + 3 = \mathbf{39 \text{ runs}}$$

---

### 2. Bowling Average
$$\mathbf{\text{Bowling Average} = \frac{\text{Total Runs Conceded}}{\text{Total Wickets Taken}}}$$
*(A lower bowling average indicates a better bowler! If a bowler's average "improves" by 0.4, his average numerical value DECREASES by 0.4).*

---

## 12.7 Top Examiner Traps in Averages

1. **The Bowling Average "Improvement" Sign Trap**:
   When a question states *"a bowler's average improves by 0.5 runs"*, students add $0.5$. In cricket, bowling average is runs per wicket, so an improvement means **subtracting 0.5**!
2. **The Not-Out Inning Divisor Trap**:
   In batting averages, dividing total runs by total matches played instead of total completed innings (outs).
3. **The Overlapping Day Average Miscalculation**:
   Average of Monday to Wednesday is $40^\circ\text{C}$ (Sum $= 120^\circ$). Average of Tuesday to Thursday is $41^\circ\text{C}$ (Sum $= 123^\circ$).  
   Subtracting gives: $\text{Thursday} - \text{Monday} = 123 - 120 = \mathbf{3^\circ\text{C}}$.
   Do not attempt to solve individual day temperatures without the endpoint relation!
