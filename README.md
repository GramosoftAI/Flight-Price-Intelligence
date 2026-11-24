# ✈️ Flight Price Intelligence

### Smarter Flight Pricing. Deeper Competitor Insights. Better Decisions.

**Flight Price Intelligence** is an independent, production-ready React + TypeScript + Vite application designed to transform live flight fare data into actionable pricing intelligence.

Powered by the **GCrawlAI Google Flights API**, this platform enables users to retrieve flight fares, benchmark competitor pricing, compare departure proximity windows, and analyze multi-carrier flight prices through an interactive intelligence dashboard.

Discover pricing opportunities, understand competitor positioning, and make smarter, data-driven flight pricing decisions.

---

## 🌟 Key Features

| Feature | Description |
|---|---|
| ✈️ Real-Time Fare Extraction | Retrieve live flight pricing through GCrawlAI Google Flights API |
| 📊 Competitor Benchmarking | Identify cheaper, same-price, and more expensive competitor flights |
| ⏱️ Proximity Window Analysis | Compare flights within flexible ±1 to ±10-hour departure windows |
| 📅 Interactive 7-Day Calendar | Compare flight prices across consecutive travel dates |
| 🌍 Airport Autocomplete | Search airports using IATA and ICAO codes |
| 🏢 Multi-Carrier Tracking | Analyze pricing across multiple operating airlines |
| 🔍 Advanced Filtering | Filter flights by stops and operating carriers |
| ↕️ Smart Sorting | Sort by price, duration, departure, and arrival time |
| 📈 Pricing Analytics | Calculate minimum, maximum, and average competitor fares |
| 📱 Responsive Dashboard | Optimized for desktop, tablet, and mobile devices |

---

## 🚀 Core Features

### 1. Real-Time Flight Price Intelligence

Retrieve flight schedules and fare information through the GCrawlAI Google Flights integration.

**Capabilities:**
- One-way flight searches
- Full flight schedule retrieval
- Origin and destination airport selection
- Travel date-based fare searches
- Live flight pricing information
- API-powered flight data retrieval

**API Endpoint:**

```http
POST /api/v1/google-flights
```

### 2. Competitor Fare Benchmarking

Compare your selected target flight against competing flight options.

Flights are automatically categorized into three pricing groups:

- 🟢 **Cheaper:** Competitor fares below the target flight price.
- 🔵 **Same Price:** Competitor fares matching the target flight price.
- 🔴 **More Expensive:** Competitor fares above the target flight price.

**Pricing Analytics:**
- Minimum competitor fare
- Maximum competitor fare
- Average competitor fare
- Price difference analysis
- Potential savings opportunities
- Competitive pricing positioning

### 3. Dynamic Proximity Window Analysis

Compare flights departing before and after your selected target flight.

The flexible proximity selector supports departure windows ranging from ±1 hour to ±10 hours.

**Available Comparison Windows:**

```text
       Target Flight
             │
      ┌──────┴──────┐
      │             │
  Earlier       Later
  Flights       Flights
      │             │
      └──────┬──────┘
             │
     Proximity Analysis
             │
       ±1 to ±10 Hours
             │
             ▼
    Competitor Fare Analysis
```

Identify nearby departure options and understand how flight prices change throughout the selected time window.

### 4. Interactive 7-Day Date Selector

Explore flight pricing across consecutive travel dates.

**Features:**
- Interactive seven-day date strip
- One-click date switching
- Date-based fare retrieval
- Quick comparison across travel dates
- Updated flight results based on selected dates

### 5. Multi-Carrier Fare Tracking

Monitor and compare available flight prices across multiple airlines.

Carrier filtering includes:

- IndiGo
- Air India
- Emirates
- Singapore Airlines
- Other available operating carriers

### 6. Advanced Filtering & Sorting

Customize flight results using flexible filtering and sorting controls.

**Filters:**
- Non-stop flights
- 1-stop flights
- 2+ stops
- Operating carrier selection

**Sorting Options:**
- Price: Low to High
- Flight Duration
- Departure Time
- Arrival Time

### 7. Global Airport Autocomplete

Fast airport discovery powered by FreeAirportDB.

**Features:**
- Debounced airport search
- IATA airport code lookup
- ICAO airport code lookup
- Curated fallback list of major global airports
- Quick origin and destination selection

### 8. Modern Responsive Dashboard

A modern interface designed for flight pricing intelligence.

**UI Highlights:**
- Premium dark-mode aesthetic
- Custom glassmorphism effects
- Interactive flight comparison cards
- Clear pricing indicators
- Dynamic data presentation
- Responsive layouts
- Intuitive navigation
- Mobile-friendly interactions

---

## 🖥️ Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend application framework |
| TypeScript | Type-safe development |
| Vite | Development server and build tooling |
| Axios | HTTP requests and API communication |
| Tailwind CSS | Utility-first styling |
| CSS3 | Custom dashboard styling and glassmorphism |
| GCrawlAI API | Google Flights fare retrieval |
| FreeAirportDB | Airport search and autocomplete |

---

## 📂 Project Structure

```text
flightpriceintelligenceduplicate/
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
│
└── src/
    │
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── vite-env.d.ts
    │
    ├── components/
    │   ├── common/
    │   │   ├── AirportSelectInput.tsx
    │   │   └── SEO.tsx
    │   │
    │   ├── layout/
    │   │   ├── Navbar.tsx
    │   │   └── Footer.tsx
    │   │
    │   └── ErrorBoundary.tsx
    │
    ├── page/
    │   ├── FlightPriceIntelligence.tsx
    │   └── FlightPriceIntelligence.css
    │
    ├── services/
    │   ├── apiConfig.ts
    │   ├── apiKey.ts
    │   └── flightApi.ts
    │
    └── utils/
        └── airportApi.ts
```

---

## ⚡ Getting Started

Follow these instructions to set up and run Flight Price Intelligence locally.

### Prerequisites

Make sure you have installed:

- **Node.js:** v18.0.0 or higher
- **npm**, **pnpm**, or **yarn**
- A GCrawlAI account with API access

### Step 1: Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
```

### Step 2: Navigate to the Project

```bash
cd flightpriceintelligenceduplicate
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Get Your GCrawlAI API Key

The application uses the GCrawlAI API to retrieve Google Flights pricing information.

Follow these steps to obtain your API key.

**1. Visit the official GCrawlAI website**

https://gcrawlai.com

**2. Open the GCrawlAI Console**

Log in to your GCrawlAI account and access the Console.

**3. Navigate to API Keys**

Inside the Console, follow this navigation path:

```text
GCrawlAI Website
      │
      ▼
    Console
      │
      ▼
  Management
      │
      ▼
   API Keys
```

**4. Generate and Copy Your API Key**

- Open the API Keys section.
- Generate a new API key if you do not already have one.
- Copy the generated API key.

<details>
<summary><strong>API Key Navigation Reference</strong></summary>

| Step | Navigation |
|---|---|
| 1 | https://gcrawlai.com |
| 2 | Console |
| 3 | Management |
| 4 | API Keys |
| 5 | Generate / Copy API Key |

</details>

### Step 5: Configure Environment Variables

Create a `.env` file in the project root directory.

Add your GCrawlAI API configuration:

```env
VITE_API_BASE_URL=https://gcrawlai.com/gc/api/v1
VITE_API_KEY=PASTE_YOUR_COPIED_API_KEY_HERE
```

Replace `PASTE_YOUR_COPIED_API_KEY_HERE` with the API key copied from your GCrawlAI Console.

### Step 6: Configure API Key Storage

The dedicated API key management file is:

```text
src/services/apiKey.ts
```

The application supports the following configuration:

**Option 1: Environment Variable**

```env
VITE_API_KEY=YOUR_API_KEY
```

**Option 2: Direct Configuration**

```typescript
export const API_KEY: string = "YOUR_API_KEY";
```

The API service retrieves the configured key and includes it in authenticated requests.

**Important:** Do not commit real API keys to GitHub. Vite exposes `VITE_` environment variables to client-side code. For production, keep the API key on a secure backend and proxy requests through that backend. Add `.env` to `.gitignore`.

### Step 7: Start the Development Server

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5174/
```

If port 5174 is unavailable, Vite will use the next available port.

### Step 8: Build for Production

```bash
npm run build
```

The optimized production bundle will be generated inside:

```text
dist/
```

### Step 9: Preview Production Build

```bash
npm run preview
```

---

## 🔑 API Configuration

Flight Price Intelligence communicates with the GCrawlAI Google Flights API.

**Default API Base URL:**

```text
https://gcrawlai.com/gc/api/v1
```

### Authentication

API requests support authentication through the `X-API-Key` request header.

**Required Header:**

```http
Content-Type: application/json
X-API-Key: YOUR_API_KEY
```

### Google Flights API Request

**Endpoint:**

```http
POST https://gcrawlai.com/gc/api/v1/google-flights
```

**Example cURL Request:**

```bash
curl -X POST \
  https://gcrawlai.com/gc/api/v1/google-flights \
  -H "Content-Type: application/json" \
  -H "X-API-Key: YOUR_API_KEY" \
  -d '{
    "origin": "MAA",
    "destination": "DXB",
    "outbound_date": "2026-12-04"
  }'
```

**Example Request Parameters:**

| Parameter | Example | Description |
|---|---|---|
| origin | MAA | Origin airport IATA code |
| destination | DXB | Destination airport IATA code |
| outbound_date | 2026-12-04 | Departure date |

Refer to the current GCrawlAI API documentation for the complete supported request schema and response format.

### API Service Architecture

```text
React Dashboard
      │
      ▼
FlightPriceIntelligence.tsx
      │
      ▼
flightApi.ts
      │
      ▼
apiConfig.ts
      │
      ▼
apiKey.ts
      │
      ▼
GCrawlAI API
      │
      ▼
Google Flights Data
      │
      ▼
Flight Pricing Analytics
```

---

## 📊 Flight Pricing Intelligence Workflow

```text
┌───────────────────────────────┐
│       Airport Selection       │
│     Origin & Destination      │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│       Travel Date Selection   │
│       Interactive 7 Days      │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│        GCrawlAI API           │
│      Google Flights Data      │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│     Flight Schedule Data      │
│       Fare Extraction         │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│     Proximity Window Analysis │
│         ±1 to ±10 Hours        │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│    Competitor Benchmarking    │
│   Cheaper / Same / Expensive  │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│      Pricing Analytics        │
│    Carrier & Fare Insights    │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│     Actionable Insights       │
│    Intelligent Decisions     │
└───────────────────────────────┘
```

---

## 🌍 Use Cases

Flight Price Intelligence can support multiple travel and aviation-related business workflows.

**Airline Pricing Teams**
- Monitor competitor fare positioning.
- Understand nearby departure pricing.
- Identify competitive pricing opportunities.

**Travel Agencies**
- Compare available flight fares.
- Explore alternative departure schedules.
- Evaluate airline pricing differences.

**Travel Aggregators**
- Analyze multi-carrier fare information.
- Benchmark available flight options.
- Support pricing comparison workflows.

**Revenue Management Teams**
- Analyze competitor pricing trends.
- Identify potential fare savings.
- Support data-driven pricing decisions.

**Market Intelligence Teams**
- Understand competitive flight pricing.
- Compare pricing across travel dates.
- Analyze carrier-level fare differences.

---

## 🛠️ Available NPM Scripts

| Command | Description |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Generate production build |
| `npm run preview` | Preview production build |

---

## 🔒 Security & Best Practices

- Never commit API keys or secrets to public repositories.
- Keep `.env` in `.gitignore`.
- Use secure backend API proxying for production credentials.
- Do not expose private API keys in browser-side JavaScript.
- Avoid sharing API keys in screenshots or logs.
- Rotate API keys if they are accidentally exposed.
- Follow GCrawlAI API usage limits and applicable terms.

---

## 🔗 Official Resources

| Resource | Link |
|---|---|
| GCrawlAI Website | https://gcrawlai.com |
| GCrawlAI Console | https://gcrawlai.com/console |
| GCrawlAI API Documentation | https://gcrawlai.com/docs |
| FreeAirportDB | https://freeairportdb.com |

---

## 📜 License & Credits

Flight Price Intelligence is an independent application module based on the GCrawlAI Flight Price Intelligence feature.

**Credits:**
- Flight fare integration: GCrawlAI
- Flight information: Google Flights integration through GCrawlAI API
- Airport lookup data: FreeAirportDB
- Frontend framework: React + TypeScript + Vite

Refer to the repository's license file for applicable usage and distribution terms.

---

## ✈️ Powered by GCrawlAI

### Real-Time Fares. Competitor Insights. Intelligent Decisions.

Transform flight pricing data into actionable intelligence with **Flight Price Intelligence**.

🌐 **Website:** https://gcrawlai.com

**Built with React, TypeScript, Vite & GCrawlAI API.**
