import { Container } from "./styles";

import Tag from "../Tag";
import Rating from "../Rating";


export default function Card({data, ...rest}) {
    return (
            <Container {...rest}>
                <h3>{data.title}</h3>

                <Rating number={data.rating} />

                {
                    data.description &&
                    <p>
                    {data.description}
                    </p>
                }

                
                
                {
                    data.tags &&
                    <div className="tags">
                        {data.tags.map(tag => <Tag title={tag.name} key={tag.key}/>)}
                    </div>
                }
            </Container>
    )
}

