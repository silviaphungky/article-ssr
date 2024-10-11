import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 200,
    categories: [
      {
        id: 1,
        label: 'Programming',
        asset: '/programming.png',
      },
      {
        id: 2,
        label: 'Web Development',
        asset: '/fe.png',
      },
      {
        id: 3,
        label: 'Design',
        asset: '/design.png',
      },
      {
        id: 4,
        label: 'Backend Development',
        asset: '/be.png',
      },
    ],
  })
}
