# RAPID REVISION MATRIX: CHAPTER 24

**Topic**: Probability Theory, Bayes' Theorem, Odds & Bernoulli Distributions  
**Shelf**: 007 (Sovereign Master Knowledge Bastion)

---

## 1. Core Distinction Matrices

### Matrix A: Axiomatic Rules & Operational Conditions

| Event Dynamic | Governing Mathematical Formulation | Key Condition / Precaution |
| :--- | :--- | :--- |
| **Classical Probability** | $P(E) = \frac{n(E)}{n(S)}$ | $0 \le P(E) \le 1$; $P(S) = 1, P(\emptyset) = 0$. |
| **General Addition** | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | Subtract intersection to eliminate double count. |
| **Independent Events** | $P(A \cap B) = P(A) \times P(B)$ | $P(A \| B) = P(A)$. (Never confuse with mutually exclusive!). |
| **Mutually Exclusive** | $P(A \cap B) = 0 \implies P(A \cup B) = P(A) + P(B)$ | Cannot occur simultaneously. |
| **"At Least One" Rule** | $P(\text{At least 1}) = 1 - P(\text{None})$ | $1 - \prod (1 - P(E_i))$ for independent trials. |
| **Odds in Favor ($a : b$)** | $P(E) = \frac{a}{a + b}$ | Total sample space $= a + b$. |
| **Odds Against ($b : a$)** | $P(E') = \frac{b}{a + b}$ | $P(E) = \frac{a}{a + b}$. |

---

### Matrix B: Specialized Probability Architectures

| Distribution / Engine | Formula | Key Benchmark |
| :--- | :--- | :--- |
| **Bayes' Master Theorem** | $P(B_i \| A) = \frac{P(B_i) \cdot P(A \| B_i)}{\sum P(B_j) \cdot P(A \| B_j)}$ | Prior $\times$ Likelihood normalized over total probability. |
| **Binomial Expansion** | $P(X = r) = \,^nC_r \cdot p^r \cdot q^{n - r}$ | Mean $\mu = np$; Variance $\sigma^2 = npq$. |
| **52-Card Deck** | 4 suits (13 cards each), 26 Red, 26 Black | 12 Face cards (4K, 4Q, 4J); 16 Honor cards (Face + 4 Aces). |
| **Two Dice Sum Distribution** | Peak at Sum $= 7$ (Prob $= \frac{6}{36} = \frac{1}{6}$) | Sums $2$ and $12 \implies \frac{1}{36}$; Sums $6$ and $8 \implies \frac{5}{36}$. |

---

## 2. 60-Second Retrieval Skeleton

```text
Kolmogorov Foundation: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
➔ Independent Events Invariant: P(A ∩ B) = P(A) · P(B)
➔ Mutually Exclusive Invariant: P(A ∩ B) = 0
➔ At Least One Event Occurs: P(≥ 1) = 1 - P(A') · P(B') · P(C')
➔ Odds Transformation: Odds in favor a : b ➔ P(E) = a / (a + b)
➔ Bayes' Inverse Law: P(Hypothesis | Evidence) = [P(H) · P(E|H)] / ∑ [P(H_j) · P(E|H_j)]
➔ Binomial Distribution: P(r) = ^nC_r · p^r · (1 - p)^(n - r)  [Mean = np, Var = npq]
```

---

## 3. Top 5 Instant Killer Traps

1. **Independent vs Mutually Exclusive Conflation**: Assuming independent events have $P(A \cap B) = 0$. That is mutually exclusive! For independent events, $\mathbf{P(A \cap B) = P(A) \cdot P(B)}$.
2. **"At Least One" Probability Addition**: Adding $P(A) + P(B) + P(C)$ directly. The correct method is taking the complement: $\mathbf{1 - P(A')P(B')P(C')}$.
3. **Odds Denominator Error**: Taking $P(E) = \frac{a}{b}$ when odds in favor are $a : b$. The true probability is $\mathbf{\frac{a}{a + b}}$.
4. **Drawing Without Replacement Denominator Retention**: Keeping denominator at $52$ for successive draws. Second card has denominator $51$, third $50$.
5. **Two Dice Sum Linearity Trap**: Assuming all sums between 2 and 12 are equally likely. The distribution is strictly **triangular**, peaking at $7$ ($\frac{6}{36}$).
