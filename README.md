# FBA Accelerator Landing Page

Static, mobile-first landing page for The Wholesale Network's $497 FBA Accelerator.

## Offer shown

- FBA Accelerator Course
- The Brand Partner Playbook proprietary system
- Wholesale Challenge
- $497 one-time payment
- Access delivered through Whop

## Connect the Whop checkout

Open `config.js` and set `whopCheckoutUrl` to the live $497 Whop checkout URL:

```js
window.FBA_ACCELERATOR_CONFIG = {
  whopCheckoutUrl: "https://whop.com/checkout/...",
};
```

All purchase buttons will automatically open that checkout in a new tab.

## Preview locally

From this directory:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Files

- `index.html` — landing page content and structure
- `styles.css` — TWN-branded responsive design
- `config.js` — Whop checkout configuration
- `app.js` — checkout wiring and footer year
- `assets/twn-logo.png` — TWN logo
