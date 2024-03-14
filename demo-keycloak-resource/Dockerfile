#
# Build stage
#
FROM maven:latest AS build
COPY demo-keycloak-resource/src /home/app/src
COPY demo-keycloak-resource/pom.xml /home/app
RUN mvn -f /home/app/pom.xml compile package

#
# Package stage
#
FROM openjdk:11-jre-slim
COPY --from=build /home/app/target/demo-keycloak-resource.jar demo-keycloak-resource.jar
EXPOSE 5450
ENTRYPOINT ["java", "-jar", "demo-keycloak-resource.jar"]