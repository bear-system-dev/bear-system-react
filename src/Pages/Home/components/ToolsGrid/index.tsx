import {
  gridIconElements,
  gridTextElements,
} from '../../../../utils/helpers/arrays'
import './styles.css'

export function ToolsGrid() {
  return (
    <section className="tools">
      <div className="tools__grid">
        {gridTextElements.map((item) => {
          return (
            <div key={item.div} className={'tools__grid--call-to-action'}>
              <h2>{item.title}</h2>
              <h3>{item.subtitle}</h3>
            </div>
          )
        })}
        {gridIconElements.map((item) => {
          return (
            <div key={item.div} className={`tools__grid--icon div${item.div}`}>
              <img src={item.icon} alt={item.icon} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
