1. Create an Nginx docker which will return "Hello Fxempire" as index. Call it "proxy".
Example:
# curl http://localhost
"Hello Fxempire"


2. Create a docker-compose which will build and deploy the Nginx docker from the previous assignment and a second service call webapp.
The docker for webapp can be here https://hub.docker.com/r/tutum/hello-world/


3. Configure the Nginx to proxy /app requests to the webapp container.
Example (the actual output will also contain HTML):
# curl http://localhost/app
Hello World


4. Make sure that the webapp container is accessible on port 80 only from the proxy.

5. Write a script that will deploy the containers and send a health check to /app endpoint every 10 seconds.
The script will print the endpoint status - "Endpoint up" or "Endpoint down".
The script should run continuously until user interruption.
Expected Result:
The user should be able to run the deployment script and see the endpoint health check output on the screen.
