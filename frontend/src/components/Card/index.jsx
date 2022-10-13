import { Container } from "./styles";

import Tag from "../Tag";
import Rating from "../Rating";

import { Link } from "react-router-dom";

export default function Card({data, ...rest}) {
    return (
        <Link to="/movie">
            <Container {...rest}>
                <h3>{data.title}</h3>

                <Rating number={data.rating} />

                <p>
                    {data.description}
                </p>
                
                {
                    data.tags &&
                    <div className="tags">
                        {data.tags.map(tag => <Tag title={tag.name} key={tag.key}/>)}
                    </div>
                }
            </Container>
        </Link>
    )
}

