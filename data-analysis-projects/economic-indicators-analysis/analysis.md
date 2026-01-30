# Economic Indicators Analysis: East & West Africa

## Project Overview
This analysis examines key economic indicators across East and West African countries from 2020-2024, focusing on growth patterns, inflation dynamics, and sectoral contributions.

## Key Questions
1. How have GDP growth rates evolved post-COVID?
2. What is the relationship between inflation and unemployment?
3. How are economies transitioning between sectors?

## Data Sources
- Simulated dataset based on World Bank and IMF patterns
- Focus: Kenya, Tanzania, Uganda, Rwanda, Ethiopia, Nigeria, Ghana

---

## Setup

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

plt.style.use('seaborn-v0_8-darkgrid')
sns.set_palette("Set2")
```

## Load and Explore Data

```python
df = pd.read_csv('data/economic_data.csv')
print("Dataset Shape:", df.shape)
df.head()
```

## Analysis 1: GDP Growth Comparison

```python
# GDP Growth by country over time
plt.figure(figsize=(12, 6))
for country in df['country'].unique():
    data = df[df['country'] == country]
    plt.plot(data['year'], data['gdp_growth_pct'], marker='o', linewidth=2, label=country)

plt.axhline(y=0, color='red', linestyle='--', alpha=0.5)
plt.xlabel('Year')
plt.ylabel('GDP Growth Rate (%)')
plt.title('GDP Growth Trends by Country (2020-2024)')
plt.legend(bbox_to_anchor=(1.05, 1))
plt.tight_layout()
plt.savefig('gdp_growth_trends.png', dpi=150)
plt.show()
```

## Analysis 2: Inflation vs Unemployment (Phillips Curve)

```python
# Scatter plot of inflation vs unemployment
plt.figure(figsize=(10, 6))
colors = sns.color_palette("husl", len(df['country'].unique()))
for i, country in enumerate(df['country'].unique()):
    data = df[df['country'] == country]
    plt.scatter(data['unemployment_rate'], data['inflation_rate'], 
                label=country, s=100, alpha=0.7, c=[colors[i]])

plt.xlabel('Unemployment Rate (%)')
plt.ylabel('Inflation Rate (%)')
plt.title('Inflation vs Unemployment by Country')
plt.legend()
plt.tight_layout()
plt.savefig('phillips_curve.png', dpi=150)
plt.show()
```

## Analysis 3: Sector Composition Changes

```python
# Sector composition for 2024
latest = df[df['year'] == 2024][['country', 'sector_agriculture_pct', 'sector_industry_pct', 'sector_services_pct']]

fig, ax = plt.subplots(figsize=(12, 6))
x = np.arange(len(latest))
width = 0.25

ax.bar(x - width, latest['sector_agriculture_pct'], width, label='Agriculture', color='#2ecc71')
ax.bar(x, latest['sector_industry_pct'], width, label='Industry', color='#3498db')
ax.bar(x + width, latest['sector_services_pct'], width, label='Services', color='#9b59b6')

ax.set_xticks(x)
ax.set_xticklabels(latest['country'], rotation=45)
ax.set_ylabel('Percentage of GDP')
ax.set_title('Economic Sector Composition by Country (2024)')
ax.legend()
plt.tight_layout()
plt.savefig('sector_composition.png', dpi=150)
plt.show()
```

## Analysis 4: FDI Trends

```python
# Foreign Direct Investment trends
plt.figure(figsize=(12, 6))
fdi_pivot = df.pivot(index='year', columns='country', values='fdi_million_usd')
fdi_pivot.plot(kind='bar', figsize=(12, 6), width=0.8)
plt.xlabel('Year')
plt.ylabel('FDI (Million USD)')
plt.title('Foreign Direct Investment Trends')
plt.legend(title='Country', bbox_to_anchor=(1.05, 1))
plt.tight_layout()
plt.savefig('fdi_trends.png', dpi=150)
plt.show()
```

## Key Findings

1. **Post-COVID Recovery**: Rwanda showed the strongest rebound (10.9% in 2021), while Nigeria and Ghana struggled with slower recovery.

2. **Inflation Challenges**: Ghana and Nigeria face persistent high inflation (22-29%), while Tanzania maintains single-digit rates.

3. **Sector Transition**: All countries show a gradual shift from agriculture toward services, with Kenya leading in services (60.4%).

4. **FDI Growth**: Ethiopia leads in FDI attraction despite political challenges, followed by Nigeria.

## Recommendations

1. **Inflation Control**: Countries like Ghana and Nigeria need stronger monetary policy interventions.
2. **Diversification**: Agricultural economies should accelerate industrial development.
3. **Investment Climate**: Improve regulatory frameworks to attract more FDI.

---

*Analysis conducted using Python, Pandas, Matplotlib, and Seaborn*
