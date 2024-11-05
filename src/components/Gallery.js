import React from 'react';
import PaintingCard from './PaintingCard';
import { paintings } from '../data/paintings';
import './Gallery.css';

function Gallery() {
    return (
        <div className="gallery">
            <h2 className="gallery-title">Oil Painting</h2>
            <div className="paintings-grid">
                {paintings.map(painting => (
                    <PaintingCard
                        key={painting.id}
                        painting={painting}
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;