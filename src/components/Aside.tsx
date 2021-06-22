import IlustrationImg from '../assets/images/illustration.svg'
import '../styles/aside.scss'


export const Aside = () => {
  return (
    <aside>
      <img src={IlustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>Tire suas dúvidas da sua audiência em tempo real.</p>
    </aside>
  )
}


