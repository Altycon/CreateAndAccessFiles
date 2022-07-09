const fs = require('fs');

let fileText = fs.readFileSync('file.json');
let jsonParsed = JSON.parse(fileText);
console.log(jsonParsed);


class Cell{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

const createNewArrayFile = (fs)=>{
    const writeStream = fs.createWriteStream('file.json');
    const pathName = writeStream.path;
    
    const arr = [];
    for(let i = 0; i < 100; i++){
        const x = Math.random() * 100;
        const y = Math.random() * 300;
        const cell = new Cell(x,y);
        arr.push(cell);
    }
    
    // write each value of the array on the file breaking line
    //array.forEach(value => writeStream.write(`${value}\n`));

    writeStream.write(JSON.stringify(arr))
    // the finish event is emitted when all data has been flushed from the stream
    writeStream.on('finish', () => {
        console.log(`wrote all the array data to file ${pathName}`);
    });

    // handle the errors on the write process
    writeStream.on('error', (err) => {
        console.error(`There is an error writing the file ${pathName} => ${err}`)
    });

    // close the stream
    writeStream.end();
}
//createNewArrayFile(fs);

