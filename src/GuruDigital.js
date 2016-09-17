import React from 'react';


const Hypers = React.createClass({
    propTypes: {
        width: React.PropTypes.number,
        backgroundColor: React.PropTypes.string,
        color: React.PropTypes.string,
    },
    getDefaultProps() {
        return {
            width: 90,
            backgroundColor: '#00b12b',
            color: '#fff'
        };
    },
    render: function () {

        const { width, color, backgroundColor } = this.props;
        const gridWidth = width / 9;
        const polygonPoints = [
            `${gridWidth * 2},${gridWidth * 2}`,
            `${gridWidth * 7},${gridWidth * 2}`,
            `${gridWidth * 7},${gridWidth * 3}`,
            `${gridWidth * 3},${gridWidth * 3}`,
            `${gridWidth * 3},${gridWidth * 6}`,
            `${gridWidth * 6},${gridWidth * 6}`,
            `${gridWidth * 6},${gridWidth * 5}`,
            `${gridWidth * 4},${gridWidth * 5}`,
            `${gridWidth * 4},${gridWidth * 4}`,
            `${gridWidth * 7},${gridWidth * 4}`,
            `${gridWidth * 7},${gridWidth * 7}`,
            `${gridWidth * 2},${gridWidth * 7}`,
        ];

        const rect = <rect x={0} y={0} width={width} height={width}  fill={backgroundColor} strokeWidth="0" />;
        const polygon = <polygon points={polygonPoints.join(' ') }  fill={color} strokeWidth="0"   />;

        return (
            <svg width={width} height={width}>
                {rect}
                {polygon}
            </svg>
        );
    }
});

export default Hypers;
