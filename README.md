# Mixed Languages Azure Functions
This repo shows how you can use multiple different programming languages in a single Azure Functions service.
You can even mix compiled (C#) and non-compiled / script languages (like JS, PHP etc.). 

I started out creating a Visual Studio Solution + Project for my C# code. Put every function in its own folder since this way you can specify a `function.json`for each language. 

Adding other languages is easy using Visual Studio Code. Having installed the Azure Functions extension it will recognize your source folder as a Function App (by the host.json). Now you can add new functions in other languages.

If you want to use git deployment through Kudu you'll need to copy the newly created files to the output folder by setting "Copy to Output Directory" to "Copy always" in Visual Studio. Usually you need to do this for each `function.json` as well as the actual script file (like `index.js`or `run.csx`).

