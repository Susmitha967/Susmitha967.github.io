# 🏡 Airbnb Data Analytics

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![Jupyter](https://img.shields.io/badge/Jupyter-Notebook-orange.svg)](https://jupyter.org/)
[![Pandas](https://img.shields.io/badge/Pandas-Data%20Analysis-lightgrey.svg)](https://pandas.pydata.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## 📌 Project Overview
This project focuses on analyzing an extensive **Airbnb Open Data** dataset. By utilizing Python and its robust data science ecosystem (Pandas, Matplotlib, Seaborn), the goal is to uncover hidden insights into host behaviors, optimize pricing models, evaluate guest satisfaction metrics, and identify critical market trends across various neighborhoods.

---

## 📑 Table of Contents
- [Project Overview](#-project-overview)
- [Directory Structure](#-directory-structure)
- [Dataset](#-dataset)
- [Key Features & Analysis](#-key-features--analysis)
- [Insights & Recommendations](#-insights--recommendations)
- [Getting Started](#-getting-started)
- [License](#-license)

---

## 📂 Directory Structure

```text
airbnb-data-analytics/
├── data/
│   └── 1730285881-Airbnb_Open_Data.xlsx      # Raw Airbnb dataset
├── notebooks/
│   └── airbnb_analysis_notebook_.ipynb       # Main Jupyter Notebook
└── README.md                                 # Project documentation
```

---

## 📊 Dataset
The raw dataset contains detailed records of Airbnb listings, including:
- **Location details:** Neighborhood, neighborhood group, latitude, longitude
- **Property attributes:** Room type, construction year
- **Pricing & Fees:** Listing price, service fee
- **Host information:** Host ID, identity verification status, calculated host listings
- **Reviews & Availability:** Number of reviews, last review date, reviews per month, availability (365 days)

> **Note:** The dataset requires preprocessing due to missing values, unstructured text formatting (like $ signs in prices), and outliers.

---

## 🔍 Key Features & Analysis
The notebook sequentially walks through the data science lifecycle:

1. **Data Cleaning & Wrangling**
   - Conversion of currency formatted strings to numeric types (`price`, `service fee`).
   - Handling of missing data (NaN) across critical attributes.
   - Normalization and standardizing column formats.

2. **Exploratory Data Analysis (EDA)**
   - **Distribution Analysis:** Examining the spread of prices and property types.
   - **Geospatial Insights:** Identifying top neighborhoods based on listing density and average price.
   - **Host Analysis:** Comparing verified vs. unverified hosts and their booking frequencies.

3. **Data Visualization**
   - High-quality histograms and scatter plots detailing price distributions.
   - Bar charts illustrating neighborhood dominance.
   - Heatmaps revealing correlations between price, service fees, and review activity.

---

## 💡 Insights & Recommendations

- **Location is Key:** Certain neighborhoods exhibit significantly higher demand, allowing hosts to securely set premium prices.
- **Trust & Reviews:** Identity-verified hosts with higher accumulated review counts generally attract more consistent bookings.
- **Service Fees:** There is a direct correlation between pricing models and associated service fees, which strongly impacts overall guest cost.
- **Outlier Impact:** Addressing extreme price outliers is crucial for realistic market average predictions. Data-driven pricing tools can vastly improve a host's competitive edge.

---

## 🚀 Getting Started

Follow these steps to set up the project on your local machine.

### 1. Clone the Repository
```bash
git clone https://github.com/Susmitha967/airbnb-data-analytics.git
cd airbnb-data-analytics
```

### 2. Install Dependencies
Ensure you have Python installed. You can install the required packages using pip:
```bash
pip install pandas numpy matplotlib seaborn openpyxl jupyter
```

### 3. Run the Analysis
Launch the Jupyter Notebook to explore the code and visualizations interactively:
```bash
jupyter notebook notebooks/airbnb_analysis_notebook_.ipynb
```
*(Alternatively, you can open the notebook using Google Colab and upload the dataset from the `data/` folder).*

---

## 📜 License
This project is intended for **educational and analytical purposes**. The underlying dataset is derived from publicly available Airbnb open data sources.
