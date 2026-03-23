import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Search, Copy, Check } from 'lucide-react';

const KnowledgeBase = () => {
  const [language, setLanguage] = useState('th');
  const [expandedSection, setExpandedSection] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [copied, setCopied] = useState(false);

  const knowledgeData = {
    th: {
      title: 'ฐานความรู้ Internal Audit',
      subtitle: 'ความรู้เชิงประยุกต์สำหรับ Senior Internal Auditor',
      search: 'ค้นหาความรู้...',
      sections: [
        {
          id: 1,
          title: '1. หลักการตรวจสอบภายใน (Internal Audit Fundamentals)',
          content: `
### หลักการสำคัญ 3 ประการ

**1. System Focus** - ตรวจสอบระบบ ไม่ใช่คน
- ถ้าพนักงานไม่รู้ SOP → ตรวจสอบระบบฝึกอบรม ไม่ใช่ตัดคะแนนพนักงาน
- ห้ามระบุชื่อพนักงานในใบ CAR

**2. Root Cause Analysis** - หาสาเหตุแท้จริง
- ถ้าสินเชื่อเกินอำนาจ → ตรวจสอบระบบ approval workflow
- ไม่ใช่จับผิดเดี่ยว

**3. Preventive Control** - ป้องกันปัญหาก่อนเกิด
- ตั้ง SoD ให้ชัดเจน ไม่ใช่รอให้เกิดทุจริตแล้วจับ

### CAR (Corrective Action Request) - วิธีเขียนที่ถูกต้อง

❌ ผิด: "พนักงานสาขา นางสาว ก. ไม่สามารถอธิบาย SOP ได้"
✅ ถูก: "ระบบการสื่อสาร SOP ไม่มีประสิทธิภาพ"
          `
        },
        {
          id: 2,
          title: '2. Three Lines of Defense (3-LOD) Model',
          content: `
### โครงสร้าง 3 ด่าน

| ด่าน | หน่วยงาน | หน้าที่ |
|-----|---------|--------|
| **Line 1** | ผู้ปฏิบัติงาน | ควบคุมความเสี่ยงในงานของตนเอง |
| **Line 2** | Risk & Compliance | สนับสนุน ควบคุม และกำกับดูแล Line 1 |
| **Line 3** | Internal Audit | ตรวจสอบอิสระ ทั้ง Line 1 และ Line 2 |

### ความเป็นอิสระ (Independence)

Line 3 (IA) ต้องมีความเป็นอิสระ:
- ✅ รายงานตรงต่อ Audit Committee หรือ Board
- ✅ ไม่ควรรายงานต่อ CFO หรือ COO
- ✅ ต้องมี "Audit Charter" ที่ชัดเจน
          `
        },
        {
          id: 3,
          title: '3. COSO Framework & Segregation of Duties (SoD)',
          content: `
### COSO Internal Control - 5 Components

1. **Control Environment** - วัฒนธรรมองค์กร
2. **Risk Assessment** - ประเมินความเสี่ยง
3. **Control Activities** - ตั้งมาตรการควบคุม
4. **Information & Communication** - สื่อสารข้อมูล
5. **Monitoring** - ติดตามประสิทธิภาพ

### Segregation of Duties (SoD) - หลักการสำคัญที่สุด

ต้องแยกหน้าที่ 3 ส่วนออกจากกัน:
1. **Authorization** (อนุมัติ)
2. **Recording** (บันทึกบัญชี/ข้อมูล)
3. **Custody** (ดูแลจัดเก็บทรัพย์สิน)

❌ ผิด: ผู้จัดการสาขาคนเดียว ทำทั้ง 3 หน้าที่
✅ ถูก: แยกคนละคน
          `
        },
        {
          id: 4,
          title: '4. Fraud Triangle & Fraud Detection',
          content: `
### Fraud Triangle - 3 องค์ประกอบ

| องค์ประกอบ | ความหมาย | ตัวอย่าง |
|----------|---------|---------|
| **Pressure** | แรงกดดัน/ความต้องการ | เงินเดือนต่ำ, หนี้สิน |
| **Opportunity** | โอกาส/ช่องโหว่ | ไม่มี SoD, ไม่มี Audit Trail |
| **Rationalization** | การปลอบใจตนเอง | "ยืมไปก่อนเดี๋ยวมาคืน" |

### Red Flags (สัญญาณเตือน)

- **Split Loans** - ลูกค้าคนเดียวมีสินเชื่อหลายสัญญา
- **Nominee Accounts** - บัญชีที่ใช้ชื่อคนอื่นแต่เงินของคนเดิม
- **NPL Evergreening** - ยืมใหม่เพื่อชำระเก่า
- **Unauthorized Access** - เข้าถึง Customer Data ไม่ได้รับอนุญาต
- **Unusual Pricing** - ราคาสินค้า/บริการผิดปกติ
          `
        },
        {
          id: 5,
          title: '5. PDPA (Personal Data Protection Act)',
          content: `
### ความหมายสำคัญ

| คำศัพท์ | ความหมาย |
|--------|---------|
| **Data Controller** | ผู้ตัดสินใจเกี่ยวกับข้อมูล (ธนาคาร) |
| **Data Processor** | ผู้ประมวลผลข้อมูลตามคำสั่ง (Outsource) |
| **Personal Data** | ข้อมูลที่ระบุตัวตนได้ (ชื่อ, ID, Email) |
| **Sensitive Data** | ข้อมูลที่ละเอียดอ่อน (สุขภาพ, ศาสนา) |

### DPIA (Data Protection Impact Assessment)

วัตถุประสงค์: ประเมินความเสี่ยงต่อความเป็นส่วนตัวของเจ้าของข้อมูล

ขั้นตอน:
1. ระบุ Data Processing Activity
2. ประเมิน Necessity & Proportionality
3. ระบุ Risk ที่อาจเกิด
4. กำหนด Mitigation Measures
5. บันทึก DPIA Report
          `
        },
        {
          id: 6,
          title: '6. Continuous Auditing & Data Analytics',
          content: `
### ความแตกต่าง Traditional Audit vs Continuous Auditing

| ลักษณะ | Traditional | Continuous |
|------|-----------|-----------|
| **ความถี่** | ปีละ 1-2 ครั้ง | ทุกวัน/ทุกชั่วโมง |
| **Sampling** | สุ่มตัวอย่าง 5-10% | ตรวจ 100% ของข้อมูล |
| **ความเร็ว** | 1-2 เดือน | Real-time |
| **เครื่องมือ** | Manual, Checklist | SQL, Python, Power BI |

### SQL Queries สำหรับ Continuous Auditing

**Split Loans Detection:**
\`\`\`sql
SELECT customer_id, COUNT(*) as loan_count
FROM loans
WHERE created_date BETWEEN DATE_SUB(NOW(), INTERVAL 30 DAY) AND NOW()
GROUP BY customer_id
HAVING COUNT(*) > 2;
\`\`\`

**Unauthorized Access Detection:**
\`\`\`sql
SELECT user_id, customer_id, access_time
FROM access_log
WHERE user_id NOT IN (
    SELECT user_id FROM user_permissions 
    WHERE permission = 'view_customer_data'
);
\`\`\`
          `
        },
        {
          id: 7,
          title: '7. Professional Standards & Ethics',
          content: `
### Conflict of Interest (ความขัดแย้งทางผลประโยชน์)

❌ ไม่ควรทำ:
- ตรวจสอบงานที่ตนเองเคยสร้างระบบไว้ (ภายใน 1 ปี)
- ตรวจสอบเพื่อน/ญาติ
- มีส่วนได้ส่วนเสีย (Financial Interest)

✅ ควรทำ:
- เปิดเผยความขัดแย้ง
- ขอให้เปลี่ยนตัวผู้ตรวจสอบ
- บันทึกไว้ใน Audit File

### Independence & Objectivity

ผู้ตรวจสอบต้อง:
- ✅ มีความเป็นอิสระ
- ✅ เป็นกลาง (ไม่มีอคติ)
- ✅ มีความสามารถ (ความรู้ความเชี่ยวชาญ)
- ✅ ซื่อสัตย์ (ไม่เอาเปรียบ)
          `
        },
        {
          id: 8,
          title: '8. Audit Planning & Execution',
          content: `
### Audit Planning Principles

| หลักการ | ตัวอย่าง |
|--------|---------|
| **Risk-Based** | ตรวจสอบหน่วยงานที่มี Risk สูงก่อน |
| **Business Alignment** | ไม่เบียดเบียนภาระงานหลัก |
| **Materiality** | ตรวจสอบเรื่องที่มีความสำคัญ |
| **Efficiency** | ใช้ Data Analytics แทน Manual Sampling |

### Audit Timing

❌ ผิด: "ต้องตรวจตามแผนแม้จะเบียดเบียนธุรกิจ"

✅ ถูก: "ประสานงานเพื่อเลื่อนแผนให้เหมาะสม โดยยังบรรลุวัตถุประสงค์"

ตัวอย่าง: ถ้าเป็นช่วงปิดไตรมาส ให้ขอเลื่อนการตรวจไปเป็นช่วงหลังปิดไตรมาส
          `
        }
      ]
    },
    en: {
      title: 'Internal Audit Knowledge Base',
      subtitle: 'Applied Knowledge for Senior Internal Auditor',
      search: 'Search knowledge...',
      sections: [
        {
          id: 1,
          title: '1. Internal Audit Fundamentals',
          content: `
### 3 Key Principles

**1. System Focus** - Audit systems, not people
- If employee doesn't know SOP → Check training system, not employee performance
- Never mention employee name in CAR

**2. Root Cause Analysis** - Find real causes
- If loan exceeds authority → Check approval workflow system
- Not just catching individual mistakes

**3. Preventive Control** - Prevent problems before they occur
- Set up SoD clearly, don't wait for fraud to happen

### CAR (Corrective Action Request) - Correct Way

❌ Wrong: "Employee X cannot explain SOP"
✅ Right: "Communication system for SOP is ineffective"
          `
        },
        {
          id: 2,
          title: '2. Three Lines of Defense (3-LOD) Model',
          content: `
### 3 Lines Structure

| Line | Department | Role |
|------|-----------|------|
| **Line 1** | Operations | Control risks in own work |
| **Line 2** | Risk & Compliance | Support and oversee Line 1 |
| **Line 3** | Internal Audit | Independent audit of Line 1 & 2 |

### Independence Requirement

Line 3 (IA) must be independent:
- ✅ Report to Audit Committee or Board
- ✅ Not to CFO or COO
- ✅ Must have clear "Audit Charter"
          `
        },
        {
          id: 3,
          title: '3. COSO Framework & Segregation of Duties',
          content: `
### COSO Internal Control - 5 Components

1. **Control Environment** - Organizational culture
2. **Risk Assessment** - Identify risks
3. **Control Activities** - Implement controls
4. **Information & Communication** - Share information
5. **Monitoring** - Track effectiveness

### Segregation of Duties (SoD) - Most Important

Separate 3 functions:
1. **Authorization** (Approve)
2. **Recording** (Record in system)
3. **Custody** (Keep/maintain assets)

❌ Wrong: One person does all 3
✅ Right: Different people for each
          `
        },
        {
          id: 4,
          title: '4. Fraud Triangle & Detection',
          content: `
### Fraud Triangle - 3 Elements

| Element | Meaning | Example |
|---------|---------|---------|
| **Pressure** | Financial need | Low salary, debt |
| **Opportunity** | Weakness/gap | No SoD, no audit trail |
| **Rationalization** | Self-justification | "Just borrowing temporarily" |

### Red Flags

- **Split Loans** - One customer with multiple loans
- **Nominee Accounts** - Account in someone else's name
- **NPL Evergreening** - New loan to pay old one
- **Unauthorized Access** - Access to data without permission
- **Unusual Pricing** - Prices outside normal range
          `
        },
        {
          id: 5,
          title: '5. PDPA (Personal Data Protection Act)',
          content: `
### Key Definitions

| Term | Meaning |
|------|---------|
| **Data Controller** | Decision maker about data (Bank) |
| **Data Processor** | Processes data per instructions (Outsource) |
| **Personal Data** | Identifies person (Name, ID, Email) |
| **Sensitive Data** | Sensitive info (Health, Religion) |

### DPIA (Data Protection Impact Assessment)

Purpose: Assess privacy risks before processing

Steps:
1. Identify data processing activity
2. Assess necessity & proportionality
3. Identify potential risks
4. Define mitigation measures
5. Document DPIA report
          `
        },
        {
          id: 6,
          title: '6. Continuous Auditing & Data Analytics',
          content: `
### Traditional vs Continuous Auditing

| Aspect | Traditional | Continuous |
|--------|-----------|-----------|
| **Frequency** | 1-2 times/year | Daily/hourly |
| **Sampling** | 5-10% sample | 100% population |
| **Speed** | 1-2 months | Real-time |
| **Tools** | Manual, Checklist | SQL, Python, Power BI |

### SQL Queries for Continuous Auditing

**Split Loans Detection:**
\`\`\`sql
SELECT customer_id, COUNT(*) as loan_count
FROM loans
WHERE created_date > DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY customer_id
HAVING COUNT(*) > 2;
\`\`\`

**Unauthorized Access:**
\`\`\`sql
SELECT user_id, customer_id, access_time
FROM access_log
WHERE user_id NOT IN (
    SELECT user_id FROM user_permissions 
    WHERE permission = 'view_customer_data'
);
\`\`\`
          `
        },
        {
          id: 7,
          title: '7. Professional Standards & Ethics',
          content: `
### Conflict of Interest

❌ Should NOT:
- Audit work you designed (within 1 year)
- Audit friends/relatives
- Have financial interest

✅ SHOULD:
- Disclose conflicts
- Ask for different auditor
- Document in audit file

### Independence & Objectivity

Auditor must:
- ✅ Be independent
- ✅ Be impartial (no bias)
- ✅ Be competent (knowledgeable)
- ✅ Be honest (no exploitation)
          `
        },
        {
          id: 8,
          title: '8. Audit Planning & Execution',
          content: `
### Audit Planning Principles

| Principle | Example |
|-----------|---------|
| **Risk-Based** | Audit high-risk areas first |
| **Business Aligned** | Don't disrupt operations |
| **Materiality** | Focus on significant issues |
| **Efficiency** | Use data analytics |

### Audit Timing

❌ Wrong: "Must audit per plan even if it disrupts business"

✅ Right: "Coordinate to reschedule while achieving objectives"

Example: During quarter-end close → Reschedule to after close
          `
        }
      ]
    }
  };

  const currentData = knowledgeData[language];
  const filteredSections = currentData.sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-800">{currentData.title}</h1>
          </div>
          <p className="text-gray-600 mb-6">{currentData.subtitle}</p>

          {/* Language Switcher */}
          <div className="flex gap-2 justify-center mb-6">
            <button
              onClick={() => setLanguage('th')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                language === 'th'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              ไทย
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                language === 'en'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={currentData.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {filteredSections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <h2 className="text-lg font-semibold text-gray-800 text-left">
                  {section.title}
                </h2>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {expandedSection === section.id && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <div className="prose prose-sm max-w-none text-gray-700">
                    {section.content.split('\n').map((line, idx) => {
                      if (line.startsWith('###')) {
                        return (
                          <h3 key={idx} className="text-lg font-bold mt-4 mb-2 text-gray-800">
                            {line.replace('###', '').trim()}
                          </h3>
                        );
                      }
                      if (line.startsWith('**')) {
                        return (
                          <p key={idx} className="font-semibold text-gray-800 mt-2">
                            {line}
                          </p>
                        );
                      }
                      if (line.startsWith('```')) {
                        return null;
                      }
                      if (line.trim() === '') {
                        return <br key={idx} />;
                      }
                      return (
                        <p key={idx} className="text-gray-700 mb-2">
                          {line}
                        </p>
                      );
                    })}
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => copyToClipboard(section.content)}
                    className="mt-4 flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        {language === 'th' ? 'คัดลอกแล้ว!' : 'Copied!'}
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        {language === 'th' ? 'คัดลอก' : 'Copy'}
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>
            {language === 'th'
              ? '© 2026 Audit Program Generator - ฐานความรู้ Internal Audit'
              : '© 2026 Audit Program Generator - Internal Audit Knowledge Base'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
