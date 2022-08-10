import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import { CommentContainer } from "./styles";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    })
  }

  return (
    <CommentContainer>
      <Avatar 
        hasBorder={false}
        src="https://github.com/ewertonbn.png" 
        alt="" 
      />

      <div className="commentBox">
        <div className="commentContent">
          <header>
            <div className="authorAndTime">
              <strong>Ewerton Bernardo</strong>
              <time title="08 de Junho às 23:30h" dateTime="2022-06-08 23:30:00">Cerca de 1 hora atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </CommentContainer>
  );
}