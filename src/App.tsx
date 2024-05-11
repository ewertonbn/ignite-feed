import { Header } from './components/header'
import { Post, PostType } from './components/post'
import { Sidebar } from './components/sidebar'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/ewertonbn.png',
      name: 'Ewerton Bernardo',
      role: 'CEO @EBN Tech',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-05-07 17:55:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-05-06 01:30:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'http://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-04-04 17:55:00'),
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className="mx-auto my-8 grid max-w-[70rem] grid-cols-1 items-start gap-8 px-4 md:grid-cols-[256px,_1fr]">
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </>
  )
}
