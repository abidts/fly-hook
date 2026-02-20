import React from 'react';

type Props = {
  size?: number;
  className?: string;
};

/**
 * Inline SVG logo approximating the provided reference: orange globe, teal land masses,
 * trekker, orbit ring, and plane (all vector, no external assets).
 */
export default function LogoMark({ size = 40, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Fly Hook logo"
      className={className}
      fill="none"
    >
      <defs>
        <radialGradient id="logo-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#ffb866" />
          <stop offset="70%" stopColor="#ff924f" />
          <stop offset="100%" stopColor="#f97b3f" />
        </radialGradient>
      </defs>

      {/* Globe */}
      <circle cx="32" cy="32" r="30" fill="url(#logo-glow)" />

      {/* Continents (stylized to match supplied logo) */}
      <g fill="#0b4f59" opacity="0.92">
        <path d="M9 24c.5-3.5 3.8-6.5 6.8-6.6 2.7 0 3.6 1.7 6.6 1.3 1.7-.2 2.3-1.4 4-1.8 2.3-.6 3.7 1.3 5.2 2.3 1.8 1.2 4.1 1.4 5.7 2.3 1.3.8 2 2.4 1.2 3.7-.8 1.4-2.5 1.5-4.5 1.5-2.9 0-6.3-.5-9.1-.1-4 .5-7 .7-10.6-.5-3.2-1.1-5.8-1.8-5.3-2.1z" />
        <path d="M40.5 13c2.6 1.3 6.6 1.1 8.5 3 1.6 1.6.6 3.9-1.3 4.8-1.9.9-5.4.3-7.5-.6-2.1-.9-2.4-2.8-1.6-4.4.4-.8 1.2-1.6 1.9-2.8z" />
        <path d="M11 42.2c1.9-2.6 6.4-4.5 10.2-4.7 4.8-.2 8.5 2.7 13.2 2.3 3.1-.3 5.6-2.2 7.5-1.2 1.4.7 1.4 2.7.3 3.9-2.5 2.8-7.9 4.7-14.2 4.9-6 .2-12.9-1.5-17-3.9z" />
        <path d="M49.5 31.5c1.4.1 2.6 1 3 2.3.4 1.3 0 2.7-.9 3.6-1.5 1.6-4.5 1.4-5.5-.6-.7-1.3-.3-3 .7-4l1.1-1.1c.4-.2.9-.3 1.6-.2z" />
        <path d="M25.8 47.8c1.2-1.4 3.4-2.2 5.1-1.6l3.7 1.3c1.3.4 1.7 2.1.7 3.1l-1.6 1.6c-1.2 1.2-3.2 1.5-4.7.7l-2.6-1.3c-1.3-.6-1.7-2.2-.6-3.8z" />
      </g>

      {/* Orbit ring */}
      <path
        d="M6 40c6.5-4.5 17-7.3 25-8 7.5-.6 15.8 0 20 2.8 3.4 2.3 1.8 6-3.3 8.4-6.4 3.1-17.2 4.6-25.8 4-5.8-.4-11.7-1.8-15-4-.9-.6-.9-2.2.1-3.2z"
        fill="none"
        stroke="#0b4f59"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Trekker */}
      <g fill="#0b4f59">
        <circle cx="30" cy="19" r="3.2" />
        <path d="M23.8 30.8c-.3-3.1 2.1-5.9 5.3-6.1 2.7-.2 5 1.7 5.6 4.3l2 8.1c.4 1.6-.7 3.2-2.3 3.6l-7.4 1.8c-1.8.4-3.6-.7-4-2.5l-.2-.9c-.2-.8-.2-1.7.1-2.5l1-2.8-.1-2.9z" />
        <path d="M23.4 30.5c-1.1-.4-2.4.2-2.8 1.3l-2.1 5.9c-.5 1.3.2 2.7 1.6 3.2 1.3.4 2.7-.2 3.1-1.5l1.7-5.2c.4-1.2-.2-2.5-1.5-3.1z" />
        <path d="M36.8 23.8c-.7-.2-1.5.2-1.6.9l-.5 2.3c-.2 1 .4 1.9 1.4 2.1l3 .6 1.1-2.2c.4-.9 0-2-1-2.4l-2.4-1.3z" />
        <path d="M27.5 23.5c-2.2-.3-4.3 1-5.1 3l-1.3 3.3 3.4 1.4 2.6-2.7 1-5z" />
      </g>

      {/* Backpack */}
      <path
        d="M24.6 26.5c-1.8-.3-3.5.9-3.7 2.7l-.6 4.4c-.2 1.7 1 3.3 2.7 3.6l4 .7 1.2-7.5c.3-1.7-1-3.3-2.6-3.6l-1-.3z"
        fill="#0c5b65"
      />

      {/* Trek pole */}
      <path d="M33 25l-1.4 12.5" stroke="#0b4f59" strokeWidth="2.2" strokeLinecap="round" />

      {/* Airplane */}
      <path
        d="M40.2 14.5l3.4 2-.8 1.2 2.3 1.4 1.5-.5 1.3.8-.8 1.4-2.3-.6-1.3 1.2 1 1.5-3.5-1.6-2 .9-.5-1.2 1.7-1.5-.9-2.4 1.6.4z"
        fill="#0b4f59"
      />
    </svg>
  );
}
