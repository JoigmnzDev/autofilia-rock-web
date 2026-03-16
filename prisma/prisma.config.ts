import path from 'node:path'
import { defineConfig } from '@prisma/config'

// Load environment variables
import 'dotenv/config'

export default defineConfig({
  earlyAccess: true,
  schema: path.join(__dirname, 'schema.prisma'),
  
  migrate: {
    url: process.env.DATABASE_URL!,
  },
})
