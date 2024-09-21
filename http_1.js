const http = require('http')

const server = http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bitcoin Mempool Space</title>
</head>
<body>
    <header>
        <h1>Bitcoin Mempool Space</h1>
        <p>Explore the full Bitcoin ecosystem</p>
    </header>

    <main>
        <div class="search-form">
            <input type="text" id="searchInput" class="search-input" placeholder="Search transactions..." required>
            <button class="search-button" onclick="validateSearch()">Search</button>
            <p id="errorText" class="error"></p>
        </div>

        <div class="mempool-info">
            <h2>Mempool Insights</h2>
            <div class="transaction">
                <div class="transaction-info">
                    <strong>Transaction Fee:</strong> -82 sat/vB
                    <span class="transaction-time">Estimated in 41 minutes</span>
                </div>
                <strong>Data Size:</strong> 1.81 MB
            </div>

            <div class="transaction">
                <div class="transaction-info">
                    <strong>Transaction Fee:</strong> -90 sat/vB
                    <span class="transaction-time">Estimated in 30 minutes</span>
                </div>
                <strong>Data Size:</strong> 1.70 MB
            </div>

            <div class="transaction">
                <div class="transaction-info">
                    <strong>Transaction Fee:</strong> -97 sat/vB
                    <span class="transaction-time">Estimated in 10 minutes</span>
                </div>
                <strong>Data Size:</strong> 1.79 MB
            </div>

            <div class="transaction">
                <div class="transaction-info">
                    <strong>Transaction Fee:</strong> -111 sat/vB
                    <span class="transaction-time">Estimated in 20 minutes</span>
                </div>
                <strong>Data Size:</strong> 1.69 MB
            </div>

            <h3>Transaction Statistics</h3>
            <p>Total Transactions: 4,520</p>
            <p>Average Block Time: 10.2 minutes</p>
            <p>Difficulty Adjustment: No Priority</p>
        </div>
    </main>

    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h2>Explore</h2>
                <a href="#">Mining Dashboard</a><br>
                <a href="#">Lightning Explorer</a><br>
                <a href="#">Recent Blocks</a><br>
                <a href="#">Broadcast Transaction</a><br>
                <a href="#">Test Transaction</a><br>
                <a href="#">Connect to our Nodes</a><br>
                <a href="#">API Documentation</a>
            </div>
            <div class="footer-section">
                <h2>Learn</h2>
                <a href="#">What is a mempool?</a><br>
                <a href="#">What is a block explorer?</a><br>
                <a href="#">What is a mempool explorer?</a><br>
                <a href="#">Why isn't my transaction confirming?</a><br>
                <a href="#">More FAQs »</a>
            </div>
            <div class="footer-section">
                <h2>Networks</h2>
                <a href="#">Testnet3 Explorer</a><br>
                <a href="#">Testnet4 Explorer</a><br>
                <a href="#">Signet Explorer</a><br>
                <a href="#">Liquid Testnet Explorer</a><br>
                <a href="#">Liquid Explorer</a>
            </div>
            <div class="footer-section">
                <h2>Legal</h2>
                <a href="#">Terms of Service</a><br>
                <a href="#">Privacy Policy</a><br>
                <a href="#">Trademark Policy</a><br>
                <a href="#">Third-party Licenses</a>
            </div>
        </div>
    </footer>
    
    <footer class="footer">
        <p>&copy; 2024 Mempool Space Tracker. All rights reserved.</p>
    </footer>
<style>
    body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

header {
    background-color: #ea3838;
    color: white;
    padding: 20px;
    text-align: center;
}

main {
    padding: 20px;
    max-width: 1000px;
    margin: auto;
}

.mempool-info {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.mempool-info h2 {
    margin-top: 0;
}

.transaction {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
    background-color: #eaeaea;
    border-radius: 4px;
}

.transaction-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.transaction-time {
    font-size: 0.9em;
    color: #666;
}

/* General footer styling */
footer {
    background-color: #5bb2c0;
    color: white;
    padding: 20px;
    text-align: center;
}

.footer-container {
    display: flex;
    justify-content: space-between; /* Space between sections */
    flex-wrap: wrap; /* Ensures sections wrap on smaller screens */
    max-width: 1200px;
    margin: auto;
}

.footer-section {
    flex: 1 1 200px; /* Flex-grow, flex-shrink, minimum width */
    margin: 10px;
    padding: 10px;
    text-align: left;
}

.footer-section h2 {
    color: #f3f2ec;
}

.footer-section a {
    color: #0c0801;
    text-decoration: none;
    display: block;
    margin: 5px 0;
}

.footer-section a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .footer-container {
        flex-direction: column; /* Stack sections vertically on small screens */
    }
    .footer-section {
        text-align: center;
    }
}


.footer {
    text-align: center;
    padding: 20px;
    background-color: #94e3a1;
    color: white;
    position: relative;
    bottom: 0;
    width: 100%;
}

.search-form {
    margin-bottom: 20px;
}

.search-input {
    padding: 10px;
    width: calc(100% - 100px);
    border: 1px solid #ccc;
    border-radius: 4px;
}

.search-button {
    padding: 10px;
    background-color: #1fafbe;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.error {
    color: red;
    margin-top: 10px;
}

</style>
    <script >
        // Validate search input
function validateSearch() {
    const input = document.getElementById("searchInput");
    const errorText = document.getElementById("errorText");

    if (input.value.trim() === "") {
        errorText.textContent = "Please enter a search term.";
    } else {
        errorText.textContent = ""; // Clear error message
        // Proceed with search or API call
        console.log("Searching for:", input.value);
        // Add code for search handling here
    }
}

// Function to update mempool info dynamically
function updateMempoolInfo(data) {
    const mempoolInfo = document.querySelector('.mempool-info');

    // Clear existing content
    mempoolInfo.innerHTML = '<h2>Mempool Insights</h2>';

    // Iterate over transactions to dynamically create DOM elements
    data.transactions.forEach(transaction => {
        const transactionDiv = document.createElement('div');
        transactionDiv.classList.add('transaction');

        transactionDiv.innerHTML = `
            <div class="transaction-info">
                <strong>Transaction Fee:</strong> ${transaction.fee} sat/vB
                <span class="transaction-time">Estimated in ${transaction.estimatedTime}</span>
            </div>
            <strong>Data Size:</strong> ${transaction.dataSize} MB
        `;
        
        mempoolInfo.appendChild(transactionDiv);
    });

    // Update statistics
    const stats = document.createElement('div');
    stats.innerHTML = `
        <h3>Transaction Statistics</h3>
        <p>Total Transactions: ${data.totalTransactions}</p>
        <p>Average Block Time: ${data.averageBlockTime} minutes</p>
        <p>Difficulty Adjustment: ${data.difficultyAdjustment}</p>
    `;
    
    mempoolInfo.appendChild(stats);
}

// Function to simulate fetching mempool data
async function fetchMempoolData() {
    console.log("Fetching mempool data...");
    // Example data structure, replace with actual API call
    const sampleData = {
        transactions: [
            { fee: "-82", estimatedTime: "41 minutes", dataSize: "1.81" },
            { fee: "-90", estimatedTime: "30 minutes", dataSize: "1.70" },
            { fee: "-97", estimatedTime: "10 minutes", dataSize: "1.79" },
            { fee: "-111", estimatedTime: "20 minutes", dataSize: "1.69" }
        ],
        totalTransactions: 4520,
        averageBlockTime: 10.2,
        difficultyAdjustment: "No Priority"
    };
    updateMempoolInfo(sampleData);
}

// Fetch data on page load and set interval for updates
window.onload = fetchMempoolData;
setInterval(fetchMempoolData,  1 * 1000); // Refresh every 15 minutes

    </script>
</body>
</html>
`)
   
    res.end()
})

server.listen(9000, ()=>{
    console.log("Server is running @ http://localhost:4907")
})