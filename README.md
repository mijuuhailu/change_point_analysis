# Change Point Analysis and Statistical Modeling of Brent Oil Prices

## Project Overview

This project analyzes the impact of major geopolitical and economic events on Brent crude oil prices using Bayesian Change Point Detection. The objective is to identify structural breaks in historical oil prices, quantify their impact, and present the results through an interactive dashboard.

The analysis was completed as part of a data science project for Birhan Energies.

---

## Objectives

- Analyze historical Brent oil prices (1987–2022)
- Explore time series characteristics (trend, stationarity, volatility)
- Detect structural breaks using a Bayesian Change Point Model
- Associate detected change points with major geopolitical and economic events
- Build an interactive dashboard for stakeholders

---

## Dataset

**Brent Oil Prices**

- Daily Brent crude oil prices
- Period: **20 May 1987 – 30 September 2022**
- Fields:
  - Date
  - Price (USD per barrel)

**Historical Events**

A manually compiled dataset containing major oil-related events, including:

- Gulf War
- Asian Financial Crisis
- Iraq War
- Global Financial Crisis
- Arab Spring
- OPEC Production Decisions
- COVID-19 Pandemic
- Russia–Ukraine Conflict

---

# Project Structure

```text
change-point-analysis/

│
├── notebooks/
│   ├── report.ipynb
│
├── backend/
│   ├── app.py
│   └── data/
│       ├── BrentOilPrices.csv
│       └── events.csv
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PriceChart.jsx
│   │   │   ├── StatsCard.jsx
│   │   │   └── EventList.jsx
│   │   └── App.jsx
│
├── README.md
│
└── requirements.txt
```

---

# Task 1 – Foundation

Completed:

- Defined analysis workflow
- Researched and compiled historical events
- Documented assumptions and limitations
- Performed exploratory data analysis
- Trend analysis
- Stationarity testing (ADF Test)
- Volatility analysis using log returns

### Key Findings

- Brent oil prices exhibit a long-term upward trend.
- Daily log returns are approximately stationary.
- Volatility clustering is visible during major market events.

---

# Task 2 – Bayesian Change Point Analysis

## Model

A Bayesian Change Point Model was implemented using **PyMC**.

The model estimates:

- Change point (τ)
- Mean price before the change (μ₁)
- Mean price after the change (μ₂)
- Standard deviation (σ)

Posterior inference was performed using **MCMC sampling**, and model diagnostics were evaluated using **ArviZ**.

---

## Results

### Estimated Change Point

**24 February 2005**

### Estimated Mean Prices

Before Change

- **\$21.42 per barrel**

After Change

- **\$75.61 per barrel**

### Estimated Increase

Approximately **253%**

### Interpretation

The detected structural break coincides with a period of rapidly increasing global oil demand and geopolitical uncertainty. While the model identifies a statistically significant change in the time series, it does **not** establish causal relationships.

---

# Task 3 – Interactive Dashboard

## Backend (Flask)

Implemented REST API endpoints:

| Endpoint | Description |
|----------|-------------|
| `/` | API status |
| `/prices` | Historical Brent oil prices |
| `/events` | Historical geopolitical events |
| `/change-point` | Bayesian model results |

---

## Frontend (React)

Implemented:

- Interactive Brent oil price chart
- Summary statistics card
- Historical events list
- Event selection
- Event search/filter
- Date range filtering
- Responsive dashboard layout

---

## Technologies Used

### Data Analysis

- Python
- Pandas
- NumPy
- Matplotlib
- Statsmodels

### Bayesian Modeling

- PyMC
- ArviZ

### Backend

- Flask
- Flask-CORS

### Frontend

- React (Vite)
- Axios
- Recharts

---

# Installation

## Clone Repository

```bash
git clone <repository-url>

cd change-point-analysis
```

---

## Backend

Create a virtual environment:

```bash
python -m venv venv
```

Activate:

**Windows**

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run Flask:

```bash
cd backend

python app.py
```

Backend runs at:

```
http://127.0.0.1:5000
```

---

## Frontend

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run React:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# Future Improvements

Potential enhancements include:

- Multiple Bayesian change point detection
- Markov Switching Models
- VAR models with macroeconomic indicators
- Forecasting future oil prices
- Event markers directly on the price chart
- Database integration for scalable deployment

---

# Key Learning Outcomes

This project demonstrates:

- Time series exploratory data analysis
- Stationarity testing
- Volatility analysis using log returns
- Bayesian statistical modeling
- MCMC sampling
- Posterior interpretation
- REST API development with Flask
- Interactive dashboard development using React
- End-to-end deployment of a data science application

---

