/* eslint-disable array-callback-return */
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar } from './avatar'
import { Comment } from './comment'

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostType {
  id: number
  author: Author
  publishedAt: Date
  content: Content[]
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState<string[]>([] as string[])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeleteOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className="mt-8 rounded-lg bg-gray-800 p-10 first:mt-0">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={post.author.avatarUrl} />
          <div className="flex flex-col">
            <strong className="leading-[1.6] text-gray-100">
              {post.author.name}
            </strong>
            <span className="text-sm leading-[1.6] text-gray-400">
              {post.author.role}
            </span>
          </div>
        </div>
        <time
          dateTime={post.publishedAt.toISOString()}
          title={publishedDateFormatted}
          className="text-sm text-gray-400"
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="mt-6 leading-[1.6] text-gray-300">
        {post.content.map((line) => {
          if (line.type === 'paragraph') {
            return (
              <p key={line.content} className="mt-4">
                {line.content}
              </p>
            )
          } else if (line.type === 'link') {
            return (
              <p key={line.content} className="mt-4">
                <a
                  href="#"
                  className="font-bold text-green-500 hover:text-green-300"
                >
                  {line.content}
                </a>
              </p>
            )
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className="mt-6 w-full border-t border-gray-600 pt-6"
      >
        <strong className="leading-[1.6] text-gray-100">
          Deixe seu feedback
        </strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          className="mt-4 h-24 w-full resize-none rounded-lg border-0 bg-gray-900 p-4 leading-[1.6] text-gray-100"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button
            type="submit"
            className="not:disabled:hover:bg-green-300 mt-4 cursor-pointer rounded-lg bg-green-500 px-6 py-4 font-bold text-white transition-colors  disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className="mt-8">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
