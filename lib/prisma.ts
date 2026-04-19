// lib/prisma.ts
// Safe Mock: Returns empty arrays/objects instead of null to prevent crashes
export const prisma = new Proxy({} as any, {
  get: () => ({
    findMany: async () => [],
    findUnique: async () => null,
    findFirst: async () => null,
    create: async () => ({}),
    update: async () => ({}),
    delete: async () => ({}),
    count: async () => 0,
    $disconnect: async () => {},
  }),
});
