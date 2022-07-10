import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';

import './styles/global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl : 'https://pps.whatsapp.net/v/t61.24694-24/228885360_5119462608069049_755812443783927428_n.jpg?ccb=11-4&oh=443ae85d69ea7d817227e32f01aac8ce&oe=62CEE939',
      name: 'Gabriel Naurath',
      role: 'UI/UX Designer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'gabrielnaurath.design/doctorcare'},
    ],
    publishedAt: new Date('2022-07-02 15:00:10')
  },
  //Post 2
  {
    id: 2,
    author: {
      avatarUrl : 'https://pps.whatsapp.net/v/t61.24694-24/239969395_403844811751397_7808656334755286721_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwIannWWRyFCx5nlVZ0qZUi1xV305rRFEgOQBKE32u7NA&oe=62D7CD30',
      name: 'Caio Paiva',
      role: 'Dev Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋',},
      { type: 'paragraph', content:'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 '},
      {type: 'link', content:'caiopaiva.design'},
    ],
    publishedAt: new Date('2022-07-05 17:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
                <Post
                  key={post.id} 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
            )
          })}
        </main>
      </div>
    </div>
  )
}


