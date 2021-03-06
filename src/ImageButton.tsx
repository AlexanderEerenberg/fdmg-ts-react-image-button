import * as React from 'react';

/**
 * Renders an image with an onClick hook for parent component.
 */
export default class ImageButton extends React.Component {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
        console.info('ImageButton component', props);
    }

    componentDidMount() {
        console.info('ImageButton mounted');
    }
        
    componentWillUnmount() {
        console.info('ImageButton will unmount');
    }

    componentWillReceiveProps(nextProps) {
        console.info('ImageButton next props', nextProps);
    }

    render() {
        return (
            <img 
                onClick={this.props.onClick}
                src={this.props.src}
                alt={this.props.alt}
                className={this.props.className} 
            />
        );
    }
}
