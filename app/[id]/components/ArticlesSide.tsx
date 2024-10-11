import { Article } from '@/app/components/ArticleSlider'
import IconThumbUp from '@/components/icons/IconThumbUp'
import { headers } from 'next/headers'
import Link from 'next/link'

const ArticlesSide = async ({ id }: { id: string }) => {
  const headersList = headers()
  const domain = headersList.get('host')
  const res = await fetch(`http://${domain}/api/articles`)
  const response = await res.json()
  const articles = response.articles as Array<Article>
  const top4 = articles.slice(0, 4).filter((el) => el.id !== id)

  return (
    <div>
      <h4 className="font-semibold mb-4 text-xl flex gap-2 items-center">
        <span>
          <IconThumbUp />
        </span>
        <span>Recommended</span>
      </h4>
      {top4.map((item) => (
        <div key={item.id} className="mb-4">
          <Link href={`/${item.id}`}>
            <div className="font-semibold">{item.title}</div>
          </Link>
          <img
            src={item.image}
            className="my-2 rounded w-[80%] m-auto md:w-full"
          />
          <div className="text-sm font-poppins md:text-xs text-gray-500">
            {item.short_description}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArticlesSide
