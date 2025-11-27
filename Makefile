run:
	clear
	sudo npm run dev

build:
	clear
	sudo npm run build

docker-build-staging:
	docker build --build-arg ENV_NAME=staging --platform linux/amd64 -t d1414k/docs:latest .

docker-build-prod:
	docker build --build-arg ENV_NAME=prod --platform linux/amd64 -t d1414k/docs:latest .

docker-run:
	docker run -p 3000:3000 d1414k/docs:latest

docker-push:
	docker push d1414k/docs:latest 

dpush-staging: docker-build-staging docker-push
	@echo "✅ Docker build and push completed successfully!"

dpush-prod: docker-build-prod docker-push
	@echo "✅ Docker build and push completed successfully!"
