import React from "react";

export default function CategoryBar({ categories, activeCategory, onSelectCategory }) {
    return (
        <div className="category-bar-wrapper">
            <div className="category-scroll">
                {/* btn 'todos' */}
                <button
                    className={`cat-pill ${activeCategory === 'all' ? 'active' : ''}`}
                    onClick={() => onSelectCategory('all')}
                >
                    Todos
                </button>

                {/* btns dinámicos */}
                {categories.map((cat) => (
                    <button
                    key={cat}
                    className={`cat-pill ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => onSelectCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
};