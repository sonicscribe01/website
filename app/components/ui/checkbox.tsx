'use client'

import * as React from "react"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={`h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary ${className}`}
      {...props}
    />
  )
}