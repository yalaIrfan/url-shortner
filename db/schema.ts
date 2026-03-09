import {
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  index,
  integer,
} from "drizzle-orm/pg-core";

export const shortenedLinks = pgTable(
  "shortened_links",
  {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    userId: text("user_id").notNull(),
    originalUrl: text("original_url").notNull(),
    shortCode: text("short_code").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    index("idx_user_id").on(table.userId),
    uniqueIndex("idx_short_code_unique").on(table.shortCode),
  ],
);
