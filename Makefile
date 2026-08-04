run:
	clear
	sudo npm run dev

build:
	clear
	sudo npm run build

docker-build-staging:
	docker build --build-arg ENV_NAME=staging --platform linux/amd64 -t registry.agentblit.com/datablit/docs:latest .

docker-build-prod:
	docker build --build-arg ENV_NAME=prod --platform linux/amd64 -t registry.agentblit.com/datablit/docs:latest .

docker-run:
	docker run -p 3000:3000 registry.agentblit.com/datablit/docs:latest

docker-push:
	docker push registry.agentblit.com/datablit/docs:latest

dpush-staging: docker-build-staging docker-push
	@echo "✅ Docker build and push completed successfully!"

dpush-prod: docker-build-prod docker-push
	@echo "✅ Docker build and push completed successfully!"
