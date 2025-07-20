"# NhoodResourceSharing" 

1.setup instructions ---once you clone the project from Github you will find you will find server and client folders in main project folder

in editor under --> server  --- run npm install
                                npm install json-server
                                 npx json-server --watch db.json --port 3001
                       
                  client ---- npm install
                              npm run start
                        
2.after testing the project in localserver to build application run in client --npm run build
3.add application  to the Github.
4.open render.com and deploy the application.

2.tech stack---Frontend: React.js
               Backend: Node.js + Express.js
               DB: deployed a db in one application --- https://nhoodresourcesharing.onrender.com/items
               Deployment:  Render

3.APIs ----GET / — List of all items.
           GET /api/items/:id — Get details for a specific item.
           POST /api/AddItem — Add new item .

4.Core Features
          Frontend (React.js)
             Item catalog with search and filter.
             Item details view.
             Add new item form with validation.
             Request to borrow (mocked).
           
5.Issues faced  ---antD is not compatable with react version > 18

                   Project Deployed but website is not loading 
                   Available at your primary URL https://nhresourcesharing.onrender.com
                   Port scan timeout reached, no open HTTP ports detected. If you don't need to receive public HTTP traffic, create a private service instead.


Please find the links below --- https://nhoodresourcesharing.onrender.com/items
                              
                                https://nhresourcesharing.onrender.com

                                https://github.com/Manjula48707/NhoodResourceSharing/tree/main