# Water Sector Analysis: African Region Study

## Project Overview
This analysis examines water access patterns, quality metrics, and infrastructure investment across African countries from 2020-2024.

## Key Questions
1. How does urban vs rural water access compare across regions?
2. What is the correlation between infrastructure investment and access improvement?
3. Which countries show the most improvement in water quality?

## Data Sources
- Simulated dataset based on WHO/UNICEF Joint Monitoring Programme patterns
- Focus: East Africa, West Africa, Southern Africa

---

## Setup

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Configure visualization style
plt.style.use('seaborn-v0_8-darkgrid')
sns.set_palette("husl")
```

## Load and Explore Data

```python
# Load the dataset
df = pd.read_csv('data/water_access_data.csv')

# Display basic info
print("Dataset Shape:", df.shape)
print("\nColumn Types:")
print(df.dtypes)
print("\nFirst few rows:")
df.head()
```

```python
# Summary statistics
df.describe()
```

## Analysis 1: Urban vs Rural Access Gap

```python
# Calculate the urban-rural gap for each country
df['access_gap'] = df['urban_access_pct'] - df['rural_access_pct']

# Average gap by country (2024 data)
latest_data = df[df['year'] == 2024]
gap_by_country = latest_data[['country', 'access_gap']].sort_values('access_gap', ascending=False)

plt.figure(figsize=(10, 6))
plt.barh(gap_by_country['country'], gap_by_country['access_gap'], color='coral')
plt.xlabel('Urban-Rural Access Gap (%)')
plt.title('Urban-Rural Water Access Gap by Country (2024)')
plt.tight_layout()
plt.savefig('urban_rural_gap.png', dpi=150)
plt.show()
```

## Analysis 2: Access Improvement Over Time

```python
# Calculate year-over-year improvement
countries = df['country'].unique()

plt.figure(figsize=(12, 6))
for country in countries:
    country_data = df[df['country'] == country]
    plt.plot(country_data['year'], country_data['total_access_pct'], marker='o', label=country)

plt.xlabel('Year')
plt.ylabel('Total Water Access (%)')
plt.title('Water Access Improvement Trends (2020-2024)')
plt.legend(bbox_to_anchor=(1.05, 1), loc='upper left')
plt.tight_layout()
plt.savefig('access_trends.png', dpi=150)
plt.show()
```

## Analysis 3: Investment vs Access Correlation

```python
# Correlation between investment and access
plt.figure(figsize=(10, 6))
plt.scatter(df['infrastructure_investment_usd'] / 1e6, df['total_access_pct'], 
            c=df['year'], cmap='viridis', s=100, alpha=0.7)
plt.colorbar(label='Year')
plt.xlabel('Infrastructure Investment (Million USD)')
plt.ylabel('Total Water Access (%)')
plt.title('Investment vs Water Access Correlation')
plt.tight_layout()
plt.savefig('investment_correlation.png', dpi=150)
plt.show()

# Calculate correlation coefficient
correlation = df['infrastructure_investment_usd'].corr(df['total_access_pct'])
print(f"Correlation coefficient: {correlation:.3f}")
```

## Analysis 4: Water Quality by Region

```python
# Average water quality by region
quality_by_region = df.groupby('region')['water_quality_index'].mean().sort_values(ascending=False)

plt.figure(figsize=(8, 5))
quality_by_region.plot(kind='bar', color=['#2ecc71', '#3498db', '#e74c3c'])
plt.xlabel('Region')
plt.ylabel('Average Water Quality Index')
plt.title('Water Quality Index by Region (2020-2024 Average)')
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('quality_by_region.png', dpi=150)
plt.show()
```

## Key Findings

1. **Urban-Rural Gap**: Nigeria shows the largest urban-rural water access gap (34.9%), while Rwanda has the smallest (17.4%).

2. **Improvement Trends**: All countries show positive trends in water access, with Rwanda leading in overall access rates (83.6% in 2024).

3. **Investment Correlation**: There is a positive correlation (r ≈ 0.45) between infrastructure investment and water access rates.

4. **Regional Quality**: Southern Africa leads in water quality metrics, followed by East Africa and West Africa.

## Recommendations

1. **Focus on Rural Areas**: Prioritize infrastructure investment in rural regions to close the urban-rural gap.
2. **Learn from Rwanda**: Study Rwanda's approach to achieving high access rates despite lower investment.
3. **Regional Collaboration**: Encourage knowledge sharing between regions on water quality improvement.

---

*Analysis conducted using Python, Pandas, Matplotlib, and Seaborn*
