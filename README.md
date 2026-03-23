# Audit Program Generator

**AI-Powered Professional Audit Program Generator with SQL Analytics**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)](https://tailwindcss.com/)

Generate professional audit programs in minutes using AI, complete with SQL queries for data analytics and compliance frameworks (IIA, COSO, ISO 31000, CPIAT).

---

## 🎯 Features

### ✨ Core Capabilities
- **AI-Powered Generation**: Create comprehensive audit programs based on simple inputs
- **Multi-Industry Support**: Banking, Retail, IT, Real Estate, Manufacturing
- **Multi-Language**: Full Thai (ไทย) and English support
- **7 Comprehensive Tabs**:
  - 📊 Summary - Objectives, risk levels, timeline
  - 📝 Procedures - Detailed audit steps with sampling
  - 🚩 Red Flags - Warning signs to watch for
  - 👥 Sampling - Statistical sampling strategies
  - ⏱️ Timeline - Phase-by-phase estimates
  - ✅ Checklist - Documents, people, systems to check
  - 💾 **SQL Queries** - Ready-to-use data analytics queries

### 💡 SQL Query Templates
Pre-built SQL queries for:
- **Banking**: Split loans, nominee detection, NPL evergreening, interest rate outliers, unauthorized access, portfolio analysis
- **Retail**: Vendor concentration, price outliers
- **IT**: Failed login attempts, access monitoring

### 🏦 Banking & Financial Services Focus
Specialized support for:
- Credit risk assessment
- Loan fraud detection
- NPL (Non-Performing Loan) monitoring
- PDPA compliance
- BoT (Bank of Thailand) regulatory compliance

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ (for local development)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

#### Option 1: Use as React Component
```bash
# Copy the component file
cp audit-program-generator-with-sql.jsx your-project/src/components/

# Install dependencies (if not already installed)
npm install lucide-react
```

#### Option 2: Standalone HTML (Coming Soon)
```bash
# Build standalone version
npm run build:standalone
```

### Usage

```jsx
import AuditProgramGenerator from './components/audit-program-generator-with-sql';

function App() {
  return <AuditProgramGenerator />;
}
```

---

## 📖 User Guide

### 1. Input Form
Fill in basic information:
- **What to audit**: Process name (e.g., "Procurement process")
- **Industry**: Select from Banking, Retail, IT, Real Estate, Manufacturing
- **Audit Type**: Operational, Financial, IT Security, Fraud Risk, Compliance
- **Known Issues** (optional): Any specific concerns

### 2. Generate
Click "Generate Audit Program" - AI will create a comprehensive program in ~5 seconds.

### 3. Review Output
Navigate through 7 tabs to review:
- Audit objectives and scope
- Detailed procedures
- Red flags and warning signs
- Sampling methodology
- Timeline estimates
- Checklists
- **SQL queries** for data analysis

### 4. Export & Use
- **Copy**: Copy individual sections or SQL queries
- **Export Word**: Download complete audit program (coming soon)
- **Download SQL**: Get all queries as a .sql file

---

## 💻 SQL Queries Usage

### Example: Split Loans Detection (Banking)

```sql
-- Split Loans Detection
-- Purpose: Find customers with multiple loans within 7 days
-- Threshold: 5,000,000 THB (branch approval limit)

SELECT 
    customer_id,
    customer_name,
    COUNT(*) as loan_count,
    SUM(approved_amount) as total_amount,
    MIN(approved_date) as first_approval,
    MAX(approved_date) as last_approval,
    DATEDIFF(day, MIN(approved_date), MAX(approved_date)) as days_between
FROM loans
WHERE approved_date >= DATEADD(month, -6, GETDATE())
GROUP BY customer_id, customer_name
HAVING COUNT(*) > 1 
    AND DATEDIFF(day, MIN(approved_date), MAX(approved_date)) <= 7
    AND SUM(approved_amount) > 5000000
ORDER BY total_amount DESC;
```

### How to Use:
1. **Copy** the query from the SQL Queries tab
2. **Paste** into your SQL client (DBeaver, SSMS, pgAdmin)
3. **Adjust** thresholds and date ranges as needed
4. **Export** results to CSV
5. **Import** to Excel or Power BI for visualization
6. **Use** as evidence in your audit report

---

## 🏗️ Architecture

### Technology Stack
- **Frontend**: React 18
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **AI Backend**: Claude API (Anthropic)
- **Audit Framework**: CPIAT, IIA Standards, COSO, ISO 31000

### Component Structure
```
AuditProgramGenerator/
├── Input Form Screen
├── Generating Screen (with progress)
├── Output Screen
│   ├── Summary Tab
│   ├── Procedures Tab
│   ├── Red Flags Tab
│   ├── Sampling Tab
│   ├── Timeline Tab
│   ├── Checklist Tab
│   └── SQL Queries Tab (NEW!)
└── Language Switcher (TH/EN)
```

---

## 🎓 For Internal Auditors

### Use Cases
1. **Planning Phase**: Generate comprehensive audit programs quickly
2. **Fieldwork Phase**: Use SQL queries to analyze data
3. **Reporting Phase**: Reference red flags and procedures
4. **Training**: Template for junior auditors

### Best Practices
- ✅ Review and customize generated programs for your specific context
- ✅ Validate SQL queries against your database schema
- ✅ Combine with Power BI for visual analytics
- ✅ Document your findings using the checklist
- ✅ Focus on **system weaknesses**, not individual blame

---

## 📊 Sample Industries & Use Cases

### 🏦 Banking
- Credit risk assessment
- Loan fraud detection (split loans, nominees)
- NPL evergreening
- Interest rate manipulation
- Unauthorized data access (PDPA compliance)

### 🏪 Retail
- Procurement process audit
- Vendor concentration risk
- Price outliers
- Segregation of Duties (SoD)

### 💻 IT/Technology
- IT security audit
- Access control testing
- Failed login monitoring
- Data encryption compliance

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
```bash
# Clone repository
git clone https://github.com/yourusername/audit-program-generator

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 📝 License

MIT License - Copyright (c) 2026 Nakarin Sakunthai

See [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Nakarin Sakunthai**
- Former Account Executive at Baan Promt (บริษัท น่าอยู่ คอร์ปอเรชั่น จำกัด)
- Specialized in: Audit Program Design, Real Estate, Banking, IT Audit
- Skills: SQL, Power BI, Data Analytics, Risk Assessment

---

## 🙏 Acknowledgments

- Built with [Claude API](https://www.anthropic.com/claude) by Anthropic
- Audit frameworks: IIA, COSO, ISO 31000, CPIAT
- Inspired by real-world internal audit challenges in Thai enterprises

---

## 📞 Support

For questions or issues:
1. Open an issue on GitHub
2. Review the [User Guide](#user-guide) section
3. Check SQL query examples in the app

---

## 🔮 Roadmap

### Version 2.0 (Planned)
- [ ] Export to Word (.docx) with full formatting
- [ ] Power BI dashboard specifications
- [ ] Python scripts for data cleansing
- [ ] Custom SQL query builder (drag & drop)
- [ ] Database connection (live query execution)
- [ ] Multi-user collaboration
- [ ] Audit program version control
- [ ] Integration with audit management systems

### Version 3.0 (Future)
- [ ] AI-powered risk assessment
- [ ] Automated evidence collection
- [ ] Real-time continuous auditing
- [ ] Machine learning for anomaly detection

---

## ⚖️ Disclaimer

This tool is designed to assist internal auditors in creating audit programs. Users are responsible for:
- Validating generated content for their specific context
- Ensuring compliance with local regulations
- Reviewing and approving all audit procedures before execution
- Protecting sensitive data when using SQL queries

The author is not liable for any decisions made based on generated audit programs.

---

**Built with ❤️ by Nakarin Sakunthai | Powered by Claude AI**
