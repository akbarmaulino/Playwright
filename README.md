# Playwright Automation Testing - Dealls

![CI](https://github.com/akbarmaulino/Playwright/actions/workflows/main.yml/badge.svg)

This project is an automation test suite using [Playwright](https://playwright.dev/) for the [Dealls](https://dealls.com) website.  
It covers essential user journeys such as:

- Login with valid credentials  
- Search for a mentor  
- View mentor detail  
- Create a new mentoring schedule  

---

## 📁 Project Structure

.
├── .github/workflows/ # GitHub Actions for CI
├── node_modules/ # Node.js dependencies
├── pages/ # Page Object Models
├── playwright-report/ # Playwright HTML test report
├── steps/ # Step definitions for tests
├── test-results/ # Test output results
├── tests/ # Test scenarios
├── utils/ # Utility/helper functions
├── README.md # Project documentation
├── package.json # Project metadata and scripts
├── package-lock.json # Exact dependency versions
├── playwright.config.js # Playwright configuration



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






