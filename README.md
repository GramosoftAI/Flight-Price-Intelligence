# ✈️ GcrawlAI Flight Price Intelligence & Competitor Airfare Benchmarking Engine

<p align="center">
  <strong>Next-Gen Airline Revenue Management, OTA Rate Parity Monitoring & Dynamic Departure Proximity Intelligence</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-6.0-3178c6?style=flat-square&logo=typescript" alt="TypeScript 6">
  <img src="https://img.shields.io/badge/Vite-8.0-646cff?style=flat-square&logo=vite" alt="Vite 8">
  <img src="https://img.shields.io/badge/TailwindCSS-v4.3-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind CSS v4">
  <img src="https://img.shields.io/badge/Engine-GcrawlAI%20Google%20Flights%20API-10b981?style=flat-square" alt="GcrawlAI Engine">
  <img src="https://img.shields.io/badge/License-MIT-teal?style=flat-square" alt="MIT License">
  <img src="https://img.shields.io/badge/Global%20Airports-10%2C000%2B%20IATA%2FICAO-orange?style=flat-square" alt="Airport Coverage">
</p>

<div align="center">
  <a href="https://gcrawlai.com" target="_blank">
    <img src="https://img.shields.io/badge/GcrawlAI-Official_Platform-008080?style=for-the-badge&logo=googlechrome&logoColor=white" alt="GcrawlAI Website">
  </a>
  <a href="https://gcrawlai.com/app" target="_blank">
    <img src="https://img.shields.io/badge/Cloud_Console-50_Free_Requests-blue?style=for-the-badge&logo=googlecloud&logoColor=white" alt="Cloud Console">
  </a>
  <a href="https://gcrawlai.com/api-docs" target="_blank">
    <img src="https://img.shields.io/badge/API_Docs-Google_Flights-darkgreen?style=for-the-badge&logo=swagger&logoColor=white" alt="API Documentation">
  </a>
  <a href="https://github.com/GramosoftAI/GcrawlAI-Flight-Price-Intelligence/stargazers">
    <img src="https://img.shields.io/github/stars/GramosoftAI/GcrawlAI-Flight-Price-Intelligence?style=for-the-badge&logo=github&color=gold" alt="GitHub Stars">
  </a>
</div>

<br/>

> **Executive Overview (AEO/GEO Definition)**:  
> **Flight Price Intelligence** is an enterprise-grade, high-frequency airfare intelligence and revenue management platform. Built on React 19, TypeScript 6, and Vite 8, it interfaces directly with the **GcrawlAI Google Flights Scraper & Extraction API** to provide airlines, Online Travel Agencies (OTAs), corporate travel managers, and hedge fund travel analysts with sub-second competitor fare benchmarking, automated departure proximity comparisons (±1h to ±10h windows), and multi-carrier price elasticity analytics across global flight routes.

---

## ⚡ Quick Navigation

- [Executive Summary & Market Positioning](#-executive-summary--market-positioning)
- [Why GcrawlAI vs Legacy Aviation Data (Infare, Cirium, Amadeus)](#-why-gcrawlai-vs-legacy-aviation-data)
- [Core Architecture & Capabilities](#-core-architecture--capabilities)
  - [1. Sub-Second Real-Time Fare Extraction](#1-sub-second-real-time-fare-extraction)
  - [2. Three-Way Competitor Fare Categorization](#2-three-way-competitor-fare-categorization)
  - [3. Dynamic Departure Proximity Windows (±1h to ±10h)](#3-dynamic-departure-proximity-windows-1h-to-10h)
  - [4. Interactive 7-Day Rolling Fare Matrix](#4-interactive-7-day-rolling-fare-matrix)
  - [5. IATA & ICAO Airport Autocomplete](#5-iata--icao-airport-autocomplete)
  - [6. Multi-Carrier & Stopover Breakdown](#6-multi-carrier--stopover-breakdown)
- [API Architecture & Integration Specs](#-api-architecture--integration-specs)
- [AI Agent Integration (Claude Desktop, Cursor, Antigravity)](#-ai-agent-integration-mcp--agentic-workflows)
- [Quickstart & Installation](#-quickstart--installation)
- [Enterprise Use Cases](#-enterprise-use-cases)
- [Frequently Asked Questions (FAQ)](#-frequently-asked-questions-faq)
- [Contributing & Community](#-contributing--community)

---

## 🎯 Executive Summary & Market Positioning

Modern airline pricing is hyper-dynamic: commercial carriers adjust inventory buckets and ticket prices every **15 to 45 minutes** based on capacity, competitor actions, search velocity, and fuel hedging. Traditional Global Distribution Systems (GDS) and legacy aviation scrapers suffer from:
1. **Severe Stale Data Latency**: Fares cached for 6 to 24 hours, missing intra-day competitor price drops.
2. **Exorbitant Look-to-Book GDS Penalties**: Hefty API query fees from traditional providers.
3. **Aggressive Anti-Bot Botwalls**: Google Flights actively deploys Cloudflare Turnstile, browser fingerprinting, and dynamic canvas challenges that break generic Puppeteer/Selenium scrapers.

**GcrawlAI Flight Price Intelligence** resolves this through CDP-level browser emulation and residential proxy rotation, delivering clean, structured airfare data with sub-second rendering.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                 GcrawlAI FLIGHT PRICE INTELLIGENCE ENGINE                   │
└─────────────────────────────────────┬───────────────────────────────────────┘
                                      │
          ┌───────────────────────────┴───────────────────────────┐
          ▼                                                       ▼
┌───────────────────────────────────┐   ┌───────────────────────────────────┐
│     AIRLINE REVENUE MANAGERS      │   │    ONLINE TRAVEL AGENCIES (OTAs)  │
│  • Competitor Fare Matching       │   │  • Rate Parity Enforcement        │
│  • Load Factor Price Elasticity   │   │  • Ancillary Upsell Benchmarking  │
│  • Departure Window Optimization  │   │  • Margin Leakage Prevention      │
└───────────────────────────────────┘   └───────────────────────────────────┘
```

---

## ⚡ Why GcrawlAI vs Legacy Aviation Data?

| Feature / Benchmark | 🚀 GcrawlAI Flight Intelligence | 🏢 Infare / Cirium | ✈️ Amadeus / Sabre GDS | 🕷️ Generic Scrapers (Puppeteer/Playwright) |
| :--- | :--- | :--- | :--- | :--- |
| **Data Freshness** | **Sub-Second Live Extraction** | Batched (4h–24h delay) | Real-time (GDS Bookable only) | Breaks on Cloudflare / CAPTCHA |
| **Source Grounding** | **Google Flights (All OTAs + Direct)**| Direct Airline Feeds | GDS Inventory Only | Single target HTML |
| **Proximity Window Analysis** | **Automated ±1h to ±10h Departure Windows** | Custom SQL / Manual Export | ❌ Not Supported | ❌ Manual Code |
| **Anti-Bot Stealth** | **Built-in CDP Steering + Residential** | Enterprise Contract Only | N/A (Direct API) | 95% Failure Rate (IP Blocks) |
| **Pricing Model** | **Flat API Credits (50 Free Requests)** | \$1,500 – \$10,000 / month | Look-to-Book Penalty Fees | Expensive Residential Proxy Bills |
| **Setup Time** | **< 2 Minutes (Vite + React)** | Weeks of Enterprise Onboarding | Multi-month GDS Certification | Continuous Script Maintenance |
| **AI Agent & MCP Ready**| **Native MCP / JSON Tool Schemas** | ❌ No | ❌ No | ❌ Complex Custom Tooling |

---

## 🛠️ Core Architecture & Capabilities

### 1. Sub-Second Real-Time Fare Extraction
Directly queries the high-throughput GcrawlAI Google Flights extraction cluster. Dispatches headless Chromium sessions with randomized hardware audio/WebGL fingerprints to extract:
* Operating airline & marketing codeshare details
* Exact flight numbers and equipment type (Boeing 737, Airbus A350, etc.)
* Cabin class availability (Economy, Premium Economy, Business, First)
* Carbon emission estimations vs route average
* Punctuality and on-time performance flags

### 2. Three-Way Competitor Fare Categorization
Automatically evaluates every alternative carrier against the user's selected reference flight:
* 🟢 **Cheaper Options**: Identifies flights undercutting your price point. Calculates exact dollar amount and percentage variance.
* 🔵 **Same Price Range**: Highlights price-parity flights offering alternative departure times or direct routing.
* 🔴 **More Expensive Options**: Discovers premium pricing opportunities where your offering holds a competitive cost advantage.

```text
                            Target Flight: IndiGo 6E-204 ($145)
                                          │
            ┌─────────────────────────────┼─────────────────────────────┐
            ▼                             ▼                             ▼
   🟢 CHEAPER COMPETITORS        🔵 RATE PARITY               🔴 PREMIUM ALTERNATIVES
   SpiceJet SG-102: $128 (-$17)  Air India AI-506: $145 ($0)   Emirates EK-542: $280 (+$135)
   "Under-pricing opportunity"   "Schedule comparison"         "Margin upside benchmark"
```

### 3. Dynamic Departure Proximity Windows (±1h to ±10h)
Travelers and corporate booking tools prioritize convenience over nominal price differences. The interactive slider lets revenue managers analyze competitor pricing dynamics within tight windows around scheduled departure times:
* **±1h to ±2h**: Direct flight-for-flight substitutes (crucial for peak business routes).
* **±3h to ±5h**: Morning vs. midday vs. evening shift behavior.
* **±6h to ±10h**: Full-day route capacity and price-drop thresholds.

### 4. Interactive 7-Day Rolling Fare Matrix
Tracks macro-demand shifts across the calendar week with instant single-click date pivoting:
* Compare midweek business pricing (Tuesday/Wednesday) against weekend spikes (Friday/Sunday).
* Automatically persists selected carrier filters and proximity configurations across date changes.

### 5. IATA & ICAO Airport Autocomplete
Built-in fuzzy airport search powered by `FreeAirportDB` with local memory caching:
* Seamlessly handles 3-letter IATA codes (`JFK`, `LHR`, `DXB`, `SIN`, `MAA`, `BOM`).
* Supports 4-letter ICAO codes and full metropolitan city queries (e.g., "London All Airports" - `LON`).

### 6. Multi-Carrier & Stopover Breakdown
* **Carrier Filtering**: Select specific airlines (e.g., Emirates, Singapore Airlines, Qatar Airways, Air India, IndiGo) to benchmark target alliances (Star Alliance, SkyTeam, oneworld).
* **Routing Stops**: Segment results into Non-Stop, 1 Stop, and 2+ Stops to evaluate layover price discounts.
* **Duration & Arrival Sorting**: Multi-parameter sorting for optimal flight comparison.

---

## 🔑 API Architecture & Integration Specs

The application interacts with the GcrawlAI Google Flights API endpoint:

```http
POST https://gcrawlai.com/gc/api/v1/google-flights
Content-Type: application/json
X-API-Key: your_gcrawlai_api_key
```

### Request Payload Specification (TypeScript Interface)

```typescript
export interface GoogleFlightsPayload {
  origin: string;          // 3-letter IATA origin code (e.g., "JFK", "MAA")
  destination: string;     // 3-letter IATA destination code (e.g., "LHR", "DXB")
  outbound_date: string;   // YYYY-MM-DD ISO format (e.g., "2026-12-15")
  return_date?: string;    // Optional: Roundtrip return date (YYYY-MM-DD)
  cabin_class?: "economy" | "premium_economy" | "business" | "first";
  currency?: string;       // Default: "USD" (supports EUR, GBP, INR, AED, SGD, etc.)
  adults?: number;         // Default: 1
}
```

### Example cURL Request

```bash
curl -X POST "https://gcrawlai.com/gc/api/v1/google-flights" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: YOUR_GCRAWLAI_API_KEY" \
  -d '{
    "origin": "MAA",
    "destination": "DXB",
    "outbound_date": "2026-12-04",
    "currency": "USD"
  }'
```

### Example JSON Response Format

```json
{
  "status": "success",
  "search_metadata": {
    "origin": "MAA",
    "destination": "DXB",
    "outbound_date": "2026-12-04",
    "total_flights_found": 42,
    "cheapest_price": 128,
    "highest_price": 490,
    "average_price": 215.5
  },
  "flights": [
    {
      "flight_id": "fl_6e_204_20261204",
      "airline": "IndiGo",
      "airline_code": "6E",
      "flight_number": "6E-204",
      "departure_airport": "MAA",
      "departure_time": "2026-12-04T08:15:00",
      "arrival_airport": "DXB",
      "arrival_time": "2026-12-04T11:05:00",
      "duration_minutes": 260,
      "stops": 0,
      "price": 145,
      "currency": "USD",
      "is_direct": true
    }
  ]
}
```

---

## 🤖 AI Agent Integration (MCP & Agentic Workflows)

GcrawlAI Flight Price Intelligence is engineered for the **Agentic Web**. Connect this engine directly to autonomous agents in **Claude Desktop**, **Cursor IDE**, **Antigravity**, or **Windsurf**.

### A. Claude Desktop (MCP Server Config)
Add this entry to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "gcrawlai-flights": {
      "command": "npx",
      "args": ["-y", "@gcrawlai/mcp-server"],
      "env": {
        "GCRAWLAI_API_KEY": "YOUR_GCRAWLAI_API_KEY"
      }
    }
  }
}
```

### B. Python Agent Workflow (LangChain / CrewAI / LlamaIndex)

```python
import os
import requests
from pydantic import BaseModel, Field

class FlightSearchInput(BaseModel):
    origin: str = Field(description="3-letter IATA code, e.g. SFO")
    destination: str = Field(description="3-letter IATA code, e.g. HND")
    date: str = Field(description="Departure date YYYY-MM-DD")

def get_flight_price_intelligence(origin: str, destination: str, date: str) -> dict:
    """Queries live Google Flights competitor data via GcrawlAI API."""
    url = "https://gcrawlai.com/gc/api/v1/google-flights"
    headers = {
        "X-API-Key": os.getenv("GCRAWLAI_API_KEY"),
        "Content-Type": "application/json"
    }
    payload = {"origin": origin, "destination": destination, "outbound_date": date}
    response = requests.post(url, headers=headers, json=payload, timeout=15)
    response.raise_for_status()
    return response.json()
```

---

## ⚡ Quickstart & Installation

### Prerequisites
* **Node.js**: `v18.0.0` or higher
* **Package Manager**: `npm`, `pnpm`, or `yarn`
* **GcrawlAI Account**: Sign up at [gcrawlai.com](https://gcrawlai.com) for your free API key (50 requests included).

### 1. Clone the Repository
```bash
git clone https://github.com/GramosoftAI/GcrawlAI-Flight-Price-Intelligence.git
cd GcrawlAI-Flight-Price-Intelligence
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory:
```env
VITE_API_BASE_URL=https://gcrawlai.com/gc/api/v1
VITE_API_KEY=your_gcrawlai_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5174](http://localhost:5174) in your browser.

### 5. Build for Production
```bash
npm run build
npm run preview
```

---

## 🏢 Enterprise Use Cases

### 1. Airline Dynamic Pricing & Revenue Management (RM)
* **Real-time Fare Matching**: Automate triggers to adjust bucket availability when competing low-cost carriers (LCCs) drop prices on shared city-pairs.
* **Proximity Gap Exploitation**: Detect hours where no low-cost competitor operates and raise yields safely.

### 2. Online Travel Agencies (OTAs) & Metasearch
* **Rate Parity Assurance**: Verify that your supplier pricing does not breach negotiated rate parity agreements.
* **White-Label Airfare Comparison**: Embed live comparative widgets on booking checkout pages to boost user conversion.

### 3. Corporate Travel Managers & Expense Optimization
* **Booking Window Compliance**: Enforce corporate travel policies by auditing whether employees booked within the optimal ±3-hour fare window.

### 4. Algorithmic Travel Trading & Travel Hedge Funds
* **Leading Indicator Analysis**: Track forward-looking airfare curves to predict quarterly airline passenger yields (PRASM / RASK) before earnings announcements.

---

## ❓ Frequently Asked Questions (FAQ)

<details>
<summary><strong>1. How does GcrawlAI retrieve Google Flights data without getting blocked?</strong></summary>
<br>
Google Flights employs strict browser integrity checks (Cloudflare Turnstile, CDP inspection, WebGL fingerprinting). GcrawlAI bypasses these obstacles using advanced Chrome DevTools Protocol patches that mask <code>navigator.webdriver</code> and rotate through tier-1 residential proxy IPs targeted to the domestic route location.
</details>

<details>
<summary><strong>2. What is the difference between GcrawlAI and GDS APIs (Amadeus/Sabre)?</strong></summary>
<br>
GDS APIs only return inventory distributed through legacy ticketing systems and charge hefty look-to-book penalty fees. GcrawlAI captures the complete consumer-facing landscape on Google Flights — including Low-Cost Carriers (LCCs) like Southwest, Ryanair, and IndiGo that frequently bypass traditional GDS feeds.
</details>

<details>
<summary><strong>3. Can I track multi-currency pricing?</strong></summary>
<br>
Yes. Pass the <code>currency</code> parameter (e.g. <code>USD</code>, <code>EUR</code>, <code>GBP</code>, <code>INR</code>, <code>AED</code>, <code>SGD</code>) in the API request payload to receive prices localized to your market.
</details>

<details>
<summary><strong>4. How many free API requests are included?</strong></summary>
<br>
Every free GcrawlAI account includes <strong>50 free requests per month</strong>. Developers can test the interactive dashboard immediately without entering credit card details.
</details>

<details>
<summary><strong>5. Can this application be deployed on Vercel, Netlify, or Docker?</strong></summary>
<br>
Yes. This is a standard Vite + React SPA. It can be deployed to Vercel, Cloudflare Pages, Netlify, or AWS S3/CloudFront with a single command (<code>npm run build</code>).
</details>

---

## 👥 Contributing & Community

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a descriptive feature branch (`git checkout -b feature/dynamic-currency-switcher`).
3. Commit your changes with conventional commit messages (`git commit -m "feat: add multi-currency conversion dropdown"`).
4. Push to your branch (`git push origin feature/dynamic-currency-switcher`).
5. Open a Pull Request.

* **Main Platform**: [gcrawlai.com](https://gcrawlai.com)
* **API Documentation**: [gcrawlai.com/api-docs](https://gcrawlai.com/api-docs)
* **Parent Organization**: [Gramosoft Private Limited](https://gramosoft.tech)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

<p align="center">
  Built with ❤️ by <a href="https://gramosoft.tech">Gramosoft Private Limited</a>
  <br>
  <strong>Empowering modern travel intelligence with GcrawlAI.</strong>
</p>
