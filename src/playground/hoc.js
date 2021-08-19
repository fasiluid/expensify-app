import React from "react";
import ReactDOM from "react-dom";

const info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWrapping = (WrapperComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share.</p>}
            <WrapperComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrapperComponent) => {
    return (props)  => (
        <div>
            {props.isAuthenticated ? <WrapperComponent {...props} /> : <div>This is not Authenticated</div>}
        </div>
    )
}

const AdminInfo = withAdminWrapping(info);
const AuthInfo = requireAuthentication(info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details!" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details!" />, document.getElementById('app'));