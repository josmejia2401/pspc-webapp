import React from 'react';
import './style.css';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: null,
            idIterval: 0,
            idTimeout: 0,
        }
        this.addItem = this.addItem.bind(this);
    }

    componentDidMount = () => {
        const idIterval = setInterval(() => this.proccessCurrentItem(), 300);//actualiza la vista
        this.setState({ idIterval: idIterval });
    }

    //componentWillUnmount = () => {
    //clearInterval(this.state.idIterval);
    //clearTimeout(this.state.idTimeout);
    //}

    addItem(item) {
        this.state.items.push(item);
        this.setState({ items: this.state.items });
        if (this.state.currentItem === null) {
            this.proccessCurrentItem();
        }
    }

    async deleteCurrentItem() {
        const { timeout = 3_000 } = this.props;
        const idTimeout = setTimeout(() => this.setState({ currentItem: null }), timeout);
        this.setState({ idTimeout: idTimeout });
    }

    proccessCurrentItem = () => {
        if (this.state.items && this.state.items.length > 0) {
            if (this.state.currentItem === null) {
                const currentItem = this.state.items.pop();
                this.setState({ currentItem: currentItem });
                this.deleteCurrentItem();
            }
        }
    }

    hideToast(e) {
        const idTimeout = setTimeout(() => this.setState({ currentItem: null }), 0);
        this.setState({ idTimeout: idTimeout });
        clearTimeout(this.state.idTimeout);
    }

    render() {
        const { currentItem } = this.state;
        if (currentItem !== null) {
            const icon = currentItem.typeToast === 'error' ? 'error' : (currentItem.typeToast === 'info' ? 'info' : 'warning');
            const classLoad = currentItem !== null ? "show" : "hidden";
            const typeIconClass = `${currentItem.typeToast}-icon`
            return (<div className={`wrapper p-5 rounded ${classLoad} `} onClick={(e) => this.hideToast(e)}>
                <div className={`toast ${currentItem.typeToast} ${classLoad} `}>
                    <div className="content">
                        <div className={`icon ${typeIconClass}`}><span className="material-icons">{icon}</span></div>
                        <div className="details">
                            <span>{currentItem.title}</span>
                            <p>{currentItem.text}</p>
                        </div>
                    </div>
                    <div className={`icon`} onClick={(e) => this.hideToast(e)}><span className="material-icons">close</span></div>
                </div>
            </div>);
        }
        return null;
    }
}

export default Container;