import { FlavorImg } from "./FlavorImg";

export function Label({ title, subtitle, description, weigth }) {
  return (
    <div>
      <header>
        { title }
      </header>
      <main>
        <section>{ subtitle }</section>
        <section>
          <FlavorImg />
        </section>
      </main>
      <footer>
        <div>{ description }</div>
        <div>{ weigth }</div>
      </footer>
    </div>
  )
}