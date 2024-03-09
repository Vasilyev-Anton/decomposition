import Item from "./Item"

interface TvChanel {
    time: string,
    name: string,
    chanel:string
}

interface Props {
    tvChanel : TvChanel[]
}

export default function Tv({tvChanel} : Props) {
    return (
        <div className="tv__wrapper">
            <a href="#">Телепрограмма</a>
            {tvChanel.map(tv => {return (
                <div className="tv__show">
                    <Item 
                        before={<span  style={{width:"30px"}}>{ tv.time }</span>}
                        text={ tv.name}
                        after={<span style={{color:"grey"}}>{" " + tv.chanel}</span>}
                    />
                </div>
            )})}
        </div>
    )
}
