import pandas as pd

data = pd.read_csv('https://raw.githubusercontent.com/ecyl456/dv2/refs/heads/main/datasets/unemployment-rate.csv')

data['Normalized_Unemployment'] = (data['Unemployment, total (% of total labor force) (modeled ILO estimate)'] - data['Unemployment, total (% of total labor force) (modeled ILO estimate)'].min()) / (data['Unemployment, total (% of total labor force) (modeled ILO estimate)'].max() - data['Unemployment, total (% of total labor force) (modeled ILO estimate)'].min())

data.to_csv('dv2/normalized_unemployment-rate.csv', index=False)