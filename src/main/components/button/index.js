import React from 'react';
import './style.css';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
        this.handleOnPress = this.handleOnPress.bind(this);
    }

    componentDidMount() {

    }

    async handleOnPress(e, ...params) {
        const { onPress } = this.props;
        if (onPress) {
            this.setState({ isLoading: true });
            await onPress(e, params);
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { isLoadingMain, type, title, className} = this.props;
        if (this.state.isLoading || isLoadingMain) {
            return (<button className={`${className}`} type="button" disabled={true}>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="visually-hidden">Loading...</span>
            </button>);
        }
        return (<button className={`${className}`} type={type ? type : "button"} onClick={this.handleOnPress} disabled={false}>
            {title}
        </button>);
    }
}

export default Container;