
const NewsItem = ({title, description, src, url}) => {
  return (
<div className="card bg-dark text-light mb -3 e-inline-block my-3 mx-3 px-4 px-2" style={{maxWidth: "345px"}}>
  <img src={src} style = {{height: "200px", width: "360px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Canadian News, and current world issues."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem