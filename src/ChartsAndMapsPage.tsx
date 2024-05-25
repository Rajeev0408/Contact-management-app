import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css'; // Add some basic styles
const queryClient = new QueryClient();

interface HistoricalData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const { data } = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return data;
};

const LineChart: React.FC = () => {
  const { data, error, isLoading } = useQuery<HistoricalData>('historicalData', fetchHistoricalData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;

  const labels = Object.keys(data?.cases || {});
  const casesData = Object.values(data?.cases || {});
  const deathsData = Object.values(data?.deaths || {});
  const recoveredData = Object.values(data?.recovered || {});

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Cases',
        data: casesData,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Deaths',
        data: deathsData,
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
      {
        label: 'Recovered',
        data: recoveredData,
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>COVID-19 Cases Fluctuations</h2>
      <Line data={chartData} />
    </div>
  );
};
function ChartsAndMapsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <LineChart />
      </div>
    </QueryClientProvider>
  );
}

export default ChartsAndMapsPage;
