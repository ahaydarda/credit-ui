
export function calculateGridTemplateColumns (columns ) {
    const calculateMinMax = ({width,unit}) =>{
        const fr = unit? unit: (10/columns.length).toFixed(2);
        return `minmax(${width}px,${fr}fr)`;
    }
    if(columns &&columns.length>0){
        return columns && columns.map(calculateMinMax).join(" ")
    }
}

