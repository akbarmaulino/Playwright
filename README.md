# Playwright Automation Testing - Dealls

This project is an automation test suite using [Playwright](https://playwright.dev/) for the [Dealls](https://dealls.com) website.  
It covers essential user journeys such as:

- Login with valid credentials  
- Search for a mentor  
- View mentor detail  
- Create a new mentoring schedule  

---

## 📁 Struktur Proyek

```
.
├── .github/workflows/         # Konfigurasi GitHub Actions
├── node_modules/              # Modul-modul Node.js
├── pages/                     # File objek halaman (Page Object Model)
├── playwright-report/         # Laporan hasil eksekusi Playwright
├── steps/                     # Langkah-langkah pengujian (step definitions)
├── test-results/              # Output hasil test mentah
├── tests/                     # File skenario pengujian
├── utils/                     # Utility/helper functions
├── README.md                  # Dokumentasi proyek
├── package.json               # Dependensi dan script project
├── package-lock.json          # Lockfile npm
├── playwright.config.js       # Konfigurasi utama Playwright
```
---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/akbarmaulino/Playwright.git
cd Playwright
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright Browser

```bash
npx playwright install
```
## Running Tests

## Runing  All Tests

```bash
npx playwright test
```

## Runing Specific test File

```bash
npx playwright test tests/mentoring.spec.js
```

## View Report

```bash
npx playwright show-report
```






