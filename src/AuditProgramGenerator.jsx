import React, { useState } from 'react';
import { ChevronRight, Download, Copy, Check, Loader2, FileText, AlertTriangle, Users, Clock, CheckSquare, Globe, Database, Code } from 'lucide-react';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, AlignmentType, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';

const AuditProgramGenerator = () => {
  const [language, setLanguage] = useState('th');
  const [step, setStep] = useState('input');
  const [formData, setFormData] = useState({
    process: '',
    industry: 'retail',
    issues: '',
    auditType: 'operational'
  });
  const [auditProgram, setAuditProgram] = useState(null);
  const [activeTab, setActiveTab] = useState('summary');
  const [copied, setCopied] = useState(false);
  const [copiedQuery, setCopiedQuery] = useState(null);
  const [generatingStep, setGeneratingStep] = useState(0);
  const [exporting, setExporting] = useState(false);

  // Translations (same as before, plus SQL tab)
  const t = {
    th: {
      title: 'Audit Program Generator',
      subtitle: 'สร้าง audit program มืออาชีพในไม่กี่นาที',
      poweredBy: 'ใช้เทคโนโลยี AI + มาตรฐาน CPIAT (IIA, COSO, ISO 31000)',
      
      whatToAudit: 'คุณต้องการตรวจสอบอะไร? *',
      whatToAuditPlaceholder: 'เช่น กระบวนการจัดซื้อ, ระบบคอมมิชชันขาย, IT Security...',
      industry: 'อุตสาหกรรม',
      auditType: 'ประเภทการตรวจสอบ',
      knownIssues: 'ปัญหาหรือข้อสงสัยที่ทราบ (ถ้ามี)',
      knownIssuesPlaceholder: 'เช่น ราคาสูงกว่าตลาด, ไม่มีการเปรียบเทียบราคา 3 ราย, สงสัยมีการทุจริต...',
      generateButton: 'สร้าง Audit Program',
      
      industries: {
        retail: 'ค้าปลีก',
        banking: 'ธนาคาร',
        it: 'ไอที/เทคโนโลยี',
        realestate: 'อสังหาฯ',
        manufacturing: 'ผลิต',
        other: 'อื่นๆ'
      },
      
      auditTypes: {
        operational: 'Operational Audit (ตรวจสอบการดำเนินงาน)',
        financial: 'Financial Audit (ตรวจสอบการเงิน)',
        it: 'IT Security Audit (ตรวจสอบความปลอดภัย IT)',
        fraud: 'Fraud Risk Assessment (ประเมินความเสี่ยงทุจริต)',
        compliance: 'Compliance Audit (ตรวจสอบการปฏิบัติตาม)'
      },
      
      generating: 'กำลังสร้าง Audit Program ของคุณ',
      generatingSteps: [
        'กำลังวิเคราะห์บริบทธุรกิจ...',
        'กำลังประเมินความเสี่ยง (COSO, ISO 31000)...',
        'กำลังสร้างขั้นตอนการตรวจสอบ...',
        'กำลังสร้าง SQL queries และ analytics...',
        'กำลังสร้างคำแนะนำมืออาชีพ...',
        'กำลังจัดเรียงข้อมูล...'
      ],
      
      copy: 'คัดลอก',
      copied: 'คัดลอกแล้ว!',
      exportWord: 'Export Word',
      exporting: 'กำลัง Export...',
      newProgram: 'สร้างใหม่',
      
      tabs: {
        summary: 'สรุป',
        procedures: 'ขั้นตอน',
        redflags: 'สัญญาณเตือน',
        sampling: 'การสุ่มตัวอย่าง',
        timeline: 'กำหนดเวลา',
        checklist: 'รายการตรวจสอบ',
        sqlqueries: 'SQL Queries' // NEW!
      },
      
      auditObjectives: 'วัตถุประสงค์การตรวจสอบ',
      riskLevel: 'ระดับความเสี่ยง',
      timeline: 'ระยะเวลา',
      status: 'สถานะ',
      readyToUse: 'พร้อมใช้งาน',
      scope: 'ขอบเขต',
      
      objective: 'วัตถุประสงค์',
      risk: 'ความเสี่ยง',
      control: 'การควบคุม',
      procedureTable: {
        id: 'รหัส',
        procedure: 'ขั้นตอน',
        type: 'ประเภท',
        sample: 'ตัวอย่าง'
      },
      
      redFlagsTitle: 'สัญญาณเตือนที่ต้องระวัง',
      redFlagsNote: 'หมายเหตุ: หากพบสัญญาณเตือนเหล่านี้ ให้บันทึกและรายงานให้ผู้บริหารทันที',
      
      samplingApproach: 'แนวทางการสุ่มตัวอย่าง',
      strategy: 'กลยุทธ์',
      totalSample: 'ขนาดตัวอย่างรวม',
      
      estimatedTimeline: 'ประมาณการเวลา',
      planning: 'วางแผน',
      fieldwork: 'ลงพื้นที่',
      reporting: 'รายงาน',
      total: 'รวมทั้งหมด',
      
      documentsToRequest: 'เอกสารที่ต้องขอ',
      peopleToInterview: 'บุคคลที่ต้องสัมภาษณ์',
      systemsToCheck: 'ระบบที่ต้องตรวจสอบ',
      
      sqlQueriesTitle: 'SQL Queries สำหรับ Data Analytics',
      sqlQueriesDesc: 'Query templates ที่พร้อมใช้งานสำหรับการวิเคราะห์ข้อมูล',
      copyQuery: 'คัดลอก Query',
      downloadSQL: 'ดาวน์โหลด .sql',
      
      footer: 'สร้างด้วย Audit Program Builder skill + Claude API'
    },
    
    en: {
      title: 'Audit Program Generator',
      subtitle: 'Generate professional audit programs in minutes',
      poweredBy: 'Powered by AI + CPIAT Standards (IIA, COSO, ISO 31000)',
      
      whatToAudit: 'What do you want to audit? *',
      whatToAuditPlaceholder: 'e.g., Procurement process, Sales commission system, IT Security...',
      industry: 'Industry',
      auditType: 'Audit Type',
      knownIssues: 'Known issues or concerns (optional)',
      knownIssuesPlaceholder: 'e.g., Prices higher than market, no 3-quote comparison, suspected fraud...',
      generateButton: 'Generate Audit Program',
      
      industries: {
        retail: 'Retail',
        banking: 'Banking',
        it: 'IT/Technology',
        realestate: 'Real Estate',
        manufacturing: 'Manufacturing',
        other: 'Other'
      },
      
      auditTypes: {
        operational: 'Operational Audit',
        financial: 'Financial Audit',
        it: 'IT Security Audit',
        fraud: 'Fraud Risk Assessment',
        compliance: 'Compliance Audit'
      },
      
      generating: 'Generating Your Audit Program',
      generatingSteps: [
        'Analyzing business context...',
        'Assessing risks (COSO, ISO 31000)...',
        'Creating audit procedures...',
        'Generating SQL queries & analytics...',
        'Generating professional tips...',
        'Finalizing audit program...'
      ],
      
      copy: 'Copy',
      copied: 'Copied!',
      exportWord: 'Export Word',
      exporting: 'Exporting...',
      newProgram: 'New Program',
      
      tabs: {
        summary: 'Summary',
        procedures: 'Procedures',
        redflags: 'Red Flags',
        sampling: 'Sampling',
        timeline: 'Timeline',
        checklist: 'Checklist',
        sqlqueries: 'SQL Queries' // NEW!
      },
      
      auditObjectives: 'Audit Objectives',
      riskLevel: 'Risk Level',
      timeline: 'Timeline',
      status: 'Status',
      readyToUse: 'Ready to Use',
      scope: 'Scope',
      
      objective: 'Objective',
      risk: 'Risk',
      control: 'Control',
      procedureTable: {
        id: 'ID',
        procedure: 'Procedure',
        type: 'Type',
        sample: 'Sample'
      },
      
      redFlagsTitle: 'Red Flags to Watch For',
      redFlagsNote: 'Note: If you find any of these red flags, document them immediately and escalate to management.',
      
      samplingApproach: 'Sampling Approach',
      strategy: 'Strategy',
      totalSample: 'Total Sample Size',
      
      estimatedTimeline: 'Estimated Timeline',
      planning: 'Planning',
      fieldwork: 'Fieldwork',
      reporting: 'Reporting',
      total: 'Total Duration',
      
      documentsToRequest: 'Documents to Request',
      peopleToInterview: 'People to Interview',
      systemsToCheck: 'Systems to Check',
      
      sqlQueriesTitle: 'SQL Queries for Data Analytics',
      sqlQueriesDesc: 'Ready-to-use query templates for data analysis',
      copyQuery: 'Copy Query',
      downloadSQL: 'Download .sql',
      
      footer: 'Built with Audit Program Builder skill + Claude API'
    }
  };

  const getText = (key) => {
    const keys = key.split('.');
    let value = t[language];
    for (const k of keys) {
      value = value[k];
    }
    return value;
  };

  const industries = [
    { value: 'retail', icon: '🏪' },
    { value: 'banking', icon: '🏦' },
    { value: 'it', icon: '💻' },
    { value: 'realestate', icon: '🏗️' },
    { value: 'manufacturing', icon: '🏭' },
    { value: 'other', icon: '📋' }
  ];

  const auditTypes = ['operational', 'financial', 'it', 'fraud', 'compliance'];

  // SQL Queries data (bilingual)
  const sqlQueries = {
    banking: [
      {
        id: 'split_loans',
        title: {
          th: '1. Split Loans Detection (การแตกวงเงิน)',
          en: '1. Split Loans Detection'
        },
        description: {
          th: 'หาลูกค้าที่กู้หลายสัญญาภายใน 7 วัน และรวมแล้วเกินอำนาจอนุมัติสาขา',
          en: 'Find customers with multiple loans within 7 days exceeding branch approval authority'
        },
        query: `-- Split Loans Detection
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
ORDER BY total_amount DESC;`
      },
      {
        id: 'nominee_detection',
        title: {
          th: '2. Nominee Detection (ลูกค้านอมินี)',
          en: '2. Nominee Detection'
        },
        description: {
          th: 'หาลูกค้าที่เบอร์โทรหรือที่อยู่ตรงกับพนักงาน (Employee-Customer Collusion)',
          en: 'Find customers with phone/address matching employees (collusion)'
        },
        query: `-- Nominee Detection (Phone Number Match)
-- Purpose: Identify potential employee-customer collusion
-- Red Flag: Customer phone = Employee phone

SELECT 
    c.customer_name,
    c.customer_id,
    c.phone as customer_phone,
    e.employee_name,
    e.employee_id,
    e.branch,
    c.loan_amount,
    c.approval_date,
    c.loan_status
FROM customers c
JOIN employees e ON (
    c.phone = e.mobile 
    OR c.phone = e.home_phone
)
WHERE c.loan_status = 'ACTIVE'
ORDER BY c.approval_date DESC;

-- Nominee Detection (Address Match)
SELECT 
    c.customer_name,
    c.address as customer_address,
    e.employee_name,
    e.address as employee_address,
    c.loan_amount
FROM customers c
JOIN employees e ON c.address LIKE '%' + e.address + '%'
WHERE c.loan_status = 'ACTIVE';`
      },
      {
        id: 'npl_evergreening',
        title: {
          th: '3. NPL Evergreening (ตกแต่งหนี้)',
          en: '3. NPL Evergreening'
        },
        description: {
          th: 'หาบัญชีที่ใกล้ 90 วัน (NPL) และจ่ายดอกเบี้ยขั้นต่ำเพื่อไม่ให้เป็น NPL',
          en: 'Find accounts near 90 days past due with interest-only payments'
        },
        query: `-- NPL Evergreening Detection
-- Purpose: Find accounts avoiding NPL classification
-- Red Flag: Payment at day 85-90 (just before NPL)

SELECT 
    loan_id,
    customer_name,
    days_past_due,
    last_payment_date,
    last_payment_amount,
    interest_due,
    principal_due,
    payment_source_account,
    CASE 
        WHEN last_payment_amount < interest_due * 1.1 
        THEN 'Interest-Only Payment'
        ELSE 'Normal Payment'
    END as payment_type
FROM loans
WHERE days_past_due BETWEEN 85 AND 90
    AND loan_status = 'ACTIVE'
ORDER BY days_past_due DESC;

-- Rollover Loans (ต่ออายุบ่อย)
SELECT 
    loan_id,
    customer_name,
    COUNT(*) as rollover_count,
    MIN(rollover_date) as first_rollover,
    MAX(rollover_date) as last_rollover
FROM loan_extensions
GROUP BY loan_id, customer_name
HAVING COUNT(*) > 3
ORDER BY rollover_count DESC;`
      },
      {
        id: 'interest_outliers',
        title: {
          th: '4. Interest Rate Outliers (ดอกเบี้ยต่ำผิดปกติ)',
          en: '4. Interest Rate Outliers'
        },
        description: {
          th: 'หาสัญญากู้ที่ได้อัตราดอกเบี้ยต่ำกว่าปกติ (statistical outliers)',
          en: 'Find loans with abnormally low interest rates (statistical outliers)'
        },
        query: `-- Interest Rate Outliers (Statistical Analysis)
-- Purpose: Find loans with abnormally low interest rates
-- Method: Rates < (mean - 2 * std deviation)

WITH stats AS (
    SELECT 
        loan_type,
        AVG(interest_rate) as avg_rate,
        STDEV(interest_rate) as std_rate
    FROM loans
    WHERE loan_status = 'ACTIVE'
    GROUP BY loan_type
)
SELECT 
    l.loan_id,
    l.customer_name,
    l.loan_type,
    l.interest_rate,
    s.avg_rate,
    s.std_rate,
    ROUND((l.interest_rate - s.avg_rate) / s.std_rate, 2) as z_score,
    l.approved_by,
    l.approval_date,
    CASE 
        WHEN l.waiver_code IS NULL THEN 'NO WAIVER'
        ELSE l.waiver_code 
    END as waiver_status
FROM loans l
JOIN stats s ON l.loan_type = s.loan_type
WHERE l.interest_rate < (s.avg_rate - 2 * s.std_rate)
    AND l.loan_status = 'ACTIVE'
ORDER BY z_score ASC;`
      },
      {
        id: 'unauthorized_access',
        title: {
          th: '5. Unauthorized Data Access (เข้าถึงข้อมูลโดยไม่ได้รับอนุญาต)',
          en: '5. Unauthorized Data Access'
        },
        description: {
          th: 'หาพนักงานที่เข้าดูข้อมูลลูกค้ามากเกินไป หรือดูลูกค้าที่ไม่ได้อยู่ใน portfolio',
          en: 'Find employees with excessive data access or viewing unassigned customers'
        },
        query: `-- Excessive Access Detection
-- Purpose: Find users viewing too many customer records
-- Threshold: > 50 customers per day

SELECT 
    user_id,
    user_name,
    DATE(access_time) as access_date,
    COUNT(DISTINCT customer_id) as unique_customers_viewed,
    COUNT(*) as total_views
FROM access_log
WHERE action = 'VIEW_CUSTOMER'
    AND access_time >= DATEADD(month, -3, GETDATE())
GROUP BY user_id, user_name, DATE(access_time)
HAVING COUNT(DISTINCT customer_id) > 50
ORDER BY unique_customers_viewed DESC;

-- Unauthorized Access (viewing non-assigned customers)
SELECT 
    a.user_id,
    a.user_name,
    a.customer_id,
    c.customer_name,
    c.assigned_officer,
    a.access_time,
    a.action
FROM access_log a
JOIN customers c ON a.customer_id = c.customer_id
WHERE a.user_id != c.assigned_officer
    AND a.action = 'VIEW_CUSTOMER'
    AND a.access_time >= DATEADD(day, -30, GETDATE())
ORDER BY a.access_time DESC;`
      },
      {
        id: 'npl_portfolio',
        title: {
          th: '6. NPL Portfolio Analysis (วิเคราะห์พอร์ต NPL)',
          en: '6. NPL Portfolio Analysis'
        },
        description: {
          th: 'วิเคราะห์ NPL ratio แยกตามสาขา/ภูมิภาค เพื่อหา hotspot',
          en: 'Analyze NPL ratio by branch/region to find hotspots'
        },
        query: `-- NPL Portfolio Analysis by Branch
-- Purpose: Identify branches with high NPL ratio
-- Threshold: > 2.5% (company target)

SELECT 
    branch_name,
    region,
    COUNT(*) as total_loans,
    SUM(outstanding_balance) as total_outstanding,
    SUM(CASE WHEN days_past_due > 90 THEN 1 ELSE 0 END) as npl_count,
    SUM(CASE WHEN days_past_due > 90 THEN outstanding_balance ELSE 0 END) as npl_amount,
    ROUND(100.0 * SUM(CASE WHEN days_past_due > 90 THEN 1 ELSE 0 END) / COUNT(*), 2) as npl_ratio,
    ROUND(100.0 * SUM(CASE WHEN days_past_due > 90 THEN outstanding_balance ELSE 0 END) / SUM(outstanding_balance), 2) as npl_ratio_amount
FROM loans
WHERE loan_status IN ('ACTIVE', 'PAST_DUE')
GROUP BY branch_name, region
HAVING npl_ratio > 2.5
ORDER BY npl_ratio DESC;

-- Vintage Analysis (cohort by approval month)
SELECT 
    DATE_FORMAT(approval_date, '%Y-%m') as vintage,
    COUNT(*) as loans_originated,
    SUM(CASE WHEN days_past_due > 90 THEN 1 ELSE 0 END) as npl_count,
    ROUND(100.0 * SUM(CASE WHEN days_past_due > 90 THEN 1 ELSE 0 END) / COUNT(*), 2) as npl_ratio
FROM loans
WHERE approval_date >= DATEADD(month, -12, GETDATE())
GROUP BY DATE_FORMAT(approval_date, '%Y-%m')
ORDER BY vintage DESC;`
      }
    ],
    retail: [
      {
        id: 'vendor_concentration',
        title: {
          th: '1. Vendor Concentration Risk',
          en: '1. Vendor Concentration Risk'
        },
        description: {
          th: 'หา Vendor ที่ครอง > 30% ของยอดจัดซื้อ',
          en: 'Find vendors with > 30% of procurement volume'
        },
        query: `-- Vendor Concentration Analysis
-- Purpose: Identify dependency on single vendors
-- Threshold: > 30% of total procurement

SELECT 
    vendor_name,
    COUNT(*) as po_count,
    SUM(po_amount) as total_amount,
    ROUND(100.0 * SUM(po_amount) / (SELECT SUM(po_amount) FROM purchase_orders), 2) as pct_of_total
FROM purchase_orders
WHERE po_date >= DATEADD(month, -12, GETDATE())
GROUP BY vendor_name
HAVING pct_of_total > 30
ORDER BY total_amount DESC;`
      },
      {
        id: 'price_outliers',
        title: {
          th: '2. Price Outliers (ราคาผิดปกติ)',
          en: '2. Price Outliers'
        },
        description: {
          th: 'หาสินค้าที่ซื้อในราคาสูงกว่าค่าเฉลี่ย > 20%',
          en: 'Find items purchased > 20% above average price'
        },
        query: `-- Price Outlier Detection
-- Purpose: Find purchases with abnormally high prices
-- Threshold: > 20% above average

WITH avg_prices AS (
    SELECT 
        item_code,
        AVG(unit_price) as avg_price
    FROM purchase_orders
    WHERE po_date >= DATEADD(month, -6, GETDATE())
    GROUP BY item_code
)
SELECT 
    p.po_number,
    p.item_code,
    p.item_description,
    p.unit_price,
    a.avg_price,
    ROUND(100.0 * (p.unit_price - a.avg_price) / a.avg_price, 2) as pct_variance,
    p.vendor_name,
    p.approved_by
FROM purchase_orders p
JOIN avg_prices a ON p.item_code = a.item_code
WHERE p.unit_price > a.avg_price * 1.2
ORDER BY pct_variance DESC;`
      }
    ],
    it: [
      {
        id: 'failed_logins',
        title: {
          th: '1. Failed Login Attempts',
          en: '1. Failed Login Attempts'
        },
        description: {
          th: 'หาบัญชีที่มี failed login > 10 ครั้ง/วัน (potential brute force)',
          en: 'Find accounts with > 10 failed logins/day (potential brute force)'
        },
        query: `-- Failed Login Detection
-- Purpose: Identify potential brute force attacks
-- Threshold: > 10 failed attempts per day

SELECT 
    user_id,
    username,
    DATE(login_time) as login_date,
    COUNT(*) as failed_attempts,
    MIN(login_time) as first_attempt,
    MAX(login_time) as last_attempt
FROM login_log
WHERE login_status = 'FAILED'
    AND login_time >= DATEADD(day, -30, GETDATE())
GROUP BY user_id, username, DATE(login_time)
HAVING COUNT(*) > 10
ORDER BY failed_attempts DESC;`
      }
    ]
  };

  // Sample audit program data (enhanced with SQL queries)
  const sampleAuditProgram = {
    industry: 'banking', // Will determine which SQL queries to show
    summary: {
      title: {
        th: 'การตรวจสอบกระบวนการอนุมัติสินเชื่อและความเสี่ยงทุจริตในธนาคาร',
        en: 'Bank Loan & Credit Risk Audit'
      },
      industry: {
        th: 'ธนาคาร',
        en: 'Banking'
      },
      objectives: {
        th: [
          'ตรวจจับการแตกวงเงินเพื่อหลีกเลี่ยงอำนาจอนุมัติ (Split Loans)',
          'ระบุลูกค้านอมินี (Employee-Customer Collusion)',
          'หาการตกแต่งหนี้เพื่อลด NPL (Evergreening)',
          'ตรวจสอบอัตราดอกเบี้ยที่ผิดปกติ (Interest Rate Outliers)',
          'ตรวจสอบการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต (Unauthorized Access)'
        ],
        en: [
          'Detect split loans to circumvent approval authority',
          'Identify employee-customer collusion (nominee schemes)',
          'Find NPL evergreening practices',
          'Review abnormal interest rate approvals',
          'Monitor unauthorized data access'
        ]
      },
      riskLevel: 'CRITICAL',
      timeline: {
        th: '15-20 วันทำการ',
        en: '15-20 working days'
      },
      scope: {
        th: 'สินเชื่อทั้งหมด 6-12 เดือนล่าสุด, ครอบคลุมทุกสาขา, เน้น Data Analytics ด้วย SQL + Power BI',
        en: 'All loans 6-12 months, all branches, emphasis on Data Analytics using SQL + Power BI'
      }
    },
    procedures: [
      {
        objective: {
          th: 'ตรวจจับ Split Loans',
          en: 'Detect Split Loans'
        },
        risk: {
          th: 'พนักงานแตกวงเงินเพื่อหลีกเลี่ยงการส่งอนุมัติขึ้น HQ',
          en: 'Staff splitting loans to avoid HQ approval'
        },
        control: {
          th: 'Delegation of Authority (DoA), System validation',
          en: 'Delegation of Authority (DoA), System validation'
        },
        steps: [
          { 
            id: '1.1', 
            desc: {
              th: 'Review Delegation of Authority policy',
              en: 'Review Delegation of Authority policy'
            },
            type: 'Inspection', 
            sample: 'N/A' 
          },
          { 
            id: '1.2', 
            desc: {
              th: 'Run SQL: Find multiple loans same customer < 7 days',
              en: 'Run SQL: Find multiple loans same customer < 7 days'
            },
            type: 'Data Analytics', 
            sample: {
              th: '6 เดือนข้อมูล',
              en: '6 months data'
            }
          },
          { 
            id: '1.3', 
            desc: {
              th: 'Analyze loans near approval threshold (±10%)',
              en: 'Analyze loans near approval threshold (±10%)'
            },
            type: 'Analytical', 
            sample: {
              th: 'Loans 90-100% ของ limit',
              en: 'Loans 90-100% of limit'
            }
          }
        ]
      }
    ],
    redFlags: {
      th: [
        '🚩 ลูกค้ากู้ 2+ สัญญาภายใน 7 วัน รวมเกินอำนาจสาขา',
        '🚩 เบอร์โทรลูกค้า = เบอร์มือถือพนักงาน',
        '🚩 จ่ายดอกเบี้ยขั้นต่ำช่วงวันที่ 85-90 (ก่อนเป็น NPL)',
        '🚩 อัตราดอกเบี้ยต่ำผิดปกติ (z-score < -2)',
        '🚩 พนักงานดูข้อมูล > 50 ลูกค้า/วัน'
      ],
      en: [
        '🚩 Customer has 2+ loans within 7 days exceeding branch authority',
        '🚩 Customer phone = Employee mobile',
        '🚩 Interest-only payment at day 85-90 (before NPL)',
        '🚩 Abnormally low interest rate (z-score < -2)',
        '🚩 Employee viewing > 50 customers/day'
      ]
    },
    sampling: {
      approach: {
        th: 'Statistical + Judgmental Sampling',
        en: 'Statistical + Judgmental Sampling'
      },
      strategy: {
        th: [
          'Split Loans: ตรวจทุกรายที่พบจาก SQL query',
          'Nominee: ตรวจ 20-30 cases ที่ phone/address match',
          'NPL Evergreening: ตรวจ 30-50 accounts ใกล้ 90 วัน',
          'Rate Outliers: ตรวจทุกราย z-score < -2'
        ],
        en: [
          'Split Loans: Test all cases from SQL query',
          'Nominee: Test 20-30 cases with phone/address match',
          'NPL Evergreening: Test 30-50 accounts near 90 days',
          'Rate Outliers: Test all cases z-score < -2'
        ]
      },
      totalSample: {
        th: '150-260 รายการ จากข้อมูล 6-12 เดือน',
        en: '150-260 items from 6-12 months data'
      }
    },
    timeline: {
      planning: {
        th: '3-4 วัน (ศึกษา policy + เตรียม SQL)',
        en: '3-4 days (policy review + SQL prep)'
      },
      fieldwork: {
        th: '8-10 วัน (Data analysis + สัมภาษณ์)',
        en: '8-10 days (Data analysis + interviews)'
      },
      reporting: {
        th: '3-4 วัน (วิเคราะห์ + รายงาน)',
        en: '3-4 days (analysis + reporting)'
      },
      total: {
        th: '15-20 วันทำการ',
        en: '15-20 working days'
      }
    },
    checklist: [
      { 
        category: {
          th: 'ฐานข้อมูลที่ต้องขอ Access',
          en: 'Database Access Required'
        },
        items: {
          th: [
            'Core Banking System (loans table)',
            'HR database (employees)',
            'Payment processing system',
            'Access log database',
            'Credit scoring system'
          ],
          en: [
            'Core Banking System (loans table)',
            'HR database (employees)',
            'Payment processing system',
            'Access log database',
            'Credit scoring system'
          ]
        }
      },
      { 
        category: {
          th: 'Tools & Software',
          en: 'Tools & Software'
        },
        items: {
          th: [
            'SQL Client (DBeaver, SSMS)',
            'Power BI Desktop',
            'Excel (for data cleansing)',
            'Python (optional - for ML)'
          ],
          en: [
            'SQL Client (DBeaver, SSMS)',
            'Power BI Desktop',
            'Excel (for data cleansing)',
            'Python (optional - for ML)'
          ]
        }
      }
    ]
  };

  const handleGenerate = async () => {
    setStep('generating');
    setGeneratingStep(0);

    for (let i = 0; i < getText('generatingSteps').length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setGeneratingStep(i + 1);
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    
    setAuditProgram(sampleAuditProgram);
    setStep('output');
    setActiveTab('summary');
  };

  const handleCopy = () => {
    const text = JSON.stringify(auditProgram, null, 2);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportWord = async () => {
    if (!auditProgram) return;
    
    setExporting(true);
    
    try {
      const doc = new Document({
        sections: [{
          properties: {},
          children: [
            // Cover Page
            new Paragraph({
              text: auditProgram.summary.title[language],
              heading: HeadingLevel.TITLE,
              spacing: { after: 200 }
            }),
            new Paragraph({
              children: [
                new TextRun({ text: `${getText('industry')}: `, bold: true }),
                new TextRun(auditProgram.summary.industry[language])
              ],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [
                new TextRun({ text: `${getText('riskLevel')}: `, bold: true }),
                new TextRun({ text: auditProgram.summary.riskLevel, color: 'DC2626' })
              ],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [
                new TextRun({ text: `${getText('timeline')}: `, bold: true }),
                new TextRun(auditProgram.summary.timeline[language])
              ],
              spacing: { after: 200 }
            }),
            new Paragraph({
              children: [
                new TextRun({ 
                  text: `Generated: ${new Date().toLocaleDateString(language === 'th' ? 'th-TH' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 
                  italics: true 
                })
              ],
              spacing: { after: 400 }
            }),

            // Section 1: Executive Summary
            new Paragraph({
              text: language === 'th' ? '1. สรุปผู้บริหาร' : '1. Executive Summary',
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),

            // Objectives
            new Paragraph({
              text: getText('auditObjectives'),
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 200, after: 100 }
            }),
            ...auditProgram.summary.objectives[language].map(obj =>
              new Paragraph({
                text: obj,
                bullet: { level: 0 },
                spacing: { after: 50 }
              })
            ),

            // Scope
            new Paragraph({
              text: getText('scope'),
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
              text: auditProgram.summary.scope[language],
              spacing: { after: 200 }
            }),

            // Section 2: Audit Procedures
            new Paragraph({
              text: language === 'th' ? '2. ขั้นตอนการตรวจสอบ' : '2. Audit Procedures',
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),

            ...auditProgram.procedures.flatMap((proc, idx) => [
              new Paragraph({
                text: `${getText('objective')} ${idx + 1}: ${proc.objective[language]}`,
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 100 }
              }),
              new Paragraph({
                children: [
                  new TextRun({ text: `${getText('risk')}: `, bold: true }),
                  new TextRun(proc.risk[language])
                ],
                spacing: { after: 50 }
              }),
              new Paragraph({
                children: [
                  new TextRun({ text: `${getText('control')}: `, bold: true }),
                  new TextRun(proc.control[language])
                ],
                spacing: { after: 100 }
              }),
              new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph({ text: getText('procedureTable.id'), bold: true })],
                        shading: { fill: 'E5E7EB' }
                      }),
                      new TableCell({
                        children: [new Paragraph({ text: getText('procedureTable.procedure'), bold: true })],
                        shading: { fill: 'E5E7EB' }
                      }),
                      new TableCell({
                        children: [new Paragraph({ text: getText('procedureTable.type'), bold: true })],
                        shading: { fill: 'E5E7EB' }
                      }),
                      new TableCell({
                        children: [new Paragraph({ text: getText('procedureTable.sample'), bold: true })],
                        shading: { fill: 'E5E7EB' }
                      })
                    ]
                  }),
                  ...proc.steps.map(step =>
                    new TableRow({
                      children: [
                        new TableCell({ children: [new Paragraph(step.id)] }),
                        new TableCell({ children: [new Paragraph(step.desc[language])] }),
                        new TableCell({ children: [new Paragraph(step.type)] }),
                        new TableCell({ 
                          children: [new Paragraph(typeof step.sample === 'object' ? step.sample[language] : step.sample)] 
                        })
                      ]
                    })
                  )
                ]
              }),
              new Paragraph({ text: '', spacing: { after: 200 } })
            ]),

            // Section 3: Red Flags
            new Paragraph({
              text: language === 'th' ? '3. สัญญาณเตือน' : '3. Red Flags',
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            ...auditProgram.redFlags[language].map(flag =>
              new Paragraph({
                text: flag,
                bullet: { level: 0 },
                spacing: { after: 50 }
              })
            ),
            new Paragraph({
              children: [
                new TextRun({ text: getText('redFlagsNote'), italics: true, size: 20 })
              ],
              spacing: { before: 200, after: 200 }
            }),

            // Section 4: Sampling Strategy
            new Paragraph({
              text: language === 'th' ? '4. กลยุทธ์การสุ่มตัวอย่าง' : '4. Sampling Strategy',
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [
                new TextRun({ text: `${getText('samplingApproach')}: `, bold: true }),
                new TextRun(auditProgram.sampling.approach[language])
              ],
              spacing: { after: 100 }
            }),
            ...auditProgram.sampling.strategy[language].map(strat =>
              new Paragraph({
                text: strat,
                bullet: { level: 0 },
                spacing: { after: 50 }
              })
            ),
            new Paragraph({
              children: [
                new TextRun({ text: `${getText('totalSample')}: `, bold: true }),
                new TextRun(auditProgram.sampling.totalSample[language])
              ],
              spacing: { before: 100, after: 200 }
            }),

            // Section 5: Timeline
            new Paragraph({
              text: language === 'th' ? '5. กำหนดเวลา' : '5. Timeline',
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph({ text: language === 'th' ? 'ขั้นตอน' : 'Phase', bold: true })],
                      shading: { fill: 'E5E7EB' }
                    }),
                    new TableCell({
                      children: [new Paragraph({ text: language === 'th' ? 'ระยะเวลา' : 'Duration', bold: true })],
                      shading: { fill: 'E5E7EB' }
                    })
                  ]
                }),
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph(getText('planning'))] }),
                    new TableCell({ children: [new Paragraph(auditProgram.timeline.planning[language])] })
                  ]
                }),
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph(getText('fieldwork'))] }),
                    new TableCell({ children: [new Paragraph(auditProgram.timeline.fieldwork[language])] })
                  ]
                }),
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph(getText('reporting'))] }),
                    new TableCell({ children: [new Paragraph(auditProgram.timeline.reporting[language])] })
                  ]
                }),
                new TableRow({
                  children: [
                    new TableCell({ 
                      children: [new Paragraph({ text: getText('total'), bold: true })],
                      shading: { fill: 'DBEAFE' }
                    }),
                    new TableCell({ 
                      children: [new Paragraph({ text: auditProgram.timeline.total[language], bold: true })],
                      shading: { fill: 'DBEAFE' }
                    })
                  ]
                })
              ]
            }),
            new Paragraph({ text: '', spacing: { after: 200 } }),

            // Section 6: SQL Queries
            new Paragraph({
              text: language === 'th' ? '6. SQL Queries สำหรับ Data Analytics' : '6. SQL Queries for Data Analytics',
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),

            ...(sqlQueries[auditProgram.industry] || []).flatMap(query => [
              new Paragraph({
                text: query.title[language],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 100 }
              }),
              new Paragraph({
                children: [new TextRun({ text: query.description[language], italics: true })],
                spacing: { after: 100 }
              }),
              new Paragraph({
                text: query.query,
                style: 'code',
                shading: { fill: 'F3F4F6' },
                spacing: { after: 200 }
              })
            ]),

            // Section 7: Checklist
            new Paragraph({
              text: language === 'th' ? '7. รายการตรวจสอบ' : '7. Checklist',
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            ...auditProgram.checklist.flatMap(section => [
              new Paragraph({
                text: section.category[language],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 100 }
              }),
              ...section.items[language].map(item =>
                new Paragraph({
                  text: `☐ ${item}`,
                  spacing: { after: 50 }
                })
              )
            ]),

            // Footer
            new Paragraph({
              text: '',
              spacing: { before: 400 }
            }),
            new Paragraph({
              text: '────────────────────────────────────────',
              alignment: AlignmentType.CENTER,
              spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
              children: [
                new TextRun({ text: getText('footer'), italics: true, size: 20 })
              ],
              alignment: AlignmentType.CENTER
            }),
            new Paragraph({
              children: [
                new TextRun({ 
                  text: `Copyright © 2026 Nakarin Sakunthai | MIT License`, 
                  italics: true, 
                  size: 18 
                })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { before: 50 }
            })
          ]
        }]
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, `Audit_Program_${formData.process || 'Document'}.docx`);
    } catch (error) {
      console.error('Export error:', error);
      alert(language === 'th' 
        ? 'เกิดข้อผิดพลาดในการ export กรุณาลองใหม่อีกครั้ง' 
        : 'Error exporting document. Please try again.'
      );
    } finally {
      setExporting(false);
    }
  };

  const handleCopyQuery = (queryId) => {
    const queries = sqlQueries[auditProgram.industry] || [];
    const query = queries.find(q => q.id === queryId);
    if (query) {
      navigator.clipboard.writeText(query.query);
      setCopiedQuery(queryId);
      setTimeout(() => setCopiedQuery(null), 2000);
    }
  };

  const handleDownloadSQL = () => {
    const queries = sqlQueries[auditProgram.industry] || [];
    const allQueries = queries.map(q => 
      `-- ${q.title[language]}\n-- ${q.description[language]}\n\n${q.query}\n\n`
    ).join('\n');
    
    const blob = new Blob([allQueries], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'audit_queries.sql';
    a.click();
  };

  const handleReset = () => {
    setStep('input');
    setFormData({ process: '', industry: 'retail', issues: '', auditType: 'operational' });
    setAuditProgram(null);
  };

  // Language Switcher Component
  const LanguageSwitcher = () => (
    <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm">
      <button
        onClick={() => setLanguage('th')}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          language === 'th' 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        ไทย
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          language === 'en' 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        English
      </button>
    </div>
  );

  // Input Form Screen (same as before)
  if (step === 'input') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-4">
            <LanguageSwitcher />
          </div>

          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-600 rounded-2xl mb-4">
              <FileText className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              {getText('title')}
            </h1>
            <p className="text-lg text-gray-600">
              {getText('subtitle')}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              {getText('poweredBy')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {getText('whatToAudit')}
                </label>
                <input
                  type="text"
                  value={formData.process}
                  onChange={(e) => setFormData({...formData, process: e.target.value})}
                  placeholder={getText('whatToAuditPlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {getText('industry')}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {industries.map(ind => (
                    <button
                      key={ind.value}
                      onClick={() => setFormData({...formData, industry: ind.value})}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.industry === ind.value
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-2xl mb-1">{ind.icon}</div>
                      <div className="text-sm font-medium">
                        {getText(`industries.${ind.value}`)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {getText('auditType')}
                </label>
                <div className="space-y-2">
                  {auditTypes.map(type => (
                    <label key={type} className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="auditType"
                        value={type}
                        checked={formData.auditType === type}
                        onChange={(e) => setFormData({...formData, auditType: e.target.value})}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="ml-3 text-sm font-medium text-gray-700">
                        {getText(`auditTypes.${type}`)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {getText('knownIssues')}
                </label>
                <textarea
                  value={formData.issues}
                  onChange={(e) => setFormData({...formData, issues: e.target.value})}
                  placeholder={getText('knownIssuesPlaceholder')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={!formData.process}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {getText('generateButton')}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-gray-500">
            <p>{getText('footer')}</p>
          </div>
        </div>
      </div>
    );
  }

  // Generating Screen (same as before)
  if (step === 'generating') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md w-full">
          <div className="text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {getText('generating')}
            </h2>
            <div className="space-y-3 text-left">
              {getText('generatingSteps').map((stepText, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {idx < generatingStep ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : idx === generatingStep ? (
                    <Loader2 className="w-5 h-5 text-blue-600 animate-spin flex-shrink-0" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
                  )}
                  <span className={`text-sm ${idx <= generatingStep ? 'text-gray-900' : 'text-gray-400'}`}>
                    {stepText}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Output Screen with SQL Queries Tab
  const tabs = [
    { id: 'summary', icon: FileText },
    { id: 'procedures', icon: CheckSquare },
    { id: 'redflags', icon: AlertTriangle },
    { id: 'sampling', icon: Users },
    { id: 'timeline', icon: Clock },
    { id: 'checklist', icon: Check },
    { id: 'sqlqueries', icon: Database } // NEW TAB!
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                {auditProgram.summary.title[language]}
              </h1>
              <p className="text-sm text-gray-600">
                {auditProgram.summary.industry[language]} • {auditProgram.summary.timeline[language]}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleCopy}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                {copied ? getText('copied') : getText('copy')}
              </button>
              <button 
                onClick={handleExportWord}
                disabled={exporting}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {exporting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {getText('exporting')}
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    {getText('exportWord')}
                  </>
                )}
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                {getText('newProgram')}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-t-2xl shadow-lg">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-medium text-sm flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {getText(`tabs.${tab.id}`)}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Summary Tab - same as before */}
            {activeTab === 'summary' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{getText('auditObjectives')}</h3>
                  <ul className="space-y-2">
                    {auditProgram.summary.objectives[language].map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="text-sm text-red-600 font-medium mb-1">{getText('riskLevel')}</div>
                    <div className="text-2xl font-bold text-red-700">{auditProgram.summary.riskLevel}</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="text-sm text-blue-600 font-medium mb-1">{getText('timeline')}</div>
                    <div className="text-xl font-bold text-blue-700">{auditProgram.summary.timeline[language]}</div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="text-sm text-green-600 font-medium mb-1">{getText('status')}</div>
                    <div className="text-xl font-bold text-green-700">{getText('readyToUse')}</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{getText('scope')}</h3>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{auditProgram.summary.scope[language]}</p>
                </div>
              </div>
            )}

            {/* Procedures Tab - simplified */}
            {activeTab === 'procedures' && (
              <div className="space-y-8">
                {auditProgram.procedures.map((proc, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {getText('objective')} {idx + 1}: {proc.objective[language]}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm font-medium text-gray-600">{getText('risk')}:</span>
                        <p className="text-sm text-gray-900">{proc.risk[language]}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">{getText('control')}:</span>
                        <p className="text-sm text-gray-900">{proc.control[language]}</p>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left font-medium text-gray-700">{getText('procedureTable.id')}</th>
                            <th className="px-4 py-2 text-left font-medium text-gray-700">{getText('procedureTable.procedure')}</th>
                            <th className="px-4 py-2 text-left font-medium text-gray-700">{getText('procedureTable.type')}</th>
                            <th className="px-4 py-2 text-left font-medium text-gray-700">{getText('procedureTable.sample')}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {proc.steps.map(step => (
                            <tr key={step.id} className="hover:bg-gray-50">
                              <td className="px-4 py-3 font-mono text-xs">{step.id}</td>
                              <td className="px-4 py-3">{step.desc[language]}</td>
                              <td className="px-4 py-3">
                                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                                  {step.type}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-gray-600">
                                {typeof step.sample === 'object' ? step.sample[language] : step.sample}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Red Flags Tab */}
            {activeTab === 'redflags' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{getText('redFlagsTitle')}</h3>
                <div className="space-y-3">
                  {auditProgram.redFlags[language].map((flag, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">{flag}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>{language === 'th' ? 'หมายเหตุ' : 'Note'}:</strong> {getText('redFlagsNote')}
                  </p>
                </div>
              </div>
            )}

            {/* Sampling Tab */}
            {activeTab === 'sampling' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{getText('samplingApproach')}</h3>
                  <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">{auditProgram.sampling.approach[language]}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{getText('strategy')}</h3>
                  <ul className="space-y-2">
                    {auditProgram.sampling.strategy[language].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-sm font-medium text-gray-600">{getText('totalSample')}:</span>
                  <p className="text-lg font-semibold text-gray-900 mt-1">{auditProgram.sampling.totalSample[language]}</p>
                </div>
              </div>
            )}

            {/* Timeline Tab */}
            {activeTab === 'timeline' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{getText('estimatedTimeline')}</h3>
                {Object.entries(auditProgram.timeline).map(([phase, duration]) => {
                  if (phase === 'total') return null;
                  return (
                    <div key={phase} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-gray-900 capitalize">{getText(phase)}</span>
                      </div>
                      <span className="text-gray-700">{duration[language]}</span>
                    </div>
                  );
                })}
                <div className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">{getText('total')}</span>
                  </div>
                  <span className="font-bold">{auditProgram.timeline.total[language]}</span>
                </div>
              </div>
            )}

            {/* Checklist Tab */}
            {activeTab === 'checklist' && (
              <div className="space-y-6">
                {auditProgram.checklist.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.category[language]}</h3>
                    <div className="space-y-2">
                      {section.items[language].map((item, itemIdx) => (
                        <label key={itemIdx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                          <span className="text-gray-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* SQL QUERIES TAB - NEW! */}
            {activeTab === 'sqlqueries' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{getText('sqlQueriesTitle')}</h3>
                    <p className="text-sm text-gray-600 mt-1">{getText('sqlQueriesDesc')}</p>
                  </div>
                  <button
                    onClick={handleDownloadSQL}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    {getText('downloadSQL')}
                  </button>
                </div>

                {(sqlQueries[auditProgram.industry] || []).map((query, idx) => (
                  <div key={query.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b border-gray-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{query.title[language]}</h4>
                          <p className="text-sm text-gray-600">{query.description[language]}</p>
                        </div>
                        <button
                          onClick={() => handleCopyQuery(query.id)}
                          className="ml-4 px-3 py-2 border border-gray-300 rounded-lg hover:bg-white flex items-center gap-2 flex-shrink-0"
                        >
                          {copiedQuery === query.id ? (
                            <>
                              <Check className="w-4 h-4 text-green-600" />
                              <span className="text-sm text-green-600">{getText('copied')}</span>
                            </>
                          ) : (
                            <>
                              <Code className="w-4 h-4" />
                              <span className="text-sm">{getText('copyQuery')}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="bg-gray-900 p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">{query.query}</pre>
                    </div>
                  </div>
                ))}

                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    {language === 'th' ? '💡 วิธีใช้งาน SQL Queries' : '💡 How to Use SQL Queries'}
                  </h4>
                  <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                    {language === 'th' ? (
                      <>
                        <li>คัดลอก query ที่ต้องการ แล้ววางใน SQL client (DBeaver, SSMS, pgAdmin)</li>
                        <li>ปรับแต่ง threshold และ date range ตามความเหมาะสม</li>
                        <li>Export ผลลัพธ์เป็น CSV แล้วนำเข้า Excel หรือ Power BI</li>
                        <li>ใช้ผลลัพธ์เป็น evidence ประกอบ audit report</li>
                      </>
                    ) : (
                      <>
                        <li>Copy the query and paste into SQL client (DBeaver, SSMS, pgAdmin)</li>
                        <li>Adjust threshold and date range as needed</li>
                        <li>Export results to CSV and import to Excel or Power BI</li>
                        <li>Use results as evidence in audit report</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditProgramGenerator;
