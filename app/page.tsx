import ArticleSlider from './components/ArticleSlider'
import ArticleList from './components/ArticleList'
import Categories from './components/Categories'
import ArticleTrending from './components/ArticleTrending'
import { Metadata } from 'next'
import { headers } from 'next/headers'

interface Article {
  id: number
  title: string
  slug: string
}

export const metadata: Metadata = {
  title: ' BrandTitle | Get articles about coding and software development',
  description:
    'Software development articles, includes programming, web development, backend development, and design.',
}

const Home: React.FC = async () => {
  const headersList = headers()
  const domain = headersList.get('host')
  const res = await fetch(`http://${domain}/api/articles`)
  const response = await res.json()

  return (
    <>
      <div className="max-w-7xl mx-auto p-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold">Welcome to Our Articles</h1>
          <p className="text-lg text-gray-600">
            Explore insightful articles across various categories
          </p>
        </header>
        <ArticleSlider articles={response.articles.slice(0, 4)} />
        <ArticleList articles={response.articles.slice(0, 6)} />
        <ArticleTrending articles={response.articles.slice(0, 4)} />

        <Categories articles={response.articles} />
      </div>
    </>
  )
}

export default Home
