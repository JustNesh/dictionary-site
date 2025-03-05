export default function properlyFormatEntries(array, whiteSpaceFirstChar) {
    let formattedEntries = []
    
    array.forEach((item)=>{
        let charArray = []
        let whiteSpaceItem
        whiteSpaceFirstChar ? whiteSpaceItem = ` ${item}` :  whiteSpaceItem = `${item}`;
        for (let i=0; i < whiteSpaceItem.length;i++) {
            if (whiteSpaceItem[i-1] === " "){
                charArray.push(whiteSpaceItem[i].toUpperCase())
            } else {                
            charArray.push(whiteSpaceItem[i])}
        }
        let formattedEntry = charArray.join('');
        formattedEntries.push(formattedEntry);
    })
        return formattedEntries
    }