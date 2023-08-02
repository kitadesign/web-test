'use client'

import { useRouter } from 'next/navigation'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function PageViewTransitionsApiArticles({
  params,
}: {
  params: { id: string };
}) {
  const { push } = useRouter()
  const handleClickCard = () => {
    try {
      (document as any).startViewTransition(() => {
        setTimeout(() => {
          push('/view-transitions-api')
        }, 400)
      })
    } catch (err) {
      console.error(err)
      push('/view-transitions-api')
    }
  }

  return (
    <article>
      <button onClick={() => handleClickCard()}>Back</button>
      <Card>
        <CardHeader style={{ viewTransitionName: 'shared1', contain: 'paint' }}>
          <CardTitle>Card Title {params.id}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </article>
  )
}
