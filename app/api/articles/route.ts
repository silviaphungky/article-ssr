import { NextResponse } from 'next/server'

interface Article {
  title: string
  id: number
  slug: string
  image: string
  category: string
  short_description: string
  content: string
  updated_at: string
}

export const articles: Article[] = [
  {
    title: 'Understanding TypeScript',
    id: 1,
    slug: 'understanding-typescript',
    image: '/1.jpg',
    category: 'Programming',
    short_description:
      'A comprehensive guide to learning TypeScript and its features.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>

`,
    updated_at: '2024-10-11',
  },
  {
    title: 'JavaScript ES6 Features',
    id: 2,
    slug: 'javascript-es6-features',
    image: '/2.jpg',
    category: 'Programming',
    short_description:
      'Explore the new features introduced in ES6 for JavaScript.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>

`,
    updated_at: '2024-10-08',
  },
  {
    title: 'Mastering Async/Await in JavaScript',
    id: 3,
    slug: 'mastering-async-await',
    image: '/3.png',
    category: 'Programming',
    short_description:
      'Learn how to use async/await to handle asynchronous operations in JavaScript.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>

`,
    updated_at: '2023-08-11',
  },
  {
    title: 'Creating Interactive Forms with React',
    id: 4,
    slug: 'creating-react-forms',
    image: '/4.png',
    category: 'Programming',
    short_description:
      'Step by step guide to building interactive forms using React.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>

`,
    updated_at: '2024-02-10',
  },
  {
    title: 'Debugging JavaScript in the Browser',
    id: 5,
    slug: 'debugging-javascript-browser',
    image: '/1.jpg',
    category: 'Programming',
    short_description:
      'Tips and techniques for efficiently debugging JavaScript in the browser.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>

`,
    updated_at: '2024-02-08',
  },
  {
    title: 'Getting Started with Next.js',
    id: 6,
    slug: 'getting-started-with-nextjs',
    image: '/3.png',
    category: 'Web Development',
    short_description:
      'Learn how to build server-rendered React applications using Next.js.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>

`,
    updated_at: '2024-02-07',
  },
  {
    title: 'Responsive Web Design with CSS',
    id: 7,
    slug: 'responsive-web-design-css',
    image: '/2.jpg',
    category: 'Web Development',
    short_description:
      'Understand the principles of responsive web design using CSS.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>
`,
    updated_at: '2024-02-07',
  },
  {
    title: 'Exploring the JAMstack Architecture',
    id: 8,
    slug: 'exploring-jamstack',
    image: 'https://example.com/images/jamstack.jpg',
    category: 'Web Development',
    short_description:
      'Learn about JAMstack architecture and how to implement it in your projects.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>

`,
    updated_at: '2024-02-07',
  },
  {
    title: 'Building User Interfaces with Tailwind CSS',
    id: 9,
    slug: 'tailwind-css-interfaces',
    image: 'https://example.com/images/tailwind.jpg',
    category: 'Web Development',
    short_description:
      'Build beautiful user interfaces using Tailwind CSS without leaving your HTML.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>
`,
    updated_at: '2024-02-07',
  },
  {
    title: 'Creating Dynamic Web Applications with Angular',
    id: 10,
    slug: 'dynamic-web-apps-angular',
    image: 'https://example.com/images/angular.jpg',
    category: 'Web Development',
    short_description:
      'Learn to create dynamic web applications using Angular framework.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>
`,
    updated_at: '2024-02-07',
  },
  {
    title: 'CSS Grid Layout',
    id: 11,
    slug: 'css-grid-layout',
    image: 'https://example.com/images/css-grid.jpg',
    category: 'Design',
    short_description:
      'Master the CSS Grid Layout and create responsive web layouts easily.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>
`,
    updated_at: '2024-02-07',
  },
  {
    title: 'Color Theory for Web Design',
    id: 12,
    slug: 'color-theory-web-design',
    image: 'https://example.com/images/color-theory.jpg',
    category: 'Design',
    short_description:
      'Learn the basics of color theory and its application in web design.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>
`,
    updated_at: '2024-02-07',
  },
  {
    title: 'Typography in Web Design',
    id: 13,
    slug: 'typography-web-design',
    image: 'https://example.com/images/typography.jpg',
    category: 'Design',
    short_description:
      'Understand the importance of typography in web design and how to use it effectively.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>
`,
    updated_at: '2024-02-07',
  },
  {
    title: 'Wireframing for Web Projects',
    id: 14,
    slug: 'wireframing-web-projects',
    image: 'https://example.com/images/wireframing.jpg',
    category: 'Design',
    short_description:
      'Learn how to create effective wireframes for your web projects.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>`,
    updated_at: '2024-02-07',
  },
  {
    title: 'Creating Icon Sets for Web Applications',
    id: 15,
    slug: 'creating-icon-sets',
    image: 'https://example.com/images/icons.jpg',
    category: 'Design',
    short_description:
      'Design and implement icon sets for use in web applications.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>`,
    updated_at: '2024-02-07',
  },
  {
    title: 'Building REST APIs with Node.js',
    id: 16,
    slug: 'building-rest-apis-with-nodejs',
    image: 'https://example.com/images/nodejs.jpg',
    category: 'Backend Development',
    short_description:
      'Learn how to create RESTful APIs using Node.js and Express.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>`,
    updated_at: '2024-02-07',
  },
  {
    title: 'Introduction to GraphQL',
    id: 17,
    slug: 'introduction-graphql',
    image: 'https://example.com/images/graphql.jpg',
    category: 'Backend Development',
    short_description:
      'An overview of GraphQL and how to implement it in your applications.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>`,
    updated_at: '2024-02-07',
  },
  {
    title: 'Database Design Principles',
    id: 18,
    slug: 'database-design-principles',
    image: 'https://example.com/images/database.jpg',
    category: 'Backend Development',
    short_description:
      'Learn the principles of effective database design for web applications.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>`,
    updated_at: '2024-02-07',
  },
  {
    title: 'Authentication in Node.js Applications',
    id: 19,
    slug: 'authentication-nodejs',
    image: 'https://example.com/images/authentication.jpg',
    category: 'Backend Development',
    short_description:
      'Implementing user authentication in Node.js applications using JWT.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>`,
    updated_at: '2024-02-07',
  },
  {
    title: 'Serverless Architecture with AWS',
    id: 20,
    slug: 'serverless-architecture-aws',
    image: 'https://example.com/images/serverless.jpg',
    category: 'Backend Development',
    short_description:
      'Learn how to build serverless applications using AWS services.',
    content: `<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Beauty of Nature</h2>
  <p style="margin-bottom: 20px;">Nature is a perfect reflection of beauty and life. From the majestic mountains to the serene lakes, every element contributes to the harmony of the world. The intricate balance of ecosystems reminds us of the importance of preserving our environment.</p>
</div>
<div style="margin-bottom: 26px;">
  <h2 style="font-weight: bold; margin-bottom:12px">The Role of Species</h2>
  <p style="margin-bottom: 20px;">Various species inhabit these natural marvels, each playing a unique role in maintaining ecological balance. Birds, mammals, plants, and microorganisms form a complex web of life that is essential for our survival. Protecting these species ensures that future generations can experience the same wonders that we do today.</p>
</div>
<div style="text-align: center; margin-bottom: 24px; margin-top: 24px;">
  <img src="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" alt="javascript" style="max-width: 70%; height: auto; margin:auto" />
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Recreation and Relaxation</h2>
  <p style="margin-bottom: 20px;">In addition to environmental benefits, nature provides us with opportunities for recreation and relaxation. Hiking trails, scenic viewpoints, and tranquil parks offer a peaceful escape from the hustle and bustle of urban life. Spending time outdoors can significantly improve mental and physical well-being.</p>
</div>
<div style="margin-bottom: 20px;">
  <h2 style="font-weight: bold; margin-bottom:12px">Connecting with Nature</h2>
  <p style="margin-bottom: 20px;">Lastly, connecting with nature fosters a sense of responsibility towards our planet. It encourages us to adopt sustainable practices and advocate for conservation efforts. By appreciating the wonders of nature, we can inspire others to join us in protecting our home for years to come.</p>
</div>`,
    updated_at: '2024-02-07',
  },
]

export async function GET() {
  // Returning a JSON response with status and articles
  return NextResponse.json({
    status: 200,
    articles: articles,
  })
}
