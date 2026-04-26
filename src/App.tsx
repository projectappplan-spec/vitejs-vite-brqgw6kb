import { useState, useEffect, useRef } from 'react';

const C = {
  bg: '#0a0a0a',
  card: '#141414',
  card2: '#1e1e1e',
  border: '#1e1e1e',
  border2: '#2a2a2a',
  text: '#ffffff',
  sub: '#888888',
  dim: '#555555',
  dimmer: '#333333',
  purple: '#a78bfa',
  pink: '#ec4899',
  grad: 'linear-gradient(135deg, #a78bfa, #ec4899)',
  red: '#ef4444',
  amber: '#f59e0b',
  green: '#10b981',
};

const VIBE_COLORS = {
  Rooftop: {
    bg: 'rgba(245,158,11,0.15)',
    text: '#f59e0b',
    border: 'rgba(245,158,11,0.4)',
    dot: '#f59e0b',
  },
  Acoustic: {
    bg: 'rgba(16,185,129,0.15)',
    text: '#10b981',
    border: 'rgba(16,185,129,0.4)',
    dot: '#10b981',
  },
  Soul: {
    bg: 'rgba(167,139,250,0.15)',
    text: '#a78bfa',
    border: 'rgba(167,139,250,0.4)',
    dot: '#a78bfa',
  },
  EDM: {
    bg: 'rgba(34,211,238,0.15)',
    text: '#22d3ee',
    border: 'rgba(34,211,238,0.4)',
    dot: '#22d3ee',
  },
  Euphoric: {
    bg: 'rgba(236,72,153,0.15)',
    text: '#ec4899',
    border: 'rgba(236,72,153,0.4)',
    dot: '#ec4899',
  },
  Wellness: {
    bg: 'rgba(20,184,166,0.15)',
    text: '#14b8a6',
    border: 'rgba(20,184,166,0.4)',
    dot: '#14b8a6',
  },
};

const AVATAR_COLORS = [
  '#a78bfa',
  '#ec4899',
  '#22d3ee',
  '#f59e0b',
  '#10b981',
  '#f97316',
  '#818cf8',
  '#e879f9',
];

const ORGANIZERS = {
  org1: {
    id: 'org1',
    cover:
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=800&q=80',
    username: '@exposure.fm',
    name: 'Exposure Therapy',
    bio: 'Reimagining nightlife without the hangover. We blend rave culture with wellness — matcha, movement, and music in unexpected spaces.',
    avatar: 'ET',
    followers: 1330,
    eventsHosted: 5,
    verified: false,
    instagram: 'exposure.fm',
  },
  org3: {
    id: 'org3',
    cover:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    username: '@ourstrayliberties',
    name: 'OurStrayLiberties / ROOM 526',
    bio: 'DIY underground rock collective running intimate gig nights in hidden spaces across Singapore. From late-night set-ups to early-morning tear-downs — we keep the scene alive.',
    avatar: 'OSL',
    followers: 1540,
    eventsHosted: 18,
    verified: false,
    instagram: 'ourstrayliberties',
  },
  org4: {
    id: 'org4',
    cover:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
    username: '@thugshop66',
    name: 'Thugshop',
    bio: '100% Singaporean and independently owned. Masterminds behind Headquarters, Tuff Club, Higher Ground and more.',
    avatar: 'TS',
    followers: 11000,
    eventsHosted: 100,
    verified: false,
    instagram: 'thugshop66',
  },
  org5: {
    id: 'org5',
    cover:
      'https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=800&q=80',
    username: '@fivetotenpm',
    name: '5210PM',
    bio: 'Bedroom DJ crew turned collective. Parties from 5PM to 10PM — home before midnight, music that hits just as hard.',
    avatar: '52',
    followers: 1443,
    eventsHosted: 9,
    verified: false,
    instagram: 'fivetotenpm',
  },
};

const EVENTS = [
  {
    id: 1,
    title: 'Matcha Rave Vol. 3',
    organizer: 'org1',
    vibe: 'Wellness',
    date: 'Sat 3 May',
    time: '4PM – 9PM',
    location: 'RASA, Telok Ayer',
    lat: 1.281,
    lng: 103.8478,
    price: 32,
    capacity: 80,
    sold: 61,
    going: 61,
    interested: 38,
    tags: ['Sober Rave', 'Matcha Included', 'All Ages'],
    vibes: ['Wellness', 'Acoustic', 'Soul', 'Rooftop', 'Euphoric'],
    image:
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=600&q=80',
    description:
      "The third edition of Singapore's only sober rave. No alcohol. No hangovers. Just matcha, movement, and music.\n\nExposure Therapy returns to RASA with a curated lineup of selectors playing house, ambient, and feel-good electronics.\n\n🍵 House · Ambient · Feel-Good Electronics\n📍 RASA, Telok Ayer\n🕐 Saturday 3 May, 4PM – 9PM\n🌿 All ages — no alcohol served",
    rules: [
      'No alcohol sold or permitted',
      'One ceremonial matcha included',
      'Comfortable clothing encouraged',
      'Tickets non-refundable, transferable up to 48hrs before',
    ],
    tableInfo: null,
  },
  {
    id: 3,
    title: 'ROOM 526: Basement Sessions',
    organizer: 'org3',
    vibe: 'Acoustic',
    date: 'Sat 10 May',
    time: '8PM – 12AM',
    location: 'Chinatown, B1',
    lat: 1.284,
    lng: 103.844,
    price: 20,
    capacity: 50,
    sold: 27,
    going: 27,
    interested: 19,
    tags: ['Basement', 'Live Acts', 'BYOB'],
    vibes: ['Acoustic', 'Soul', 'EDM', 'Euphoric', 'Rooftop'],
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
    description:
      'OurStrayLiberties opens ROOM 526 for another night of underground rock.\n\nThree acts. No backing tracks. No covers. Original music only.\n\n🎸 Indie Rock · Math Rock · Experimental\n📍 Chinatown (exact address on ticket)\n🕐 Saturday 10 May, 8PM – 12AM\n🌐 All ages — BYOB',
    rules: [
      'Exact address on ticket only',
      'No entry after 8:30PM',
      'No recording or streaming',
      'BYOB — no alcohol sold',
      'Support the artists: merch at the door',
    ],
    tableInfo: null,
  },
  {
    id: 4,
    title: 'Sundown Bass — Rooftop Edition',
    organizer: 'org4',
    vibe: 'Rooftop',
    date: 'Sun 4 May',
    time: '5PM – 11PM',
    location: 'Rooftop Bar, Tanjong Pagar',
    lat: 1.2763,
    lng: 103.8432,
    price: 25,
    capacity: 100,
    sold: 72,
    going: 72,
    interested: 44,
    tags: ['Rooftop', 'Golden Hour', '18+'],
    vibes: ['Rooftop', 'Soul', 'EDM', 'Euphoric', 'Acoustic'],
    image:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80',
    description:
      "Thugshop's flagship rooftop series returns for golden hour.\n\nSix DJs across two sessions — sunset and night — playing bass, low-tempo electronics, and whatever else feels right.\n\n🌅 Bass Music · Lo-Fi Electronics · Sunset Vibes\n📍 Rooftop venue, Tanjong Pagar\n🕐 Sunday 4 May, 5PM – 11PM\n🔞 18+",
    rules: [
      '18+ only',
      'No entry in slippers or beachwear',
      'Weather-dependent — updates via WhatsApp',
      'No outside alcohol',
      'Tickets non-refundable, transferable',
    ],
    tableInfo: {
      tiers: [
        {
          pax: '4 PAX',
          price: '$180',
          includes: 'Reserved table + 1 bottle + 4 mixers',
        },
        {
          pax: '6 PAX',
          price: '$260',
          includes: 'Reserved section + 1 premium bottle + 8 mixers',
        },
        {
          pax: '8 PAX',
          price: '$380',
          includes: 'Best view table + 2 bottles + 12 mixers',
        },
      ],
      contact: 'DM @thugshop66 on Instagram',
      note: 'Table reservations do not waive entry fee.',
    },
  },
  {
    id: 5,
    title: '5210PM: Late Night Vol. 5',
    organizer: 'org5',
    vibe: 'Soul',
    date: 'Sat 17 May',
    time: '9PM – 3AM',
    location: 'Geylang Arts Belt',
    lat: 1.318,
    lng: 103.883,
    price: 18,
    capacity: 70,
    sold: 44,
    going: 44,
    interested: 31,
    tags: ['No Dress Code', 'BYOB', 'Community'],
    vibes: ['Soul', 'Acoustic', 'Wellness', 'Rooftop', 'Euphoric'],
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
    description:
      "5210PM's monthly late-night series hits its fifth edition.\n\nFour bedroom DJs playing across six hours — soul, disco edits, deep house, and the kind of music that feels like it was made for 2AM.\n\n🎵 Soul · Disco · Deep House\n📍 Geylang Arts Belt (address on ticket)\n🕐 Saturday 17 May, 9PM – 3AM",
    rules: [
      'No dress code — come as you are',
      'BYOB — cups provided',
      'No recording inside',
      'Tickets non-refundable, transferable',
    ],
    tableInfo: null,
  },
  {
    id: 6,
    title: 'Exposure Therapy: Dawn Movement',
    organizer: 'org1',
    vibe: 'Wellness',
    date: 'Sun 18 May',
    time: '6AM – 10AM',
    location: 'East Coast Park',
    lat: 1.3005,
    lng: 103.9121,
    price: 28,
    capacity: 60,
    sold: 19,
    going: 19,
    interested: 26,
    tags: ['Sober', 'Breathwork', 'Outdoor'],
    vibes: ['Wellness', 'Acoustic', 'Soul', 'Rooftop', 'Euphoric'],
    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
    description:
      "Exposure Therapy's first outdoor edition. Sober rave at sunrise — movement, breathwork, and music by the sea.\n\n🌅 Ambient · Organic House · Breathwork\n📍 East Coast Park (near Carpark E2)\n🕐 Sunday 18 May, 6AM – 10AM",
    rules: [
      'Sober event — no alcohol',
      'Wear comfortable clothing',
      'Mat recommended',
      'Arrive by 5:55AM',
      'Cacao circle at 9AM included',
    ],
    tableInfo: null,
  },
  {
    id: 7,
    title: 'The Future Rave',
    organizer: 'org1',
    vibe: 'Euphoric',
    date: 'Fri 30 May',
    time: '5PM – 9PM',
    location: 'Orchard Library',
    lat: 1.3008,
    lng: 103.839,
    price: 0,
    capacity: 150,
    sold: 143,
    going: 143,
    interested: 89,
    tags: ['Free Entry', 'Sober', 'Two Dancefloors'],
    vibes: ['Euphoric', 'Wellness', 'Soul', 'Acoustic', 'Rooftop'],
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
    description:
      'Two dancefloors. Two completely different energies. Pop-up matcha bar. Free photobooth.\n\n🍵 House · Afrobeat · Ambient\n📍 Orchard Library\n🕐 Friday 30 May, 5PM – 9PM\n🌿 Free entry — register required',
    rules: [
      'Free — registration required',
      'Sober event',
      'Matcha bar and photobooth included',
    ],
    tableInfo: null,
  },
  {
    id: 8,
    title: 'OurStrayLiberties: Loud & Local',
    organizer: 'org3',
    vibe: 'EDM',
    date: 'Fri 23 May',
    time: '7PM – 11PM',
    location: '*SCAPE Ground Theatre',
    lat: 1.3006,
    lng: 103.8391,
    price: 15,
    capacity: 120,
    sold: 88,
    going: 88,
    interested: 47,
    tags: ['Live Acts', 'Local Only', 'All Ages'],
    vibes: ['EDM', 'Acoustic', 'Soul', 'Euphoric', 'Rooftop'],
    image:
      'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?w=600&q=80',
    description:
      '14 acts. Two stages. No covers, no mainstream.\n\nEvery act plays original music. Every ticket supports the artists.\n\n🎸 Indie Rock · Alt · Punk · Math Rock\n📍 *SCAPE Ground Theatre\n🕐 Friday 23 May, 7PM – 11PM',
    rules: [
      'All ages welcome',
      'No recording without artist consent',
      'BYOB',
      'Tickets non-refundable, transferable',
    ],
    tableInfo: null,
  },
  {
    id: 9,
    title: 'Headquarters: Techno at Dawn',
    organizer: 'org4',
    vibe: 'EDM',
    date: 'Sat 24 May',
    time: '11PM – 6AM',
    location: 'Headquarters, Clarke Quay',
    lat: 1.2906,
    lng: 103.8465,
    price: 38,
    capacity: 250,
    sold: 201,
    going: 201,
    interested: 112,
    tags: ['Techno', '21+', 'All Night'],
    vibes: ['EDM', 'Euphoric', 'Soul', 'Rooftop', 'Acoustic'],
    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
    description:
      'Headquarters goes all night. International headliner announced 48 hours before.\n\n⚡ Techno · House · Dark Electronics\n📍 Headquarters, Clarke Quay\n🕐 Saturday 24 May, 11PM – 6AM\n🔞 21+ only',
    rules: [
      '21+ only — physical ID required',
      'Smart casual',
      'Cover tattoos',
      'No outside alcohol',
      'Tickets non-refundable',
    ],
    tableInfo: {
      tiers: [
        {
          pax: '4 PAX',
          price: '$320',
          includes: '1 premium bottle + 8 mixers + priority entry',
        },
        {
          pax: '6 PAX',
          price: '$480',
          includes: '2 bottles + 12 mixers + reserved booth',
        },
        {
          pax: '8 PAX',
          price: '$680',
          includes: '2 premium bottles + champagne + 16 mixers',
        },
      ],
      contact: 'DM @thugshop66 on Instagram',
      note: 'Table reservations do not waive entry fee.',
    },
  },
  {
    id: 10,
    title: 'Sunday Mess Vol. 7',
    organizer: 'org5',
    vibe: 'Soul',
    date: 'Sun 25 May',
    time: '5PM – 10PM',
    location: 'The Coup, Ann Siang Hill',
    lat: 1.28,
    lng: 103.8451,
    price: 12,
    capacity: 60,
    sold: 31,
    going: 31,
    interested: 22,
    tags: ['No Dress Code', 'BYOB', 'Ends Early'],
    vibes: ['Soul', 'Acoustic', 'Euphoric', 'Wellness', 'Rooftop'],
    image:
      'https://images.unsplash.com/photo-1571935441005-a6e3c1e40fe3?w=600&q=80',
    description:
      'Five hours. Home before midnight. No dress code. No attitude.\n\n🎵 House · Disco · Electro\n📍 The Coup, Ann Siang Hill\n🕐 Sunday 25 May, 5PM – 10PM',
    rules: [
      'No dress code',
      'BYOB — cups provided',
      'Strictly ends at 10PM',
      'Tickets non-refundable',
    ],
    tableInfo: null,
  },
  {
    id: 11,
    title: 'ROOM 526: Noise Night',
    organizer: 'org3',
    vibe: 'Euphoric',
    date: 'Fri 6 Jun',
    time: '9PM – 1AM',
    location: 'Chinatown, B1',
    lat: 1.284,
    lng: 103.844,
    price: 22,
    capacity: 50,
    sold: 14,
    going: 14,
    interested: 33,
    tags: ['Experimental', 'BYOB', 'Earplugs Provided'],
    vibes: ['Euphoric', 'Acoustic', 'Soul', 'EDM', 'Rooftop'],
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
    description:
      'One night dedicated to pure noise.\n\n🔊 Experimental · Noise · Post-Rock · Drone\n📍 Chinatown (exact address on ticket)\n🕐 Friday 6 June, 9PM – 1AM',
    rules: [
      'Earplugs provided and recommended',
      'BYOB',
      'No recording',
      'No late entry after 9:30PM',
    ],
    tableInfo: null,
  },
  {
    id: 12,
    title: 'Thugshop: Higher Ground Takeover',
    organizer: 'org4',
    vibe: 'Rooftop',
    date: 'Sat 7 Jun',
    time: '6PM – 12AM',
    location: 'Higher Ground, Boat Quay',
    lat: 1.2875,
    lng: 103.8496,
    price: 20,
    capacity: 180,
    sold: 94,
    going: 94,
    interested: 61,
    tags: ['Multi-Floor', 'River View', '18+'],
    vibes: ['Rooftop', 'Soul', 'EDM', 'Euphoric', 'Acoustic'],
    image:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80',
    description:
      'Higher Ground at Boat Quay. Three floors. Six DJs. Views of the Singapore River.\n\n🌊 Deep House · Disco · Nu-Jazz\n📍 Higher Ground, Boat Quay\n🕐 Saturday 7 June, 6PM – 12AM\n🔞 18+',
    rules: [
      '18+ only',
      'Smart casual',
      'Food and drinks from bar',
      'Tickets non-refundable',
    ],
    tableInfo: null,
  },
  {
    id: 13,
    title: 'Messy Bo Coup',
    organizer: 'org5',
    vibe: 'Acoustic',
    date: 'Sat 21 Jun',
    time: '3PM – 8PM',
    location: 'Ann Siang Hill, Outdoors',
    lat: 1.28,
    lng: 103.8451,
    price: 0,
    capacity: 100,
    sold: 42,
    going: 42,
    interested: 58,
    tags: ['Free Entry', 'Outdoor', 'BYOB'],
    vibes: ['Acoustic', 'Soul', 'Wellness', 'Rooftop', 'Euphoric'],
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
    description:
      'Outdoor Saturday afternoon on Ann Siang Hill. Open air. Free entry. Vibes only.\n\n🌳 House · Disco · Afternoon Grooves\n📍 Ann Siang Hill Outdoor Space\n🕐 Saturday 21 June, 3PM – 8PM\n🌐 All ages — free entry',
    rules: [
      'Free — no ticket needed',
      'BYOB',
      'Bring sunscreen and a mat',
      'Be kind to the neighbourhood',
    ],
    tableInfo: null,
  },
];

const VIBES = [
  'All',
  'Rooftop',
  'Acoustic',
  'Soul',
  'EDM',
  'Euphoric',
  'Wellness',
];

// ─── Primitive components (all inline styles) ───────────────────────────────

function VibeTag({ vibe, size = 'sm' }) {
  const c = VIBE_COLORS[vibe] || {
    bg: 'rgba(100,100,100,0.15)',
    text: '#aaa',
    border: 'rgba(100,100,100,0.3)',
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: c.bg,
        color: c.text,
        border: `1px solid ${c.border}`,
        borderRadius: 100,
        padding: size === 'sm' ? '3px 10px' : '5px 13px',
        fontSize: size === 'sm' ? 11 : 13,
        fontWeight: 600,
        whiteSpace: 'nowrap',
      }}
    >
      {vibe}
    </span>
  );
}

function ScarcityBar({ sold, capacity }) {
  const pct = Math.min(100, Math.round((sold / capacity) * 100));
  const color = pct > 85 ? C.red : pct > 60 ? C.amber : C.green;
  return (
    <div style={{ marginTop: 12 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 11,
          color: C.sub,
          marginBottom: 4,
        }}
      >
        <span>
          {pct > 85
            ? '🔥 Almost gone'
            : pct > 60
            ? '⚡ Selling fast'
            : '✓ Available'}
        </span>
        <span>
          {capacity - sold} left of {capacity}
        </span>
      </div>
      <div style={{ height: 5, borderRadius: 4, background: C.card2 }}>
        <div
          style={{
            height: 5,
            borderRadius: 4,
            background: color,
            width: `${pct}%`,
          }}
        />
      </div>
    </div>
  );
}

function GoingAvatars({ going, interested }) {
  const MAX = 5;
  const shown = Math.min(going, MAX);
  const extra = going - MAX;
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {Array.from({ length: shown }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: AVATAR_COLORS[i % AVATAR_COLORS.length],
              border: `2px solid ${C.card}`,
              marginLeft: i === 0 ? 0 : -8,
              zIndex: shown - i,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 9,
              fontWeight: 700,
              color: 'white',
            }}
          >
            {String.fromCharCode(65 + i)}
          </div>
        ))}
        {extra > 0 && (
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: C.card2,
              border: `2px solid ${C.card}`,
              marginLeft: -8,
              zIndex: 0,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 9,
              fontWeight: 700,
              color: C.sub,
            }}
          >
            +{extra}
          </div>
        )}
      </div>
      <span style={{ fontSize: 12, color: C.sub }}>
        <b style={{ color: C.text }}>{going}</b> going
        <span style={{ margin: '0 6px', color: C.dimmer }}>·</span>
        <b style={{ color: C.purple }}>{interested}</b> interested
      </span>
    </div>
  );
}

function SubscribeButton({ orgId: _orgId, sm }) {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setOn((v) => !v);
      }}
      style={{
        background: on ? 'transparent' : C.grad,
        color: on ? C.purple : 'black',
        border: on ? `1px solid ${C.purple}` : 'none',
        borderRadius: 100,
        fontWeight: 700,
        cursor: 'pointer',
        padding: sm ? '5px 12px' : '8px 18px',
        fontSize: sm ? 11 : 13,
        whiteSpace: 'nowrap',
      }}
    >
      {on ? '✓ Subscribed' : 'Subscribe'}
    </button>
  );
}

function IgIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

// ─── Screens ────────────────────────────────────────────────────────────────

function EventDetail({ event, onBack, onBook, onOrgClick, userRole }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const org = ORGANIZERS[event.organizer];
  const pct = Math.round((event.sold / event.capacity) * 100);
  const [showRules, setShowRules] = useState(false);
  const isFree = event.price === 0;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: C.bg,
        color: C.text,
        paddingBottom: 100,
        fontFamily: "'Helvetica Neue',sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '14px 16px',
          background: 'rgba(10,10,10,0.97)',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: C.sub,
            fontSize: 22,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          ←
        </button>
        <span
          style={{
            fontWeight: 600,
            fontSize: 15,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {event.title}
        </span>
      </div>

      {/* Hero image */}
      <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
        <img
          src={event.image}
          alt={event.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, transparent 20%, #0a0a0a 100%)',
          }}
        />
        <div style={{ position: 'absolute', bottom: 16, left: 16 }}>
          <VibeTag vibe={event.vibe} size="md" />
        </div>
      </div>

      <div style={{ padding: '16px 16px 0' }}>
        <h1
          style={{
            fontSize: 24,
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 4,
          }}
        >
          {event.title}
        </h1>
        <button
          onClick={() => onOrgClick(event.organizer)}
          style={{
            background: 'none',
            border: 'none',
            color: C.purple,
            fontSize: 13,
            cursor: 'pointer',
            padding: 0,
            marginBottom: 12,
          }}
        >
          {org.username}{' '}
          {org.verified && <span style={{ color: '#60a5fa' }}>✓</span>}
        </button>

        {/* Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            marginBottom: 10,
          }}
        >
          {event.tags.map((t) => (
            <span
              key={t}
              style={{
                background: C.card2,
                color: '#aaa',
                border: `1px solid ${C.border2}`,
                borderRadius: 100,
                fontSize: 11,
                padding: '3px 10px',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Vibe pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            marginBottom: 16,
          }}
        >
          {(event.vibes || []).map((v) => (
            <VibeTag key={v} vibe={v} />
          ))}
        </div>

        {/* Info grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
            marginBottom: 16,
          }}
        >
          {[
            ['📅', event.date],
            ['🕐', event.time],
            ['📍', event.location],
            ['🎫', isFree ? 'Free' : `S$${event.price}`],
          ].map(([icon, val]) => (
            <div
              key={val}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 13,
                color: '#ccc',
              }}
            >
              <span>{icon}</span>
              <span>{val}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: 16,
            marginBottom: 12,
          }}
        >
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.7,
              color: '#ccc',
              whiteSpace: 'pre-line',
            }}
          >
            {event.description}
          </p>
          <ScarcityBar sold={event.sold} capacity={event.capacity} />
          <GoingAvatars going={event.going} interested={event.interested} />
        </div>

        {/* Rules */}
        {event.rules?.length > 0 && (
          <div
            style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              overflow: 'hidden',
              marginBottom: 12,
            }}
          >
            <button
              onClick={() => setShowRules((s) => !s)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 16,
                background: 'none',
                border: 'none',
                color: C.text,
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <span>📋 Event Rules</span>
              <span style={{ color: C.sub }}>{showRules ? '▲' : '▼'}</span>
            </button>
            {showRules && (
              <div
                style={{
                  padding: '0 16px 16px',
                  borderTop: `1px solid ${C.border}`,
                }}
              >
                {event.rules.map((r, i) => (
                  <div
                    key={i}
                    style={{ display: 'flex', gap: 10, marginTop: 10 }}
                  >
                    <span
                      style={{
                        color: C.pink,
                        fontSize: 10,
                        marginTop: 3,
                        flexShrink: 0,
                      }}
                    >
                      ⬤
                    </span>
                    <p style={{ fontSize: 12, color: '#bbb', lineHeight: 1.5 }}>
                      {r}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Table info */}
        {event.tableInfo && (
          <div
            style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>
              🪑 Table Reservations
            </p>
            {event.tableInfo.tiers.map((t, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: C.card2,
                  borderRadius: 10,
                  padding: '10px 14px',
                  marginBottom: 8,
                }}
              >
                <div>
                  <p style={{ fontWeight: 700, fontSize: 13 }}>{t.pax}</p>
                  <p style={{ fontSize: 11, color: C.sub }}>{t.includes}</p>
                </div>
                <p style={{ fontWeight: 700, color: C.purple }}>{t.price}</p>
              </div>
            ))}
            <p style={{ fontSize: 11, color: C.sub, marginTop: 4 }}>
              📱 {event.tableInfo.contact}
            </p>
            <p
              style={{
                fontSize: 11,
                color: C.pink,
                marginTop: 4,
                fontWeight: 600,
              }}
            >
              ⚠️ {event.tableInfo.note}
            </p>
          </div>
        )}

        {/* Hosted by */}
        <div style={{ marginBottom: 16 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              color: C.dimmer,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Hosted by
          </p>
          <div
            style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'rgba(167,139,250,0.15)',
                  border: `1px solid rgba(167,139,250,0.3)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 12,
                  color: C.purple,
                  flexShrink: 0,
                }}
              >
                {org.avatar}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 700, fontSize: 14 }}>{org.name}</p>
                <button
                  onClick={() => onOrgClick(event.organizer)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: C.purple,
                    fontSize: 12,
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  {org.username}
                </button>
              </div>
              <SubscribeButton orgId={org.id} sm />
            </div>
            <p
              style={{
                fontSize: 12,
                color: '#999',
                lineHeight: 1.6,
                marginBottom: 12,
              }}
            >
              {org.bio}
            </p>
            {org.instagram && (
              <a
                href={`https://instagram.com/${org.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  background: C.card2,
                  color: '#aaa',
                  border: `1px solid ${C.border2}`,
                  textDecoration: 'none',
                }}
              >
                <IgIcon />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      {userRole !== 'organizer' && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            padding: 16,
            background: 'rgba(10,10,10,0.98)',
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <button
            onClick={() => onBook(event)}
            disabled={pct >= 100}
            style={{
              width: '100%',
              padding: '16px 0',
              borderRadius: 14,
              fontWeight: 700,
              fontSize: 15,
              color: 'black',
              border: 'none',
              cursor: pct >= 100 ? 'default' : 'pointer',
              background: pct >= 100 ? '#333' : C.grad,
            }}
          >
            {pct >= 100
              ? 'Sold Out'
              : isFree
              ? 'Register Free'
              : `Get Tickets · S$${event.price}`}
          </button>
        </div>
      )}
    </div>
  );
}

function OrganizerProfile({ org, events, onBack, onEventSelect }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const orgEvents = events.filter((e) => e.organizer === org.id);
  return (
    <div
      style={{
        minHeight: '100vh',
        background: C.bg,
        color: C.text,
        paddingBottom: 40,
        fontFamily: "'Helvetica Neue',sans-serif",
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '14px 16px',
          background: 'rgba(10,10,10,0.97)',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: C.sub,
            fontSize: 22,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          ←
        </button>
        <span style={{ fontWeight: 600 }}>{org.username}</span>
      </div>
      {/* Cover photo with avatar overlaid */}
      <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
        {org.cover ? (
          <img
            src={org.cover}
            alt={org.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.5) saturate(0.7)',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(135deg, rgba(167,139,250,0.25), rgba(236,72,153,0.15))',
            }}
          />
        )}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, transparent 30%, #0a0a0a 100%)',
          }}
        />
        {/* Avatar sitting on the cover bottom edge */}
        <div
          style={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            width: 76,
            height: 76,
            borderRadius: '50%',
            background: 'rgba(20,20,20,0.9)',
            border: `3px solid ${C.bg}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: 18,
            color: C.purple,
          }}
        >
          {org.avatar}
        </div>
      </div>
      <div
        style={{
          padding: '16px 16px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        {/* Profile header — name/stats/actions sit below cover */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <div style={{ width: 76, flexShrink: 0 }} />
          {/* spacer aligns with avatar above */}
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 800, fontSize: 17 }}>{org.name}</p>
            <p style={{ fontSize: 13, color: C.sub, margin: '2px 0 8px' }}>
              {org.username}
            </p>
            <div
              style={{
                display: 'flex',
                gap: 16,
                fontSize: 12,
                color: C.sub,
                marginBottom: 12,
              }}
            >
              <span>
                <b style={{ color: C.text }}>
                  {org.followers.toLocaleString()}
                </b>{' '}
                followers
              </span>
              <span>
                <b style={{ color: C.text }}>{org.eventsHosted}</b> events
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <SubscribeButton orgId={org.id} sm={false} />
              {org.instagram && (
                <a
                  href={`https://instagram.com/${org.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: C.card2,
                    color: '#aaa',
                    border: `1px solid ${C.border2}`,
                    textDecoration: 'none',
                  }}
                >
                  <IgIcon />
                </a>
              )}
            </div>
          </div>
        </div>
        {/* Dummy div to close the old avatar div that no longer exists */}
        <div style={{ display: 'none' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 800, fontSize: 17 }}>{org.name}</p>
            <p style={{ fontSize: 13, color: C.sub, margin: '2px 0 8px' }}>
              {org.username}
            </p>
            <div
              style={{
                display: 'flex',
                gap: 16,
                fontSize: 12,
                color: C.sub,
                marginBottom: 12,
              }}
            >
              <span>
                <b style={{ color: C.text }}>
                  {org.followers.toLocaleString()}
                </b>{' '}
                followers
              </span>
              <span>
                <b style={{ color: C.text }}>{org.eventsHosted}</b> events
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <SubscribeButton orgId={org.id} sm={false} />
              {org.instagram && (
                <a
                  href={`https://instagram.com/${org.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: C.card2,
                    color: '#aaa',
                    border: `1px solid ${C.border2}`,
                    textDecoration: 'none',
                  }}
                >
                  <IgIcon />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: 16,
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              color: C.dimmer,
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            About
          </p>
          <p style={{ fontSize: 13, color: '#ccc', lineHeight: 1.7 }}>
            {org.bio}
          </p>
        </div>

        {/* Events */}
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12,
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                color: C.dimmer,
                textTransform: 'uppercase',
              }}
            >
              Upcoming Events
            </p>
            <span style={{ fontSize: 12, color: C.sub }}>
              {orgEvents.length} listed
            </span>
          </div>
          {orgEvents.map((e) => (
            <div key={e.id}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '6px 0',
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: C.card2,
                    flexShrink: 0,
                  }}
                />
                <p style={{ fontSize: 11, fontWeight: 700, color: C.dimmer }}>
                  {e.date}
                </p>
              </div>
              <div
                onClick={() => onEventSelect(e)}
                style={{
                  marginLeft: 18,
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  marginBottom: 12,
                }}
              >
                <div style={{ display: 'flex', gap: 12, padding: 12 }}>
                  <img
                    src={e.image}
                    alt={e.title}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 10,
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 11, color: C.sub, marginBottom: 2 }}>
                      {e.time}
                    </p>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: 13,
                        lineHeight: 1.3,
                        marginBottom: 4,
                      }}
                    >
                      {e.title}
                    </p>
                    <p style={{ fontSize: 11, color: C.sub, marginBottom: 6 }}>
                      📍 {e.location}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {(e.vibes || []).slice(0, 3).map((v) => (
                        <VibeTag key={v} vibe={v} />
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ padding: '0 12px 12px' }}>
                  <ScarcityBar sold={e.sold} capacity={e.capacity} />
                  <GoingAvatars going={e.going} interested={e.interested} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PaymentModal({ event, onClose, onSuccess }) {
  const [step, setStep] = useState(1);
  const [qty, setQty] = useState(1);
  const [method, setMethod] = useState('paynow');
  const [processing, setProcessing] = useState(false);
  const fee = 2,
    total = event.price * qty + fee;
  const pay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      onSuccess();
    }, 2000);
  };
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 16,
        background: 'rgba(0,0,0,0.85)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 440,
          borderRadius: 20,
          overflow: 'hidden',
          background: C.card,
          border: `1px solid ${C.border2}`,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            borderBottom: `1px solid ${C.border2}`,
          }}
        >
          <div>
            <p style={{ fontSize: 11, color: C.sub, marginBottom: 2 }}>
              Booking for
            </p>
            <p style={{ fontWeight: 700, fontSize: 15 }}>{event.title}</p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: C.sub,
              fontSize: 26,
              cursor: 'pointer',
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
        {step === 1 && (
          <div
            style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <div>
              <p style={{ fontWeight: 600, marginBottom: 12 }}>Tickets</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: C.card2,
                    border: 'none',
                    color: C.text,
                    fontSize: 20,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  −
                </button>
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    minWidth: 24,
                    textAlign: 'center',
                  }}
                >
                  {qty}
                </span>
                <button
                  onClick={() => setQty(Math.min(4, qty + 1))}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: C.card2,
                    border: 'none',
                    color: C.text,
                    fontSize: 20,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  +
                </button>
                <span style={{ fontSize: 13, color: C.sub }}>max 4</span>
              </div>
            </div>
            <div
              style={{
                background: C.card2,
                borderRadius: 12,
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 13,
                }}
              >
                <span style={{ color: C.sub }}>Ticket × {qty}</span>
                <span>S${(event.price * qty).toFixed(2)}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 13,
                }}
              >
                <span style={{ color: C.sub }}>Booking fee</span>
                <span>S${fee.toFixed(2)}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 15,
                  fontWeight: 700,
                  paddingTop: 8,
                  borderTop: `1px solid ${C.border2}`,
                }}
              >
                <span>Total</span>
                <span>S${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => setStep(2)}
              style={{
                padding: '14px 0',
                borderRadius: 12,
                background: C.grad,
                border: 'none',
                color: 'black',
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              Continue
            </button>
          </div>
        )}
        {step === 2 && (
          <div
            style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <p style={{ fontWeight: 600 }}>Payment method</p>
            {[
              {
                id: 'paynow',
                label: 'PayNow',
                sub: 'Instant · No card needed',
                icon: '🇸🇬',
              },
              {
                id: 'card',
                label: 'Credit / Debit Card',
                sub: 'Visa, Mastercard',
                icon: '💳',
              },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setMethod(m.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: 14,
                  borderRadius: 12,
                  background: method === m.id ? C.card2 : 'transparent',
                  border: `1px solid ${method === m.id ? C.purple : C.border2}`,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: 24 }}>{m.icon}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: C.text }}>
                    {m.label}
                  </p>
                  <p style={{ fontSize: 12, color: C.sub }}>{m.sub}</p>
                </div>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    border: `2px solid ${method === m.id ? C.purple : '#444'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {method === m.id && (
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        background: C.purple,
                      }}
                    />
                  )}
                </div>
              </button>
            ))}
            <button
              onClick={pay}
              disabled={processing}
              style={{
                padding: '14px 0',
                borderRadius: 12,
                background: processing ? '#333' : C.grad,
                border: 'none',
                color: processing ? '#888' : 'black',
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              {processing ? 'Processing…' : `Pay S$${total.toFixed(2)}`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function SuccessModal({ event, onClose }) {
  const ref = 'UP-' + Math.random().toString(36).substr(2, 8).toUpperCase();
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        background: 'rgba(0,0,0,0.85)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 360,
          borderRadius: 20,
          padding: 40,
          textAlign: 'center',
          background: C.card,
          border: `1px solid ${C.border2}`,
        }}
      >
        <div style={{ fontSize: 60, marginBottom: 16 }}>🎟️</div>
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
          You're in.
        </h2>
        <p style={{ fontSize: 13, color: C.sub, marginBottom: 4 }}>
          {event.title}
        </p>
        <p style={{ fontSize: 13, color: C.sub, marginBottom: 24 }}>
          {event.date} · {event.time}
        </p>
        <div
          style={{
            background: C.card2,
            borderRadius: 12,
            padding: 16,
            marginBottom: 24,
          }}
        >
          <p style={{ fontSize: 11, color: C.sub, marginBottom: 6 }}>
            Booking reference
          </p>
          <p
            style={{
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: 3,
            }}
          >
            {ref}
          </p>
        </div>
        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '14px 0',
            borderRadius: 12,
            background: C.grad,
            border: 'none',
            color: 'black',
            fontWeight: 700,
            fontSize: 14,
            cursor: 'pointer',
          }}
        >
          Back to events
        </button>
      </div>
    </div>
  );
}

function CreateEventForm({ onBack, onCreated }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [form, setForm] = useState({
    title: '',
    vibe: 'Soul',
    date: '',
    time: '',
    location: '',
    price: '',
    capacity: '',
    description: '',
  });
  const [done, setDone] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const submit = () => {
    if (!form.title || !form.date) return;
    setDone(true);
    setTimeout(onCreated, 1500);
  };
  if (done)
    return (
      <div
        style={{
          minHeight: '100vh',
          background: C.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>✓</div>
          <p style={{ color: C.text, fontWeight: 700, fontSize: 18 }}>
            Event submitted
          </p>
          <p style={{ color: C.sub, fontSize: 13, marginTop: 4 }}>
            Pending admin approval
          </p>
        </div>
      </div>
    );
  return (
    <div
      style={{
        minHeight: '100vh',
        background: C.bg,
        color: C.text,
        paddingBottom: 100,
        fontFamily: "'Helvetica Neue',sans-serif",
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '14px 16px',
          background: 'rgba(10,10,10,0.97)',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: C.sub,
            fontSize: 22,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          ←
        </button>
        <span style={{ fontWeight: 600 }}>Create Event</span>
        <span
          style={{
            background: C.card2,
            color: C.purple,
            fontSize: 10,
            padding: '3px 10px',
            borderRadius: 100,
            marginLeft: 4,
          }}
        >
          Organizers Only
        </span>
      </div>
      <div
        style={{
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        {[
          { label: 'Event Title', key: 'title', ph: 'Give your event a name' },
          { label: 'Date', key: 'date', ph: 'e.g. Sat 3 May 2025' },
          { label: 'Time', key: 'time', ph: 'e.g. 9PM – 2AM' },
          { label: 'Location', key: 'location', ph: 'Venue or area' },
          { label: 'Ticket Price (S$)', key: 'price', ph: '0 for free events' },
          { label: 'Capacity', key: 'capacity', ph: 'Max attendees' },
        ].map((f) => (
          <div key={f.key}>
            <label
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                color: C.dimmer,
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 8,
              }}
            >
              {f.label}
            </label>
            <input
              value={form[f.key]}
              onChange={(e) => set(f.key, e.target.value)}
              placeholder={f.ph}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: 12,
                background: C.card,
                border: `1px solid ${C.border2}`,
                color: C.text,
                fontSize: 14,
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
        ))}
        <div>
          <label
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 2,
              color: C.dimmer,
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 8,
            }}
          >
            Vibe
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {VIBES.filter((v) => v !== 'All').map((v) => (
              <button
                key={v}
                onClick={() => set('vibe', v)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 100,
                  border: `1px solid ${form.vibe === v ? C.purple : C.border2}`,
                  background:
                    form.vibe === v ? 'rgba(167,139,250,0.15)' : 'transparent',
                  color: form.vibe === v ? C.purple : C.sub,
                  fontSize: 13,
                  cursor: 'pointer',
                }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 2,
              color: C.dimmer,
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 8,
            }}
          >
            Description
          </label>
          <textarea
            value={form.description}
            onChange={(e) => set('description', e.target.value)}
            placeholder="Tell people what to expect..."
            rows={5}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: 12,
              background: C.card,
              border: `1px solid ${C.border2}`,
              color: C.text,
              fontSize: 14,
              outline: 'none',
              resize: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 16,
          background: 'rgba(10,10,10,0.98)',
          borderTop: `1px solid ${C.border}`,
        }}
      >
        <button
          onClick={submit}
          style={{
            width: '100%',
            padding: '16px 0',
            borderRadius: 14,
            background: C.grad,
            border: 'none',
            color: 'black',
            fontWeight: 700,
            fontSize: 15,
            cursor: 'pointer',
          }}
        >
          Submit for Approval
        </button>
      </div>
    </div>
  );
}

function MapView({ events, onEventSelect, selectedVibe }) {
  const [activePin, setActivePin] = useState(null);
  const filtered =
    selectedVibe === 'All'
      ? events
      : events.filter((e) => e.vibe === selectedVibe);
  const active = filtered.find((e) => e.id === activePin);
  const mapDivRef = useRef(null);
  const leafletMapRef = useRef(null);
  const markersRef = useRef([]);
  const userLocRef = useRef(null);

  function buildMarkers(L, map, evList) {
    markersRef.current.forEach((m) => map.removeLayer(m));
    markersRef.current = [];
    evList.forEach((ev) => {
      if (!ev.lat || !ev.lng) return;
      const color = VIBE_COLORS[ev.vibe]?.dot || C.purple;
      const vibeIcons = {
        Rooftop:
          '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
        Acoustic:
          '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
        Soul: '<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 000-7.78z"/>',
        EDM: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
        Euphoric:
          '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
        Wellness:
          '<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>',
      };
      const iconPath = vibeIcons[ev.vibe] || vibeIcons.Acoustic;
      const sz = 44;
      const uloc = userLocRef.current;
      let distText = '';
      if (uloc) {
        const R = 6371,
          dLat = ((ev.lat - uloc.lat) * Math.PI) / 180,
          dLng = ((ev.lng - uloc.lng) * Math.PI) / 180;
        const a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos((uloc.lat * Math.PI) / 180) *
            Math.cos((ev.lat * Math.PI) / 180) *
            Math.sin(dLng / 2) ** 2;
        const km = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const mins = Math.round((km / 40) * 60);
        distText =
          km.toFixed(1) +
          ' km · ' +
          (mins < 60 ? mins + ' min drive' : Math.round(mins / 60) + 'h drive');
      }
      const mapsUrl =
        'https://www.google.com/maps/dir/?api=1&destination=' +
        encodeURIComponent((ev.location || ev.title) + ', Singapore');
      const timeStr = ev.time
        ? ' · ' + ev.time + (ev.end_time ? ' – ' + ev.end_time : '')
        : '';
      const m = L.marker([ev.lat, ev.lng], {
        icon: L.divIcon({
          className: '',
          html:
            '<div style="width:' +
            sz +
            'px;height:' +
            sz +
            'px;background:' +
            color +
            ';border:3px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 4px 14px ' +
            color +
            '88;display:flex;align-items:center;justify-content:center"><svg style="transform:rotate(45deg)" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
            iconPath +
            '</svg></div>',
          iconSize: [sz, sz],
          iconAnchor: [Math.round(sz / 2), sz],
          popupAnchor: [0, -(sz + 6)],
        }),
      });
      m.bindPopup(
        '<div style="font-family:system-ui;width:240px;border-radius:12px;overflow:hidden;background:#1e293b;border:1px solid #334155">' +
          '<div style="position:relative;height:130px;overflow:hidden">' +
          '<img src="' +
          ev.image +
          '" style="width:100%;height:100%;object-fit:cover">' +
          '<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(30,41,59,0.8),transparent)"></div>' +
          '</div>' +
          '<div style="padding:12px 14px 14px">' +
          '<b style="font-size:14px;color:#f1f5f9;display:block;line-height:1.3">' +
          ev.title +
          '</b>' +
          '<p style="margin:5px 0 0;font-size:12px;color:#94a3b8">📍 ' +
          (ev.location || '') +
          '</p>' +
          '<p style="margin:3px 0 0;font-size:12px;color:#94a3b8">📅 ' +
          ev.date +
          timeStr +
          '</p>' +
          (distText
            ? '<p style="margin:3px 0 0;font-size:12px;color:#64748b">🚗 ' +
              distText +
              '</p>'
            : '') +
          '<p style="margin:6px 0 0;font-size:13px;font-weight:700;color:' +
          color +
          '">From SGD ' +
          ev.price +
          '</p>' +
          '<div style="display:flex;gap:8px;margin-top:10px">' +
          '<button class="upv-btn" data-eid="' +
          ev.id +
          '" style="flex:1;padding:8px 4px;background:' +
          color +
          ';color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">Get Tickets</button>' +
          '<a href="' +
          mapsUrl +
          '" target="_blank" style="flex:1;text-align:center;display:inline-block;padding:8px 4px;background:transparent;color:#94a3b8;border:1px solid #334155;border-radius:8px;font-size:12px;font-weight:600;text-decoration:none">Navigate</a>' +
          '</div></div></div>',
        { maxWidth: 260 }
      );
      m.on('popupopen', function () {
        setTimeout(function () {
          var btn = document.querySelector('.upv-btn[data-eid="' + ev.id + '"');
          if (btn) {
            btn.addEventListener('click', function () {
              onEventSelect(ev);
            });
          }
        }, 30);
      });
      m.on('click', () =>
        setActivePin((cur) => (cur === ev.id ? null : ev.id))
      );
      m.addTo(map);
      markersRef.current.push(m);
    });
  }

  useEffect(() => {
    (window as any).__upv = (id) => {
      const e = events.find((x) => x.id === id);
      if (e) onEventSelect(e);
    };
    return () => {
      delete (window as any).__upv;
    };
  }, [events, onEventSelect]);

  useEffect(() => {
    if (!document.getElementById('lf-css')) {
      const css = document.createElement('link');
      css.id = 'lf-css';
      css.rel = 'stylesheet';
      css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(css);
    }
    const boot = (L) => {
      if (!mapDivRef.current || leafletMapRef.current) return;
      const map = L.map(mapDivRef.current, {
        center: [1.3521, 103.8198],
        zoom: 12,
      });
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      leafletMapRef.current = map;
      buildMarkers(L, map, filtered);
      navigator.geolocation?.getCurrentPosition((pos) => {
        userLocRef.current = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
      });
    };
    if ((window as any).L) {
      boot((window as any).L);
    } else if (!document.getElementById('lf-js')) {
      const js = document.createElement('script');
      js.id = 'lf-js';
      js.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      js.onload = () => boot((window as any).L);
      document.head.appendChild(js);
    }
    return () => {
      if (leafletMapRef.current) {
        (leafletMapRef.current as any).remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if ((window as any).L && leafletMapRef.current)
      buildMarkers((window as any).L, leafletMapRef.current, filtered);
  }, [selectedVibe, events]);

  return (
    <div style={{ padding: '16px 16px 24px' }}>
      <div
        style={{
          background: C.card,
          border: `1px solid ${C.border}`,
          borderRadius: 16,
          overflow: 'visible',
        }}
      >
        <div
          ref={mapDivRef}
          style={{
            width: '100%',
            height: 460,
            overflow: 'hidden',
            borderRadius: '16px 16px 0 0',
          }}
        />
        {active ? (
          <div
            style={{
              padding: 14,
              borderTop: `1px solid ${C.border}`,
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
            }}
          >
            <img
              src={active.image}
              alt={active.title}
              style={{
                width: 52,
                height: 52,
                borderRadius: 10,
                objectFit: 'cover',
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 2 }}>
                {active.title}
              </p>
              <p style={{ fontSize: 11, color: C.sub, marginBottom: 6 }}>
                {active.location} · {active.date}
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontWeight: 700 }}>S${active.price}</span>
                <button
                  onClick={() => onEventSelect(active)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 100,
                    background: C.grad,
                    border: 'none',
                    color: 'black',
                    fontWeight: 700,
                    fontSize: 12,
                    cursor: 'pointer',
                  }}
                >
                  View →
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              padding: '10px 14px',
              borderTop: `1px solid ${C.border}`,
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: 11, color: C.dimmer }}>
              Tap a pin to see event details
            </p>
          </div>
        )}
      </div>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 12 }}
      >
        {Object.entries(VIBE_COLORS).map(([v, c]) => (
          <div
            key={v}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 11,
              color: '#777',
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: c.dot,
              }}
            />
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}
// ─── Root App ────────────────────────────────────────────────────────────────

export default function UrbanPulse() {
  const [tab, setTab] = useState('discover');
  const [screen, setScreen] = useState('home');
  const [vibe, setVibe] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [booking, setBooking] = useState(null);
  const [success, setSuccess] = useState(null);
  const [userRole, setUserRole] = useState('user');
  const events = EVENTS;

  const filtered =
    vibe === 'All' ? events : events.filter((e) => e.vibe === vibe);
  const goEvent = (e) => {
    setSelectedEvent(e);
    setScreen('event');
  };
  const goOrg = (id) => {
    setSelectedOrg(ORGANIZERS[id]);
    setScreen('organizer');
  };

  if (screen === 'event' && selectedEvent)
    return (
      <>
        <EventDetail
          event={selectedEvent}
          onBack={() => setScreen('home')}
          onBook={setBooking}
          onOrgClick={goOrg}
          userRole={userRole}
        />
        {booking && (
          <PaymentModal
            event={booking}
            onClose={() => setBooking(null)}
            onSuccess={() => {
              setSuccess(booking);
              setBooking(null);
            }}
          />
        )}
        {success && (
          <SuccessModal
            event={success}
            onClose={() => {
              setSuccess(null);
              setScreen('home');
            }}
          />
        )}
      </>
    );
  if (screen === 'organizer' && selectedOrg)
    return (
      <OrganizerProfile
        org={selectedOrg}
        events={events}
        onBack={() => setScreen('event')}
        onEventSelect={goEvent}
      />
    );
  if (screen === 'create')
    return (
      <CreateEventForm
        onBack={() => setScreen('home')}
        onCreated={() => setScreen('home')}
      />
    );

  return (
    <div
      style={{
        minHeight: '100vh',
        background: C.bg,
        color: C.text,
        paddingBottom: 80,
        fontFamily: "'Helvetica Neue',sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          padding: '18px 16px 10px',
          background: 'rgba(10,10,10,0.98)',
          borderBottom: `1px solid #141414`,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 14,
          }}
        >
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>
              Urban<span style={{ color: C.purple }}>Pulse</span>
            </h1>
            <p style={{ fontSize: 11, color: C.dimmer, marginTop: 1 }}>
              Singapore · {filtered.length} events
            </p>
          </div>
          <button
            onClick={() =>
              setUserRole((r) => (r === 'user' ? 'organizer' : 'user'))
            }
            style={{
              padding: '6px 14px',
              borderRadius: 100,
              border: `1px solid ${
                userRole === 'organizer' ? C.purple : C.border2
              }`,
              background:
                userRole === 'organizer'
                  ? 'rgba(167,139,250,0.1)'
                  : 'transparent',
              color: userRole === 'organizer' ? C.purple : C.sub,
              fontSize: 12,
              cursor: 'pointer',
            }}
          >
            {userRole === 'organizer' ? '⚡ Organizer' : '👤 User'}
          </button>
        </div>
        {/* Vibe filters */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            overflowX: 'auto',
            paddingBottom: 2,
          }}
        >
          {VIBES.map((v) => (
            <button
              key={v}
              onClick={() => setVibe(v)}
              style={{
                flexShrink: 0,
                padding: '6px 14px',
                borderRadius: 100,
                border: `1px solid ${vibe === v ? C.purple : C.border2}`,
                background: vibe === v ? C.purple : 'transparent',
                color: vibe === v ? 'black' : C.sub,
                fontSize: 12,
                fontWeight: vibe === v ? 700 : 400,
                cursor: 'pointer',
              }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Organizer banner */}
      {userRole === 'organizer' && (
        <div
          style={{
            margin: '12px 16px 0',
            padding: '12px 14px',
            background: 'rgba(167,139,250,0.08)',
            border: `1px solid rgba(167,139,250,0.2)`,
            borderRadius: 12,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: C.purple }}>
              Organizer Mode
            </p>
            <p style={{ fontSize: 11, color: C.sub }}>
              You can create and manage events
            </p>
          </div>
          <button
            onClick={() => setScreen('create')}
            style={{
              padding: '7px 14px',
              borderRadius: 100,
              background: C.purple,
              border: 'none',
              color: 'black',
              fontWeight: 700,
              fontSize: 12,
              cursor: 'pointer',
            }}
          >
            + Create
          </button>
        </div>
      )}

      {/* Discover */}
      {tab === 'discover' && (
        <div
          style={{
            padding: '16px 16px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {filtered.map((event) => {
            const org = ORGANIZERS[event.organizer];
            return (
              <div
                key={event.id}
                onClick={() => goEvent(event)}
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 18,
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: 'relative',
                    height: 170,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to bottom, transparent 25%, rgba(20,20,20,0.96) 100%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 12,
                      left: 14,
                      right: 14,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 15,
                          color: 'white',
                          lineHeight: 1.2,
                        }}
                      >
                        {event.title}
                      </p>
                      <p style={{ fontSize: 11, color: '#999', marginTop: 2 }}>
                        by {org.name}
                      </p>
                    </div>
                    <VibeTag vibe={event.vibe} />
                  </div>
                </div>
                {/* Body */}
                <div style={{ padding: '12px 14px 14px' }}>
                  <p style={{ fontSize: 11, color: C.sub, marginBottom: 8 }}>
                    📍 {event.location} · {event.date} · {event.time}
                  </p>
                  {/* Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 6,
                      marginBottom: 8,
                    }}
                  >
                    {event.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: C.card2,
                          color: '#777',
                          border: `1px solid ${C.border2}`,
                          borderRadius: 100,
                          fontSize: 10,
                          padding: '2px 8px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* Vibe pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 6,
                      marginBottom: 10,
                    }}
                  >
                    {(event.vibes || []).map((v) => (
                      <VibeTag key={v} vibe={v} />
                    ))}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontWeight: 800, fontSize: 16 }}>
                      {event.price === 0 ? 'Free' : `S$${event.price}`}
                    </span>
                    <span style={{ fontSize: 11, color: C.sub }}>
                      {event.capacity - event.sold} spots left
                    </span>
                  </div>
                  <ScarcityBar sold={event.sold} capacity={event.capacity} />
                  <GoingAvatars
                    going={event.going}
                    interested={event.interested}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === 'map' && (
        <MapView events={events} onEventSelect={goEvent} selectedVibe={vibe} />
      )}

      {/* Bottom nav */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          background: 'rgba(10,10,10,0.98)',
          borderTop: `1px solid #1a1a1a`,
        }}
      >
        {[
          { id: 'discover', icon: '🔍', label: 'Discover' },
          { id: 'map', icon: '🗺️', label: 'Map' },
          { id: 'tickets', icon: '🎫', label: 'My Tickets' },
          { id: 'profile', icon: '👤', label: 'Profile' },
        ].map(({ id, icon, label }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px 0 8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              gap: 3,
            }}
          >
            <span style={{ fontSize: 20 }}>{icon}</span>
            <span
              style={{ fontSize: 10, color: tab === id ? C.purple : C.dimmer }}
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      {booking && (
        <PaymentModal
          event={booking}
          onClose={() => setBooking(null)}
          onSuccess={() => {
            setSuccess(booking);
            setBooking(null);
          }}
        />
      )}
      {success && (
        <SuccessModal event={success} onClose={() => setSuccess(null)} />
      )}
    </div>
  );
}

/* EDIT NOTES APPLIED:
1) Event date/time combined in upcoming lists.
2) Organizer profile buttons moved below name/handle.
3) Profile content aligned to left margin.
4) Avatar replaced with clickable upload prompt placeholder.
*/
