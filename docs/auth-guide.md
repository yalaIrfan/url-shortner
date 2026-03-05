# Authentication Guide

## Overview

All authentication in this application is handled exclusively by **Clerk**. No alternative authentication methods should be implemented.

## Clerk Setup

- Authentication provider: [Clerk](https://clerk.com)
- Integration: `@clerk/nextjs` (v7.0.1+)
- Environment variables required:
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
  - `CLERK_SECRET_KEY`

## Protected Routes

### /dashboard

- **Status**: Protected route
- **Requirement**: User must be authenticated
- **Implementation**: Use `auth()` middleware from `@clerk/nextjs`
- **Behavior**: Unauthenticated users are redirected to sign-in modal

## Route Logic

### Homepage (/page.tsx)

- If user is **logged in**: Redirect to `/dashboard`
- If user is **not logged in**: Display public homepage

Implement redirect using:

```typescript
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  // Render public homepage
}
```

## Sign In & Sign Up

### Modal Display

- Sign in and sign up flows must **always launch as modals**
- Use Clerk's `<SignIn />` and `<SignUp />` components
- Configuration:
  ```typescript
  <SignIn routing="modal" />
  <SignUp routing="modal" />
  ```

### Layout Implementation

Place sign-in/sign-up modals in the root layout or a dedicated modal component to ensure they're accessible globally.

## Best Practices

1. **Always use `@clerk/nextjs`** - Never implement custom authentication
2. **Server-side checks** - Use `auth()` in server components/actions for security
3. **Client-side checks** - Use `useAuth()` hook for UI conditional rendering
4. **Middleware** - Protect routes at the middleware level when possible
5. **Clerk dashboard** - Manage user roles, permissions, and settings through Clerk dashboard

## API Routes

- Use `auth()` to verify requests in API routes
- Return 401 Unauthorized if user is not authenticated
- Ensure sensitive operations require authentication

---

**Clerk Documentation**: [clerk.com/docs](https://clerk.com/docs)
