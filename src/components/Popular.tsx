interface Popular {
    category : string,
    text: string,
    link : string
}

interface Props {
    popular : Popular[]
}

export default function Popular({popular}: Props) {
    return (
        <div className="popular__wrapper">
            <a href="#">Посещяемое</a>
            <div className="popular">
                {popular.map(popular => {return (
                    <div>
                        <a href={popular.link}>{popular.category}</a>
                        <span>{" - " + popular.text}</span>
                    </div>
                )})}
            </div>
        </div>
    )
}
