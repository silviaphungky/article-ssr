import Image from 'next/image'
import { Article } from './ArticleSlider'
import Link from 'next/link'

const ArticleTrending = ({ articles }: { articles: Array<Article> }) => {
  return (
    <div className="bg-[#EBEEF3] mt-14 rounded p-2 md:p-0">
      <div className="flex flex-col md:flex-row gap-2 md:gap-8">
        <div className="relative h-[20rem] md:h-[27rem] w-full md:w-1/2 pr-4">
          <Image
            src={articles[0].image}
            alt={articles[0].title}
            fill
            objectFit="cover"
            className="rounded"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded"></div>
          <div className="absolute bottom-3 left-3 font-bold text-lg md:text-2xl">
            <Link href={`/${articles[0].id}`}>
              <h3 className="text-white w-1/2 cursor-pointer uppercase text-lg md:text-2xl">
                {articles[0].title}
              </h3>
            </Link>
          </div>
          <div className="absolute top-3 right-3 font-bold text-lg md:text-2xl">
            <div className="border-b-[1px] border-white rounded-sm text-white p-2 text-sm font-poppins">
              {articles[0].category}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl md:text-2xl mt-6">
            Trending Articles
          </h3>
          <div className="mt-6">
            {articles.slice(1, 4).map((item, i) => (
              <Link
                href={`/${item.id}`}
                key={`article-${i}`}
                className={`mb-5 sm:mb-4 ${
                  i < 2 ? 'border-b-[1px] border-[#B8C2CE]' : ''
                } pb-4 flex flex-col sm:flex-row gap-2 sm:gap-4 p-0 md:mr-8`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-[150px] h-auto rounded"
                />
                <div>
                  <h4 className="font-semibold text-lg md:text-xl cursor-pointer">
                    {item.title}
                  </h4>
                  <div className="font-poppins text-sm text-gray-500">
                    {item.short_description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleTrending
