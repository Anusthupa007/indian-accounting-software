# Indian Accounting Software - Hybrid System Documentation

## 📋 Overview

This is a **hybrid accounting system** that combines:
- **Custom Web Application** (Next.js + React)
- **Tally ERP 9/Prime Integration** (For compliance)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Tally ERP 9 or Tally Prime installed
- Vercel account (for deployment)

### Installation

```bash
# Clone the repository (if not already cloned)
git clone https://github.com/your-repo/indian-accounting-software.git
cd indian-accounting-software

# Install dependencies
npm install

# Run development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 🔧 System Architecture

### 1. Custom Web Application
- **Framework**: Next.js 14 (App Router)
- **UI**: Tailwind CSS
- **Charts**: Chart.js + React-Chartjs-2
- **State Management**: React Context (can be upgraded to Redux if needed)
- **API**: Next.js API Routes

### 2. Tally Integration
- **Connector**: Custom TallyConnector class
- **Protocol**: XML over HTTP
- **Features**: Company data, invoices, GST reports, financial statements
- **Compliance**: MCA, Ind AS, CARO 2020, Income Tax

### 3. Hybrid Data Flow

```
User → Web UI → (Custom Features) → Our System
              → (Compliance Features) → Tally Integration → Tally ERP
```

## 📁 Project Structure

```
src/
├── app/                  # Next.js pages and routes
│   ├── invoice/           # Invoice management
│   ├── expenses/          # Expense tracking
│   ├── reports/           # Custom reports
│   ├── tally/             # Tally integration pages
│   │   ├── setup/         # Tally setup
│   │   ├── test/          # Tally test
│   │   └── dashboard/     # Compliance dashboard
│   └── page.tsx           # Home page
│
├── components/           # React components
│   ├── invoicing/         # Invoice components
│   ├── tally/             # Tally components
│   ├── analytics/         # Analytics components
│   └── Navigation.tsx     # Main navigation
│
├── lib/                  # Utility functions
│   ├── tally-connector.ts # Tally integration
│   └── utils/             # Helper functions
│
└── styles/               # Global styles
```

## 🔌 Tally Integration

### Configuration

1. **Set up Tally Server**:
   - Install Tally ERP 9 or Tally Prime
   - Enable HTTP access in Tally settings
   - Note the server URL and port (default: localhost:9000)

2. **Configure in Application**:
   - Go to `/tally/setup`
   - Enter Tally server details
   - Test connection

### Available Features

| Feature | Source | Description |
|---------|--------|-------------|
| Invoicing | Custom | Modern web-based invoice creation |
| GST Calculation | Custom | Automatic GST calculation |
| Company Data | Tally | Retrieve company information |
| Financial Statements | Tally | Ind AS compliant statements |
| GST Reports | Tally | GSTR-1, GSTR-3B generation |
| Income Tax | Tally | ITR computation |
| Audit Reports | Tally | CARO 2020 compliance |
| Reconciliation | Tally | BRS, EPF, ESI, TDS |

### Testing Integration

1. Go to `/tally/test`
2. Enter your Tally configuration
3. Run integration tests
4. Verify all features work correctly

## 📊 Custom Features

### 1. Invoicing System
- **GST-compliant invoices** with multiple tax rates
- **Customer management** with GSTIN validation
- **Item management** with HSN/SAC codes
- **PDF generation** for invoices
- **Email integration** for sending invoices

### 2. Analytics Dashboard
- **Revenue vs Expenses** analysis
- **GST breakdown** by tax type
- **Ageing analysis** for debtors/creditors
- **Financial ratios** (current ratio, gross margin, etc.)
- **Cash flow** visualization

### 3. Reporting
- **Custom reports** beyond Tally's capabilities
- **Export to Excel** functionality
- **Visual charts** and graphs
- **Custom date ranges**

## 🎨 Customization

### Adding New Features

1. **Create new page**:
```bash
# Create a new page in src/app/
mkdir -p src/app/new-feature
# Create page.tsx in the new directory
```

2. **Add to navigation**:
- Edit `src/components/Navigation.tsx`
- Add new link to the navigation menu

3. **Create API route** (if needed):
```bash
# Create API route in src/app/api/
mkdir -p src/app/api/new-feature
# Create route.ts file
```

### Styling

The application uses **Tailwind CSS**. You can:
- Add new utility classes
- Create custom components
- Extend the theme in `tailwind.config.js`

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
# First deployment
vercel --prod --name "indian-accounting-software" --region blr1

# Subsequent deployments
vercel --prod
```

### Environment Variables

Create `.env.local` file:
```env
NEXT_PUBLIC_APP_NAME="Indian Accounting Software"
NEXT_PUBLIC_TALLY_SERVER="your-tally-server"
NEXT_PUBLIC_TALLY_PORT=9000
NEXT_PUBLIC_TALLY_COMPANY="Your Company"
```

### Deployment Script

Use the provided `deploy.sh` script:
```bash
chmod +x deploy.sh
./deploy.sh
```

## 📋 Compliance Features

### MCA.gov.in Compliance
- **Schedule III** financial statements
- **Company registration** data
- **Annual filing** requirements
- **Director reports**

### Ind AS Compliance
- **Ind AS 1** - Presentation of Financial Statements
- **Ind AS 101** - First-time Adoption
- **Ind AS 109** - Financial Instruments
- **Ind AS 115** - Revenue from Contracts

### CARO 2020 Compliance
- **Clause 3(i)** - Fixed Assets
- **Clause 3(ii)** - Inventories
- **Clause 3(iii)** - Loans to directors
- **Clause 3(iv)** - Investments
- **Clause 3(v)** - Deposits

### GST Compliance
- **GSTR-1** generation
- **GSTR-3B** reconciliation
- **E-way bill** integration
- **GSTIN validation**
- **HSN/SAC codes**

## 🔒 Security

### Data Protection
- **HTTPS** for all communications
- **Secure storage** of sensitive data
- **Role-based access** control
- **Audit logs** for all actions

### Best Practices
- Regular backups
- Strong passwords
- Two-factor authentication
- Regular software updates
- Data encryption

## 📚 Troubleshooting

### Common Issues

**Tally Connection Failed**:
- Check Tally is running
- Verify server URL and port
- Ensure HTTP access is enabled in Tally
- Check firewall settings

**Build Errors**:
```bash
npm install
npm run build
```

**Deployment Issues**:
```bash
vercel logs
```

## 🤝 Support

For support, please contact:
- **Email**: support@indianaccounting.com
- **Phone**: +91 XXXXXXXXXX
- **Website**: https://indianaccounting.com

## 📝 License

This software is licensed under the MIT License.

## 🎯 Roadmap

### Future Features
- **Multi-company support**
- **User role management**
- **Mobile applications**
- **AI-powered insights**
- **Automated compliance checks**
- **Integration with banking APIs**

## 📖 Changelog

### Version 1.0.0
- Initial release
- Basic invoicing system
- Tally integration
- Compliance dashboard
- Analytics features

### Version 1.1.0 (Planned)
- Advanced reporting
- User management
- Mobile responsive improvements
- Performance optimizations

## 💡 Tips

1. **Regular backups**: Always backup your data
2. **Test in staging**: Test new features before production
3. **Monitor performance**: Use analytics to track usage
4. **Stay updated**: Keep software up to date
5. **Train users**: Proper training reduces errors

## 🎓 Training

### Getting Started
1. Watch tutorial videos
2. Read user manual
3. Practice with sample data
4. Attend webinars
5. Join user community

### Advanced Features
1. Custom report creation
2. API integration
3. Automation setup
4. Compliance configuration
5. Troubleshooting techniques

---

**Indian Accounting Software** © 2026
**Hybrid Accounting Solution** for Indian Businesses
**MCA & Ind AS Compliant** | **GST Ready** | **Audit Approved**