# Swag Labs Playwright QA Exercise

This project demonstrates an end-to-end UI automation flow for [Sauce Demo](https://www.saucedemo.com/) using Playwright with TypeScript and a Page Object Model (POM). It is structured to highlight QA automation fundamentals such as reliable locators, reusable page abstractions, and clear assertions a recruiter or reviewer can quickly evaluate.

## Project goals
- Cover a realistic purchase journey from login to order confirmation using stable role-based locators.
- Showcase maintainable test design with dedicated page objects for each screen.
- Provide easy-to-run Playwright configuration and reporting for quick feedback loops.

## Tech stack
- **Playwright Test** (TypeScript) for cross-browser UI automation.
- **Page Object Model** to encapsulate screen interactions (`page-objects/`).
- **HTML reporter** enabled in `playwright.config.ts` for visual debugging after runs.

## Scenario automated
The repository implements a single, complete purchase flow (TC01) that validates the entire customer path:
1. Navigate to the Swag Labs login page.
2. Log in with `standard_user` / `secret_sauce`.
3. Confirm the Products grid is visible.
4. Add **Sauce Labs Backpack** to the cart and open the cart.
5. Verify the cart contains one item and proceed to checkout.
6. Fill the checkout form (first name, last name, zip code) and continue.
7. Validate the checkout overview content, finish the order, and assert the success message.

See [`tests/tests.spec.ts`](tests/tests.spec.ts) for the full scripted flow, and the `page-objects/` folder for the supporting page abstractions.

## Repository structure
```
├── page-objects/           # Page Object Model classes for each screen
│   ├── cartPage.ts         # Cart assertions and checkout navigation
│   ├── checkOutInformationPage.ts  # Checkout form interactions
│   ├── checkOutOverviewPage.ts     # Overview assertions and finish action
│   ├── confirmationPage.ts # Order success verification
│   ├── logInPage.ts        # Login form actions
│   └── productsPage.ts     # Product listing interactions
├── tests/
│   └── tests.spec.ts       # Complete purchase test using PageManager
├── playwright.config.ts    # Shared Playwright settings and browser projects
├── package.json            # Dependencies (@playwright/test, @types/node)
└── package-lock.json
```

## Getting started
1. **Install dependencies** (Node.js 18+ recommended):
   ```bash
   npm ci
   ```
2. **Install Playwright browsers** (if not already present):
   ```bash
   npx playwright install
   ```

## Running the test suite
Execute all tests across the configured browsers:
```bash
npx playwright test
```

- HTML report: `playwright-report/index.html` (generated after a run). Open it locally with:
  ```bash
  npx playwright show-report
  ```

## Extending the suite
- Add new page classes under `page-objects/` and expose them through `page-objects/pageManager.ts` to keep tests concise.
- Prefer `getByRole` selectors for resilience against DOM changes; fall back to CSS only when necessary.
- Group related validations inside page object methods to keep test files focused on behavior rather than mechanics.

## Credentials
Use the standard demo credentials provided by Sauce Labs:
- **Username:** `standard_user`
- **Password:** `secret_sauce`

> Note: These are public demo credentials intended for automation practice.
