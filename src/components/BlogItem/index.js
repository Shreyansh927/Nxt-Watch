// Write your JS code here
const BlogItem = props => {
  const {eachDetail} = props
  const {title, publishedDate, description} = eachDetail

  return (
    <li>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      <p>{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
