# COST OF CAPITAL, CAPITAL STRUCTURE & LEVERAGE

> **Paper:** 3 (Accounting & Financial Management for Bankers)
> **Module:** C (Financial Management)
> **Standard:** Macmillan Master Benchmark • Duplex A4 Monochrome Print Edition

## 1. Why This Matters in Banking Operations
Cost of Capital and Capital Structure decisions govern how a corporation funds its long-term assets and how much business and financial risk it assumes. In corporate banking and credit underwriting, bank officers must understand a borrower's Weighted Average Cost of Capital (WACC), debt-equity leverage, and the interest tax shield. Furthermore, calculating Operating and Financial Leverages (DOL and DFL) allows lenders to evaluate how vulnerable a borrower's debt servicing capacity (EBITDA) is to economic recessions and revenue declines.

## 2. Specific Costs of Capital & WACC Formulation

### 1. Cost of Debt ($K_d$)
Because interest paid on corporate debt is a tax-deductible expense under Section 36 of the Income Tax Act, debt generates a valuable **Interest Tax Shield**:
$$\mathbf{K_d = I \times (1 - t)}$$
- Where $I$ = Pre-tax contractual coupon / interest rate, and $t$ = Corporate tax rate.
- For redeemable debt issued at premium or discount:
  $$K_d \approx \frac{I(1 - t) + \frac{RV - NP}{n}}{\frac{RV + NP}{2}}$$

### 2. Cost of Preference Capital ($K_p$)
Unlike debt interest, preference dividends are paid out of post-tax profits and are **NOT tax-deductible**:
$$K_p = \frac{D_p}{P_0}$$
- Where $D_p$ = Annual preference dividend, and $P_0$ = Current price / issue proceeds.

### 3. Cost of Equity Capital ($K_e$)
Equity carries no mandatory contractual payout, but shareholders require a return commensurate with business risk:
- **Dividend Growth Model (Gordon Model):**
  $$K_e = \frac{D_1}{P_0} + g = \frac{D_0(1 + g)}{P_0} + g$$
- **Capital Asset Pricing Model (CAPM):**
  $$\mathbf{K_e = R_f + \beta \times (R_m - R_f)}$$
  - Where $R_f$ = Risk-free rate (e.g. 10-year G-Sec yield); $\beta$ = Beta (systematic market risk factor); $(R_m - R_f)$ = Equity Market Risk Premium.

### 4. Weighted Average Cost of Capital (WACC / $K_o$)
WACC is the weighted average hurdle rate of the firm, used as the discount rate for capital budgeting appraisal:
$$\mathbf{\text{WACC } (K_o) = w_d K_d + w_p K_p + w_e K_e}$$
- Where $w_d, w_p, w_e$ represent the proportional weights of debt, preference capital, and equity in the capital structure ($\sum w = 1.0$). Market value weights are theoretically superior to historical book value weights.

### 5. Advanced Cost of Capital Concepts
1. **Weighted Marginal Cost of Capital (WMCC):** The cost of raising one additional rupee of new capital. As a firm raises larger increments of capital in a single period, flotation costs rise and lenders demand higher risk premiums, causing the WMCC curve to slope upward with distinct capital break-points.
2. **Divisional & Project Hurdle Rates:** Applying a single company-wide WACC across all corporate divisions causes distortion: low-risk divisions are penalized and high-risk projects are mistakenly approved. Projects possessing risks distinct from the company's core operations must be evaluated using a **project-specific risk-adjusted discount rate**.
3. **Flotation Costs:** Direct expenses of issuance (underwriting fees, legal, registration, brokerage) reduce net capital proceeds ($NP = P_0 \times (1 - f)$). For new equity issues:
   $$K_e (\text{new}) = \frac{D_1}{P_0(1 - f)} + g$$
4. **Common Misconceptions:**
   - *Retained earnings are free:* FALSE. Retained earnings carry an opportunity cost equal to what shareholders could earn in alternative investments of equivalent risk ($K_r \approx K_e$ without flotation costs).
   - *Depreciation funds have zero cost:* FALSE. Depreciation-generated cash carries an opportunity cost equal to the firm's WACC.

## 3. Theories of Capital Structure

```
+----------------------------------------------------------------------------------------------------+
|                                MASTER CAPITAL STRUCTURE THEORIES MATRIX                            |
+----------------------------------------------------------------------------------------------------+
| Theory & Proponent    | Core Proposition                      | Impact of Debt on Overall WACC     |
+-----------------------+---------------------------------------+------------------------------------+
| Net Income (NI)       | Capital structure IS relevant. Higher | WACC continuously DECLINES as chea |
| (David Durand)        | debt increases overall firm value.    | debt replaces equity ($K_o$ falls) |
| Net Operating Income  | Capital structure is IRRELEVANT.      | WACC remains CONSTANT. Cost of equ |
| (NOI) (David Durand)  | Overall firm value depends on EBIT.   | ($K_e$) rises to offset debt risk. |
| Traditional Approach  | Balanced optimal capital structure    | WACC falls initially to an optimal |
| (Ezra Solomon)        | exists; moderate debt lowers WACC.    | minimum, then rises beyond point.  |
| Modigliani-Miller (MM)| In perfect markets without taxes,     | WACC is CONSTANT; firm value is    |
| (Without Taxes, 1958) | capital structure is IRRELEVANT.      | independent of debt-equity choice. |
| MM Hypothesis         | With corporate taxes, interest is tax-| WACC continuously DECLINES with    |
| (With Taxes, 1963)    | deductible; levered firm value rises. | debt: $V_L = V_U + t \times \text{Debt}$ |
+-----------------------+---------------------------------------+------------------------------------+
```

## 4. Master Leverage Architecture: DOL, DFL & Combined Leverage

```
Income Statement Flow:
Sales Revenue
  Less: Variable Costs
= Contribution ---------------------------------------------> [Operating Risk Base]
  Less: Fixed Operating Costs
= Operating Profit (EBIT) ----------------------------------> [Financial Risk Base]
  Less: Debt Interest
= Earnings Before Tax (EBT)
  Less: Taxes
= Profit After Tax (PAT)
```

### 1. Degree of Operating Leverage (DOL)
Measures the percentage change in operating profit (EBIT) resulting from a percentage change in sales revenue, driven by the presence of **Fixed Operating Costs**:
$$\mathbf{\text{DOL} = \frac{\text{Contribution}}{\text{EBIT}} = \frac{Q(P - V)}{Q(P - V) - F} = \frac{\% \Delta \text{EBIT}}{\% \Delta \text{Sales}}}$$
- *Zero Fixed Costs:* When fixed operating costs are zero, $\text{DOL} = 1.0$ (NOT zero).

### 2. Degree of Financial Leverage (DFL)
Measures the percentage change in earnings per share (or EBT) resulting from a percentage change in operating profit (EBIT), driven by **Fixed Financial Interest Charges**:
$$\mathbf{\text{DFL} = \frac{\text{EBIT}}{\text{EBT}} = \frac{\text{EBIT}}{\text{EBIT} - I} = \frac{\% \Delta \text{EPS}}{\% \Delta \text{EBIT}}}$$
- *Zero Debt Interest:* When interest charges are zero, $\text{DFL} = 1.0$ (NOT zero).

### 3. Degree of Combined Leverage (DCL / CL)
Measures the total magnified sensitivity of earnings per share to changes in sales revenue:
$$\mathbf{\text{CL} = \text{DOL} \times \text{DFL} = \frac{\text{Contribution}}{\text{EBT}} = \frac{\% \Delta \text{EPS}}{\% \Delta \text{Sales}}}$$

### 4. Financial Indifference Point (EBIT-EPS Analysis)
The level of operating earnings (EBIT) at which two alternative financing plans yield the identical Earnings Per Share (EPS):
$$\frac{(\text{EBIT}^* - I_1)(1 - t) - D_{p1}}{N_1} = \frac{(\text{EBIT}^* - I_2)(1 - t) - D_{p2}}{N_2}$$

## 5. Worked Numerical: WACC & Leverage Amplification
**Scenario:** A company has the following structure:
- Sales: ₹10,00,000; Variable Costs: ₹6,00,000; Fixed Operating Costs: ₹2,00,000.
- 10% Term Debt: ₹4,00,000; Corporate Tax Rate: 30%.
- Equity Shares: 20,000 shares of ₹10 each; $K_e = 15\%$.

**Step-by-Step Solution:**
1. **Compute Income Flow:**
   - $\text{Contribution} = 10,00,000 - 6,00,000 = \text{₹4,00,000}$
   - $\text{EBIT} = \text{Contribution} - \text{Fixed Costs} = 4,00,000 - 2,00,000 = \text{₹2,00,000}$
   - $\text{Interest } I = 4,00,000 \times 10\% = \text{₹40,000}$
   - $\text{EBT} = \text{EBIT} - I = 2,00,000 - 40,000 = \text{₹1,60,000}$
2. **Calculate Leverages:**
   $$\text{DOL} = \frac{\text{Contribution}}{\text{EBIT}} = \frac{4,00,000}{2,00,000} = \mathbf{2.00}$$
   $$\text{DFL} = \frac{\text{EBIT}}{\text{EBT}} = \frac{2,00,000}{1,60,000} = \mathbf{1.25}$$
   $$\text{Combined Leverage (CL)} = \text{DOL} \times \text{DFL} = 2.00 \times 1.25 = \mathbf{2.50} \quad \left(\text{or } \frac{4,00,000}{1,60,000} = 2.50\right)$$
   *(A 10% increase in sales will amplify EPS by $10\% \times 2.50 = \mathbf{25\%}$).*
3. **Calculate After-Tax Cost of Debt & WACC:**
   $$K_d = 10\% \times (1 - 0.30) = \mathbf{7.00\%}$$
   - Total Capital = Debt ₹4,00,000 (weight $4/6 = 0.333$) + Equity ₹2,00,000 (weight $2/6 = 0.667$).
   $$\text{WACC} = (0.333 \times 7\%) + (0.667 \times 15\%) = 2.33\% + 10.00\% = \mathbf{12.33\%}$$

> [!CAUTION]
> **Examiner Trap Alert:**
> 1. Interest on debt is tax-deductible, creating an after-tax cost of $K_d = I \times (1 - t)$. Preference dividends are **NOT tax-deductible**.
> 2. When fixed operating costs are zero, **Operating Leverage is 1.0**, NOT zero.
> 3. When debt interest is zero, **Financial Leverage is 1.0**, NOT zero.
> 4. $\text{Combined Leverage} = \text{Operating Leverage} \times \text{Financial Leverage} = \frac{\text{Contribution}}{\text{EBT}}$.
> 5. Modigliani-Miller theorem assumes the arbitrage process prevents identical firms with different capital structures from selling at different values.

## 6. Practice Questions & Solved Numerical Drills

**Q1.** A firm with no fixed operating costs in its production structure will have an Operating Leverage (DOL) equal to:
- (A) Zero
- (B) 1.0
- (C) Infinity
- (D) Indeterminate

**Q2.** An enterprise has an Operating Leverage of 2.5 and a Financial Leverage of 1.6. If its sales revenue increases by 5%, by what percentage will its Earnings Per Share (EPS) increase?
- (A) 4.1%
- (B) 8.0%
- (C) 20.0%
- (D) 12.5%

**Q3.** Under the Capital Asset Pricing Model (CAPM), if the risk-free rate is 7%, the expected return on the market portfolio is 13%, and a company's beta ($\beta$) is 1.5, what is the cost of equity ($K_e$)?
- (A) 14.5%
- (B) 16.0%
- (C) 15.5%
- (D) 18.0%

#### Solutions & Explanations
* Q1 Correct Answer: (B) 1.0. When fixed costs are zero, $\text{Contribution} = \text{EBIT}$; therefore, $\text{DOL} = \frac{\text{Contribution}}{\text{EBIT}} = 1.0$.
* Q2 Correct Answer: (C) 20.0%. Combined Leverage $\text{CL} = \text{DOL} \times \text{DFL} = 2.5 \times 1.6 = \mathbf{4.0}$. Change in EPS = $\% \Delta \text{Sales} \times \text{CL} = 5\% \times 4.0 = \mathbf{20.0\%}$.
* Q3 Correct Answer: (B) 16.0%. Under CAPM: $K_e = R_f + \beta(R_m - R_f) = 7\% + 1.5(13\% - 7\%) = 7\% + 1.5(6\%) = 7\% + 9\% = \mathbf{16.0\%}$.

## 7. Active Recall & Self-Diagnostic Prompts

<details>
<summary>Why does financial leverage amplify the risk to equity shareholders?</summary>

Because debt carries compulsory fixed contractual interest charges that must be paid regardless of operating earnings. In good years, high operating profit after fixed interest accrues entirely to shareholders (amplifying EPS); in poor years, fixed interest consumes operating earnings, accelerating losses.
</details>

<details>
<summary>What is the financial indifference point in EBIT-EPS analysis?</summary>

It is the specific level of Operating Profit (EBIT) at which two competing capital structure financing alternatives (e.g. debt vs equity issue) produce exactly the same Earnings Per Share (EPS).
</details>

## 8. Last-Minute Revision Box
- Cost of Debt: $K_d = I(1 - t)$ (After-tax).
- CAPM Equity: $K_e = R_f + \beta(R_m - R_f)$.
- WACC: $\text{WACC} = w_d K_d + w_p K_p + w_e K_e$.
- Operating Leverage: $\text{DOL} = \frac{\text{Contribution}}{\text{EBIT}}$ (Fixed cost amplifier).
- Financial Leverage: $\text{DFL} = \frac{\text{EBIT}}{\text{EBT}}$ (Debt interest amplifier).
- Combined Leverage: $\text{CL} = \text{DOL} \times \text{DFL} = \frac{\text{Contribution}}{\text{EBT}}$.
- Baseline Rule: Zero fixed costs / zero debt = Leverages equal **1.0**.
