import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { CommentForm, PostContainer } from "./styles";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([1, 2]);

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, comments.length + 1]);
  }

  return(
    <PostContainer>
      <header>
        <div className="author">
          <Avatar src={author.avatarUrl} />
          <div className="authorInfo">
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="content">
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p>{item.content}</p>
          } else if (item.type === 'link') {
            return <p><a href="#">{item.content}</a></p>
          }
        })}
      </div>

      <CommentForm onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        
        <textarea 
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </CommentForm>

      <div className="commentList">
        {comments.map(comment => {
          return <Comment />
        })}
      </div>
    </PostContainer>
  )
}