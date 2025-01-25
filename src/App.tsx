import { Post, PostType } from './components/Post'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/srmatheusmaciel.png',
      name: 'Matheus Maciel',
      role: 'Java Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa utilizando React.js 🚀' },
      { type: 'link', content: 'https://www.linkedin.com/in/srmatheusmaciel/' },
    ],
    publishedAt: new Date('2024-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/05/thiago-silva-e1715092038211.jpeg?w=1200&h=900&crop=1',
      name: 'Thiago Silva',
      role: 'Defender'
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal' },
      { type: 'paragraph', content: 'Esse ano iremos ganhar a sulamericana e a copa do Brasil' },
      { type: 'link', content: 'instagram.com/thiagosilva' },
    ],
    publishedAt: new Date('2025-01-10 20:00:00'),
  },
];


export function App() {


  return (

    <div>

      <Header />


      <div className={styles.wrapper}>
      <Sidebar />
        <main>
        {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
