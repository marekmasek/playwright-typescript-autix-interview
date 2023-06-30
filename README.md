# AT AUTIX PLAYWRIGHT TYPESCRIPT INTERVIEW

This project contains example tests for Autix.eu

## Prerequisites

1. Installed Node.js 16+ and NPM -> https://nodejs.org/en/download
2. Navigate to root folder of the project and install npm packages:

```shell 
npm install
```

3. Install required browser for the first time:

```shell 
npx playwright install
```

## Running tests

```shell
ENV=test npx playwright test --headed --project=chromium
```