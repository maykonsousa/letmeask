import * as Imports from '../imports'
import '../styles/newRoom.scss'


export const NewRoom = () => {
  const { user } = Imports.useContext(Imports.AuthContext)
  return (
    <div id="new-room">
      <Imports.Aside />
      <main>
        <div className="main-content">
          <img src={Imports.LogoImg} alt="Letmeask" />
          <h1> {user?.name} </h1>
          <h2>Crie uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da Sala"
            />
            <Imports.GenericButton type="submit">
              Entrar na sala
            </Imports.GenericButton>
          </form>

          <p>Quer entrar em uma sala existente? <Imports.Link to="/">Clique aqui</Imports.Link> </p>
        </div>
      </main>

    </div>
  )
}


