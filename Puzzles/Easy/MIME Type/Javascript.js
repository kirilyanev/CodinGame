const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.
const mimeTypes = {};
const extensions = [];
const result = [];
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0].toLowerCase(); // file extension
    const MT = inputs[1]; // MIME type.

    if (!mimeTypes[EXT]) {
        extensions.push(`.${EXT}`);
        mimeTypes[`.${EXT}`] = MT;
    }
}
for (let i = 0; i < Q; i++) {
    const FNAME = readline(); // One file name per line.
    
    const regex = /.\w+$/gmi;
    const fileEXT = FNAME.match(regex) ? FNAME.match(regex)[0].toLowerCase() : null;
 
    if (extensions.includes(fileEXT)) {
        result.push(mimeTypes[fileEXT]);
    } else {
        result.push("UNKNOWN");
    }
}

// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
console.log(result.join('\n'));
