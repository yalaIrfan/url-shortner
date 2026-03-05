# URL Shortener - Agent Instructions

This document provides LLM agents with essential guidelines for contributing to the URL Shortener project. All agents must adhere to these standards when writing code, making architectural decisions, and implementing features.

## Quick Reference

- **Project Type**: Next.js Full-Stack Application (TypeScript)
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Clerk
- **UI Framework**: React with Tailwind CSS & shadcn/ui
- **Styling**: Tailwind CSS v4 with CVA utilities
- **Node Version**: 18+
- **Runtime**: Node.js/Edge (Next.js 16+)

## Core Guidelines

### ⚠️ CRITICAL: Read Documentation First

**BEFORE GENERATING ANY CODE, YOU MUST READ THE RELEVANT INSTRUCTION FILES IN THE `/docs` DIRECTORY.**

This is non-negotiable. Every code change must comply with the standards defined in these files. Failure to read and follow these guidelines will result in code that violates project standards.

**Required Documentation Files:**
- [Authentication Guide](docs/auth-guide.md) - **ALWAYS read before implementing any auth features** (Clerk integration, protected routes, sign-in/sign-up flows)
- [shadcn/ui Component Guide](docs/shadcn-ui-guide.md) - **ALWAYS read before creating any UI components** (UI component standards, styling, and composition patterns)

**Process for Every Task:**
1. Identify which documentation file(s) apply to your task
2. Read the entire relevant documentation file(s)
3. Understand all requirements and standards
4. Generate code that strictly adheres to those standards
5. Verify compliance before implementation

## Project Structure

```
url-shortner/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── [route]/           # Dynamic routes
├── components/            # Reusable React components
│   └── ui/               # shadcn/ui components
├── db/                   # Database setup & schemas
│   ├── index.ts          # Database connection
│   └── schema.ts         # Drizzle ORM schemas
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
├── public/               # Static assets
├── docs/                 # Agent instruction documentation
├── drizzle.config.ts     # Drizzle ORM configuration
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies & scripts
```

## Workflows

### Running the Application

```bash
# Development
npm run dev                # Start dev server on http://localhost:3000

# Production
npm run build             # Build for production
npm start                 # Start production server
```

### Common Development Tasks

**Starting a new feature:**

1. Create feature branch: `git checkout -b feature/feature-name`
2. Create necessary components in `components/`
3. Add server logic to `app/` or `lib/`
4. Update database schema if needed in `db/schema.ts`
5. Write tests and ensure TypeScript compilation

**Database changes:**

1. Modify schema in `db/schema.ts`
2. Run `npx drizzle-kit generate:pg`
3. Apply migrations as needed
4. Update types if necessary

## Key Dependencies

| Package                  | Version | Purpose         |
| ------------------------ | ------- | --------------- |
| next                     | 16.1.6  | React framework |
| react                    | 19.2.3  | UI library      |
| typescript               | ^5      | Type safety     |
| drizzle-orm              | ^0.45.1 | Database ORM    |
| tailwindcss              | ^4      | Utility CSS     |
| @clerk/nextjs            | ^7.0.1  | Authentication  |
| shadcn                   | ^3.8.5  | UI components   |
| class-variance-authority | ^0.7.1  | Style variants  |

## Commit Conventions

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `refactor:` Code refactoring
- `docs:` Documentation
- `style:` Formatting changes
- `test:` Adding tests
- `chore:` Maintenance

Example: `feat: add URL validation to shortener form`

## Review Checklist

Before submitting changes:

- [ ] Code compiles without errors (`npm run build`)
- [ ] TypeScript strict mode is satisfied
- [ ] Follows code standards (see docs/code-standards.md)
- [ ] UI components use consistent patterns (see docs/styling-guide.md)
- [ ] Database changes include schema updates (see docs/database-guide.md)
- [ ] API endpoints follow conventions (see docs/api-guide.md)
- [ ] Authentication/security requirements met (see docs/auth-guide.md)
- [ ] Tests pass (if applicable)
- [ ] Changes documented if needed

## Performance & Optimization

- Minimize client-side JavaScript
- Use server components by default in Next.js 16
- Optimize images with `next/image`
- Implement proper caching strategies
- Keep bundle size in check

## Debugging

- Check `.env.local` for missing variables
- Use React Developer Tools for component debugging
- Check browser console for client-side errors
- Server logs visible in terminal during `npm run dev`
- Database queries can be logged via Drizzle config

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Clerk Documentation](https://clerk.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

---

**Last Updated**: March 2026  
**Maintained By**: Development Team
