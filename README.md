
# WÜRFEL — Formelarchitektur

## 1. Grundformel
W = ( Σ(P_i × W_i) – Drift ) ÷ Stabilität

## 2. Parameterraum
P = { P_1, P_2, P_3, P_4 }
W = Gewichtung
D = Drift
S = Stabilität

## 3. Ebenen
RAW  = Σ(P_i × W_i)
FREE = RAW – Drift
PRO  = FREE ÷ Stabilität

## 4. Instanzbildung
I = f(PRO)
I muss gelten:
I ∈ ℝ  
I ≥ 0  
I stabil  

## 5. Finalwert
F = normalize(I)

## 6. Präfixlogik
Prefix = { + , – , ? , ! }

Mapping:
+  → Verstärkung  
–  → Reduktion  
?  → Abfrage  
!  → Priorisierung

## 7. Vier‑Wege‑Rechenbarkeit
Vorwärts:   F = f(P)  
Rückwärts:  P = f⁻¹(F)  
Vergleich:  Δ = F_a – F_b  
Delta:      ∂F/∂P_i

## 8. Driftkontrolle
Drift = | RAW – Erwartung |
Drift_max = definierter Grenzwert  
Wenn Drift > Drift_max → Re‑Normierung

## 9. Stabilitätskern
S = clamp( Σ(P_i) ÷ n , 0.1 , 1.0 )

## 10. Output
F_final = round(F, 3)
