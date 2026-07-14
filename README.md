# Brent Oil Price Change Point Analysis

## Project Overview

This project analyzes historical Brent crude oil prices to understand how major geopolitical events, economic crises, and OPEC policy decisions influence oil prices over time.

The final objective is to detect structural changes in the price series using Bayesian Change Point Detection and relate those changes to significant real-world events.

---

## Dataset

The dataset contains daily Brent crude oil prices from **20 May 1987** to **30 September 2022**.

**Columns**

- **Date** – Date of observation
- **Price** – Brent crude oil price (USD per barrel)

---

## Project Progress

### Task 1 – Project Foundation

Completed:

- Defined the project objective
- Designed the analysis workflow
- Documented assumptions and limitations
- Created a historical events dataset (`events.csv`)
- Prepared a project report (`report.ipynb`)

---

###  Data Preparation

Completed:

- Loaded the dataset using Pandas
- Converted the `Date` column to `datetime`
- Sorted observations chronologically
- Set `Date` as the DataFrame index
- Verified data types
- Confirmed there are no missing values

---

### Exploratory Data Analysis (EDA)

Completed:

- Generated descriptive statistics
- Visualized historical Brent oil prices
- Examined the distribution of prices
- Created a boxplot to inspect spread and variability
- Identified major periods of price increases and declines

Key observations:

- Brent oil prices exhibit strong long-term fluctuations.
- Several periods of significant price shocks are visible.
- Large market disruptions correspond to known geopolitical and economic events.

---

###  Log Return Analysis

Computed daily log returns using

\[
r_t = \log(P_t) - \log(P_{t-1})
\]

Purpose:

- Analyze daily price movements instead of absolute price levels.
- Prepare the data for stationarity analysis.
- Observe volatility clustering in the oil market.

Key observations:

- Log returns fluctuate around zero.
- Periods of high volatility occur during major market disruptions, particularly around the COVID-19 pandemic.

---

## Repository Structure

```text
brent-oil-analysis/
│
├── data/
│   ├── BrentOilPrices.csv
│   └── events.csv
│
├── notebooks/
│   ├── report.ipynb
│   ├── brent.ipynb
│
├── README.md
│
└── requirements.txt
```

---

## Next Steps

- Perform stationarity testing (ADF Test)
- Analyze volatility patterns
- Build a Bayesian Change Point Detection model using PyMC
- Compare detected change points with historical events
- Develop an interactive dashboard using Flask and React

---

## Technologies

- Python
- Pandas
- NumPy
- Matplotlib
- PyMC (upcoming)
- Flask (upcoming)
- React (upcoming)