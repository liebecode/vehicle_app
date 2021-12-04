#### App description:
Displays a list of vehicles for both GO NOW and TRAVEL NOW vehicles.
Vehicles are loaded via JSON from the server found in the files `Server/go-now/vehicles.json` and `Server/travel-now/vehicles.json`.
List is filled with vehicle-information provided by the API.
App renders a map for each vehicle to show the vehicles from the list.

#### Get a list of all GO NOW vehicles:
/go-now/vehicles

#### Get a list of all TRAVEL NOW vehicles:
/travel-now/vehicles

#### Example call to the server to retrieve vehicles:
To get the TRAVEL NOW vehicles for example you can call: http://localhost:5011/travel-now/vehicles

#### Start the app without Docker:
From '/FE', run 'npm i'.
From '/Server', run 'npm i', then 'npm run dev'

#### Start the app with Docker:
From '/FE', run 'npm i'.
From '/Server', run 'npm i'.
From '/vehicle_app', run 'docker compose up'
