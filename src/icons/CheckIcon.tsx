type Props = {
  color?: string
}

export default function CheckIcon({ color }: Props) {
  return (
    <svg width={13} height={11} viewBox='0 0 13 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M2 5.5473L4.7027 8.25L10.9527 2' stroke={color || '#0070F3'} strokeWidth='2.5' strokeLinecap='round' />
    </svg>
  )
}
