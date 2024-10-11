import { Badge, Card } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { categoryColors } from '../constants/categoryColorMap'

interface Article {
  id: string
  title: string
  short_description: string
  image: string
  slug: string
  category: string
}

interface Props {
  articles: Array<Article>
}

const ArticleList = ({ articles }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row mt-6">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow">
        {articles.map((article) => (
          <Card key={article.id}>
            <Link href={`/${article.id}`}>
              <Image
                src={article.image}
                alt={article.title}
                width={300}
                height={200}
                className="rounded-md"
              />
            </Link>
            <Link href={`/${article.id}`}>
              <h2 className="text-xl font-bold mt-2">{article.title}</h2>
            </Link>
            <p
              className="font-poppins text-sm mt-1 mb-2"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {article.short_description}
            </p>
            <Link href={{ pathname: `/category/${article.category}` }}>
              <Badge className={categoryColors[article.category]}>
                {article.category}
              </Badge>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ArticleList
