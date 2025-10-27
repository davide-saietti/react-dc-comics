import comics from "./comics";

export default function ContentContainer(){
    return(
        <div className="content-card">

        {
           comics.map(comic =>(
            <div className="comic-item">
                <img className="comic-img" src={comic.thumb} alt={comic.title} />
                <h2>{comic.title}</h2>
                <p>{comic.price}</p>

            </div>
           ))  
        }        
           
        </div>
    )
}