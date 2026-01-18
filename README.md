# PayMaster Africa API Documentation

API documentation portal for **PayMaster Africa** — a WhatsApp-first payment gateway that enables seamless mobile money collections and disbursements across Africa.

## Overview

PayMaster Africa revolutionizes digital payments by leveraging WhatsApp to bridge the gap between merchants and mobile money wallets. This documentation portal provides comprehensive API reference and guides for integrating PayMaster Africa into your applications.

### Key Features

- **WhatsApp-First Payments** — Customers pay using WhatsApp with no app downloads required
- **Multi-Network Support** — Accept MTN Mobile Money, Telecel Cash, and AirtelTigo Money
- **Dynamic QR Codes** — Generate unique QR codes for transactions
- **Real-Time Webhooks** — Instant payment notifications
- **No Hardware Required** — Eliminate POS machine costs

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm, yarn, or pnpm package manager

## Installation

```bash
# Clone the repository
git clone https://github.com/codetozombie/doc.git
cd doc

# Install dependencies
npm install
```

## Development

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation site.

## Project Structure

```
├── apis/                    # OpenAPI specification files
│   ├── openapi.json         # Main API specification
│   ├── paths/               # API endpoint definitions
│   │   ├── app_admin/       # Admin authentication endpoints
│   │   ├── orders/          # Order management endpoints
│   │   ├── products/        # Product management endpoints
│   │   └── stores/          # Store management endpoints
│   └── components/          # Reusable schema components
├── pages/                   # Documentation pages (MDX)
│   ├── introduction.mdx     # Getting started guide
│   ├── store-management.mdx # Store API documentation
│   ├── product-management.mdx # Product API documentation
│   ├── order-management.mdx # Order API documentation
│   └── admin-authentication.mdx # Admin auth documentation
├── public/                  # Static assets (logos, images)
├── zudoku.config.tsx        # Zudoku configuration
└── package.json
```

## API Modules

The PayMaster API is organized into the following modules:

| Module | Description |
|--------|-------------|
| **Stores** | Manage merchant storefronts with currency, location, and branding |
| **Products** | Handle simple products, bundles, images, and categories |
| **Orders** | Create orders and send WhatsApp payment links to customers |
| **Admin Auth** | Secure invitation-based admin account management |

## Technology Stack

- **[Zudoku](https://zudoku.dev/)** — Modern API documentation framework
- **[React](https://react.dev/)** — UI library
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe JavaScript
- **[Redocly CLI](https://redocly.com/docs/cli/)** — OpenAPI bundling and validation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## Resources

- [Zudoku Documentation](https://zudoku.dev/docs) — Learn more about the documentation framework
- [PayMaster Africa](https://paymasterafrica.com/) — Create a merchant account
- [GitHub Discussions](https://github.com/zuplo/zudoku/discussions) — Community support
