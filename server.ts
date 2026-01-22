// server.ts
import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { z } from "zod";

// Initialize tRPC
const t = initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;

// Sample posts data
const posts = [
  {
    id: 1,
    title: "Getting Started with tRPC",
    content: "Learn how to build type-safe APIs",
    authorId: 1,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 2,
    title: "tRPC Best Practices",
    content: "Tips and tricks for using tRPC effectively",
    authorId: 2,
    createdAt: "2024-01-16T14:30:00Z",
  },
  {
    id: 3,
    title: "Building Real-time Apps",
    content: "Using tRPC with WebSockets",
    authorId: 1,
    createdAt: "2024-01-17T09:15:00Z",
  },
];

// Define your routers
const appRouter = router({
  // Get all posts
  getAllPosts: publicProcedure.query(() => posts),

  // Get a single post by ID
  getPost: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => {
      const post = posts.find((p) => p.id === input.id);
      if (!post) {
        throw new Error(`Post with ID ${input.id} not found`);
      }
      return post;
    }),
});

// Export type for client
export type AppRouter = typeof appRouter;

// Create Express app
const app = express();
app.use(express.json());

// Attach tRPC middleware
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  }),
);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`tRPC server running at http://localhost:${PORT}`);
  console.log(`tRPC endpoint: http://localhost:${PORT}/trpc`);
});
