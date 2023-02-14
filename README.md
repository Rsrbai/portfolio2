# Rock Paper Scissors Lizard Spock

Rock Paper Scissors Lizard Spock is a variant of the game Rock Paper Scissors, created by the charactor Sheldon in the big bang theory. This game is a good way to showcase the javascript by providing a website which requires user input and outputs data based on the user input. Creating a simple but fun game for anyone to enjoy.

[You can access the project here](https://rsrbai.github.io/portfolio2/)

![Am I responsive image](assets/images/amiresponsive.png)

# Rules of the game

The player makes a pick of their choice of rock, paper, scissors, lizard or spock. The computer then generates a random choice and these choices are compared to see who the winner is. The winners score is incremented by 1, if it is a tie (both player and computer and the same choice) scores do not get incremented.

* The following rules apply:
    - Scissors cuts paper 
    - Paper covers rock
    - Rock crushes lizard
    - Lizard poisons Spock
    - Spock smashes scissors
    - Scissors decapitates lizard
    - Lizard eats paper
    - Paper disproves Spock
    - Spock vaporizes rock
    - Rock crushes scissors

# Features

## Existing Features

* User and comp name tags
* Score keeper for player and comp
* Action message prompting an action
* 5 buttons (one for each of rock, paper, scissors, lizard, spock)
* A user image representing the users choice
* A comp image representing the comps choice
* A results message reinforcing the outcome

![Image of the main website page](assets/images/features.png)

## Future Features

* Giving the user the option to have a best out of 3 or 5 games.
* A Timer to see how many games you can win in a certain amount of time.
* Customizable name

# Testing

## Manual testing

* Test that the correct alert appears for the user clicking rock

![Image of alert after clicking rock](assets/images/test_click_rock.png)

* Test that the rock choice registered and processed correctly

![Image of clicking rock result](assets/images/test_rock.png)

* Test that the correct alert appears for the user clicking paper

![Image of alert after clicking paper](assets/images/test_click_paper.png)

* Test that the paper choice registered and processed correctly

![Image of clicking paper result](assets/images/test_paper.png)

* Test that the correct alert appears for the user clicking scissors

![Image of alert after clicking scissors](assets/images/test_click_scissors.png)

* Test that the scissors choice registered and processed correctly

![Image of clicking scissors result](assets/images/test_scissors.png)

* Test that the correct alert appears for the user clicking lizard

![Image of alert after clicking lizard](assets/images/test_click_lizard.png)

* Test that the lizard choice registered and processed correctly

![Image of clicking paper result](assets/images/test_lizard.png)

* Test that the correct alert appears for the user clicking Spock

![Image of alert after clicking Spock](assets/images/test_click_spock.png)

* Test that the Spock choice registered and processed correctly

![Image of clicking Spock result](assets/images/test_spock.png)

## HTML Validator

In the image below I have two bugs being shown, both duplicate ids in the code.

![Image of HTML validator bugs](assets/images/test_html_validator.png)

To fix this I added div to each element that had the duplicate ID giving more specifity. I then passed my code back through the HTML validator and received no errors or warnings as you can see in the image below.

![Image of HTML validator bug fix](assets/images/test_html_validator_fix.png)

## CSS Validator 

In the image below I have one bug flagged by the W3C CSS validator, this is due to no - in the css rule.

![Image of bug found in CSS validator](assets/images/test_css_validator.png)

To fix this I added the - and passed my code through the validator again and received no errors as shown below

![Image of CSS validator with no errors found](assets/images/test_css_validator_fix.png)


## JS Hint 

As you can see in the image below I have not added the semi-colon to the end of many of the lines of code.

![Image of JShint errors](assets/images/test_JShint.png)

I added the semi-colons where needed and passed my code through the js linter again and received only the warnings about functions in loops as you can see in the picture below.

![Image of JShint no errors](assets/images/test_JShint_fix.png)

## Lighthouse test

Below is a successful lighthouse test carried out in chrome developer tools.

![Image of lighthouse test](assets/images/test_lighthouse.png)

## Responsivsness test

Below is a picture of the website displayed on a mobile device sized window.

![Image of website displayed on mobile](assets/images/r_design1.png)

Below is a picture of the website displayed on a tablet sized window.

![Image of website displayed on tablet](assets/images/r_design2.png)

Below is a picture of the website displayed on a desktop sized window.

![Image of website displayed on desktop](assets/images/r_design3.png)

## Bug

Below is a bug I encountered after passing my code through the HTML linter and correcting the duplicate ID bug, the images are no longer changing when they should.

![Image of bug](assets/images/img_bug.png)

To fix this I correct I changed all of the Javascript code that interacts with the changed html element ID to the correct tag name as seen below.

![Image of bug fix](assets/images/img_bug_fix.png)

## Remaining bugs

There are no known remaining bugs