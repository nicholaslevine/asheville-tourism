import { useMemo, useState } from "react";
import "./App.css";
import {
  chartData,
  type FeatureImportance,
  type HistogramBin,
  type LocationPoint,
  type RoomTypeBox,
  type ScatterPoint,
} from "./chartData";

const ASHEVILLE_LATITUDE = 35.5951;
const ASHEVILLE_LONGITUDE = -82.5515;
const ROOM_TYPES = ["Entire home/apt", "Private room", "Shared room", "Hotel room"];

type FormData = {
  room_type: string;
  accommodates: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  latitude: number;
  longitude: number;
  neighbourhood_cleansed: string;
  review_scores_rating: number;
  review_scores_cleanliness: number;
  review_scores_location: number;
  review_scores_value: number;
  host_is_superhost: number;
  instant_bookable: number;
  amenities_count: number;
  has_reviews: number;
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function normalizeFeatureLabel(raw: string): string {
  return raw
    .replaceAll("_", " ")
    .replace("review scores", "review")
    .replace(/\b\w/g, (s) => s.toUpperCase());
}

type SliderFieldProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  suffix?: string;
};

function SliderField({ label, value, min, max, step = 1, onChange, suffix = "" }: SliderFieldProps) {
  return (
    <label className="field field-slider">
      <span className="field-label">{label}</span>
      <div className="slider-row">
        <input
          className="slider"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <span className="slider-value">
          {value}
          {suffix}
        </span>
      </div>
    </label>
  );
}

function HistogramChart({ data }: { data: HistogramBin[] }) {
  const width = 640;
  const height = 280;
  const pad = { top: 16, right: 10, bottom: 36, left: 38 };
  const chartWidth = width - pad.left - pad.right;
  const chartHeight = height - pad.top - pad.bottom;
  const maxCount = Math.max(...data.map((d) => d.count));
  const barWidth = chartWidth / data.length;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="chart-svg" role="img" aria-label="Distribution of Airbnb prices">
      <line x1={pad.left} y1={height - pad.bottom} x2={width - pad.right} y2={height - pad.bottom} className="axis" />
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={height - pad.bottom} className="axis" />
      {data.map((bin, index) => {
        const barHeight = maxCount === 0 ? 0 : (bin.count / maxCount) * (chartHeight - 6);
        const x = pad.left + index * barWidth + 1;
        const y = height - pad.bottom - barHeight;
        return (
          <rect
            key={`${bin.binStart}-${bin.binEnd}`}
            x={x}
            y={y}
            width={Math.max(1, barWidth - 2)}
            height={barHeight}
            className="bar"
          >
            <title>{`${formatCurrency(bin.binStart)} - ${formatCurrency(bin.binEnd)}: ${bin.count} listings`}</title>
          </rect>
        );
      })}
      <text x={pad.left} y={height - 10} className="axis-label">
        $0
      </text>
      <text x={width - pad.right - 44} y={height - 10} className="axis-label">
        $2.5k
      </text>
      <text x={pad.left + 2} y={pad.top - 2} className="axis-label">
        Listings
      </text>
    </svg>
  );
}

function BoxPlotChart({ data }: { data: RoomTypeBox[] }) {
  const width = 640;
  const height = 300;
  const pad = { top: 14, right: 12, bottom: 70, left: 44 };
  const chartWidth = width - pad.left - pad.right;
  const chartHeight = height - pad.top - pad.bottom;
  const maxValue = Math.max(...data.map((d) => d.max));
  const slotWidth = chartWidth / data.length;

  const yScale = (value: number) => {
    if (maxValue === 0) return height - pad.bottom;
    return pad.top + (1 - value / maxValue) * chartHeight;
  };

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="chart-svg" role="img" aria-label="Price by room type box plot">
      <line x1={pad.left} y1={height - pad.bottom} x2={width - pad.right} y2={height - pad.bottom} className="axis" />
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={height - pad.bottom} className="axis" />
      {data.map((entry, index) => {
        const centerX = pad.left + slotWidth * index + slotWidth / 2;
        const boxWidth = Math.min(54, slotWidth * 0.55);
        const q1Y = yScale(entry.q1);
        const q3Y = yScale(entry.q3);
        const medianY = yScale(entry.median);
        const minY = yScale(entry.min);
        const maxY = yScale(entry.max);

        return (
          <g key={entry.roomType} className="box-group">
            <line x1={centerX} y1={minY} x2={centerX} y2={maxY} className="whisker" />
            <line x1={centerX - 12} y1={minY} x2={centerX + 12} y2={minY} className="whisker" />
            <line x1={centerX - 12} y1={maxY} x2={centerX + 12} y2={maxY} className="whisker" />
            <rect x={centerX - boxWidth / 2} y={q3Y} width={boxWidth} height={Math.max(1, q1Y - q3Y)} className="box" />
            <line x1={centerX - boxWidth / 2} y1={medianY} x2={centerX + boxWidth / 2} y2={medianY} className="median" />
            <text x={centerX} y={height - pad.bottom + 16} textAnchor="middle" className="axis-label small">
              {entry.roomType.replace("/", " / ")}
            </text>
            <title>{`${entry.roomType}: median ${formatCurrency(entry.median)}`}</title>
          </g>
        );
      })}
      <text x={pad.left + 2} y={pad.top + 12} className="axis-label">
        Price (USD)
      </text>
    </svg>
  );
}

function ScatterChart({ data }: { data: ScatterPoint[] }) {
  const width = 640;
  const height = 300;
  const pad = { top: 14, right: 18, bottom: 44, left: 44 };
  const chartWidth = width - pad.left - pad.right;
  const chartHeight = height - pad.top - pad.bottom;
  const maxX = Math.max(...data.map((d) => d.x));
  const maxY = 1000;

  const xScale = (value: number) => pad.left + (value / maxX) * chartWidth;
  const yScale = (value: number) => pad.top + (1 - value / maxY) * chartHeight;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="chart-svg" role="img" aria-label="Price versus number of guests scatter plot">
      <line x1={pad.left} y1={height - pad.bottom} x2={width - pad.right} y2={height - pad.bottom} className="axis" />
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={height - pad.bottom} className="axis" />
      {data.map((point, index) => (
        <circle key={index} cx={xScale(point.x)} cy={yScale(point.y)} r="3.2" className="dot">
          <title>{`${point.x.toFixed(0)} guests, ${formatCurrency(point.y)}`}</title>
        </circle>
      ))}
      <text x={pad.left} y={height - 12} className="axis-label">
        Guests
      </text>
      <text x={width - pad.right - 54} y={height - 12} className="axis-label">
        16 max
      </text>
      <text x={pad.left + 2} y={pad.top + 12} className="axis-label">
        Price (USD)
      </text>
    </svg>
  );
}

function priceColor(price: number): string {
  const clamped = Math.max(0, Math.min(1000, price));
  const ratio = clamped / 1000;
  const hue = 182 - ratio * 170;
  return `hsl(${hue} 85% 50%)`;
}

function LocationChart({ data }: { data: LocationPoint[] }) {
  const width = 640;
  const height = 300;
  const pad = { top: 14, right: 16, bottom: 40, left: 44 };
  const chartWidth = width - pad.left - pad.right;
  const chartHeight = height - pad.top - pad.bottom;
  const minLon = Math.min(...data.map((d) => d.longitude));
  const maxLon = Math.max(...data.map((d) => d.longitude));
  const minLat = Math.min(...data.map((d) => d.latitude));
  const maxLat = Math.max(...data.map((d) => d.latitude));

  const xScale = (value: number) => pad.left + ((value - minLon) / (maxLon - minLon)) * chartWidth;
  const yScale = (value: number) => pad.top + (1 - (value - minLat) / (maxLat - minLat)) * chartHeight;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="chart-svg" role="img" aria-label="Airbnb prices by location map scatter">
      <line x1={pad.left} y1={height - pad.bottom} x2={width - pad.right} y2={height - pad.bottom} className="axis" />
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={height - pad.bottom} className="axis" />
      {data.map((point, index) => (
        <circle
          key={index}
          cx={xScale(point.longitude)}
          cy={yScale(point.latitude)}
          r="3"
          className="location-dot"
          fill={priceColor(point.price)}
          opacity="0.78"
        >
          <title>{`${formatCurrency(point.price)} at (${point.latitude.toFixed(3)}, ${point.longitude.toFixed(3)})`}</title>
        </circle>
      ))}
      <defs>
        <linearGradient id="priceLegendGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={priceColor(0)} />
          <stop offset="100%" stopColor={priceColor(1000)} />
        </linearGradient>
      </defs>
      <rect x={width - 154} y={height - 30} width={98} height={8} fill="url(#priceLegendGradient)" rx="999" />
      <text x={width - 156} y={height - 34} className="axis-label small">
        $0
      </text>
      <text x={width - 56} y={height - 34} className="axis-label small" textAnchor="end">
        $1000
      </text>
      <text x={pad.left + 2} y={pad.top + 12} className="axis-label">
        Latitude / Longitude
      </text>
    </svg>
  );
}

function FeatureImportanceChart({ data }: { data: FeatureImportance[] }) {
  const width = 640;
  const height = 320;
  const pad = { top: 16, right: 20, bottom: 24, left: 200 };
  const chartWidth = width - pad.left - pad.right;
  const rowHeight = (height - pad.top - pad.bottom) / data.length;
  const maxValue = Math.max(...data.map((d) => d.importance));

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="chart-svg" role="img" aria-label="Model feature importance bar chart">
      {data.map((entry, index) => {
        const y = pad.top + index * rowHeight + 4;
        const barWidth = maxValue === 0 ? 0 : (entry.importance / maxValue) * (chartWidth - 14);
        return (
          <g key={entry.feature}>
            <text x={pad.left - 8} y={y + rowHeight * 0.6} textAnchor="end" className="axis-label small">
              {normalizeFeatureLabel(entry.feature)}
            </text>
            <rect x={pad.left} y={y} width={barWidth} height={Math.max(6, rowHeight - 8)} className="hbar" rx="8" />
            <text x={pad.left + barWidth + 6} y={y + rowHeight * 0.6} className="axis-label small">
              {entry.importance.toFixed(3)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function App() {
  const [price, setPrice] = useState<number | null>(null);
  const [userPrice, setUserPrice] = useState<number>(180);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    room_type: "Entire home/apt",
    accommodates: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    latitude: ASHEVILLE_LATITUDE,
    longitude: ASHEVILLE_LONGITUDE,
    neighbourhood_cleansed: chartData.topNeighborhoods[0] ?? "Downtown",
    review_scores_rating: 4.5,
    review_scores_cleanliness: 4.5,
    review_scores_location: 4.5,
    review_scores_value: 4.5,
    host_is_superhost: 1,
    instant_bookable: 1,
    amenities_count: 10,
    has_reviews: 1,
  });

  const handleChange = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const predictPrice = async () => {
    setIsLoading(true);
    setError(null);

    const payload = {
      ...formData,
      latitude: ASHEVILLE_LATITUDE,
      longitude: ASHEVILLE_LONGITUDE,
    };

    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data: { fair_price?: number; error?: string } = await res.json();
      if (!res.ok || typeof data.fair_price !== "number") {
        throw new Error(data.error ?? "Prediction failed");
      }

      setPrice(data.fair_price);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Prediction failed";
      setError(message);
      setPrice(null);
    } finally {
      setIsLoading(false);
    }
  };

  const pricingDelta = useMemo(() => {
    if (price === null) return null;
    const diff = userPrice - price;
    return {
      diff,
      isOver: diff > 0,
    };
  }, [price, userPrice]);

  return (
    <div className="app-shell">
      <main className="app-container">
        <section className="hero-panel">
          <div className="hero-badge">Asheville Fair Price Engine</div>
          <h1>Price your Airbnb with data, not guesswork.</h1>
          <p>
            This app uses a trained model to predict the cost of your AirBnb and determine whether your prices are fair or not.
            It then adds helpful visuals from Python notebooks to give you a better view on what affects cost and how.
          </p>
          <div className="hero-meta">
            <span>Anchored location</span>
            <span>
              {ASHEVILLE_LATITUDE.toFixed(4)}, {ASHEVILLE_LONGITUDE.toFixed(4)}
            </span>
          </div>
        </section>

        <section className="layout-grid">
          <article className="panel control-panel">
            <h2>Listing Inputs</h2>
            <p className="panel-subtitle">Fine-tune your listing profile with sliders and quick toggles.</p>

            <div className="section-title">Stay Basics</div>
            <SliderField label="Guests" min={1} max={16} value={formData.accommodates} onChange={(v) => handleChange("accommodates", v)} />
            <SliderField label="Bedrooms" min={0} max={8} value={formData.bedrooms} onChange={(v) => handleChange("bedrooms", v)} />
            <SliderField label="Beds" min={1} max={12} value={formData.beds} onChange={(v) => handleChange("beds", v)} />
            <SliderField
              label="Bathrooms"
              min={1}
              max={6}
              step={0.5}
              value={formData.bathrooms}
              onChange={(v) => handleChange("bathrooms", v)}
            />

            <div className="section-title">Room Type</div>
            <div className="chip-row">
              {ROOM_TYPES.map((type) => (
                <button
                  key={type}
                  className={`chip ${formData.room_type === type ? "active" : ""}`}
                  onClick={() => handleChange("room_type", type)}
                  type="button"
                >
                  {type}
                </button>
              ))}
            </div>

            <label className="field">
              <span className="field-label">Neighborhood</span>
              <select
                className="select"
                value={formData.neighbourhood_cleansed}
                onChange={(e) => handleChange("neighbourhood_cleansed", e.target.value)}
              >
                {chartData.topNeighborhoods.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>

            <div className="section-title">Guest Feedback</div>
            <SliderField
              label="Overall rating"
              min={1}
              max={5}
              step={0.1}
              value={formData.review_scores_rating}
              onChange={(v) => handleChange("review_scores_rating", v)}
            />
            <SliderField
              label="Cleanliness"
              min={1}
              max={5}
              step={0.1}
              value={formData.review_scores_cleanliness}
              onChange={(v) => handleChange("review_scores_cleanliness", v)}
            />
            <SliderField
              label="Location"
              min={1}
              max={5}
              step={0.1}
              value={formData.review_scores_location}
              onChange={(v) => handleChange("review_scores_location", v)}
            />
            <SliderField
              label="Value"
              min={1}
              max={5}
              step={0.1}
              value={formData.review_scores_value}
              onChange={(v) => handleChange("review_scores_value", v)}
            />

            <SliderField
              label="Amenities count"
              min={0}
              max={80}
              value={formData.amenities_count}
              onChange={(v) => handleChange("amenities_count", v)}
            />

            <div className="toggle-grid">
              <button
                type="button"
                className={`toggle ${formData.host_is_superhost === 1 ? "on" : ""}`}
                onClick={() => handleChange("host_is_superhost", formData.host_is_superhost === 1 ? 0 : 1)}
              >
                Superhost
              </button>
              <button
                type="button"
                className={`toggle ${formData.instant_bookable === 1 ? "on" : ""}`}
                onClick={() => handleChange("instant_bookable", formData.instant_bookable === 1 ? 0 : 1)}
              >
                Instant Bookable
              </button>
              <button
                type="button"
                className={`toggle ${formData.has_reviews === 1 ? "on" : ""}`}
                onClick={() => handleChange("has_reviews", formData.has_reviews === 1 ? 0 : 1)}
              >
                Has Reviews
              </button>
            </div>

            <div className="section-title">Compare with Your Listing Price</div>
            <SliderField label="Your nightly rate" min={40} max={1500} value={userPrice} onChange={setUserPrice} suffix=" USD" />

            <button className="predict-btn" onClick={predictPrice} disabled={isLoading} type="button">
              {isLoading ? "Running model..." : "Predict Fair Price"}
            </button>

            {error && <p className="error-text">{error}</p>}

            {price !== null && (
              <div className="result-card">
                <div>
                  <span className="result-label">Model Fair Price</span>
                  <strong>{formatCurrency(price)}</strong>
                </div>
                {pricingDelta && (
                  <div className={`delta ${pricingDelta.isOver ? "over" : "under"}`}>
                    {pricingDelta.isOver
                      ? `Overpriced by ${formatCurrency(Math.abs(pricingDelta.diff))}`
                      : `Underpriced by ${formatCurrency(Math.abs(pricingDelta.diff))}`}
                  </div>
                )}
              </div>
            )}
          </article>

          <article className="panel viz-panel">
            <h2>Notebook Visualizations</h2>
            <p className="panel-subtitle">Five key graphs from `analytics.ipynb` and `modeling.ipynb`, rebuilt for the app.</p>

            <div className="chart-grid">
              <section className="chart-card">
                <header>
                  <h3>Distribution of Airbnb Prices</h3>
                  <p>Histogram capped at $2,500.</p>
                </header>
                <HistogramChart data={chartData.priceHistogram} />
              </section>

              <section className="chart-card">
                <header>
                  <h3>Price by Room Type</h3>
                  <p>Box plot based on room category spread.</p>
                </header>
                <BoxPlotChart data={chartData.roomTypePriceBoxplot} />
              </section>

              <section className="chart-card">
                <header>
                  <h3>Price vs Number of Guests</h3>
                  <p>Scatter from listings with prices below $1,000.</p>
                </header>
                <ScatterChart data={chartData.priceVsAccommodates} />
              </section>

              <section className="chart-card">
                <header>
                  <h3>Airbnb Prices by Location</h3>
                  <p>Latitude/longitude scatter with color mapped to price.</p>
                </header>
                <LocationChart data={chartData.locationByPrice} />
              </section>

              <section className="chart-card full-span">
                <header>
                  <h3>Feature Importance in Price Prediction</h3>
                  <p>Permutation importance from the saved model.</p>
                </header>
                <FeatureImportanceChart data={chartData.featureImportance} />
              </section>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
