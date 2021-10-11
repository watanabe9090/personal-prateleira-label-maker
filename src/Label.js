export function Label({ title, subtitle, description, weigth }) {
  return (
    <div>
      <header>
        { title }
      </header>
      <div>
        { subtitle }
      </div>
      <footer>
        <div>{ description }</div>
        <div>{ weigth }</div>
      </footer>
    </div>
  )
}