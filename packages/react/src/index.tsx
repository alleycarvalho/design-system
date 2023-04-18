import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  fontWeight: 'bold',
  backgroundColor: '$ignite500',
  border: 0,
  borderRadius: '$sm',
  color: '$white',

  variants: {
    size: {
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
