import cafeHelenaContrastLogo from '../../../../assets/images/clients-logos/cafe-helena-contrast.svg'
import cafeHelenaLogo from '../../../../assets/images/clients-logos/cafe-helena.svg'
import casaNapoletanaLogo from '../../../../assets/images/clients-logos/casa-napoletana.svg'
import evolutionLogo from '../../../../assets/images/clients-logos/evolution.svg'
import unquietFeetContrastLogo from '../../../../assets/images/clients-logos/unquiet-feet-contrast.svg'
import unquietFeetLogo from '../../../../assets/images/clients-logos/unquiet-feet.svg'
import vanattoWhiteLogo from '../../../../assets/images/clients-logos/vanatto-white.svg'
import vanattoLogo from '../../../../assets/images/clients-logos/vanatto.svg'
import { useTheme } from '../../../../hooks/useTheme/useTheme'
import './styles.css'

export function ClientsColumn() {
  const { theme } = useTheme()

  return (
    <div className="clients-container">
      <h2 className="clients__title">Alguns de nossos parceiros</h2>
      <div className="client-logo">
        <img
          src={theme === 'light' ? cafeHelenaContrastLogo : cafeHelenaLogo}
          alt=""
          className="client-logo__image"
        />
        <img src={casaNapoletanaLogo} alt="" className="client-logo__image" />
        <img
          src={theme === 'light' ? unquietFeetContrastLogo : unquietFeetLogo}
          alt=""
          className="client-logo__image"
        />
        <img src={evolutionLogo} alt="" className="client-logo__image" />
        <img
          src={theme === 'light' ? vanattoLogo : vanattoWhiteLogo}
          alt=""
          className="client-logo__image"
        />
      </div>
      <div className="clients__background"></div>
    </div>
  )
}
