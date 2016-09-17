import React from 'react';

const Hypers = React.createClass({
    propTypes: {
        width: React.PropTypes.number,
        color: React.PropTypes.string,
        backgroundColor: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            width: 90,
            color: '#00c3ee',
            backgroundColor: 'transparent'
        };
    },
    render: function () {

        const { width, color, backgroundColor } = this.props;
        const gridWidth = width / 9;


        const polygonPoints = [
            `${gridWidth * 2},${gridWidth * 2}`,
            `${gridWidth * 3},${gridWidth * 2}`,
            `${gridWidth * 3},${gridWidth * 4}`,
            `${gridWidth * 7},${gridWidth * 4}`,
            `${gridWidth * 7},${gridWidth * 7}`,
            `${gridWidth * 6},${gridWidth * 7}`,
            `${gridWidth * 6},${gridWidth * 5}`,
            `${gridWidth * 3},${gridWidth * 5}`,
            `${gridWidth * 3},${gridWidth * 7}`,
            `${gridWidth * 2},${gridWidth * 7}`,
        ];

        const rect = <rect x={gridWidth / 2} y={gridWidth / 2} width={gridWidth * 8} height={gridWidth * 8} stroke={color} fill={backgroundColor} strokeWidth={gridWidth} />;
        const dot = <rect x={gridWidth * 6} y={gridWidth * 2} width={gridWidth} height={gridWidth}  fill={color} strokeWidth="0" />;
        const polygon = <polygon points={polygonPoints.join(' ') }  fill={color} strokeWidth="0"   />;

        return (
            <svg width={width} height={width}>
                {rect}
                {dot}
                {polygon}
            </svg>
        );
    }
});

export default Hypers;
