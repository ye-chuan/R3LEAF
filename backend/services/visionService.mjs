import { spawn } from 'child_process';
import { join } from 'path';

// Function to run the Python script
function runPythonScript(systemMessage, userMessage) {
    return new Promise((resolve, reject) => {
        const rootPath = new File("").getAbsolutePath();
        const pythonPath = rootPath + "/.venv/bin/python3";
        const scriptPath = rootPath + "/services/vision.py";
        const pythonProcess = spawn(pythonPath, [join(__dirname, scriptPath), systemMessage, userMessage]);

        let output = '';
        let errorOutput = '';

        pythonProcess.stdout.on('data', (data) => {
            output += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            errorOutput += data.toString();
        });

        pythonProcess.on('close', (code) => {
            if (code !== 0) {
                reject(new Error(`Python script exited with code ${code}\n${errorOutput}`));
            } else {
                resolve(output);
            }
        });
    });
}

// Example usage
const systemMessage = "Your system message here";
const userMessage = "Your user message here";

runPythonScript(systemMessage, userMessage)
    .then(result => {
        console.log('Python script output:', result);
    })
    .catch(error => {
        console.error('Error running Python script:', error);
    });
