## Assignment 9: Professional Readme Generator
---
### Topic
Node JS

### User Story (Obtained from the assignment description)

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

### Acceptance Criteria (Obtained from the assignment description)

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## My Actions and Notes

* The code base was obtained from the link provided in the assignment page.
* Basic considerations were as follows:
    * Used "input" prompt type for project title, description, Github username, email, contribution and test sections.
    * The license options are obtained from [here](https://choosealicense.com/community/).
    * For installation and usage info sections, there are two input options:
        1. If the user wants to provide detailed instructions with code samples, the application opens an editor where the user can provide multi-line descriptions with code blocks.
        2. If the user wants to write simple instructions, then a "input" prompt appears to capture user input.
    * The walkthrough video demonstrates couple of examples with different user inputs.
    * A sample README file generated using this application can be found in the dist folder.  

### Demo README file generated from this application
[Sample Readme File](./dist/README.md)

### Demo Run
![Demo Run](./assets/images/Demo_assignment9.gif)

### Links of Walkthrough Videos
Since the maximum video length in free Screencastify account is 5 mins, I had to separate the walkthrough video into following three parts:  

[Part 1](https://drive.google.com/file/d/1eb-_tchh8flSuk3UcSqV2hI5f_t0lHeu/view)

[Part 2](https://drive.google.com/file/d/1-F7e3emO26k21G3LkAEguzu58yS8nzjs/view)

[Part 3](https://drive.google.com/file/d/1yVsOw4xjlGmPDOrGv_TonWcyXR7XBPzk/view)