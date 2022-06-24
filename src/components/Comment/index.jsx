import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import { CommentContainer } from "./styles";

export function Comment() {
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

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </CommentContainer>
  );
}