import { PrimeiroComponente } from './components/PrimeiroComponente';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to Next.js!</h1>
        <PrimeiroComponente mensagem="Olá, mundo!" />
        <PrimeiroComponente  mensagemBotao="Segundo botão clicado!" />

      </main>
    </div>

  )
}
