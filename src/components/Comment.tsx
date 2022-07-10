import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment}: CommentProps){
    // Criando estado de Likes
    const [likeCount, setLikeCount] = useState(0)    
    // Deletando um comentário
    function handleDeleteComment(){
        onDeleteComment(content)
    }
    // Função para contagem de Likes
    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/WellersonDouglas.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wellerson Douglas</strong>
                            <time title='02 de Julho às 15:00h' dateTime='2022-07-02 15:00:10'>Cerca de   1h atrás</time>
                        </div>

                        <button
                        onClick={handleDeleteComment}
                        title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Curtidas <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}