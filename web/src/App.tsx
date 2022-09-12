interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
      <button>{ props.title }</button>
  )
}

function App() {
  return (
    <>
      <Button title="1"/>
      <Button title="2"/>
      <Button title="3"/>
    </>
  )
}

export default App
