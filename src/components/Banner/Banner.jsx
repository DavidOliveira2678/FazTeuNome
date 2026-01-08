import './banner.css';

export default function Banner({color, align, direction, children}){
    return(
        <div style={{background: color, textAlign: align, flexDirection: direction}} className='banner-container'>
            { children }
        </div>
    )
}