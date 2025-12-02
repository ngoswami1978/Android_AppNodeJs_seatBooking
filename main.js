const back = require('androidjs').back;
const fs = require("fs");
const path = require("path");

back.on("hello from front", function(){
	back.send("hello from back", "Hello from Android JS");
});


function executeTask() {
    const timestamp = new Date().toLocaleString();
    //const message = `⏰ Task executed at: ${timestamp}`;

    //const storagePath = path.join(process.cwd(), "seatbook.json");
    const filePath = path.join(__dirname, "www", "seatbook.json");    
     //const message = `⏰ Task executed at: ${assetPath}`;
     const jsonContent = readJsonFile(filePath);     
	  const message = {
          time: timestamp,
          data: jsonContent,
          filePth: filePath
      };

    // Send message to frontend
    back.send("task-response", message);

    // Create or append log file
    // const logPath = path.join(__dirname, "tasklog.txt");
    // fs.appendFileSync(logPath, message + "\n");
    // console.log(message);
}
// Run once immediately
executeTask();
// Run every 20 seconds
setInterval(executeTask, 20000);

function readJsonFile(filePath) {
    try {
        //const filePath = path.join(__dirname, "seatbook.json");
        if (!fs.existsSync(filePath)) {
            console.log("⚠ JSON file not found");
            return "JSON file not found";
        }

        const jsonData = fs.readFileSync(filePath, "utf8");
        return JSON.parse(jsonData);
    } catch (err) {
        console.log("❌ Error reading JSON:", err);
        return "Error reading JSON";
    }
}


console.log("🚀 Android JS Background Task Running...");