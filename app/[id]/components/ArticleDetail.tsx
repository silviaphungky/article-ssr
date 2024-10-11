import Link from 'next/link'
import ShareButton from './ShareButton'
import { Badge } from '@/components'
import { categoryColors } from '@/app/constants/categoryColorMap'
import parse from 'html-react-parser'
import { Article } from '@/app/components/ArticleSlider'
import { headers } from 'next/headers'

const ArticleDetail = ({ article }: { article: Article }) => {
  const headersList = headers()
  const domain = headersList.get('host')
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="font-poppins text-sm">Share:</div>
          <ShareButton url={`${domain}/${article.id}`} title={article.title} />
        </div>
        <Link href={{ pathname: `/category/${article.category}` }}>
          <Badge className={categoryColors[article.category]}>
            {article.category}
          </Badge>
        </Link>
      </div>

      <div className="mb-8 mt-2 font-poppins text-xs text-gray-500 text-right">{`Updated at: ${article.updated_at}`}</div>

      <img
        src={article.image}
        alt={article.title}
        width={500}
        height={300}
        className="rounded w-full mb-8 mt-2"
      />

      <div className="font-poppins text-sm">{parse(article.content)}</div>

      <div className="flex gap-2 items-center float-right mt-4 mb-20">
        <div className="font-poppins text-sm">Share:</div>
        <ShareButton url={`${domain}/${article.id}`} title={article.title} />
      </div>
    </div>
  )
}

export default ArticleDetail
