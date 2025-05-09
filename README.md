# Playwright Automation Tesing Dealls

Proyek ini merupakan pengujian automation testing menggunakan Playwright untuk website Dealls. Beberapa Fitur yang diuji dalam project ini adalah :

- Login with valid credential
- Search Mentor
- View Detail Mentail
- Create new schedule for mentoring


## 📁 Struktur Proyek

```
.
├── .github/workflows/         # GitHub Actions
├── node_modules/              # Modul Node.js
├── pages/                     # POM
├── playwright-report/         # Report Eksekusi
├── steps/                     # Langkah-langkah pengujian 
├── test-results/              # Output hasil test
├── tests/                     # skenario pengujian
├── utils/                     # Utility/helper functions
├── README.md                  # Dokumentasi proyek
├── package.json               # Dependensi dan script project
├── package-lock.json          # Lockfile npm
├── playwright.config.js       # Konfigurasi utama Playwright
```


## 🚀 Instalasi

1. **Kloning repositori:**

   ```bash
   git clone https://github.com/akbarmaulino/Playwright.git
   cd Playwright
   ```

2. **Instal dependensi:**

   ```bash
   npm install
   ```

3. **Instal browser Playwright:**

   ```bash
   npx playwright install
   ```

## 🧪 Menjalankan Tes

### Secara Lokal

```bash
npx playwright test
```

### Menjalankan Tes Tertentu

```bash
npx playwright test tests/mentoring.spec.js
```

### Melihat Laporan Tes

```bash
npx playwright show-report
```
