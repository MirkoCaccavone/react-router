// import di PostForm.jsx per mostrarlo nella pagina corrente
import PostForm from "../components/PostForm"

export default function ListPost() {
    return (
        <>
            <div>
                <h1>
                    AGGIUNGI IL TUO NUOVO POST
                </h1>
            </div>
            <PostForm />
        </>
    )
}