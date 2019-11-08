import React, { Component } from 'react'

import './style.css'
import profile from '../../assets/profile.png'

import Post from '../Post'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "João Amaral",
          avatar: profile
        },
        date: "04 Jun 2019",
        content: "Crie uma aplicação do zero utilizando Webpack, Babel, Webpack Dev Server e ReactJS.",
        comments: [
          {
            id: 1,
            author: {
              name: "Estevão Fernandes",
              avatar: profile
            },
            content: "Nessa aplicação você irá desenvolver uma interface semelhante com a do Facebook utilizando React."
          },
          {
            id: 2,
            author: {
              name: "Maria Thomé",
              avatar: profile
            },
            content: "Nessa aplicação você irá desenvolver uma interface semelhante com a do Facebook utilizando React."
          },
          {
            id: 3,
            author: {
              name: "Fernando Costa",
              avatar: profile
            },
            content: "As informações contidas na interface são estáticas e não precisam refletir nenhuma API REST ou back-end."
          },
        ]
      },
      {
        id: 2,
        author: {
          name: "Thabita Gertrudes",
          avatar: profile
        },
        date: "04 Jun 2019",
        content: "Header: Responsável por exibir a logo e o link para acessar o perfil.",
        comments: [
          {
            id: 1,
            author: {
              name: "Mercedes Romero",
              avatar: profile
            },
            content: "PostList: Responsável por armazenar os dados da listagem de post, esses dados devem ficar dentro do state do componente e não em uma variável comum."
          },
          {
            id: 2,
            author: {
              name: "Diego Cabral",
              avatar: profile
            },
            content: "Post: Responsável por exibir os dados do post, esses dados devem vir através de uma propriedade recebida do componente PostList."
          },
          {
            id: 3,
            author: {
              name: "Diego Cabral",
              avatar: profile
            },
            content: "Comment: Responsável por exibir um comentário. Os dados do comentário virão por uma propriedade do componente. Dentro do componente Post você terá um novo .map para listar os comentários do post."
          },
        ]
      },
    ]
  }

  render() {
    const { posts } = this.state

    return (
      <div id="post-list">
        { posts.map(post => <Post key={post.id} post={post} />) }
      </div>
    )
  }
}

export default PostList
