import Image from 'next/image'
import { Article } from './ArticleSlider'
import Link from 'next/link'
import { headers } from 'next/headers'

const Categories = async ({ articles }: { articles: Array<Article> }) => {
  const headersList = headers()
  const domain = headersList.get('host')
  const res = await fetch(`http://${domain}/api/categories`)
  const response = (await res.json()) || {}
  const categories = (response.categories || []) as Array<{
    id: string
    label: string
    asset: string
  }>

  const articlesByCategory = articles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = []
    }
    acc[article.category].push(article)
    return acc
  }, {} as Record<string, Article[]>)

  return (
    <>
      <h3 className="text-xl md:text-3xl font-bold mt-12 ml-0 md:ml-4 mb-4 ">
        Categories
      </h3>

      <div>
        {categories.map((item, index) => (
          <div
            key={`category-${index}`}
            className={`flex flex-col gap-4 mb-10 md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <Link href={`/category/${item.label}`} className="w-full md:w-1/2">
              {index % 2 === 0 && (
                <div
                  className={`bg-[#EBEEF3] p-2 font-bold text-xl uppercase text-center rounded mb-2 w-full md:w-[90%] capitalize opacity-80 ${
                    index % 2 === 0 && 'ml-auto'
                  }`}
                >
                  {item.label}
                </div>
              )}
              <div
                className={`relative w-full md:w-[90%] h-[15rem] ${
                  index % 2 === 0 && 'ml-auto'
                }`}
              >
                <Image
                  src={item.asset}
                  alt={item.label}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              {index % 2 !== 0 && (
                <div className="bg-[#EBEEF3] p-2 font-bold text-xl uppercase text-center rounded mt-2 w-full md:w-[90%] capitalize opacity-80">
                  {item.label}
                </div>
              )}
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 border-b-[1px] border-b-black pb-8">
              {articlesByCategory[item.label].slice(0, 4).map((article) => (
                <Link key={`${article.id}`} href={`/${item.id}`}>
                  <div className="border rounded-lg p-4 shadow">
                    <h3 className="text-lg font-bold">{article.title}</h3>

                    <div className="text-gray-700 font-poppins text-sm">
                      {article.short_description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Categories
