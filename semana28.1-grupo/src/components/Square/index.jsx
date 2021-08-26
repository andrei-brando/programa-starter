import React from "react";
import { SquareComponentStyle, ImgComponentStyle } from "./style";

export default function Square(props) {

    return (
        <React.Fragment>
            <SquareComponentStyle>
                {
                    props.urlImage != null
                        ? <ImgComponentStyle src={props.urlImage} alt="" />
                        : <p>
                            Pellentesque in ipsum id orci porta dapibus.
                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                            Nulla quis lorem ut libero malesuada feugiat.
                            Curabitur aliquet quam id dui posuere blandit.
                        </p>
                }
            </SquareComponentStyle>
        </React.Fragment>
    );
}