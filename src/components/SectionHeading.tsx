import type { ReactNode } from 'react'

type Props = { number: string; eyebrow: string; title: string; description?: string; aside?: ReactNode }

export function SectionHeading({ number, eyebrow, title, description, aside }: Props) {
  return (
    <div className="section-heading">
      <div>
        <span className="section-eyebrow"><span>{number}</span> / {eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {aside && <div className="section-aside">{aside}</div>}
    </div>
  )
}
