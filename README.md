# testKeycloak

*Test project for investigation Keycloack authorisation.*

**Keycloak** 
> server allowed to configure identity brokering, create and manage applications and services, and define fine-grained authorization policies, manage users, including permissions and sessions.

***OAuth 2.0  protocol, JWT (JSON Web Token), CORS policy***

**pal-frontend**  is simple frontend React project with content of different security level.

**demo-keycloak-resource** is SpringBoot project, data server with validation by the user role.

There are content available for
                        - all users
                        - authenticated users
                        - authenticated users with role user
                        - authenticated users with role admin

The user is redirected to the authorization page, where they are asked for permissions for the application to work with their account data.

After providing the necessary permissions, the user gets to the callback URL specified during application registration, intended to complete authorization. In this case, the authorization code is inserted into the GET parameters of the address.

The client application server generates a POST request to the API authorization server with the authorization code as a parameter.

The authorization server checks the code and returns the access (refresh) token to the application.

Using the access token, the application logs in to the API server and gets access to the requested user resources.

**Deployment** by docker-compose.yaml
