import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as ReTooltip,
  Legend as ReLegend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

const COLOURS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#a4de6c",
  "#d0ed57",
];

function Results({ results, isAnalyzing }) {
  const [chartType, setChartType] = useState("pie");

  if (isAnalyzing) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[350px] border border-yellow-300 bg-white rounded-lg p-6">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-full bg-yellow-400 h-16 w-16 flex items-center justify-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">
            Analyzing Corn Leaf Image
          </h3>
          <p className="text-center text-yellow-700">
            Our Model is examining the image for signs of disease. This will
            take just a moment...
          </p>
          <div className="mt-8 w-full max-w-sm">
            <div className="h-2.5 bg-yellow-200 rounded-full w-full mb-4"></div>
            <div className="h-2.5 bg-yellow-200 rounded-full w-4/5 mb-4"></div>
            <div className="h-2.5 bg-yellow-200 rounded-full w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[350px] border border-gray-200 bg-white bg-opacity-50 rounded-lg p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-400 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 0 012 2"
          />
        </svg>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          No Analysis Results Yet
        </h3>
        <p className="text-center text-gray-500">
          Upload an image and click "Analyze Image" to identify corn diseases
        </p>
      </div>
    );
  }

  // Determine the status color based on the disease severity
  const getStatusColor = (confidence) => {
    if (confidence > 80) return "red";
    if (confidence > 50) return "yellow";
    return "green";
  };

  const statusColor = getStatusColor(results.confidence * 100);

  // prepare data for charts
  const chartData = results.all_probs
    ? Object.entries(results.all_probs).map(([name, value]) => ({
        name,
        value: value * 100,
      }))
    : [];

  // Render chart based on chartType
  const renderChart = () => {
    if (chartData.length === 0) return null;
    // Responsive chart width: 320px on mobile, 400px on md+, with padding
    const chartWidth =
      typeof window !== "undefined" && window.innerWidth < 640
        ? Math.max(window.innerWidth - 48, 240)
        : 400;
    return (
      <div className="w-full max-w-full overflow-x-auto">
        <div className="min-w-[240px] w-full" style={{ maxWidth: 500 }}>
          {(() => {
            switch (chartType) {
              case "pie":
                return (
                  <PieChart width={chartWidth} height={260}>
                    <Pie
                      data={chartData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={chartWidth > 320 ? 100 : 50}
                      fill="#8884d8"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(1)}%`
                      }
                    >
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLOURS[index % COLOURS.length]}
                        />
                      ))}
                    </Pie>
                    <ReTooltip />
                    <ReLegend />
                  </PieChart>
                );
              case "bar":
                return (
                  <BarChart
                    width={chartWidth}
                    height={260}
                    data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      angle={-10}
                      tick={{
                        fontSize: 10,
                        dy: 10,
                      }}
                    />
                    <YAxis unit="%" />
                    <ReTooltip />
                    <Bar dataKey="value" fill="#82ca9d" />
                  </BarChart>
                );
              case "line":
                return (
                  <LineChart
                    width={chartWidth}
                    height={260}
                    data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      interval={0}
                      tick={{
                        fontSize: 12,
                      }}
                    />
                    <YAxis unit="%" />
                    <ReTooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                );
              default:
                return null;
            }
          })()}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`border ${
        statusColor === "red"
          ? "border-red-300"
          : statusColor === "yellow"
          ? "border-yellow-300"
          : "border-green-300"
      } bg-white bg-opacity-50 rounded-lg p-4 sm:p-6 w-full max-w-2xl mx-auto`}
    >
      <div className="flex items-center mb-4">
        <div
          className={`rounded-full ${
            statusColor === "red"
              ? "bg-red-500"
              : statusColor === "yellow"
              ? "bg-yellow-500"
              : "bg-green-500"
          } h-10 w-10 flex items-center justify-center mr-3`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg sm:text-xl font-bold">Analysis Results</h3>
      </div>
      <div className="mb-5">
        <h4 className="text-xl font-semibold mb-1">Detected Disease:</h4>
        <div className="flex items-center">
          <span
            className={`text-xl font-bold ${
              statusColor === "red"
                ? "text-red-700"
                : statusColor === "yellow"
                ? "text-yellow-700"
                : "text-green-700"
            }`}
          >
            {results.disease}
          </span>
          <span className="ml-3 px-3 py-1 rounded-full text-sm font-medium bg-gray-100">
            {(results.confidence * 100).toFixed(2)}% confidence
          </span>
        </div>
      </div>
      {/* Fer */}
      {results.fertilizer && (
        <div className="mb-5">
          <h4 className="text-lg font-semibold mb-2">
            Recommended Fertilizer:
          </h4>
          <a
            href={results.fertilizer.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            {results.fertilizer.name}
          </a>
        </div>
      )}
      {/* Probab */}
      {results.all_probs && (
        <div className="mb-5">
          <h4 className="text-lg font-semibold mb-2">Class Probabilities:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {Object.entries(results.all_probs).map(([label, prob]) => (
              <li key={label}>
                <span className="font-medium">{label}:</span>{" "}
                {(prob * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Chart selector */}
      {chartData.length > 0 && (
        <div className="mb-5">
          <h4 className="text-lg font-semibold mb-2">
            Class Probabilities Visualization:
          </h4>
          <div className="mb-4">
            <label htmlFor="chartType" className="mr-3 font-medium">
              Choose chart type:
            </label>
            <select
              id="chartType"
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="pie">Pie Chart</option>
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
            </select>
          </div>
          {renderChart()}
        </div>
      )}
      {/* Description */}
      {results.description && (
        <div className="mb-5">
          <h4 className="text-md font-semibold mb-2">Description:</h4>
          <p className="text-gray-700">{results.description}</p>
        </div>
      )}
      {/* Recommendations */}
      {results.recommendations && (
        <div>
          <h4 className="text-md font-semibold mb-2">Recommendations:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {(Array.isArray(results.recommendations)
              ? results.recommendations
              : []
            ).map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <a
            href={"/disease"}
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Learn more about {results.disease}
          </a>
        </button>
      </div>
    </div>
  );
}

export default Results;
