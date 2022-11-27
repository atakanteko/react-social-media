const Menu = ({ content }) => {
    return(
            content.map((item, index)=>{
                return(
                    <div className="item" key={index}>
                        <img src={item.image} alt={item.text} />
                        <span>{item.text}</span>
                    </div>
                )
            })
    )
}

export default Menu;