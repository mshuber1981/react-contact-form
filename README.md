[![GitHub Repo stars](https://img.shields.io/github/stars/mshuber1981/react-contact-form?color=%2361dbfb&style=for-the-badge&logo=github)](https://github.com/mshuber1981/react-contact-form/stargazers/)

# React Contact Form

A simple contact form built with [React Bootstrap](https://react-bootstrap.github.io/components/forms/) and powered by [AWS](https://aws.amazon.com/free/).

### <a href="https://mshuber1981.github.io/react-contact-form/">LIVE DEMO</a>

![Contact Form](/images/form.png)

## Getting Started

1. Clone/download
1. Install the dependencies

   - ```bash
     npm i
     ```

1. Start the development server to view the results

   - ```bash
     npm start
     ```

## Setting up the backend

There are a number of different ways to achieve the same end result here. I am familiar with Amazon Web Services so that is the route I chose.

A great article with all of the documentation you will need to get started can be found [here](https://aws.amazon.com/blogs/architecture/create-dynamic-contact-forms-for-s3-static-websites-using-aws-lambda-amazon-api-gateway-and-amazon-ses/).

I will outline the main steps below:

1. Create your [Lambda](https://aws.amazon.com/lambda/) function, I have an example gist [here](https://gist.github.com/mshuber1981/591573070957a6102770ce99dec2f936)
1. Create your [API Gateway](https://aws.amazon.com/api-gateway/), add your new API URL to src/App.js (line 4)

   - ```javascript
     // API Gateway Contact Form endpoint
     const apiUrl = "Your API URL";
     ```

1. Setup Amazon [SES](https://aws.amazon.com/ses/)

## Deploying the frontend

I chose to use GitHub pages for this project. A helpful guide for Create React App deployments with GitHub Pages can be found [here](https://create-react-app.dev/docs/deployment#github-pages).

1. Update the homepage value in package.json (line 3)

   - ```javascript
     "homepage": "https://myusername.github.io/my-app/",
     ```

1. Run the deployment command

   - ```bash
     npm run deploy
     ```

## Donate

Was this helpful? Feeling generous? Please consider donating below.

My [Coinbase](https://www.coinbase.com/) Bitcoin wallet address:

![Bitcoin](/images/bitcoin.png)

[Back to top ⬆](#react-contact-form)

## License

[MIT](https://choosealicense.com/licenses/mit/)
