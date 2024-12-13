import clsx from 'clsx'

const Button = ({ icon, children, href, containerClassName, onClick }) => {
    const Inner = () => (
        <>
            <span>
                <span>Marker</span>
                {icon && (
                    <img src={icon} alt="circle" className='size-10 mr-5 object-contain z-10' />
                )}

                <span>
                    {children}
                </span>
            </span>
        </>
    )

  return href ? (
    <a 
        className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group', containerClassName)}
        href={href}    
    >
        <Inner />
    </a>
  ) : (
    <button 
        className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group')}
        onClick={onClick}
    >
      <Inner />
    </button>
  )
}

export default Button
