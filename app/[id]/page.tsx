import { Article } from '../components/ArticleSlider'
import { Metadata, ResolvingMetadata } from 'next'
import ArticleDetail from './components/ArticleDetail'
import ArticlesSide from './components/ArticlesSide'
import { headers } from 'next/headers'

interface ArticleDetail extends Article {
  content: string
}

interface Props {
  params: { id: number }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const headersList = headers()
  const domain = headersList.get('host')

  const res = await fetch(`http://${domain}/api/article/${params.id}`)
  const response = await res.json()
  const article = response.article as ArticleDetail

  return {
    title: `BrandTitle | ${article.title}`,
    description: article.short_description,
    openGraph: {
      images: [article.image],
    },
  }
}

const ArticlePage: React.FC<Props> = async ({ params }: Props) => {
  const headersList = headers()
  const domain = headersList.get('host')
  const res = await fetch(`http://${domain}/api/article/${params.id}`)
  const response = await res.json()
  const article = response.article as ArticleDetail

  return (
    <div className="max-w-6xl mx-auto p-4 pt-8 md:p-8">
      <div className="block gap-8 md:flex">
        <ArticleDetail article={article} />
        <div className="border-b-[1px] mt-2 md:border-l-[1px] border-gray-300 h-auto" />
        <div className="w-full mb-20 mt-8 md:w-[50%] md:mb-0">
          <ArticlesSide id={article.id} />
        </div>
      </div>
    </div>
  )
}

export default ArticlePage
