# 🛡️ TrustFund: AI-Verified Crowdfunding Protocol

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Solana](https://img.shields.io/badge/Solana-Mainnet-green) ![AI](https://img.shields.io/badge/AI-Gemini%201.5%20Flash-purple) ![Status](https://img.shields.io/badge/Status-Hackathon%20MVP-orange)

**Automating Trust in Web3 with Solana Escrows & Google Gemini AI.**

---

## 🚀 The Problem
Crowdfunding is broken. In traditional platforms (Kickstarter) and crypto launchpads, creators receive 100% of the funds upfront. This misalignment of incentives leads to:
* ❌ **Rug Pulls:** Creators disappearing with the money immediately.
* ❌ **Voter Apathy:** Investors lack the time or technical skill to verify complex updates.
* ❌ **Zero Accountability:** No automated mechanism ensures promises are kept.

## 💡 The Solution: TrustFund
TrustFund is a **Milestone-Based Escrow System**. We don't just "give" money to creators; we stream it based on verified results.

Instead of asking thousands of retail investors to read complex code commits, we use **Google Gemini (AI)** to act as an automated, unbiased auditor.

---

## 🔑 Key Features

### 1. 🔒 Smart Contract Vault (Solana)
* Funds are locked in a **Program Derived Address (PDA)**.
* The creator **cannot** withdraw funds manually.
* Logic is immutable; funds are only unlocked when a specific milestone is strictly approved.

### 2. 🤖 Sentinel AI Auditor (Gemini)
* **Instant Analysis:** Reads GitHub commits, technical reports, and deployment logs in seconds.
* **Contextual Audit:** Compares the "Proof of Work" against the original "Whitepaper Promises."
* **Scoring Engine:** Generates a simple Trust Score (0-100%) for investors.

### 3. 📊 Strategic SWOT Analysis
* The AI analyzes the project concept and instantly generates a Strengths, Weaknesses, Opportunities, and Threats report to help investors make better decisions.

### 4. ✅ Verified Payouts
* Funds are released in tranches (e.g., 25% per milestone) **only** if the Trust Score meets the governance threshold.

---

## 🛠️ Tech Stack

| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Blockchain** | Solana (Anchor) | High-speed, low-cost secure vault for funds. |
| **AI Engine** | Google Gemini 1.5 Flash | Multimodal analysis of technical proof & SWOT. |
| **Frontend** | Next.js + Tailwind | Responsive dashboard for creators & investors. |
| **Wallet** | Phantom / Solana Adapter | Authentication & transaction signing. |

---

## ⚙️ The Workflow
1.  **Fundraising:** Backers deposit SOL into the TrustFund Vault.
2.  **Submission:** The Creator finishes a task (e.g., "Build Login Page") and uploads proof (GitHub link).
3.  **AI Audit:** The Sentinel Agent scans the code.
    > *AI:* "I see a login component in the code. This matches the milestone requirement."
4.  **Result:** Trust Score: **92% (PASS)**.
5.  **Release:** The Smart Contract unlocks 25% of the funds to the Creator.

---

## 💻 Installation & Setup

### Prerequisites
* Node.js 18+
* Rust & Cargo
* Solana CLI
* Anchor Framework


