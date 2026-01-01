export const Arrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <div>
      <button onClick={onClick}>
        <img
        className="arrowImg" src="https://cdn.pixabay.com/photo/2012/04/28/18/59/left-44038_1280.png"
        alt="an arrow symbol" />
      </button>
    </div>
  )
}