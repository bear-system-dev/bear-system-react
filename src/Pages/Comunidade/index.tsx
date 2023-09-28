import './styles.css'

export function Comunidade() {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 5rem)',
      }}
    >
      <h1
        style={{
          fontSize: '8rem',
          fontWeight: 800,
          padding: '4rem',
        }}
      >
        Em Construção
      </h1>
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 600,
        }}
      >
        em breve novidades
      </h2>
    </div>
  )
}
