function App() {
  return (
    <>
      <h1 id='hero'>Image Generator</h1>
      <div>
        <input id='text'></input>
        <button id='btn'><i class="fa-solid fa-arrow-up"></i></button>
      </div>
      <div>
        <button>delete</button>
        <button>download</button>
      </div>
      <hr/>
      <div>
        <img src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'></img>     
      </div>
    </>
  )
}
export default App