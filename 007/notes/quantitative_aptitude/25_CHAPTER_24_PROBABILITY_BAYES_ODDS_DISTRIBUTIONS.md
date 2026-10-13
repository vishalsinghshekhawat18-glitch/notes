# CHAPTER 25: PROBABILITY THEORY, BAYES' THEOREM, ODDS & BERNOULLI DISTRIBUTIONS

**Domain**: Measure of Uncertainty, Stochastic Calculus & Bayesian Inference  
**Target Examinations**: SBI/IBPS PO & Clerk, RBI Grade B (Phase 1), CAT/XAT, UPSC CSAT, State PCS (RPSC RAS)  
**Pedagogical Hierarchy**: Kolmogorov Axioms $\to$ Addition/Multiplication Laws $\to$ Canonical Random Experiments $\to$ Odds Formulations $\to$ Bayes' Inverse Inference $\to$ Multi-Tier Exemplars $\to$ Trap Taxonomy

---

## 25.1 FIRST-PRINCIPLES ONTOLOGY: AXIOMATIC PROBABILITY MEASURE

Probability quantifies the likelihood of occurrence of indeterminate events within a well-defined outcome space.

### The Kolmogorov Axioms
Let $S$ represent the finite Sample Space of all mutually exhaustive elementary outcomes, and let $E \subseteq S$ represent an Event:
1. **Non-Negativity**: For any event $E$, $\mathbf{0 \le P(E) \le 1}$.
2. **Certainty**: The sample space is certain to occur: $\mathbf{P(S) = 1}$, and $\mathbf{P(\emptyset) = 0}$.
3. **Countable Additivity**: For any sequence of mutually exclusive (disjoint) events $A \cap B = \emptyset$:
   $$\mathbf{P(A \cup B) = P(A) + P(B)}$$

### Classical Laplace Formulation (Equally Likely Outcomes)
$$\mathbf{P(E) = \frac{n(E)}{n(S)} = \frac{\text{Number of Favorable Elementary Outcomes}}{\text{Total Number of Exhaustive Elementary Outcomes}}}$$

$$\text{Complementary Probability}: \mathbf{P(E') = P(\overline{E}) = 1 - P(E)}$$

```
                            Sample Space S (P(S) = 1)
                  ┌─────────────────────────────────────────┐
                  │                 Event A                 │
                  │              ┌───────────┐              │
                  │              │    P(A)   │              │
                  │              └───────────┘              │
                  │                                         │
                  │         Complementary Event A'          │
                  │              P(A') = 1 - P(A)           │
                  └─────────────────────────────────────────┘
```

---

## 25.2 SET-THEORETIC PROBABILITY THEOREMS

### The General Addition Theorem
For any two arbitrary events $A$ and $B$:
$$\mathbf{P(A \cup B) = P(A) + P(B) - P(A \cap B)}$$

For three events $A, B, C$:
$$\mathbf{P(A \cup B \cup C) = \sum P(A) - \sum P(A \cap B) + P(A \cap B \cap C)}$$

### The Complement Law for Unions ("At Least One Event")
By de Morgan's Laws, the event that *at least one* of the events $A, B, C$ occurs is the union $A \cup B \cup C$. Its complement is the joint event that *none* of them occur: $(A \cup B \cup C)' = A' \cap B' \cap C'$.
Therefore, the **general mathematical identity** holding universally for ANY arbitrary (independent or dependent) events is:
$$\mathbf{P(A \cup B \cup C) = 1 - P(A' \cap B' \cap C')}$$

**The Mutual Independence Product Form (Sufficiency vs. Non-Equivalence)**:
If the events $A, B, C$ are mutually independent (which implies that their complements $A', B', C'$ are also mutually independent), the joint complement intersection probability factors directly into the product of individual complement probabilities:
$$P(A' \cap B' \cap C') = P(A') \cdot P(B') \cdot P(C')$$
$$\implies \mathbf{P(A \cup B \cup C) = 1 - P(A') \cdot P(B') \cdot P(C') \quad (\text{Valid when } A, B, C \text{ are mutually independent})}$$

> [!IMPORTANT]
> **Sufficiency vs. Non-Equivalence**:
> Mutual independence is a **sufficient condition** for $P(A' \cap B' \cap C') = P(A')P(B')P(C')$, but this product equality **does NOT imply or prove independence**. Equality in this single numerical expression can hold even when the underlying events are dependent!
>
> **Counterexample 1 (Dependent Events Violating the Product Shortcut)**:
> Let $A$ and $B$ be identical events with $P(A) = P(B) = 0.5$. Then $P(A \cup B) = P(A) = 0.5$, and $P(A' \cap B') = P(A') = 0.5$.  
> The true probability is $1 - P(A' \cap B') = 1 - 0.5 = 0.5$.  
> But the unconditioned product shortcut gives $1 - P(A')P(B') = 1 - (0.5)(0.5) = 1 - 0.25 = 0.75 \neq 0.5$.
>
> **Counterexample 2 (Dependent Events Satisfying the Complement Product Equality)**:
> Consider rolling a fair 8-sided die with sample space $S = \{1, 2, 3, 4, 5, 6, 7, 8\}$ where each outcome has probability $1/8$.  
> Define two events:
> - $A = \{1, 2, 3, 4\} \implies P(A) = 4/8 = 1/2 \implies P(A') = 1/2$.
> - $B = \{1, 5, 6, 7\} \implies P(B) = 4/8 = 1/2 \implies P(B') = 1/2$.
> 
> Check pairwise independence of $A$ and $B$:
> - $A \cap B = \{1\} \implies P(A \cap B) = 1/8$.
> - $P(A) \cdot P(B) = (1/2) \cdot (1/2) = 1/4 = 2/8$.
> - Since $P(A \cap B) = 1/8 \neq 1/4$, the events $A$ and $B$ are **strictly dependent**!
> 
> Now examine their complements:
> - $A' = \{5, 6, 7, 8\}$ and $B' = \{2, 3, 4, 8\}$.
> - Their intersection is $A' \cap B' = \{8\} \implies P(A' \cap B') = 1/8$.
> - However, in this 2-event case $P(A') \cdot P(B') = (1/2) \cdot (1/2) = 1/4 \neq 1/8$.
>
> Now examine a 3-event construction where the product equality $P(A' \cap B' \cap C') = P(A')P(B')P(C')$ holds despite dependence:  
> Let $S = \{1, 2, 3, 4, 5, 6, 7, 8\}$ with uniform probability $1/8$ per outcome.  
> Define:  
> - $A = \{1, 2, 3, 4\} \implies P(A') = 1/2$.  
> - $B = \{1, 2, 5, 6\} \implies P(B') = 1/2$.  
> - $C = \{1, 3, 5, 7\} \implies P(C') = 1/2$.  
> The complements are:  
> - $A' = \{5, 6, 7, 8\}$, $B' = \{3, 4, 7, 8\}$, $C' = \{2, 4, 6, 8\}$.  
> Their triple intersection is $A' \cap B' \cap C' = \{8\} \implies P(A' \cap B' \cap C') = 1/8$.  
> The product of complement probabilities is $P(A')P(B')P(C') = (1/2)(1/2)(1/2) = 1/8$.  
> Here, $P(A' \cap B' \cap C') = P(A')P(B')P(C') = 1/8$ holds exactly!  
> However, consider the event $D = A' \cup B'$ or examine pairwise dependencies: if we modify one outcome (e.g. let $E_1, E_2, E_3$ be constructed on a custom distribution where $P(E_1 \cap E_2 \cap E_3) = 0$ while pairs are dependent), it is established in probability theory (e.g. Bernstein-type distributions) that 3-way factorization does not imply mutual independence, and complement product equality does not prove event independence.  
> **Key Rule**: Use $1 - P(A')P(B')P(C')$ when mutual independence is guaranteed. Never use the equality to infer independence, and never apply it to dependent events where the joint intersection differs from the product.

### Conditional Probability & The Product Rule
The conditional probability of event $A$ occurring given that event $B$ has already occurred is:
$$\mathbf{P(A | B) = \frac{P(A \cap B)}{P(B)} \quad (\text{provided } P(B) > 0)}$$

$$\mathbf{P(A \cap B) = P(B) \cdot P(A | B) = P(A) \cdot P(B | A)}$$

### Independence vs Mutual Exclusivity (The Critical Divergence)

| Property | Definition | Governing Condition |
| :--- | :--- | :--- |
| **Independent Events** | The occurrence of $B$ exerts zero influence on the probability of $A$. | $\mathbf{P(A \cap B) = P(A) \times P(B)}$<br/>$P(A \| B) = P(A)$ |
| **Mutually Exclusive Events** | $A$ and $B$ cannot co-occur simultaneously ($A \cap B = \emptyset$). | $\mathbf{P(A \cap B) = 0}$<br/>$P(A \cup B) = P(A) + P(B)$ |

> **Fundamental Principle**: Non-trivial events ($P > 0$) that are mutually exclusive **CANNOT be independent**, because the occurrence of one guarantees the non-occurrence of the other!

---

## 25.3 CANONICAL RANDOM EXPERIMENT VAULT

### A. The 52-Card Standard Deck Architecture
A standard pack contains $52$ cards partitioned into $4$ suits of $13$ cards each:
- **Black Suits ($26$)**: Spades ($\spadesuit, 13$), Clubs ($\clubsuit, 13$)
- **Red Suits ($26$)**: Hearts ($\heartsuit, 13$), Diamonds ($\diamondsuit, 13$)
- **Denominations per Suit**: Ace, $2, 3, 4, 5, 6, 7, 8, 9, 10$, Jack ($J$), Queen ($Q$), King ($K$).
- **Face / Court Cards ($12$ total)**: $4$ Kings, $4$ Queens, $4$ Jacks.
- **Honor Cards ($16$ total)**: $4$ Aces $+ 12$ Face Cards.

### B. Pair of Fair Dice (Two-Die Sum Spectrum)
When rolling two standard $6$-sided dice, $n(S) = 6 \times 6 = \mathbf{36}$.  
The sum $X \in [2, 12]$ forms a symmetric triangular distribution:

| Sum ($X$) | Favorable Outcomes | Probability ($P$) | Favorable Outcome Pairs |
| :---: | :---: | :---: | :--- |
| **2** | $1$ | $\frac{1}{36}$ | $(1,1)$ |
| **3** | $2$ | $\frac{2}{36} = \frac{1}{18}$ | $(1,2), (2,1)$ |
| **4** | $3$ | $\frac{3}{36} = \frac{1}{12}$ | $(1,3), (2,2), (3,1)$ |
| **5** | $4$ | $\frac{4}{36} = \frac{1}{9}$ | $(1,4), (2,3), (3,2), (4,1)$ |
| **6** | $5$ | $\frac{5}{36}$ | $(1,5), (2,4), (3,3), (4,2), (5,1)$ |
| **7 (Peak)** | **$6$** | $\mathbf{\frac{6}{36} = \frac{1}{6}}$ | $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ |
| **8** | $5$ | $\frac{5}{36}$ | $(2,6), (3,5), (4,4), (5,3), (6,2)$ |
| **9** | $4$ | $\frac{4}{36} = \frac{1}{9}$ | $(3,6), (4,5), (5,4), (6,3)$ |
| **10** | $3$ | $\frac{3}{36} = \frac{1}{12}$ | $(4,6), (5,5), (6,4)$ |
| **11** | $2$ | $\frac{2}{36} = \frac{1}{18}$ | $(5,6), (6,5)$ |
| **12** | $1$ | $\frac{1}{36}$ | $(6,6)$ |

---

## 25.4 ODDS IN FAVOR AND ODDS AGAINST

Let an event $E$ happen in $a$ ways and fail in $b$ ways (total outcomes $n(S) = a + b$):

$$\text{Odds in Favor of Event } E = \mathbf{a : b = \frac{P(E)}{1 - P(E)} = \frac{P(E)}{P(E')}}$$
$$\text{Odds Against Event } E = \mathbf{b : a = \frac{1 - P(E)}{P(E)} = \frac{P(E')}{P(E)}}$$

### Inversion to Probability
$$\mathbf{P(E) = \frac{a}{a + b}}, \quad \mathbf{P(E') = \frac{b}{a + b}}$$

*Example*: If odds against a horse winning a race are $5 : 2$, then:
$$a = 2, b = 5 \implies P(\text{Win}) = \frac{2}{2 + 5} = \mathbf{\frac{2}{7}}$$

---

## 25.5 THE LAW OF TOTAL PROBABILITY & BAYES' THEOREM

When an observed outcome $A$ can arise from multiple mutually exclusive underlying hypotheses $B_1, B_2, \dots, B_k$ (where $\sum P(B_i) = 1$):

```
       Hypothesis B₁ ───► P(A | B₁) ──┐
       Hypothesis B₂ ───► P(A | B₂) ──┼──► Observed Terminal Event A
       Hypothesis B₃ ───► P(A | B₃) ──┘
```

### The Law of Total Probability
$$\mathbf{P(A) = \sum_{i=1}^k P(B_i) \cdot P(A | B_i)}$$

### Bayes' Master Theorem (Inverse Probability)
Bayes' Theorem reverses the temporal sequence: given that the terminal event $A$ has actually occurred, what is the posterior probability that it was generated by hypothesis $B_i$?

$$\mathbf{P(B_i | A) = \frac{P(B_i) \cdot P(A | B_i)}{\sum_{j=1}^k P(B_j) \cdot P(A | B_j)} = \frac{\text{Prior} \times \text{Likelihood}}{\text{Total Probability}}}$$

---

## 25.6 BERNOULLI TRIALS & BINOMIAL PROBABILITY

An experiment consists of $n$ repeated independent trials where each trial has only two outcomes:
- Success ($S$) with constant probability $p$.
- Failure ($F$) with constant probability $q = 1 - p$.

The probability of obtaining exactly $r$ successes in $n$ trials is:
$$\mathbf{P(X = r) = \,^nC_r \cdot p^r \cdot q^{n - r} \quad (r = 0, 1, 2, \dots, n)}$$

- **Expected Value (Mean)**: $\mathbf{\mu = E[X] = n \cdot p}$
- **Variance**: $\mathbf{\sigma^2 = \text{Var}(X) = n \cdot p \cdot q}$

---

## 25.7 MULTI-TIER WORKED EXEMPLARS

### Exemplar 1: Card Selection with Disjoint Sets (SBI PO Prelims)
**Problem**: Two cards are drawn together at random from a standard pack of $52$ cards. What is the probability that either both are black or both are queens?

**Execution via Addition Theorem**:
- Total sample space: $n(S) = \,^{52}C_2 = \frac{52 \times 51}{2 \times 1} = \mathbf{1,326}$.
- Let $A$ = Event that both cards are black ($26$ black cards):
  $$n(A) = \,^{26}C_2 = \frac{26 \times 25}{2} = \mathbf{325}$$
- Let $B$ = Event that both cards are queens ($4$ queens):
  $$n(B) = \,^4C_2 = \frac{4 \times 3}{2} = \mathbf{6}$$
- Overlapping Event $A \cap B$ = Both cards are black queens ($2$ black queens):
  $$n(A \cap B) = \,^2C_2 = \mathbf{1}$$

Applying $P(A \cup B) = P(A) + P(B) - P(A \cap B)$:
$$P(A \cup B) = \frac{325 + 6 - 1}{1326} = \frac{330}{1326} = \mathbf{\frac{55}{221}}$$

---

### Exemplar 2: Independent Problem Solving (RBI Grade B Phase 1)
**Problem**: A problem in mathematics is given to three students $A, B, C$ whose chances of solving it are $\frac{1}{2}, \frac{1}{3}$, and $\frac{1}{4}$ respectively. What is the probability that the problem is solved?

**Execution via Complementary Probability**:
The problem is solved if **at least one** student solves it:
$$P(\text{Solved}) = 1 - P(\text{None solves})$$

Since the students attempt the problem independently:
$$P(\overline{A}) = 1 - \frac{1}{2} = \frac{1}{2}, \quad P(\overline{B}) = 1 - \frac{1}{3} = \frac{2}{3}, \quad P(\overline{C}) = 1 - \frac{1}{4} = \frac{3}{4}$$

$$P(\text{None solves}) = P(\overline{A}) \times P(\overline{B}) \times P(\overline{C}) = \frac{1}{2} \times \frac{2}{3} \times \frac{3}{4} = \frac{1}{4}$$

$$P(\text{Problem is Solved}) = 1 - \frac{1}{4} = \mathbf{\frac{3}{4} = 75.00\%}$$

---

### Exemplar 3: Bayes' Inverse Probability (CAT / SBI PO Mains)
**Problem**: Urn 1 contains $3$ red and $4$ black balls. Urn 2 contains $5$ red and $6$ black balls. One urn is chosen at random and a ball is drawn from it. If the drawn ball is red, find the probability that it was drawn from Urn 2.

**Execution via Bayes' Master Theorem**:
- Prior probabilities of selecting urns: $P(B_1) = \frac{1}{2}$, $P(B_2) = \frac{1}{2}$.
- Likelihood of drawing red ball from Urn 1: $P(R | B_1) = \frac{3}{3 + 4} = \frac{3}{7}$.
- Likelihood of drawing red ball from Urn 2: $P(R | B_2) = \frac{5}{5 + 6} = \frac{5}{11}$.

1. **Total Probability of Drawing a Red Ball ($P(R)$)**:
   $$P(R) = P(B_1)P(R|B_1) + P(B_2)P(R|B_2) = \frac{1}{2}\left(\frac{3}{7}\right) + \frac{1}{2}\left(\frac{5}{11}\right)$$
   $$P(R) = \frac{1}{2} \left[\frac{33 + 35}{77}\right] = \frac{1}{2} \left[\frac{68}{77}\right] = \frac{34}{77}$$
2. **Posterior Probability for Urn 2 ($P(B_2 | R)$)**:
   $$P(B_2 | R) = \frac{P(B_2)P(R|B_2)}{P(R)} = \frac{\frac{1}{2} \times \frac{5}{11}}{\frac{34}{77}} = \frac{\frac{5}{22}}{\frac{34}{77}} = \frac{5}{22} \times \frac{77}{34} = \frac{5 \times 7}{2 \times 34} = \mathbf{\frac{35}{68}}$$

---

### Exemplar 4: Binomial Distribution (CSAT / Regulatory Bodies)
**Problem**: A pair of fair dice is thrown $4$ times. If getting a doublet (e.g., $(1,1), (2,2)\dots$) is considered a success, find the probability of obtaining at least $2$ successes.

**Execution via Binomial Expansion**:
- Number of trials: $n = 4$.
- Success probability: Doublets are $6$ out of $36 \implies p = \frac{6}{36} = \frac{1}{6}$.
- Failure probability: $q = 1 - \frac{1}{6} = \frac{5}{6}$.

$$P(X \ge 2) = 1 - [P(X = 0) + P(X = 1)]$$
$$P(X = 0) = \,^4C_0 \left(\frac{1}{6}\right)^0 \left(\frac{5}{6}\right)^4 = 1 \times 1 \times \frac{625}{1296} = \frac{625}{1296}$$
$$P(X = 1) = \,^4C_1 \left(\frac{1}{6}\right)^1 \left(\frac{5}{6}\right)^3 = 4 \times \frac{1}{6} \times \frac{125}{216} = \frac{500}{1296}$$

$$P(X < 2) = \frac{625 + 500}{1296} = \frac{1125}{1296}$$

$$P(X \ge 2) = 1 - \frac{1125}{1296} = \mathbf{\frac{171}{1296} = \frac{19}{144}}$$

---

## 25.8 HIGH-YIELD TRAP TAXONOMY

| Trap Identifier | Erroneous Heuristic | Mathematical Correction |
| :--- | :--- | :--- |
| **Trap 1: Independence vs Mutual Exclusivity** | Setting $P(A \cap B) = P(A) \cdot P(B)$ for mutually exclusive events. | For mutually exclusive events, co-occurrence is impossible: $\mathbf{P(A \cap B) = 0}$. |
| **Trap 2: "At Least One" Additive & Independence Fallacy** | Adding probabilities directly: $P(\text{At least one}) = P(A) + P(B) + P(C)$, or blindly multiplying complements without independence. | Direct addition double-counts overlapping intersections (even if the sum does not exceed 1). The universal identity is $\mathbf{P(A \cup B \cup C) = 1 - P(A' \cap B' \cap C')}$. Factoring into the complement product $\mathbf{1 - P(A')P(B')P(C')}$ is guaranteed when events are **mutually independent** (sufficient condition), but this numerical equality does not prove independence. |
| **Trap 3: Odds Ratio Inversion** | Setting $P = \frac{a}{b}$ when odds in favor are $a : b$. | Total sample space is $a + b$; the probability is $\mathbf{P = \frac{a}{a + b}}$. |
| **Trap 4: Sampling Replacement Neglect** | Using constant denominator $52$ when drawing successive cards without replacement. | Denominators decrease with each draw: $\frac{4}{52} \times \frac{3}{51} \times \dots$. |
| **Trap 5: Prior Probability Disregard in Bayes** | Calculating posterior probability by comparing likelihoods alone without weighting by priors $P(B_i)$. | Likelihoods must be scaled by their prior probabilities: $\mathbf{P(B_i) \cdot P(A | B_i)}$. |
