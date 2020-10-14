import React from "react";
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
margin: 0 auto;
display: flex;
align-items: center;
  border-color: red;
`;

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div style={{ margin: "0 auto" }} className="sweet-loading">
                <HashLoader
                    css={override}
                    size={50}
                    color={"red"}
                    loading={this.state.loading}
                />
            </div>
        );
    }
}
export default Spinner;