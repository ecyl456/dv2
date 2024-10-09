import pandas as pd

data = pd.read_csv('datasets/unemployment-rate.csv')

data['Normalized_Unemployment'] = (data['Unemployment, total (% of total labor force) (modeled ILO estimate)'] - data['Unemployment, total (% of total labor force) (modeled ILO estimate)'].min()) / (data['Unemployment, total (% of total labor force) (modeled ILO estimate)'].max() - data['Unemployment, total (% of total labor force) (modeled ILO estimate)'].min())

data.to_csv('normalised_csv.csv', index=False)