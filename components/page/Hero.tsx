

function Hero(props: { bkg: { src: string }; label: string; children: any}) {
  const sectionStye = {
    backgroundImage: `url(${props.bkg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <section
      role="contentinfo"
      aria-label={props.label}
      className="px-8"
      style={sectionStye}
    >
      <div className="flex items-center justify-center py-40 lg:py-60">
        <div>{props.children}</div>
      </div>
    </section>
  )
}

export default Hero
