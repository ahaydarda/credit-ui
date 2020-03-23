import React from "react";

export function CollectionRenderer({collection, itemRender, children}) {
    const ui = typeof children === 'function' ? children(collection) : children;
    if(ui ===undefined && !collection ) {
        return null;
    }
    return ui ? ui : (collection && collection.map(itemRender));
}
