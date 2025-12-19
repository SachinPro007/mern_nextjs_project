# 1. Install dependencis
FROM node:20-alpine as deps
WORKDIR /app
COPY package.json package-lock.json ./

RUN npm ci


# 2. Build the application
FROM node:20-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules /node_modules
COPY . .

RUN npm run build


# 3. App runner
FROM node:20-alpine as runner
WORKDIR /app

ENV NODE_ENV=production


# Copy the built app from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static


EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]