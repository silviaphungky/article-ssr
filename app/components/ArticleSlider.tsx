'use client'

import Slider from 'react-slick' // Corrected import for react-slick
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export interface Article {
  id: string
  title: string
  short_description: string
  image: string
  slug: string
  category: string
  updated_at: string
  content: string
}

interface ArticleSliderProps {
  articles: Article[]
}

const ArticleSlider: React.FC<ArticleSliderProps> = ({ articles }) => {
  return (
    <div>
      <Slider {...sliderSettings}>
        {articles.map((article) => (
          <div key={article.id} className="relative">
            <img
              src={article.image}
              alt={article.title}
              width={'100%'}
              style={{
                height: 400,
                objectFit: 'cover',
              }}
            />
            <div className="absolute bottom-0 bg-opacity-50 bg-black text-white p-4 max-w-[50%]">
              <h2 className="text-2xl font-semibold">{article.title}</h2>
              <p>{article.short_description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ArticleSlider
