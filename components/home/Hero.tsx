

function Hero(props: { bkg: { src: string }; label: string; children: any}) {
  const sectionStye = {
    backgroundImage: `url(${props.bkg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  }
  return (
    <section
      role="contentinfo"
      aria-label={props.label}
      className="h-screen"
      style={sectionStye}
    >
      <div className="flex items-center justify-center h-screen">
        <div>{props.children}</div>
      </div>
    </section>
  )
}

export default Hero
