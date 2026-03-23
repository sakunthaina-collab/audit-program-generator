# Audit Program Generator

**AI-Powered Professional Audit Program Generator with SQL Analytics & Knowledge Base**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)](https://tailwindcss.com/)

Generate professional audit programs in minutes using AI, complete with SQL queries for data analytics and compliance frameworks (IIA, COSO, ISO 31000, CPIAT). Includes comprehensive Internal Audit Knowledge Base for Senior Auditors.

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

### 📚 **NEW: Internal Audit Knowledge Base**
Comprehensive knowledge resource for Senior Internal Auditors:
- **8 Core Topics**:
  1. **Internal Audit Fundamentals** - System focus, CAR writing, Root cause analysis
  2. **Three Lines of Defense (3-LOD)** - Model structure and independence requirements
  3. **COSO Framework & SoD** - Internal controls and Segregation of Duties
  4. **Fraud Triangle & Detection** - Pressure, Opportunity, Rationalization + Red flags
  5. **PDPA Compliance** - Data Controller, Data Processor, DPIA assessment
  6. **Continuous Auditing** - SQL queries for real-time monitoring
  7. **Professional Ethics** - Conflict of interest and independence standards
  8. **Audit Planning** - Risk-based planning and business alignment

- **Bilingual Content**: Thai and English versions
- **Searchable**: Find topics quickly
- **Copy-Paste Ready**: Copy content for documentation
- **SQL Examples**: Real-world query templates

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
# Copy the component files
cp src/AuditProgramGenerator.jsx your-project/src/components/
cp src/KnowledgeBase.jsx your-project/src/components/

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
import App from './App';

function MyApp() {
  return <App />;
}
```

The app includes:
- **Generator Page**: Create audit programs
- **Knowledge Base Page**: Learn and reference audit concepts

---

## 📖 User Guide

### Generator Page

#### 1. Input Form
Fill in basic information:
- **What to audit**: Process name (e.g., "Procurement process")
- **Industry**: Select from Banking, Retail, IT, Real Estate, Manufacturing
- **Audit Type**: Operational, Financial, IT Security, Fraud Risk, Compliance
- **Known Issues** (optional): Any specific concerns

#### 2. Generate
Click "Generate Audit Program" - AI will create a comprehensive program in ~5 seconds.

#### 3. Review Output
Navigate through 7 tabs to review:
- Audit objectives and scope
- Detailed procedures
- Red flags and warning signs
- Sampling methodology
- Timeline estimates
- Checklists
- **SQL queries** for data analysis

#### 4. Export & Use
- **Copy**: Copy individual sections or SQL queries
- **Export Word**: Download complete audit program
- **Download SQL**: Get all queries as a .sql file

---

### Knowledge Base Page

#### 1. Access Knowledge Base
Click "Knowledge Base" button in navigation bar

#### 2. Browse Topics
- **13 comprehensive sections** covering all aspects of Internal Audit
- Each section includes:
  - Definitions and key concepts
  - Real-world examples
  - Best practices
  - SQL query templates (where applicable)

#### 3. Search
- Use search box to find specific topics
- Searches across titles and content
- Case-insensitive

#### 4. Language Switcher
- Toggle between Thai (ไทย) and English
- All content available in both languages

#### 5. Copy Content
- Click "Copy" button to copy section content
- Paste into your documentation
- Includes tables, code blocks, and examples

---

## 📚 Knowledge Base Topics

### 1. Internal Audit Fundamentals
**Key Principles:**
- **System Focus**: Audit systems, not people
- **Root Cause Analysis**: Find real causes, not just symptoms
- **Preventive Control**: Prevent problems before they occur

**CAR Writing:**
- ❌ Wrong: "Employee X cannot explain SOP"
- ✅ Right: "Communication system for SOP is ineffective"

### 2. Three Lines of Defense (3-LOD)
**Structure:**
- **Line 1**: Operations (Control risks in own work)
- **Line 2**: Risk & Compliance (Support and oversee Line 1)
- **Line 3**: Internal Audit (Independent audit of all)

**Independence Requirement:**
- Report to Audit Committee or Board
- Not to CFO or COO
- Must have clear Audit Charter

### 3. COSO Framework & SoD
**5 Components:**
1. Control Environment
2. Risk Assessment
3. Control Activities
4. Information & Communication
5. Monitoring

**Segregation of Duties - 3 Functions:**
1. Authorization (Approve)
2. Recording (Record in system)
3. Custody (Keep/maintain assets)

### 4. Fraud Triangle & Detection
**3 Elements:**
- **Pressure**: Financial need or desire
- **Opportunity**: Weakness or gap in controls
- **Rationalization**: Self-justification

**Red Flags:**
- Split Loans - One customer with multiple loans
- Nominee Accounts - Account in someone else's name
- NPL Evergreening - New loan to pay old one
- Unauthorized Access - Access without permission
- Unusual Pricing - Prices outside normal range

### 5. PDPA Compliance
**Key Definitions:**
- **Data Controller**: Decision maker about data (Bank)
- **Data Processor**: Processes data per instructions (Outsource)
- **Personal Data**: Identifies person (Name, ID, Email)
- **Sensitive Data**: Sensitive info (Health, Religion)

**DPIA Process:**
1. Identify data processing activity
2. Assess necessity & proportionality
3. Identify potential risks
4. Define mitigation measures
5. Document DPIA report

### 6. Continuous Auditing
**Traditional vs Continuous:**
- **Frequency**: 1-2 times/year → Daily/hourly
- **Sampling**: 5-10% sample → 100% population
- **Speed**: 1-2 months → Real-time
- **Tools**: Manual → SQL, Python, Power BI

**SQL Examples:**
```sql
-- Split Loans Detection
SELECT customer_id, COUNT(*) as loan_count
FROM loans
WHERE created_date > DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY customer_id
HAVING COUNT(*) > 2;

-- Unauthorized Access
SELECT user_id, customer_id, access_time
FROM access_log
WHERE user_id NOT IN (
    SELECT user_id FROM user_permissions 
    WHERE permission = 'view_customer_data'
);
```

### 7. Professional Ethics
**Conflict of Interest - Should NOT:**
- Audit work you designed (within 1 year)
- Audit friends/relatives
- Have financial interest

**Independence & Objectivity:**
- Be independent
- Be impartial (no bias)
- Be competent (knowledgeable)
- Be honest (no exploitation)

### 8. Audit Planning
**Principles:**
- **Risk-Based**: Audit high-risk areas first
- **Business Aligned**: Don't disrupt operations
- **Materiality**: Focus on significant issues
- **Efficiency**: Use data analytics

**Timing Strategy:**
- Wrong: "Must audit per plan even if it disrupts business"
- Right: "Coordinate to reschedule while achieving objectives"

### 9. Regulatory & Compliance Framework (Banking)
**Key Regulations:**
- **สนส. 6/2566** - Internal Audit Standards
- **สนส. 5/2566** - Compliance Standards
- **สกช. 5/2566** - IT Risk Framework (CIA Triad)

**PDPA & AML/CFT:**
- Consent Management, Data Subject Rights, DPIA
- KYC, CDD, Sanctions List Checking

### 10. IT Audit & Cybersecurity
**IT General Controls (ITGC):**
- Access Security, SDLC, Change Management, Backup & Recovery

**IT Application Controls:**
- Input Controls, Processing Controls, Output Controls

**Cybersecurity & BCP:**
- Network Security, Encryption, Disaster Recovery Plan
- Frameworks: COBIT 2019, ISO 27001, NIST

### 11. Data Analytics & Machine Learning
**Continuous Auditing:**
- Duplicate Transactions Detection
- Unusual Amount Detection
- Unauthorized Access Detection

**Machine Learning:**
- NPL Prediction, Credit Risk Scoring, Fraud Detection

**Visualization:**
- Power BI/Tableau Dashboards

### 12. Fraud Risk Management (Advanced)
**Fraud Pentagon (5 Elements):**
- Pressure, Opportunity, Rationalization, Competence, Arrogance

**Management Override:**
- Unusual approvals, Journal entries, Related party transactions

**Red Flags by Industry:**
- Banking: Split Loans, Nominee Accounts, NPL Evergreening
- Retail: Vendor Concentration, Price Outliers

### 13. Financial & Business Acumen
**Accounting Cycles:**
- Revenue, Expenditure, Payroll, Inventory

**Investment Appraisal:**
- NPV, Payback Period, IRR

**Managerial Accounting:**
- CVP Analysis, Variance Analysis, Budgeting

**Strategic Management:**
- SWOT Analysis, Porter's Five Forces

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
App/
├── Navigation Bar
├── Generator Page
│   ├── Input Form Screen
│   ├── Generating Screen (with progress)
│   └── Output Screen
│       ├── Summary Tab
│       ├── Procedures Tab
│       ├── Red Flags Tab
│       ├── Sampling Tab
│       ├── Timeline Tab
│       ├── Checklist Tab
│       └── SQL Queries Tab
└── Knowledge Base Page
    ├── Search Box
    ├── Language Switcher
    ├── 8 Knowledge Sections
    │   ├── Internal Audit Fundamentals
    │   ├── 3-LOD Model
    │   ├── COSO & SoD
    │   ├── Fraud Triangle
    │   ├── PDPA Compliance
    │   ├── Continuous Auditing
    │   ├── Professional Ethics
    │   └── Audit Planning
    └── Copy to Clipboard
```

---

## 🎓 For Internal Auditors

### Use Cases

#### Generator
1. **Planning Phase**: Generate comprehensive audit programs quickly
2. **Fieldwork Phase**: Use SQL queries to analyze data
3. **Reporting Phase**: Reference red flags and procedures
4. **Training**: Template for junior auditors

#### Knowledge Base
1. **Learning**: Understand audit concepts and frameworks
2. **Reference**: Quick lookup during audit work
3. **Training**: Material for junior auditor onboarding
4. **Documentation**: Copy content for audit files

### Best Practices
- ✅ Review and customize generated programs for your specific context
- ✅ Validate SQL queries against your database schema
- ✅ Combine with Power BI for visual analytics
- ✅ Document your findings using the checklist
- ✅ Focus on **system weaknesses**, not individual blame
- ✅ Use Knowledge Base to ensure compliance with standards
- ✅ Reference 3-LOD model for organizational alignment
- ✅ Apply COSO framework for control assessment

---

## 📊 Sample Industries & Use Cases

### 🏦 Banking
- Credit risk assessment
- Loan fraud detection (split loans, nominees)
- NPL evergreening
- Interest rate manipulation
- Unauthorized data access (PDPA compliance)
- Segregation of Duties in lending process

### 🏪 Retail
- Procurement process audit
- Vendor concentration risk
- Price outliers
- Segregation of Duties (SoD)
- Inventory management controls

### 💻 IT/Technology
- IT security audit
- Access control testing
- Failed login monitoring
- Data encryption compliance
- System change management

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
```bash
# Clone repository
git clone https://github.com/sakunthaina-collab/audit-program-generator

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
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
- Skills: SQL, Power BI, Data Analytics, Risk Assessment, Internal Audit

---

## 🙏 Acknowledgments

- Built with [Claude API](https://www.anthropic.com/claude) by Anthropic
- Audit frameworks: IIA, COSO, ISO 31000, CPIAT
- Knowledge Base: Senior Internal Auditor expertise
- Inspired by real-world internal audit challenges in Thai enterprises

---

## 📞 Support

For questions or issues:
1. Open an issue on GitHub
2. Review the [User Guide](#user-guide) section
3. Check SQL query examples in the app
4. Reference Knowledge Base for audit concepts

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
- [ ] Knowledge Base video tutorials
- [ ] Audit program templates library

### Version 3.0 (Future)
- [ ] AI-powered risk assessment
- [ ] Automated evidence collection
- [ ] Real-time continuous auditing
- [ ] Machine learning for anomaly detection
- [ ] Advanced DPIA calculator
- [ ] Fraud risk scoring engine

---

## ⚖️ Disclaimer

This tool is designed to assist internal auditors in creating audit programs and learning audit concepts. Users are responsible for:
- Validating generated content for their specific context
- Ensuring compliance with local regulations
- Reviewing and approving all audit procedures before execution
- Protecting sensitive data when using SQL queries
- Applying knowledge appropriately to their organizational context

The author is not liable for any decisions made based on generated audit programs or knowledge base content.

---

**Built with ❤️ by Nakarin Sakunthai | Powered by Claude AI**

**Last Updated**: March 23, 2026
