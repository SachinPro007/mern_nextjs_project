# 1. Install dependencis
FROM node:20-alpine as deps
WORKDIR /app
COPY package.json package-lock.json ./

RUN npm ci


# 2. Build the application
From node:20-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules /node_modules
COPY . .

Run npm run build


# 3. App runner
FROM node:20-alpine as runner

ENV NODE_ENV=production


# Copy the built app from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static


EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]