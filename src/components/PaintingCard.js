import React from 'react';
import './PaintingCard.css';

function PaintingCard({ painting }) {
    return (
        <div className="painting-card">
            <img
                src={painting.imageUrl}
                alt={painting.title}
                className="painting-image"
            />
            <div className="painting-info">
                <h3>{painting.title}</h3>
                <h4>{painting.artist}</h4>
                <p className="year">{painting.year}</p>
                <p className="description">{painting.description}</p>
            </div>
        </div>
    );
}

export default PaintingCard;