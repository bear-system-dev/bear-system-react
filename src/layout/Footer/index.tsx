import { DiscordLogo, GithubLogo, PawPrint } from '@phosphor-icons/react'
import './styles.css'

export function Footer() {
  return (
    <footer className="footer">
      <div>
        Desenvolvido por Bear System <PawPrint width={20} /> 2023.
      </div>
      <div className="footer__links">
        <div className="footer__link">
          <a href="https://discord.gg/DkNKUfsC">
            <span className="sr-only">Discord</span>
            <DiscordLogo className="link__logo" />
          </a>
        </div>

        <div className="footer__link">
          <a href="https://github.com/bear-system-dev">
            <span className="sr-only">GitHub</span>
            <GithubLogo className="link__logo" />
          </a>
        </div>
      </div>
    </footer>
  )
}
