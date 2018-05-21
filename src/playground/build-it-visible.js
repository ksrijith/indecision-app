class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        })
    }

    render() {
        const detailsTemplate = <p>Hey, These are some details you can now see!</p>;
        return (
        <div>
             <h1>Visibility Toggle</h1>
             <button onClick={ this.handleToggleVisibility }>
                 { this.state.visibility ? 'Hide Details' : 'Show Details'}
             </button>
             {
                 this.state.visibility && detailsTemplate
             }
         </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));