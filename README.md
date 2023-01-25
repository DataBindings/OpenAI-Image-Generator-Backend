<div id="header" align="center">
  <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="100"/>
</div>

<div id="badges" align="center">
  <a href="https://www.linkedin.com/in/jpedden/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>

# OpenAI Image Generator

OpenAI Image Generator is a nodeJS backend that utilizes DALL-E to create realistic images and art from a description in natural language

## Getting Started

### Dependencies

Project was built with the following dependency versions
* NodeJS Version 19
* Docker Version 20

### Installation

* Get a free API Key at 
  ```
  https://openai.com/
  ```
* Clone the repo
  ```
  git clone https://github.com/jeremiepedden/OpenAI-Image-Generator-Backend
  ```
* Install NPM packages
  ```
  npm install
  ```
* Create file containing OpenAI API Key
  ```
  echo "OPENAI_API_TOKEN = Your API Key" > .env  
  ```
### Executing program

* Running the server
  ```
  npm run start
  ```
* Running the server in development mode ( nodemon )
  ```
  npm run dev
  ```
* Building Docker container
  ```
  docker build . -t <your username>/openai-image-generator
  ```

### Using program
* HTTP method: POST
* Encoding type: multipart/form-data
* Body: 
  * Key: description
  * Value: description of image to create
* Address example
  ```
  0.0.0.0:3001/openai/image-edit-generation
  ```
* cURL example
  ```
  curl --location --request POST '0.0.0.0:3001/openai/image-generation' \
  --form 'description="An illustration of Batman fighting Joker"'
  ```
  
## Version History

* 1.0
    * Initial Release
* 1.0.1
    * Updated readme instructions

## License

This project is licensed under the Apache 2.0 License
