# CapG Retail Project for AEM Tech Challenge

This is a project for AEM application, created using AEM Archetype 23 and tested on AEM 6.5.    
It is built for Capgemini Tech challenge 2020 which can further be extended to develop more custom functionality.    
The use case is: Pandemic driven ecommerce applications.  
The CapG Retail website recognizes that there is an epidemic in certain countries of its operations.  
The website lists products help countering the disease on the home page by overriding the customer’s usual preferences.  

### Author urls to access CapG Retail home page for different countires
India - http://localhost:4502/content/capgretail/india/home.html?wcmmode=disabled  
USA - http://localhost:4502/content/capgretail/usa/home.html?wcmmode=disabled  
Brazil - http://localhost:4502/content/capgretail/brazil/home.html?wcmmode=disabled  
These 3 are the sample country implementations and implemented via MSM (Livecopy and blueprint) feature of AEM  
More countries site can be rolled-out without having to do code/config changes and with the same functionality. 

## Covid API usage and Business rules

* The covid api used for data consumption is - https://rapidapi.com/
* By passing the country name, covid data related to those countries are fetched
* If the total cases per million population for a country is less than 20,000, then men related products are shown for men on the home page and women related products are shown for women on the home page
* If the total cases per million population for a country exceeds 20,000, then covid related products are shown on home page to users overriding their preferences

## Modules

The main parts of the template are:

* **core**: Java bundle containing all core functionality like OSGi services, listeners or schedulers, as well as component-related Java code such as servlets or request filters.
* **ui.apps**: contains the /apps (and /etc) parts of the project, ie JS & CSS clientlibs, components, templates, runmode specific configs as well as Hobbes-tests
* **ui.content**: contains mutable content (not /apps) that is integral to the running of the WKNDMUZIK site. This include template types, templates, policies and base-line organization page and asset structures.
* **ui.tests**: Java bundle containing JUnit tests that are executed server-side. This bundle is not to be deployed onto production.
* **ui.launcher**: contains glue code that deploys the ui.tests bundle (and dependent bundles) to the server and triggers the remote JUnit execution
* **all**: An empty module that embeds the above sub-modules and any vendor dependencies into a single deployable package.

## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

To build all the modules and deploy the `all` package to a local instance of AEM, run in the project root directory the following command:

    mvn clean install -PautoInstallSinglePackage

Or to deploy it to a publish instance, run

    mvn clean install -PautoInstallSinglePackagePublish

Or alternatively

    mvn clean install -PautoInstallSinglePackage -Daem.port=4503

Or to deploy only the bundle to the author, run

    mvn clean install -PautoInstallBundle

Or to deploy only a single content package, run in the sub-module directory (i.e `ui.apps`)

    mvn clean install -PautoInstallPackage

## Testing

Unit test in core: this show-cases classic unit testing of the code contained in the bundle. To test, execute:

    mvn clean test

## ClientLibs

The frontend of the site is made available using [AEM ClientLib](https://helpx.adobe.com/experience-manager/6-5/sites/developing/using/clientlibs.html). 

A ClientLib will consist of the following files and directories:

- `css/`: CSS files which can be requested in the HTML
- `less/`: Component specific less files which will be compiled to css and rendered in HTML
- `css.txt` (tells AEM the order and names of files in `css/` so they can be merged)
- `js/`: JavaScript files which can be requested in the HTML
- `js.txt` (tells AEM the order and names of files in `js/` so they can be merged
- `resources/`: Source maps, static assets (e.g. icons, fonts), etc.

## Maven settings

The project comes with the auto-public repository configured. To setup the repository in your Maven settings, refer to:

    http://helpx.adobe.com/experience-manager/kb/SetUpTheAdobeMavenRepository.html
