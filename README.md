# 📌 Banking Application Flowchart

This repository contains a flowchart that illustrates the **user interaction and logic flow** of a banking application. It visually represents key operations such as logging in, transferring money, requesting a loan, sorting transactions, and closing an account.

## 🖼️ Flowchart Overview
The flowchart describes the logical sequence of operations in the banking app:

### **1️⃣ User Login Process**
- Users enter credentials.
- If credentials are correct ✅, the UI and welcome message are displayed.
- The balance, summary, and transactions are calculated and displayed.
- A logout timer is started to automatically log out inactive users.

### **2️⃣ Money Transfer**
- The user initiates a transfer.
- A **negative movement** is added to the sender’s account.
- A **positive movement** is added to the recipient’s account.
- The UI is updated accordingly.

### **3️⃣ Loan Request**
- If the user has a deposit greater than **10% of the loan amount**, the loan is approved.
- A **positive movement** is added to the user’s account.
- The UI updates accordingly.

### **4️⃣ Sorting Transactions**
- The user sorts transactions.
- If the transactions are **not already sorted**, they are arranged accordingly.

### **5️⃣ Account Closure**
- The user requests to close the account.
- If credentials are correct ✅, the user’s data is deleted.
- The user is logged out and the UI is hidden.

### **6️⃣ Auto Logout**
- If the logout timer expires, the user is automatically logged out, and the UI is hidden.

## 🔧 Technologies Used
- **Flowchart Tool**: Draw.io
- **File Format**: PNG / SVG
- **Version Control**: Git & GitHub
- **Programming Languages**: JavaScript, HTML, CSS

## 📂 Repository Structure
```
├── README.md   # Project documentation
├── flowchart.png   # Banking system flowchart
├── index.html   # Main HTML file
├── style.css   # CSS file for styling
├── script.js   # JavaScript logic for the banking app
├── logo.png   # Logo of the banking app
```

## 🚀 How to Use
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/banking-app.git
   ```
2. Open **index.html** in your browser to access the banking app.
3. Open the **flowchart.png** file to view the flow of the banking system.

## 📌 Future Improvements
- Enhance the UI representation in the flowchart.
- Add interactive elements using Figma or an SVG-based tool.
- Provide a detailed explanation for each step.
- Implement additional security features like 2FA.

## 📝 License
This project is licensed under the **MIT License**.
