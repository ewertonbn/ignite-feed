/* eslint-disable no-octal-escape */
import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './avatar'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className="mt-6 flex gap-4">
      <Avatar hasPrimary={false} src="https://github.com/ewertonbn.png" />
      <div className="flex-1">
        <div className="rounded-lg bg-gray-700 p-4">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="text-sm leading-[1.6]">
                Ewerton Bernardo
              </strong>
              <time
                dateTime="2024-04-30 00:50:00"
                title="11 de Maio às 20:18"
                className="text-xs leading-[1.6] text-gray-400"
              >
                Publicado há 1 hora
              </time>
            </div>
            <button
              title="Deletar comentário"
              className="rounded-sm text-gray-400 transition-colors hover:text-red-500"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>
          <p className="mt-4 text-gray-300">{content}</p>
        </div>
        <footer className="mt-4">
          <button
            onClick={handleLikeComment}
            className="flex items-center rounded-lg text-gray-400 transition-colors hover:text-green-300"
          >
            <ThumbsUp className="mr-2" />
            Aplaudir
            <span className="before:px-1 before:content-['\2022']">
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  )
}
