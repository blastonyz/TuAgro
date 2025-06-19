/** @type {import('next').NextConfig} */
import {createSecureHeaders} from 'next-secure-headers'

const nextConfig = {
    reactStrictMode: false,
   async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' https: 'unsafe-inline';
              style-src 'self' https: 'unsafe-inline';
              img-src 'self' https: data: blob: res.cloudinary.com;
              media-src 'self' https: data: blob: res.cloudinary.com;
              font-src 'self' https: data:;
              connect-src 'self' https:;
              frame-src 'none';
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              upgrade-insecure-requests;
            `.replace(/\s{2,}/g, ' ').trim()
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Permissions-Policy',
              value: 'camera=*, microphone=*, geolocation=*',
          }
        ]
      }
    ];
  }
};

export default nextConfig;
