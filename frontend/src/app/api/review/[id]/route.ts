import { NextRequest, NextResponse } from "next/server"
import { reviews } from "../testReviewData"
export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: string }
  }
) {
  return NextResponse.json(reviews.find(({ id }) => id === Number(params.id)))
}
