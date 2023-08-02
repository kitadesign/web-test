'use client'

import { useRouter } from 'next/navigation'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function PageViewTransitionsApi() {
  const {push} = useRouter()

  const handleClickCard = (id: number) => {
    try {
      (document as any).startViewTransition(() => {
        setTimeout(() => {
          push(`/view-transitions-api/articles/${id}`)
        }, 400)
      })
    } catch (err) {
      console.error(err)
      push(`/view-transitions-api/articles/${id}`)
    }
  }

  return (
    <main className='flex gap-2 cursor-pointer'>
      <Card onClick={() => handleClickCard(1)}>
        <CardHeader style={{ viewTransitionName: 'shared1', contain: 'paint' }}>
          <CardTitle>Card Title 1</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card onClick={() => handleClickCard(2)}>
        <CardHeader style={{ viewTransitionName: 'shared2', contain: 'paint' }}>
          <CardTitle>Card Title 2</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card onClick={() => handleClickCard(3)}>
        <CardHeader style={{ viewTransitionName: 'shared3', contain: 'paint' }}>
          <CardTitle>Card Title 3</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  )
}
