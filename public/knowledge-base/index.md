# Internal Audit Knowledge Base - Senior Level

**สำหรับ**: Manus AI Enhancement  
**ระดับ**: Senior Internal Auditor  
**ครอบคลุม**: ISO 9001, COSO, 3-LOD, PDPA, Fraud Triangle, Continuous Auditing  

---

## 📚 หมวดที่ 1: หลักการตรวจสอบภายใน (Internal Audit Fundamentals)

### 1.1 หลักการสำคัญ 3 ประการ

| หลักการ | คำอธิบาย | ตัวอย่าง |
|--------|---------|---------|
| **System Focus** | ตรวจสอบระบบ ไม่ใช่คน | ถ้าพนักงานไม่รู้ SOP → ตรวจสอบระบบฝึกอบรม ไม่ใช่ตัดคะแนนพนักงาน |
| **Root Cause Analysis** | หาสาเหตุแท้จริง ไม่ใช่อาการ | ถ้าสินเชื่อเกินอำนาจ → ตรวจสอบระบบ approval workflow ไม่ใช่ตัดสินใจเดี่ยว |
| **Preventive Control** | ป้องกันปัญหาก่อนเกิด | ตั้ง SoD ให้ชัดเจน ไม่ใช่รอให้เกิดทุจริตแล้วจับ |

### 1.2 CAR (Corrective Action Request) - วิธีเขียนที่ถูกต้อง

**❌ วิธีเขียนผิด**:
```
Finding: "พนักงานสาขา นางสาว ก. ไม่สามารถอธิบาย SOP ได้"
Action: "ตัดคะแนนประเมินผล และส่งไปอบรมใหม่"
```

**✅ วิธีเขียนถูก**:
```
Finding: "ระบบการสื่อสาร SOP ไม่มีประสิทธิภาพ"
Root Cause: "ไม่มีช่องทางการอบรมอย่างเป็นระบบ"
Action: "ปรับปรุงระบบฝึกอบรม และสร้างระบบ Knowledge Management"
```

---

## 📚 หมวดที่ 2: Three Lines of Defense (3-LOD) Model

### 2.1 โครงสร้าง 3 ด่าน

| ด่าน | หน่วยงาน | หน้าที่ | ตัวอย่าง |
|-----|---------|--------|---------|
| **Line 1** | ผู้ปฏิบัติงาน | ควบคุมความเสี่ยงในงานของตนเอง | ฝ่ายสินเชื่อ ตรวจสอบเอกสารสินเชื่อ |
| **Line 2** | Risk & Compliance | สนับสนุน ควบคุม และกำกับดูแล Line 1 | Risk Management, Compliance, Internal Control |
| **Line 3** | Internal Audit | ตรวจสอบอิสระ ทั้ง Line 1 และ Line 2 | ฝ่ายตรวจสอบภายใน (IA) |

### 2.2 ความเป็นอิสระ (Independence)

**Line 3 (IA) ต้องมีความเป็นอิสระ**:
- ✅ รายงานตรงต่อ Audit Committee หรือ Board
- ✅ ไม่ควรรายงานต่อ CFO หรือ COO
- ✅ ต้องมี "Audit Charter" ที่ชัดเจน

---

## 📚 หมวดที่ 3: COSO Framework & Segregation of Duties (SoD)

### 3.1 COSO Internal Control - 5 Components

| Component | คำอธิบาย | ตัวอย่าง |
|-----------|---------|---------|
| **1. Control Environment** | วัฒนธรรมองค์กร | "Tone at the Top" - ผู้บริหารต้องสนับสนุน Compliance |
| **2. Risk Assessment** | ประเมินความเสี่ยง | ระบุ Risk ที่อาจเกิด (Fraud, Error, Compliance) |
| **3. Control Activities** | ตั้งมาตรการควบคุม | SoD, Approval Limits, Reconciliation |
| **4. Information & Communication** | สื่อสารข้อมูล | ระบบ ERP, Policy, Training |
| **5. Monitoring** | ติดตามประสิทธิภาพ | Internal Audit, Self-assessment |

### 3.2 Segregation of Duties (SoD) - หลักการสำคัญที่สุด

**ต้องแยกหน้าที่ 3 ส่วนออกจากกัน**:

1. **Authorization** (อนุมัติ)
2. **Recording** (บันทึกบัญชี/ข้อมูล)
3. **Custody** (ดูแลจัดเก็บทรัพย์สิน)

**ตัวอย่าง: สินเชื่อธนาคาร**

| บทบาท | หน้าที่ | ❌ ผิด | ✅ ถูก |
|------|--------|------|------|
| **Approver** | อนุมัติสินเชื่อ | ตัวเดียวทำหมด | ผู้จัดการสาขา |
| **Recorder** | บันทึกระบบ | ตัวเดียวทำหมด | เจ้าหน้าที่ Loan Officer |
| **Custodian** | ถือกุญแจเงินสด | ตัวเดียวทำหมด | ผู้จัดการคลัง |

**❌ ผิด**: ผู้จัดการสาขาคนเดียว ทำทั้ง 3 หน้าที่ → **ความเสี่ยงสูง**

**✅ ถูก**: แยกคนละคน → **ป้องกันทุจริต**

---

## 📚 หมวดที่ 4: Fraud Triangle & Fraud Detection

### 4.1 Fraud Triangle - 3 องค์ประกอบ

```
         Fraud
          /|\
         / | \
        /  |  \
       /   |   \
      /    |    \
  Pressure  Opportunity  Rationalization
```

| องค์ประกอบ | ความหมาย | ตัวอย่าง |
|----------|---------|---------|
| **Pressure** | แรงกดดัน/ความต้องการ | เงินเดือนต่ำ, หนี้สิน, ความอยากได้ |
| **Opportunity** | โอกาส/ช่องโหว่ | ไม่มี SoD, ไม่มี Audit Trail, ไม่มี Supervision |
| **Rationalization** | การปลอบใจตนเอง | "ยืมไปก่อนเดี๋ยวมาคืน", "บริษัทเป็นหนี้ฉัน" |

### 4.2 Red Flags (สัญญาณเตือน)

**Red Flags สำหรับ Fraud Detection**:

| ประเภท | Red Flag | วิธีตรวจสอบ |
|-------|---------|-----------|
| **Split Loans** | ลูกค้าคนเดียวมีสินเชื่อหลายสัญญา | SQL Query: ดึง Customers with >2 loans in 30 days |
| **Nominee Accounts** | บัญชีที่ใช้ชื่อคนอื่นแต่เป็นเงินของคนเดิม | Pattern Analysis: Same source, different names |
| **NPL Evergreening** | ยืมใหม่เพื่อชำระเก่า | Loan Restructuring: >3 times in 2 years |
| **Unauthorized Access** | เข้าถึง Customer Data ไม่ได้รับอนุญาต | Access Log: User A access Customer B data |
| **Unusual Pricing** | ราคาสินค้า/บริการผิดปกติ | Price Outliers: >2 SD from mean |

---

## 📚 หมวดที่ 5: PDPA (Personal Data Protection Act)

### 5.1 ความหมายสำคัญ

| คำศัพท์ | ความหมาย | ตัวอย่าง |
|--------|---------|---------|
| **Data Controller** | ผู้ตัดสินใจเกี่ยวกับข้อมูล | ธนาคาร (นิติบุคคล) |
| **Data Processor** | ผู้ประมวลผลข้อมูลตามคำสั่ง | บริษัท Outsource ที่พิมพ์เอกสาร |
| **Personal Data** | ข้อมูลที่ระบุตัวตนได้ | ชื่อ, ID Card, Email, Phone |
| **Sensitive Data** | ข้อมูลที่ละเอียดอ่อน | สุขภาพ, ศาสนา, ข้อมูลทางการเมือง |

### 5.2 DPIA (Data Protection Impact Assessment)

**วัตถุประสงค์**: ประเมินความเสี่ยงต่อความเป็นส่วนตัวของเจ้าของข้อมูล

**ขั้นตอน**:
1. ระบุ Data Processing Activity
2. ประเมิน Necessity & Proportionality
3. ระบุ Risk ที่อาจเกิด
4. กำหนด Mitigation Measures
5. บันทึก DPIA Report

**ตัวอย่าง**: ธนาคารต้องการใช้ Customer Financial Data เพื่อ Cross-selling
```
DPIA ต้องประเมิน:
- ความจำเป็น: จำเป็นหรือไม่?
- สัดส่วน: ข้อมูลที่ขอมากเกินไปหรือไม่?
- ความเสี่ยง: อาจรั่วไหลได้หรือไม่?
- มาตรการป้องกัน: ต้องเข้ารหัสหรือไม่?
```

---

## 📚 หมวดที่ 6: Continuous Auditing & Data Analytics

### 6.1 ความแตกต่าง Traditional Audit vs Continuous Auditing

| ลักษณะ | Traditional Audit | Continuous Auditing |
|------|------------------|-------------------|
| **ความถี่** | ปีละ 1-2 ครั้ง | ทุกวัน/ทุกชั่วโมง |
| **Sampling** | สุ่มตัวอย่าง 5-10% | ตรวจ 100% ของข้อมูล |
| **ความเร็ว** | 1-2 เดือน | Real-time |
| **เครื่องมือ** | Manual, Checklist | SQL, Python, Power BI |
| **ผลลัพธ์** | Report หลังตรวจ | Alert ทันที |

### 6.2 SQL Queries สำหรับ Continuous Auditing

**Query 1: Split Loans Detection**
```sql
SELECT customer_id, COUNT(*) as loan_count
FROM loans
WHERE created_date BETWEEN DATE_SUB(NOW(), INTERVAL 30 DAY) AND NOW()
GROUP BY customer_id
HAVING COUNT(*) > 2
ORDER BY loan_count DESC;
```

**Query 2: Unauthorized Access Detection**
```sql
SELECT user_id, customer_id, access_time
FROM access_log
WHERE user_id NOT IN (
    SELECT user_id FROM user_permissions 
    WHERE permission = 'view_customer_data'
)
AND access_time > DATE_SUB(NOW(), INTERVAL 1 DAY);
```

**Query 3: Price Outliers**
```sql
SELECT product_id, price, 
       STDDEV(price) OVER (PARTITION BY product_id) as std_dev,
       AVG(price) OVER (PARTITION BY product_id) as avg_price
FROM transactions
WHERE ABS(price - avg_price) > 2 * std_dev;
```

---

## 📚 หมวดที่ 7: Professional Standards & Ethics

### 7.1 Conflict of Interest (ความขัดแย้งทางผลประโยชน์)

**❌ ไม่ควรทำ**:
- ตรวจสอบงานที่ตนเองเคยสร้างระบบไว้ (ภายใน 1 ปี)
- ตรวจสอบเพื่อน/ญาติ
- มีส่วนได้ส่วนเสีย (Financial Interest)

**✅ ควรทำ**:
- เปิดเผยความขัดแย้ง
- ขอให้เปลี่ยนตัวผู้ตรวจสอบ
- บันทึกไว้ใน Audit File

### 7.2 Independence & Objectivity

**ผู้ตรวจสอบต้อง**:
- ✅ มีความเป็นอิสระ (ไม่รายงานต่อ Management ที่ตรวจสอบ)
- ✅ เป็นกลาง (ไม่มีอคติ)
- ✅ มีความสามารถ (ความรู้ความเชี่ยวชาญ)
- ✅ ซื่อสัตย์ (ไม่เอาเปรียบ)

---

## 📚 หมวดที่ 8: Audit Planning & Execution

### 8.1 Audit Planning Principles

| หลักการ | ตัวอย่าง |
|--------|---------|
| **Risk-Based** | ตรวจสอบหน่วยงานที่มี Risk สูงก่อน |
| **Business Alignment** | ไม่เบียดเบียนภาระงานหลัก (ไม่ตรวจช่วงปิดไตรมาส) |
| **Materiality** | ตรวจสอบเรื่องที่มีความสำคัญ ไม่ใช่เรื่องเล็กน้อย |
| **Efficiency** | ใช้ Data Analytics แทน Manual Sampling |

### 8.2 Audit Timing

**❌ วิธีผิด**: "ต้องตรวจตามแผนแม้จะเบียดเบียนธุรกิจ"

**✅ วิธีถูก**: "ประสานงานเพื่อเลื่อนแผนให้เหมาะสม โดยยังบรรลุวัตถุประสงค์"

---

## 🎓 Test Questions & Answers

### Question 1: CAR Writing
**Q**: ถ้าพบว่าพนักงานไม่สามารถอธิบาย SOP ได้ ควรเขียน CAR อย่างไร?

**A**: ระบุถึง **ข้อบกพร่องของระบบการสื่อสาร** (System flaw) โดยไม่พาดพิงชื่อบุคคล

**เหตุผล**: หลักการ "ตรวจสอบระบบ ไม่ใช่ตรวจสอบคน"

---

### Question 2: 3-LOD Model
**Q**: ธนาคารมี 3 ด่านป้องกัน ด่านที่ 2 ประกอบด้วยหน่วยงานใดบ้าง?

**A**: **Risk Management และ Compliance** (ไม่ใช่ Internal Audit ที่เป็นด่านที่ 3)

**เหตุผล**: ด่านที่ 2 ทำหน้าที่สนับสนุนและกำกับดูแล Line 1

---

### Question 3: Fraud Triangle
**Q**: "ยืมเงินลูกค้าไปใช้ชั่วคราว เดี๋ยวได้โบนัสแล้วจะรีบเอามาคืน" เป็นองค์ประกอบใดของ Fraud Triangle?

**A**: **Rationalization** (การปลอบใจตนเอง)

**เหตุผล**: ผู้กระทำการหาเหตุผลเข้าข้างตนเอง

---

### Question 4: SoD Violation
**Q**: ผู้จัดการสาขาคนเดียว ทำหน้าที่อนุมัติสินเชื่อ บันทึกระบบ และถือกุญแจเงินสด ขัดกับหลักการควบคุมภายในเรื่องใด?

**A**: **Segregation of Duties (SoD)**

**เหตุผล**: ต้องแยกหน้าที่ 3 ส่วน (Authorization, Recording, Custody) ออกจากกัน

---

### Question 5: PDPA - Data Controller
**Q**: "ผู้ควบคุมข้อมูลส่วนบุคคล" ตามพ.ร.บ. PDPA ตรงกับข้อใดมากที่สุด?

**A**: **นิติบุคคล (ธนาคารเอง) ที่มีอำนาจตัดสินใจเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูล**

**เหตุผล**: Data Controller = ผู้ตัดสินใจ (ไม่ใช่ Outsource ที่เป็น Data Processor)

---

## 📋 สรุป

**ความรู้หลักสำหรับ Senior Internal Auditor**:

1. ✅ **System Focus** - ตรวจสอบระบบ ไม่ใช่คน
2. ✅ **3-LOD Model** - เข้าใจบทบาทของแต่ละด่าน
3. ✅ **COSO & SoD** - หลักการควบคุมภายในที่สำคัญที่สุด
4. ✅ **Fraud Triangle** - วิธีตรวจจับการทุจริต
5. ✅ **PDPA** - กฎหมายคุ้มครองข้อมูลส่วนบุคคล
6. ✅ **Continuous Auditing** - ใช้ Data Analytics แทน Manual
7. ✅ **Ethics & Independence** - ความเป็นอิสระและเป็นกลาง
8. ✅ **Business Alignment** - ตรวจสอบโดยไม่เบียดเบียนธุรกิจ

---

**สำหรับ Manus AI**: ใช้ความรู้นี้ร่วมกับ 5 เทคนิค Token Optimization เพื่อให้คำตอบที่แม่นยำและประหยัด Token
