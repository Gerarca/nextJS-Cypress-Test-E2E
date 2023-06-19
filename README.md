This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Testing App with [Cypress](https://www.cypress.io/)

we can test it using `npx cypress open`

![alt text](https://github.com/Gerarca/AngularJS-NodeJS-TypeScript-MongoDB/raw/main/Frontend/docs/main.png?raw=true)

click on `component testing` and configure the file to will configure, then, choice a Browser

a simple test using [Cypress](https://www.cypress.io/), we'll configure the file `cypress/component/App.cy.js`, adding file `src/app/page.js`

```
import App from "../../src/app/page"

describe('App.cy.js', () => {
  it('Click link Docs', () => {
     cy.mount(<App />);
     cy.get("#idDoc").click();
  })
})
```

this is going to test the file `src/app/page.js`

![alt text](https://github.com/Gerarca/AngularJS-NodeJS-TypeScript-MongoDB/raw/main/Frontend/docs/main.png?raw=true)

also, we can add some scripts on `package.json` file:

```
"cy:run":"cypress run",
"cy:open":"cypress open" 
```

the command `cy:run` will run [Cypress](https://www.cypress.io/) in cmd mode.
the command `cy:open`  will open [Cypress](https://www.cypress.io/)  from your project root 