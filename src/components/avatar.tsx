import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasPrimary?: boolean
}

export function Avatar({ hasPrimary = true, ...props }: AvatarProps) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      {...props}
      className={twMerge(
        'rounded-lg',
        hasPrimary
          ? 'h-[calc(3rem_+_12px)] w-[calc(3rem_+_12px)] border-4 border-gray-800 outline outline-2 outline-green-500'
          : 'w-h-12 h-12',
      )}
    />
  )
}
