Customer Segmentation Using K-Means Clustering

This project focuses on segmenting customers based on their purchasing behavior using K-Means Clustering, one of the most popular unsupervised machine learning algorithms.
The entire workflow is implemented in Google Colab, making it easy to run, modify, and experiment with.

📁 Project Overview

Customer segmentation helps businesses understand different customer groups so they can:

Improve targeted marketing

Personalize user experience

Increase sales and retention

Identify high-value customer clusters

This project uses Mall Customer Dataset, applies data preprocessing, performs clustering using K-Means, and visualizes the identified customer groups.

🚀 Key Features
✔ 1. Data Preprocessing

Handling missing values

Selecting relevant features

Normalization / standardization

✔ 2. Exploratory Data Analysis (EDA)

Distribution plots

Pairplots

Correlation heatmaps

Insights from spending & income patterns

✔ 3. K-Means Clustering

Selecting optimal number of clusters using Elbow Method

Training K-Means model

Assigning customers to clusters

✔ 4. Visualization

2D cluster visualization

Distinct color mapping for clusters

Graphs showing income vs spending score

✔ 5. Google Colab Integration

Fully executed in Colab

Easy to modify & run

No local setup required

🛠️ Technologies Used
Category	Tools
Programming	Python
Libraries	NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn
ML Algorithm	K-Means Clustering
Platform	Google Colab
Visualization	Matplotlib, Seaborn
📊 Dataset

Mall Customer Segmentation Dataset
Columns include:

CustomerID

Age

Gender

Annual Income

Spending Score

You can upload your own dataset or use the one included in the notebook.

🔍 Steps in the Notebook

Import libraries

Load dataset from CSV

Handle missing values

Perform EDA

Normalize/scale features

Use elbow method to find optimal K

Apply K-Means

Visualize clusters

Interpret the segments

🧪 Results

The model identifies distinct customer segments, such as:

High income / high spending

High income / low spending

Low income / high spending

Low income / low spending

These segments help in targeted marketing and business strategy.

🧾 How to Run this Project
Option 1: Run on Google Colab

Open the .ipynb file in GitHub

Click “Open in Colab”

Run all cells

Option 2: Run Locally

Install dependencies:

pip install numpy pandas matplotlib seaborn scikit-learn


Run the notebook using Jupyter:

jupyter notebook

🗂️ Folder Structure
├── Customer-Segmentation-KMeans.ipynb
├── dataset/
│   └── Mall_Customers.csv
├── README.md

📈 Visual Outputs

The notebook includes:

Elbow method plot

Cluster scatter plots

Spending vs income graphs

(Screenshots can be added here in GitHub)

⭐ Future Enhancements

Implement DBSCAN for density-based clustering

Add PCA for dimensionality reduction

Deploy model as a web app using Flask/Streamlit

Perform 3D cluster visualization
