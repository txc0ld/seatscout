"use client";

import { startTransition, useDeferredValue, useEffect, useRef, useState } from "react";
import { buildSectionDetail, featuredVenues, formatDistance, geography, getNearbyVenues, venues } from "./data/venues.js";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();

  return (
    <div ref={ref} className={`reveal${visible ? " is-visible" : ""} ${className}`.trim()} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function useUserLocation() {
  const [location, setLocation] = useState(null);
  const [status, setStatus] = useState("idle");

  function requestLocation() {
    if (!navigator.geolocation) {
      setStatus("unsupported");
      return;
    }

    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocation({ lat: coords.latitude, lng: coords.longitude });
        setStatus("granted");
      },
      () => setStatus("denied"),
      { enableHighAccuracy: false, timeout: 10000 },
    );
  }

  return { location, status, requestLocation };
}

function RatingBar({ label, value }) {
  const tone = value >= 4.3 ? "#22c55e" : value >= 3.7 ? "#84cc16" : value >= 3 ? "#eab308" : "#ef4444";

  return (
    <div className="rating-row">
      <div className="rating-meta">
        <span>{label}</span>
        <strong style={{ color: tone }}>{value.toFixed(1)}</strong>
      </div>
      <div className="rating-track">
        <div className="rating-fill" style={{ width: `${(value / 5) * 100}%`, backgroundColor: tone }} />
      </div>
    </div>
  );
}

function VenueMap({ venue, sections, selectedSectionId, hoveredSectionId, onSelect, onHover, interactive = true }) {
  const centerX = 240;
  const centerY = 240;
  const grouped = sections.reduce((accumulator, section) => {
    const key = section.level || "Lower";
    if (!accumulator[key]) accumulator[key] = [];
    accumulator[key].push(section);
    return accumulator;
  }, {});
  const levelOrder = ["Floor", "Lower", "Mid", "Premium", "Upper", "Suite"];
  const levels = Object.keys(grouped).sort((left, right) => levelOrder.indexOf(left) - levelOrder.indexOf(right));
  const innerRadius = venue.type === "arena" || venue.type === "amphitheater" ? 78 : 92;
  const outerRadius = 214;
  const step = levels.length > 1 ? (outerRadius - innerRadius) / levels.length : outerRadius - innerRadius;
  const radii = Object.fromEntries(levels.map((level, index) => [level, { inner: innerRadius + index * step, outer: innerRadius + (index + 1) * step - 6 }]));
  const halfBowl = venue.type === "amphitheater" || venue.type === "horseshoe";
  const previewSection = sections.find((section) => section.id === hoveredSectionId) || sections.find((section) => section.id === selectedSectionId) || sections[0];

  function polar(angle, radius) {
    const radians = ((angle - 90) * Math.PI) / 180;
    return [centerX + radius * Math.cos(radians), centerY + radius * Math.sin(radians)];
  }

  function sectionTone(section) {
    if (section.overallRating >= 4.4) return "#22c55e";
    if (section.overallRating >= 3.8) return "#84cc16";
    if (section.overallRating >= 3.1) return "#eab308";
    return "#ef4444";
  }

  return (
    <div className="map-shell">
      <svg viewBox="0 0 480 480" className="seat-map" role="img" aria-label={`${venue.name} seat map`}>
        <defs>
          <radialGradient id="seat-sheen" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        <g opacity="0.9">
          {venue.type === "arena" || venue.type === "amphitheater" ? (
            <rect x="175" y="183" width="130" height="86" rx="18" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.3)" />
          ) : venue.type === "oval" ? (
            <ellipse cx="240" cy="228" rx="76" ry="56" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.24)" />
          ) : (
            <rect x="165" y="170" width="150" height="110" rx="22" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.24)" />
          )}
          <text x="240" y="230" textAnchor="middle" className="map-label" pointerEvents="none">
            {venue.type === "arena" || venue.type === "amphitheater" ? "STAGE" : "PITCH"}
          </text>
        </g>

        {levels.map((level) =>
          grouped[level].map((section, index) => {
            const tone = sectionTone(section);
            const ring = radii[level];
            const span = halfBowl ? 270 : 360;
            const offset = halfBowl ? 135 : 0;
            const stepAngle = span / grouped[level].length;
            const start = offset + index * stepAngle;
            const end = start + stepAngle - 2;
            const largeArc = end - start > 180 ? 1 : 0;
            const [x1, y1] = polar(start, ring.outer);
            const [x2, y2] = polar(end, ring.outer);
            const [x3, y3] = polar(end, ring.inner);
            const [x4, y4] = polar(start, ring.inner);
            const [labelX, labelY] = polar((start + end) / 2, (ring.inner + ring.outer) / 2);
            const selected = selectedSectionId === section.id;
            const hovered = hoveredSectionId === section.id;
            const fill = selected ? tone : hovered ? `${tone}3d` : `${tone}1f`;

            return (
              <g key={section.id}>
                <path
                  className={`map-section${selected ? " is-selected" : ""}${hovered ? " is-hovered" : ""}`}
                  d={`M ${x1} ${y1} A ${ring.outer} ${ring.outer} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${ring.inner} ${ring.inner} 0 ${largeArc} 0 ${x4} ${y4} Z`}
                  fill={fill}
                  stroke={selected || hovered ? "#fff" : tone}
                  strokeWidth={selected ? "2.4" : "1"}
                  tabIndex={interactive ? 0 : -1}
                  role={interactive ? "button" : undefined}
                  aria-label={interactive ? `${section.name}, ${section.level}, rating ${section.overallRating.toFixed(1)}` : undefined}
                  aria-pressed={interactive ? selected : undefined}
                  onMouseEnter={interactive ? () => onHover(section.id) : undefined}
                  onMouseLeave={interactive ? () => onHover(null) : undefined}
                  onFocus={interactive ? () => onHover(section.id) : undefined}
                  onBlur={interactive ? () => onHover(null) : undefined}
                  onClick={interactive ? () => onSelect(section.id) : undefined}
                  onKeyDown={
                    interactive
                      ? (event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            onSelect(section.id);
                          }
                        }
                      : undefined
                  }
                  style={{ cursor: interactive ? "pointer" : "default" }}
                />
                <text
                  x={labelX}
                  y={labelY + 3}
                  textAnchor="middle"
                  className={`map-name${selected ? " is-selected" : ""}${hovered ? " is-hovered" : ""}`}
                  pointerEvents="none"
                >
                  {section.name.replace(/^(Section|Block|Bay|Setor|Sector|Stand|Gate|Terrace)\s*/i, "").slice(0, 6)}
                </text>
              </g>
            );
          }),
        )}

        {[
          ["N", 240, 24],
          ["S", 240, 462],
          ["E", 454, 243],
          ["W", 24, 243],
        ].map(([label, x, y]) => (
          <text key={label} x={x} y={y} textAnchor="middle" className="map-compass" pointerEvents="none">
            {label}
          </text>
        ))}
        <circle cx="240" cy="240" r="214" fill="url(#seat-sheen)" pointerEvents="none" />
      </svg>
      <div className="map-legend">
        {levels.map((level) => (
          <span key={level}>{level}</span>
        ))}
      </div>
      {interactive && previewSection && (
        <div className={`map-preview${hoveredSectionId ? " is-hovering" : ""}`}>
          <div className="map-preview-head">
            <div>
              <p className="eyebrow">{hoveredSectionId ? "Hover Preview" : "Selected Section"}</p>
              <strong>{previewSection.name}</strong>
            </div>
            <span>{previewSection.overallRating.toFixed(1)} / 5</span>
          </div>
          <p className="map-preview-copy">
            {previewSection.level} · {previewSection.zone} · {previewSection.priceRange}
          </p>
          <p className="map-preview-copy">{previewSection.bestFor}</p>
        </div>
      )}
    </div>
  );
}

function SectionInspector({ section, venue }) {
  const detail = buildSectionDetail(section, venue);

  return (
    <section className="inspector">
      <div className="inspector-header">
        <div>
          <p className="eyebrow">Selected Section</p>
          <h3>{section.name}</h3>
          <div className="chip-row">
            <span className="chip accent">{section.level}</span>
            <span className="chip">{section.zone}</span>
            <span className="chip">{section.priceRange}</span>
          </div>
        </div>
        <div className="score-pill">
          <strong>{section.overallRating.toFixed(1)}</strong>
          <span>/ 5</span>
        </div>
      </div>

      <p className="inspector-copy">{detail.overview}</p>

      <div className="ratings-grid">
        <RatingBar label="View" value={section.viewRating} />
        <RatingBar label="Comfort" value={section.comfortRating} />
        <RatingBar label="Value" value={section.valueRating} />
        <RatingBar label="Access" value={section.accessRating} />
        <RatingBar label="Atmosphere" value={section.atmosphereRating} />
      </div>

      <div className="split-grid">
        <div className="info-panel">
          <h4>Strengths</h4>
          {section.pros.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="info-panel">
          <h4>Tradeoffs</h4>
          {section.cons.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>

      <div className="detail-grid">
        {Object.entries({
          "Best for": section.bestFor,
          "Best rows": section.bestRows,
          Avoid: section.avoidRows,
          Weather: section.weatherExposure,
          Access: section.nearestFacilities,
        }).map(([label, value]) => (
          <div key={label} className="detail-tile">
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="tip-banner">
        <p className="eyebrow">Insider Tip</p>
        <strong>{section.insiderTip}</strong>
      </div>

      <div className="row-bands">
        {detail.rowAnalysis.map((row) => (
          <article key={row.rows} className="band-card">
            <div className="band-head">
              <strong>Rows {row.rows}</strong>
              <span>{row.rating.toFixed(1)}</span>
            </div>
            <p>{row.experience}</p>
            <div className="chip-row">
              {row.pros.map((item) => (
                <span key={item} className="chip chip-positive">
                  {item}
                </span>
              ))}
              {row.cons.map((item) => (
                <span key={item} className="chip chip-negative">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="split-grid">
        <div className="info-panel">
          <h4>Seat picker</h4>
          {Object.entries(detail.seatPositions).map(([label, value]) => (
            <p key={label}>
              <strong>{label.replace(/([A-Z])/g, " $1").trim()}:</strong> {value}
            </p>
          ))}
        </div>
        <div className="info-panel">
          <h4>Event notes</h4>
          {Object.entries(detail.eventSpecific).map(([label, value]) => (
            <p key={label}>
              <strong>{label}:</strong> {value}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function VenueCard({ venue, onSelect, compact = false }) {
  const topSection = [...venue.sections].sort((left, right) => right.overallRating - left.overallRating)[0];

  return (
    <button className={`venue-card${compact ? " compact" : ""}`} onClick={() => onSelect(venue.id)}>
      <div className="venue-card-top">
        <span className="venue-emoji">{venue.emoji}</span>
        <span className="chip">{venue.type}</span>
      </div>
      <div>
        <h3>{venue.name}</h3>
        <p>
          {venue.city}, {venue.country}
        </p>
      </div>
      <div className="venue-meta">
        <span>{venue.capacity.toLocaleString()} seats</span>
        <span>{venue.primaryUse}</span>
      </div>
      <div className="venue-card-bottom">
        <span>{venue.region}</span>
        <strong>{topSection?.overallRating.toFixed(1)} best section</strong>
      </div>
    </button>
  );
}

export default function App() {
  const location = useUserLocation();
  const [view, setView] = useState("home");
  const [activeVenueId, setActiveVenueId] = useState(featuredVenues[0]?.id || venues[0].id);
  const [selectedSectionId, setSelectedSectionId] = useState(null);
  const [query, setQuery] = useState("");
  const [continentFilter, setContinentFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortKey, setSortKey] = useState("featured");
  const [heroIndex, setHeroIndex] = useState(0);
  const [hoveredSectionId, setHoveredSectionId] = useState(null);

  const deferredQuery = useDeferredValue(query);
  const activeVenue = venues.find((venue) => venue.id === activeVenueId) || venues[0];

  useEffect(() => {
    if (!activeVenue) return;
    const preferred = [...activeVenue.sections].sort((left, right) => right.overallRating - left.overallRating)[0];
    setSelectedSectionId(preferred?.id || activeVenue.sections[0]?.id || null);
    setHoveredSectionId(null);
  }, [activeVenueId]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % featuredVenues.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view, activeVenueId]);

  const heroVenue = featuredVenues[heroIndex % featuredVenues.length];
  const selectedSection = activeVenue.sections.find((section) => section.id === selectedSectionId) || activeVenue.sections[0];
  const nearbyVenues = location.location ? getNearbyVenues(location.location, 6) : [];
  const continentOptions = ["All", ...geography.map((entry) => entry.continent)];
  const typeOptions = ["All", ...new Set(venues.map((venue) => venue.type))];
  const totalSections = venues.reduce((count, venue) => count + venue.sections.length, 0);
  const regions = {
    usa: venues.filter((venue) => venue.country === "United States"),
    australia: venues.filter((venue) => venue.country === "Australia"),
    indoor: venues.filter((venue) => venue.type === "arena"),
  };

  const normalizedQuery = deferredQuery.trim().toLowerCase();
  const filteredVenues = venues
    .filter((venue) => {
      const matchesQuery =
        !normalizedQuery ||
        [venue.name, venue.city, venue.country, venue.primaryUse, venue.region]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesContinent = continentFilter === "All" || venue.continent === continentFilter;
      const matchesType = typeFilter === "All" || venue.type === typeFilter;

      return matchesQuery && matchesContinent && matchesType;
    })
    .sort((left, right) => {
      if (sortKey === "capacity") return right.capacity - left.capacity;
      if (sortKey === "alpha") return left.name.localeCompare(right.name);
      return Number(right.featured) - Number(left.featured) || right.capacity - left.capacity;
    });

  function openVenue(id) {
    startTransition(() => {
      setActiveVenueId(id);
      setView("venue");
    });
  }

  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clearFilters() {
    setQuery("");
    setContinentFilter("All");
    setTypeFilter("All");
    setSortKey("featured");
  }

  function applyAtlasPreset({ query: nextQuery = "", continent = "All", type = "All", sort = "featured" }) {
    startTransition(() => {
      setQuery(nextQuery);
      setContinentFilter(continent);
      setTypeFilter(type);
      setSortKey(sort);
      setView("home");
    });

    window.setTimeout(() => scrollToId("atlas"), 80);
  }

  const guidedJourneys = [
    {
      title: "Closest to you",
      body: "Use live location and surface the nearest major bowls without leaving the homepage.",
      label: location.status === "loading" ? "Locating..." : "Use location",
      action: () => {
        location.requestLocation();
        window.setTimeout(() => scrollToId("nearby"), 80);
      },
    },
    {
      title: "USA venues",
      body: `${regions.usa.length} major stadiums and arenas with faster entry into the North America atlas view.`,
      label: "Open USA",
      action: () => applyAtlasPreset({ continent: "North America", sort: "capacity" }),
    },
    {
      title: "Australia capitals",
      body: `${regions.australia.length} venues across every Australian capital-city market already mapped in the atlas.`,
      label: "Open Australia",
      action: () => applyAtlasPreset({ query: "Australia", continent: "Oceania", sort: "featured" }),
    },
    {
      title: "Indoor arenas",
      body: `${regions.indoor.length} arena-style bowls tuned for concerts, hoops, and premium lower-bowl views.`,
      label: "Open indoor",
      action: () => applyAtlasPreset({ type: "arena", sort: "featured" }),
    },
  ];

  if (view === "venue" && activeVenue) {
    const sectionList = [...activeVenue.sections].sort((left, right) => right.overallRating - left.overallRating);
    const topSections = sectionList.slice(0, 4);

    return (
      <div className="app-shell venue-page">
        <header className="topbar">
          <div className="topbar-brand">
            <span className="brand-mark" aria-hidden="true" />
            <span className="topbar-wordmark">SEATSCOUT</span>
          </div>
          <div className="topbar-actions">
            <button className="topbar-link" onClick={() => setView("home")}>
              Home
            </button>
            <button className="ghost-button" onClick={() => setView("home")}>
              Back to atlas
            </button>
          </div>
        </header>

        <main className="page-wrap">
          <Reveal className="venue-header">
            <div className="venue-header-main">
              <div>
                <p className="eyebrow">Venue Profile</p>
                <h1>{activeVenue.name}</h1>
                <p className="venue-subtitle">
                  {activeVenue.city}, {activeVenue.country} · {activeVenue.capacity.toLocaleString()} seats · {activeVenue.primaryUse}
                </p>
                <div className="chip-row">
                  <span className="chip accent">{activeVenue.type}</span>
                  <span className="chip">{activeVenue.roofType}</span>
                  <span className="chip">{activeVenue.surfaceDimensions}</span>
                </div>
              </div>
              <div className="venue-glance-grid">
                {Object.entries({
                  Opened: activeVenue.opened,
                  Roof: activeVenue.roofType,
                  Surface: activeVenue.surfaceDimensions,
                }).map(([label, value]) => (
                  <div key={label} className="detail-tile">
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="venue-header-note">
              <p className="eyebrow">Why This Venue</p>
              <strong>{activeVenue.heroNote}</strong>
            </div>
          </Reveal>

          <div className="venue-layout">
            <Reveal className="venue-map-panel" delay={60}>
              <div className="panel-head">
                <div>
                  <p className="eyebrow">Bowl Map</p>
                  <h2>Hover, focus, or tap a section to inspect the seat quality</h2>
                </div>
              </div>
              <VenueMap
                venue={activeVenue}
                sections={activeVenue.sections}
                selectedSectionId={selectedSectionId}
                hoveredSectionId={hoveredSectionId}
                onSelect={setSelectedSectionId}
                onHover={setHoveredSectionId}
              />
              <div className="detail-grid summary-grid">
                {Object.entries({
                  Opened: activeVenue.opened,
                  Neighbourhood: activeVenue.neighborhood,
                  Concourse: activeVenue.concourseNotes,
                  Access: activeVenue.accessibilityNotes,
                }).map(([label, value]) => (
                  <div key={label} className="detail-tile">
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="venue-side-panel" delay={120}>
              <section className="surface-panel">
                <p className="eyebrow">Best Buys</p>
                <h2>High-confidence sections</h2>
                <div className="stack-list">
                  {topSections.map((section) => (
                    <button
                      key={section.id}
                      className={`stack-row${hoveredSectionId === section.id ? " is-hovered" : ""}`}
                      onClick={() => setSelectedSectionId(section.id)}
                      onMouseEnter={() => setHoveredSectionId(section.id)}
                      onMouseLeave={() => setHoveredSectionId(null)}
                      onFocus={() => setHoveredSectionId(section.id)}
                      onBlur={() => setHoveredSectionId(null)}
                    >
                      <div>
                        <strong>{section.name}</strong>
                        <span>
                          {section.level} · {section.zone}
                        </span>
                      </div>
                      <em>{section.overallRating.toFixed(1)}</em>
                    </button>
                  ))}
                </div>
              </section>

              <section className="surface-panel">
                <p className="eyebrow">Game-Day Notes</p>
                <h2>What matters before you buy</h2>
                <div className="notes-list">
                  {activeVenue.generalTips.map((tip) => (
                    <p key={tip}>{tip}</p>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <SectionInspector section={selectedSection} venue={activeVenue} />
          </Reveal>

          <Reveal className="venue-sections" delay={240}>
            <div className="panel-head">
              <div>
                <p className="eyebrow">All Sections</p>
                <h2>Browse the full bowl</h2>
              </div>
            </div>
            <div className="section-grid">
              {sectionList.map((section) => (
                <button
                  key={section.id}
                  className={`section-row${selectedSectionId === section.id ? " is-active" : ""}${hoveredSectionId === section.id ? " is-hovered" : ""}`}
                  onClick={() => setSelectedSectionId(section.id)}
                  onMouseEnter={() => setHoveredSectionId(section.id)}
                  onMouseLeave={() => setHoveredSectionId(null)}
                  onFocus={() => setHoveredSectionId(section.id)}
                  onBlur={() => setHoveredSectionId(null)}
                >
                  <div>
                    <strong>{section.name}</strong>
                    <span>
                      {section.level} · {section.zone} · {section.priceRange}
                    </span>
                  </div>
                  <em>{section.overallRating.toFixed(1)}</em>
                </button>
              ))}
            </div>
          </Reveal>
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-brand">
          <span className="brand-mark" aria-hidden="true" />
          <span className="topbar-wordmark">SEATSCOUT</span>
        </div>
        <div className="topbar-actions">
          <button className="topbar-link" onClick={() => scrollToId("nearby")}>
            Nearby
          </button>
          <button className="topbar-link" onClick={() => applyAtlasPreset({ continent: "North America", sort: "capacity" })}>
            USA
          </button>
          <button className="topbar-link" onClick={() => applyAtlasPreset({ query: "Australia", continent: "Oceania" })}>
            Australia
          </button>
          <button className="ghost-button" onClick={() => scrollToId("atlas")}>
            Explore atlas
          </button>
        </div>
      </header>

      <main className="page-wrap">
        <section className="hero">
          <div className="hero-copy hero-sequence">
            <span className="hero-kicker">SEATSCOUT</span>
            <h1>Map the bowl before you buy.</h1>
            <p>
              Search a global stadium atlas, compare section quality, and preview how each venue type behaves before ticket checkout.
            </p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollToId("atlas")}>
                Browse venues
              </button>
              <button className="ghost-button" onClick={() => openVenue(heroVenue.id)}>
                Open {heroVenue.name}
              </button>
            </div>
          </div>

          <div className="hero-visual hero-sequence">
            <VenueMap
              venue={heroVenue}
              sections={heroVenue.sections.slice(0, 20)}
              selectedSectionId={heroVenue.sections[0]?.id}
              onSelect={() => {}}
              interactive={false}
            />
            <div className="hero-visual-footer">
              <span>Now previewing</span>
              <strong>{heroVenue.name}</strong>
            </div>
          </div>
        </section>

        <Reveal className="journey-panel" delay={60}>
          <section className="surface-panel journey-surface">
            <div className="panel-head">
              <div>
                <p className="eyebrow">Start Fast</p>
                <h2>Pick the easiest way into the atlas</h2>
              </div>
              <p className="section-copy">Keep the flow simple: choose a market, use your location, or jump straight into indoor venues.</p>
            </div>
            <div className="journey-grid">
              {guidedJourneys.map((journey) => (
                <button key={journey.title} className="journey-card" onClick={journey.action}>
                  <span className="eyebrow">{journey.label}</span>
                  <strong>{journey.title}</strong>
                  <p>{journey.body}</p>
                </button>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="surface-grid" delay={80}>
          <section id="nearby" className="surface-panel">
            <p className="eyebrow">Nearby</p>
            <h2>Use your location for the closest major bowls</h2>
            <p className="section-copy">
              The atlas works without GPS, but live location lets the app surface the nearest major stadiums and arenas instantly.
            </p>
            <div className="hero-actions">
              <button className="primary-button" onClick={location.requestLocation}>
                {location.status === "loading" ? "Locating..." : "Use my location"}
              </button>
            </div>
            {location.status === "denied" && <p className="status-copy">Location permission was denied. The rest of the atlas still works.</p>}
            {location.status === "unsupported" && <p className="status-copy">This browser does not expose geolocation.</p>}
            {nearbyVenues.length > 0 && (
              <div className="stack-list">
                {nearbyVenues.map((venue) => (
                  <button key={venue.id} className="stack-row" onClick={() => openVenue(venue.id)}>
                    <div>
                      <strong>{venue.name}</strong>
                      <span>
                        {venue.city}, {venue.country}
                      </span>
                    </div>
                    <em>{formatDistance(venue.distanceKm)}</em>
                  </button>
                ))}
              </div>
            )}
          </section>

          <section className="surface-panel">
            <p className="eyebrow">Coverage</p>
            <h2>Every venue archetype in one atlas</h2>
            <div className="stats-grid">
              <div>
                <strong>{venues.length}</strong>
                <span>seeded venues</span>
              </div>
              <div>
                <strong>{geography.length}</strong>
                <span>continents</span>
              </div>
              <div>
                <strong>{totalSections}</strong>
                <span>mapped sections</span>
              </div>
            </div>
            <div className="continent-list">
              {geography.map((entry) => (
                <div key={entry.continent} className="continent-row">
                  <strong>{entry.continent}</strong>
                  <span>{entry.venueCount} venues</span>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={120}>
          <section className="showcase">
            <div className="panel-head">
              <div>
                <p className="eyebrow">Spotlight</p>
                <h2>Featured venue profiles</h2>
              </div>
            </div>
            <div className="showcase-grid">
              {featuredVenues.map((venue) => (
                <VenueCard key={venue.id} venue={venue} onSelect={openVenue} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={160}>
          <section id="atlas" className="atlas">
            <div className="panel-head">
              <div>
                <p className="eyebrow">Atlas</p>
                <h2>Search by city, country, sport, or venue name</h2>
              </div>
              <button className="ghost-button" onClick={clearFilters}>
                Reset filters
              </button>
            </div>

            <div className="atlas-controls">
              <div className="atlas-command-bar">
                <label className="search-field">
                  <span>Search</span>
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Wembley, Tokyo, Cricket, Sydney..."
                  />
                </label>
                <div className="atlas-presets">
                  {[
                    ["All venues", () => clearFilters()],
                    ["USA", () => applyAtlasPreset({ continent: "North America", sort: "capacity" })],
                    ["Australia", () => applyAtlasPreset({ query: "Australia", continent: "Oceania" })],
                    ["Indoor", () => applyAtlasPreset({ type: "arena" })],
                    ["Largest", () => applyAtlasPreset({ sort: "capacity" })],
                  ].map(([label, action]) => (
                    <button key={label} className="chip-button" onClick={action}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="atlas-filter-grid">
                <div className="filter-group">
                  <span>Continent</span>
                  <div className="chip-row">
                    {continentOptions.map((option) => (
                      <button
                        key={option}
                        className={`chip-button${continentFilter === option ? " is-on" : ""}`}
                        onClick={() => setContinentFilter(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-group">
                  <span>Venue type</span>
                  <div className="chip-row">
                    {typeOptions.map((option) => (
                      <button key={option} className={`chip-button${typeFilter === option ? " is-on" : ""}`} onClick={() => setTypeFilter(option)}>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-group">
                  <span>Sort</span>
                  <div className="chip-row">
                    {[
                      ["featured", "featured"],
                      ["capacity", "capacity"],
                      ["alpha", "a-z"],
                    ].map(([value, label]) => (
                      <button key={value} className={`chip-button${sortKey === value ? " is-on" : ""}`} onClick={() => setSortKey(value)}>
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="results-header">
              <strong>{filteredVenues.length} venues</strong>
              <span>Filtered live from the SeatScout atlas</span>
            </div>
            {filteredVenues.length > 0 ? (
              <div className="results-grid">
                {filteredVenues.map((venue) => (
                  <VenueCard key={venue.id} venue={venue} onSelect={openVenue} compact />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p className="eyebrow">No Matches</p>
                <h3>Try a broader city, country, or venue-type search.</h3>
                <p className="section-copy">Resetting the atlas returns every mapped venue immediately.</p>
              </div>
            )}
          </section>
        </Reveal>
      </main>
    </div>
  );
}
