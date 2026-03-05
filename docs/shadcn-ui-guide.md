# shadcn/ui Component Guide

This application uses **shadcn/ui** exclusively for all UI components. Custom components are strictly prohibited.

## Core Principles

- **Always use shadcn/ui components** - Do not build custom components
- **Compose over customize** - Combine existing components to achieve desired functionality
- **Leverage Tailwind + CVA** - Use Tailwind CSS v4 and class-variance-authority for styling variations
- **Maintain consistency** - Follow existing component patterns throughout the app

## Available Components

All shadcn/ui components are installed in `components/ui/`. Common components include:

- Buttons, Cards, Inputs, Labels
- Dialogs, Dropdowns, Popovers
- Forms, Sheets, Toasts
- Badges, Tables, Tabs
- Alerts, Spinners, Separators

See [shadcn/ui documentation](https://ui.shadcn.com/) for the complete component library.

## Usage Example

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MyFeature() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feature Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter text..." />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  );
}
```

## Styling Guidelines

- Use Tailwind CSS classes for layout and spacing
- Use CVA (class-variance-authority) for component variants
- Leverage shadcn/ui's built-in styling system
- Maintain dark mode support where applicable

## When to Create New Features

If you need a feature not available in shadcn/ui:

1. **Check if you can compose** existing components
2. **Extend existing components** with props or wrapper components
3. **Only then** escalate to the team for a custom solution

## Installation

To add new shadcn/ui components:

```bash
npx shadcn-ui@latest add [component-name]
```

This installs the component to `components/ui/` with all dependencies.

---

**Remember**: Every UI element must come from shadcn/ui. No exceptions.
