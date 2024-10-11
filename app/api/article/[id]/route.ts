import { NextResponse } from 'next/server'
import { articles } from '../../articles/route'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params

  // Convert id to a number
  const articleId = parseInt(id)

  // Find the article by ID
  const article = articles.find((a) => a.id === articleId)

  // Check if the article exists
  if (!article) {
    return NextResponse.json(
      {
        status: 404,
        message: 'Article not found.',
      },
      { status: 404 }
    )
  }

  // Return the article if found
  return NextResponse.json({
    status: 200,
    article: article,
  })
}
