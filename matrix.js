function generateMatrices() {
    createMatrix('The 1st Matrix', 'matrix1', document.getElementById('matrix1Rows').value, document.getElementById('matrix1Cols').value);
    createMatrix('The 2nd Matrix','matrix2', document.getElementById('matrix2Rows').value, document.getElementById('matrix2Cols').value);
}

const createMatrix = (title, containerId, rows, cols) => {
    let container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous content
    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            let input = document.createElement('input');
            input.type = 'number';
            input.value = Math.floor(Math.random() * 100); // Random value between 0 and 99
            td.appendChild(input);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    let caption = table.createCaption();
    caption.textContent = title;
    container.appendChild(table);
};

const showResult = (title, containerId, rows, cols, dataArray) => {
    let container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous content
    let table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            let span = document.createElement('span');
            // Calculate the index in the dataArray based on current row and column
            let index = i * cols + j;
            if (index < dataArray.length) {
                span.innerHTML = dataArray[index];
            }
            td.appendChild(span);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    let caption = table.createCaption();
    caption.textContent = title;
    container.appendChild(table);
};

const showResult2D = (title, containerId, dataArray) => {
	// dataArray is a 2D array
	// complete this function based on the showResult function
    let container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous content
    let table = document.createElement('table');

    for (let i = 0; i < dataArray.length; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < dataArray[0].length; j++) {
            let td = document.createElement('td');
            td.textContent = dataArray[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    let caption = table.createCaption();
    caption.textContent = title;
    container.appendChild(table);
}

function performOperation(operation) {
    let matrix1 = getMatrixData2D('matrix1');
    let matrix2 = getMatrixData2D('matrix2');
    console.log("1st Matrix",matrix1);
    console.log("2nd Matrix", matrix2);
    console.log("Operation", operation);
    // // Just a test result
    // let result = [1, 2, 3, 4, 5, 6, 7, 8];
    // Call your matrix calculation functions here
    // For example: if (operation === 'add') { addMatrices(matrix1, matrix2); }
	// prints suitable messages for impossible situation
    if (operation == 'add'){
        let matrix3add = addMatrices(matrix1, matrix2);
        if (matrix3add != -1){
            showResult2D('The Result', 'matrix3', matrix3add); // use suitable function for printing results
        }
    }
    if (operation == 'subtract'){
        let matrix3sub = subtractMatrices(matrix1, matrix2);
        if (matrix3sub != -1){
            showResult2D('The Result', 'matrix3', matrix3sub); // use suitable function for printing results
        }
    }
    if (operation == "multiply"){
        let matrix3mult = multiplyMatrices(matrix1, matrix2);
        if (matrix3mult != -1){
            showResult2D('The Result', 'matrix3', matrix3mult); // use suitable function for printing results
        }
    }
}

const getMatrixData1D = function (matrixId) {
    let matrixData = [];
    let inputs = document.querySelectorAll(`#${matrixId} input`);
    inputs.forEach(input => {
        matrixData.push(parseInt(input.value, 10));
    });
    return matrixData;
};

const getMatrixData2D = function (matrixId) {
    let matrixData = [];
    let rows = parseInt(document.getElementById(matrixId + 'Rows').value, 10);
    let cols = parseInt(document.getElementById(matrixId + 'Cols').value, 10);
    let inputs = document.querySelectorAll(`#${matrixId} input`);

    for (let i = 0; i < rows; i++) {
        let rowData = [];
        for (let j = 0; j < cols; j++) {
            // Calculate index in the flat list of inputs
            let index = i * cols + j;
            if (index < inputs.length) {
                rowData.push(parseInt(inputs[index].value, 10));
            } else {
                rowData.push(0); // Default value if input is missing
            }
        }
        matrixData.push(rowData);
    }
    return matrixData;
};


// Add your matrix calculation functions here
// The functions must check the posibility of calculation too.
function addMatrices(matrix1, matrix2){ 

    let rows1 = parseInt(document.getElementById('matrix1Rows').value, 10);
    let rows2 = parseInt(document.getElementById('matrix2Rows').value, 10);
    let cols1 = parseInt(document.getElementById('matrix1Cols').value, 10);
    let cols2 = parseInt(document.getElementById('matrix2Cols').value, 10);
    if (rows1 == rows2){
        if (cols1 == cols2){
            let matrix3 = [];
            for (let i = 0; i<rows1; i++){
                let rowData = [];
                for (let j = 0; j < cols1; j++){
                    rowData.push(matrix1[i][j] + matrix2[i][j]);
                }
                matrix3.push(rowData);
            }     
            return matrix3;
        }
        else{
            console.log("Unequal dimensions");
            return -1;
        }
    }
    else{
        console.log("Unequal dimensions");
        return -1;
    }
}
const subtractMatrices = function (matrix1, matrix2) { 
	// provide the code
    let rows1 = parseInt(document.getElementById('matrix1Rows').value, 10);
    let rows2 = parseInt(document.getElementById('matrix2Rows').value, 10);
    let cols1 = parseInt(document.getElementById('matrix1Cols').value, 10);
    let cols2 = parseInt(document.getElementById('matrix2Cols').value, 10);
    if (rows1 == rows2){
        if (cols1 == cols2){
            let matrix3 = [];
            for (let i = 0; i<rows1; i++){
                let rowData = [];
                for (let j = 0; j < cols1; j++){
                    rowData.push(matrix1[i][j] - matrix2[i][j]);
                }
                matrix3.push(rowData);
            }     
            return matrix3;
        }
        else{
            console.log("Unequal dimensions");
            return -1;
        }
    }
    else{
        console.log("Unequal dimensions");
        return -1;
    }
};
const multiplyMatrices = (matrix1, matrix2) => { 
	let rows1 = parseInt(document.getElementById('matrix1Rows').value, 10);
    let rows2 = parseInt(document.getElementById('matrix2Rows').value, 10);
    let cols1 = parseInt(document.getElementById('matrix1Cols').value, 10);
    let cols2 = parseInt(document.getElementById('matrix2Cols').value, 10);
    if (cols1 == rows2){
        let matrix3 = [];
        for (let i = 0; i<rows1; i++){
            let rowData = [];
            for (let j = 0; j < cols2; j++){
                let temp = 0;
                for (let x = 0; x < cols1; x++){
                    temp = temp + (matrix1[i][x] * matrix2[x][j]);
                }
                rowData.push(temp);
            }
            matrix3.push(rowData);
        } 
        return matrix3;
    }
    else{
        console.log("Unequal dimensions");
        return -1;
    }
};
