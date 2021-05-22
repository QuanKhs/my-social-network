# my-social-network using Nodejs MongoDB Express React

## Installation

### clone project

    ```bash
    $ docker build . -t <my-social-network>/node-web-app
    ```

### without Docker

    ```bash
    $ npm install
    ```

### with Docker

- Building image
    ```bash
    $ docker build . -t <my-social-network>/node-web-app
    ```
- Run the image
    ```bash
    $ docker run -p 49160:5000 -d <my-social-network>/node-web-app
    ```
Running on http://localhost:5000 