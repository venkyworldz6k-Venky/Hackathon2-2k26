# Gemini Agentic Coding Hackathon 2026 — Website

Official website for the **Gemini Agentic Coding Hackathon 2026** organized by **Proton Solutions**.

## 🎨 Theme & Palette
- **Deep Midnight Teal:** `#073B3A` (Primary Background)
- **Soft Pearl:** `#F3F0E8` (Headings, Paragraphs, Light Section Cards)
- **Vibrant Neon Lime:** `#C6FF3D` (Buttons, Highlights, Badges)
- **Accents:** Gold (`#FFD700`), Silver (`#D1D5DB`), Bronze (`#CD7F32`)

---

## 🏆 Event Summary
- **Event Name:** Gemini Agentic Coding Hackathon 2026
- **Organizer:** Proton Solutions
- **Format:** 100% Online
- **Registration Fee:** ₹250 per participant (**Strictly Non-Refundable**)
- **Total Prize Pool:** ₹24,000
  - 🥇 First Prize: ₹10,000 (Gold Champion)
  - 🥈 Second Prize: ₹8,000 (Silver Runner-Up)
  - 🥉 Third Prize: ₹6,000 (Bronze Second Runner-Up)

---

## ⚙️ Configuration & Customization
All placeholders, official URLs, dates, and payment settings are centralized in:
[`src/config/hackathon.ts`](file:///c:/Users/HP/Desktop/sample/Event/src/config/hackathon.ts)

### Editable Placeholders:
- `placeholders.googleFormUrl`: Replace with your production Google Form URL.
- `placeholders.whatsappChannelUrl`: Replace with your official WhatsApp channel URL.
- `importantDates`: Update milestone dates and phases as they are officially finalized.
- `payment.razorpayKeyId`: Provide live or test Razorpay Key ID, or use the built-in PCI-DSS compliant payment simulation sandbox.

---

## 🚀 Running Locally
```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
The website is currently previewing at `http://localhost:4173/`.
