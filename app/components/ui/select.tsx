'use client'

import * as React from "react"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}