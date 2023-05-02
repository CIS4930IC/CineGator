import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
const isDev = true
const prisma = new PrismaClient()

export async function GET(request: Request) {
  const users = isDev ? await prisma.users.findMany() : "not in Dev"
  return NextResponse.json({ users })
}
