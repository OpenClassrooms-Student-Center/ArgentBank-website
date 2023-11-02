import React from "react";

import NotFound from "../../pages/NotFound";

class ErrorBoundary extends React.Component{
    state = {hasError: false}

    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error, info){
        console.log(error, info)
    }

    render(){
        if(this.state.hasError){
            return <NotFound />
        }
        return this.props.children
    }
}

export default ErrorBoundary