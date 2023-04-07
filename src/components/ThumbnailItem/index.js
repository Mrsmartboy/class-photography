import './index.css'

const ThumbnailItem = props => {
  const {eachItem, onSelectThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachItem

  const onClickThumbnailItem = () => {
    onSelectThumbnail(id)
  }

  const ThumbnailItemClassName = isActive && 'opacity'
  return (
    <li className="thumbnail-item">
      <button type="button" onClick={onClickThumbnailItem} className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-img ${ThumbnailItemClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
