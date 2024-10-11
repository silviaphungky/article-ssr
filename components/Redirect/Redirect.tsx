'use client'
import Link from 'next/link'
import { ReactNode } from 'react'

const Redirect = ({
  path,
  children,
}: {
  path: string
  children: ReactNode
}) => {
  return <Link href={`${window.location.hostname}/${path}`}>{children}</Link>
}

export default Redirect
