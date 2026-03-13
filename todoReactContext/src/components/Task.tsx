export const Task = ({description, done}:{description: string, done: boolean}) => {

  const solidBackGroundColor = `backgroundColor:{{oklch(64.6% 0.222 41.116)}}`;


  return (
  <div
    className="m-10 text-2xl flex border rounded-md bg-gray-500 p-5 w-[400px]"
  >
    <button
      className=" rounded-full w-10 h-10 border border-orange-600 cursor-pointer"
      type="button"
      onClick={() => {
      }}
    >
    </button>
        <h1
      className="ml-5"
    >
      {description}
    </h1>
  </div>
  )
}