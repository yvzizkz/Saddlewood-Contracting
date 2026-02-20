"use client";

import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Lead type definition
type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: string;
  processed: boolean;
  createdAt: string;
};

interface AdminDashboardChartsProps {
  leads: Lead[];
}

export default function AdminDashboardCharts({ leads }: AdminDashboardChartsProps) {
  // State to hold chart data
  const [serviceData, setServiceData] = useState<{
    labels: string[];
    data: number[];
  }>({ labels: [], data: [] });

  const [statusData, setStatusData] = useState<{
    labels: string[];
    data: number[];
  }>({ labels: [], data: [] });

  // Process data for charts when leads change
  useEffect(() => {
    if (leads.length === 0) return;

    // Process service distribution
    const serviceCount: Record<string, number> = {};
    leads.forEach((lead) => {
      const service = lead.service || "Unknown";
      serviceCount[service] = (serviceCount[service] || 0) + 1;
    });

    // Process status distribution
    const statusCount: Record<string, number> = {};
    leads.forEach((lead) => {
      statusCount[lead.status] = (statusCount[lead.status] || 0) + 1;
    });

    // Set chart data
    setServiceData({
      labels: Object.keys(serviceCount).map(
        (key) => key.charAt(0).toUpperCase() + key.slice(1)
      ),
      data: Object.values(serviceCount),
    });

    setStatusData({
      labels: Object.keys(statusCount).map(
        (key) => key.charAt(0).toUpperCase() + key.slice(1)
      ),
      data: Object.values(statusCount),
    });
  }, [leads]);

  // If no leads, show placeholder
  if (leads.length === 0) {
    return (
      <div className="bg-surface rounded-lg shadow-md p-6 text-center text-silver-dark">
        No lead data available to display charts.
      </div>
    );
  }

  // Bar chart options and data
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#A8B2C1",
        },
      },
      title: {
        display: true,
        text: "Service Distribution",
        color: "#A8B2C1",
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(42,46,53,0.5)",
        },
        ticks: {
          color: "#A8B2C1",
        },
      },
      y: {
        grid: {
          color: "rgba(42,46,53,0.5)",
        },
        ticks: {
          color: "#A8B2C1",
        },
      },
    },
  };

  const barData = {
    labels: serviceData.labels,
    datasets: [
      {
        label: "Number of leads",
        data: serviceData.data,
        backgroundColor: "rgba(212,175,55,0.7)",
      },
    ],
  };

  // Pie chart options and data
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#A8B2C1",
        },
      },
      title: {
        display: true,
        text: "Lead Status Distribution",
        color: "#A8B2C1",
      },
    },
  };

  const pieData = {
    labels: statusData.labels,
    datasets: [
      {
        label: "Number of leads",
        data: statusData.data,
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-surface rounded-lg shadow-md p-4">
        <Bar options={barOptions} data={barData} />
      </div>
      <div className="bg-surface rounded-lg shadow-md p-4">
        <Pie options={pieOptions} data={pieData} />
      </div>
    </div>
  );
}
