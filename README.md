# Contact Me

A simple contact form built with [React Bootstrap](https://react-bootstrap.github.io/forms/overview/), and powered by [AWS](https://aws.amazon.com/free/). Try it out and send me a note.

### <a href="https://mshuber1981.github.io/react-contact-form/">LIVE DEMO</a>

![Contact Form](/README_images/form.png)
![Contact Form](/README_images/aws.png)

## Setting up the backend

There are a number of different ways to achieve the same end result here. I am familiar with Amazon Web Services so that is the route I chose.

A great article with all of the documentation you will need to get started can be found [here](https://aws.amazon.com/blogs/architecture/create-dynamic-contact-forms-for-s3-static-websites-using-aws-lambda-amazon-api-gateway-and-amazon-ses/).

I will outline the main steps below:

1. Setup Amazon [SES](https://aws.amazon.com/ses/)
1. Create your [Lambda](https://aws.amazon.com/lambda/) function (example [here](https://gist.github.com/mshuber1981/591573070957a6102770ce99dec2f936))
1. Create your [API Gateway endpoint](https://aws.amazon.com/api-gateway/)
1. Connect your form to the endpoint URL
