import { useBooks } from '../context/useBooks'
import './FavoriteButton.css'

function FavoriteButton({ bookId }) {
  const { isFavorite, toggleFavorite } = useBooks()
  const favorited = isFavorite(bookId)

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(bookId)
  }

  return (
    <button
      onClick={handleClick}
      className={`favorite-button ${favorited ? 'favorited' : ''}`}
      aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      {favorited ? '❤️' : '🤍'}
    </button>
  )
}

export default FavoriteButton

