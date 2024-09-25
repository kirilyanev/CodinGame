const N = parseInt(readline());
const inputs = [];

for (let i = 0; i < N; i++) {
    const input = readline();
    inputs.push(input);
}

spreadsheetResolver(inputs);

function parseArgument(arg, cells) {
    if (arg.startsWith('$')) {
        // It's a reference, extract the index and return the resolved value of that cell.
        const refIndex = parseInt(arg.slice(1), 10);
        return resolveCell(refIndex, cells);
    } else {
        // It's a direct number, return it as an integer.
        return parseInt(arg, 10);
    }
}

function resolveCell(index, cells) {
    const cell = cells[index];

    // If the cell is already computed, return its value.
    if (cell.resolved !== undefined) {
        return cell.resolved;
    }

    const [operation, arg1, arg2] = cell.operation;
    let result;

    // Resolve the value based on the operation.
    switch (operation) {
        case 'VALUE':
            result = parseArgument(arg1, cells);
            break;
        case 'ADD':
            result = parseArgument(arg1, cells) + parseArgument(arg2, cells);
            break;
        case 'SUB':
            result = parseArgument(arg1, cells) - parseArgument(arg2, cells);
            break;
        case 'MULT':
            result = parseArgument(arg1, cells) * parseArgument(arg2, cells);
            break;
        default:
            throw new Error('Unknown operation');
    }

    // Catch edge case when result = -0 and parse it to be = 0
    if (Object.is(result, -0)) {
        result = 0
    };

    // Store the resolved value to avoid recomputing.
    cell.resolved = result;
    return result;
}

function spreadsheetResolver(inputs) {
    const cells = [];
    
    // Parse the input and initialize each cell.
    for (let i = 0; i < N; i++) {
        const parts = inputs[i].split(' ');
        cells.push({
            operation: parts,
            resolved: undefined  // To track resolved values
        });
    }

    // Resolve and print the value for each cell.
    for (let i = 0; i < N; i++) {
        console.log(resolveCell(i, cells));
    }
}
