import { ReactNode } from 'react'

const Badge = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={`${className} px-2 py-1 text-xs font-bold rounded w-fit`}>
      {children}
    </div>
  )
}

export default Badge
