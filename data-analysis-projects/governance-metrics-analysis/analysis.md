# Governance Metrics Analysis: African Countries

## Project Overview
This analysis examines governance quality indicators across African countries from 2020-2024, focusing on corruption, political stability, and regulatory frameworks.

## Key Questions
1. How do corruption levels vary across countries?
2. What is the relationship between governance quality and ease of doing business?
3. Which countries show the most improvement in governance indicators?

## Data Sources
- Simulated dataset based on World Bank Governance Indicators
- Transparency International Corruption Perceptions Index patterns

---

## Setup

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

plt.style.use('seaborn-v0_8-darkgrid')
```

## Load and Explore Data

```python
df = pd.read_csv('data/governance_data.csv')
print("Dataset Shape:", df.shape)
print("\nCountries:", df['country'].unique())
df.head()
```

## Analysis 1: Corruption Perception Index Comparison

```python
# CPI by country (2024)
latest = df[df['year'] == 2024].sort_values('corruption_perception_index', ascending=False)

plt.figure(figsize=(10, 6))
colors = ['#10b981' if x >= 50 else '#f59e0b' if x >= 30 else '#ef4444' 
          for x in latest['corruption_perception_index']]
plt.barh(latest['country'], latest['corruption_perception_index'], color=colors)
plt.xlabel('Corruption Perception Index (0-100, higher = less corrupt)')
plt.title('Corruption Perception Index by Country (2024)')
plt.xlim(0, 100)
plt.tight_layout()
plt.savefig('cpi_comparison.png', dpi=150)
plt.show()
```

## Analysis 2: Political Stability Trends

```python
# Political stability over time
plt.figure(figsize=(12, 6))
for country in df['country'].unique():
    data = df[df['country'] == country]
    plt.plot(data['year'], data['political_stability_index'], marker='o', label=country)

plt.axhline(y=0, color='gray', linestyle='--', alpha=0.5)
plt.xlabel('Year')
plt.ylabel('Political Stability Index')
plt.title('Political Stability Trends (2020-2024)')
plt.legend(bbox_to_anchor=(1.05, 1))
plt.tight_layout()
plt.savefig('political_stability.png', dpi=150)
plt.show()
```

## Analysis 3: Governance vs Business Environment

```python
# Scatter plot: Government effectiveness vs Ease of doing business
latest = df[df['year'] == 2024]

plt.figure(figsize=(10, 6))
plt.scatter(latest['government_effectiveness_index'], latest['ease_of_doing_business_rank'],
            s=latest['corruption_perception_index']*5, alpha=0.7, c='coral')

for i, row in latest.iterrows():
    plt.annotate(row['country'], (row['government_effectiveness_index'], 
                                   row['ease_of_doing_business_rank']),
                 fontsize=9, ha='center')

plt.xlabel('Government Effectiveness Index')
plt.ylabel('Ease of Doing Business Rank (lower = better)')
plt.title('Governance Effectiveness vs Business Environment')
plt.gca().invert_yaxis()
plt.tight_layout()
plt.savefig('governance_vs_business.png', dpi=150)
plt.show()
```

## Analysis 4: Governance Radar Chart

```python
# Radar chart for top 3 countries
from math import pi

categories = ['Corruption', 'Stability', 'Regulatory', 'Rule of Law', 'Effectiveness']
rwanda = [55, 0.22, 0.55, 0.25, 0.42]
ghana = [42, -0.15, 0.08, -0.15, -0.08]
kenya = [34, -0.55, 0.25, -0.20, -0.12]

# Normalize values to 0-1 scale for visualization
rwanda_norm = [(v + 1) / 2 if v < 10 else v / 100 for v in rwanda]
ghana_norm = [(v + 1) / 2 if v < 10 else v / 100 for v in ghana]
kenya_norm = [(v + 1) / 2 if v < 10 else v / 100 for v in kenya]

print("Normalized governance scores created for radar visualization")
```

## Key Findings

1. **Corruption Leader**: Rwanda leads with CPI of 55, significantly ahead of other countries.

2. **Political Instability**: Ethiopia and Nigeria face the most significant stability challenges.

3. **Governance-Business Link**: Countries with higher government effectiveness (Rwanda, South Africa) have better business environments.

4. **Voice & Accountability**: Ghana and South Africa lead in democratic participation metrics.

## Recommendations

1. **Anti-Corruption Focus**: Countries below CPI 30 need intensive reforms.
2. **Stability Investment**: Address root causes of political instability in conflict-affected regions.
3. **Regulatory Reform**: Simplify business regulations to attract investment.

---

*Analysis conducted using Python, Pandas, Matplotlib, and Seaborn*
