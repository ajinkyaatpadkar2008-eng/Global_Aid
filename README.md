# Global Aid — Make a Difference

A lightweight humanitarian crowdfunding **educational demo** built with HTML, CSS and vanilla JavaScript. It uses one shared `localStorage` key (`globalAidData`) and has no backend, build step, npm dependency or real payment processing.

## Run it
1. Extract `Global_Aid_Complete_Project.zip`.
2. Open the extracted `Global_Aid` folder in VS Code.
3. Install/enable the VS Code **Live Server** extension if needed.
4. Right-click the root `Global_Aid` folder's `User Website/index.html` and choose **Open with Live Server**. For shared data, the important point is that both sites must use the **same origin**. Recommended: start Live Server from the project root (open `Global_Aid/index.html` if present, or use Live Server's server root setting to make `Global_Aid` the root), then visit:
   - `http://127.0.0.1:5500/User%20Website/index.html`
   - `http://127.0.0.1:5500/Admin%20Website/index.html`
5. If Live Server opens a directory listing, choose the appropriate website folder. Do not launch each subfolder on a different port: browser LocalStorage is isolated by origin.

## Demo admin login
- Email: `admin@globalaid.demo`
- Password: `GlobalAid@123`

## Shared demo data
Both websites read and write the same browser LocalStorage key, `globalAidData`. User registrations, AZ wallet balances, campaigns, contributions, transactions, moderation decisions, verification levels and the demo admin session are stored there. New accounts receive 10,000 AZ demo credits. Guest visitors receive a 1,000 AZ one-time demo contribution allowance per browser.

## Reset demo data
Use **Reset demo data** in Admin → Settings, or open browser developer tools → Application/Storage → Local Storage for the Live Server origin and delete `globalAidData`, then refresh. The app will reseed sample data.

## Important demo notice
AZEITH (AZ) is fictional and has no monetary value. Contributions are simulated only. No payment gateway, bank details or real financial information are used. This prototype is intended for learning and demonstration, not production fundraising.
