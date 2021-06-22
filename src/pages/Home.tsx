import * as Imports from '../imports'

import '../styles/auth.scss'



export const Home = () => {
  const { user, signWithGoogle } = Imports.useContext(Imports.AuthContext)
  const history = Imports.useHistory()

  async function handleCreateRoom() {
    if (!user) {
      await signWithGoogle()
    }
    history.push('/rooms/new')
  }
  return (
    <div id="page-auth">
      <Imports.Aside />
      <main>
        <div className="main-content">
          <img src={Imports.LogoImg} alt="Letmeask" />
          <button
            className="create-room-button"
            onClick={() => handleCreateRoom()}
          >
            <img src={Imports.GoogleIconImg} alt="Logo Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Imports.GenericButton type="submit">
              Entrar na sala
            </Imports.GenericButton>
          </form>
        </div>
      </main>

    </div>
  )
}


