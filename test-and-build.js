const { exec } = require("child_process");

// Function to run a command
function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, { env: { FORCE_COLOR: "1" } }, (error, stdout, stderr) => {
      if (error) {
        reject(stderr || error); // Error message could be in stderr or error
        return;
      }
      resolve(stdout);
    });
  });
}

// Run tests
async function runTests() {
  try {
    console.log("Running tests...");
    const testOutput = await runCommand("npm test"); // Change this to your test command
    console.log(testOutput); // Log test output
    console.log("Tests passed.");
  } catch (error) {
    console.error("Tests failed:", error);
    process.exit(1); // Exit with a non-zero code to indicate failure
  }
}

// Run tests and build
async function main() {
  try {
    await runTests();
    console.log("Building project...");
    const buildOutput = await runCommand("tsc"); // Change this to your build command
    console.log(buildOutput); // Log build output
    console.log("Build successful.");
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1); // Exit with a non-zero code to indicate failure
  }
}

// Run the main function
main();
